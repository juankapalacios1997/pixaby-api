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
            <form onSubmit={this.handleSubmit}>
                <div className="row">
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
                            className="btn btn-lg btn-primary btn-block" 
                            value="search" />
                    </div>
                </div>
            </form>
        )
    }
};

export default Searcher;


