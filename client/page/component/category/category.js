Page({
  data: {
    category: [
      { cata_id: '0', cata_desc: '主餐', cata_type: 'Main'},
      { cata_id: '1', cata_desc: '頭盤', cata_type: 'Main' },
      { cata_id: '2', cata_desc: '飲料', cata_type: 'Main' },
      { cata_id: '999', cata_desc: '其他', cata_type: 'Main'}
    ],
    detail: [
      { item_pic_url: 'https://44ln6hzr.qcloud.la/images/menuitems/0.jpeg', item_short_desc: '宫保鸡丁', item_price: '50' },
      { item_pic_url: 'https://44ln6hzr.qcloud.la/images/menuitems/1.jpeg', item_short_desc: '生炒排骨', item_price: '40' },
      { item_pic_url: 'https://44ln6hzr.qcloud.la/images/menuitems/2.jpeg', item_short_desc: '土雞蛋炒蝦仁', item_price: '35' },
      { item_pic_url: 'https://44ln6hzr.qcloud.la/images/menuitems/3.jpeg', item_short_desc: '椒鹽九肚魚', item_price: '60' }
    ],
    curIndex: 0,
    isScroll: false,
    toView: '0'/*默认定位到哪个view*/
  },


  onReady() {
    var that = this;
    wx.request({
      url: 'http://44ln6hzr.qcloud.la/weapp/selectCata', 
      success(res) {
        //console.log(res.data.data)
        //console.log(that.data.category)
        that.setData({
          //detail: res.data
          category: res.data.data
        })
        //console.log(that.data.category)
      }
    });
  },

  switchTab(e) {
    const self = this;
    this.setData({
      isScroll: true
    })
    setTimeout(function () {
      self.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
      })
    }, 0)
    setTimeout(function () {
      self.setData({
        isScroll: false
      })
    }, 1)

  }

})