const imageBox = document.querySelector(".wrapper .box .images");
const leftArrow = document.querySelector(".wrapper .left");
const rightArrow = document.querySelector(".wrapper .right");
const verticalLine = document.querySelector(".wrapper .verticalLine");
const innerLine = verticalLine.querySelector(".innerLine");

imageBox.style.transition = "0.8s ease all";

let totalWidth = 0;
imageBox.querySelectorAll("img").forEach((pic) => {
    totalWidth += pic.offsetWidth + 10;
});
totalWidth = Math.max(totalWidth - 10, 0);

let displace = 0;

const setRatioLine = () => {
    if (totalWidth == 0) return;
    let lineLeft = -(window.innerWidth * displace) / totalWidth;
    let lineFront = (window.innerWidth * window.innerWidth) / totalWidth;

    innerLine.style.transition = "0.8s ease transform";
    innerLine.style.transform = `translateX(${lineLeft}px)`;
    innerLine.style.width = `${lineFront}px`;
};

const adjustImageS = () => {
    imageBox.style.transform = `translateX(${displace}px)`;
};
leftArrow.addEventListener("click", () => {
    displace = Math.min(0, displace + window.innerWidth / 1.5);

    adjustImageS();

    setRatioLine();
});
rightArrow.addEventListener("click", () => {
    displace = Math.max(
        -totalWidth + window.innerWidth,
        displace - window.innerWidth / 1.5,
    );
    adjustImageS();

    setRatioLine();
});
verticalLine.addEventListener("click", () => {
    event.stopPropagation();
    let x = event.clientX;
    console.log("verticalLine");
    displace = -totalWidth * (x / window.innerWidth);

    if (displace < -totalWidth + window.innerWidth)
        displace = -totalWidth + window.innerWidth;
    adjustImageS();
    setRatioLine();
});
const importFunction = () => {
    document.addEventListener("mousemove", () => {
        const x = event.offsetX;
        // console.log(x);
    });
};

window.addEventListener("resize", () => {
    setRatioLine();
});

setRatioLine();
