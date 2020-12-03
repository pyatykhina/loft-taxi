import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import mapboxgl from "mapbox-gl";
import Map from './index';

jest.mock('mapbox-gl', () => ({
    Map: jest.fn(() => ({ remove: () => {} }))
}));

describe('Map', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(<BrowserRouter><Map /></BrowserRouter>);
        expect(mapboxgl.Map).toHaveBeenCalledWith({
            container: getByTestId('map'),
            style: "mapbox://styles/pyatykhina/ckhz0q8o112of19qqobazgwvx",
            center: [30.315, 59.940],
            zoom: 12
        });
    })
})
