document.addEventListener('DOMContentLoaded', () =>{
    const readMoreBtn = document.querySelector('#read-more'),
        readMoreText = document.querySelector('.programs__description--text')

    if(readMoreBtn){
        readMoreBtn.addEventListener('click', (e) => {
            e.preventDefault()
            readMoreText.classList.add('opened')
            readMoreBtn.remove()
        })
    }
})