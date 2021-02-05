--- 
layout: post
title: GitHub上常用的开发协同流程
tags: 
- 开源
- GitHub
status: publish
type: post
published: true
top: false
---
问题描述： 当我们 在github上fork出一个项目后，如果原有的项目更新了，怎样保持我们fork出来的项目和原有项目保持同步呢，并提交我们的代码呢？&nbsp;

1 首先添加你从github上fork的源仓库到本地的git工程

git remote add upstream [url] 

2 假设origin仓库和upstream源仓库都有一个分支branch_name，你在该分支上进行开发，将本地修改commit后，在每次Push前做如下操作，即可实现和上游source_repository_name仓库同步：（需要注意的是在操作step2之前，一定要将checkout到branch_name所指定的branch）

   （1）同步源仓库的信息到本地 
      $ git remote update upstream
   （2）将源仓库的信息merge到本地分支: 
      $ git checkout branch_name
      $ git rebase upstream/branch_name 
      
3 $ git push 将最新同步的代码和修改，提交到你的origin仓库

4 Github上提出Push Request即可,将你的origin仓库的所有修改提交到upstream仓库

GitHub常用的开发协同流程为：将别人的仓库fork成自己的origin仓库 → git clone origin仓库到本地 → 本地添加fork源仓库 → 工作前先git remote update下fork源保持代码较新 → coding → push回自己 → github上提出Push Request即可

转载自：https://blog.csdn.net/wangbaochu/article/details/49470453