import React from 'react';
import {getSeparatorsAsSelectFieldOptions} from '../utils/csv';
import MainHeader from './MainHeader';
import OptionsPanel from './options-panel/OptionsPanel';
import CSVImporter from './CSVImporter';
import Map from './Map';
import DataTable from './data-table/DataTable';

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
                        />
                    </aside>
                    <main className="main col-sm-8 col-xs-12 pull-left" role="main">
                        <CSVImporter
                            title="Paste the CSV data in the text field below OR drag
                                   and drop the CSV file onto the same field."
                        />
                        <Map title="Generated Map" style={{height: 300}} />
                        <DataTable title="GeneratedTable" />
                    </main>
                </div>
            </div>
        </div>
    );
}
