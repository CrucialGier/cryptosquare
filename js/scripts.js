
$(document).ready(function() {
  $("#result").click(function(event) {
    debugger;
    event.preventDefault();
    var input = $("#input").val().replace(/[.,\/#!$%\^&\*;:0+123456789@{}=\-_`~()" "]/g,"").toLowerCase();

    var overFlow = input.length % Math.floor(Math.sqrt(input.length))
    var overFlowTest = function() {
      if (overFlow > 0) {
        return 1;
      } else {
        return 0;
      };
    };
    var rowSegments = [];

    var columns = Math.floor(Math.sqrt(input.length));
    var rows = columns + overFlowTest();
    for (var i = 0; i < input.length; i++) {
      if (i = columns - 1) {
        rowSegments.push(input.slice((i+1) - columns, i + 1));
        input = input.slice(i+1, columns.length);
      };
    };
    rowSegments.push(input);
    alert(rowSegments);
    var columnSegments = rowSegments.map(function(segment){
      for (var j = 0; j < rowSegments.length; j++) {
        for (var i = 0; i < segment.length; i++) {
          return segment[i];

        };
        return segment.concat(segment.charAt(i))

      };
    });
    alert(columnSegments);
  });
});
