//2.use the rest countries api url and display all the country flag in console
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();

request.onload = function(){
    var result = JSON.parse(request.response);
    for(let i = 0 ; i< result.length ; i++){
        console.log(result[i].flags);   

    
}}