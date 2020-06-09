/*
 * @Descripttion: 这里是一些与数组操作相关的方法
 * @Author: JasonPink
 * @Date: 2020-06-08 14:56:27
 * @LastEditors: JasonPink
 * @LastEditTime: 2020-06-09 10:10:11
 */ 

/**
 * 数组去重 
 */ 
function unquieArray(arr) {
  return arr.filter((item, index, self) => {
    return self.indexOf(item) === index;
  })
}
/**
 * 删除指定下标元素
 */
function deleteByIndex(arr, index) {

}
