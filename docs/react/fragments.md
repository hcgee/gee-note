# Fragments
官网 [Fragments](https://react.docschina.org/docs/fragments.html)  
```js
/* 
使用<></>或<Fragment></Fragment>可以包裹多个组件
<></>不可以使用key或者属性
Fragment只支持key 
*/
<>
  <td>1</td>
  <td>2</td>
  <td>3</td>
</>
<Fragment>
  <td>1</td>
  <td>2</td>
  <td>3</td>
</Fragment>
```

