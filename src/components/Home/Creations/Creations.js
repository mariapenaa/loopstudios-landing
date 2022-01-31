import React , {useState} from 'react';
import './Creations.scss';
import CustomizedDialogs from '../Dialog/Dialog'
import AOS from 'aos';



import 'aos/dist/aos.css';



const Creations = ({data, onChildClick}) => {

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1500, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      });


    const [show, setShow] = useState(false);

    const toggleShow = () => {
        if(show){
            setShow(false)
        }else{
            setShow(true)
        }
        console.log(show)
    }



    return (
        <div className=" w-100 m-0 container-fluid p-0" data-aos="fade-up">
            <CustomizedDialogs toggleShow={toggleShow}/>
            <div className="row w-100 m-0 d-flex justify-content-between creation-container">
                {data.map((e, i)=>(
                    <div className="cr-square p-0 mb-4" onClick={toggleShow} key={i}>
                        <div className="cr-layer"></div>
                        <p>{e.name}</p>
                        <img src={e.img} alt="creations-img" />
                    </div>
                ))}
            </div>
            <div className="row"></div>
        </div>
    );
}

export default Creations;