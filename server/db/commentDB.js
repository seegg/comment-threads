const connection = require('./connection');

//get a single comment base on id
function getComment (id, db = connection) {
  return db('comment').where({ id }).select();
};

//get a comment and it's replies.
const getCommentThread = (id, db = connection) => {
  //SELECT * FROM comment WHERE id = id AND order LIKE '%-id-%'
  return db('comment').
    where({ id }).
    orWhere('order', 'like', `%-${id}-%`)
    .select('id', 'parent_id', 'date', 'comment');
};

module.exports = {
  getComment,
  getCommentThread
};