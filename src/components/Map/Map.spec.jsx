import React from 'react';
import { render } from '@testing-library/react';
import mapboxgl from "mapbox-gl";
import Map from './index';

jest.mock('mapbox-gl', () => ({
    Map: jest.fn(() => ({ remove: () => {} }))
}));

describe('Map', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(<Map />);
        expect(mapboxgl.Map).toHaveBeenCalledWith({
            container: getByTestId('map'),
            style: "mapbox://styles/pyatykhina/ckhz0q8o112of19qqobazgwvx",
            center: [30.315, 59.940],
            zoom: 12
        });
    })
})
