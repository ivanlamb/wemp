module.exports = ctx => {
  ctx.state.data = {
    msg: 'Hello World'
  }
}

const { mysql } = require('../qcloud')
const uuid = require('node-uuid')

module.exports = async ctx => {
  var id = uuid.v1()
  
  // 改
  await mysql("customer").update({ c_balance: 66 })

  //ctx.state.data = "ok" 
}