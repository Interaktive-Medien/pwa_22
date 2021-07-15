// JavaScript Document
const container = document.querySelector(".container");
        const coffees = [
          {
            name: "Perspiciatis",
            image: "images/coffee1.jpg"
          },
          {
            name: "Voluptatem",
            image: "images/coffee2.jpg"
          },
          {
            name: "Explicabo",
            image: "images/coffee3.jpg"
          },
          {
            name: "Rchitecto",
            image: "images/coffee4.jpg"
          },
          {
            name: " Beatae",
            image: "images/coffee5.jpg"
          },
          {
            name: " Vitae",
            image: "images/coffee6.jpg"
          },
          {
            name: "Inventore",
            image: "images/coffee7.jpg"
          },
          {
            name: "Veritatis",
            image: "images/coffee8.jpg"
          },
          {
            name: "Accusantium",
            image: "images/coffee9.jpg"
          }
        ];
        
		function showCoffees() {
          let output = "";
          coffees.forEach(function(name, index, image) {
              output += '<div class="card"><img class="card--avatar" src=' + coffees[index].image + '>';
              output += '<h1 class="card--title">' + coffees[index].name + '</h1><a class="card--link" href="#">Taste</a>';
              output += '</div>';
              container.innerHTML=output;
           });
		}
        document.addEventListener("DOMContentLoaded", showCoffees);