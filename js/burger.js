function handler(){
let tst=document.querySelector(".side_panel");
tst.style.display="block";
};

function handler2(){
    let tst=document.querySelector(".side_panel");
    tst.style.display="none";
    };


burg.addEventListener('click',handler);
burg2.addEventListener('click',handler2);
window.addEventListener(`resize`, event => {
    let tst=document.querySelector(".side_panel");
    tst.style.display="none";
  }, false);