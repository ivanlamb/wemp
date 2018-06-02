//wx.getSystemInfo({
//  success: function (res) {
//    that.setData({
//      clientHeight: res.windowHeight
//    })
//  }
//}),


Page({
  
  data: {
    APII_title: "APII First TestPage",
    sec1:"1",
    sec2:"2",
    sec3:"3"
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
