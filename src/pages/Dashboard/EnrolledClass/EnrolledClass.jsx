import useTitle from "../../../hook/useTitle";


const EnrolledClass = () => {
    useTitle('Enrolled Class');
    return (
        <div>
            <h2 className="uppercase text-3xl mt-8 mb-8 text-center font-semibold ">My Enrolled Class</h2>
        </div>
    );
};

export default EnrolledClass;