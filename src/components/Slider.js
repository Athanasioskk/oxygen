import img11 from '../assets/images/img11.jpg'
import img22 from '../assets/images/img22.jpg'
import img33 from '../assets/images/img33.jpg'
import { useEffect, useState } from "react";
import './styles/Slider.css';
import { gsap } from "gsap";

function Slider() {

    const images = [
        {
            src: img11,
            title: "Weclome to our Official page!",
            paragraph: "Oxygen Gym, Fitness & Health Center is a local fitness facility offering state-of-the-art equipment, professional trainers, and a variety of classes for all fitness levels.",
            boxname: "Box1",
            titlename: "Title1",
            textname: "Text1",
            id: 0,
        },
        {
            src: img22,
            title: "Fitness Center in Servia, Kozani.",
            paragraph: "Oxygen Gym is conveniently located at 28 Octovriou in Servia, Kozani, making it easily accessible for local residents and visitors alike.",
            boxname: "Box2",
            titlename: "Title2",
            textname: "Text2",
            id: 1,
        },
        {
            src: img33,
            title: "Flexible Subscription Plans Available.",
            paragraph: "Oxygen Gym offers various subscription plans to fit every budget, including daily, monthly, and six-month options, providing flexible choices for all members.",
            boxname: "Box3",
            titlename: "Title3",
            textname: "Text3",
            id: 2,
        },
    ];


    const [index, setIndex] = useState(0);

    console.log(index);

    function incrementIndex() {
        if (index >= 2) {
            setIndex(0)
        } else (setIndex((index) => index + 1))
    }

    function decrementIndex() {
        if (index <= 0) {
            setIndex(2)
        } else (setIndex((index) => index - 1))
    }


    function ShowHide() {
        if (index === 0) {
            gsap.fromTo(".Box1", { width: 0 }, { duration: 1, delay: 2, width: 700 + "px" })
            gsap.fromTo(".Box2", { duration: 1, width: 700 + "px" }, { duration: 1, delay: 0, width: 0 + "px" })
            gsap.fromTo(".Box3", { duration: 1, width: 700 + "px" }, { duration: 1, delay: 0, width: 0 + "px" })

            gsap.fromTo(".Title1", { opacity: 0 }, { duration: 1, delay: 3, opacity: 1 })
            gsap.fromTo(".Title2", { opacity: 1 }, { duration: .5, delay: 0, opacity: 0 })
            gsap.fromTo(".Title3", { opacity: 1 }, { duration: .5, delay: 0, opacity: 0 })

            gsap.fromTo(".Text1", { opacity: 0 }, { duration: 1, delay: 3, opacity: 1 })
            gsap.fromTo(".Text2", { opacity: 1 }, { duration: .5, delay: 0, opacity: 0 })
            gsap.fromTo(".Text3", { opacity: 1 }, { duration: .5, delay: 0, opacity: 0 })

            gsap.fromTo(".FooterBox", { opacity: 0 }, { duration: 1, delay: 3, opacity: 1 })
        }
        else if (index === 1) {
            gsap.to(".Box2", { duration: 1, delay: 2, width: 700 + "px" })
            gsap.fromTo(".Box1", { duration: 1, width: 700 + "px" }, { duration: 1, delay: 0, width: 0 + "px" })
            gsap.fromTo(".Box3", { duration: 1, width: 700 + "px" }, { duration: 1, delay: 0, width: 0 + "px" })

            gsap.fromTo(".Title2", { opacity: 0 }, { duration: 1, delay: 3, opacity: 1 })
            gsap.fromTo(".Title1", { opacity: 1 }, { duration: .5, delay: 0, opacity: 0 })
            gsap.fromTo(".Title3", { opacity: 1 }, { duration: .5, delay: 0, opacity: 0 })

            gsap.fromTo(".Text2", { opacity: 0 }, { duration: 1, delay: 3, opacity: 1 })
            gsap.fromTo(".Text1", { opacity: 1 }, { duration: .5, delay: 0, opacity: 0 })
            gsap.fromTo(".Text3", { opacity: 1 }, { duration: .5, delay: 0, opacity: 0 })

            gsap.fromTo(".FooterBox", { opacity: 0 }, { duration: 1, delay: 3, opacity: 1 })
        }
        else if (index === 2) {
            gsap.to(".Box3", { duration: 1, delay: 2, width: 700 + "px" })
            gsap.fromTo(".Box1", { duration: 1, width: 700 + "px" }, { duration: 1, delay: 0, width: 0 + "px" })
            gsap.fromTo(".Box2", { duration: 1, width: 700 + "px" }, { duration: 1, delay: 0, width: 0 + "px" })

            gsap.fromTo(".Title3", { opacity: 0 }, { duration: 1, delay: 3, opacity: 1 })
            gsap.fromTo(".Title1", { opacity: 1 }, { duration: .5, delay: 0, opacity: 0 })
            gsap.fromTo(".Title2", { opacity: 1 }, { duration: .5, delay: 0, opacity: 0 })


            gsap.fromTo(".Text3", { opacity: 0 }, { duration: 1, delay: 3, opacity: 1 })
            gsap.fromTo(".Text1", { opacity: 1 }, { duration: .5, delay: 0, opacity: 0 })
            gsap.fromTo(".Text2", { opacity: 1 }, { duration: .5, delay: 0, opacity: 0 })

            gsap.fromTo(".FooterBox", { opacity: 0 }, { duration: 1, delay: 3, opacity: 1 })
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            incrementIndex();
        }, 10000);
        return () => clearInterval(interval);
    });

    ShowHide();

    return (
        <div className="ImgContainer">
            <div className="Button1"><button onClick={decrementIndex}>prev</button></div>
            <div className="ImgContainer2">
                {images.map((images, i) => {
                    return (
                        <div className="Slides" style={{ transform: `translateX(-${index * 100}%)` }}
                            key={i}>
                            <img src={images.src} ></img>
                            <div className={images.boxname} id={images.id}>
                                <h2 className={images.titlename} id="titleId">{images.title}</h2>
                                <p className={images.textname} id="textId">{images.paragraph}</p>
                                <footer className="FooterBox">click here for more</footer>
                            </div>
                        </div>
                    )
                })}
                <div className="Button2"><button onClick={incrementIndex}>next</button></div>
            </div>
            <div className='Dots'>

            </div>
        </div>
    )
}

export default Slider;