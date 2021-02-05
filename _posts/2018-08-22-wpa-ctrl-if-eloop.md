--- 
layout: post
title: wpa ctrl i/f的eloop机制
tags: 
- wlan
status: publish
type: post
published: true
top: false
---

下图为wpa的模块图，核心为eloop机制，这里记录一些配置维护的eloop是如何注册的。

![](/upload/image/wpa_supplicant.png) &nbsp;

函数调用关系：

wpa_supplicant_ctrl_iface_init->wpas_ctrl_iface_open_sock

初始化过程中，在wpas_ctrl_iface_open_sock中会注册配置维护的回调函数：

```
eloop_register_read_sock(priv->sock, wpa_supplicant_ctrl_iface_receive,wpa_s, priv);
```

最终处理配置维护消息的函数wpa_supplicant_ctrl_iface_process根据客户发送过来的具体命令进行匹配处理。



