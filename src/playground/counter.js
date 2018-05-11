const getLocation = (location) => {
    if (location) {
        return (
            <p>
                Location: {location}
            </p>
        );
    }
};

const user = {
    age: '30',
    name: 'ok',
    location: 'here'
};

const templateTwo = (
    <div>
        <h1>
            {user.name ? user.name : 'Anonymous'}
        </h1>
        {(user.age && user.age >= 18) && <p>
            Age: {user.age}
        </p>}
        {getLocation(user.location)}
    </div>
);

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const resetCount = () => {
    count = 0;
    renderCounterApp();
};



const renderCounterApp = () => {
    const templateThree = (
        <div>
            <h5>Count: {count}</h5>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={resetCount}>reset</button>
        </div>
    );

    ReactDOM.render(templateThree, appRoot);
}

renderCounterApp();
