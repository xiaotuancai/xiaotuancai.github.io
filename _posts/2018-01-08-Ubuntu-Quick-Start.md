--- 
layout: post
title: 设置Ubuntu下APP的快捷启动方式(Pycharm为例)
tags: 
- 计算机教程
status: publish
type: post
published: true
---
Ubuntu的快捷方式都放在/usr/share/applications，首先在该目录下创建一个Pycharm.desktop

``````
sudo gedit /usr/share/applications/Pycharm.desktop
``````
然后输入以下内容，注意Exec和Icon需要找到正确的路径&nbsp;

``````
[Desktop Entry]
Type=Application
Name=Pycharm
GenericName=Pycharm3
Comment=Pycharm3:The Python IDE
Exec="/XXX/pycharm2017/bin/pycharm.sh" %f
Icon=/XXX/pycharm2017/bin/pycharm.png
Terminal=pycharm
Categories=Pycharm;
``````
---
