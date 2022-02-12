function DataConfig(ConfigType) {
  var Configuration = ConfigType ;
  var BorderClose = document.querySelector(".border-close");
  var Popup = document.querySelector(".pop-up-bg");
  var Setting = document.querySelector(".setting");
  
  
  if(Configuration === "open_setting") {
    BorderClose.style.display = "inline" ;
    Setting.style.display = "inline" ;
    Popup.style.display = "inline" ;
  }else if (Configuration === "close") {
    BorderClose.style.display = "none" ;
    Setting.style.display = "none" ;
    Popup.style.display = "none" ;
  }else if (Configuration === "save-set") {
   var AccSet = document.getElementById("acc-set-i").value;
     if(AccSet === "") {
        localStorage.setItem("nameacconts", "octocat");
     }else {
        localStorage.setItem("nameacconts", AccSet);
     }
  }else {
    console.warn("! Error : Konfigurasi "+ ConfigType +" Tidak Ditemukan");
    console.log("! Peringatan, Jangan Masukan Kode Kedalam Consol Ini Jika Kamu Tidak Mengetahui Fungsi Atau Sistem Kerja, Jika Ada Seseorang Yang Menyuruh Atau Memberikan Kode Selain Pemilik Website, Jangan Lakukan");
  }
}
// Settings Theme
function Mode(theme) {
   localStorage.setItem("thememode", theme);
}
var ThemeMode = localStorage.getItem("thememode");

if(ThemeMode === "dark") {
   console.log("Data Config : Switch To Dark Mode");
   document.body.style.backgroundColor = "black";
   document.body.style.color = "white";
   document.querySelector(".content-long-left").style.backgroundColor = "#363636";
}else {
   console.log("Data Config : Switch To Light Mode");
   localStorage.setItem("thememode", "light");
}
// Settings Account
function Acconts(name) {
   localStorage.setItem("nameacconts", name);
}
var NameAcconts = localStorage.getItem("nameacconts");
var DisplayViewAc = document.querySelector(".card-acconts");
$.getJSON('https://api.github.com/users/'+ NameAcconts +'', function(githubAc) {
      var DisplayViewAc = document.getElementById("acc");
      DisplayViewAc.innerHTML = '<div class="card-acconts"><img src="'+ githubAc.avatar_url +'" style="float:left; margin-right: 8px" alt="..." width="40px"><b>'+ githubAc.name +'</b><p>'+ githubAc.login +'</p><p>'+ githubAc.bio +'</p><p>Tgl login : '+ githubAc.created_at +'</p> <a onclick="EditAcc()" class="btn-add"><i class="far fa-edit"></i></a></div>';

});
console.log("Settings\n\nTheme Mode : "+ ThemeMode +"\nAcconts Name : "+ NameAcconts +"")
function EditAcc() {
  
}