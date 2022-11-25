import React, { Component } from "react";

class Searcher extends Component {

    searchRef = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();

        //takes the inputs value
        const term = this.searchRef.current.value;

        //sends inputs value to principal component
        this.props.searchTerm(term);
    }

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-black bg-secondary">
                <div className="container-fluid">
                    <h1 className="text-primary" href="#">Image searcher</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <form className="d-flex" onSubmit={this.handleSubmit}>
                        <div className="row justify-content-center">
                            <div className="form-group col-md-8">
                                <input
                                    ref={this.searchRef} 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Search your image. Example: Football" />
                            </div>
                            <div className="form-group col-md-4">
                                <input 
                                    type="submit" 
                                    className="btn btn-lg btn-warning btn-block" 
                                    value="search" />
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
           
        )
    }
};

export default Searcher;


