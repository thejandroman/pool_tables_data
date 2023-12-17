import "jquery";
import "bootstrap";
import "bootstrap-table/dist/bootstrap-table.min.js";
import "bootstrap-table/dist/locale/bootstrap-table-en-US.min.js";

$.getJSON("data/san_francisco.json", function (data) {
  $("#table").bootstrapTable({
    data: data,
  });
});
