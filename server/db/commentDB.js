const connection = require('./connection');

//get a single comment base on id
function getComment (id, db = connection) {
  return db('comment').where({ id }).select();
};

//get a comment and it's replies.
const getCommentThread = (id, db = connection) => {
  //SELECT * FROM comment WHERE id = id AND order LIKE '%-id-%'
  return db('comment')
    .where({ id })
    .orWhere('order', 'like', `%-${id}-%`)
};

const addComment = (comment, db = connection) => {
  return db('comment')
    .insert(comment);
}

/**
 * Set the content of the comment to '[deleted]'
 * or alternatively have a flag to indicate whether a comment is deleted or not
 * while keepign the original comment intact.
 */
const deleteComment = (id, db = connection) => {
  return db('comment')
    .update({ comment: '[deleted]' })
    .where('id', id);
}

module.exports = {
  getComment,
  getCommentThread,
  addComment,
  deleteComment
};