Page({
  data: {
    introduction: '', 
  },

  onIntroInput(e) {
    // 用户输入联系电话时触发，将输入的值保存到数据中
    this.setData({
      introduction: e.detail.value,
    });
  },
  
  onSaveIntro() {
    // 用户点击保存按钮时触发，保存联系电话到后端服务器或本地存储
    const { introduction } = this.data;

    // 执行保存联系电话的逻辑，可以与后端交互或使用本地存储
    // 例如：将联系电话发送到服务器保存
    // 请根据你的需求自行添加保存逻辑

    wx.showToast({
      title: '已保存',
      icon: 'success',
      duration: 2000,
    });

    // 保存成功后，可以返回上一页或执行其他操作
    // wx.navigateBack();
  },
});
