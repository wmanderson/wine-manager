$(document).ready(function(){


    $.ajax({
          type: "GET",
          url: "https://myapi.profstream.com/api/27d064/wines",
          success: function(wine) {

              console.log(wine[0].name + ", " + wine[0].year + ". Hailing from " + wine[0].region + " in " + wine[0].country + ", this wine is crafted fom " + wine[0].grapes + " grapes. " + wine[0].description + " The average retail price is $" + wine[0].price + ".")

              console.log(wine[1].name + ", " + wine[1].year + ". Hailing from " + wine[1].region + " in " + wine[1].country + ", this wine is crafted fom " + wine[1].grapes + " grapes. " + wine[1].description + " The average retail price is $" + wine[1].price + ".")

              console.log(wine[2].name + ", " + wine[2].year + ". Hailing from " + wine[2].region + " in " + wine[2].country + ", this wine is crafted fom " + wine[0].grapes + " grapes. " + wine[2].description + " The average retail price is $" + wine[2].price + ".")

              console.log(wine[3].name + ", " + wine[3].year + ". Hailing from " + wine[3].region + " in " + wine[3].country + ", this wine is crafted fom " + wine[3].grapes + " grapes. " + wine[3].description + " The average retail price is $" + wine[3].price + ".")

              console.log(wine[4].name + ", " + wine[4].year + ". Hailing from " + wine[4].region + " in " + wine[4].country + ", this wine is crafted fom " + wine[4].grapes + " grapes. " + wine[4].description + " The average retail price is $" + wine[4].price + ".")

              console.log(wine[5].name + ", " + wine[5].year + ". Hailing from " + wine[5].region + " in " + wine[5].country + ", this wine is crafted fom " + wine[5].grapes + " grapes. " + wine[5].description + " The average retail price is $" + wine[5].price + ".")

              console.log(wine[6].name + ", " + wine[6].year + ". Hailing from " + wine[6].region + " in " + wine[6].country + ", this wine is crafted fom " + wine[6].grapes + " grapes. " + wine[6].description + " The average retail price is $" + wine[6].price + ".")

              console.log(wine[7].name + ", " + wine[7].year + ". Hailing from " + wine[7].region + " in " + wine[7].country + ", this wine is crafted fom " + wine[7].grapes + " grapes. " + wine[7].description + " The average retail price is $" + wine[7].price + ".")   

          },
          error: function() {
              alert("Error getting data.");
          }

      });

});
