# Git

> Git is a free and open source distributed version control system

::: tip 什么是 Git?
Git 是一个开源免费的分布式版本控制系统, 被广泛应用于团队协同开发,版本控制产品迭代
:::

## 学习 git

::: info 学习 Git

- [learngitbranching](https://learngitbranching.js.org/?locale=zh_CN)

  - 这个网站从基础的 git 操作到高阶操作四个阶段全面覆盖，相比看视频文档，可视化动画的操作更加直观。

- [廖雪峰，廖神的 Git 教程](https://www.liaoxuefeng.com/wiki/896043488029600)
  - 浅显易懂，带图文带练习非常适合入门，当年小白的我也是看廖神的博客过来滴

:::

## git commit

::: warning commit-规范

> 你的 commit 信息应该是有帮助的, 而不是多余的话

`git commit -m "feat: implement fetchData api"`

- init - init Projects
  - `项目初始化`
- feat - A new feature
  - `实现新的功能,特性`
- fix -A bug fix
  - `修复 bug,error`
- docs - Documentation only changes
  - `文档改进等`
- style - Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  - `样式修改,如缩进,格式化,单引号等`
- refactor - A code change that neither fixes a bug nor adds a feature Type of change
  - `重构`
- chore - Other changes that don't modify src or test files
  - `配置文件但不影响核心代码src`
- test - Adding missing tests or correcting existing tests
  - `测试, 增加单元测试等`
- perf - A code change that improves performance
  - '性能优化'
- build - Changes that affect the build system or external dependencies (example scopes: gulp, broccoli,npm)
  - `构建变化, 如npm,maven,gradle等构建工具`
- ci - Changes to our Cl configuration files and scripts (example scopes: - Travis, Circle,BrowserStack, SauceLabs)
  - `持续集成配置,自动化脚本等`
- revert - Reverts a previous commit
  - `恢复先前的commit`

:::

## git branch

::: info git 分支
多用分支, 大多数情况下,每个开发人员自己维护自己功能的分支, 再由专门人员合并到同一分支

> 一个项目的分支情况可能如下:

- main(主分支,发布正式版本)
- dev(开发分支)
- dev-A(A 人员的开发分支)
- dev-B(B 人员的开发分支)
- dev-C(C 人员的开发分支)

:::

## git stash

可能你**正在某条分支实现某个功能**, 但产品突然告诉你某某分支出了 BUG 需要你去修复,但你功能还未完成不能`commit`, 那么你可以将本地代码`git stash`暂存起来 , 这时候你就可以切换去别的分支修复完后再通过`git stash pop` 回到之前的工作状态.

## git reset

- 撤销 comit
- 撤销 add.
- 重置 Head
- 回退版本

## git reflog

> git-reflog 是用来恢复本地错误操作很重要的一个命令

事实上,git 并不简单, 团队中并不是所有人都对 git 的工作原理很熟悉,这会导致在开发过程中会产生许多问题, 代码冲突,代码丢失. commit 丢失等等, 一旦处理不好, 就是团队的背锅侠, 但只要掌握好`git rebase,git reflog ` , 很多错误操作都可以及时修复过来.

## git cherry-pick

**对于多分支的代码库，将代码从一个分支转移到另一个分支是常见需求。**

1. 一种情况是，你需要另一个分支的所有代码变动，那么就采用合并（`git merge`）。
1. 另一种情况是，你只需要部分代码变动（某几个提交），这时可以采用 `Cherry pick`。

## git rebase

> git rebase 命令在`另一个分支基础之上重新应用`，用于把一个分支的修改合并到当前分支

## 常用命令

### 查看仓库状态

```bash
git status
```

### 查看日志

```bash
git log                            # 查看日志
git log -p                         # 查看详细历史
git log --stat                     # 查看简要统计
git log --oneline --graph 		   # 查看简单历史 显示树

git reflog                         # 查看操作记录
```

### 克隆仓库

```bash{2}
git clone 仓库地址
# 克隆时候要注意 克隆的 分支 是否 是你想要的~
```

### 创建分支并切换

```bash{1,4,7,10}
# 创建分支并切换
git checkout -b 分支名称

# 创建分支
git branch 分支名称

# 切换分支
git checkout 分支名称

# 因为git checkout 既有撤销文件 又有创建文件等功能, 推荐使用 git switch切换分支
git switch 切换分支
```

### 删除某条分支

```bash
git branch -d 分支名称           # 删除该分支（不能删除当前所在的分支，不能删除没有合并到master上的分支）
git branch -D 分支名称           # 删除该分支（可以删除没有合并到master上的分支）
git push -d origin branchName   # 删除远程分支
```

### 提交并推送

```bash
git commit -m '注释信息'
git push '本地分支'  '远程分支'
```

### 撤销已经 add 的文件

```bash
git reset HEAD <路径/文件名> # 回退暂存区里的文件
```

### 撤销已经 commit 的文件

```bash
git reset --hard HEAD^   # 丢弃最新提交（未提交的内容会被擦掉）
git reset --soft HEAD^   # 丢弃最新提交（未提交的内容不会被擦掉）
```

### 修改 commit 注释信息

```bash
git commit --amend        #对最新的一条commit进行修正
```

### 暂存代码(加需求常用)

```bash
git stash           # 暂存代码(直接保存当前修改的文件代码)
git stash list      # 查看暂存代码列表
git stash apply     # 命令时可以通过名字指定使用哪个stash，默认使用最近的stash（即stash@{0}）
git stash pop       # 弹出暂存代码（出栈，删除list的这行记录）
git stash drop      # 删除指定的stash记录
```

### 查看某段代码谁写的

> blame 的意思是 '责怪' , 使用这条命令的背后含义你懂的 😁

```bash
git blame <file-name>
```

### git 查看某个文件的修改历史

```bash
git show '每次提交产生的哈希值'
```

### 提交 Pull Request

1. 先 fork 源仓库
2. 修改代码
3. 创建新的分支
4. 提交代码到新分支
5. 拉取一下最新代码
6. 到源仓库发起 pr
7. 等待 merge

### 合并分支

```bash
git merge '分支名称'          #  将分支合并到当前分支
```

### 重新设置基准点

```bash
git rebase 目标基础点                     重新设置基础点
git pull --rebase 			从远程仓库拉去代码并重新设置基础点
```

### 解决冲突

冲突说明 有 2 人以上修改了同一个文件, git 不知道该保留哪一个人修改的代码

> 遇到冲突需要手动修改 , 手动修改冲突的文件

```bash
git fetch    # 拉取远端代码,但不merge
git merge    # git pull  =  git fetch + git merge
```

## monorepo

[Monorepo 是什么，为什么大家都在用？](https://zhuanlan.zhihu.com/p/77577415)

## sub-module

[Git 中 submodule 的使用](https://zhuanlan.zhihu.com/p/87053283)
