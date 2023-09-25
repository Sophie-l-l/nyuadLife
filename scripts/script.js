
try{
    const imgContainers = document.querySelectorAll(".imgcontainer_2");

    imgContainers.forEach(container => {
        container.addEventListener("mouseover", () => {
            const overlay = container.querySelector(".overlay");
            overlay.style.height = "100%";
        });

        container.addEventListener("mouseout", () => {
            const overlay = container.querySelector(".overlay");
            overlay.style.height = "0";
        });
    });

    let img1 = document.querySelector("#img1");
    img1.addEventListener("mouseenter", ()=>{
        let img = img1.querySelector("img");
        let par = img1.querySelector("#content_weather");

        if(img.style.opacity == 1){
            img.style.opacity = 0;
            par.style.opacity = 1;
        }else{
            img.style.opacity = 1;
            par.style.opacity = 0;
        }

    });

    let img4 = document.querySelector("#img7");
    img4.addEventListener("mouseenter", ()=>{
        let img = img4.querySelector("img");
        let par = img4.querySelector("#content_temperature");
        if(img.style.opacity == 1){
            img.style.opacity = 0;
            par.style.opacity = 1;
        }else{
            img.style.opacity = 1;
            par.style.opacity = 0;
        }
    });

    let img5 = document.querySelector("#img5");
    img5.addEventListener("mouseenter", ()=>{
        let img = img5.querySelector("img");
        let par = img5.querySelector("#content_humidity");

        if(img.style.opacity == 1){
            img.style.opacity = 0;
            par.style.opacity = 1;
        }else{
            img.style.opacity = 1;
            par.style.opacity = 0;
        }

    });

    let img6 = document.querySelector("#img6");
    img6.addEventListener("mouseenter", ()=>{
        let img = img6.querySelector("img");
        let par = img6.querySelector("#content_cultural");

        if(img.style.opacity == 1){
            img.style.opacity = 0;
            par.style.opacity = 1;
        }else{
            img.style.opacity = 1;
            par.style.opacity = 0;
        }
    });




}catch(ex){
    console.log("Hey error");
}