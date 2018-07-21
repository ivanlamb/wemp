module.exports = ctx => {
  ctx.state.data = {
    msg: 'Hello World'
  }
}

const { mysql } = require('../qcloud')
const uuid = require('node-uuid')

module.exports = async ctx => {
  var id = uuid.v1()
  var c_signature = ctx.query.signature
  var res = await mysql("apii_Orderview").select('cin_custname', 'order_qty', 'item_price', 'amount', 'item_short_desc', 'item_long_desc').where({cin_custname: c_signature}).then(res => {
    console.log(res)
    ctx.state.data = res;
  })

  //ctx.state.data = "ok" 
}
