let blocks = document.getElementsByClassName('card-uplifts');
let a;

for (a = 0; a < blocks.length; a++){
  blocks[a].addEventListener("mouseover", function () {
    let b = this.querySelector("ul");
    console.log(b.parentNode)
    
    b.parentNode.style.transfrom="translateY(194px)";
    b.parentNode.style.color = "green";

    // console.log(blocks[a].style);
    // b.parentNode.style.transform = `translateY(${b}+px)`;
  })
}

console.log();