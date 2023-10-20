import { useEffect, useState } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategory from '../SubCategory/SubCategory';

const DollCategory = () => {
    const [dolls, setDolls] = useState([]);
    // const [activeTab, setActiveTab] = useState("baby");


    useEffect(() => {
        fetch('https://art-school-server-ecru.vercel.app/dolls')
            .then(res => res.json())
            .then(data => setDolls(data))
    }, [])

    // const result = dolls.filter((doll) => doll.category == activeTab);
    // console.log(result);

    // const handleTabClick = (tabName) => {
    //     setActiveTab(tabName);
    // };
    return (
        <div className='mt-10 mb-6'>
            <h2 className='text-4xl font-bold mb-8 text-center text-gray-600'>Popular Instructors</h2>

            <p className=' font-semibold mb-8 text-center text-gray-500'>The instructor is great, explains the material clearly, with plenty of examples and practice..</p>


            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    dolls?.map(subDolls => <SubCategory
                        key={subDolls._id}
                        subDolls={subDolls}
                    ></SubCategory>)
                }
            </div>

        </div>
    );
};

export default DollCategory;