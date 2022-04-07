# hooks 理解

## 1.创建一个组件

```js
// 函数组件
function App() {
  const [num, setNum] = useState(0);

  return {
    onClick() {
      setNum((num) => num + 1);
    },
  };
}
```

## 2.创建一个 fiber 对象来管理组件中的状态,stateNode 代表当前管理的组件

```js
// 创建一个fiber对象管理组件
const fiber = {
  stateNode: App,
  memoizedState: null, // 存储hooks，以链表形式存在
};
// 是否是第一次渲染
let isMount = true;
// 指向当前的hook
let workInprogressHook = null;
```

## 3.创建一个调度器函数来渲染更新组件

```js
// 创建一个调度器函数来渲染更新组件
function schedule() {
  // 每次渲染获取状态
  workInprogressHook = fiber.memoizedState;
  const app = fiber.stateNode();
  isMount = false;
  return app;
}
```

## 4.实现 useState

```js
// useState
function useState(initialState) {
  let hook;
  /**
   * 获取当前hooks-状态-start
   */
  if (isMount) {
    // 第一次渲染
    hook = {
      memoizedState: initialState,
      next: null,
      queue: {
        // 队列，用来存储aciton
        padding: null,
      },
    };
    if (!fiber.memoizedState) {
      // 第一个useState
      fiber.memoizedState = hook;
    } else {
      // workInprogressHook指向上一个hook
      workInprogressHook.next = hook;
    }
    // 指向当前hook
    workInprogressHook = hook;
  } else {
    //更新
    // 1.获取到hook链表
    hook = workInprogressHook;
    // 2.指向下一个
    workInprogressHook = workInprogressHook.next;
  }
  /**
   * 获取当前hooks-状态-end
   */

  // todo 实现useState的更新函数action
  let baseState = hook.memoizedState;

  if (hook.queue.padding) {
    // 第一个
    let firstUpdate = hook.queue.padding.next;

    do {
      const action = firstUpdate.action;
      // 执行useState的更新
      baseState = action(baseState);
      firstUpdate = firstUpdate.next;
      // 第一个和最后一个相等代表走完了
    } while (firstUpdate != hook.queue.padding.next);

    //所有的hook更新都执行完之后重置
    hook.queue.padding = null;
  }

  hook.memoizedState = baseState;

  return [baseState, dispatchAction.bind(null, hook.queue)];
}
```

## 5.dispatchAction 函数

```js
function dispatchAction(queue, action) {
  const update = {
    action,
    next: null,
  };

  if (queue.padding === null) {
    update.next = update;
  } else {
    update.next = queue.padding.next;
    queue.padding.next = update;
  }
  queue.padding = update;
  schedule();
}
```

## 6.测试

```js
window.app = schedule();
app.onClick()
app.onClick1()
...
```
