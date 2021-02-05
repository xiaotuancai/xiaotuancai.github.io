--- 
layout: post
title: 蜂鸟E203处理器FPGA原型验证环境搭建
tags: 
- E203,FPGA
status: publish
type: post
published: true
top: false
---

> vivado的安装参考

    http://training.eeworld.com.cn/video/15232

    https://blog.csdn.net/weixin_40377195/article/details/93683488?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-4&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-4


> mcs烧写有三种kit，注意选择匹配的编译命令，我们选的是nucleikit

    For hbirdkit:

    make install CORE=e203 FPGA_NAME=hbirdkit

    make mcs     CORE=e203 FPGA_NAME=hbirdkit

    ================

    For nucleikit:

    make install CORE=e203 FPGA_NAME=nucleikit

    make mcs     CORE=e203 FPGA_NAME=nucleikit

    ================

    For artydevkit:

    make install CORE=e203 FPGA_NAME=artydevkit

    make mcs     CORE=e203 FPGA_NAME=artydevkit
&nbsp;
> 官方演示(参考性一般)

    https://www.bilibili.com/video/av41835638


> vivado USB补丁安装

    https://blog.csdn.net/lyfwill/article/details/89057303

    https://blog.csdn.net/tomsoft/article/details/80247937

    https://github.com/Digilent/vivado-boards/

> vivado启动可能遇到cmd找不到，需要source

    https://www.jianshu.com/p/866caf7e962c

    https://www.jianshu.com/p/e8f82ab772e8

