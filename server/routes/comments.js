const express = require('express');
const db = require('../db/commentDB');

const router = express.Router();
module.exports = router;

router.get('/thread/:id', (req, res) => {
  const id = req.params.id;
  console.log('thread', id);
  db.getCommentThread(id)
    .then(result => {
      console.log('result', result);
      res.json(result).send();
      return;
    })
    .catch(err => {
      console.log(err);
    })
});

router.get('/id/:id', (req, res) => {
  const id = Number(req.params.id);
  console.log('comment id', id)
  db.getComment(id)
    .then(result => {
      res.status(200).json(result).send();
      return;
    })
    .catch(err => {
      console.error(err);
    });
});