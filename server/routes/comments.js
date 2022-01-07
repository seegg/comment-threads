const express = require('express');
const db = require('../db/commentDB');

const router = express.Router();
module.exports = router;

/**
 * Get comment chain.
 */
router.get('/thread/:id', (req, res) => {
  const id = req.params.id;
  console.log('thread', id);
  db.getCommentThread(id)
    .then(result => {
      //pick specific properties to send.
      res.status(200).json(result.map(({ id, date, parent_id, comment }) => ({ id, date, parent_id, comment })));
      return;
    })
    .catch(err => {
      console.log(err);
    })
});

/**
 * Get a specific comment.
 */
router.get('/id/:id', (req, res) => {
  const id = Number(req.params.id);
  console.log('comment id', id)
  db.getComment(id)
    .then(result => {
      res.status(200).json(result);
      return;
    })
    .catch(err => {
      console.error(err);
    });
});


/**
 * Add a comment, either as a new thread or a reply to an existing comment.
 */
router.post('/', (req, res) => {
  let comment = req.body;
  comment.date = new Date().getTime();
  if (comment.parent_id) {
    db.getComment(Number(comment.parent_id))
      .then(([{ order }]) => {
        comment.order = order ? order + `${comment.parent_id}-` : `-${comment.parent_id}-`;
        return comment;
      })
      .then(result => {
        return db.addComment(result);
      })
      .then(_ => {
        res.status(201).send();
      })
      .catch(err => {
        console.error(err);
        res.status(422).send();
      });
  } else {
    db.addComment(comment)
      .then(_ => {
        res.status(201).send();
      })
      .catch(err => {
        console.error(err);
        res.status(422).send();
      })
  }
})