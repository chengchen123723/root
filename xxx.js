// ## 配置 git
// git config --global user.name "github的用户名"
// git config --global user.email github登录邮箱

// 1. git init: 把文件夹托管给 git
// 2. git add .: 保存代码
// 3. git commit -m 'master': 提交代码
// 4. git remote add origin https://github.com/1937444194/root.git 拷贝自己的这行代码 创建仓库
// 5. git push -u origin master: 提交代码到 github 


// // 正常进公司以后步骤
// 1. 创建公钥 私钥
// ssh-keygen -t rsa -C "你的github邮箱"
// 2. 打开公钥
// cat ~/.ssh/id_rsa.pub\

##常用命令
// git status 查看哪些文件修改了
// git add 文件名 保存某个文件到本地
// git add . 保存全部文件到本地
// git commit -m '这里写有意义的注释' 作用:提交代码
// git pull origin master 把远程master新修改的代码拉取到本地(同步远端代码)
// git push origin 远程分支（master）：往远程分支提交代码
// git log 查看日志 或者tig
// git checkout -b 你的分支名 origin/master :创建本地分支
// git branch -v: 查看本地分支
// git branch -a: 查看远程分支
// git checkout 分支名 ：进入某个分支
// git stash save: '文字说明':暂存 //把刚改的东西保存起来
// git stash list: 查看缓存列表
// git stash apply: 代码回滚(回到最近的存储)
// git stash clear: 清空所有缓存
// git stash apply stash@{1} 回到某一个存储上从0开始
// git diff <file>:查看文件修改了哪些内容
// git merge xsa  讲xsa分支与当前分支合并
// git clone github地址:克隆项目
// git fetch :拉远程的分支和本地同步(同步远程分支)
// git reset -—hard hash值 代码提交错误重置代码
// git push -f origin 分支名 :强行提交代码






1. 正常提交
2. 切换到master
3. git merge xsa
4. 正常保存提交
5.合并后可能会发生冲突，自己修改一i下


master - 主分支(文件夹1)
dev （文件夹2）
分支 -> 文件夹
分支 -> 远程分支 本地分支

333
// 这是小生爱的

