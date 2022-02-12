document.querySelector("title").innerText = "Ernesto Yoofi • Beranda"
$.getJSON('https://ernestoyoofi.github.io/data/json/gallery.json', function(gallery) {
  $.each(gallery, function(i, gallery) {
       $("#json-gallery").append('<div class="card-revel"> <div class="item"><img src="gallery/'+ gallery.img +'" alt="favicon" width="100%" style="width:100%; float:none;"></div></div>');
    });
});
$.getJSON('https://ernestoyoofi.github.io/data/json/related-web.json', function(website) {
  $.each(website, function(i, website) {
       $("#json-website").append('<a href="'+ website.url +'"><div class="card-revel"> <div class="item"> <div class="img"> <img src="'+ website.tumb +'" alt="favicon" width="100%"></div><div class="text"> <b>'+ website.title +'</b> <h4>'+ website.description +'</h4></div></div></div></a>');
    });
});
$.getJSON('https://api.github.com/users/ernestoyoofi/repos', function(repos) {
  $.each(repos, function(i, repos) {
       $("#json-repos").append('<a href="'+ repos.html_url +'"><div class="card-revel"> <div class="item"> <div class="img"> <img src="https://github.githubassets.com/images/modules/open_graph/github-mark.png" alt="favicon" width="100%"></div><div class="text"> <b>'+ repos.name +'</b> <h4>'+ repos.description +'</h4></div></div></div></a>');
    });
});
$.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCoiy7J9wuubiqdvvJvImmMg&maxResults=5&key=AIzaSyBnAX56TYB8HKF8JWZZ90Iwlg1W7fHqjMo', function(video) {
  var video = video.items ;
  $.each(video, function(i, video) {
       var InitiVideo = video.snippet ;
       $("#json-youtube").append('<a href="https://youtu.be/'+ video.id.videoId +'"><div class="card-revel"> <div class="item"> <img src="'+ InitiVideo.thumbnails.medium.url +'" width="100%" style="width: 100%; height: 100%px;"> <div class="text"> <b>'+ InitiVideo.title +'</b> <h4>'+ InitiVideo.description +'</h4> <p style="font-size:13px">'+InitiVideo.publishTime+'</p></div></div></div></a>');
    });
});
