// page/component/new-pages/cart/cart.js
Page({
  
  data: {
    cartsitem: [
      { cin_custname: 'kwokkawai', order_qty: 1, item_price: 40, amount: 40, item_short_desc: '生炒排骨', item_long_desc: '生炒排骨' },
      { cin_custname: 'kwokkawai', order_qty: 1, item_price: 35, amount: 35, item_short_desc: '土雞蛋炒蝦仁', item_long_desc: '土雞蛋炒蝦仁' },
      { cin_custname: 'kwokkawai', order_qty: 1, item_price: 60, amount: 60, item_short_desc: '椒鹽九肚魚', item_long_desc: '椒鹽九肚魚' }
    ],
    curIndex: 0,
    isScroll: true,
    counter1: 0,
    toView: '0',/*默认定位到哪个view*/
    signature: '',
    userInfo: '',
    totalPrice: 0
  },

  onShow () {
    var that = this;
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              that.setData({
                signature: res.signature,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
    wx.request({
      url: 'http://44ln6hzr.qcloud.la/weapp/selectOrderView',
      data: {
        signature: that.data.signature
      },
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        that.setData({
          cartsitem: res.data.data
        })
      }
    });
    that.getTotalPrice();
  },

  getTotalPrice() {
    var that = this;
    let carts = that.data.cartsitem;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < carts.length; i++) {         // 循环列表得到每个数据
      total += carts[i].order_qty * carts[i].item_price;   // 所有价格加起来
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      totalPrice: total.toFixed(2)
    });
  }

})