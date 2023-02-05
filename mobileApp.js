
const searchToggle = document.getElementById("search-toggle");
const search_screen = document.querySelector(".search-screen");
console.log(search_screen)

searchToggle.addEventListener("click",()=>{
    search_screen.classList.remove("hidden")
});
const closer = document.querySelector(".closer");
closer.addEventListener("click",()=>{
    search_screen.classList.add("hidden");
})



const msearchData = document.getElementById("Msearch");
const mlist = document.querySelector(".m-search-list");
msearchData.addEventListener(("click"),()=>{
    console.log("click");
    mlist.classList.toggle("search-list-active")
    msearchData.addEventListener(("keyup"),()=>{
        fetchSearch((msearchData.value).trim(),mlist);
    })
    
})



document.getElementById("m-submitSearch").addEventListener("click",()=>{
    console.log(":Sd")
    localStorage.clear();
    localStorage.setItem("searchAPI",(Global_Search_API));
    window.location.href = "Search.html";
});


