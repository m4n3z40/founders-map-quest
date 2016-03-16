import React, {Component} from 'react';

function mountMap(mapEl) {
    const L = global.L;

    if (typeof L === 'undefined') return;

    const map = L.map(mapEl).setView([51.505, -0.09], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
}

export default class App extends Component {
    componentDidMount() {
        mountMap(this.refs.mapEl);
    }

    render() {
        return (
            <div className="app">
                <header className="app-header">
                    <nav className="navbar navbar-default">
                        <div className="navbar-header">
                            <a href="#" className="navbar-brand">Founder's Map Quest</a>
                        </div>
                    </nav>
                </header>
                <div className="app-content container-fluid">
                    <div className="row">
                        <aside className="options-panel col-sm-4 col-xs-12 pull-right">
                            <h3>Import Options</h3>
                            <div className="options-panel-fields form-horizontal">
                                <div className="form-group">
                                    <label
                                        className="control-label col-md-4"
                                        htmlFor="sltCsvSeparator"
                                    >
                                        Separator
                                    </label>
                                    <div className="col-md-8">
                                        <select className="form-control" id="sltCsvSeparator">
                                            <option value=",">Comma</option>
                                            <option value=";">Semicolon</option>
                                            <option value="\t">Tab</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label
                                        className="control-label col-md-4"
                                        htmlFor="sltLatitudeField"
                                    >
                                        Latitude Column
                                    </label>
                                    <div className="col-md-8">
                                        <select className="form-control" id="sltLatitudeField" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label
                                        className="control-label col-md-4"
                                        htmlFor="sltStreetField"
                                    >
                                        Marker Label Column
                                    </label>
                                    <div className="col-md-8">
                                        <select className="form-control" id="sltStreetField" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label
                                        className="control-label col-md-4"
                                        htmlFor="sltLongitudeField"
                                    >
                                        Longitude Column
                                    </label>
                                    <div className="col-md-8">
                                        <select className="form-control" id="sltLongitudeField" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label
                                        className="control-label col-md-4"
                                        htmlFor="sltLongitudeField"
                                    >
                                        Longitude Column
                                    </label>
                                    <div className="col-md-8">
                                        <select className="form-control" id="sltLongitudeField" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label
                                        className="control-label col-md-4"
                                        htmlFor="sltCityField"
                                    >
                                        City Column
                                    </label>
                                    <div className="col-md-8">
                                        <select className="form-control" id="sltCityField" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label
                                        className="control-label col-md-4"
                                        htmlFor="sltCountryField"
                                    >
                                        Country Column
                                    </label>
                                    <div className="col-md-8">
                                        <select className="form-control" id="sltCountryField" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label
                                        className="control-label col-md-4"
                                        htmlFor="sltStreetField"
                                    >
                                        Street Column
                                    </label>
                                    <div className="col-md-8">
                                        <select className="form-control" id="sltStreetField" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label
                                        className="control-label col-md-4"
                                        htmlFor="sltPostalCodeField"
                                    >
                                        Postal Code Column
                                    </label>
                                    <div className="col-md-8">
                                        <select className="form-control" id="sltPostalCodeField" />
                                    </div>
                                </div>
                            </div>
                        </aside>
                        <main className="main col-sm-8 col-xs-12 pull-left" role="main">
                            <div className="csv-importer">
                                <label htmlFor="csvImporterInput">
                                    Paste the CSV file contents on the text field below
                                    <br />
                                    OR drag and drop the CSV file onto the same field.
                                </label>
                                <textarea
                                    id="csvImporterInput"
                                    className="form-control"
                                    rows="10"
                                />
                            </div>
                            <div className="map-container">
                                <h4>Generated Map</h4>
                                <div ref="mapEl" className="map" style={{height: 300}}></div>
                            </div>
                            <div className="table-container table-responsive">
                                <h4>Generated Table</h4>
                                <table className="table table-hover">
                                    <thead>
                                    <tr>
                                        <td>Id</td>
                                        <td>Company Name</td>
                                        <td>Founder</td>
                                        <td>City</td>
                                        <td>Country</td>
                                        <td>Postal Code</td>
                                        <td>Street</td>
                                        <td>Photo</td>
                                        <td>Home Page</td>
                                        <td>Garage Latitude</td>
                                        <td>Garage Longitude</td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                    </tr>
                                    <tr>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}
