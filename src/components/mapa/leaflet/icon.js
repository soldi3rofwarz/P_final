import React from 'react';
import L from 'leaflet'


export const IconLocation=L.icon({
    iconUrl: require('./../icon.svg'),
    iconRetinaUrl: require('./../icon.svg'),
    inconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35,35],
    className: 'LeafLet-venue-icon',
})