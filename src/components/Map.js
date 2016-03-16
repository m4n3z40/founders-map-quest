import React, {PropTypes, Component} from 'react';
import cx from 'classnames';

function mountMap(mapEl) {
    const L = global.L;

    if (typeof L === 'undefined') return;

    const map = L.map(mapEl).setView([51.505, -0.09], 13);

    map.scrollWheelZoom.disable();

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
}

export default class Map extends Component {
    componentDidMount() {
        mountMap(this.refs.mapEl);
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
    markers: PropTypes.arrayOf(PropTypes.object),
    center: PropTypes.object
};
