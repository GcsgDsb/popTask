let $ = document

// 添加导航栏函数
let navFunc = function () {
  let nav = $.getElementById('nav_ul')
  let liArr = nav.getElementsByTagName('li') // 类数组
  liArr = Array.prototype.slice.call(liArr) // 转数组
  let lastClickElement = null // 标记上一次点击的导航栏
  liArr.forEach(element => {
    element.addEventListener('click', function () {
      lastClickElement = lastClickElement ? lastClickElement : liArr[0]
      lastClickElement.className = lastClickElement.className.replace(new RegExp("(\\s|^)" + 'bg' + "(\\s|$)"), " ")
      element.className += ` bg`
      lastClickElement = element
    })
  });
}

//添加轮播图
let switchFunc = function () {
  let _switch = $.getElementsByClassName('switch_btn')
  let _switchImg = $.getElementById('switch_img')
  let btnArr = _switch[0].children
  btnArr = Array.from(btnArr)
  let lastClickElement = null
  //  捕获定时任务id，在每次点击后重置定时任务
  let intervalId = 1
  //  初始化定时任务
  intervalId = setInterval(function () {
    const i = _switchImg.getAttribute('src').substr(6, 1)
    _switchImg.setAttribute('src', `./img/${ Number(i) === 0 ? 1 : 0}.jpg`)
    btnArr[`${ Number(i) === 0 ? 1 : 0}`].setAttribute('style', 'background: #0F42A2; color: #fff')
    btnArr[`${ Number(i) !== 0 ? 1 : 0}`].setAttribute('style', 'background: #f5f5f5; color: #ccc')
    lastClickElement = btnArr[`${ Number(i) === 0 ? 1 : 0}`]
  }, 2000)
  btnArr.forEach((element, index) => {
    // FIXME: 通过className添加class的属性优先级没有标签选择器优先级高
    // FIXME: 封装的interval方法后监听器失效
    element.addEventListener('click', function () {
      lastClickElement = lastClickElement ? lastClickElement : btnArr[0]
      lastClickElement.setAttribute('style', 'background: #f5f5f5; color: #ccc')
      element.setAttribute('style', 'background: #0F42A2; color: #fff')
      lastClickElement = element
      _switchImg.setAttribute('src', `./img/${index}.jpg`)
      // 重置定时任务
      clearInterval(intervalId)
      intervalId =
        setInterval(function () {
          const i = _switchImg.getAttribute('src').substr(6, 1)
          _switchImg.setAttribute('src', `./img/${ Number(i) === 0 ? 1 : 0}.jpg`)
          btnArr[`${ Number(i) === 0 ? 1 : 0}`].setAttribute('style', 'background: #0F42A2; color: #fff')
          btnArr[`${ Number(i) !== 0 ? 1 : 0}`].setAttribute('style', 'background: #f5f5f5; color: #ccc')
          lastClickElement = btnArr[`${ Number(i) === 0 ? 1 : 0}`]
        }, 2000)
    })
  })
}


let interval = function () {

}
navFunc()
switchFunc()