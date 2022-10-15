# React 代码片段

## React 代码组织

:::tip 组件结构
组件结构建议分为四大块（有顺序）：状态 Hook 调用（useState）、副作用 Hook 调用（useEffect）、方法定义、渲染逻辑。
:::

```jsx
function Component({ children }) {
  // 状态 Hook 调用
  const [state, setState] = useState(false);

  // 也可以在这里定义 Effect 要用到的纯函数，记住不能使用任何函数外的变量
  // 纯函数也可以考虑单独拆出来，可能将来在别的组件也会用到

  // 副作用 Hook 调用
  useEffect(() => {}, []);

  // 方法定义，尽量使用箭头函数
  const fn = () => {};

  // 渲染逻辑

  // 如果后面渲染表达式过于复杂，可以单独抽出来放着，命名为 renderXXX
  // 更好的做法还是单独抽出一个组件
  const renderXXX = () => <p></p>;

  return <p>{children}</p>;
}
```

## 自定义 hook

也叫抽离 hook , 就是把常用到的 Hook 逻辑单独抽离出来，方便维护。不知道什么时候该自定义 hook?
如果实现一个逻辑需要用到多个 Hook、多个变量，而且这个逻辑还可能在别的组件中复用, 那么就是自定义 hook 的好时机.
