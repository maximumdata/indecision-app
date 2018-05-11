const appRoot = document.getElementById('app');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const optionEl = e.target.elements.option;
    if (optionEl.value) {
        app.options.push(optionEl.value);
        optionEl.value = '';
        render();
    }
}

const removeOptions = () => {
    app.options = [];
    render();
}

const render = () => {
    const template = (
        <div>
            <h4>{app.title}</h4>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={removeOptions}>Remove All</button>
            <ol>
                <li>
                    Item one
                </li>
                <li>
                    Item two
                </li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();
