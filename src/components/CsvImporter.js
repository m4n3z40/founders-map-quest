import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';
import {
    startImportingCSV,
    errorOnImportingCSV,
    successOnImportingCSV
} from '../actions/csvImporter';

function handleDraggingFileOver(e) {
    e.preventDefault();
    e.stopPropagation();

    const classList = e.target.classList;

    if (!classList.contains('dragging')) {
        classList.add('dragging');
    }

    return false;
}

function handleStopDraggingFileOver(e) {
    e.preventDefault();
    e.stopPropagation();

    e.target.classList.remove('dragging');

    return false;
}

function handleDropFileOver(e) {
    e.preventDefault();

    this.onImportStart();

    // Just copy the file
    e.dataTransfer.dropEffect = 'copy';

    // We want only one file
    const file = e.dataTransfer.files[0];

    // Save element reference for later
    const textAreaEl = e.target;

    // File must be a valid CSV type
    if (file.type !== 'text/csv') {
        return this.onImportError(new Error('The file that you dropped is not a valid CSV.'));
    }

    // Now we nedd to read the file content
    const fileReader = new FileReader();

    fileReader.onload = function handleFileLoaded(innerEvt) {
        textAreaEl.value = innerEvt.target.result;

        // Forcing the change event to fire so we on need to handle dispatching to the store there
        textAreaEl.dispatchEvent(new Event('input', {bubbles: true}));
    };

    fileReader.readAsText(file, 'utf-8');

    return false;
}

function handleChange(e) {
    this.onImportSuccess(e.target.value);
}

function mapDispatchToProps(dispatch) {
    return {
        onImportStart() {
            dispatch(startImportingCSV());
        },
        onImportError(error) {
            dispatch(errorOnImportingCSV(error));
        },
        onImportSuccess(csv) {
            dispatch(successOnImportingCSV(csv));
        }
    };
}

function CSVImporter(props) {
    return (
        <div className={cx('csv-importer', props.className)}>
            <label htmlFor="csvImporterInput">
                <h4>{props.title}</h4>
            </label>
            <textarea
                id="csvImporterInput"
                className="form-control"
                rows="6"
                onChange={handleChange.bind(props)}
                onDragOver={handleDraggingFileOver}
                onDragEnter={handleDraggingFileOver}
                onDragEnd={handleStopDraggingFileOver}
                onDragLeave={handleStopDraggingFileOver}
                onDrop={handleDropFileOver.bind(props)}
            />
        </div>
    );
}

CSVImporter.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    onImportStart: PropTypes.func,
    onImportError: PropTypes.func,
    onImportSuccess: PropTypes.func
};

export default connect(null, mapDispatchToProps)(CSVImporter);
