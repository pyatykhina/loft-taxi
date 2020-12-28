import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import { connect } from 'react-redux';
import { getCard, getAddress } from '../../actions';
import './Map.scss';
import Header from '../Header';
import NoCardModal from '../NoCardModal';
import NewOrderModal from '../NewOrderModal';
import OrderForm from '../OrderForm';

mapboxgl.accessToken = 'pk.eyJ1IjoicHlhdHlraGluYSIsImEiOiJja2h6MDF6NjgybGZxMnBrejI0NWFpZ2tpIn0.AG-o6CiLmJ9ssaWs0tLSZA';

const drawRoute = (map, coordinates) => {
  map.getLayer('route') && map.removeLayer('route').removeSource('route');
  
  if (!coordinates) return; 

  map.flyTo({
    center: coordinates[0],
    zoom: 13
  });
 
  map.addLayer({
    id: 'route',
    type: 'line',
    source: {
      type: 'geojson',
      data: {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates
        }
      }
    },
    layout: {
      'line-join': 'round',
      'line-cap': 'round'
    },
    paint: {
      'line-color': '#ffc617',
      'line-width': 8
    }
  });
};

class Map extends Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.mapContainer = React.createRef();
  }

  state = {
    makeOrder: false
  }
  
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/pyatykhina/ckhz0q8o112of19qqobazgwvx',
      center: [30.315, 59.940], 
      zoom: 12
    });

    this.props.getCard(this.props.token);
    this.props.getAddress();
  }

  componentDidUpdate() {
    if (this.props.coordinates && this.props.coordinates.length > 0) {
      drawRoute(this.map, this.props.coordinates);
    }
  }

  makeOrder = (value) => {
    this.setState({makeOrder: value})
    value === false && drawRoute(this.map, [])
  }

  // componentWillUnmount() {
  //   this.map.remove(); 
  // }

  render() {
    const { cardNumber, expiryDate, cardName, cvc } = this.props;
    return (
      <>
        <Header />
        <div ref={this.mapContainer} data-testid='map' className='mapContainer' />
        {
          this.state.makeOrder 
            ? <NewOrderModal makeOrder={this.makeOrder} />
            : cardNumber && expiryDate && cardName && cvc
              ? <OrderForm makeOrder={this.makeOrder} />
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
    cvc: state.card.cvc,
    coordinates: state.route.route,
    token: state.auth.token
  }),{ getCard, getAddress}
)(Map);
