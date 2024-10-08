import React from "react";
import target from '../assets/images/target.svg';
import target_ng from '../assets/images/target_ng.svg';
import light from '../assets/images/light.svg';
import light_bg from '../assets/images/light_bg.svg';
import brush from '../assets/images/brush.svg';
import brush_bg from '../assets/images/brush_bg.svg';

function FeatureSection() {
    const elem = [
        {
            img1: target_ng,
            img2: target,
            title: "Target",
            des: "My target is to master Figma for designing intuitive interfaces, use Webflow for building responsive websites, and leverage Framer for creating interactive prototypes.",
            img2Top: '40px',
            img2Left: '38px',
        },
        {
            img1: light_bg,
            img2: light,
            title: "Idea",
            des: "My idea is to craft innovative and user-friendly digital solutions that combine aesthetic appeal with functional excellence.",
            img2Top: '34px',
            img2Left: '38px',
        },
        {
            img1: brush_bg,
            img2: brush,
            title: "Skills",
            des: "Designer with expertise in Figma, Webflow, and Framer, specializing in creating engaging user interfaces.",
            img2Top: '40px',
            img2Left: '46px',
        },
    ];

    return (
        <section className="p-4 sm:p-8 lg:p-20">
            <div className="flex flex-col lg:flex-row lg:gap-10">
                {elem.map((item, index) => (
                    <div key={index} className="flex flex-col items-center mb-8 lg:mb-0 lg:w-1/3">
                        <div className="relative">
                            <img className="w-full h-auto" src={item.img1} alt={item.title} />
                            <img className="absolute" src={item.img2} alt={item.title} style={{
                                top: item.img2Top,
                                left: item.img2Left,
                            }} />
                        </div>
                        <h1 className="pt-4 text-2xl font-lexend font-bold text-white pb-6 text-center">{item.title}</h1>
                        <p className="text-md text-gray-300 text-center px-4">{item.des}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FeatureSection;
