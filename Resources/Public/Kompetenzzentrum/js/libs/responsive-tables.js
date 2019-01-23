$(document).ready(function() {
  var switched = false;
  var updateTables = function() {
    if (($(window).width() < 767) && !switched ){
      switched = true;
        $("table.responsive").each(function(i, element) {
        splitTable($(element));
      });
      return true;
    }
    else if (switched && ($(window).width() > 767)) {
      switched = false;
      $("table.responsive").each(function(i, element) {
        unsplitTable($(element));
      });
    }
  };
   
  $(window).load(updateTables);
  $(window).on("redraw",function(){switched=false;updateTables();}); // An event to listen for
  $(window).on("resize", updateTables);

  function splitTable(original) {

    // check if this is needed !
    if (original.find("tbody tr:first-child th").length) {

      // wrap around all
      original.wrap("<div class='table-wrap-vertical' />");

      var copy = original.clone();
      copy.removeClass("responsive");

      original.closest(".table-wrap-vertical").append(copy);
      copy.wrap("<div class='pinned' />");

      //setCellHeights(original, copy);
    }

    // every table with this class is scrollable
    original.wrap("<div class='scrollable' />");

  }

  function unsplitTable(original) {
    original.closest(".table-wrap-vertical").find(".pinned").remove();
    original.unwrap();
  }

  function setCellHeights(original, copy) {
    var tr = original.find('tr'),
        tr_copy = copy.find('tr'),
        heights = [];

    tr.each(function (index) {
      var self = $(this),
          tx = self.find('th, td');

      tx.each(function () {
        var height = $(this).outerHeight(true);
        heights[index] = heights[index] || 0;
        if (height > heights[index]) heights[index] = height;
      });

    });

    tr_copy.each(function (index) {
      $(this).height(heights[index]);
    });
  }

});
