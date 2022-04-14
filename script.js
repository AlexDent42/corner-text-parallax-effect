document.addEventListener('mousemove', parallaxText);


function parallaxText(e) {
    this.querySelectorAll('h2').forEach(layer => {
        let x = (window.innerWidth - e.pageX *2)/2;
        layer.style.transform = `translateX(${x}px)`;
    })
}