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

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title 111',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam perferendis dolore natus nesciunt nobis tempore laudantium maiores accusantium dicta neque repellat quasi sit eaque, quis cupiditate. Cumque quaerat unde quibusdam?',
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true 
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                ()=> {
                    alert("Данные сохранены");
                }
            ],
            [
                'Another btn',
                ['btn-warning', 'ml-10'],
                false,
                () => {
                    alert('Hello world!');
                }
            ]
        ],
    }
}));