function handler(){
let tst=document.querySelector(".side_panel");
tst.style.left=0;
};

function handler2(){
    let tst=document.querySelector(".side_panel");
    tst.style.left="-320px";
    };

burg.addEventListener('click',handler);
burg2.addEventListener('click',handler2);
window.addEventListener(`resize`, event => {
    let tst=document.querySelector(".side_panel");
    tst.style.left="-320px";
  }, false);