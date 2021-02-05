--- 
layout: post
title: Mac OS X USB格式化的两种方法
tags: 
- 计算机教程
status: publish
type: post
published: true
---
- 磁盘工具

使用磁盘工具中的擦除功能

- diskutil

``````
sudo diskutil eraseDisk FAT32 usb_name MBRFormat /dev/disk2
``````
其中usb_name是格式化后的卷标。&nbsp;

/dev/disk2是格式化的盘符

实际例子：

``````
brieftime$ sudo diskutil eraseDisk FAT32 USB MBRFormat /dev/disk2
Started erase on disk2
Unmounting disk
Creating the partition map
Waiting for partitions to activate
Formatting disk2s1 as MS-DOS (FAT32) with name USB
512 bytes per physical sector
/dev/rdisk2s1: 15616184 sectors in 1952023 FAT32 clusters (4096 bytes/cluster)
bps=512 spc=8 res=32 nft=2 mid=0xf8 spt=32 hds=255 hid=2 drv=0x80 bsec=15646718 bspf=15251 rdcl=2 infs=1 bkbs=6
Mounting disk
Finished erase on disk2
``````
---
