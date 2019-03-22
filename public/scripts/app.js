'use strict';

console.log('app.js is running');

// JSX - Javascript XML

var app = {
    title: 'Indecision App.',
    subTitle: 'Make up your mind.',
    options: []
};

var user = {
    name: "Sir Loveton Supreme",
    age: 48,
    location: 'Brighton'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location : ',
            location
        );
    }
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var reset = function reset() {
    app.options = [];
    renderApp();
};

var appRoot = document.getElementById('app');

var numbers = [55, 67, 78];

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subTitle && React.createElement(
            'p',
            null,
            app.subTitle
        ),
        React.createElement(
            'p',
            null,
            app.options && app.options.length > 0 ? 'Here are your options ' : 'No options'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option, index) {
                return React.createElement(
                    'li',
                    { key: index },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option', autoFocus: true }),
            React.createElement(
                'button',
                null,
                'Add Option'
            ),
            React.createElement(
                'button',
                { onClick: reset },
                'Reset'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
