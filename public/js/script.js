$(document).ready(function() { 
//查找box元素,检测当粘贴时候,
    document.querySelector('#overview').addEventListener('paste', function(e) {
        //判断是否是粘贴图片
        if (e.clipboardData && e.clipboardData.items[0].type.indexOf('image') > -1) 
        {
            var that      = this,
                reader   = new FileReader();
                file     = e.clipboardData.items[0].getAsFile();
            reader.onload = function(e) 
            {
                var xhr = new XMLHttpRequest(),
                    fd  = new FormData();
                var a=window.location.pathname.split("/");
                var url='../upload_attachments';
                if(a[a.length-1]=="edit"){
                    //edit
                    url='../../../upload_attachments';
                }else{
                    //new

                    url='../upload_attachments';
                }
                xhr.open('POST', '../upload_attachments', true);
                xhr.onload = function () 
                {
                    var img = new Image();
                    img.src = "../attachments/"+xhr.responseText;
                    //$('#overview').html($('#overview').html()+"<img class='userpreview_img' src='"+img.src+"'>");

                }
                window.URL = window.URL || window.webkitURL;
                var blobUrl = window.URL.createObjectURL(file);
                fd.append('file',this.result); 
                var picname=Date.now();
                fd.append('description',picname);
                $('#overview').html($('#overview').html()+ '[!!"'+picname+'"!!]'+'');
                xhr.send(fd);
            }
            reader.readAsDataURL(file);
        }
    }, false);
    
    

});
    function findings_check(){
        /*var url="";
        $.post(url,{},function(){
            ;
        });*/
        //return false;
    }