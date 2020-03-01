//Dohvatanje 
let title1 = document.querySelector('.title1');
let opening_crawl1 = document.querySelector('.opening_crawl1');
let director1 = document.querySelector('.director1');
let producer1 = document.querySelector('.producer1');
let release_date1 = document.querySelector('.release_date1');

let title2 = document.querySelector('.title2');
let opening_crawl2 = document.querySelector('.opening_crawl2');
let director2 = document.querySelector('.director2');
let producer2 = document.querySelector('.producer2');
let release_date2 = document.querySelector('.release_date2');

let title3 = document.querySelector('.title3');
let opening_crawl3 = document.querySelector('.opening_crawl3');
let director3 = document.querySelector('.director3');
let producer3 = document.querySelector('.producer3');
let release_date3 = document.querySelector('.release_date3');

//Preuzimanje api podataka 
axios.get('https://swapi.co/api/films/1/').then(function(response){
    prikazPodataka1(response.data);
});

axios.get('https://swapi.co/api/films/2/').then(function(response){
    prikazPodataka2(response.data);
});

axios.get('https://swapi.co/api/films/3/').then(function(response){
    prikazPodataka3(response.data);
});


function prikazPodataka1(data){
    title1.innerText = data.title;
    opening_crawl1.innerText = data.opening_crawl;
    director1.innerText =`Directir: ${data.director}`;
    producer1.innerText =`Producer: ${data.producer}`;
    release_date1.innerText =`Release_date: ${data.release_date}`;
}

function prikazPodataka2(data){
    title2.innerText = data.title;
    opening_crawl2.innerText = data.opening_crawl;
    director2.innerText =`Directir: ${data.director}`;
    producer2.innerText =`Producer: ${data.producer}`;
    release_date2.innerText =`Release_date: ${data.release_date}`;
}

function prikazPodataka3(data){
    title3.innerText = data.title;
    opening_crawl3.innerText = data.opening_crawl;
    director3.innerText =`Directir: ${data.director}`;
    producer3.innerText =`Producer: ${data.producer}`;
    release_date3.innerText =`Release_date: ${data.release_date}`;
}




function myFunction() {
    var x = document.getElementsByClassName("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}


//Chart.js

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['New Hope', 'Return of the Jedi', 'The Empire Strikes Back'],
        datasets: [{
            label: 'Hide rating',
            data: [92, 81, 74],
            backgroundColor: [
                'rgba(0, 0, 255, 0.7)',
                'rgba(0, 128, 0, 0.7)',
                'rgba(255,0, 0, 0.7)'
            ],
            borderColor: [
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

