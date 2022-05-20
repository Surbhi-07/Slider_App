import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Slides } from "../Actions/index"
function Slide() {

    const [currentSlide, setslide] = useState(0)
    const { slides } = useSelector((state) => state.slideReducer);

    const dispatch = useDispatch()
    const { setSlides} = bindActionCreators(Slides, dispatch)

    const handleChange = () => {
        let newslides = slides;
        for (let i = newslides.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newslides[i], newslides[j]] = [newslides[j], newslides[i]];
        }
        setSlides(newslides);
        setslide(currentSlide!==0?currentSlide-1:currentSlide+1);
    }
    return (
        <div>
            <div id="navigation" className="text-center">

                <button
                    className='btn btn-primary'
                    disabled={currentSlide === 0}
                    onClick={() => setslide(currentSlide - 1)}
                >
                    Prev
                </button>
                <button
                    className='btn btn-success'
                    disabled={currentSlide === 0}
                    onClick={() => setslide(0)}
                >
                    Restart
                </button>
                <button
                    className='btn btn-primary'
                    disabled={currentSlide === slides.length - 1}
                    onClick={() => setslide(currentSlide + 1)}
                >
                    Next
                </button>
            </div>

            <div id="slide" className="card shadow p-3 mb-5 bg-white rounded border-0 text-center">
                <h1>{slides[currentSlide].title}</h1>
                <p>{slides[currentSlide].text}</p>
            </div>
            <div>
                <button className='btn btn-primary' onClick={handleChange}>shuffle</button>
            </div>
        </div>
    );

}

export default Slide;