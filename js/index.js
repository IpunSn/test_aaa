const  collapsible= document.getElementById("collapsible" );
const content= document.getElementById("content");
const close = document.getElementsByClassName('close')[0];

collapsible.onclick = function(){
    content.style.display="block";

};
close.onclick = function(){
    content.style.display="none";
}





