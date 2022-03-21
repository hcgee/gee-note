# setState 是异步的

```js
state = {
  msg: "你好，小明",
};
this.setState("你好，小胡");
// 如果打印小明则是异步，反之同步
console.log(this.state.msg); // 你好，小明
```