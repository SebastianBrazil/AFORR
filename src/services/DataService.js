async function HelloApiCall(name) {
    const promise = await fetch(`https://allforoneapihosting.azurewebsites.net/HelloThere/${name}`);
    const data = await promise.text();
    return data;
};

async function AdditionApiCall(number1, number2) {
    const promise = await fetch(`https://allforoneapihosting.azurewebsites.net/AdditionCalculator/${number1}/${number2}`);
    const data = await promise.text();
    return data;
};

async function SQApiCall(name, time) {
    const promise = await fetch(`https://allforoneapihosting.azurewebsites.net/SomeQuestions/${name}/${time}`)
    const data = await promise.text();
    return data;
};

async function GOLTApiCall(num1, num2) {
    const promise = await fetch(`https://allforoneapihosting.azurewebsites.net/GOLT/${num1}/${num2}`)
    const data = await promise.text();
    return data;
};

async function MadLibApiCall(nameOne, pronoun, nounOne, warriorsWeapon, creatureOne, locationOne, nameTwo, ageOne, toolOne, pocketItem) {
    const promise = await fetch(`https://allforoneapihosting.azurewebsites.net/MadLib/${nameOne}/${pronoun}/${nounOne}/${warriorsWeapon}/${creatureOne}/${locationOne}/${nameTwo}/${ageOne}/${toolOne}/${pocketItem}`)
    const data = await promise.text();
    return data;
};

async function OOEApiCall(num) {
    const promise = await fetch(`https://allforoneapihosting.azurewebsites.net/OddOrEven/${num}`)
    const data = await promise.text();
    return data;
};

async function ReverseTextApiCall(userInput) {
    const promise = await fetch(`https://allforoneapihosting.azurewebsites.net/ReverseText/${userInput}`)
    const data = await promise.text();
    return data;
};

async function ReverseNumApiCall(userInput) {
    const promise = await fetch(`https://allforoneapihosting.azurewebsites.net/ReverseNum/${userInput}`)
    const data = await promise.text();
    return data;
};

async function M8BApiCall(question) {
    const promise = await fetch(`https://allforoneapihosting.azurewebsites.net/Magic8Ball/${question}/`)
    const data = await promise.text();
    return data;
};

async function RPApiCall(category) {
    const promise = await fetch(`https://allforoneapihosting.azurewebsites.net/RP/${category}/`)
    const data = await promise.text();
    return data;
};

export { HelloApiCall, AdditionApiCall, SQApiCall, GOLTApiCall, MadLibApiCall, OOEApiCall, ReverseTextApiCall, ReverseNumApiCall, M8BApiCall, RPApiCall };