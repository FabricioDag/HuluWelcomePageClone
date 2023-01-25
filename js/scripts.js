const marker = document.getElementById('marker')

var itemInteractive =  document.querySelectorAll('.navInteractive a')

function indicator(e){
    marker.style.left = e.offsetLeft+'px';
    marker.style.width = e.offsetWidth+'px';
}

itemInteractive.forEach(link =>{
    link.addEventListener('click', (e)=>{
        e.preventDefault()
        indicator(e.target)
    })
})