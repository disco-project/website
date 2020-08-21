$(function () {

  function initSearchBox() {
    var pages = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
      // datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,

      prefetch: baseurl + '/search.json'
    });

    $('#search-box').typeahead({
      minLength: 0,
      highlight: true
    }, {
        name: 'pages',
        display: 'title',
        source: pages
      });

    $('#search-box').bind('typeahead:select', function (ev, suggestion) {
      window.location.href = suggestion.url;
    });
  }

  function styleContentToMD() {
    $('#markdown-content-container table').addClass('table');
    $('#markdown-content-container img').addClass('img-responsive');
  }

  initSearchBox();
  styleContentToMD();

  $(window).ready(() => {
    if ($(window).width() < 768) {
      $("#titleDescription").text("DISCO");
    }
  });

  $(window).resize(() => {
    if ($(window).width() < 768) {
      $("#titleDescription").text("DISCO");
      // $("div.supporter-img-container").each((container) => {
      //   container.attr('class', 'col-md-9 text-center supporter-img-container')
      // });
    } else {
      $("#titleDescription").text("DISCO - Distributed Ledger Communication for Smart Contracts");
      // $("div.supporter-img-container").each((container) => {
      //   console.log(container);
      //   container.attr('class', 'col-md-3 text-center supporter-img-container');
      // });
    }
  });
});
