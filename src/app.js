

class IndecisionApp extends React.Component {

    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
    }

    handleDeleteOptions(){
        this.setState(()=>{
            return {
                options : []
            };
        });
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

        this.setState((prevState)=>{
           return {
               options : prevState.options.concat(option)   // https://stackoverflow.com/questions/44572026/difference-between-concat-and-push
            }                                                // push directly manipulates and throws an error, don't mess with state compute it.
        })
    }

    render(){
        const title = "Indecision";
        const subTitle = "Put you life in the hands of a computer";

        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    hasOptions={this.state.options.length > 0}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render(){
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render(){
        return (
            <div>
            <p>{this.props.hasOptions ? `You have ${this.props.options.length} options:` : 'There are no available options'}</p>
            <button 
                onClick={this.props.handleDeleteOptions}
                disabled={!this.props.hasOptions}
            >
                Remove All
            </button>
                <ol>
                {this.props.options.map((option, index) => <Option key={index} optionText={option} />) } 
                </ol>
            </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return (
            <li>{this.props.optionText}</li>
        );
    }
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

        this.setState(()=>{
            return { error };
        });
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' autoFocus/>
                    <button >Add An Option</button>
                </form>            
            </div>

        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));