$.ajax({
            type:"POST",
            url:"https://cardbang.com/BlogCounter/counterget.php",
            data:{title:"{{ post.title }}",url:"{{ post.url }}"},
            datatype: "html",//"xml", "html", "script", "json", "jsonp", "text".

            success:function(data){
                $("#{{post.id | remove:'/'}}").html(data);
            },
            error: function(){
                $("#{{post.id | remove:'/'}}").html(0);
            }
        });