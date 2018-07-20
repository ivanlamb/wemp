const { mysql } = require('../qcloud')
const uuid = require('node-uuid')

module.exports = async ctx => {
  var id = uuid.v1()
  var c_index = ctx.query.curIndex
  var res = await mysql("apii_ItemMenu").select('item_pic_url', 'item_short_desc', 'item_price').where({item_main_cata: c_index}).then(res => {
    console.log(res)
    ctx.state.data = res;
  })

  //ctx.state.data = "ok" 
}
