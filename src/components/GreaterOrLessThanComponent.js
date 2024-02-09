import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { GOLTApiCall } from '../services/DataService';

export default function GreaterOrLessThanComponent() {
    const [GOLTNum1, setGOLTNum1] = useState("");
    const [GOLTNum2, setGOLTNum2] = useState("");
    const [GOLTResponse, setGOLTResponse] = useState("Response");

    function setNum1(e) {
        setGOLTNum1(e.target.value);
    };
    function setNum2(e) {
        setGOLTNum2(e.target.value);
    };

    async function GOLTCall() {
        if (GOLTNum1 === "" || GOLTNum2 === "") {
            setGOLTResponse("One of your inputs is empty.");
        } else {
            const response = await GOLTApiCall(GOLTNum1, GOLTNum2);
            setGOLTResponse(response);
        };
    };

    return (
        <div className="wallpoet">
            <p className="text-center text-yellow-300 text-6xl lg:text-9xl pt-10 lg:pt-20">Greater Or Less Than</p>
            <div className="flex justify-center">
                <Link to={'/'} className="flex justify-center text-center text-yellow-300 text-2xl lg:text-5xl mt-4 mb-20 lg:mb-36 w-8/12 lg:w-6/12">Click Here To Return To
                    Home
                </Link>
            </div>

            <p className="text-yellow-300 text-center text-lg lg:text-3xl pb-8 px-8 lg:px-0">Give Me Two Numbers to Compare</p>

            <div className="flex justify-center pb-5">
                <input onChange={setNum1} type="text" placeholder="Number One" className="lg:px-5 text-lg lg:text-3xl flex justify-center text-black bg-yellow-300 text-center"></input>
            </div>

            <div className="flex justify-center pb-5">
                <input onChange={setNum2} type="text" placeholder="Number Two" className="lg:px-5 text-lg lg:text-3xl flex justify-center text-black bg-yellow-300 text-center"></input>
            </div>

            <div className="flex justify-center pb-8">
                <button onClick={GOLTCall} className="bg-yellow-300 text-black py-3 px-12 lg:px-16 rounded-full text-lg lg:text-3xl">Submit</button>
            </div>

            <p className="mx-12 lg:mx-56 mb-48 text-yellow-300 text-center text-lg lg:text-3xl">{GOLTResponse}</p>
        </div>
    )
}