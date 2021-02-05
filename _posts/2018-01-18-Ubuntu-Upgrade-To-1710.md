--- 
layout: post
title: Ubuntu升级到17.10后，问题收集及解决
tags: 
- 计算机教程
status: publish
type: post
published: true
---
- Background

2018 年 1 月 13 号，Ubuntu 17.04（Zesty Zapus）迎来了 EoL —— Canonical 将不再为它提供安全补丁和软件更新。

- 问题1："cannot open display"
&nbsp;
出现场景：

> 1、打开gedit

> 2、OAI运行./cmake_targets/lte_build_oai/build/lte-softmodem -O ~/opencells-mods/enb.10MHz.b200 -d

解决方案：
执行如下命令：xhot +si:localuser:root

原因：
17.10默认情况下，不允许root访问display
