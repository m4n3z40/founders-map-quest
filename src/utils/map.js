function getLeaflet() {
    return global.L;
}

export function mountMap(mapEl, cmpProps) {
    const L = getLeaflet();

    const map = L.map(mapEl, Object.assign({}, cmpProps.defaultOptions, cmpProps.options));

    L.tileLayer(cmpProps.tileLayerURL, cmpProps.tileLayerOptions).addTo(map);

    return map;
}

function makeLabel(label) {
    if (label.startsWith('http')) {
        const ext = label.substr(label.lastIndexOf('.') + 1);

        if (ext.match(/jpg|jpeg|png|gif|svg/i)) {
            const style = 'max-width: 220px; max-height: 160px';

            return `<img src="${label}" alt="Row image" style="${style}" />`;
        }

        return `<a href="${label}" target="_blank">${label}</a>`;
    }

    return label;
}

export function makeMarkersProp(tableData, importOptions, disabledRows) {
    const {latitudeField, longitudeField} = importOptions;
    const {header, body} = tableData;
    const latitudeColIdx = header.indexOf(latitudeField);
    const longitudeColIdx = header.indexOf(longitudeField);
    const labelColIdx = header.indexOf(importOptions.markerLabelField);

    return body
        .filter((tableRow, idx) => disabledRows.indexOf(idx) === -1)
        .map(tableRow => ({
            latLng: [parseFloat(tableRow[latitudeColIdx]), parseFloat(tableRow[longitudeColIdx])],
            label: labelColIdx !== -1 ? makeLabel(tableRow[labelColIdx]) : ''
        }));
}

export function makeLayerGroup(map) {
    return getLeaflet().featureGroup().addTo(map);
}

export function removeMarkers(markersLayer) {
    markersLayer.eachLayer(layer => markersLayer.removeLayer(layer));
}

export function addMarkers(map, markersLayer, markers) {
    markers.forEach(marker => {
        const markerLayer = getLeaflet().marker(marker.latLng, marker.options);

        if (marker.label) {
            markerLayer.bindPopup(marker.label);
        }

        markersLayer.addLayer(markerLayer);
    });

    map.fitBounds(markersLayer.getBounds());
}
