const axios = require('axios')

const instance = axios.create({
  baseURL: `http://${process.env.HOST} || 'localhhost'}:${process.env.PORT||3000}`,
  timeout: 1000,
  headers: {

  }
})

module.exports = instance
