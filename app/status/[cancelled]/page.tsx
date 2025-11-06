import { XCircle } from '@deemlol/next-icons'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className='w-full h-screen overflow-hidden flex justify-center items-center p-5 bg-black/45'>
            <div className='w-full sm:w-[320px] h-[300px] bg-white rounded-md drop-shadow flex flex-col justify-center items-center gap-2'>
                <XCircle size={95} color='brown' />
                <div className='flex flex-col justify-center items-center gap-3'>
                    <p className='text-xl'>Payment is Cancelled</p>
                    <Link href="/" className='px-5 py-2 rounded-md drop-shadow bg-green-600 text-white'>Home</Link>
                </div>
            </div>
        </div>
    )
}

export default page