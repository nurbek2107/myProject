import React from 'react'

function GreenBtn({ text }) {
    return (
        <button className='rounded-lg bg-[#359740] text-white font-medium text-base btn hover:bg-[#216729] px-[33px]'>
            {text}
        </button>
    )
}

export default GreenBtn