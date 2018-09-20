import React, { Component } from 'react';
import TopNav from '../../components/TopNavigation/TopNav';
import Carousel from '../../components/ImageSlider/ImageSlider';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <TopNav />
                <Carousel />
            </div>
        );
    }
}
 
export default Home;