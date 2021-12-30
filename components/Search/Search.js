import React from 'react';
import { connect } from "react-redux";
import { searchMovies} from '../../redux/actions';

class search extends React.Component {
  static defaultProps = {
    options: {},
    minCharacters: 2
  };

  state = {
    value: '',
    suggestions: []
  };

  handleChange = ({target: {value}}) => {
    this.setState({
      value,
      suggestions: []
    });
  
    if (this.props.minCharacters <= value.length) {
      this.getSearchedMovies(value)
      
    };
  };

  getSearchedMovies = value => {
     this.props.searchMovies(value);
  
     this.setState({
        suggestions: this.props.searchedMovies?this.props.searchedMovies:[]
      })
  }

  render = () => this.props.children({
    ...this.state,
    handleChange: this.handleChange
  });
}

const mapStateToProps = (state) => (
 {
    searchedMovies: state.searchedMovies
  })
  
  
  const mapDispatchToProps = {
    searchMovies: searchMovies
  }
  
  search = connect(mapStateToProps, mapDispatchToProps)(search);

export default search;