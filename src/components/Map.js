import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';

function getLeaflet() {
    return global.L;
}

function mountMap(mapEl, cmpProps) {
    const L = getLeaflet();

    const map = L.map(mapEl, Object.assign({}, cmpProps.defaultOptions, cmpProps.options));

    L.tileLayer(cmpProps.tileLayerURL, cmpProps.tileLayerOptions).addTo(map);

    return map;
}

function mapStateToProps({csvData, importOptions}) {
    const tableData = csvData.tableData;
    const {latitudeField, longitudeField} = importOptions;
    let markers = [];

    if (tableData && latitudeField && longitudeField) {
        const {header, body} = tableData;
        const latitudeColIdx = header.indexOf(latitudeField);
        const longitudeColIdx = header.indexOf(longitudeField);
        const labelColIdx = header.indexOf(importOptions.markerLabelField);

        markers = body.map(tableRow => ({
            latLng: [parseFloat(tableRow[latitudeColIdx]), parseFloat(tableRow[longitudeColIdx])],
            label: labelColIdx !== -1 ? tableRow[labelColIdx] : ''
        }));
    }

    return {markers};
}

class Map extends Component {
    constructor(props) {
        super(props);

        this._map = null;
        this._markersMap = new WeakMap();
        this._markersLayer = null;
    }

    componentDidMount() {
        this._map = mountMap(this.refs.mapEl, this.props);

        this._markersLayer = getLeaflet().featureGroup().addTo(this._map);
    }

    componentWillReceiveProps({markers}) {
        const map = this._map;
        const oldMarkers = this.props.markers;
        const markersMap = this._markersMap;
        const markersLayer = this._markersLayer;

        if ((!markers || markers.length === 0) && (oldMarkers && oldMarkers.length > 0)) {
            markersLayer.eachLayer(layer => markersLayer.removeLayer(layer));
            markersMap.clear();

            return;
        }

        markers.forEach(marker => {
            const markerLayer = getLeaflet().marker(marker.latLng, marker.options);

            if (marker.label) {
                markerLayer.bindPopup(marker.label).openPopup();
            }

            markersLayer.addLayer(markerLayer);
            markersMap.set(marker, markerLayer);
            map.fitBounds(markersLayer.getBounds());
        });
    }

    render() {
        const {className, title, style} = this.props;

        return (
            <div className={cx('map map-container', className)}>
                <h4>{title}</h4>
                <div ref="mapEl" className="map" style={style}></div>
            </div>
        );
    }
}

Map.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    defaultStyle: PropTypes.object,
    style: PropTypes.object,
    defaultOptions: PropTypes.object,
    options: PropTypes.object,
    tileLayerURL: PropTypes.string,
    tileLayerOptions: PropTypes.object,
    markers: PropTypes.arrayOf(PropTypes.shape({
        latLng: PropTypes.arrayOf(PropTypes.number).isRequired,
        options: PropTypes.object,
        label: PropTypes.string
    }))
};

Map.defaultProps = {
    defaultOptions: {
        scrollWheelZoom: false,
        center: [51.505, -0.09],
        zoom: 14
    },
    tileLayerURL: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    tileLayerOptions: {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    },
    markers: []
};

export default connect(mapStateToProps)(Map);
