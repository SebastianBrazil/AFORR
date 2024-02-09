import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { MadLibApiCall } from '../services/DataService';

export default function MadLibComponent() {
    const [MadLib1, setMadLib1] = useState("");
    const [MadLib2, setMadLib2] = useState("");
    const [MadLib3, setMadLib3] = useState("");
    const [MadLib4, setMadLib4] = useState("");
    const [MadLib5, setMadLib5] = useState("");
    const [MadLib6, setMadLib6] = useState("");
    const [MadLib7, setMadLib7] = useState("");
    const [MadLib8, setMadLib8] = useState("");
    const [MadLib9, setMadLib9] = useState("");
    const [MadLib10, setMadLib10] = useState("");
    const [MadLibResponse, setMadLibResponse] = useState("Response");

    function setVar1(e) {
        setMadLib1(e.target.value);
    };
    function setVar2(e) {
        setMadLib2(e.target.value);
    };
    function setVar3(e) {
        setMadLib3(e.target.value);
    };
    function setVar4(e) {
        setMadLib4(e.target.value);
    };
    function setVar5(e) {
        setMadLib5(e.target.value);
    };
    function setVar6(e) {
        setMadLib6(e.target.value);
    };
    function setVar7(e) {
        setMadLib7(e.target.value);
    };
    function setVar8(e) {
        setMadLib8(e.target.value);
    };
    function setVar9(e) {
        setMadLib9(e.target.value);
    };
    function setVar10(e) {
        setMadLib10(e.target.value);
    };

    async function MadLibCall() {
        if (MadLib1 === "" || MadLib2 === "" || MadLib3 === "" || MadLib4 === "" || MadLib5 === "" || MadLib6 === "" || MadLib7 === "" || MadLib8 === "" || MadLib9 === "" || MadLib10 === "") {
            setMadLibResponse("One of your inputs is empty.");
        } else {
            const response = await MadLibApiCall(MadLib1, MadLib2, MadLib3, MadLib4, MadLib5, MadLib6, MadLib7, MadLib8, MadLib9, MadLib10);
            setMadLibResponse(response);
        };
    };

    return (
        <div className="wallpoet">
            <p className="text-center text-yellow-300 text-6xl lg:text-9xl pt-10 lg:pt-20">Mad Lib</p>
            <div className="flex justify-center">
                <Link to={'/'} className="flex justify-center text-center text-yellow-300 text-2xl lg:text-5xl mt-4 mb-20 lg:mb-36 w-8/12 lg:w-6/12">Click Here To Return To
                    Home
                </Link>
            </div>

            <p className="text-yellow-300 text-center text-lg lg:text-3xl pb-8">Fill Out These Prompts To Create A Story</p>

            <div className="flex justify-center pb-5">
                <input onChange={setVar1} type="text" placeholder="A 'Name'" className="lg:px-5 text-lg lg:text-3xl flex justify-center text-black bg-yellow-300 text-center"></input>
            </div>

            <div className="flex justify-center pb-5">
                <input onChange={setVar2} type="text" placeholder="A 'Pronoun'" className="lg:px-5 text-lg lg:text-3xl flex justify-center text-black bg-yellow-300 text-center"></input>
            </div>

            <div className="flex justify-center pb-5">
                <input onChange={setVar3} type="text" placeholder="A 'Noun'" className="lg:px-5 text-lg lg:text-3xl flex justify-center text-black bg-yellow-300 text-center"></input>
            </div>

            <div className="flex justify-center pb-5">
                <input onChange={setVar4} type="text" placeholder="'An Instrument'" className="lg:px-5 text-lg lg:text-3xl flex justify-center text-black bg-yellow-300 text-center"></input>
            </div>

            <div className="flex justify-center pb-5">
                <input onChange={setVar5} type="text" placeholder="Some 'Creatures'" className="lg:px-5 text-lg lg:text-3xl flex justify-center text-black bg-yellow-300 text-center"></input>
            </div>

            <div className="flex justify-center pb-5">
                <input onChange={setVar6} type="text" placeholder="A 'Location'" className="lg:px-5 text-lg lg:text-3xl flex justify-center text-black bg-yellow-300 text-center"></input>
            </div>

            <div className="flex justify-center pb-5">
                <input onChange={setVar7} type="text" placeholder="A Second 'Name'" className="lg:px-5 text-lg lg:text-3xl flex justify-center text-black bg-yellow-300 text-center"></input>
            </div>

            <div className="flex justify-center pb-5">
                <input onChange={setVar8} type="text" placeholder="A 'Number'" className="lg:px-5 text-lg lg:text-3xl flex justify-center text-black bg-yellow-300 text-center"></input>
            </div>

            <div className="flex justify-center pb-5">
                <input onChange={setVar9} type="text" placeholder="A 'Utensil'" className="lg:px-5 text-lg lg:text-3xl flex justify-center text-black bg-yellow-300 text-center"></input>
            </div>

            <div className="flex justify-center pb-5">
                <input onChange={setVar10} type="text" placeholder="A Pocket-Sized 'Item'" className="lg:px-5 text-lg lg:text-3xl flex justify-center text-black bg-yellow-300 text-center"></input>
            </div>

            <div className="flex justify-center pb-8">
                <button onClick={MadLibCall} className="bg-yellow-300 text-black py-3 px-12 lg:px-16 rounded-full text-lg lg:text-3xl">Submit</button>
            </div>

            <p className="mx-12 lg:mx-56 text-yellow-300 text-center mb-48 text-lg lg:text-3xl">{MadLibResponse}</p>
        </div>
    )
}