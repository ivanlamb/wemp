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
    selectData:''
  },
  
  updateText: function (e, text1) {
    this.setData({
      response: text1
    })
  },

  addButton1: function (e) {
    counter1: 0
    this.setData({
      counter1: this.counter1+1
    })
    console.log('counter1:', this.counter1)
  },

  minusButton1: function (e) {
    counter1: 0
    this.setData({
      counter1: this.counter1-1
    })
    console.log('counter1:', this.counter1)
  },

  addButton2: function (e) {
    counter2: 0
    this.setData({
      counter2: this.counter2+1
    })
    console.log('counter2:', this.counter2)
  },

  minusButton2: function (e) {
    counter2: 0
    this.setData({
      counter2: this.counter2-1
    })
    console.log('counter2:', this.counter2)
  },

  submitButton: function (e) {
    wx.request({
      url: 'http://44ln6hzr.qcloud.la/weapp/insert', 
      data: {
        x: this.counter1,
        y: this.counter2
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
