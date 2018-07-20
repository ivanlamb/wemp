var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({

  data: {
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function () {
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res)
              console.log(res.signature)
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  
  bindGetUserInfo: function (e) {
    console.log(e.detail.signature)
    console.log(e.detail.userInfo)
  },

  getPhoneNumber: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  },

  login: function () {
    console.log(config.service.requestUrl)
    qcloud.request({
      url: config.service.requestUrl,
      login: true,
      success(result) {
        util.showSuccess('登录成功')
        that.setData({
          userInfo: result.data.data,
          logged: true
        })
      }
    })
  }

})