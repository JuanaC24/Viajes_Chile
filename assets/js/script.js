var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: "#navbar-example",
  });
  
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);});

    $("p").click(function () {

      $(this).css({
          "font-size": "1.5rem"
      })
  })