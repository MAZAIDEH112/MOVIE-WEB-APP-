
const baase = "https://api.themoviedb.org/3";
const KEY = "55277f5918ccaa1c74bfe6fb7df5a5d6"
let x = "";
const video = `/tv/${x}/videos`;
const youtube = "https://www.youtube.com/embed/mawzQRu1Kc4?autoplay=1&mute=1";

const TheWitchwer = "https://api.themoviedb.org/3/search/tv?api_key=55277f5918ccaa1c74bfe6fb7df5a5d6&language=en-US&page=1&query=The%20Witcher&include_adult=true";



fetch(TheWitchwer)
.then(res => {
    let data = res.json();
    return data;
})
.then(data=>{
    console.log(data);
    return data;
})
function HeaderRender(){
    const headerdiv = document.getElementById("header");
    const header = document.createElement("img");
    header.setAttribute("width","100%");
    header.setAttribute("height","100%");
    header.setAttribute("src","https://api.themoviedb.org/3/tv/108987/images?api_key=55277f5918ccaa1c74bfe6fb7df5a5d6&language=en-US");
    headerdiv.appendChild(header);
    
}
HeaderRender();
