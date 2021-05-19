const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {  //next - to continue query execution
  if (req.method === 'OPTIONS') { //checking the availability of the server, if 'OPTIONS' continue requesting (REST API)
    return next()
  }

  try {
    const token = req.headers.authorization.split(' ')[1] // "Bearer TOKEN"
    if (!token) {
      return res.status(401).json({ message: 'No authorization'})
    }

    const decoded = jwt.verify(token, config.get('jwtSecret'))
    req.user = decoded
    next()
  } catch (e) {
    res.status(401).json({ message: 'No authorization'})
  }
}