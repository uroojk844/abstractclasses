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
        duration: '4 Months'
    },
    {
        title: "Node.js",
        category: 'MERN',
        duration: '4 Months'
    },
    {
        title: "Express.js",
        category: 'MERN',
        duration: '4 Months'
    },
];

for (let i = 0; i < courseList.length; i++) {
    let card = document.createElement("div");
    card.className = "card";
    let image = document.createElement("div");
    image.className = "image";
    let img = document.createElement("img");
    img.setAttribute("src", `img/${i+1}.png`);
    img.setAttribute("alt", courseList[i].title);
    let c = document.createElement("div");
    c.className = "content";
    let cardTitle = document.createElement("div");
    cardTitle.className = "title";
    cardTitle.innerHTML = courseList[i].title;
    let desc = document.createElement("div");
    desc.className = "desc";
    desc.innerHTML = courseList[i].duration;
    let desc1 = document.createElement("div")
    desc1.className = "desc1";
    desc1.innerHTML = courseList[i].category;
    let a = document.createElement("a");
    a.innerHTML = "Enroll Now";
    a.setAttribute("href", "https://forms.gle/xcSWY34qBYFnRQ7r7");
    a.className = "btn";
    image.append(img);
    c.append(cardTitle);
    c.append(desc);
    c.append(desc1);
    c.append(a);
    card.appendChild(image);
    card.appendChild(c);
    document.querySelector('.courses .row').append(card);
}

let isNavOpen = false;
document.querySelector('.open_nav').onclick = function (e) { 
    $(this).toggleClass('active');
    let icon = document.querySelector('.open_nav box-icon')
    if (!isNavOpen) 
        icon.setAttribute('name','x');
    else
        icon.setAttribute('name','menu');
    isNavOpen = !isNavOpen;
}

window.onscroll = function () { 
    if(this.scrollY > window.innerHeight)
        document.querySelector('#backToTop').style.width = '50px';
    else
        document.querySelector('#backToTop').style.width = 0;
}
