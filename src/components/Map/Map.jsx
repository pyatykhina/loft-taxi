import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import { connect } from 'react-redux';
import './Map.scss';
import Header from '../Header';
import NoCardModal from '../NoCardModal';
import OrderForm from '../OrderForm';

mapboxgl.accessToken = 'pk.eyJ1IjoicHlhdHlraGluYSIsImEiOiJja2h6MDF6NjgybGZxMnBrejI0NWFpZ2tpIn0.AG-o6CiLmJ9ssaWs0tLSZA';

class Map extends Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.mapContainer = React.createRef();
  }
  
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/pyatykhina/ckhz0q8o112of19qqobazgwvx',
      center: [30.315, 59.940], 
      zoom: 12
    });
  }

  componentWillUnmount() {
    this.map.remove(); 
  }

  render() {
    const { cardNumber, expiryDate, cardName, cvc } = this.props;
    return (
      <>
        <Header />
        <div ref={this.mapContainer} data-testid="map" className="mapContainer" />
        {
          cardNumber && expiryDate && cardName && cvc
            ? <OrderForm />
            : <NoCardModal />
        }
      </>
    );
  }
}

export default connect(
  (state) => ({
    cardNumber: state.card.cardNumber,
    expiryDate: state.card.expiryDate,
    cardName: state.card.cardName,
    cvc: state.card.cvc
  }),{}
)(Map);
