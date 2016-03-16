import React from 'react';
import MainHeader from './MainHeader';
import Map from './Map';

export default function App() {
    return (
        <div className="app">
            <MainHeader brand="Founder's Map Quest" />
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
                                rows="6"
                            />
                        </div>
                        <Map title="Generated Map" style={{height: 300}} />
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
