//wx.getSystemInfo({
//  success: function (res) {
//    that.setData({
//      clientHeight: res.windowHeight
//    })
//  }
//}),

//Updated my Paul Kwok

Page({
  
  data: {
    APII_title: "APII First TestPage",
    sec1:"1",
    sec2:"2",
    sec3:"3",
    counter1:0,
    counter2:0,
    response:"OK",
    selectData:'',
  },
  
  updateText: function (e) {
    var that = this;
    that.setData({
      response: e.detail.value
    })
    console.log('response:', that.data.response)
  },

  addButton1: function (e) {
    var that = this;
    that.setData({
      counter1: that.data.counter1+1
    })
    console.log('counter1:', that.data.counter1)
  },

  minusButton1: function (e) {
    var that = this;
    that.setData({
      counter1: that.data.counter1-1
    })
    console.log('counter1:', that.data.counter1)
  },

  addButton2: function (e) {
    var that = this;
    this.setData({
      counter2: that.data.counter2+1
    })
    console.log('counter2:', that.data.counter2)
  },

  minusButton2: function (e) {
    var that = this;
    that.setData({
      counter2: that.data.counter2-1
    })
    console.log('counter2:', that.data.counter2)
  },

  submitButton: function (e) {
    var that = this;
    wx.request({
      url: 'http://44ln6hzr.qcloud.la/weapp/insert', 
      data: {
        x: that.data.counter1,
        y: that.data.counter2
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log('Value Inserted')
      }
    })
  },

  queryButton: function () {
    var that = this;
    wx.request({
      url: 'http://44ln6hzr.qcloud.la/weapp/select', //仅为示例，并非真实的接口地址

      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          selectData: res.data
        });
      }
    })
  },
  
  formSubmit: function (e) {
    //console.log('form发生了submit事件，携带数据为：', e.detail.value)

    wx.navigateTo({
      url: '../addCgi/addCgi'
    });
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})
