const toggleCollapse = document.querySelector('.toggle-collapse span');
const nav = document.querySelector('.nav');


toggleCollapse.onclick = (e) => {
    nav.classList.toggle('collapse');
    console.log(e.target);
    e.target.classList.toggle("toggle-click");
}