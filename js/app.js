// Start Jquery Area
$(document).ready(function(){

    // Start Room Section
    $('.roompopup').magnificPopup({
        type: 'image'
      });
    //   End Room Section
});


// Start Properties
    // for active item
    $('.propertylists').click(function(){
        $(this).addClass('activeitems').siblings().removeClass('activeitems');


        // for filter
        let getattvalue = $(this).attr('data-filter');

        if(getattvalue === 'all'){
            $('.filters').show(500);
        }else{
            $('.filters').hide(500);

            $('.filters').not('.' + getattvalue).hide(500);

            $('.filters').filter('.' + getattvalue).show(500);
        }
    });
// End Properties


// Start Footer Section
const getyear = $('#getyear');
const getfullyear = new Date().getUTCFullYear();

getyear.text(getfullyear);
// End Footer Section

// End Jquery Area


// Start Header
// Start Navbar
function dropbtn(e){
    // document.getElementById('mydropdown').classList.toggle('show');

    e.target.nextElementSibling.classList.toggle('show');
}

function dropfilter(){
    var getsearch,filter,getlinks,linkvalue;

    getsearch = document.getElementById('search');
    filter = getsearch.value.toUpperCase();
    // getdropdiv = document.getElementById('mydropdown');
    getlinks = document.querySelectorAll('.mydropdowns a');
    console.log(getlinks);

    for(var x = 0; x < getlinks.length; x++){
        linkvalue = getlinks[x].textContent || getlinks[x].innerText;

        if(linkvalue.toUpperCase().indexOf(filter) > -1){
            getlinks[x].style.display = 'block';
        }else{
            getlinks[x].style.display = 'none';
        }
    }
}
// End Navbar


// start auto background

function* genfun(){
    var index = 8;

    while(true){
        yield index++;

        if(index > 13){
            index = 8;
        }
    }
}

var getgen = genfun();

var getheader = document.querySelector('header');
getheader.style.backgroundImage = `url('./assets/img/banner/banner${getgen.next().value}.jpg')`;

function autoload(){
    getheader.style.backgroundImage = `url('./assets/img/banner/banner${getgen.next().value}.jpg')`;
}

setInterval(autoload, 2500);
// end auto background

// End Header


// Start Testimonial Section
const getcompanyname = document.querySelector('.companyname'),
      getrole = document.querySelector(".role"),
      gettestimonial = document.querySelector('.testimonial');

const testimonialdatas = [
    {
        name : "Rich Star Restarunt",
        position : "Our Outlet",
        text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae sed ut corporis necessitatibus tenetur aliquid sapiente. Culpa, accusamus molestiae quaerat modi odit pariatur assumenda cumque repudiandae mollitia necessitatibus? Quod vitae accusamus aliquam asperiores possimus neque blanditiis ab sint laudantium."
    },
    {
        name : "48 Sky Cafe",
        position : "Our Partner",
        text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae sed ut corporis necessitatibus tenetur aliquid sapiente. Culpa, accusamus molestiae quaerat modi odit pariatur assumenda cumque repudiandae mollitia necessitatibus? Quod vitae accusamus aliquam asperiores possimus neque blanditiis ab sint laudantium."
    },
    {
        name : "52 Beach Hotel",
        position : "Our Branch",
        text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae sed ut corporis necessitatibus tenetur aliquid sapiente. Culpa, accusamus molestiae quaerat modi odit pariatur assumenda cumque repudiandae mollitia necessitatibus? Quod vitae accusamus aliquam asperiores possimus neque blanditiis ab sint laudantium."
    },
    {
        name : "Cool Land Swimming Pool",
        position : "Our Client",
        text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae sed ut corporis necessitatibus tenetur aliquid sapiente. Culpa, accusamus molestiae quaerat modi odit pariatur assumenda cumque repudiandae mollitia necessitatibus? Quod vitae accusamus aliquam asperiores possimus neque blanditiis ab sint laudantium."
    },
    {
        name : "Chaung Thar Spa",
        position : "Our Business",
        text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae sed ut corporis necessitatibus tenetur aliquid sapiente. Culpa, accusamus molestiae quaerat modi odit pariatur assumenda cumque repudiandae mollitia necessitatibus? Quod vitae accusamus aliquam asperiores possimus neque blanditiis ab sint laudantium."
    }
];

let idx = 0;

function updatetestimonial(){
    const {name, position, text} = testimonialdatas[idx];

    idx++;
    // console.log(name,position);

    getcompanyname.textContent = name;
    getrole.textContent = position;
    gettestimonial.textContent = text;

    if(idx > testimonialdatas.length-1){
        idx = 0;
    }
}

updatetestimonial();
setInterval(updatetestimonial, 5000);
// End Testimonial Section


// Start Chat Box
const getmychat = document.getElementById('mychat');

function openchatbox(){
    getmychat.style.display = 'block';
}

function closechatbox(){
    getmychat.style.display = 'none';
}
// End Chat Box