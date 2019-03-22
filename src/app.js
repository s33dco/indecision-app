console.log('app.js is running');

// JSX - Javascript XML

const app = {
    title: 'Indecision App.',
    subTitle: 'Make up your mind.',
    options: []
};

const user = {
    name : "Sir Loveton Supreme",
    age : 48,
    location: 'Brighton'
};

function getLocation(location) {
    if (location){
        return <p>Location : {location}</p>;
    }
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const reset = () => {
    app.options = [];
    renderApp();
};

const appRoot = document.getElementById('app');

const numbers = [55,67,78]

const renderApp = () => {
    const template =(
        <div>
            <h1>{app.title}</h1>
            { app.subTitle && <p>{app.subTitle}</p>}
            <p>{(app.options && app.options.length > 0) ? 'Here are your options :' : 'No options available!'}</p>
            
            <ol>
            { app.options.map((option, index) => <li key={index}>{option}</li>) }           
            </ol>


            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' autoFocus/>
                <button>Add Option</button>
                {app.options.length > 0 && <button onClick={reset}>Reset</button>}
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
