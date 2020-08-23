import React from 'react'
import Favorites from '../../assets/favorite.png';
import { Row, Col } from 'react-bootstrap'
export default class Body extends React.Component {
    render() {
        return <React.Fragment>
            <div className="product">
                <div className="product-container">
                    <h2 className="product-title">Title</h2>
                    <img className="product-image" src="https://lakelandescaperoom.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg" alt="product images" />
                    <p className="product-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="sub-cat-container">
                        <img className="product-favorite" src={Favorites} alt="product favorite" />
                        <p className="product-cost">$100</p>
                        <button className="product-link">Show me!</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}
