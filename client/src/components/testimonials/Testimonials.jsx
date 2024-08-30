import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import testimonials from "../../assets/data/testimonials"

const Testimonials = () => {
    const [people, setPeople] = useState(testimonials);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    // autoslide, clearInterval = een cleanup functie noodzakelijk bij interval
    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 3000);
        return () => clearInterval(slider);
    }, [index]);
    return (
            <div className="section-center mx-auto w-auto mt-20">
                {people.map((person, personIndex) => {
                    const { id, image, name, title, quote } = person;
                    let position = "nextSlide";
                    if (personIndex === index) {
                        position = "activeSlide";
                    }
                    if (
                        personIndex === index - 1 ||
                        (index === 0 && personIndex === people.length - 1)
                    ) {
                        position = "lastSlide";
                    }
                    return (
                        <article key={id} className={position}>
                            <img src={image} alt={name} className="person-img mt-2 shadow-xl border border-gray-900" />
                            <h4 className='text-base lg:text-lg font-semibold'>{name}</h4>
                            <p className="text">{quote}</p>
                            <FaQuoteRight className="icon" />
                        </article>
                    );
                })}
                <button className="prev" onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft />
                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                    <FiChevronRight />
                </button>
            </div>
    )
}

export default Testimonials
