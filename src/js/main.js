import './lib/lib';

$('button').on('click', function() {
    $('.div').eq(2).toggleClass('active');
});

/* console.log($('.div').eq(2).find('.some')); */
/* console.log($('.some').closest('.findme1')); */
console.log($('.findme').siblings());