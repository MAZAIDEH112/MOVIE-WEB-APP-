
const toggle = document.querySelectorAll(".menu-btn");
const ms = document.getElementById("menuSection");
const indicator = document.querySelector(".indicator");

function transFormY(indicator){ // To get translate Y value and add from the indicator object
    var transVal = window
        .getComputedStyle(indicator)
    const matrix = new DOMMatrixReadOnly(transVal.transform);
    const valY = matrix.m42 + 65; 
    indicator.style.transfrom = "translateY(" + valY + ")";
    return valY;
    

}

for(var i =0; i<toggle.length;i++){
    toggle[i].addEventListener('click', () => {
        ms.classList.toggle("active");
        // var indicator_ = transFormY(indicator);
        // indicator.''
        
        
        
    });
}
