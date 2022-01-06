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
    andWhere('order', 'like', `%-${id}%-`);
};

module.exports = {
  getComment,
  getCommentThread
};