/**
 * Author:    Cole Hennig, Olivia Hamilton
 * Created:   02.18.2020
 *
 * (c) Copyright by Blub Corp.
 **/

$("#activate").click(getComic);

function getComic() {
	random_num = Math.floor(Math.random() * 2434);
  // Using the core $.ajax() method
  $.ajax({
    // The URL for the request (from the api docs)
    url: "https://cors-anywhere.herokuapp.com/http://xkcd.com/" + random_num + "/info.0.json",
    // The data to send (will be converted to a query string)
    data: {
      // here is where any data required by the api
      //   goes (check the api docs)
    },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType: "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
      // do stuff
        $("#output").html('<p>' + data.title + '</p><img src="' + data.img + '"></img>');
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
      // do stuff
			console.log("Error:", textStatus, errorThrown);
    }
  })
};
