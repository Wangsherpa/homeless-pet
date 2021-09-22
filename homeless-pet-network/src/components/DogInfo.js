import React, { Component } from 'react';
// import CardList from './CardList';
import Gallery from 'react-grid-gallery';
import "./DogInfo.css";
import DogProfile from './DogProfile'

class DogInfo extends Component {
    constructor(props) {
        super();
        this.state = {
            id: props.location.state.id,
            name: props.location.state.name,
            sex: props.location.state.sex,
            photo_url: props.location.state.photo_url,
            breed: props.location.state.breed,
            color: props.location.state.color,
            weight: props.location.state.weight,
            dob: props.location.state.dob,
            memo: props.location.state.memo,
            dogs: [],
        }
    }
    componentDidMount() {
        fetch(`http://localhost:8000/dogs/${this.state.id}`)
            .then(response => response.json())
            .then(dogs => {
                this.setState({ dogs: dogs.data })
            })
    }

    render() {
        const { photo_url } = this.state;
        const images = [{ thumbnail: photo_url, src: photo_url }, { thumbnail: photo_url, src: photo_url }, { thumbnail: photo_url }]
        return (
            <div className='tc'>
                <DogProfile info={this.state} />
                <div className='tc'>
                    <Gallery images={images} />
                </div>
            </div>
        );
    }

}

export default DogInfo;