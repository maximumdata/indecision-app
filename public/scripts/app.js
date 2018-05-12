'use strict';

var appRoot = document.getElementById('app');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var optionEl = e.target.elements.option;
    if (optionEl.value) {
        app.options.push(optionEl.value);
        optionEl.value = '';
        render();
    }
};

var removeOptions = function removeOptions() {
    app.options = [];
    render();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    if (option) {
        alert(option);
    }
};
var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h4',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'small',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'button',
            { disabled: !app.options.length, onClick: onMakeDecision },
            'What Should I Do?'
        ),
        React.createElement(
            'button',
            { onClick: removeOptions },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (opt, index) {
                return React.createElement(
                    'li',
                    { key: index },
                    opt
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
