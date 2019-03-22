console.log('app.js is running');

// JSX - Javascript XML

const app = {
    title: 'Indecision App.',
    subTitle: 'Make up your mind.',
    options: ['Option One', 'Option Two']
}

const template =(
    <div>
        <h1>{app.title}</h1>
        { app.subTitle && <p>{app.subTitle}</p>}
        <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item One</li>
            <li>Item two</li>
        </ol>
    </div>
);

const user = {
    name : "Sir Loveton Supreme",
    age : 48,
    location: 'Brighton'
}

function getLocation(location) {
    if (location){
        return <p>Location : {location}</p>;
    }
}


let count = 0

const addOne = () => {
    count++;
    renderCounterApp();
} 
const minusOne = () => {
    count--;
    renderCounterApp();
} 

const reset = () => {
    count = 0;
    renderCounterApp();
} 

const templateTwo = (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);

const appRoot = document.getElementById('app');



const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo,appRoot);
    
}


renderCounterApp();

// const multiplier = {
//     numbers : [12, 24,26,57,78,345],
//     multiplyBy: 13,
//     multiply(){
//         return this.numbers.map((number)=> number * this.multiplyBy);
//     }
// }

// console.log(multiplier.multiply());