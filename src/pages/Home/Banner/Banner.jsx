import banner1 from '../../../assets/images/banner/banner1.jpg'
import banner2 from '../../../assets/images/banner/banner2.jpg'
import banner3 from '../../../assets/images/banner/banner3.jpg'
import banner4 from '../../../assets/images/banner/banner4.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full h-[500px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full rounded-lg" />
                <div className="absolute h-full flex justify-between items-center transform -translate-y-1/2 left-0 right-0 top-1/2 bg-gradient-to-r from-[#444444] to-[rgba(21,21,21, 0)] rounded-lg">
                    <div className='text-center mx-auto text-cyan-50 space-y-7'>
                        <h2 className='text-6xl text-zinc-100'>Qualitative Drawing School</h2>
                        <p>Bangladesh Drawing Academy awarded first prize to our school</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full rounded-lg" />
                <div className="absolute h-full flex justify-between items-center transform -translate-y-1/2 left-0 right-0 top-1/2 bg-gradient-to-r from-[#444444] to-[rgba(21,21,21, 0)] rounded-lg">
                    <div className='text-center mx-auto text-cyan-50 space-y-7'>
                        <h2 className='text-6xl'>Qualitative Drawing School</h2>
                        <p>Bangladesh Drawing Academy awarded first prize to our school</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full rounded-lg" />
                <div className="absolute h-full flex justify-between items-center transform -translate-y-1/2 left-0 right-0 top-1/2 bg-gradient-to-r from-[#444444] to-[rgba(21,21,21, 0)] rounded-lg">
                    <div className='text-center mx-auto text-cyan-50 space-y-7'>
                        <h2 className='text-6xl'>Qualitative Drawing School</h2>
                        <p>Bangladesh Drawing Academy awarded first prize to our school</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full rounded-lg" />
                <div className="absolute h-full flex justify-between items-center transform -translate-y-1/2 left-0 right-0 top-1/2 bg-gradient-to-r from-[#444444] to-[rgba(21,21,21, 0)] rounded-lg">
                    <div className='text-center mx-auto text-cyan-50 space-y-7'>
                        <h2 className='text-6xl'>Qualitative Drawing School</h2>
                        <p>Bangladesh Drawing Academy awarded first prize to our school</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;