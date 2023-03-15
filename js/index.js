var serviceList = [
    {
        title: "HTML"
    },
    {
        title: "CSS",
    },
    {
        title: "JavaScript",
    },
    {
        title: "PHP",
    },
    {
        title: "SQL",
    },
    {
        title: "Python",
    },
    {
        title: "C++",
    },
    {
        title: "Java",
    }
];

let isNavOpen = false;
$('.open_nav').click(function (e) { 
    $(this).toggleClass('active');
    if (!isNavOpen) 
        $('.open_nav svg').attr('data-icon', 'xmark');
    else
        $('.open_nav svg').attr('data-icon', 'bars');
    isNavOpen = !isNavOpen;
});

$(window).scroll(function () { 
    if($(this).scrollTop() > $(window).height())
        $('#backToTop').css('width', '50px');
    else
        $('#backToTop').css('width', 0);
});
