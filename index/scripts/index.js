// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

//const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`

let data = async () => {
  const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`;
  let res = await fetch(url);
  let data = await res.json();
  //console.log(data.articles)
  appendData(data.articles);
};
data();

let contries = document.getElementById("sidebar").children;
//console.log(contries)
function consearch(){
    document.getElementById("results").innerHTML= null;
    let query = this.id;
    const url2 = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`;
     fetch(url2)
     .then((res)=>{
         return res.json();
     })
     .then((data)=>{
         //console.log(data)
         appendData(data.articles)
     })

    
}

for(let i of contries){
    //console.log(i.id)
    //consearch(i.id)
    document.getElementById(i.id).addEventListener("click",consearch)

}

let appendData = (data) => {
  //console.log(data);
  data.forEach(({ urlToImage, title ,content}) => {
    let div = document.createElement("div");
    div.setAttribute("class","news")
    let img = document.createElement("img");
    img.src = urlToImage;
    let p = document.createElement("p");
    p.innerText = title;
    div.addEventListener("click",()=>{
      DetailedNews(urlToImage, title ,content)
    })
    div.append(img,p)
    document.getElementById("results").append(div)
  });
};
 //let arr = [];
function DetailedNews(urlToImage, title ,content){
    let obj = {urlToImage, title ,content};
    
    localStorage.setItem("news",JSON.stringify(obj))
    window.location.href = "news.html"
}

let search = (e)=>{
if(e.key==="Enter"){
let query = document.getElementById("search_input").value;
localStorage.setItem("query",JSON.stringify(query));
window.location.href = "search.html"
}
}

document.getElementById("search_input").addEventListener("keydown",search)
