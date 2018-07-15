$(document).ready(function() {
  const li = $("ul li");
  for (const item of li) {
    item.onmouseover = function() {
      item.className = "li-hover";
    };
    item.onmouseout = function() {
      item.className = "";
    }
  };

  $('form').on('submit', function() {
    const item = $('form input');
    const todo = {item: item.val()};

    $.ajax({
      type: 'POST',
      url: '/todo',
      data: todo,
      success: function(data) {
        // do something with the data via front-end framework
        location.reload();
      },
    });

    return false;
  });

  $('li').on('click', function() {
    var item = $(this).text().replace(/ /g, "-");
    $.ajax({
      type: 'DELETE',
      url: '/todo/' + item,
      success: function(data) {
        location.reload();
      },
    });
  });



})