import React, {PropTypes} from 'react';
import cx from 'classnames';

export default function CSVImporter({className, title}) {
    return (
        <div className={cx('csv-importer', className)}>
            <label htmlFor="csvImporterInput">
                <h4>{title}</h4>
            </label>
            <textarea
                id="csvImporterInput"
                className="form-control"
                rows="6"
            />
        </div>
    );
}

CSVImporter.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string
};
