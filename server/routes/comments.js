const express = require('express');
const db = require('../db/commentDB');

const router = express.Router();
module.exports = router;

router.use('/:id', (req, res) => {
  const id = Number(req.params.id);
  console.log('comment id', id)
  db.getComment(id)
    .then(result => {
      res.status(200).json(result).send();
    })
    .catch(err => {
      console.error(err);
    });
})

router.use('/thread/:id', (req, res) => {
  const id = Number(req.params.id);
  db.getCommentThread(id)
    .then(result => {
      res.status(200).json(result).send();
    })
    .catch(err => {
      console.log(err);
    })
})