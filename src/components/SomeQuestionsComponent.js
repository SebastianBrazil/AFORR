import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { SQApiCall } from '../services/DataService';

export default function SomeQuestionsComponent() {
    const [SQName, setSQName] = useState("");
    const [SQTime, setSQTime] = useState("");
    const [SQResponse, setSQResponse] = useState("Response");

    function setVar1(e) {
        setSQName(e.target.value);
    };
    function setVar2(e) {
        setSQTime(e.target.value);
    };

    async function SQCall() {
        if (SQName === "" || SQTime === "") {
            setSQResponse("One of your inputs is empty.");
        } else {
            const response = await SQApiCall(SQName, SQTime);
            setSQResponse(response);
        };
    };

    return (
        <div className="wallpoet">
            <p className="text-center text-yellow-300 text-6xl lg:text-9xl pt-10 lg:pt-20">Some Questions</p>
            <div className="flex justify-center">
                <Link to={'/'} className="flex justify-center text-center text-yellow-300 text-2xl lg:text-5xl mt-4 mb-20 lg:mb-36 w-8/12 lg:w-6/12">Click Here To Return To
                    Home
                </Link>
            </div>

            <p className="text-yellow-300 text-center text-lg lg:text-3xl pb-8 px-8 lg:px-0">What's Your Name and When Did You Wake Up?</p>

            <div className="flex justify-center pb-5">
                <input onChange={setVar1} type="text" placeholder="Name" className="lg:px-5 text-lg lg:text-3xl flex justify-center text-black bg-yellow-300 text-center"></input>
            </div>

            <div className="flex justify-center pb-5">
                <input onChange={setVar2} type="text" placeholder="Time (ex 7:00)" className="lg:px-5 text-lg lg:text-3xl flex justify-center text-black bg-yellow-300 text-center"></input>
            </div>

            <div className="flex justify-center pb-8">
                <button onClick={SQCall} className="bg-yellow-300 text-black py-3 px-12 lg:px-16 rounded-full text-lg lg:text-3xl">Submit</button>
            </div>

            <p className="mx-12 lg:mx-56 text-yellow-300 text-center mb-48 text-lg lg:text-3xl">{SQResponse}</p>
        </div>
    )
}