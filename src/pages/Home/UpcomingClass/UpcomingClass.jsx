import { useState } from 'react';
import upcoming1 from "../../../assets/images/upcoming/upcoming-class-1.jpg";
import upcoming2 from "../../../assets/images/upcoming/upcoming-class-2.jpg";
import upcoming3 from "../../../assets/images/upcoming/upcoming-class-3.jpg";
import upcoming4 from "../../../assets/images/upcoming/upcoming-class-4.jpg";
import './UpcomingClass.css'


const UpcomingClass = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div>
            <h2 className="text-4xl font-bold pt-8 text-center text-gray-600">Upcoming Class</h2>

            <div className="lg:grid lg:grid-cols-4 gap-2 rounded-lg">
                <div className={`m-5 border-4 border-pink-300 rounded-lg running-animation ${isHovered ? 'paused' : ''}`}>
                    <div className="flex justify-center align-middle ">
                        <img
                            className="w-60 h-60 border rounded-lg mt-2"
                            src={upcoming1}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                    </div>
                    <div className='text-center pb-2'>
                        <h2 className='text-xl text-black'>Class Name: Art for All</h2>
                        <p>Instructor: Ataur Rahman</p>
                        <p>Launching Date: 01/01/2024</p>
                    </div>
                </div>

                <div className={`m-5 border-4 border-pink-300 rounded-lg running-animation ${isHovered ? 'paused' : ''}`}>
                    <div className="flex justify-center align-middle ">
                        <img
                            className="w-60 h-60 border rounded-lg mt-2"
                            src={upcoming2}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                    </div>
                    <div className='text-center pb-2'>
                        <h2 className='text-xl text-black'>Class Name: Artful</h2>
                        <p>Instructor: Ataur Rahman</p>
                        <p>Launching Date: 01/01/2024</p>
                    </div>
                </div>

                <div className={`m-5 border-4 border-pink-300 rounded-lg running-animation ${isHovered ? 'paused' : ''}`}>
                    <div className="flex justify-center align-middle ">
                        <img
                            className="w-60 h-60 border rounded-lg mt-2"
                            src={upcoming3}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                    </div>
                    <div className='text-center pb-2'>
                        <h2 className='text-xl text-black'>Class Name: Artful Babe</h2>
                        <p>Instructor: Ataur Rahman</p>
                        <p>Launching Date: 01/01/2024</p>
                    </div>
                </div>

                <div className={`m-5 border-4 border-pink-300 rounded-lg running-animation ${isHovered ? 'paused' : ''}`}>
                    <div className="flex justify-center align-middle ">
                        <img
                            className="w-60 h-60 border rounded-lg mt-2"
                            src={upcoming4}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                    </div>
                    <div className='text-center pb-2'>
                        <h2 className='text-xl text-black'>Class Name: Art Tique</h2>
                        <p>Instructor: Ataur Rahman</p>
                        <p>Launching Date: 01/01/2024</p>
                    </div>
                </div>
                

            </div>
        </div>
    );
};

export default UpcomingClass;