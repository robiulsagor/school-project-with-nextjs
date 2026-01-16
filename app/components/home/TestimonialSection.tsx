"use client"

import SectionHeader from "../SectionHeader"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import { Star } from "lucide-react";

const testimonialData = [
    {
        id: 1,
        icon: '/assets/testimonial_icon1.png',
        reviewer: "Jennifer B",
        rating: 5,
        comment: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
    },
    {
        id: 2,
        icon: '/assets/testimonial_icon2.png',
        reviewer: "David K",
        rating: 5,
        comment: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment."
    },
    {
        id: 3,
        icon: '/assets/testimonial_icon3.png',
        reviewer: "Emily L",
        rating: 5,
        comment: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
    },
    {
        id: 4,
        icon: '/assets/testimonial_icon1.png',
        reviewer: "Michael S",
        rating: 5,
        comment: "The curriculum at Little Learners Academy is both fun and educational. My child looks forward to learning new things every day!"
    },
    {
        id: 5,
        icon: '/assets/testimonial_icon2.png',
        reviewer: "Sarah M",
        rating: 5,
        comment: "Little Learners Academy has created a warm and welcoming environment where my daughter feels safe and encouraged to explore her interests."
    },
    {
        id: 6,
        icon: '/assets/testimonial_icon3.png',
        reviewer: "Alex P",
        rating: 5,
        comment: "Little Learners Academy has created a warm and welcoming environment where my daughter feels safe and encouraged to explore her interests."
    },

]

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const TestimonialSection = () => {
    return (
        <section className="section">
            <div className="container mt-12 py-10">
                <SectionHeader subheading="Their happy words "
                    heading="Our Testimonials"
                    description="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically andb emotionally."
                />

                <div className="px-20 mt-20 text-center">
                    <Carousel responsive={responsive}
                        infinite={true}
                        centerMode={false}
                        className="py-2 flex gap-10 items-center" autoPlay={true}>
                        {
                            testimonialData.map((testimonial) => (
                                <div key={testimonial.id} className="p-10 border rounded-lg bg-white text-center flex flex-col items-center max-w-[330px] h-full relative after:absolute after:content-[''] after:w-full after:h-full after:bg-black after:rounded-lg after:top-2 after:left-2 after:-z-10">
                                    <div className="w-15 h-15 border rounded-full flex items-center justify-center mb-4 bg-orange-97">
                                        <Image src={testimonial.icon} width={50} height={50} alt="testimonial user " />
                                    </div>

                                    <h3 className="font-semibold text-xl mb-2 text-gray-20">{testimonial.reviewer}</h3>

                                    <div className="flex gap-2 mt-3">
                                        <Star fill="#FF8D4D" color="#FF8D4D" size={20} />
                                        <Star fill="#FF8D4D" color="#FF8D4D" size={20} />
                                        <Star fill="#FF8D4D" color="#FF8D4D" size={20} />
                                        <Star fill="#FF8D4D" color="#FF8D4D" size={20} />
                                        <Star fill="#FF8D4D" color="#FF8D4D" size={20} />
                                    </div>

                                    <p className="text-gray-600 mb-4 font-medium mt-5">{testimonial.comment}</p>
                                </div>
                            )
                            )
                        }
                    </Carousel>
                </div>


            </div>
        </section>
    )
}

export default TestimonialSection