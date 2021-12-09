var d = new Date();     
var date = d.getDate();
var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
var year = d.getFullYear();   
var dateStr = "Day : " + date + ", Month : " + month + ", Year : " + year;
document.write(dateStr);