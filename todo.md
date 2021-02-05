---
layout: nomath
title: 茶园-ToDo
permalink: /todo/
---


## 最近在干嘛 #

- 2018.9.16 wpa计划、超级大脑计划、css世界计划

- 2018.7.29 图论&neo4j应用(ToDo)

- 2018.6.28 Flask大规模商用部署方案(已经部署实施、待总结输出)

- 2018.5.17 Python Int对象内部机制研究(Done)

- 2018.5.2 Logic Pro X 学习 & Macbook以旧换新

- 2018.5.1 Arduino自动浇花场景分析

- 2018.5.1  《国际商法》、《富爸爸、穷爸爸》阅读（备注：国际商法英文版本：[International Business Law-Text,Cases and Readings](http://law.uibe.edu.cn/upload/editor/file/20160307/20160307101953_0468.pdf)）

- 2018.4.30 《全栈工程师之路》启动，目标5月底完成

- 2018.3.15 Akraino社区预计2018第二季度发布开源项目代码，需要持续关注。akraino.org

- 2018.3.15 ubuntu apache支持https技术文章翻译：1、https://certbot.eff.org/all-instructions/#ubuntu-16-04-xenial-apache 2、https://www.linuxbabe.com/ubuntu/https-apache-letsencrypt-ubuntu16-04-17-10

- 2018.1.26 New Year Plan(重启连载、Iotaitech Plan、FSD、软件无线电、读书)(Doing)

- 2018.1.11 LTE业务流解析(ToDo)

- 2018.1.11 GDB调试指南(ToDo)

- 2017.12.1 OpenBTS & OpenAirInterface(Done)

- 2017.12.1 IBS(Indoor Building Solution)研究(ToDo)

- 2017.11.30 Google GTA项目研究(ToDo)

- 2017.11.30 SDR研究(Based On USRP B210)(Done)

- 2017.10.03 量化项目服务重构(Done)

- 2017.10.01 量化项目上云(Done)

- 2017.10.01 Machine Learning In Python(Doing)

- 2017.11.15 neo4j图形化数据库/NoSql数据库研究(Cancle)

- 2017.10.15 pyunit测试框架研究总结(Done)

- 2017.10.11 杭州云栖大会(Done)

- 2017.09.14 亚马逊AWSome Day西安站(Done)

- 2017.09.15 自然语言处理NLP算法研究(Done)

- 2017.08.31 Django Restful架构实践(Done)

- 2017.06.08 量化项目启动(Done)


<script>
    $(document).ready(function() {
    $.ajax({
        type: "POST",
        url: "https://cardbang.com/BlogCounter/counteradd.php",
        data: {title: "{{ page.title }}", url: "{{ page.url }}"},
        datatype: "html",

        success: function (data) {
        },
        error: function () {
        }
    });
});
</script>
<div id="container"></div>

<link rel="stylesheet" href="/assets/gitment/node_modules/gitment/style/default.css">
<script src="/assets/gitment/node_modules/gitment/dist/gitment.browser.js"></script>
<script>
var gitment = new Gitment({
  // id: '', // 可选。默认为 location.href
  id: '{{ page.title }}',
  owner: 'tanwubin',
  repo: 'tanwubin.github.io',
  oauth: {
    client_id: '60a184657a07c169db75',
    client_secret: 'b467963644f43e9fe93d14a6d2d3fdac246e0f34',
  },
})
gitment.render('container')
</script>