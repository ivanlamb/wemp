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
    c_name: "AL",
    c_balance: 88
  }
  //await mysql("customer").insert(mycustomer)
  // 查
  var res = await mysql("customer").select('c_name').then(res => {
    console.log(res)
    ctx.state.data = res;
  })
  // 改
  //await mysql("customer").update({ price: 66 }).where({ c_id })
  await mysql("customer").update({ c_balance: 66 })
  // 删
  //await mysql("customer").del().where({ c_id })

  //ctx.state.data = "ok" 
}