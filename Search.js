'use strict'



const searchData = document.getElementById("search");
const Blist = document.querySelector(".search-list");
var search_word =""; 


var API_URL = "https://api.themoviedb.org/3/trending/all/day?api_key=55277f5918ccaa1c74bfe6fb7df5a5d6"; 
var Image_URL = "https://image.tmdb.org/t/p/w1280";



searchData.addEventListener("click",()=>{

    Blist.classList.toggle("search-list-active")

    searchData.addEventListener("keyup",()=>{

        console.log(searchData.value);

        if((searchData.value).length >3){
            fetchSearch((searchData.value).trim(),Blist);
            console.log(searchData.value)
        }else{
            nodeDeleter(Blist);
        }
    });
})

function nodeDeleter(list){
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
      
    }
}

function render(data,list){
    nodeDeleter(list);
     for(let i =0; i<10;i++){
        const search_item = document.createElement("div");
        search_item.classList.add("search-item");
        list.appendChild(search_item);

        const img = document.createElement("img");
        img.setAttribute("src", Image_URL + data.results[i].poster_path);
        img.setAttribute("width", "60px");
        img.setAttribute('height',"60px")
        search_item.appendChild(img);

        const p= document.createElement("p");
        p.innerText = data.results[i].title;
        search_item.appendChild(p);
    }  
}

var Global_Search_API = "";

function fetchSearch(searchWord,list){
    //API FETCH
    const seachAPI = `https://api.themoviedb.org/3/search/movie?api_key=55277f5918ccaa1c74bfe6fb7df5a5d6&language=en-US&query=${searchWord}&page=1&include_adult=false`;
    Global_Search_API = seachAPI;
    fetch(seachAPI)
    .then(data => {return data.json()})
    .then((data)=>{
        console.log(data)
        return data
    })
    .then(data =>{
        render(data,list)
        return data
    })
}

document.getElementById("submitSearch").addEventListener("click",()=>{
    localStorage.clear();
    localStorage.setItem("searchAPI",(Global_Search_API));
    window.location.href = "Search.html";
});



function fitchall(){    //triggered onload of search.html 
    
    fetch(localStorage.getItem("searchAPI")).then(data=>{
        return data.json();
    }).then((data)=>{
        console.log(data)
        return data
    })
    .then((data)=>{
        addItem(data)
    })
}

function addItem(data){
    console.log("HI")
    const container = document.querySelector(".container");

    for (let i = 0; i < data.results.length; i++) {
       let pos_path = Image_URL + data.results[i].poster_path;

        console.log(pos_path)
        const grid_item = document.createElement("div");
        grid_item.classList.add("grid-item");
       

        container.appendChild(grid_item)
        const poster= document.createElement("img");
        poster.src = pos_path;
        poster.setAttribute("width","50%");
        const h1 = document.createElement("h3");
        h1.innerText = data.results[i].title;
        grid_item.appendChild(poster)
        grid_item.appendChild(h1)        
    }
}