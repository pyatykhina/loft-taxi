import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import './Map.scss';

mapboxgl.accessToken = 'pk.eyJ1IjoicHlhdHlraGluYSIsImEiOiJja2h6MDF6NjgybGZxMnBrejI0NWFpZ2tpIn0.AG-o6CiLmJ9ssaWs0tLSZA';

class Map extends Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.mapContainer = React.createRef();
  }
  
  static propTypes = {
    navigate: PropTypes.func
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
    return (
      <div ref={this.mapContainer} data-testid="map" className="mapContainer" />
    );
  }
}

export default Map;
