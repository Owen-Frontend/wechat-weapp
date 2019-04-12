//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'welcome wx',
    bShow:false,
    arr:['apple','orange','banana'],
    arrData: [
      { name: 'apple', age: 10 },
    { name: 'orange', age: 40 },
    { name: 'banana', age: 60}
    ]
     
  },
  change(){
    this.setData({
      bShow: !this.data.bShow
    });
  }
})
