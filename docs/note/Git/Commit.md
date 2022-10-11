# git-commit 规范

> 可参考

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

- 提交次数

```bash
git shortlog --numbered --summary

```

- 查看所有的 commit 数

```bash
git log --oneline | wc -l
```

- 提交删除行数

```bash
git log --author="$(git config --get user.name)" --pretty=tformat: --numstat | awk '{ add += $1 ; subs += $2 ; loc += $1 - $2 } END { printf "added lines: %s removed lines : %s total lines: %s\n",add,subs,loc }'
```

- 统计某人代码提交量

```bash
git log --author=zhouguanghao --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -
```

- 查看仓库前 10 名贡献者

```bash
git log --pretty='%aN' | sort | uniq -c | sort -k1 -n -r | head -n 10
```

- 统计每个人增删行数

```bash
git log --format='%aN' | sort -u | while read name; do echo -en "$name\t"; git log --author="$name" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -; done
```

- 查看 git 上的个人代码量

```bash
git log --author="yangwenmai" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -
```
