
import class1 from '../../../assets/images/popularClass/class1.jpg'
import class2 from '../../../assets/images/popularClass/class2.jpg'
import class3 from '../../../assets/images/popularClass/class3.jpg'
import class4 from '../../../assets/images/popularClass/class4.jpg'
import class5 from '../../../assets/images/popularClass/class5.jpg'
import class6 from '../../../assets/images/popularClass/class6.jpg'

const PopularClass = () => {
    return (
        <div className='mt-10 mb-6'>
            <h2 className='text-4xl font-bold mb-8 text-center text-gray-600'>Popular Class</h2>

            <p className=' font-semibold mb-8 text-center text-gray-500'>Our popular classes</p>
            <div className="lg:grid lg:grid-cols-3 gap-2 rounded-lg">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={class1} alt="Shoes" className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Class Name: Art Attack</h2>
                        <p>Class Students : 50</p>
                        {/* <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={class2} alt="Shoes" className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Class Name: Color Me Happy</h2>
                        <p>Class Students : 47</p>
                        {/* <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={class3} alt="Shoes" className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Class Name: The Fine Line</h2>
                        <p>Class Students : 45</p>
                        {/* <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={class4} alt="Shoes" className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Class Name: The Artful Touch</h2>
                        <p>Class Students : 42</p>
                        {/* <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={class5} alt="Shoes" className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Class Name: Fill Your Canvas</h2>
                        <p>Class Students : 40</p>
                        {/* <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={class6} alt="Shoes" className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Class Name: Artful Babe</h2>
                        <p>Class Students : 38</p>
                        {/* <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PopularClass;