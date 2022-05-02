// Ude Import export (MANDATORY)

// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()


let data = JSON.parse(localStorage.getItem("news"));

console.log(data)
 function appendData(data){
     let div = document.createElement("div");
     let img = document.createElement("img");
     img.src = data.urlToImage;
     let h3 = document.createElement("h3");
     h3.innerText = data.title;
     let p = document.createElement("p");
     p.innerText = data.content;
     div.append(img,h3,p);
     document.getElementById("detailed_news").append(div)

 }

 appendData(data)