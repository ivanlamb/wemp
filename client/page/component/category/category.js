Page({
  data: {
    category: [
      { name: '主餐', id: 'zc0' },
      { name: '頭盤', id: 'tp1' },
      { name: '飲料', id: 'yl2' },
      { name: '其他', id: 'qt999'}
    ],
    detail: [],
    curIndex: 0,
    isScroll: false,
    toView: 'zc0'/*默认定位到哪个view*/
  },


  onReady() {
    var self = this;
    wx.request({
      url: 'http://44ln6hzr.qcloud.la/weapp/selectCata', 
      success(res) {
        console.log(res.data)
        self.setData({
          detail: res.data
        })
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