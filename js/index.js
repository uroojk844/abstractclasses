var courseList = [
    {
        title: "HTML",
        category: 'Front-end Development',
        duration: '3 Months'
    },
    {
        title: "CSS",
        category: 'Front-end Development',
        duration: '3 Months'
    },
    {
        title: "Bootstrap",
        category: 'Front-end Development',
        duration: '3 Months'
    },
    {
        title: "JavaScript",
        category: 'Front-end Development',
        duration: '3 Months'
    },
    {
        title: "PHP",
        category: 'Back-end Development',
        duration: '4 Months'
    },
    {
        title: "SQL",
        category: 'Back-end Development',
        duration: '4 Months'
    },
    {
        title: "Python",
        category: 'Programming Language',
        duration: '3 Months'
    },
    {
        title: "C++",
        category: 'Programming Language',
        duration: '3 Months'
    },
    {
        title: "Java",
        category: 'Programming Language',
        duration: '3 Months'
    },
    {
        title: "React.js",
        category: 'MERN',
        duration: '3 Months'
    },
    {
        title: "Node.js",
        category: 'MERN',
        duration: '3 Months'
    },
    {
        title: "Express.js",
        category: 'MERN',
        duration: '3 Months'
    },
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
