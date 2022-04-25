# ES6

## let 和 const

1. let

- 不能重复声明
- 块级作用域
- 不存在变量提升

2. const

- 初始值必须有
- 不能重复声明
- 不存在变量提升
- 块级作用域
- 常量的值不能修改
- 数组和对象里面的值可以修改

## 变量的解构赋值

```js
// 数组
const arr = [1, 2, 3, 4];
const [a, b, c] = arr; // a:1, b:2, c:3
const [a, b, ...c] = arr; // a:1, b:2, c:[3,4]
const [...a, b, c] = arr; // error: Rest element must be last element

// 对象
const obj = {
  name:"胡汉池",
  age:24,
  sex: "男"
}
const {name,age} = obj // name: 胡汉池 , age: 24
const {name,...newObj} = obj // name: 胡汉池 , newObj: {  age:24,sex: "男"}

```

## 模板字符串

### 符号 ``

```js
// 声明 可以直接换行
let str = `我是一个
字符串`;
// 使用变量
let name = "胡汉池";
let str1 = `我叫${name}`; // str1: 我叫胡汉池
```

## 对象的简写

```js
let name = "胡汉池";
let add = function (a, b) {
  return a + b;
};
// 声明一个对象
let obj = {
  name, // name:name 简写形式 => name
  add, // add:add 简写形式 => add
};

// 在对象里面声明函数
let obj1 = {
  sup: function (a, b) {
    return a - b;
  },
  // 简写形式
  sup(a, b) {
    return a - b;
  },
};
```

## 箭头函数

```js
// 声明
let fn = () => {
  console.log("fn");
};
// 没有arguments,caller,prototype
// call apply 不能改变this指向
// 不能被new实例化
// this指向是固定的，始终指向声明时所在的上一层作用域
```

## 扩展运算符

```js
// ...
let arr = [1, 2, 3, 4];
console.log(...arr); // 1 2 3 4
```

## Generator 生成器

### 模拟一个请求 loading

```js
function* myLoading(ajax) {
  startLoading();
  yield ajax();
  yield endLoading();
}

function startLoading() {
  console.log("loading start...");
}

function endLoading() {
  console.log("loading end...");
}

function getData() {
  setTimeout(() => {
    console.log("get data success...");
    const res = {
      messageCode: 1008,
    };

    if (res.messageCode != 1008) {
      alert("请求失败");
    }
    myl.next();
  }, 2000);
}

let myl = myLoading(getData);
myl.next();
```

### 模拟解决回调地狱

```js
function* callback() {
  let res = yield ajax1();
  yield ajax2(res);
}

function ajax1() {
  setTimeout(() => {
    console.log("ajax1");
    const res = {
      messageCode: 10082,
      id: 1,
    };
    if (res.messageCode === 1008) {
      cb.next(res.id);
    } else {
      alert("ajax1请求出错");
    }
  }, 1000);
}

function ajax2(id) {
  setTimeout(() => {
    console.log("ajax2", id);
  }, 1000);
}

let cb = callback();
cb.next();
```

## Promise

### 1. 方法

- `Promise.resolve()`相当于 `new` 了一个 `Promise` 对象

```js
let p = Promise.resolve("foo");
console.log(p); // 返回的是一个Promise对象
p.then((res) => console.log(res)); // res = "foo"
```

- `Promise.reject()`
- `Promise.all()`
- `Promise.race()`
- `Promise.done()`
- `Promise.finally()`
