// import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../hook/useCart";



const AllDollCategory = ({ subDolls }) => {
    const { _id,classPicture, className, instructorName, availableSeats, price } = subDolls;
    const {user} = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCard = item =>{
        // console.log(item);
        if(user && user.email){
            const cardItem = {classID: _id, classPicture, className, instructorName, availableSeats, price, email: user.email }
            fetch('https://art-school-server-ecru.vercel.app/carts',{
                method:"POST",
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cardItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch(); // refetch cart to update the number of items in the cart
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Selected class added successful',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to select class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state:{from: location}})
                }
              }) 
        }
    }

    return (


        <tr>
            {/* <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th> */}
            <td>
                <div className="flex items-center space-x-3">
                    
                    <div>
                        {/* <div className="font-bold">{classPicture}</div> */}
                        <img className="rounded-lg w-14 h-14" src={classPicture} alt="" />
                    </div>
                </div>
            </td>
            <td>
                {className}
            </td>
            <td>
                {instructorName}
                
            </td>
            <td>
                {availableSeats}
            </td>
            <td>
                ${price}
            </td>
            <th>
            {/* <Link to={`/subDolls/${_id}`}><button className='btn btn-primary'>View Details</button></Link> */}
            <button onClick={handleAddToCard} className='btn btn-primary'>Select Class</button>
            </th>
        </tr>


    );
};

export default AllDollCategory;