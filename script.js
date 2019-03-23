for (i=1; i<11;i++)
{
    $("#ourlist").append("<li>"+i+"</li>");
}
var listVisible = true;

$('button').on('click', function(){
    if(listVisible){
    $('ul').fadeOut(5000);
    listVisible=false;
    $('button').html('показать');}
else {    $('ul').fadeIn(5000);
    listVisible=true;
    $('button').html("скрыть");}
})
/* 
 * 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


