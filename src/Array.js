/*
 * @Descripttion: 这里是一些与数组操作相关的方法
 * @Author: JasonPink
 * @Date: 2020-06-08 14:56:27
 * @LastEditors: JasonPink
 * @LastEditTime: 2020-06-08 15:28:02
 */ 
/**
 * 数组去重
 * @method unquieArray
 * @param { Array } 
 * @return { Array } 
 */ 
export function unquieArray(arr) {
  return arr.filter((item, index, self) => {
    return self.indexOf(item) === index;
  })
}