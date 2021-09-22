import React, { Component } from 'react';
import CardList from './CardList';
// import Gallery from 'react-grid-gallery';
import "./DogInfo.css";

class DogInfo extends Component {
    constructor(props) {
        super();
        this.state = {
            id: props.location.state.id,
            name: props.location.state.name,
            sex: props.location.state.sex,
            photo_url: props.location.state.photo_url,
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
        const { id, name, sex, photo_url, tags } = this.state;
        const images = [{ thumbnail: photo_url, src: photo_url }, { thumbnail: photo_url, src: photo_url }, { thumbnail: photo_url }]
        return (
            <div className='tc'>
                {/* <h1 className='f1'>Similar Dogs</h1>
                <h2>{this.state.id}</h2>
                <CardList dogs={this.state.dogs} /> */}
                {/* <img src={photo_url} alt='profile photo' />
                <h1>Name: {name}</h1>
                <h1>Sex: {sex}</h1>
                <h1>ID: {id}</h1> */}

                {/* <article className="br3 ba shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                    <div className="tc">
                        <img src={photo_url} class="br-100 h3 w3 dib" title="Photo of a dog" />
                        <h1 className="f4">{name}</h1>
                        <hr className="mw3 bb bw1 b--black-10" />
                    </div>
                    <p className="lh-copy measure center f6 black-70">
                        {tags}
                    </p>
                </article>
                <div className='tc'>
                    <Gallery images={images} />
                </div> */}
                <div class="student-profile py-4">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="card shadow-sm">
                                    <div class="card-header bg-transparent text-center">
                                        <img class="profile_img" src={photo_url} alt="dog dp" />
                                        <h3>{name}</h3>
                                    </div>
                                    <div class="card-body">
                                        <p class="mb-0"><strong class="pr-1">Dog ID:</strong>{id}</p>
                                        <p class="mb-0"><strong class="pr-1">Sex:</strong>{sex}</p>
                                        <p class="mb-0"><strong class="pr-1">tags:</strong>{tags}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="card shadow-sm">
                                    <div class="card-header bg-transparent border-0">
                                        <h3 class="mb-0"><i class="far fa-clone pr-1"></i>General Information</h3>
                                    </div>
                                    <div class="card-body pt-0">
                                        <table class="table table-bordered">
                                            <tr>
                                                <th width="30%">Roll</th>
                                                <td width="2%">:</td>
                                                <td>125</td>
                                            </tr>
                                            <tr>
                                                <th width="30%">Academic Year	</th>
                                                <td width="2%">:</td>
                                                <td>2020</td>
                                            </tr>
                                            <tr>
                                                <th width="30%">Gender</th>
                                                <td width="2%">:</td>
                                                <td>Male</td>
                                            </tr>
                                            <tr>
                                                <th width="30%">Religion</th>
                                                <td width="2%">:</td>
                                                <td>Group</td>
                                            </tr>
                                            <tr>
                                                <th width="30%">blood</th>
                                                <td width="2%">:</td>
                                                <td>B+</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div style={{ height: "26px" }}></div>
                                <div class="card shadow-sm">
                                    <div class="card-header bg-transparent border-0">
                                        <h3 class="mb-0"><i class="far fa-clone pr-1"></i>Other Information</h3>
                                    </div>
                                    <div class="card-body pt-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default DogInfo;