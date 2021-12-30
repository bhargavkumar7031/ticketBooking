
import './App.css';
import { Component} from 'react';
import Row from '../components/Row/Row';
import { connect } from "react-redux";
import { getTrendingMovies, getTopRatedMovies, getPopularMovies} from '../redux/actions';
import Carousel from '../components/Carousel/Carousel';
import Header from '../components/Header/Header';
class App extends Component{
  constructor(){
    super()
  }

  componentDidMount(){
    this.props.getTrendingMovies();
    this.props.getTopRatedMovies();
    this.props.getPopularMovies();
  }
  render(){
    return (
      <div className="App">
        <Header />
            <section className="top_section">
            <h4></h4>
            <Row title="Latest Movies" movies={this.props.topRatedMovies}/>
            <h4></h4>
            <Row title="Upcoming Movies" movies={this.props.trendingMovies}/>
            <h4></h4>
            <Row title="Popular Movies" movies={this.props.popularMovies}/>
            </section>
            <Carousel movies={this.props.trendingMovies}  /> 
            <Row  movies={this.props.popularMovies} isLargeRow="true" showButton="true"/> 
      </div>
      
    )
  }
}

const mapStateToProps = (state) => (
  {
    trendingMovies: state.trendingMovies,
    topRatedMovies: state.topRatedMovies,
    popularMovies: state.popularMovies,
  
  })
  
  
  const mapDispatchToProps = {
    getTrendingMovies: getTrendingMovies,
    getTopRatedMovies: getTopRatedMovies,
    getPopularMovies: getPopularMovies,
  }

  App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;