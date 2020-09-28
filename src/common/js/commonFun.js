export default {
  resizeHeight: function (){
    let dd = document.getElementById('main-footer')
    let leftRightCon = document.getElementById('leftRightCon')
    let elContent = document.querySelector('.el-tabs-container .el-tabs__content')
    elContent.style.height = document.documentElement.clientHeight-182 + 'px'
    dd.style.height = document.documentElement.clientHeight-107 + 'px'
    leftRightCon.style.height = document.documentElement.clientHeight-155 + 'px'
    dd = null
    leftRightCon = null
    elContent = null
  },
  formDate: function () {
    let now = new Date()
    let year = now.getFullYear()
    let mouth =addZero(now.getMonth()+1)
    let day =addZero(now.getDate())
    let hour =addZero(now.getHours())
    let minute =addZero(now.getMinutes())
    let second =addZero(now.getSeconds())
    return year+'-'+mouth+'-'+day+' '+hour+':'+minute+':'+second
  }
}
function addZero(str) {
  return (str+'').length == 1?'0'+str : str;
}
