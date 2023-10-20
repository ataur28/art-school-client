import { useEffect, useState } from "react";
import AllDollCategory from "../AllDollCategory/AllDollCategory";
import useTitle from "../../hook/useTitle";

const AllDolls = () => {
  useTitle('All Classes');
  const [dolls, setDolls] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://art-school-server-ecru.vercel.app/dolls')
      .then(res => res.json())
      .then(data => setDolls(data))
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredClasses = dolls.filter((classItem) =>
    classItem.className.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-10 mt-10">
      <form>
        <div className="flex justify-center items-center">
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="input input-bordered"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="btn btn-secondary">Search</button>
        </div>
      </form>

      <div className="overflow-x-auto w-full mt-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
            {filteredClasses.map((subDolls) => (
              <AllDollCategory key={subDolls._id} subDolls={subDolls} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDolls;
