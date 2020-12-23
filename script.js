$(document).ready(function () {
  var searchBtn = $("#searchBtn");
  currentDate = moment().format("L");
  $("#currentCity").append("<h2> (" + currentDate + ") </h2>");  
  

  // Function to access API key from database
  searchBtn.on("click", function () {
    var cityName = $("#userInput").val();
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=ad3c5ef3ec82bc26aa6252170f674990";

    // AJAX call to API database
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (results) {
      console.log(results);

    //  Clears div when new city is searched
      $(".city").empty();

      // Appends data to respective div in HTML
      $(".city").append("<h2>" + cityName + "</h2>");

      // Convert temperature from celsius to fahrenheit
      var tempF = (results.main.temp - 273.15) * 1.8 + 32;

      // Appends data to div for current city
      $("#currentCity").append("Temperature: " + tempF.toFixed() + "&#8457" +  "<br>");
      $("#currentCity").append("Humidity: " + results.main.humidity + "%" + "<br>");
      $("#currentCity").append("Wind Speed: " + results.wind.speed + "<br>");       

      $("#recentCity").append(cityName + "<br>");
      });
  }); 
          // NEED TO ACCESS UV INDEX API

  searchBtn.on("click", function () {
    var cityName = $("#userInput").val();
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=ad3c5ef3ec82bc26aa6252170f674990";

    // AJAX call to API database
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (results) {
      console.log(results);  //   

      $("#currentCity").append("Temperature: " + tempF.toFixed() + "&#8457" +  "<br>");
         
    });
  }); 

  // Function to retrieve 5 Day Forecast
  searchBtn.on("click", function(){
   
      var cityName = $("#userInput").val();
      var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=ad3c5ef3ec82bc26aa6252170f674990";

    // AJAX call to respective API database 
      $.ajax({
        url: forecastURL,
        method: "GET",
      }).then(function(response) {
        console.log(response);

        // Clears 5 Day forecast results when user inputs a new search
        $("#forecast1").empty();
        $("#forecast2").empty();
        $("#forecast3").empty();
        $("#forecast4").empty();
        $("#forecast5").empty();
       
        // Variables created for 5 Day Forecast - Converts celsius to fahrenheiht
        var tempF = (response.list[0].main.temp - 273.15) * 1.8 + 32;
        var tempF2 = (response.list[1].main.temp - 273.15) * 1.8 + 32;
        var tempF3 = (response.list[2].main.temp - 273.15) * 1.8 + 32;
        var tempF4 = (response.list[3].main.temp - 273.15) * 1.8 + 32;
        var tempF5 = (response.list[4].main.temp - 273.15) * 1.8 + 32;

        // Appends 5 Day Forecast data for current city
        
        $("#forecast1").append("Temperature: " + tempF.toFixed() + "&#8457" + "<br>");
        $("#forecast1").append("Humidity: " + response.list[0].main.humidity + "%" + "<br>");

        $("#forecast2").append("Temperature: " + tempF2.toFixed() + "&#8457" + "<br>");
        $("#forecast2").append("Humidity: " + response.list[1].main.humidity + "%" + "<br>");

        $("#forecast3").append("Temperature: " + tempF3.toFixed() + "&#8457" + "<br>");
        $("#forecast3").append("Humidity: " + response.list[2].main.humidity + "%" + "<br>");

        $("#forecast4").append("Temperature: " + tempF4.toFixed() + "&#8457" + "<br>");
        $("#forecast4").append("Humidity: " + response.list[3].main.humidity + "%" + "<br>");

        $("#forecast5").append("Temperature: " + tempF5.toFixed() + "&#8457" + "<br>");
        $("#forecast5").append("Humidity: " + response.list[4].main.humidity + "%" + "<br>");

        
      });
  })
})
