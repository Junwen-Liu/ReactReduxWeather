import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import {fetchwt} from '../actions/index';

//gonna turn the input into a controll field
class Searchbar extends Component{
  //initialize component state in constructor
  constructor(props){
    super(props);

    this.state={term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    console.log(event.target.value);
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    //to tell the browser don;t submit the form
    event.preventDefault();

    //we need to go and fetch data

    this.props.fetchwt(this.state.term);
    this.setState({term: ''});
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="get a five-day forecast"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">submit</button>
        </span>
      </form>
    );
  }
}

//anything return from this functioon will end up as props on this conatiner
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchwt}, dispatch);
}

export default connect (null, mapDispatchToProps)(Searchbar);
