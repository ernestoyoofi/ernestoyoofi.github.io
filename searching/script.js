console.warn("Pesan Dari Google :\n\n%c%s font-size: 18px; Jika Anda menggunakan konsol ini, penyerang dapat meniru identitas dan mencuri informasi Anda melalui serangan yang disebut Self-XSS. \nJangan masukkan atau tempelkan kode yang tidak Anda pahami."); console.log("Artikel Tentang 'Serangan Self-XSS' : \n\n- https://www.logique.co.id/blog/2019/10/16/serangan-cross-site-scripting/ \n- https://id.m.wikipedia.org/wiki/XSS \n- https://ichi.pro/id/cara-kerja-javascript-5-jenis-serangan-xss-tip-untuk-mencegahnya-253860537398410");
function ShowNavbar() {
				document.getElementById("nav-link").style.marginLeft = "0px";
				document.getElementById("CLSNavbar").style.display = "inline";
}
function HiddenNavbar() {
			document.getElementById("nav-link").style.marginLeft = "-230px";
			document.getElementById("CLSNavbar").style.display = "none";
}
function SearchGoogle() {
				var SearchGoogle = document.getElementById("searchGoogle").value;
				console.log("Watting For...")
				console.log("https://www.google.com/search?q=" + SearchGoogle);
				window.location.href = "https://www.google.com/search?q=" + SearchGoogle;
}
function GoogleSearch() {
	document.getElementById("GoogleS").style.display = "inline";
	document.getElementById("GithubS").style.display = "none";
	document.getElementById("LinkURL").style.display = "none";
}
function TransparantNavbar() {
document.getElementById("nav-link").style.backgroundColor ="rgba(0,0,0,0.15)";
document.getElementById("nav-link").style.color = "white";
document.getElementById("Selected-Change").style.backgroundColor = "#00eaff";
}
