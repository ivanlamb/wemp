module.exports = ctx => {
  ctx.state.data = {
    msg: 'Hello World'
  }
}

const { mysql } = require('../qcloud')
const uuid = require('node-uuid')

module.exports = async ctx => {

  var id = uuid.v1();

  // 增 cts.request.body
  // cts.query
  // cts.querystring
  var mycustomer = {
    c_id: id,
    c_name: ctx.query.x,
    c_balance: ctx.query.y
  }
  await mysql("customer").insert(mycustomer)
 
  ctx.state.data = "ok" 
}
