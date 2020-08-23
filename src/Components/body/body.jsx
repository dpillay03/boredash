import React from 'react'
import Favorites from '../../assets/favorite.png';
import Products from '../../data/items.js'

export default class Body extends React.Component {
    render() {
        return <React.Fragment>
            <div className="project-container">
                {Products.map((data, key) => {
                    return (
                        <div className="product" key={key}>
                            <div className="product-container">
                                <h2 className="product-title">{data.title}</h2>
                                <a href={data.link}><img className="product-image" src={data.image} alt="product images" /></a>
                                <p className="product-description">{data.description}</p>
                                <div className="sub-cat-container">
                                    <img className="product-favorite" src={Favorites} alt="product favorite" />
                                    <p className="product-cost">${data.price}</p>
                                    <a href={data.link}><button className="product-link">Show me!</button></a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    }
}
