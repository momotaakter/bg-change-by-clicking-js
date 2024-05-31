function main(){
const root=document.getElementById('container-id');
const btn=document.getElementById('btn-id');
btn.addEventListener('click',function(){
    const bgcolor=genaratergbcolor();
    root.style.background=bgcolor;
})


}
main();


//genarate rbg color
function genaratergbcolor(){
    //rgb sonka genarate korar niom hocce 3 ta sonka takbe
    //so amra sorbonimno teke sorbocco sonkar er modde jekono ber korte pari

//sorbonimno color holo 000 black,ar sorbocco color holo rgb(255,255,255);
//amader dorkar integar number floting nukber dorkar nai

const red=Math.floor(Math.random()*255);
const green=Math.floor(Math.random()*255);
const blue=Math.floor(Math.random()*255);

return`rgb(${red},${green},${blue})`



}