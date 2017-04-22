const router = require('express').Router();

router.use('*', (req, res) => {
  res.send('yes');
});

module.exports = router;
