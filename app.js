let scrollText = document.querySelector(".scroll-text");

window.onscroll = () => {
    let pos = window.scrollY;
    // console.log(pos);
    scrollText.style.left =  `-${pos/2}px`;
}