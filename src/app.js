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
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    if(option) {
        alert(option);
    }
}
const render = () => {
    const template = (
        <div>
            <h4>{app.title}</h4>
            {app.subtitle && <small>{app.subtitle}</small>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={!app.options.length} onClick={onMakeDecision}>What Should I Do?</button>
            <button onClick={removeOptions}>Remove All</button>

            <ol>
                {
                    app.options.map((opt, index) => <li key={index}>{opt}</li>)
                }
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
