import React, { Component } from 'react';
import '../assests/style.css';

export default class Glasses extends Component {
    arrGlasses = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./img/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./img/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./img/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./img/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./img/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./img/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./img/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./img/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    state = {
        nameGlass: '',
        descGlass: '',
        imgGlass: '',
        priceGlass: 0,
        display: 'none',
    }

    renderGlasses = (arrGlasses) => {
        return arrGlasses.map((glass) => {
            return <img key={glass.id} src={glass.url} alt="" onClick={() => {
                this.setState({
                    nameGlass: glass.name,
                    descGlass: glass.desc,
                    imgGlass: glass.url,
                    priceGlass: glass.price,
                    display: 'block',
                })

                console.log(glass.name, glass.url)
            }}/>
        })
    }   

    render() {
        return (
            <div className='glasses'>
                <div className="title">
                    <h2>TRY GLASSES APP ONLINE</h2>
                </div>
                <div className="container">
                    <div className="model-container">
                        <div className="left-model">
                            <img src="./img/v1.png" alt="" />
                            <div className="infor">
                                <h3>GUCCI G8850U</h3>
                                <p>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                            </div>
                        </div>
                        <div className="right-model">
                            <img src={this.state.imgGlass} alt="" style={{ display: this.state.display }} />
                            <div className="infor" style={{ display: this.state.display }}>
                                <h3>{this.state.nameGlass} - ${this.state.priceGlass}</h3>
                                <p>{this.state.descGlass}</p>
                            </div>
                        </div>
                    </div>

                    <div className="glasses-container">
                        {this.renderGlasses(this.arrGlasses)};
                    </div>
                </div>
            </div>
        )
    }
}
