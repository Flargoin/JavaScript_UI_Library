import './lib/lib';

$('#first').click(function() {
    $('div').eq(1).fadeToggle(800);
    $('div').addClass('ads');
});

$('[data-count="second"]').click(function() {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).click(function() {
    $('.w-500').fadeToggle(800);
});