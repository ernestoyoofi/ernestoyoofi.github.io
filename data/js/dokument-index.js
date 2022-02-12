$.getJSON('https://ernestoyoofi.github.io/data/json/dokument.json', function(docs) {
  $.each(docs, function(i, docs) {
       $("#dokument-info").append('<li><a href="dokument/'+ docs.file +'">'+ docs.title +'</a></li>');
    });
});