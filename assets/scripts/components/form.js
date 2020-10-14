document.addEventListener('DOMContentLoaded', function () {

    const formContainer = document.querySelector('.wpcf7-form'),
        noticeContainer = document.querySelector('.wpcf7-response-output')

    if(formContainer) {
        document.addEventListener('click', () =>{
            if(formContainer.classList.contains('invalid') || formContainer.classList.contains('failed')|| formContainer.classList.contains('sent')) {
                noticeContainer.style = 'display: none;'
            }
        })
    }
})