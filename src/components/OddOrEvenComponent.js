import React from 'react'
import { Link } from 'react-router-dom';

export default function OddOrEvenComponent() {
    return (
        <div className="wallpoet">
            <p className="text-center text-yellow-300 text-6xl lg:text-9xl pt-10 lg:pt-20">Odd Or Even</p>
            <div className="flex justify-center">
                <Link to={'/'} className="flex justify-center text-center text-yellow-300 text-2xl lg:text-5xl mt-4 mb-20 lg:mb-36 w-8/12 lg:w-6/12">Click Here To Return To
                    Home
                </Link>
            </div>

            <p className="text-yellow-300 text-center text-lg lg:text-3xl pb-8 px-8 lg:px-0">Give Me a Number To See If It Is Odd Or Even</p>

            <div className="flex justify-center pb-5">
                <input id="OOENum" type="text" placeholder="Number" className="lg:px-5 text-lg lg:text-3xl flex justify-center text-black bg-yellow-300 text-center"></input>
            </div>

            <div className="flex justify-center pb-8">
                <button id="OOECall" className="bg-yellow-300 text-black py-3 px-12 lg:px-16 rounded-full text-lg lg:text-3xl">Submit</button>
            </div>

            <p id="OOEResponse" className="mx-12 lg:mx-56 text-yellow-300 text-center mb-48 text-lg lg:text-3xl">Response</p>
        </div>
    )
}