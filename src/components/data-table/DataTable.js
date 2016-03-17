import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';
import DataTableHeader from './DataTableHeader';
import DataTableBody from './DataTableBody';
import DataTableRow from './DataTableRow';

function mapStateToProps({csvData}) {
    return {
        data: csvData.tableData
    };
}

function DataTable({className, title, data}) {
    if (!data) {
        return <span style={{display: 'none'}} />;
    }

    return (
        <div className={cx('table-container table-responsive', className)}>
            <h4>{title}</h4>
            <table className="table table-hover">
                <DataTableHeader>
                    <DataTableRow columns={data.header} />
                </DataTableHeader>
                <DataTableBody>
                    {data.body.map((cols, rowIdx) => (
                        <DataTableRow key={`row-${rowIdx}`} columns={cols} />
                    ))}
                </DataTableBody>
            </table>
        </div>
    );
}

DataTable.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.shape({
        header: PropTypes.arrayOf(PropTypes.string).isRequired,
        body: PropTypes.arrayOf(PropTypes.array).isRequired
    })
};

export default connect(mapStateToProps)(DataTable);
