const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/twitter', require('./twitter'))

router.use((req, res, next) => {
  const error = new Error('Not Found, weirdo')
  error.status = 404
  next(error)
})
