import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';
import {mountMap, makeMarkersProp, makeLayerGroup, removeMarkers, addMarkers} from '../utils/map';

function mapStateToProps({csvData, importOptions}) {
    const tableData = csvData.tableData;
    let markers = [];

    if (tableData && importOptions.latitudeField && importOptions.longitudeField) {
        markers = makeMarkersProp(tableData, importOptions);
    }

    return {markers};
}

class Map extends Component {
    constructor(props) {
        super(props);

        this._map = null;
        this._markersLayer = null;
    }

    componentDidMount() {
        this._map = mountMap(this.refs.mapEl, this.props);
        this._markersLayer = makeLayerGroup(this._map);
    }

    componentWillReceiveProps({markers}) {
        const oldMarkers = this.props.markers;
        const markersLayer = this._markersLayer;

        if (oldMarkers && oldMarkers.length > 0) {
            removeMarkers(markersLayer);
        }

        if (!markers || markers.length === 0) return;

        addMarkers(this._map, markersLayer, markers);
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
