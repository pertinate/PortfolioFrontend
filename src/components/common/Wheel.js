import React from 'react';
import { Carousel } from 'antd';

export default function Wheel(props) {
    let slides = props.skillSets.map(skill => {
        return (
            <div>
                <a href={`#${skill.skillName}`}>
                    <h3>
                        {skill.skillName}
                    </h3>
                </a>
                <p>
                    {skill.skillDescription}
                </p>
            </div>
        );
    });
    return (
        <Carousel
            slidesToShow={2}
            arrows={true}
            prevArrow={<span />}
            nextArrow={<span />}
            style={{ margin: '36px', opacity: 1 }}
            waitForAnimate={false}
        >
            {slides}
        </Carousel>
    );
}
