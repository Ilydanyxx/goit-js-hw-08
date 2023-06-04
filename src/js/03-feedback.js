import throttle from 'lodash.throttle';

const LOCAL_STORAGE = "feedback-form-state";
const form = {
    email: document.querySelector(".feedback-form input"),
    message: document.querySelector(".feedback-form textarea"),
}
localStorage.setItem(LOCAL_STORAGE, form)
form.email.addEventListener('input', throttle( b => {
    
    form.email = b.target.value;
}, 500))
form.message.addEventListener('input', throttle( a => {
   
    form.message = a.target.value;
}, 500))
window.addEventListener('load', onLoad)
function onLoad() {
    try {
        const data = localStorage.getItem(LOCAL_STORAGE);
        if (!data) return;
        
    } catch (error) {
        console.log("error.message")
    }
} 
const submit = document.querySelector(".feedback-form button")
submit.addEventListener("click", submiter)

function submiter(element) {
    element.preventDefault();
    console.log(form)
    

    
}