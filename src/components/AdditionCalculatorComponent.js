import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { AdditionApiCall } from '../services/DataService';

export default function AdditionCalculatorComponent() {
    const [AddNum1, setAddNum1] = useState("");
    const [AddNum2, setAddNum2] = useState("");
    const [AddResponse, setAddResponse] = useState("Response");

    function setNum1(e) {
        setAddNum1(e.target.value);
    };
    function setNum2(e) {
        setAddNum2(e.target.value);
    };

    async function AddCall() {
        if (AddNum1 === "" || AddNum2 === "") {
            setAddResponse("One of your inputs is empty.");
        } else {
            const response = await AdditionApiCall(AddNum1, AddNum2);
            setAddResponse(response);
        };
    };

    return (
        <div className="wallpoet">
            <p className="text-center text-yellow-300 text-6xl lg:text-9xl pt-10 lg:pt-20">Addition Calculator</p>
            <div className="flex justify-center">
                <Link to={'/'} className="flex justify-center text-center text-yellow-300 text-2xl lg:text-5xl mt-4 mb-20 lg:mb-36 w-8/12 lg:w-6/12">Click Here To Return To
                    Home
                </Link>
            </div>

            <p className="text-yellow-300 text-center text-lg lg:text-3xl pb-8 px-8 lg:px-0">Give Me Two Numbers to Add Together</p>

            <div className="flex justify-center pb-5">
                <input onChange={setNum1} type="text" placeholder="Number One" className="lg:px-5 text-lg lg:text-3xl flex justify-center text-black bg-yellow-300 text-center"></input>
            </div>

            <div className="flex justify-center pb-5">
                <input onChange={setNum2} type="text" placeholder="Number Two" className="lg:px-5 text-lg lg:text-3xl flex justify-center text-black bg-yellow-300 text-center"></input>
            </div>

            <div className="flex justify-center pb-8">
                <button onClick={AddCall} className="bg-yellow-300 text-black py-3 px-12 lg:px-16 rounded-full text-lg lg:text-3xl">Submit</button>
            </div>

            <p className="mx-12 lg:mx-56 mb-48 text-yellow-300 text-center text-lg lg:text-3xl">{AddResponse}</p>
        </div>
    )
}