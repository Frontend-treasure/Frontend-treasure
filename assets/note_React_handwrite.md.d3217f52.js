import{_ as s,o as a,c as n,a as l}from"./app.c011f08c.js";const h=JSON.parse('{"title":"React \u4EE3\u7801\u7247\u6BB5","description":"","frontmatter":{},"headers":[{"level":2,"title":"React \u4EE3\u7801\u7EC4\u7EC7","slug":"react-\u4EE3\u7801\u7EC4\u7EC7","link":"#react-\u4EE3\u7801\u7EC4\u7EC7","children":[]},{"level":2,"title":"\u81EA\u5B9A\u4E49 hook","slug":"\u81EA\u5B9A\u4E49-hook","link":"#\u81EA\u5B9A\u4E49-hook","children":[]}],"relativePath":"note/React/handwrite.md"}'),o={name:"note/React/handwrite.md"},p=l(`<h1 id="react-\u4EE3\u7801\u7247\u6BB5" tabindex="-1">React \u4EE3\u7801\u7247\u6BB5 <a class="header-anchor" href="#react-\u4EE3\u7801\u7247\u6BB5" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u63A8\u8350\u6269\u5C55</p><ul><li><a href="https://marketplace.visualstudio.com/items?itemName=rodrigovallades.es7-react-js-snippets" target="_blank" rel="noreferrer">ES7 React/Redux/GraphQL/React-Native snippets</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens" target="_blank" rel="noreferrer">Error Lens</a></li></ul></div><h2 id="react-\u4EE3\u7801\u7EC4\u7EC7" tabindex="-1">React \u4EE3\u7801\u7EC4\u7EC7 <a class="header-anchor" href="#react-\u4EE3\u7801\u7EC4\u7EC7" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">\u7EC4\u4EF6\u7ED3\u6784</p><p>\u7EC4\u4EF6\u7ED3\u6784\u5EFA\u8BAE\u5206\u4E3A\u56DB\u5927\u5757\uFF08\u6709\u987A\u5E8F\uFF09\uFF1A</p><ol><li>\u72B6\u6001 Hook \u8C03\u7528\uFF08useState\uFF09</li><li>\u526F\u4F5C\u7528 Hook \u8C03\u7528\uFF08useEffect\uFF09</li><li>\u65B9\u6CD5\u5B9A\u4E49</li><li>\u6E32\u67D3\u903B\u8F91\u3002</li></ol></div><div class="language-jsx"><button class="copy"></button><span class="lang">jsx</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Component</span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">children</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u72B6\u6001 Hook \u8C03\u7528</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setState</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u4E5F\u53EF\u4EE5\u5728\u8FD9\u91CC\u5B9A\u4E49 Effect \u8981\u7528\u5230\u7684\u7EAF\u51FD\u6570\uFF0C\u8BB0\u4F4F\u4E0D\u80FD\u4F7F\u7528\u4EFB\u4F55\u51FD\u6570\u5916\u7684\u53D8\u91CF</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u7EAF\u51FD\u6570\u4E5F\u53EF\u4EE5\u8003\u8651\u5355\u72EC\u62C6\u51FA\u6765\uFF0C\u53EF\u80FD\u5C06\u6765\u5728\u522B\u7684\u7EC4\u4EF6\u4E5F\u4F1A\u7528\u5230</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u526F\u4F5C\u7528 Hook \u8C03\u7528</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">useEffect</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{},</span><span style="color:#F07178;"> [])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u65B9\u6CD5\u5B9A\u4E49\uFF0C\u5C3D\u91CF\u4F7F\u7528\u7BAD\u5934\u51FD\u6570</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fn</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u6E32\u67D3\u903B\u8F91</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u5982\u679C\u540E\u9762\u6E32\u67D3\u8868\u8FBE\u5F0F\u8FC7\u4E8E\u590D\u6742\uFF0C\u53EF\u4EE5\u5355\u72EC\u62BD\u51FA\u6765\u653E\u7740\uFF0C\u547D\u540D\u4E3A renderXXX</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u66F4\u597D\u7684\u505A\u6CD5\u8FD8\u662F\u5355\u72EC\u62BD\u51FA\u4E00\u4E2A\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">renderXXX</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;{</span><span style="color:#A6ACCD;">children</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u81EA\u5B9A\u4E49-hook" tabindex="-1">\u81EA\u5B9A\u4E49 hook <a class="header-anchor" href="#\u81EA\u5B9A\u4E49-hook" aria-hidden="true">#</a></h2><p>\u4E5F\u53EB\u62BD\u79BB hook , \u5C31\u662F\u628A\u5E38\u7528\u5230\u7684 Hook \u903B\u8F91\u5355\u72EC\u62BD\u79BB\u51FA\u6765\uFF0C\u65B9\u4FBF\u7EF4\u62A4\u3002\u4E0D\u77E5\u9053\u4EC0\u4E48\u65F6\u5019\u8BE5\u81EA\u5B9A\u4E49 hook? \u5982\u679C\u5B9E\u73B0\u4E00\u4E2A\u903B\u8F91\u9700\u8981\u7528\u5230\u591A\u4E2A Hook\u3001\u591A\u4E2A\u53D8\u91CF\uFF0C\u800C\u4E14\u8FD9\u4E2A\u903B\u8F91\u8FD8\u53EF\u80FD\u5728\u522B\u7684\u7EC4\u4EF6\u4E2D\u590D\u7528, \u90A3\u4E48\u5C31\u662F\u81EA\u5B9A\u4E49 hook \u7684\u597D\u65F6\u673A.</p>`,7),e=[p];function t(c,r,F,y,i,D){return a(),n("div",null,e)}const A=s(o,[["render",t]]);export{h as __pageData,A as default};