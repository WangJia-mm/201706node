## 提交代码到github上
- 先在github上创建远程仓库
- 初始化git仓库
- 添加readme文件
- 添加忽略文件.gitignore 这个文件需要上传(先创建忽略文件在添加缓存区)
- 空文件夹不会被提交（想提交并且还是空的）添加.gitkeep
- 添加暂存区->添加到历史区-> 添加一个远程地址 ->提交到github上
```
git add .
git commit -m ''
git remote add origin 地址
git push origin master
```

