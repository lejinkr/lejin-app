import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Props example
class Tab extends React.Component {


    render() {
        return <span> {this.props.mylabel}</span>;

    }
}

//State Example
class CountButton extends React.Component {

    constructor(props) {

        super(props);

        this.state = { count: 0,
        test: 2};

    }

    addMore = () => {
        this.setState({
            count: this.state.count + 1

        });
    }

    render() {

        setTimeout(() => {this.setState({test: this.state.test + 2})}, 1000);
        return(

        <div>

            <div>count:{this.state.count} {this.state.test}</div>

            <button onClick={ this.addMore }>click</button>

        </div> );


    }
}

class HiUser extends React.Component {



    sayHai=() => {
        var name = this.nametext.value;
        document.getElementById("userNameSpan").innerHTML =  name;
    }
    render(){

      return( <div><h3>Name: <input type="test" ref={ input => this.nametext = input}></input></h3>
          <button  onClick={this.sayHai}>Click</button>

          <h3> Hi <span id="userNameSpan"></span> </h3> </div> );
    }
}
class Toolbar extends React.Component {
    render() {
        return <div>
            <Tab mylabel="Home"/>
            <Tab  mylabel="About Me"/>
            <Tab  mylabel="Portfolio"/>
            <Tab  mylabel="Contact"/>
            <CountButton />
            <HiUser />

        </div>
    }
}


class
// ========================================

ReactDOM.render(
    <Toolbar />,
    document.getElementById('root')
);