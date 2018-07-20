module.exports = ctx => {
  ctx.state.data = {
    msg: 'Hello World'
  }
}

const { mysql } = require('../qcloud')
const uuid = require('node-uuid')

module.exports = async ctx => {
  var id = uuid.v1()
  var res = await mysql("apii_Catagory").select('cata_id','cata_desc','cata_type').then(res => {
    console.log(res)
    ctx.state.data = res;
  })

  //ctx.state.data = "ok" 
}
