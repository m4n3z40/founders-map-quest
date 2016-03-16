import React from 'react';
import {getSeparatorsAsSelectFieldOptions} from '../utils/csv';
import MainHeader from './MainHeader';
import OptionsPanel from './options-panel/OptionsPanel';
import CSVImporter from './CSVImporter';
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

const mockColumnsOptions = mockTableData.header.map(columnName => ({
    value: columnName,
    text: columnName
}));

export default function App() {
    return (
        <div className="app">
            <MainHeader brand="Founder's Map Quest" />
            <div className="app-content container-fluid">
                <div className="row">
                    <aside className="options-panel-wrapper col-sm-4 col-xs-12 pull-right">
                        <OptionsPanel
                            title="Import Options"
                            separatorOptions={getSeparatorsAsSelectFieldOptions()}
                            columnsOptions={mockColumnsOptions}
                        />
                    </aside>
                    <main className="main col-sm-8 col-xs-12 pull-left" role="main">
                        <CSVImporter
                            title="Paste the CSV data in the text field below OR drag
                                   and drop the CSV file onto the same field."
                        />
                        <Map title="Generated Map" style={{height: 300}} />
                        <DataTable title="GeneratedTable" data={mockTableData} />
                    </main>
                </div>
            </div>
        </div>
    );
}
