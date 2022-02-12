function Share(type) {
   var Local = window.location.href ;
   
   if (type === "whatsapp") {
       window.location.href =  "https://wa.me/?text=Share To Your Frends \n" + Local ;
   } else if (type === "twitter") {
       window.location.href = "https://twitter.com/share?url=Share To Your Frends \n" + Local ;
   } else {
       console.error("-")
   }
}