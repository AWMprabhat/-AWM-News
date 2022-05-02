let data = async () => {
    const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`;

    let res = await fetch(url);
    let data = await res.json();
    //console.log(data.articles)
    //appendData(data.articles);
    return data;
  };

  let appendData = (data,results) => {
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

  export {data,appendData}