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
    toView: '0'/*默认定位到哪个view*/
  },

  onReady() {
    var that = this;
    wx.request({
      url: 'http://44ln6hzr.qcloud.la/weapp/selectOrderView',
      success(res) {
        //console.log(res.data.data)
        //console.log(that.data.category)
        that.setData({
          //detail: res.data
          cartsitem: res.data.data
        })
        //console.log(that.data.category)
      }
    });
  },

  /**
   * 当前商品选中事件
   */
  selectList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    const selected = carts[index].selected;
    carts[index].selected = !selected;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  /**
   * 删除购物车当前商品
   */
  deleteList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.splice(index, 1);
    this.setData({
      carts: carts
    });
    if (!carts.length) {
      this.setData({
        hasList: false
      });
    } else {
      this.getTotalPrice();
    }
  },

  /**
   * 购物车全选事件
   */
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;

    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    });
    this.getTotalPrice();
  },

  /**
   * 绑定加数量事件
   */
  addCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  /**
   * 绑定减数量事件
   */
  minusCount(e) {
    const index = e.currentTarget.dataset.index;
    const obj = e.currentTarget.dataset.obj;
    let carts = this.data.carts;
    let num = carts[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  /**
   * 计算总价
   */
  getTotalPrice() {
    let carts = this.data.carts;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < carts.length; i++) {         // 循环列表得到每个数据
      if (carts[i].selected) {                     // 判断选中才会计算价格
        total += carts[i].num * carts[i].goodPrice;   // 所有价格加起来
      }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      carts: carts,
      totalPrice: total.toFixed(2)
    });
  }

})