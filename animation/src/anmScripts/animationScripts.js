import gsap from "gsap";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
//ANIMACION DE LA CAJA 
export let animation = () => {
    gsap.from(".box1", {
        scrollTrigger: {
            trigger: ".box1",
            start: "center bottom",
            end: "center bottom",
            toggleActions: "play none reverse none",
        },
        x: "-100%",
        opacity: 0,
        duration: 1,
    });

    gsap.from(".box2", {
        scrollTrigger: {
            trigger: ".box2",
            start: "center bottom",
            end: "center bottom",
            toggleActions: "play none reverse none",
        },
        x: "-50%",
        opacity: 0,
        duration: 1,
    });
    gsap.from(".box3", {
        scrollTrigger: {
            trigger: ".box3",
            start: "center bottom",
            end: "center bottom",
            toggleActions: "play none reverse none",
        },
        x: "50%",
        opacity: 0,
        duration: 1,
    });
    gsap.from(".box4", {
        scrollTrigger: {
            trigger: ".box4",
            start: "center bottom",
            end: "center bottom",
            toggleActions: "play none reverse none",
        },
        x: "100%",
        opacity: 0,
        duration: 1,
    });
};