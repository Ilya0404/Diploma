import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import pc1Img from '../image/pc1.jpg';
import pc2Img from '../image/pc2.jpg';
import pc3Img from '../image/pc3.jpg';


export default class CarouselBox extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item style={{'height': '700px'}}>
                        <img
                            className="d-block w-100"
                            src={pc1Img}
                            alt="Pc"
                        />
                        <Carousel.Caption>
                            <h2>Ремонт</h2>
                            <h3>узнать подробнее можно по телефону: +7 902 602 89 70</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{'height': '700px'}}>
                        <img
                            className="d-block w-100"
                            src={pc2Img}
                            alt="Pc"
                        />
                        <Carousel.Caption>
                            <h2>Ремонт</h2>
                            <h3>узнать подробнее можно по телефону: +7 902 602 89 70</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{'height': '700px'}}>
                        <img
                            className="d-block w-100"
                            src={pc3Img}
                            alt="Pc"
                        />
                        <Carousel.Caption>
                            <h2>Ремонт</h2>
                            <h3>узнать подробнее можно по телефону: +7 902 602 89 70</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            
        )
    }
}
