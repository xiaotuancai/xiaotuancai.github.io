---
layout: page
title: 茶香-Links
permalink: /links/
---

- Management

  [Gabriel Anderbjörk](http://gabriel.anderbjork.se/index.htm)
  
- AI

  [TensorFlow Install On Mac](https://www.tensorflow.org/install/install_mac) -
  [Neuroph](http://neuroph.sourceforge.net/)

- 3GPP规范

  [ftp://ftp.3gpp.org/Specs/archive/](ftp://ftp.3gpp.org/Specs/archive/)

- TextEdit

  [Seven habits of effective text editing](http://www.moolenaar.net/habits.html) -
  [Vim Help](http://vimcdoc.sourceforge.net/doc/help.html) -
  [Vim IDE](https://www.cnblogs.com/zhangsf/archive/2013/06/13/3134409.html) -
  [Cscope](http://cscope.sourceforge.net/) -
  [Ctags](http://ctags.sourceforge.net/)
  
- Makefile

  [Makefile经典教程](http://blog.csdn.net/ruglcc/article/details/7814546/)
  
- 无线通信

  [OAI入门](blog.csdn.net/jxwxg/article/details/58130893) - 
  [openairinterface5g](https://gitlab.eurecom.fr/oai/openairinterface5g) -
  [中国通信网](http://www.c114.com.cn/) -
  [open-cells](https://open-cells.com)

- 科学技术

  [科技部](http://www.most.gov.cn)

- 咨询公司

  [IHS](https://ihsmarkit.com/index.html)  
  
- 亲子

  [宝妈俱乐部](http://cardbang.com)  


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