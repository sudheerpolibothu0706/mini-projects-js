const elemnum=document.getElementById("number");

function positive(){
   let num=parseInt(elemnum.innerHTML);
   num=num+1;
    elemnum.innerHTML=num;
}

function negative(){
    let num=parseInt(elemnum.innerHTML);
    num=num-1;
     elemnum.innerHTML=num;
 }