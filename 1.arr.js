//1.forEach没有返回值，不能跳出循环 for循环可以跳出循环
//2.map 映射 讲一个数组映射成一个新数组,返回什么就会把当前返回的放到一个新数组中
/*
let newArr = ['我','很','帅'].map((item,index)=>`<li>${item}<li>`);
console.log(newArr); //模板字符串使用`` 遇到变量使用${}取值
*/
//3.filter 过滤 返回值是一个过滤后的数组，如果回调函数中返回true 表示放到新数组中，返回false 表示过滤掉
/*
let newArr = [1,2,3,4,5].filter((item,index)=>item!==3);
console.log(newArr);
*/
//4.find 查找找到是数组中某一项，如果找不到返回undefined
/*
let item = [1,2,3].find(item=>item===3);
console.log(item);
*/


