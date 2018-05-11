let visibility = false;

const toggle = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const template = (
        <div>
            <h3>toggle</h3>
            <button onClick={toggle}>{visibility ? 'Hide details' : 'Show details'}</button>
            {visibility && (
                <p>These are some details</p>
            )}
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
}

render()
