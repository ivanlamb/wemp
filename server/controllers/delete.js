module.exports = ctx => {
  ctx.state.data = {
    msg: 'Hello World'
  }
}

const { mysql } = require('../qcloud')
const uuid = require('node-uuid')

module.exports = async ctx => {
  var id = uuid.v1()

  await mysql("customer").del().where({ c_name: 'ALVIN' })

  ctx.state.data = "ok" 
}