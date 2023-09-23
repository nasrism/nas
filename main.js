let navi = document.querySelector(".top-nav");

navbar=()=>{
  navi.dataset.nav=="close"?navi.dataset.nav="open":navi.dataset.nav="close";
  console.log(navi.dataset.nav);
}
  
