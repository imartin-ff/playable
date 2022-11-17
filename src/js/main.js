document.querySelector("#burger").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".header").classList.toggle("active");
})

