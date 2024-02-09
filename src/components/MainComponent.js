import React from 'react'
import { Link } from 'react-router-dom';

export default function MainComponent() {
    return (
        <div className="wallpoet">
            <p className="text-center text-yellow-300 text-6xl lg:text-9xl pt-10 lg:pt-20">All For One</p>
            <p className="text-center text-yellow-300 text-2xl lg:text-5xl pt-4 pb-20 lg:pb-36">Click Any Text To Go To That Page</p>
            <div className="relative grid grid-cols-1 lg:grid-cols-5 text-lg lg:text-3xl gap-y-8 lg:gap-y-24 mx-32 text-center mb-40">
                <Link to={'helloThere'} className="text-yellow-300">Hello There</Link>
                <Link to={'additionCalculator'} className="text-yellow-300">Addition Calculator</Link>
                <Link to={'someQuestions'} className="text-yellow-300">Some Questions</Link>
                <Link to={'GOLT'} className="text-yellow-300">Greater or Less Than</Link>
                <Link to={'madLib'} className="text-yellow-300">Mad Lib</Link>
                <Link to={'oddOrEven'} className="text-yellow-300">Odd Or Even</Link>
                <Link to={'reverseText'} className="text-yellow-300">Reverse Text!</Link>
                <Link to={'reverseNumbers'} className="text-yellow-300">Reverse Numbers!</Link>
                <Link to={'magic8Ball'} className="text-yellow-300">Magic 8 Ball</Link>
                <Link to={'restaurantPicker'} className="text-yellow-300">Restaurant Picker</Link>
            </div>
        </div>
    )
}