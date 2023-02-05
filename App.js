'use strict';
// APIs Fetching

var API_URL = "https://api.themoviedb.org/3/trending/all/day?api_key=55277f5918ccaa1c74bfe6fb7df5a5d6"; 
var Image_URL = "https://image.tmdb.org/t/p/w1280";
    fetch(API_URL).then(res => {let data = res.json();return data;})
    .then((data)=>{
        for(let i= 0 ; i< data.results.length/2;i++){
            if('name' in data.results[i]){
                new ListItem(Image_URL + data.results[i].backdrop_path,data.results[i].name,data.results[i].overview).add();
            }
            else{
                new ListItem(Image_URL + data.results[i].backdrop_path,data.results[i].title,data.results[i].overview).add();
            }    
        }
    }).then(()=>{
        const splide = new Splide('.splide');
        splide.mount();
    })
    
//Rendring Items

function ListItem (imgPath, title,overview){
    this.title=title;
    this.imgPath = imgPath;
    this.overview = overview;  
}
ListItem.prototype.add = function(){
    const item = document.getElementById("movieListContiner");
    const list_item = document.createElement("div");
    list_item.classList.add("list_item","splide__slide");
    item.appendChild(list_item);
    // ADD CAPRION
    const captionDiv = document.createElement("div");
    captionDiv.classList.add('captions');
    list_item.appendChild(captionDiv);
    //CREATE TITLE
    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent=this.title;
    //CREATE OVERVIEW
    const overview = document.createElement("h3");
    overview.classList.add("overview");
    overview.textContent=this.overview;
    // ADD TITLE AND OVERVIE TO CAPTIONS
    captionDiv.append(title,overview);
    //ADD IMAGE
    const imag_div = document.createElement("div");
    imag_div.classList.add("imag_div");
    list_item.appendChild(imag_div);
    const img = document.createElement("img")
    img.setAttribute("src",this.imgPath);
    imag_div.appendChild(img);
    
};
//new ListItem("MovieList/2.jpg","1996").add();



