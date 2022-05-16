const CheckSave = window.localStorage.getItem('darkmode')
console.log(CheckSave)
if (CheckSave === null) {
    window.localStorage.setItem('darkmode', 'light')  
} else if (CheckSave === 'dark') {  
} else {
}
function DarkMode() {
    let controller = document.getElementById("darkmode-controller").value
}
function MinsearchView(Urljson, PutInHere) {
    var Json = Urljson
    var Results = PutInHere

    $.getJSON(Json, function(Min) {
    $.each(Min, function(i, Min) {
            $('#'+ Results).append('<li class="results-search-view"><a class="min-results" href="'+ Min.href +'?recBy=minsearch"> <b class="title">'+ Min.title +'</b><p class="desc">'+ Min.desc +'</p> </a></li>');
        });
    });
}
function Footer(Urljson) {
    var Json = Urljson

    $.getJSON(Json, function(Min) {
    $.each(Min.social_media, function(i, Min) {
            $('#footer-smedia-2').append('<li><a href="'+ Min.url +'"><i class="fa-brands fa-'+ Min.icon +'"></i></a></li>');
            $('#footer-smedia-1').append('<li><a href="'+ Min.url +'">' + Min.title +'</a></li>');
        });
    });
}
function Minsearch(searchInput, searchResults) {
    var input, filter, ul, li, a, i, p, txtValue;
    input = document.getElementById(searchInput);
    filter = input.value.toUpperCase();
    ul = document.getElementById(searchResults);
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "inline-block";
        } else {
            li[i].style.display = "none";
        }
    }
}
function None(type) {
    window.location.href = "/help?code=" + type + "&from=web"
}
var btnNav = document.querySelector('.nav-btn')
btnNav.addEventListener("click", function() {
    var navItem = document.querySelector('.data-navbar-select').style.marginLeft
    if(navItem === '0px') {
        document.querySelector('.data-navbar-select').style.marginLeft = '-500px'
    } else {
        document.querySelector('.data-navbar-select').style.marginLeft = '-0px'
    }
});