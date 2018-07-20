Page({
  data: {
    category: [
      { cata_id: '0', cata_desc: '主餐', cata_type: 'Main'},
      { cata_id: '1', cata_desc: '頭盤', cata_type: 'Main' },
      { cata_id: '2', cata_desc: '飲料', cata_type: 'Main' },
      { cata_id: '999', cata_desc: '其他', cata_type: 'Main'}
    ],
    detail: [
      { item_pic_url: '../../../images/menuitems/0.jpeg', item_short_desc: '宫保鸡丁', item_price: '50' },
      { item_pic_url: '../../../images/menuitems/1.jpeg', item_short_desc: '生炒排骨', item_price: '40' },
      { item_pic_url: '../../../images/menuitems/2.jpeg', item_short_desc: '土雞蛋炒蝦仁', item_price: '35' },
      { item_pic_url: '../../../images/menuitems/3.jpeg', item_short_desc: '椒鹽九肚魚', item_price: '60' }
    ],
    curIndex: 0,
    isScroll: true,
    counter1: 0,
    toView: '0'/*默认定位到哪个view*/
  },


  onReady() {
    var that = this;
    wx.request({
      url: 'http://44ln6hzr.qcloud.la/weapp/selectCata', 
      success(res) {
        that.setData({
          category: res.data.data
        })
        console.log(that.data.category)
      }
    });

    wx.request({
      url: "http://44ln6hzr.qcloud.la/weapp/selectCataItem?curIndex=",
      data: {
        curIndex: that.data.curIndex
      },
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        that.setData({
          detail: res.data.data
        })
      }
    });
  },

  switchTab(e) {
    var that = this;
    this.setData({
      isScroll: true
    })
    //setTimeout(function () {
    console.log("HELLLLLLL", this.data.curIndex)
    console.log("HELLLLLLL", this.data.detail)
      that.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
      })
    //}, 0)
    //that.updateCataItem

      wx.request({
        url: "http://44ln6hzr.qcloud.la/weapp/selectCataItem?curIndex=",
        data: {
          curIndex: e.target.dataset.index
        },
        method: 'GET',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          that.setData({
            detail: res.data.data
          })
        }
      })


    console.log("HELLLLLLL", this.data.curIndex)
    console.log("HELLLLLLL", this.data.detail)
  },

  updateCataItem() {
    var that = this;
    console.log("HELLLLLLL")
    wx.request({
      url: "http://44ln6hzr.qcloud.la/weapp/selectCataItem?curIndex=",
      data: {
        curIndex: that.data.curIndex
      },
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        that.setData({
          detail: res.data.data
        })
      }
    })
  },

  addButton1: function (e) {
    var that = this;
    that.setData({
      counter1: that.data.counter1 + 1
    })
    console.log('counter1:', that.data.counter1)
  },

  minusButton1: function (e) {
    var that = this;
    that.setData({
      counter1: that.data.counter1 - 1
    })
    console.log('counter1:', that.data.counter1)
  }
})