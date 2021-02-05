--- 
layout: post
title: 小白学设计模式：简单工厂模式和工厂方法的UML解析
tags: 
- 设计模式
status: publish
type: post
published: true
top: false
---

简单工厂模式：

![](/upload/image/simplefactory.png)

工厂方法模式：

![](/upload/image/factoryfunction.png){:width="950px"}

抽象工厂与工厂方法类似，这里不再列出。&nbsp;

三者的区别：

简单工厂 ： 用来生产同一等级结构中的任意产品。（不支持拓展增加产品）

工厂方法 ：用来生产同一等级结构中的固定产品。（支持拓展增加产品）   

抽象工厂 ：用来生产不同产品族的全部产品。（不支持拓展增加产品；支持增加产品族）


