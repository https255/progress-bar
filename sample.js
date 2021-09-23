const progressBar = document.querySelector('.progress_bar');

window.addEventListener('scroll',() =>{
    const windowYPos = window.pageYOffset;
    const height     = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled   = (windowYPos / height) * 100;
    progressBar.style.width = scrolled + "%";
});