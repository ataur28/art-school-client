import Swal from "sweetalert2";
import useCart from "../../../hook/useCart";
import useTitle from "../../../hook/useTitle";
import { Link } from "react-router-dom";

const MyCart = () => {
    useTitle('Selected Class');
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => parseInt(item.price) + parseInt(sum), 0)


    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://art-school-server-ecru.vercel.app/carts/${item._id}`,{
                method: 'DELETE',
              })
              .then(res => res.json())
              .then(data =>{
                if(data.deletedCount>0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
              })
            }
          })
    }


    return (
        <div className="w-11/12">
            <h2 className="uppercase text-3xl mt-8 mb-8 text-center font-semibold">My Selected Class</h2>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl">Total Class : {cart.length}</h3>
                <h3 className="text-2xl">Total price : ${total}</h3>
                
            </div>
            
            <div className="mb-5 mt-5">


                <div className="overflow-x-auto w-full mt-5">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                                <th>#</th>
                                <th>Class Image</th>
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                                <th>Price</th>
                                <th>Button</th>
                            </tr>
                        </thead>
                        <tbody>


                            {/* {
                            dolls?.map(subDolls => <AllDollCategory
                                key={subDolls._id}
                                subDolls={subDolls}
                            ></AllDollCategory>)
                        } */}
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index+1}
                                </td>

                                <td>
                                    <div className="flex items-center space-x-3">

                                        <div>

                                            <img className="rounded-lg w-14 h-14" src={item.classPicture} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.className}
                                </td>
                                <td>
                                    {item.instructorName}

                                </td>
                                <td className="text-end">
                                    ${item.price}
                                </td>
                                <th>
                                <Link to='/dashboard/payment'><button className="btn btn-secondary">Pay</button></Link>
                                    {/* <Link to={`/subDolls/${_id}`}><button className='btn btn-primary'>View Details</button></Link> */}
                                    <button onClick={() => handleDelete(item)} className='btn btn-primary ms-2'>Delete</button>
                                </th>
                            </tr>)
                        }

                            



                        </tbody>


                    </table>
                </div>


            </div>
        </div>
    );
};

export default MyCart;