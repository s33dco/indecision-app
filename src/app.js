

class IndecisionApp extends React.Component {
    render(){

        const title = "Indecision";
        const subTitle = "Put you life in the hands of a computer";
        const options = ['Thing One', 'Thing two', 'Thing Three', 'Thing Four', 'Thing five'];

        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action />
                <Options options={options}/>
                <AddOptions />
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
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render(){
        return (
            <div>
            <p>You have {this.props.options.length} options :</p>
                <ol>
                { this.props.options.map((option, index) => <Option key={index} optionText={option} />) } 
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

class AddOptions extends React.Component {
    render(){
        return (
            <form>
                <input type='text' name='option' autoFocus/>
                <button>Add Option</button>
            </form> 
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));