import{_ as e,o as t,c as i,a}from"./app.bd7dc5ce.js";const p=JSON.parse('{"title":"Git \u9762\u8BD5\u9898","description":"","frontmatter":{},"headers":[{"level":2,"title":"git \u4E0E svn \u7684\u533A\u522B\u5728\u54EA\u91CC","slug":"git-\u4E0E-svn-\u7684\u533A\u522B\u5728\u54EA\u91CC","link":"#git-\u4E0E-svn-\u7684\u533A\u522B\u5728\u54EA\u91CC","children":[]},{"level":2,"title":"git pull \u548C git fetch \u7684\u533A\u522B","slug":"git-pull-\u548C-git-fetch-\u7684\u533A\u522B","link":"#git-pull-\u548C-git-fetch-\u7684\u533A\u522B","children":[]},{"level":2,"title":"git rebase \u548C git merge \u7684\u533A\u522B","slug":"git-rebase-\u548C-git-merge-\u7684\u533A\u522B","link":"#git-rebase-\u548C-git-merge-\u7684\u533A\u522B","children":[]},{"level":2,"title":"\u9879\u76EE\u53E6\u4E00\u6761\u5206\u652F\u51FA\u73B0 BUG \u4E86\uFF0C\u4F60\u600E\u4E48\u529E?","slug":"\u9879\u76EE\u53E6\u4E00\u6761\u5206\u652F\u51FA\u73B0-bug-\u4E86\uFF0C\u4F60\u600E\u4E48\u529E","link":"#\u9879\u76EE\u53E6\u4E00\u6761\u5206\u652F\u51FA\u73B0-bug-\u4E86\uFF0C\u4F60\u600E\u4E48\u529E","children":[]},{"level":2,"title":"\u64A4\u9500\u5DF2\u7ECF\u63D0\u4EA4\u7684\u6587\u4EF6?","slug":"\u64A4\u9500\u5DF2\u7ECF\u63D0\u4EA4\u7684\u6587\u4EF6","link":"#\u64A4\u9500\u5DF2\u7ECF\u63D0\u4EA4\u7684\u6587\u4EF6","children":[]},{"level":2,"title":"\u64A4\u9500 add \u548C commit ?","slug":"\u64A4\u9500-add-\u548C-commit","link":"#\u64A4\u9500-add-\u548C-commit","children":[]},{"level":2,"title":"\u63D0\u4EA4\u4EE3\u7801\u51B2\u7A81\u4E86\u8FD9\u4E48\u89E3\u51B3\uFF1F\u5982\u4F55\u907F\u514D\u51B2\u7A81?","slug":"\u63D0\u4EA4\u4EE3\u7801\u51B2\u7A81\u4E86\u8FD9\u4E48\u89E3\u51B3\uFF1F\u5982\u4F55\u907F\u514D\u51B2\u7A81","link":"#\u63D0\u4EA4\u4EE3\u7801\u51B2\u7A81\u4E86\u8FD9\u4E48\u89E3\u51B3\uFF1F\u5982\u4F55\u907F\u514D\u51B2\u7A81","children":[]},{"level":2,"title":"git submodule","slug":"git-submodule","link":"#git-submodule","children":[]}],"relativePath":"note/Git/Git-interview.md"}'),d={name:"note/Git/Git-interview.md"},c=a('<h1 id="git-\u9762\u8BD5\u9898" tabindex="-1">Git \u9762\u8BD5\u9898 <a class="header-anchor" href="#git-\u9762\u8BD5\u9898" aria-hidden="true">#</a></h1><h2 id="git-\u4E0E-svn-\u7684\u533A\u522B\u5728\u54EA\u91CC" tabindex="-1">git \u4E0E svn \u7684\u533A\u522B\u5728\u54EA\u91CC <a class="header-anchor" href="#git-\u4E0E-svn-\u7684\u533A\u522B\u5728\u54EA\u91CC" aria-hidden="true">#</a></h2><p>git \u548C svn \u6700\u5927\u7684\u533A\u522B\u5728\u4E8E git \u662F\u5206\u5E03\u5F0F\u7684\uFF0C\u800C svn \u662F\u96C6\u4E2D\u5F0F\u7684\u3002\u56E0\u6B64\u6211\u4EEC\u4E0D\u80FD\u518D\u79BB\u7EBF\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528 svn\u3002\u5982\u679C\u670D\u52A1\u5668\u51FA\u73B0\u95EE\u9898\uFF0C\u6211\u4EEC\u5C31\u6CA1\u6709\u529E\u6CD5\u4F7F\u7528 svn \u6765\u63D0\u4EA4\u6211\u4EEC\u7684\u4EE3\u7801\u3002</p><p>svn \u4E2D\u7684\u5206\u652F\u662F\u6574\u4E2A\u7248\u672C\u5E93\u7684\u590D\u5236\u7684\u4E00\u4EFD\u5B8C\u6574\u76EE\u5F55\uFF0C\u800C git \u7684\u5206\u652F\u662F\u6307\u9488\u6307\u5411\u67D0\u6B21\u63D0\u4EA4\uFF0C\u56E0\u6B64 git \u7684\u5206\u652F\u521B\u5EFA\u66F4\u52A0\u5F00\u9500\u66F4\u5C0F\u5E76\u4E14\u5206\u652F\u4E0A\u7684\u53D8\u5316\u4E0D\u4F1A\u5F71\u54CD\u5230\u5176\u4ED6\u4EBA\u3002svn \u7684\u5206\u652F\u53D8\u5316\u4F1A\u5F71\u54CD\u5230\u6240\u6709\u7684\u4EBA</p><h2 id="git-pull-\u548C-git-fetch-\u7684\u533A\u522B" tabindex="-1">git pull \u548C git fetch \u7684\u533A\u522B <a class="header-anchor" href="#git-pull-\u548C-git-fetch-\u7684\u533A\u522B" aria-hidden="true">#</a></h2><p>git fetch \u53EA\u662F\u5C06\u8FDC\u7A0B\u4ED3\u5E93\u7684\u53D8\u5316\u4E0B\u8F7D\u4E0B\u6765\uFF0C\u5E76\u6CA1\u6709\u548C\u672C\u5730\u5206\u652F\u5408\u5E76\u3002<br> git pull \u4F1A\u5C06\u8FDC\u7A0B\u4ED3\u5E93\u7684\u53D8\u5316\u4E0B\u8F7D\u4E0B\u6765\uFF0C\u5E76\u548C\u5F53\u524D\u5206\u652F\u5408\u5E76\u3002<code>git pull</code> = <code>git fetch</code> + <code>git merge</code></p><h2 id="git-rebase-\u548C-git-merge-\u7684\u533A\u522B" tabindex="-1">git rebase \u548C git merge \u7684\u533A\u522B <a class="header-anchor" href="#git-rebase-\u548C-git-merge-\u7684\u533A\u522B" aria-hidden="true">#</a></h2><p>git merge \u548C git rebase \u90FD\u662F\u7528\u4E8E\u5206\u652F\u5408\u5E76\uFF0C\u5173\u952E\u5728 commit \u8BB0\u5F55\u7684\u5904\u7406\u4E0A\u4E0D\u540C\u3002</p><p>git merge \u4F1A\u65B0\u5EFA\u4E00\u4E2A\u65B0\u7684 commit \u5BF9\u8C61\uFF0C\u7136\u540E\u4E24\u4E2A\u5206\u652F\u4EE5\u524D\u7684 commit \u8BB0\u5F55\u90FD\u6307\u5411\u8FD9\u4E2A\u65B0 commit \u8BB0\u5F55\u3002\u8FD9\u79CD\u65B9\u6CD5\u4F1A\u4FDD\u7559\u4E4B\u524D\u6BCF\u4E2A\u5206\u652F\u7684 commit \u5386\u53F2\u3002</p><p>git rebase \u4F1A\u5148\u627E\u5230\u4E24\u4E2A\u5206\u652F\u7684\u7B2C\u4E00\u4E2A\u5171\u540C\u7684 commit \u7956\u5148\u8BB0\u5F55\uFF0C\u7136\u540E\u5C06\u63D0\u53D6\u5F53\u524D\u5206\u652F\u8FD9\u4E4B\u540E\u7684\u6240\u6709 commit \u8BB0\u5F55\uFF0C\u7136\u540E\u5C06\u8FD9\u4E2A commit \u8BB0\u5F55\u6DFB\u52A0\u5230\u76EE\u6807\u5206\u652F\u7684\u6700\u65B0\u63D0\u4EA4\u540E\u9762\u3002\u7ECF\u8FC7\u8FD9\u4E2A\u5408\u5E76\u540E\uFF0C\u4E24\u4E2A\u5206\u652F\u5408\u5E76\u540E\u7684 commit \u8BB0\u5F55\u5C31\u53D8\u4E3A\u4E86\u7EBF\u6027\u7684\u8BB0\u5F55\u4E86\u3002</p><h2 id="\u9879\u76EE\u53E6\u4E00\u6761\u5206\u652F\u51FA\u73B0-bug-\u4E86\uFF0C\u4F60\u600E\u4E48\u529E" tabindex="-1">\u9879\u76EE\u53E6\u4E00\u6761\u5206\u652F\u51FA\u73B0 BUG \u4E86\uFF0C\u4F60\u600E\u4E48\u529E? <a class="header-anchor" href="#\u9879\u76EE\u53E6\u4E00\u6761\u5206\u652F\u51FA\u73B0-bug-\u4E86\uFF0C\u4F60\u600E\u4E48\u529E" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4F60\u5F53\u524D\u5206\u652F\u5DE5\u4F5C\u8FD8\u6CA1\u505A\u5B8C\uFF0C\u53C8\u4E0D\u60F3\u63D0\u4EA4\uFF0C\u90A3\u4E48\u53EF\u4EE5\u4F7F\u7528<code>git stash</code>\uFF0C\u7136\u540E\u4F7F\u7528<code>git checkout \u5206\u652F\u540D</code>\u5207\u6362\u5206\u652F\u4FEE\u590D bug\uFF0C\u518D\u5207\u56DE\u6765\u4F7F\u7528<code>git stash pop</code></p><h2 id="\u64A4\u9500\u5DF2\u7ECF\u63D0\u4EA4\u7684\u6587\u4EF6" tabindex="-1">\u64A4\u9500\u5DF2\u7ECF\u63D0\u4EA4\u7684\u6587\u4EF6? <a class="header-anchor" href="#\u64A4\u9500\u5DF2\u7ECF\u63D0\u4EA4\u7684\u6587\u4EF6" aria-hidden="true">#</a></h2><p><code>git checkout .</code></p><p>git checkout \u9664\u4E86\u521B\u5EFA\u5207\u6362\u5206\u652F\u7684\u529F\u80FD\u8FD8\u6709\u64A4\u9500\u7684\u529F\u80FD\uFF0C\u4E3A\u907F\u514D\u6DF7\u6DC6\uFF0Cgit2.x \u7248\u672C\u63A8\u51FA\u4E86<code>git switch</code> \u6765\u4EE3\u66FF <code>git checkout</code> \u5207\u6362\u5206\u652F\u7684\u529F\u80FD</p><h2 id="\u64A4\u9500-add-\u548C-commit" tabindex="-1">\u64A4\u9500 add \u548C commit ? <a class="header-anchor" href="#\u64A4\u9500-add-\u548C-commit" aria-hidden="true">#</a></h2><blockquote><p>\u64A4\u9500 add</p></blockquote><p><strong><code>git reset HEAD .</code></strong></p><blockquote><p>\u64A4\u9500 commit</p></blockquote><p><strong><code>git reset --soft HEAD^</code></strong></p><h2 id="\u63D0\u4EA4\u4EE3\u7801\u51B2\u7A81\u4E86\u8FD9\u4E48\u89E3\u51B3\uFF1F\u5982\u4F55\u907F\u514D\u51B2\u7A81" tabindex="-1">\u63D0\u4EA4\u4EE3\u7801\u51B2\u7A81\u4E86\u8FD9\u4E48\u89E3\u51B3\uFF1F\u5982\u4F55\u907F\u514D\u51B2\u7A81? <a class="header-anchor" href="#\u63D0\u4EA4\u4EE3\u7801\u51B2\u7A81\u4E86\u8FD9\u4E48\u89E3\u51B3\uFF1F\u5982\u4F55\u907F\u514D\u51B2\u7A81" aria-hidden="true">#</a></h2><p>\u5148\u5907\u4EFD\u81EA\u5DF1\u7684\u4EE3\u7801\uFF0C\u518D\u624B\u52A8\u89E3\u51B3\u51B2\u7A81\u7684\u4EE3\u7801\uFF0C\u518D\u628A\u81EA\u5DF1\u7684\u4EE3\u7801\u52A0\u56DE\u53BB\u3002\u91CD\u65B0\u63A8\u9001\uFF0C\u907F\u514D\u51B2\u7A81\u8981\u517B\u6210\u597D\u4E60\u60EF\uFF0C\u63A8\u9001\u4E4B\u524D\u5148<code>git pull</code>\u4E0B\u62C9\u53D6\u6700\u65B0\u4EE3\u7801\uFF0C\u51B2\u7A81\u7684\u539F\u56E0\u5F80\u5F80\u662F\u56E0\u4E3A\u4E0D\u540C\u4EBA\u5458\u5BF9\u540C\u4E00\u5730\u65B9\u8FDB\u884C\u4E86\u4FEE\u6539\uFF0Cgit \u4E0D\u77E5\u9053\u600E\u4E48\u529E\u3002</p><h2 id="git-submodule" tabindex="-1">git submodule <a class="header-anchor" href="#git-submodule" aria-hidden="true">#</a></h2><blockquote><p>Git \u7684 submodule \u529F\u80FD\u5C31\u662F\u5EFA\u7ACB\u4E86\u5F53\u524D\u9879\u76EE\u4E0E\u5B50\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF1A\u5B50\u6A21\u5757\u8DEF\u5F84\u3001\u5B50\u6A21\u5757\u7684\u8FDC\u7A0B\u4ED3\u5E93\u3001\u5B50\u6A21\u5757\u7684\u7248\u672C\u53F7</p></blockquote>',24),o=[c];function r(l,g,s,h,n,u){return t(),i("div",null,o)}const b=e(d,[["render",r]]);export{p as __pageData,b as default};
