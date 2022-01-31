import React , {useState} from 'react';
import './Home.scss';
import imageVR from '../../images/desktop/image-interactive.jpg'
import Button from '@material-ui/core/Button';
import Creations from './Creations/Creations'
import AOS from 'aos';
import 'aos/dist/aos.css';

import imgCurious from '../../images/desktop/image-curiosity.jpg'
import imgDeep from '../../images/desktop/image-deep-earth.jpg'
import imgFish from  '../../images/desktop/image-fisheye.jpg'
import imgGrid from '../../images/desktop/image-grid.jpg'
import imgNight from '../../images/desktop/image-night-arcade.jpg'
import imgPocket from '../../images/desktop/image-pocket-borealis.jpg'
import imgSoccer from '../../images/desktop/image-soccer-team.jpg'
import imgFrom from '../../images/desktop/image-from-above.jpg'

const Home = () => {
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

  let creationsArr = [
    {
        name:'Deep earth',
        img:imgDeep
    },
    {
        name:'Night arcade',
        img:imgNight
    },
    {
        name:'Soccer team VR',
        img:imgSoccer
    },
    {
        name:'The grid',
        img:imgGrid
    },
    {
        name:'From up above VR',
        img:imgFrom,
    },
    {
        name:'Pocket borealis',
        img:imgPocket
    },
    {
        name:'The curiosity',
        img:imgCurious
    },
    {
        name:'Make it fisheye',
        img:imgFish
    },
]

  const [array, setArray] = useState(creationsArr);

  const sliceArray = () => {
        if(array.length > 4){
          let slicedArr = creationsArr.slice(0,4)
          setArray(slicedArr)
        }else{
          setArray(creationsArr)
        }

}

  return (
    <div className="body">
        <div id="section1">
          <div className="layer">
            <p className="mainTitle mb-0" data-aos="fade-right">Immersive experiences that deliver</p>
          </div>
        </div>
        <div id="section2">
          <img src={imageVR} data-aos="fade-right" alt="man using VR" />
          <div className="subtitle-square" data-aos="fade-up">
            <p className="subtitle m-0">The leader in interactive VR</p>
            <p className="text">  Founded in 2011, Loopstudios has been producing world-class virtual reality 
            projects for some of the best companies around the globe. Our award-winning 
            creations have transformed businesses through digital experiences that bind 
            to their brand.</p>
          </div>
        </div>
        <div id="section3" className="mt-5">
          <div className="d-flex justify-content-between align-items-center creation-div">
            <p className="subtitle m-0" data-aos="fade-right">Our creations</p>
            <Button variant="outlined" className="button" data-aos="fade-left" onClick={sliceArray}>See all</Button>
          </div>
          <Creations className="w-100 m-0"   data={array}/>
        </div>
    </div>
  );
}

export default Home;