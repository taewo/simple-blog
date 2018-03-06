
export default {
  validateSameID: function(existData, newData) {
    let isExist = existData.filter(function(value) {
      if (value.ID === newData.ID) {
        return true;
      } else {
        return false;
      }
    })
    return isExist;
  },
  setItem: function(data) {
    return localStorage.setItem('simple-blog', data);
  },
  getItem: function() {
    return localStorage.getItem('simple-blog');
  }
}
