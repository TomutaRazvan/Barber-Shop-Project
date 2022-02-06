import React, { Component } from "react";
import "./contact.scss";
import { Menu } from "../../Header_Footer/menu";
import { Map, GoogleApiWrapper } from 'google-maps-react';


class Contact extends Component {
    render() {
        const mapStyles = {
            width: '100%',
            height: '100%'
        };
        
        
        return (
            <>
                <main className="contactMain">
                        <div className="contactHeader">
                            <Menu />
                    
                            <h1>CONTACT US</h1>
                        </div>
                </main>
                
                <section className="contactSection">
                    <div className="contactContent">
                        <div className="contactBox">
                            <h5>OUR LOCATION</h5>

                            <span>9779 Woodside Drive <br/>
                            Granger, IN 46530 </span>
                        </div>

                        <div className="contactBox">
                            <h5>BOOKING NUMBER</h5>

                            <a href="tel:+40753892923">+40 753 892 923</a>
                        </div>

                        <div className="contactBox">
                            <h5>OPENING HOURS</h5>

                            <span>Mon – Sun: 11AM – 8PM</span>
                        </div>
                    </div>

                    <div className="contactMap">
                        <Map
                            google={this.props.google}
                            zoom={8}
                            style={mapStyles}
                            initialCenter={{ lat: 47.444, lng: -122.176}}
                        ></Map>
                    </div>
                </section>
            </>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBvMjoVe4xJVqVV6wsYl5tPYx2YaSzlczI')
  })(Contact);