class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }

    // lifecycle methods to persist count on localStorage

    componentDidMount(){
            const countValue = localStorage.getItem('counter');
            if(!isNaN(countValue)){

                this.setState(()=>({count : parseInt(countValue)}));
            }

    }

    componentDidUpdate(prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('counter', this.state.count);
            console.log('updated localStorage');
        }
    }







    handleAddOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            }
        })
    }
    handleMinusOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset(){
        this.setState(()=>{
            return {
                count: 0
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>   
        )
    
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))
// ReactDOM.render(<Counter />, document.getElementById('app'))


// previously...

// let count = 0

// const addOne = () => {
//     count++;
//     renderCounterApp();
// } 
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// } 

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// } 

// const templateTwo = (
//     <div>
//         <h1>Count : {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>reset</button>
//     </div>
// );

// const appRoot = document.getElementById('app');


// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count : {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo,appRoot);
// }

// renderCounterApp();

// // const multiplier = {
// //     numbers : [12, 24,26,57,78,345],
// //     multiplyBy: 13,
// //     multiply(){
// //         return this.numbers.map((number)=> number * this.multiplyBy);
// //     }
// // }

// // console.log(multiplier.multiply());