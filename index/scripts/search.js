// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

let query = JSON.parse(localStorage.getItem("query"))

const url = `https://masai-mock-api.herokuapp.com/news?q=${query}`

fetch(url)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data.articles)
    appendData(data.articles)
})

let appendData = (data) => {
    //console.log(data);
    data.forEach(({ urlToImage, title ,content,description}) => {
      let div = document.createElement("div");
      let div1 = document.createElement("div");
      div.setAttribute("class","news")
      let img = document.createElement("img");
      img.src = urlToImage;

      let p = document.createElement("h3");
      p.innerText = title;
      let p1 = document.createElement("p");
      p1.innerText = description;
      div1.append(p,p1)
      div.append(img,div1)
      document.getElementById("results").append(div)
    });
  };