function navbarShow() {
				var navbar = document.getElementById("navbar-link");
				navbar.style.display = "inline";
				var CLSnavbar = document.getElementById("closeNavbar");
				CLSnavbar.style.display = "inline";
}
function navbarHidden() {
				var navbar = document.getElementById("navbar-link");
				navbar.style.display = "none";
				var CLSnavbar = document.getElementById("closeNavbar");
				CLSnavbar.style.display = "none";
}
function searchBarOpen() {
				var searchBar = document.getElementById("Search");
				searchBar.style.display = "inline";
}
function searchBarClose() {
				var searchBar = document.getElementById("Search");
				searchBar.style.display = "none";
				document.getElementById("searchSubmit").innerHTML = "Search";
				document.getElementById('InputS').value = ''
}
function ShowDocs() {
     var showDocs = document.getElementById("docs-view");
     var ButtonView = document.getElementById("showviewbar");
				if(showDocs.style.display === "none" ) {
								showDocs.style.display = "inline";
								ButtonView.innerHTML = "<i class='fa fa-caret-up'></i>";
				}else {
								showDocs.style.display = " none";
								ButtonView.innerHTML = "<i class='fa fa-caret-down'></i>";
				}
}
function ShowProject() {
     var showProject = document.getElementById("proj-view");
     var ButtonPro = document.getElementById("showviewproj");
				if(showProject.style.display === "none" ) {
								showProject.style.display = "inline";
								ButtonPro.innerHTML = "<i class='fa fa-caret-up'></i>";
				}else {
								showProject.style.display = "none";
								ButtonPro.innerHTML = "<i class='fa fa-caret-down'></i>";
				}
}
function ShowGithub() {
     var showGithub = document.getElementById("github-view");
     var ButtonGit = document.getElementById("showviewgithub");
				if(showGithub.style.display === "none" ) {
								showGithub.style.display = "inline";
								ButtonGit.innerHTML = "<i class='fa fa-caret-up'></i>";
				}else {
								showGithub.style.display = "none";
								ButtonGit.innerHTML = "<i class='fa fa-caret-down'></i>";
				}
}
function ShowLang() {
     var showLang = document.getElementById("lang-view");
     var ButtonLang = document.getElementById("showviewlang");
				if(showLang.style.display === "none" ) {
								showLang.style.display = "inline";
								ButtonLang.innerHTML = "<i class='fa fa-caret-up'></i>";
				}else {
								showLang.style.display = "none";
								ButtonLang.innerHTML = "<i class='fa fa-caret-down'></i>";
				}
}
/*--------------- Searching Engine ---------------*/
function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("InputS");
    filter = input.value.toUpperCase();
    ul = document.getElementById("results-s");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        document.getElementById("searchSubmit").innerHTML = "Search";
        } else {
            li[i].style.display = "none";
            document.getElementById("searchSubmit").innerHTML = "Search Results No found :/";
        }
    }
}
function ShowResultsBar() {
				document.getElementById("results-s").style.display = "inline";
				document.getElementById("searchSubmit").innerHTML = "Search results";
}
function CloseThisTab() {
				document.getElementById("overlay-quit").style.display = " inline";
				document.getElementById("closeTab").style.backgroundColor = "#006dd8";
				
}
/* image sliders show */
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("img-slider");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
//Scroll Spy
(function() {
  'use strict';

  var section = document.querySelectorAll(".section");
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('.active').setAttribute('class', ' ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
      }
    }
  };
})();
