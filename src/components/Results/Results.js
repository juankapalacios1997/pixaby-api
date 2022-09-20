import React, { Component } from "react";
import Image from "../Image/Image";
import Pages from "../Pages/Pages";

class Results extends Component {
    showImages = () => {
        const images = this.props.images;

        if (images.length === 0) {
            return null;
        }

        console.log(images);

        return (
            <div>
                <div className='col-12 p-5 row'>
                    {images.map(image => (
                        <Image 
                            key={image.id}
                            image={image}
                        />
                    ))}
                </div>
                <div className="justify-content-center">
                    <Pages 
                        previousPage={this.props.previousPage}
                        nextPage={this.props.nextPage}                
                    />
                </div>     
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.showImages()}
            </div>
        )
    }
};

export default Results;