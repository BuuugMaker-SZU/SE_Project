// pages/userCenter/weixinID/edit_weixinID.js
Page({
  data: {
    weixinID: '', 
  },

  onWeixinIdInput(e) {
    this.setData({
      weixinID: e.detail.value,
    });
  },
  
  onSaveWeixinId() {
    
    const { weixinID } = this.data;


    wx.showToast({
      title: '微信号已保存',
      icon: 'success',
      duration: 2000,
    });

    // 保存成功后，可以返回上一页或执行其他操作
    // wx.navigateBack();
  },
});
