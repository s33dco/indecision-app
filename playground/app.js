class IndecisionApp extends React.Component {

    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }

    componentDidMount(){    // fires when loaded
        try{
            const json = localStorage.getItem('options');   // array from localStorage
            const options = JSON.parse(json);               // parse to object
            if (options){
                this.setState(()=>({options}))                  // set state
            }
            console.log('component did mount') 
        } catch (e){
            console.log('invalid json data in localStorage - using default empty array')
        }
    }

    componentDidUpdate(prevProps, prevState){   // fires after props or state change
        if (prevState.options.length !== this.state.options.length){
            console.log('component did update')
            console.log(`was { ${prevState.options} } now { ${this.state.options} }`)
            const json = JSON.stringify(this.state.options);        //  stringify
            localStorage.setItem('options', json);                 // save to localStorage
        }
    }

    componentWillUnmount(){
        console.log('component did unmount')
    }

    handleDeleteOptions(){
        this.setState(() => ({options : []}))
        // this.setState(()=>{
        //     return {
        //         options : []
        //     };
        // });

        // same as below via implicit return
        // setState implicit return syntax
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => optionToRemove !== option )
        }));
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    };

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item'
        } else if(this.state.options.indexOf(option) > -1){
            return 'this option already exists'
        }
        this.setState((prevState)=>({options : prevState.options.concat(option)}));
        // https://stackoverflow.com/questions/44572026/difference-between-concat-and-push
        // push directly manipulates and throws an error, don't mess with state compute it.
    }

    render(){
        const subTitle = "Put you life in the hands of a computer";
        return (
            <div>
                <Header subTitle={subTitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                    hasOptions={this.state.options.length > 0}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
}
Header.defaultProps = {
    title: 'Indecision'
}
const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );   
}
const Options = (props) => {
    return (
        <div>
        <p>{props.hasOptions ? `You have ${props.options.length} options:` : 'There are no available options'}</p>
        <button 
            onClick={props.handleDeleteOptions}
            disabled={!props.hasOptions}
        >
            Remove All
        </button>
            <ol>
                {
                    props.options.map((option) => (
                        <Option 
                            key={option}                // unique key for React
                            optionText={option}
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    )) 
                } 
            </ol>
        </div>
    );   
}
const Option = (props) => {
    return (
        <li>
            {props.optionText}
            <button             
                onClick={(e)=>{                                 // pass in arrow function called with event arguement
                    props.handleDeleteOption(props.optionText); // to pass option value up to handleDeleteOption
                }}
            >
                Remove
            </button>
        </li>
    );   
}
class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';        // clear input field if no error
        }
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' autoFocus />
                    <button >Add An Option</button>
                </form>            
            </div>
        );
    }
}
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
