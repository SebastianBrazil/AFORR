import './App.css';
import MainComponent from './components/MainComponent';
import HelloThereComponent from './components/HelloThereComponent';
import AdditionCalculatorComponent from './components/AdditionCalculatorComponent';
import SomeQuestionsComponent from './components/SomeQuestionsComponent';
import GreaterOrLessThanComponent from './components/GreaterOrLessThanComponent';
import MadLibComponent from './components/MadLibComponent';
import OddOrEvenComponent from './components/OddOrEvenComponent';
import ReverseTextComponent from './components/ReverseTextComponent';
import ReverseNumbersComponent from './components/ReverseNumbersComponent';
import Magic8BallComponent from './components/Magic8BallComponent';
import RestaurantPickerComponent from './components/RestaurantPickerComponent';

// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainComponent />} />
        <Route path='helloThere' element={<HelloThereComponent />} />
        <Route path='additionCalculator' element={<AdditionCalculatorComponent />} />
        <Route path='someQuestions' element={<SomeQuestionsComponent />} />
        <Route path='GOLT' element={<GreaterOrLessThanComponent />} />
        <Route path='madLib' element={<MadLibComponent />} />
        <Route path='oddOrEven' element={<OddOrEvenComponent />} />
        <Route path='reverseText' element={<ReverseTextComponent />} />
        <Route path='reverseNumbers' element={<ReverseNumbersComponent />} />
        <Route path='magic8Ball' element={<Magic8BallComponent />} />
        <Route path='restaurantPicker' element={<RestaurantPickerComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
