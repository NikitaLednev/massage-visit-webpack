import IMask from "imask";

const phoneInput = document.querySelector('#cf_phone')

if(phoneInput) {
    const numberMask = IMask( phoneInput , {
        mask: '+{7} (000) 000-00-00',
        lazy: true,
        placeholderChar: ' ',
    });
}
