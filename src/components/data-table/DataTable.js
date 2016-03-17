import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';
import {sortBy} from '../../utils/dataTable';
import {changeRowStatus, changeOrderBy} from '../../actions/dataTable';
import DataTableHeader from './DataTableHeader';
import DataTableBody from './DataTableBody';
import DataTableRow from './DataTableRow';

function handleRowDisabledChange(rowIdx) {
    this.onRowStatusChange(rowIdx, this.disabledRows.indexOf(rowIdx) === -1);
}

function handleHeaderColumnClick(content) {
    this.onOrderByChange(content, content !== this.orderBy ? false : !this.orderByInverted);
}

function mapStateToProps({csvData, dataTableOptions}) {
    return {
        data: csvData.tableData,
        disabledRows: dataTableOptions.disabledRows,
        orderBy: dataTableOptions.orderBy,
        orderByInverted: dataTableOptions.orderByInverted
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onRowStatusChange(rowIdx, disabled) {
            dispatch(changeRowStatus(rowIdx, disabled));
        },
        onOrderByChange(columnName, inverted) {
            dispatch(changeOrderBy(columnName, inverted));
        }
    };
}

function DataTable(props) {
    const {className, title, data, disabledRows, orderBy, orderByInverted} = props;

    if (!data) {
        return <span style={{display: 'none'}} />;
    }

    return (
        <div className={cx('table-container table-responsive', className)}>
            <h4>{title}</h4>
            <table className="table table-hover">
                <DataTableHeader>
                    <DataTableRow
                        header
                        columns={data.header}
                        onColumnClick={handleHeaderColumnClick.bind(props)}
                    />
                </DataTableHeader>
                <DataTableBody>
                    {data
                        .body
                        .sort(sortBy(data, orderBy, orderByInverted))
                        .map((cols, rowIdx) => (
                            <DataTableRow
                                key={`row-${rowIdx}`}
                                columns={cols}
                                disabled={disabledRows.indexOf(rowIdx) !== -1}
                                onRowDisabledChange={handleRowDisabledChange.bind(props, rowIdx)}
                            />
                        ))
                    }
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
    }),
    disabledRows: PropTypes.arrayOf(PropTypes.number),
    orderBy: PropTypes.string,
    orderByInverted: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
