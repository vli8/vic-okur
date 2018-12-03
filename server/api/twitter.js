const router = require('express').Router()
const Twit = require('twit')
module.exports = router

if (process.env.NODE_ENV !== 'production') require('../../secrets')

const T = new Twit({
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_API_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
})

// const params = {
//   q: 'finna',
//   count: 10,
//   lang: 'en',
//   result_type: 'mixed'
// }

// function gotData(err, data, response) {
//   const tweetsArr = []
//   if (err) {
//     console.log(err)
//   }
//   const tweets = data.statuses
//   // console.log(tweets)
//   for (let i = 0; i < tweets.length; i++) {
//     console.log(tweets[i].created_at)
//     tweetsArr.push(tweets[i])
//   }
//   console.log(tweetsArr)
//   return tweetsArr
// }
// T.get('search/tweets', params, gotData)

router.get('/', async (req, res, next) => {
  try {
    const params = {
      q: 'finna',
      count: 10,
      lang: 'en',
      result_type: 'mixed'
    }
    T.get('search/tweets', params, function gotData(err, data, response) {
      const tweetsArr = []
      if (err) console.log(err)
      const tweets = data.statuses
      for (let i = 0; i < tweets.length; i++) {
        tweetsArr.push({
          name: tweets[i].user.screen_name,
          text: tweets[i].text,
          time: tweets[i].created_at,
          followers: tweets[i].user.followers_count,
          location: tweets[i].user.location
        })
      }
      res.json(tweetsArr)
    })
  } catch (err) {
    next(err)
  }
})
