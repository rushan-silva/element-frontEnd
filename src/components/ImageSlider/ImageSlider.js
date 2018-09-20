import React, { Component } from 'react';
// import Carousel from 'react-image-carousel';
import Slider1 from '../../images/slider1.jpeg';
import Slider2 from '../../images/slider2.jpg';
import Slider3 from '../../images/slider3.png';
import Slider4 from '../../images/slider4.jpg';
import Slider5 from '../../images/slider5.jpg';
import Slider6 from '../../images/slider6.jpg';
// import '../../../node_modules/react-image-carousel/lib/css/main.min.css';
// import './imageSlider.css';
import InfiniteCarousel from 'react-leaf-carousel';

let images = [
    Slider1,
    Slider2,
    Slider3,
    Slider4,
    Slider5,
    Slider6
];

class ImageSlider extends Component {
    render() { 
        return ( 
            <InfiniteCarousel
            breakpoints={[
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                },
              },
            ]}
            dots={true}
            showSides={true}
            sidesOpacity={.5}
            sideSize={.1}
            slidesToScroll={1}
            slidesToShow={1}
            scrollOnDevice={true}
            autoCycle={true}
          >
            <div>
              <img
                alt=''
                src={Slider1}
              />
            </div>
            <div>
              <img
                alt=''
                src={Slider2}
              />
            </div>
            <div>
              <img
                alt=''
                src={Slider3}
              />
            </div>
            <div>
              <img
                alt=''
                src={Slider4}
              />
            </div>
            <div>
              <img
                alt=''
                src={Slider5}
              />
            </div>
            <div>
              <img
                alt=''
                src={Slider6}
              />
            </div>
          </InfiniteCarousel>
        );
    }
}
 
export default ImageSlider;