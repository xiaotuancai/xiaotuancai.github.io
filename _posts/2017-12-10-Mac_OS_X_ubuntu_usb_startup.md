--- 
layout: post
title: Mac OS X ubuntu usb启动盘制作教程
tags: 
- 计算机教程
status: publish
type: post
published: true
---
- hdiutil

第一步,需要到Ubuntu下载需要的Ubuntu的安装文件。
然后就需要使用第一个命令hdiutil。
hdituil:是一个Mac OS上面处理镜像文件的命令,可以对镜像文件进行制作，验证和转换等...
我们知道DMG格式是Mac OS上常用的打包格式文件，需要把下载的Ubuntu安装文件（.iso）转换成(.dmg)格式的文件,方便在Mac OS上面进行操作，转换命令:&nbsp;

````
cd Downloads/ 
````

````
hdiutil convert -format UDRW -o ubuntu.iso ubuntu-17.04-desktop-amd64.iso
````

-format为生成文件的权限,UDRW :表示转换成有read/write的权限的镜像。
等待转换完成即可~

- diskutil

第二步需要需要对U盘进行操作，而diskutil就是用来对Mac OS的磁盘操作的命令。
diskutil:操作本地磁盘，可以对磁盘进行卸载，挂载等操作。
列出当前挂载的磁盘:

````
diskutil list
````

````
brieftimedeMacBook-Pro:Downloads brieftime$ diskutil list
/dev/disk0 (internal, physical):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      GUID_partition_scheme                        *251.0 GB   disk0
   1:                        EFI EFI                     209.7 MB   disk0s1
   2:                 Apple_APFS Container disk1         250.8 GB   disk0s2

/dev/disk1 (synthesized):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      APFS Container Scheme -                      +250.8 GB   disk1
                                 Physical Store disk0s2
   1:                APFS Volume Macintosh HD            169.1 GB   disk1s1
   2:                APFS Volume Preboot                 22.2 MB    disk1s2
   3:                APFS Volume Recovery                506.6 MB   disk1s3
   4:                APFS Volume VM                      2.1 GB     disk1s4

/dev/disk2 (external, physical):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:     FDisk_partition_scheme                        *8.0 GB     disk2
   1:                  Apple_HFS USB-8G                  8.0 GB     disk2s1
````

---

其中/dev/disk2就是U盘。
需要先卸载掉U盘，然后在把安装文件写入到U盘中，这样就需要用到卸载命令：

````
diskutil unmountDisk /dev/disk2
````

再次使用diskutil list命令就不会显示出disk2了。

- dd

第三步，把安装文件写入U盘，这里需要使用命令dd
dd:是Unix和类Unix系统上的命令，作用就是用指定大小的块拷贝一个文件，并在拷贝的同时进行指定的转换。

在进行拷贝之前，还需要做的一件时间,因为使用hdiutil转换的文件后缀名为.dmg,所以需要把文件重命名为.iso，在安装的时候系统才能够更好的识别。

````
mv ubuntu.iso.dmg ubuntu.iso
````

然后把安装文件拷贝到U盘中

````
sudo dd if=./ubuntu.iso of=/dev/rdisk2 bs=1M
````

注意bs=1M，M为大写（dd: invalid number ‘1m‘ error if you have GNU coreutils installed. In that case you need to use 1M）

这行命令必须使用root权限，

if:输入的文件名
of:输出的文件名
bs:是块大小，这里使用1m的块大小。
漫长的等待....

````
brieftimedeMacBook-Pro:Downloads brieftime$ sudo dd if=./ubuntu.iso of=/dev/rdisk2 bs=1M
1534+1 records in
1534+1 records out
1609039872 bytes (1.6 GB, 1.5 GiB) copied, 103.566 s, 15.5 MB/s
````

````
sudo diskutil eject /dev/disk2
````

操作完成之后，安全地拔出U盘。

如果出现弹出对话框：插入的磁盘在这台电脑上不可读，在上一步操作完成后，点击ignore即可。

---
