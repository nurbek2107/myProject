import React from 'react';
import WhiteBtn from './WhiteBtn';

// hooks
import { useFetch } from '../hooks/useFetch';
import ProductCard from './ProductCard';

function AllProducts() {
    const { data, isPending, error } = useFetch(`https://run.mocky.io/v3/ee534a3c-c22a-4d65-99b6-f2e10926b276`);

    console.log(data?.data);

    if (isPending) return <p>Loading...</p>;
    if (error) return <p>Error loading data</p>;

    console.log(data);

    return (
        <div className='main-container'>
            <div className='flex justify-between mb-10'>
                <h1 className='text-4xl text-[#1F2533]'>Our products.</h1>
                <div>
                    <WhiteBtn text={`View all (${data?.data && data?.data.length})`} />
                </div>
            </div>
            <div>

            </div>
            <div className='grid grid-cols-3 gap-9'>
                <ProductCard data={data?.data && data?.data} />
            </div>
        </div>
    );
}

export default AllProducts;
