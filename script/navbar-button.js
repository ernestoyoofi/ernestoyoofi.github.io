function ShowBar() { 
     var dots = document.getElementById("bars-btn");
     var MoreBar = document.getElementById("bar-item");
     var BtnBar = document.getElementById("btn-bar"); 
     if (dots.style.display === "none") {
     dots.style.display = "inline";
     MoreBar.style.display = "none";
} 
     else { dots.style.display = "none"; 
     MoreBar.style.display = "inline";
     }
} 
