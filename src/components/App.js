import React from 'react';
import MainHeader from './MainHeader';
import Map from './Map';
import DataTable from './data-table/DataTable';

const CSVMatrix = [
    ['Id', 'Company Name', 'Founder', 'City', 'Country', 'Postal Code', 'Street', 'Photo',
        'Home Page', 'Garage Latitude', 'Garage Longitude'],
    ['1', 'Google', 'Larry Page & Sergey Brin', 'Mountain View', 'USA', 'CA 94043', '1600 Amphitheatre Pkwy', 'http://interviewsummary.com/wp-content/uploads/2013/07/larry-page-and-sergey-brin-of-google-620x400.jpg', 'http://google.com', '37.457674', '-122.163452'],
    ['2', 'Apple', 'Steve Jobs & Steve Wozniak', 'Cupertino', 'USA', 'CA 95014', '1 Infinite Loop', 'http://i.dailymail.co.uk/i/pix/2013/02/08/article-2275512-172E13BB000005DC-732_634x505.jpg', 'http://apple.com', '37.3403188', '-122.0581469'],
    ['3', 'Microsoft', 'Bill Gates', 'Redmond', 'USA', 'WA 98052-7329', 'One Microsoft Way', 'http://postdefiance.com/wp-content/uploads/2013/02/bill-gates-microsoft-young.jpg', 'http://microsoft.com', '37.472189', '-122.190191']
];

const mockTableData = {
    header: CSVMatrix.slice()[0],
    body: CSVMatrix.slice(1)
};

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
                        <DataTable title="GeneratedTable" data={mockTableData} />
                    </main>
                </div>
            </div>
        </div>
    );
}
