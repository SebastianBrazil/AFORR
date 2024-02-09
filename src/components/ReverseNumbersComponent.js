import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { ReverseNumApiCall } from '../services/DataService';

export default function ReverseNumbersComponent() {
    const [RNvar, setRNvar] = useState("");
    const [RNResponse, setRNResponse] = useState("Response");

    function setInput1(e) {
        setRNvar(e.target.value);
    };

    async function RNCall() {
        if (RNvar === "") {
            setRNResponse("Your input is empty.");
        } else {
            const response = await ReverseNumApiCall(RNvar);
            setRNResponse(response);
        };
    };

    return (
        <div className="wallpoet">
            <p className="text-center text-yellow-300 text-6xl lg:text-9xl pt-10 lg:pt-20">Reverse Numbers!</p>
            <div className="flex justify-center">
                <Link to={'/'} className="flex justify-center text-center text-yellow-300 text-2xl lg:text-5xl mt-4 mb-20 lg:mb-36 w-8/12 lg:w-6/12">Click Here To Return To
                    Home
                </Link>
            </div>

            <p className="text-yellow-300 text-center text-lg lg:text-3xl pb-8">Input Any Number And It Will Be Reversed</p>

            <div className="flex justify-center pb-5">
                <input onChange={setInput1} type="text" placeholder="Number" className="lg:px-5 text-lg lg:text-3xl flex justify-center text-black bg-yellow-300 text-center"></input>
            </div>

            <div className="flex justify-center pb-8">
                <button onClick={RNCall} className="bg-yellow-300 text-black py-3 px-12 lg:px-16 rounded-full text-lg lg:text-3xl">Submit</button>
            </div>

            <p className="mx-12 lg:mx-56 text-yellow-300 text-center text-lg lg:text-3xl mb-48">{RNResponse}</p>
        </div>
    )
}