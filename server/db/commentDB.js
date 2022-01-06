const connection = require('.connection');

//get a single comment base on id
const getComment = (id, db = connection) => {
  return db('comment').where({ id }).select();
};

//get a comment and it's replies.
const getCommentThread = (id, db = connection) => {
  return db('comment').
    where({ id }).
    andWhere('order', 'like', `%-${id}%-`);
}