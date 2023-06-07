import throttle from 'lodash.throttle';

const LOCAL_STORAGE = "feedback-form-state";
const form = document.querySelector(".feedback-form");
let formData = {};

form.addEventListener(
    "input",
    throttle((e) => {
    formData[e.target.name] = e.target.value.trim();
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(formData));
    }, 500)
);

window.addEventListener("load", onLoad)
function onLoad() {
    try {
        const data = localStorage.getItem(LOCAL_STORAGE);
        if (!data) return;
        formData = JSON.parse(data);
        Object.entries(formData).forEach(([key, val]) => {
            form.elements[key].value = val;
        });
    } catch (error) {
        console.log(error.message);
    }
} 

form.addEventListener("submit", submiter)

function submiter(e) {
    e.preventDefault();
    console.log(formData);
    formData = {};
    e.target.reset();
    localStorage.removeItem(LOCAL_STORAGE);
}