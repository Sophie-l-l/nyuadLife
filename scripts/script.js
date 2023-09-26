
try{




    const bunnycontainer=document.querySelector("#bunny");
    const bunny1=bunnycontainer.querySelector("#bunnyimg1");
    const bunny2=bunnycontainer.querySelector("#bunnyimg2");
        

    let isScrollingDown = false;
    let scrollingTimeout;
    let lastScrollPosition  =0;

    function changeImage(scrolling) {
        if (scrolling) {
            bunny1.style.opacity=0;
            bunny2.style.opacity=1;
        } else {
            bunny1.style.opacity=1;
            bunny2.style.opacity=0;
        }
    }
  

    window.addEventListener("scroll", () => {
        let currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
        clearTimeout(scrollingTimeout);

        if (currentScrollPosition > (lastScrollPosition || 0)) {
            // Scrolling down
            if (!isScrollingDown) {
                isScrollingDown = true;
                changeImage(true); // Indicate that scrolling down has started
            }
        } else {
            // Scrolling up
            if (isScrollingDown) {
                isScrollingDown = false;
                changeImage(false); // Indicate that scrolling down has ended or scrolling up has started
            }
        }
        
       
                
        scrollingTimeout = setTimeout(() => {
            if (isScrollingDown) {
                isScrollingDown = false;
                changeImage(false); // Indicate that scrolling down has ended
            }
        }, 200);// Adjust the timeout value as needed to control when scrolling is considered to have ended
        lastScrollPosition = currentScrollPosition;
});




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