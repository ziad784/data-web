let menu_btn = document.getElementById("menu_btn");
let menu = document.getElementById("menu");


let isclicked = false;



menu_btn.addEventListener("click",()=>{
    if(isclicked === false){
        menu.style.display = "block";
        menu.classList.remove("back");
        menu.classList.add("go");
        isclicked = true;
    }else if(isclicked === true){
       
        menu.classList.remove("go");
        menu.classList.add("back");
        setTimeout(() => {
            menu.style.display = "none";
        }, 800);
        isclicked = false;
    }

});


