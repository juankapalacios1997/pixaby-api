import React, { Component } from "react";
import Searcher from "./components/Searcher/Searcher";
import Results from "./components/Results/Results";

class App extends Component {

  state = {
    term : '',
    images: [],
    page: ""
  }

  scrollPage = () => {
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView('smooth', 'start')
  }

  previousPage = () => {
    //read current pages state
    let page = this.state.page;
    //if page is already one...
    if (page === 1) {
      return null;
    }
    //add one to current page
    page--;
    //add changes to current state
    this.setState({
      page
    }, () => {
      this.fetchApi();
      this.scrollPage();
    });

    //console.log();
  }

  nextPage = () => {
    //read current pages state
    let page = this.state.page;
    //add one to current page
    page++;
    //add changes to current state
    this.setState({
      page
    }, () => {
      this.fetchApi();
      this.scrollPage();
    });

    //console.log();
  }

  fetchApi = () => {
    const term = this.state.term;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=30046093-50bd26fbcd815f70eaf5c4afb&q=${term}&per_page=24&page=${page}`;

    //console.log(url)

    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({
      images: json.hits
    }))
  }

  searchTerm = (term) => {
    this.setState({
      term: term,
      page: 1
    }, () => {
      this.fetchApi();
    });
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <Searcher 
            searchTerm={this.searchTerm}
          />
        </div>
        <div className="row justify-content-center">
          <Results 
            images={this.state.images}
            previousPage={this.previousPage}
            nextPage={this.nextPage}
          />
        </div>
      </div>
    );
  }
}

export default App;
