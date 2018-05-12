class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
};

ReactDOM.render(<Counter />, document.getElementById('app'));
// const getLocation = (location) => {
//     if (location) {
//         return (
//             <p>
//                 Location: {location}
//             </p>
//         );
//     }
// };
//
// const user = {
//     age: '30',
//     name: 'ok',
//     location: 'here'
// };
//
// const templateTwo = (
//     <div>
//         <h1>
//             {user.name ? user.name : 'Anonymous'}
//         </h1>
//         {(user.age && user.age >= 18) && <p>
//             Age: {user.age}
//         </p>}
//         {getLocation(user.location)}
//     </div>
// );
//
// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const resetCount = () => {
//     count = 0;
//     renderCounterApp();
// };
//
//
//
// const renderCounterApp = () => {
//     const templateThree = (
//         <div>
//             <h5>Count: {count}</h5>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={resetCount}>reset</button>
//         </div>
//     );
//
//     ReactDOM.render(templateThree, appRoot);
// }
//
// renderCounterApp();
