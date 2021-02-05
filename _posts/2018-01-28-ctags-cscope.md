--- 
layout: post
title: ctags and cscope
tags: 
- 计算机教程
status: publish
type: post
published: true
---
> ctags

使用命令 ctags -R * 递归生成标签文件,:tag xxx,即可找到你想找的函数或是数据结构或是函数xxx

Ctrl+ ]跳到光标所在函数或者结构体的定义处

Ctrl+ T返回查找或跳转
&nbsp;
>cscope

cscope -Rbkq  （根目录生成）然后vim里面加入：cs add cscope.out,然后就可以调用“cscope find”命令进行查找了

````
-R: 在生成索引文件时,搜索子目录树中的代码

-b: 只生成索引文件,不进入 cscope 的界面

-k: 在生成索引文件时,不搜索 /usr/include 目录

-q: 生成 cscope.in.out 和 cscope.po.out 文件,加快 cscope 的索引速度
````
     
s: 查找C语言符号，即查找函数名、宏、枚举值等出现的地方

g: 查找函数、宏、枚举等定义的位置，类似ctags所提供的功能

d: 查找本函数调用的函数

c: 查找调用本函数的函数

t: 查找指定的字符串

e: 查找egrep模式，相当于egrep功能，但查找速度快多了

f: 查找并打开文件，类似vim的find功能

i: 查找包含本文件的文

eg::cs f g do_fork