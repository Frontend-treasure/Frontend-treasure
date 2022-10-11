# HTML

# 一、HTML基础

## 一、什么是网站

就是 .html 文件，一个html文件为一个页面，多个html页面组成一个网站

1. 网页通过浏览器才能访问
2. 网页是网站中的一页
3. 文件扩展名是 .html

## 二、什么是HTML

HTML是用来**描述网页**的一种语言。

1. HTML是**超文本标记语言**(**H**yper **T**ext **M**arkup **L**anguage)
2. HTML不是一种编程语言，而是一种标记语言(Markup Language)

## 三、浏览器

**五大浏览器**

1. Opra 欧朋
2. FireFox 火狐
3. IE
4. Safari
5. Chrome

## 四、Web标准—W3C

WEB(网页)的组成：HTML结构、CSS样式、JS行为。

## 五、vscode及相应好用的插件

| 名称 | 作用 |
| --- | --- |
| Auto Rename Tag | 实现修改标签时双标签同时被修改 |
| view-in-browser | 在浏览器打开网页，可以在非默认的浏览器打开 |
| live sever | 实时查看页面变化，保存时立刻显示 |
| htmltagwrap | 选中文本按ALT + W 可以直接为文本包裹p标签 |
| px to rem & rpx & vw (cssrem) | 将px值转换为对应的rem值，快捷键ALT + Z |
| JS-CSS-HTML Formatter | 保存时自动格式化 |
| ESLint | 自动检测 js 语法，使语法更加严谨 |
| Vue VSCode Snippets | 提供缩写回车后自动补全(vb) |
| vetur(bug 多，换成volar) | 让vue代码高亮显示 |
| prettier | 保存时自动格式化,比上面那个好用多了 |

## 六、文档声明及字符编码

```html
<!-- 声明文档类型，为html5格式的文档 -->
<!DOCTYPE html>
<!-- lang="en",修饰html文件的，告诉浏览器这个页面是英文的，zh-CN是中文的，ja-jp是日文的 -->
<!-- 会检测你电脑的语言类型，如果类型和你电脑的不一样，则会提示是否翻译成你电脑当前的语言类型 -->
<html lang="en">

<head>
    <!-- 声明文档的编码方式，ASCII--美国信息交换标准代码，ISO-8859-1--拉丁字母表的字符编码，
        GB2312--汉子编码字符集，UTF-8--Unicode 万国码字符编码 -->
    <meta charset="UTF-8">
    <!-- 针对IE浏览器的设置，告诉IE浏览器以最高模式来渲染文档，避免版本升级造成的影响。 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 针对移动端的视口标签 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    你好！hello world
</body>

</html>
```

## 七、web语义化

简单来说就是让机器更好的读懂，利于SEO，方便维护。

# 二、HTML中的常用标签

## 一、文本标签

### 2.1.1、标题标签

html提供了**六个**标题标签，标题标签**自带加粗**，有自己的文本大小，并且**独占一行**，有**自带的上下外边距**。

```html
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```

### 2.1.2、段落标签

用于标示一个段落（段落与段落之间有段间距）

```html
<p>段落文本</p>
```

### 2.1.3、换行标签

是一个单标签，用于强制换行

```html
<br />
```

### 2.1.4、水平线

划出一条水平线，可以修改其属性

```html
<hr />
```

### 2.1.5、文本修饰标签

| 标签 | 效果 |
| --- | --- |
| <strong></strong>    或者   <b></b> | 加粗文本，推荐strong |
| <em></em>  或者   <i></i> | 倾斜文本，推荐em |
| <del></del>  或者   <s></s> | 为文本添加删除线，推荐del |
| <ins></ins>   或者    <u></u>  | 为文本添加下划线，推荐ins |
| <sub></sub> | 下标 |
| <sup></sup> | 上标 |

```html
标签可以插入属性
<标签名 属性1="属性值1" 属性2="属性值2">
<hr color="red" width="100px" align="left">
<hr color="green" width="200px">
<hr color="blue" width="300px">
<span style="color: red;"><span>
```

## 二、特殊符号

![特殊字符.jpg](./../../public/images/特殊字符.jpg)

```html
&nbsp;  受字体影响，不确定大小
&emsp;  占据的大小正好是一个中文的宽度，且基本上不受影响

商标：
&trade; ™ 未注册商标
&reg;   ® 注册商标

表情包：
&#128512;  最后几个数字可以换
```

## 三、div 和 span 标签

1. div 标签
   
    没有具体含义，用来划分页面的区域，独占一行，可以用于存储内容。
    
2. span 标签
   
    没有具体含义，盒子宽度被内容撑开，用于对文本进行独立修饰的时候，修改其样式。
    

## 四、列表标签ul、ol、dl

1. 无序列表
   
    列表前面有 ●
    
    ```html
    <!-- 
        1. ul里面只能放li ，li里面能放其他标签
        2. 使用type 修改前面默认的实心圆
        disc：实心圆
        circle：空心圆
        square：实心正方形
        none：无 ,使用最多的
     -->
      <ul type="none">
          <li>00001</li>
          <li>00002</li>
          <li>00003</li>
          <li>00004</li>
          <li>00005</li>
      </ul>
    ```
    
2. 有序列表
   
    列表前面有数字
    
    ```html
    <--
    可以利用 type 修改列表前的数字样式
    利用start 修改开始的位置，取值只能是一个数字，表示开始的位置
    type 的值只能是:1,a,A,i,I
    -->
    <ol type="a" start="3">
          <li>0001</li>  c.0001
          <li>0002</li>  d.0002
          <li>0003</li>  e.0003
          <li>0004</li>  f.0004
    </ol>
    ```
    
3. 自定义列表
   
    分标题项和列表项,标题项可以是文字也可以是图片，常用于图文混排
    
    ```html
    <dl>
          <dt>标题项</dt>  
          <dd>列表项1</dd>
          <dd>列表项2</dd>
          <dd>列表项3</dd>
    </dl>
    ```
    
    ## 五、路径
    
    1. 相对路径(就用这种)
       
        文件相对该文件的路径，上一级使用 ../
        
        | 分类 | 符号 | 说明 |
        | --- | --- | --- |
        | 同级路径 | ./  或    | 图像文件与HTML文件同级<img src=”code.gif”> 或者<img src=”./code.gif”> |
        | 下级路径 | / | <img src=”/code.gif”> |
        | 上级路径 | ../ | <img src=”../code.gif”> |
        
        ```html
        同级目录：
        code.gif
        ./code.gif
        <img src="img/code.gif" alt="">
        <img src="img/./code.gif" alt="">
        ```
        
    2. 绝对路径
       
        指文件的真正位置，从根目录开始
        
        直接复制图片的路径，但是一般不用这种方法
        
        eg：D:\千峰前端\demo\01-HTML+CSS\02\img\code.gif
        

## 六、图片标签img

<img src=”图片路径” title = “鼠标悬停时的提示信息” alt =”图片不能正常加载时的提示信息” width=”像素” heigth=”像素”>

## 七、超链接标签a

### 2.7.1、超链接的语法

用于实现不同页面的跳转

a 标签包括的内容可以是文本也可以是图片、音频，都可以用于实现页面的跳转

<a href=”链接的路径” title=”鼠标悬停时的提示信息” target=”新页面的打开方式”>内容</a>

超链接target的两个属性：

| 属性 | 说明 |
| --- | --- |
| _self | 默认值，在本窗口打开 |
| _blank | 在新的窗口打开 |

### 2.7.2、超链接的分类

| 分类 | 说明 |
| --- | --- |
| 外部链接 | 链接到外部网页，如<a href=”https://www.baidu.com”>外部链接到百度</a> |
| 内部链接 | 连接到其他html文件，如<a href=”index.html”>链接到同级的index.html文件</a> |
| 空链接 | 暂时未确定要链接到哪里的，可以使用空连接,如<a href=”#”>这是空链接</a> |
| 下载链接 | 如果href里面的地址是一个文件或者压缩包，则下载该文件，如<a href=”./img.zip”>这是一个下载链接</a> |
| 网页元素链接 | 除了文本外，图片、视频等网页元素也可以添加超链接，如<a href=”https://www.baidu.com”><img src=”./img.jpg”></a> |
| 锚点链接 | 通过id跳转到本页面的其他位置<a href=”#id”>锚点链接</a> |
| 电话链接 | 拨打电话<a href=”tel:10086”>电话链接</a> |
| 邮件链接 | 发送邮件<a href=”mailto:2240405189@qq.com>发送邮件</a> |

```html
锚点链接演示
 <h2 id='maodian'>演示用锚点</h2>
<a href="#maodian">这是锚点链接</a>
```

## 八、table表格标签

### 2.8.1、表格的格式

```html
<table><!-- 创建表格 -->
		<tr><!-- tr表示行 -->
				<td>1</td> <!-- td 表示单元格 -->
				<td>2</td>
		</tr>
		<tr>
				<td>1</td>
				<td>2</td>
		</tr>
</table>
```

### 2.8.2、表格属性

这些属性要写到<table></table>标签中

| 属性名 | 属性值 | 描述 |
| --- | --- | --- |
| align | left、center、right | 规定表格相对周围的对齐方式 |
| border | 默认为空 | 规定表格是否有外边框，边框的大小是多少 |
| cellpadding | 像素值 | 规定单元格内容与边框的距离，默认为1px |
| cellspacing | 像素值 | 规定单元格与单元格之间的距离，默认为2px |

tr 标签和 td 标签的文字属性

```html
水平文字对齐： align= "left 或 right 或 center"
文字垂直对齐： valign= "top 或 middle 或 bottom"
```

### 2.8.3、合并单元格

1.合并单元格的方式：

1. 跨行合并：rowspan="合并单元格的个数"
2. 跨列合并：colspan="合并单元格的个数"

2.合并单元格三部曲：

1. 确定跨行还是跨列(左上原则)
2. 找到目标单元格，写上合并方式和合并单元格个数，例:<td rowspan="2"></td>
3. 删除多余的单元格

## 九、form表单标签

**inputb输入框中，通过outline: none; 去除外边框线**

### 2.9.1、form表单格式

<form method=”get 或者 post” action=”向何处发送表单数据” name=”表单的名称”></form>

### 2.9.2、input表单元素

| 属性值 | 描述 |
| --- | --- |
| button | 定义可点击按钮 |
| checkbox | 定义复选框 |
| file | 定义输入字段和"浏览"按钮，供文件上传 |
| hidden | 定义隐藏的输入字段 |
| image | 定义图像形式的提交按钮 |
| password | 定义密码字段，该字段中的字符被掩码 |
| radio | 定义单选按钮，多个按钮必须有同样的name才能实现多选一 |
| reset | 定义重置按钮，重置按钮会清除表单中的所有数据 |
| submit | 定义提交按钮，提交按钮会把表单中的数据发送到服务器 |
| text | 定义单行的输入字段，用户可以在其中输入文本，默认宽度为20个字符 |
| type="email" | 限制用户输入必须为Email类型 |
| type="url" | 限制用户输入必须为URL类型 |
| type="date" | 限制用户输入必须为日期类型，可以更换month、week等来换成相应的月份及周次 |
| type="time" | 限制用户输入必须为时间类型 |
| type="number" | 限制用户输入必须为数字类型，可以用value设置初值，可以用min和max设置范围 |
| type="tel" | 手机号码 |
| type="search" | 搜索框,使用outline: none;去除边框 |
| type="color" | 生成一个颜色表单 |
| type=”range” | 滑块，图片滑块验证？默认值0-100，可以使用min=“”；和max=“”修改其范围，还可以用step控制步长 |

<input type=”输入框类型” 属性=”属性值”>

1. 属性  type 定义输入框的类型
    1. 文本框  type=”text” 
    2. 复选框  type=”checkbox”
    3. 单选框  type=”radio”
    4. 密码框  type=”password”
    5. 提交框  type=”submit”  等价于<button type="submit">提交</button>
    6. 按钮框  type=”button”  等价于<button>按钮</button>
    7. 重置框  type=”reset”  等价于<button type="reset">重置</button>
    8. 文件上传 type=”file”  
2. 属性  checked  规定此input元素首次加载时被选中
3. 属性  placeholder  描述输入字段的提示信息
4. 属性  name  必须设置，否则在提交表单时，用户输入的数据不会发送给服务器
5. 属性  value   用户自定义，规定input元素的值

input 表单属性

| 属性 | 属性值 | 描述 |
| --- | --- | --- |
| name | 用户自定义 | 定义input元素的名称，用于提交给后台，可用于单选框多选一 |
| value | 用户自定义 | 规定input的值 |
| checked | checked | 规定input元素首次加载时应当被选中，因为属性和属性值相同，可以单写属性名 |
| maxlength | 正整数 | 规定输入字段中的字符的最大的长度 |
| disabled | disabled | 禁用该表单 |
| required | required | 表单拥有该属性表示其内容不能为空 |
| placeholder | 提示文本 | 表单的提示信息，存在默认值将不显示 |
| autofocus | autofocus | 自动聚焦，页面加载完成光标自动聚焦到指定表单 |
| autocomplete | off/on | 当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项 |
| multiple | multiple | 可以多选文件提交 |
| pattern | 正则表达式 | 将属性设置为某个格式的正则表达式，在提交时会检查其内容是否符合给定格式 |

pattern

<input pattern=”[0-0][A-Z]{3}” title=”输入内容：一个数字与三个大写字母” placeholder=”输入内容：一个数字与三个大写字母”>

### 2.9.3、表单进阶

1. 单选框radio
   
    多个按钮必须有**同样的name**才能实现多选一
    
    ```html
    <div><input type="radio" name="sex">男</div>
    <div><input type="radio" name="sex">女</div>
    ```
    
2. label 标签
   
    添加label 标签可以增加用户体验
    
    <label>标签为input元素定义标注
    
    <label>标签用于绑定一个表单元素，当点击<label>标签内的文本时，浏览器就会将光标自动转到对应的表单元素，用来增加用户体验
    
    ```html
    格式:
    <label for="male">男</label><input type="radio" name="sex" id="male" />
    <label for="female">男</label><input type="radio" name="sex" id="female" />
    核心：<label></label>标签中的for属性应当与相关的id属性相同
    ```
    
3. 复选框 checkbox
   
    复选框也需要有相同的name值
    
    ```html
    <input type="checkbox" name="habit" id="chouyan" checked><label for="chouyan">抽烟</label>
    <input type="checkbox" name="habit" id="hejiu"><label for="hejiu">喝酒</label>
    <input type="checkbox" name="habit" id="chifeirou"><label for="chifeirou">吃肥肉</label>
    
    ```
    
4. ****select下拉表单元素****

使用场景：页面中有多个选项，并且想要节约页面空间时

option的属性： 

selected：默认选中

value: 用于提交到后端

```html
格式：
<select>
    <option>选项1</option>
    <option>选项2</option>
    <option>选项3</option>
</select>
当在option中定义selected="selected"时，表示该选项为默认选中项
```

```html
<!-- select的属性
        size: 显示选项的个数
        multiple: 进行多项选择，按住ctrl键
    -->
    <select name="" id="" size="4" style="width: 200px;">
        <option value="">江西</option>
        <option value="">河南</option>
        <option value="">河北</option>
        <option value="">广东</option>
        <option value="">福建</option>
    </select>
    <select name="" id="" multiple>
        <option value="">桌子</option>
        <option value="">椅子</option>
        <option value="">凳子</option>
        <option value="">床</option>
    </select>
```

1. 文本域textarea
   
    可以在css中设置 resize: none; 来防止放大文本域
    
    ```html
    <p>请发表你的评论</p>
        cols: 显示的列数 
    		rows： 显示的行数
    <textarea name="" id="" cols="30" rows="10"></textarea>
    ```
    
2. 字段集
   
    用于在边框上面添加一段文字，也可以用定位来做
    
    ```html
    <fieldset>
        <legend>边框上的文字</legend>
    </fieldset>
    ```

# 三、语义化标签

```html
1.<header></header>:头部标签
2.<nav></nav>:导航栏标签
3.<article></article>：内容标签
4.<section></section>: 定义文档某个区域
5.<aside></aside>:侧边栏标签
6.<footer></footer>:尾部标签
```



![语义化案例.png](./../../public/images/语义化案例.png)

# 四、音频、视频标签

video 元素 定义视频

```html
<video src=”movie.ogg” controls>video元素</video>
```

audio 元素 定义音频

```html
<audio src=”someaudio.wav” controls loop>音频元素</audio>
```

**对应属性：**

controls： 如果出现该属性，则向用户显示控件，比如播放按钮

autoplay： 如果出现该属性，则视频在就绪后马上播放，默认是禁用这个属性的

loop： 重复播放

muted： 静音

poster：规定视频正在下载时显示的图像，直到用户点击播放