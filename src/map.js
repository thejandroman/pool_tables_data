function addMarker(options, map) {
  map.addMarker(options);
}

function geocode_callback(results, status, location, map) {
  console.log(location.address);
  console.log(status);
  if (status == "OK") {
    var latlng = results[0].geometry.location,
      options = {
        lat: latlng.lat(),
        lng: latlng.lng(),
        title: location.name,
        infoWindow: {
          content:
            location.name +
            "<br />" +
            location.address +
            "<br /> Tables: " +
            location.no_tables +
            "<br />" +
            location.price,
        },
      };
    addMarker(options, map);
  } else {
    console.error("Unable to process: " + location.address);
    console.error(status);
  }
}

function sleep(elements, cb, timeout) {
  var i = 0,
    l = elements.length;

  (function fn() {
    cb.call(elements[i++]);
    if (i < l) {
      setTimeout(fn, timeout);
    }
  })();
}

$(document).ready(function () {
  var map = new GMaps({
    div: "#map-canvas",
    lat: 37.7577,
    lng: -122.4376,
    zoom: 13,
  });

  $.getJSON("data/san_francisco.json", function (data) {
    sleep(
      data,
      function () {
        console.log(Math.floor(Date.now() / 1000));
        var location = this;
        GMaps.geocode({
          address: location.address,
          callback: function (results, status) {
            geocode_callback(results, status, location, map);
          },
        });
      },
      500,
    );
  });
});
