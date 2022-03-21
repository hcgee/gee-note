# 虚拟 dom 和真实 dom 对比

对象属性越少渲染的就越快，虚拟 dom 比真实 dom 的属性少了好几倍

```js
// 创建虚拟dom
const virtualDoM = React.createElement("div");
// 创建真实dom
const realDoM = document.createElement("div");

// 比较虚拟和真实dom各自属性个数
let vNum = 0; // 虚拟dom的属性个数
let rNum = 0; // 真实dom的属性个数

for (const key in virtualDoM) {
  vNum++;
}
for (const key in realDoM) {
  rNum++;
}

console.log("虚拟dom的属性个数：", vNum); // 7
console.log("真实dom的属性个数：", rNum); // 303
```
