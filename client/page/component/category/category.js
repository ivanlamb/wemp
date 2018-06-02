Page({
  data: {
    category: [
      { name: '饮料', id: 'tixu' },
      { name: '小吃', id: 'maoyi' },
      { name: '服务', id: 'fengyi' },
      { name: '礼物', id: 'xizhuang' },
      { name: '其他', id: 'kuzi' },
      { name: '会員', id: 'qunzi' }
    ],
    detail: [],
    curIndex: 0,
    isScroll: false,
    toView: 'tixu'/*默认定位到哪个view*/
  },


  onReady() {
    var self = this;
    wx.request({
      url: '../category/get_all', success(res) {
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