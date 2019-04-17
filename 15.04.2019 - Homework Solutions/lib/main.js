"use strict";

window.onload = function () {
  // demo.oninput = function(e)
  // {
  //     console.log(this.value);
  // }
  var countryDropdown = document.querySelector('#country');
  var cityDropdown = document.querySelector('#cities');
  var countries = [{
    id: 1,
    name: "Azerbaijan"
  }, {
    id: 2,
    name: "Turkey"
  }, {
    id: 3,
    name: "Russia"
  }, {
    id: 4,
    name: "Georgia"
  }, {
    id: 5,
    name: "Latvia"
  }];
  var cities = [{
    name: "Baku",
    countryId: 1
  }, {
    name: "Sumgayit",
    countryId: 1
  }, {
    name: "Barda",
    countryId: 1
  }, {
    name: "Istanbul",
    countryId: 2
  }, {
    name: "Ankara",
    countryId: 2
  }, {
    name: "Moskva",
    countryId: 3
  }, {
    name: "Peterburq",
    countryId: 3
  }, {
    name: "Tbilisi",
    countryId: 4
  }, {
    name: "Batumi",
    countryId: 4
  }, {
    name: "Borjomi",
    countryId: 4
  }];
  countries.forEach(function (ctr) {
    var option = document.createElement('option');
    option.setAttribute("value", ctr.id);
    option.innerText = ctr.name;
    countryDropdown.appendChild(option);
  });

  countryDropdown.onchange = function () {
    //1. get id of selected country
    //2. loop in cities, filter cities with given countryId
    //3. fill options to cities select
    var ctrId = +this.value;
    var countryCities = cities.filter(function (city) {
      return city.countryId === ctrId;
    });
    cityDropdown.innerHTML = "<option value=''>Select city</option>";
    countryCities.forEach(function (city) {
      var option = document.createElement('option');
      option.innerText = city.name;
      cityDropdown.appendChild(option);
    });
  };
}; //get vs set
// main.onsubmit = function(e)
// {
//     e.preventDefault();
//     const emailInput = document.querySelector('#main input[name="email"]');
//     const fullnameInput = document.querySelector('#main input[name="fullname"]');
//     const passwordInput = document.querySelector('#main input[name="password"]');
//     if(emailInput.value.trim().indexOf("@") === -1)
//     {
//         emailInput.nextElementSibling.innerText = "Please, input valid email."
//         return;
//     }
//     else{
//         emailInput.nextElementSibling.innerText = "";
//     }
//     if(fullnameInput.value.trim().length < 3)
//     {
//         fullnameInput.nextElementSibling.innerText = "Please, input fullname more than 3 charachters."
//         return;
//     }
//     else{
//         fullnameInput.nextElementSibling.innerText = "";
//     }
//     if(passwordInput.value.trim().length < 8 || passwordInput.value.trim().indexOf("a") === -1)
//     {
//         passwordInput.nextElementSibling.innerText = "Please, input password more than 8 charachters and holds character a."
//         return;
//     }
//     else{
//         passwordInput.nextElementSibling.innerText = "";
//     }
//     //all is well
//     alert("All is well");
// }