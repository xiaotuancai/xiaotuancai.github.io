---
layout: page
title: 茶农-Grower
permalink: /teawaiter/
---
![](/upload/image/tanwubin.github.io.jpg){:width="950px"}

## 茶馆小二 ##

- 2013年从西安电子科技大学毕业，至今工作于华为
- 擅长六西格玛持续改进
- 敏捷/Devops实践推广者
- 对创新及商业模式有深入研究和独到见解，国际TRIZ协会认证成员
- 软件测试自动化及智能化实践探索及推行者
- 看板文化推行者，基于看板的敏捷项目管理落地实践

## 小二兴趣 ##

- 哲学
- 计算机
- 无线电
- 写作(小说、博客)

## 编程语言技能 ##

- Python
- PHP
- Java
- C/C++

Good At Python&PHP

## 培训 ##

- TRIZ创新培训
- 如何推行看板文化
- 六西格玛与持续改进
- 基于开源社区的思路如何构建企业的工程师文化

## 总结/项目 ##

- 2018.06.18：创建打卡帮(微信小程序)：4+1：结交一个朋友、参与一项运动、培养一种爱好、阅读一本好书、养成一个好习惯

- 2018.01.20：[技术革命的驱动力与未来(2018-2035)](https://tanwubin.github.io/upload/pdf/%E6%8A%80%E6%9C%AF%E9%9D%A9%E5%91%BD%E7%9A%84%E9%A9%B1%E5%8A%A8%E5%8A%9B%E4%B8%8E%E6%9C%AA%E6%9D%A5(2018-2035).pdf)

- 2018.01.01：[宝妈俱乐部](https://cardbang.com):专注儿童教育

- 2012.03.10：C114通信人家园原创连载[《大话数字电子技术》](http://www.txrjy.com/thread-602453-1-1.html)，阅读量：173516人次

## 联络方式 ##

- 邮件：brieftime@icloud.com

- 留言(@tanwubin)：https://tanwubin.github.io/teawaiter/


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
