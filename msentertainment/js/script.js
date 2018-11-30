$(document).ready(function(){
$('.accesseries').click(function(){
$('#equipments').modal('show');
var number=$(this).data('name');
var title=$('.accesseries'+number).html();
var desc=$('.accesseries_p'+number).html();
$('.title_modal').html(title);
$('.content_modal').html(desc);

});
$('.project_modal').click(function(){
$('#myModal1').modal('show');
var number=$(this).data('value');
var title=$(this).html();
var img_src=$('.project_img'+number).attr('src');
var desc=$('.project_d'+number).html();
$('.title_of_prject').html(title);
$('.desc_of_prject').html(desc);
$('.img_of_project').attr('src',img_src);
	});

});