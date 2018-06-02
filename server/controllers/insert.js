module.exports = ctx => {
  ctx.state.data = {
    msg: 'Hello World'
  }
}

const { mysql } = require('../qcloud')
const uuid = require('node-uuid')

module.exports = async ctx => {
  var id = uuid.v1()
  // 增
  var mycustomer = {
    c_id: id,
    c_name: "ALVIN",
    c_balance: 88
  }
  await mysql("customer").insert(mycustomer)
 
  ctx.state.data = "ok" 
}