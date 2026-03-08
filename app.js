let btn=document.querySelector("button");
let inp=document.querySelector("input");
let lis=document.querySelectorAll("li");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
  let item=document.createElement("li");
  item.innerText=inp.value;
  ul.appendChild(item);
  inp.value="";

  let dltbtn=document.createElement("Button");
   dltbtn.innerText="Delete";
 item.appendChild(dltbtn);
});

ul.addEventListener("click",function(event){
  if(event.target.nodeName=="BUTTON"){
    let listitem=event.target.parentElement;
    listitem.remove();
  }
})



