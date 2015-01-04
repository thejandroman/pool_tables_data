$.getJSON('data/san_francisco.json', function(data) {
    $('#table').bootstrapTable({
        data: data
    });
});
