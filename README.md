# miniupload

this is an upload javascript with jquery ajax and layer.js(not necessary)(http://layer.layui.com/  you will love this.it's awesome)
it's very easy to use ,and you can make changes as needed

how to use

<input type="file" style="display:none" id="upload" />
<input type="button" onclick="upload()" />   <% easy to design it with css style %>

<script>
funtion upload(){
$("#upload").trigger("click").miniupload(
{
    url:"",
    filetype: ["xls", "xlsx"],
    data:{param:''}
},function(data){
});
}
</script>
