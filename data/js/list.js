function List(dataList) {
   var listItem = document.getElementById(dataList);
   
   if(listItem.style.height === "0px") {
      listItem.style.height = "100%";
   }else {
      listItem.style.height = "0px";
   }
}
function ListI(dataList) {
   var listItem = document.getElementById(dataList);
   var IconList = document.getElementById("icon-"+ dataList);

   if(listItem.style.height === "0px") {
      listItem.style.height = "100%";
      IconList.style.transform = "rotate(0deg)";
   }else {
      listItem.style.height = "0px";
      IconList.style.transform = "rotate(-90deg)";
   }
}