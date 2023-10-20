import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import user1 from '../../../assets/images/users/user1.jpg'
import user2 from '../../../assets/images/users/user2.jpg'
import user3 from '../../../assets/images/users/user3.jpg'
const UserReview = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold pt-8 text-center text-gray-600">Review</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 '>
                <div className="card w-96 bg-base-100 shadow-xl mb-4">
                    <figure className="px-10 pt-10">
                        <img  src={user1} alt="Shoes" className="rounded-xl h-60" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Ataur Rahman</h2>
                        <p>I can highly recommended this place, if you have some time to spend in this school, great place to learn. Very patient and professional teacher with warm personality.</p>

                        <div className="card-actions">
                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className='text-yellow-400' icon={faStarHalfStroke} />
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mb-4">
                    <figure className="px-10 pt-10">
                        <img src={user2} alt="Shoes" className="rounded-xl h-60" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Jhankar Mahbub</h2>
                        <p>This School has great peaceful teacher. I decided to draw my mother that passed away two years ago. It was very emotional and professional. Thank you and hope to see you again.</p>

                        <div className="card-actions">
                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className='text-yellow-400' icon={faStarHalfStroke} />
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mb-4">
                    <figure className="px-10 pt-10">
                        <img src={user3} alt="Shoes" className="rounded-xl h-60" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Ayman Sadiq</h2>
                        <p>I had a really good drawing class with Instructor, I just walked by and could take the class spontanous. He is a excellent teacher and also up for good conversations. </p>

                        <div className="card-actions">
                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className='text-yellow-400' icon={faStarHalfStroke} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserReview;