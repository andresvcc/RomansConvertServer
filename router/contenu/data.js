const express = require('express');

const router = express.Router();

router

  .post('/', async (req, res) => {
    const a = 0;

    return res.send({ val: a });
  });

module.exports = router;
