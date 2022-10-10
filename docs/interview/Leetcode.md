# CodingInterview(剑指 offer)

> 因为目前 VitePress 官方还不支持多语言代码块, 所以这里只展示 JavaScript 版本的

## 03.数组中重复的数字

```js{25}
// 使用Set判重
// const findRepeatNumber = nums => {
//     const set = new Set();
//     const len = nums.length;
//     for (let i = 0; i < len; i++) {
//         const num = nums[i];
//         if (set.has(num)) return num;
//         set.add(num);
//     }
// };

// 原地交换
const findRepeatNumber = (nums) => {
  let i = 0
  const len = nums.length
  while (i < len) {
    // 若该数和下标相等，则i++，检查下一个数
    if (nums[i] === i) {
      i++
      continue
    }
    // 若该数作为下标对应的数，等于该数，说明重复了，返回
    if (nums[nums[i]] === nums[i])
      return nums[i];
      // 否则，一直交换该数和该数作为下标对应的数，一直到数等于下标为止
    [nums[nums[i]], nums[i]] = [nums[i], nums[nums[i]]]
  }
  return -1
}
```

## 04. 二维数组中的查找

```js
const findNumberIn2DArray = (matrix, target) => {
  const [m, n] = [matrix.length, matrix[0]?.length]
  if (!m) return false
  // 定义左下角的坐标
  let [row, col] = [m - 1, 0]
  // 坐标在矩阵内，就一直寻找
  while (row >= 0 && col <= n - 1) {
    // 当前元素
    const item = matrix[row][col]
    if (item === target) {
      // 找到，返回true
      return true
    } else if (item > target) {
      // 太大了，上移一行
      row--
    } else {
      // 太小了，右移一列
      col++
    }
  }
  return false
}
```

## 05. 替换空格

```js
const replaceSpace = (s) => {
  // 转化为数组
  const arr = s.split('')
  // 统计空格数量
  let spaceCount = 0
  const len = arr.length
  for (let i = 0; i < len; i++) {
    if (arr[i] === ' ') spaceCount++
  }
  // 更新数组长度，每个空格，要多出2个位置
  arr.length += 2 * spaceCount
  // 定义双指针
  // left:旧长度-1
  // right:新长度-1
  let [left, right] = [len - 1, arr.length - 1]
  while (left >= 0) {
    if (arr[left] !== ' ') {
      // 如果遇到字符，直接将左指针的值赋给右指针
      arr[right] = arr[left]
    } else {
      // 遇到空格，依次填入%20，右指针左移2
      arr[right - 2] = '%'
      arr[right - 1] = '2'
      arr[right] = '0'
      right -= 2
    }
    // 分别左移1
    left--
    right--
  }
  // 返回字符串
  return arr.join('')
}

// const replaceSpace = s => s.split(' ').join('%20');
```

## 06. 从尾到头打印链表

```js
const reversePrint = (head) => {
  const stack = []
  const res = []
  while (head) {
    stack.push(head.val)
    head = head.next
  }
  const len = stack.length
  for (let i = 0; i < len; i++) {
    res.push(stack.pop())
  }
  return res
}
```

## 07. 重建二叉树

```js
const buildTree = (preorder, inorder) => {
  if (!preorder.length) return null
  if (preorder === 1) return new TreeNode(preorder[0])

  // 先序遍历的第一个就是根节点
  let rootVal = preorder[0]
  // 找到根节点在中序遍历中的索引
  let index = inorder.indexOf(rootVal)

  // 先序左子树
  let preLeft = preorder.slice(1, index + 1)
  // 先序右子树
  let preRight = preorder.slice(index + 1)
  // 中序左子树
  let inLeft = inorder.slice(0, index)
  // 中序右子树
  let inRight = inorder.slice(index + 1)

  // 构建二叉树
  const node = new TreeNode(rootVal)
  // 递归构建左子树
  node.left = buildTree(preLeft, inLeft)
  // 递归构建右子树
  node.right = buildTree(preRight, inRight)

  return node
}
```

## 09. 用两个栈实现队列

```js
class CQueue {
  constructor() {
    this.stackA = []
    this.stackB = []
  }
  appendTail(value) {
    this.stackA.push(value)
  }
  deleteHead() {
    if (this.stackB.length) {
      return this.stackB.pop()
    } else {
      while (this.stackA.length) {
        this.stackB.push(this.stackA.pop())
      }
      if (!this.stackB.length) {
        return -1
      } else {
        return this.stackB.pop()
      }
    }
  }
}
```

## 10- I. 斐波那契数列

```js
const fib = (n) => {
  const dp = [0, 1]
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
  }
  return dp[n]
}
```

## 10- II. 青蛙跳台阶问题

```js
const numWays = (n) => {
  // 为了通过，强行加的条件
  if (n === 0) return 1
  const dp = [null, 1, 2]
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
  }
  return dp[n]
}
```

## 11. 旋转数组的最小数字

```js
const minArray = (numbers) => {
  let [low, high] = [0, numbers.length - 1]
  while (low <= high) {
    const mid = (low + high) >> 1
    if (numbers[mid] > numbers[high]) {
      // 最小值一定在mid右侧
      low = mid + 1
    } else if (numbers[mid] < numbers[high]) {
      // 最小值在mid左侧，或者mid就是最小值
      high = mid
    } else {
      high--
    }
  }
  return numbers[low]
}
```

## 12. 矩阵中的路径

```js
const exist = (board, word) => {
  const [m, n] = [board.length, board[0].length]

  const dfs = (i, j, index) => {
    // 越界、或者字符不匹配
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[index])
      return false
    // 索引等于单词长度-1，说明全匹配上了
    if (index === word.length - 1) return true
    // 保存当前字符
    const temp = board[i][j]
    // 将当前字符设置为空，防止四个方向dfs再次遍历到
    board[i][j] = ''
    // 四个方向遍历
    const res =
      dfs(i + 1, j, index + 1) ||
      dfs(i, j + 1, index + 1) ||
      dfs(i - 1, j, index + 1) ||
      dfs(i, j - 1, index + 1)
    // 恢复当前字符
    board[i][j] = temp
    return res
  }

  // 从第一个匹配的字符处开始dfs
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) return true
    }
  }

  return false
}
```

## 13. 机器人的运动范围

```js
// 判断当前格子是否能过的函数
const isTrue = (m, n, k) => {
  let [sum1, sum2] = [0, 0]
  while (m !== 0) {
    sum1 += m % 10
    m = Math.floor(m / 10)
  }
  while (n !== 0) {
    sum2 += n % 10
    n = Math.floor(n / 10)
  }
  return sum1 + sum2 <= k
}

const movingCount = (m, n, k) => {
  // 构建已访问的数组，初始全部为false
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(false))
  let res = 0
  const dfs = (i, j) => {
    // 若越界，或遇到已访问过的，return
    if (i < 0 || j < 0 || i >= m || j >= n || visited[i][j]) return
    // 标记访问
    visited[i][j] = true
    if (isTrue(i, j, k)) {
      // 如果当前格子能访问，计数+1，并向四个方向继续访问
      res++
      dfs(i + 1, j)
      dfs(i, j + 1)
      dfs(i - 1, j)
      dfs(i, j - 1)
    }
  }
  dfs(0, 0)
  return res
}
```

## 14- I. 剪绳子

```js
const cuttingRope = (n) => {
  const dp = [null, null, 1]
  for (let i = 3; i <= n; i++) {
    // 当前dp[i]初始化为0
    dp[i] = 0
    for (let j = 1; j <= i - 1; j++) {
      // 因为j在遍历的过程中，会算出很多dp[i]，取最大的
      // (i - j) * j表示拆分成2个数
      // dp[i - j] * j表示拆分成2个及以上的数
      dp[i] = Math.max(dp[i], (i - j) * j, dp[i - j] * j)
    }
  }
  return dp[n]
}
```

## 14- II. 剪绳子 II

```js
// 贪心：每次拆成n个3，如果剩下是4，则保留4，然后相乘

const cuttingRope = (n) => {
  // 特殊情况处理
  const arr = [null, null, 1, 2, 4]
  if (n <= 4) return arr[n]
  const mod = 1000000007
  let res = 1
  while (n > 4) {
    // 每次减掉3
    res = (res * 3) % mod
    n -= 3
  }
  // 最后剩下一段小于等于4的长度
  res *= n
  return res % mod
}
```

## 15. 二进制中 1 的个数

```js
const hammingWeight = (n) => {
  let count = 0
  while (n !== 0) {
    n = n & (n - 1)
    count++
  }
  return count
}
```

## 16. 数值的整数次方

```js
const myPow = (x, n) => {
  // 递归出口
  if (n === 0) return 1
  // n小于0，特殊情况
  if (n < 0) return 1 / myPow(x, -n)
  // n奇数
  if (n & 1) return x * myPow(x, n - 1)
  // n偶数
  return myPow(x * x, n / 2)
}
```

## 17. 打印从 1 到最大的 n 位数

```js
const printNumbers = (n) => {
  let max = 10 ** n - 1
  const res = []
  for (let i = 1; i <= max; i++) {
    res.push(i)
  }
  return res
}
```

## 18. 删除链表的节点

```js
const deleteNode = (head, val) => {
  // 定义虚拟节点
  const res = new ListNode(-1)
  // 虚拟节点连接到head
  res.next = head
  // 定义p指针，最开始指向虚拟节点
  let p = res
  // 遍历链表
  while (p?.next) {
    // 如果下一个值等于val，则删除下一个值
    if (p.next.val === val) p.next = p.next.next
    p = p.next
  }
  return res.next
}
```

## 19. 正则表达式匹配

```js
const isMatch = (s, p) => new RegExp(`^${p}$`).test(s)
```

## 20. 表示数值的字符串

```js
const isNumber = (s) => {
  const num = s.trim()
  return /^[+-]?(\d+(\.\d*)?|(\.\d+))(e[+-]?\d+)?$/i.test(num)
}
```

## 21. 调整数组顺序使奇数位于偶数前面

```js
// 笨方法
// const exchange = nums => {
//     const [odd, even] = [[], []];
//     for (const num of nums) {
//         if (num % 2) {
//             odd.push(num);
//         } else {
//             even.push(num);
//         }
//     }
//     return [...odd, ...even];
// };

// 双指针
const exchange = (nums) => {
  // 定义双指针
  let [left, right] = [0, nums.length - 1]
  while (left < right) {
    // 奇数，继续向右找，直到找到偶数
    while (left < right && nums[left] & 1) left++
    // 偶数，继续向左找，直到找到奇数
    while (left < right && !(nums[right] & 1))
      right--
      // 交换奇偶数
    ;[nums[left], nums[right]] = [nums[right], nums[left]]
  }
  return nums
}
```

## 22. 链表中倒数第 k 个节点

```js
const getKthFromEnd = (head, k) => {
  let fast, slow
  fast = slow = head
  while (k--) {
    // 快指针先走k步
    fast = fast.next
  }
  while (fast) {
    // 再一起走，知道快指针走到头
    fast = fast.next
    slow = slow.next
  }
  // 此时的慢指针指的就是倒数第k个
  return slow
}
```

## 24. 反转链表

```js
const reverseList = (head) => {
  // 定义cur指向头部
  // pre指向头部前面的null
  let [cur, pre] = [head, null]
  // 遍历链表
  while (cur) {
    // 定义next为cur下一个
    const next = cur.next
    // cur的指向改为pre
    cur.next = pre
    // pre改为当前cur的指向
    pre = cur
    // cur的指向改为next的指向
    cur = next
  }
  // 遍历结束，cur指向null，返回pre
  return pre
}
```

## 25. 合并两个排序的链表

```js
const mergeTwoLists = (l1, l2) => {
  // 定义一个虚拟节点，最后返回虚拟节点的下一个节点
  const res = new ListNode(0)
  // 定义p指向虚拟节点
  let p = res
  // 定义p1,p2分别指向两个链表头部
  let [p1, p2] = [l1, l2]
  // 当p1, p2都有值的时候
  while (p1 && p2) {
    // 如果p1指向的值小，则p指向p1的值
    // p1右移
    // 否则p指向p2的值，p2右移
    if (p1.val < p2.val) {
      p.next = p1
      p1 = p1.next
    } else {
      p.next = p2
      p2 = p2.next
    }
    // 记得p也要右移
    p = p.next
  }
  // 到最后退出循环了，p1,p2肯定有且只有一个是null
  // 那么另一个不是null的还没有连接到p上
  // 把p再连接到不是null的那个
  p.next = p1 ? p1 : p2
  // 返回虚拟节点的下一个节点
  return res.next
}
```

## 26. 树的子结构

```js
// 该递归函数是用来判断A当前节点和B是否相同
const dfs = (A, B) => {
  // 递归出口
  if (!B) return true
  // A空，B不为空，false
  if (!A) return false
  return A.val === B.val && dfs(A.left, B.left) && dfs(A.right, B.right)
}

const isSubStructure = (A, B) => {
  // 递归出口，A空或B空，false
  if (!A || !B) return false
  // 递归判断A当前节点、A左子树、A右子树任意一个与B相同，就返回true
  return dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
}
```

## 27. 二叉树的镜像

```js
const mirrorTree = (root) => {
  // 递归出口
  if (!root)
    return null
    // 交换当前左右节点
  ;[root.left, root.right] = [root.right, root.left]
  // 递归交换左子树的左右节点
  mirrorTree(root.left)
  // 递归交换右子树的左右节点
  mirrorTree(root.right)
  // 返回当前节点给上一级
  return root
}
```

## 28. 对称的二叉树

```js
// 递归
// const isSymmetric = root => {
//     if (!root) return true;
//     // 判断两个二叉树是否镜像
//     const check = (node1, node2) => {
//         // 两个空树，true
//         if (!node1 && !node2) return true;
//         // 只有一个空树，false
//         if (!node1 || !node2) return false;
//         // 镜像的条件：
//         // 1. 节点值相等
//         // 2. node1的左子树和node2的右子树是镜像
//         // 3. node1的右子树和node2的左子树是镜像
//         return (
//             node1.val === node2.val &&
//             check(node1.left, node2.right) &&
//             check(node1.right, node2.left)
//         );
//     };
//     // 判断树的两个子树是否镜像即可
//     return check(root.left, root.right);
// };

// 迭代：利用层序遍历的思想
const isSymmetric = (root) => {
  if (!root) return true
  // 根节点的左右节点入队
  const queue = [root.left, root.right]
  while (queue.length) {
    // 当前队列的长度
    const len = queue.length
    // 每次对比两个节点，所以i=i+2
    for (let i = 0; i < len; i += 2) {
      // 两个节点出队
      const left = queue.shift()
      const right = queue.shift()
      // 有一个为空，另一个不为空，直接返回false
      if ((left && !right) || (!left && right)) return false
      // 两节点都不为空
      if (left && right) {
        // 值不相等，返回false
        if (left.val !== right.val) return false
        // 将两个节点的左右节点，按照对应关系入队
        queue.push(left.left, right.right, left.right, right.left)
      }
    }
  }
  // 遍历结束返回true
  return true
}
```

## 29. 顺时针打印矩阵

```js
const spiralOrder = (matrix) => {
  const res = []

  // 定义行、列
  // 可能是空数组，所以加一个'?'
  const [m, n] = [matrix.length, matrix[0]?.length]
  if (!m || !n) return res

  // 初始化：左、右、上、下
  let [left, right, up, down] = [0, n - 1, 0, m - 1]

  while (1) {
    // 访问上边，从左到右，访问完毕后，up++
    for (let j = left; j <= right; j++) res.push(matrix[up][j])
    up++
    // 若up比down大，说明都访问完了，退出
    if (up > down) break

    // 以下同理
    for (let i = up; i <= down; i++) res.push(matrix[i][right])
    right--
    if (right < left) break

    for (let j = right; j >= left; j--) res.push(matrix[down][j])
    down--
    if (down < up) break

    for (let i = down; i >= up; i--) res.push(matrix[i][left])
    left++
    if (left > right) break
  }

  return res
}
```

## 30. 包含 min 函数的栈

```js
class MinStack {
  constructor() {
    this.stack = []
  }
  push(x) {
    this.stack.push({
      val: x,
      min: this.stack.length ? Math.min(x, this.min()) : x
    })
  }
  pop() {
    this.stack.pop()
  }
  top() {
    return this.stack[this.stack.length - 1].val
  }
  min() {
    return this.stack[this.stack.length - 1].min
  }
}
```

## 31. 栈的压入、弹出序列

```js
const validateStackSequences = (pushed, popped) => {
  const stack = []
  let index = 0
  const len = pushed.length
  for (let i = 0; i < len; i++) {
    stack.push(pushed[i])
    while (
      popped[index] !== undefined &&
      popped[index] === stack[stack.length - 1]
    ) {
      stack.pop()
      index++
    }
  }
  return !stack.length
}

console.log(validateStackSequences([0], [0]))
```

## 32 - I. 从上到下打印二叉树

```js
const levelOrder = (root) => {
  if (!root) return []
  // 创建队列
  const queue = [root]
  const res = []
  while (queue.length) {
    // 获取根节点，根节点出队
    const n = queue.shift()
    // 访问队头
    res.push(n.val)
    // 队头的子节点依次入队
    n.left && queue.push(n.left)
    n.right && queue.push(n.right)
  }
  return res
}
```

## 未完待续....
