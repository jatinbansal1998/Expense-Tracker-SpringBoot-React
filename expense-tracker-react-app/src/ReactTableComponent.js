import React, {Component} from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

class MyTable extends Component {

    render() {
        console.log(this.props.data)
        console.log(this.props.columns)
        return (
            <div>
                <ReactTable
                    data={this.props.data}
                    columns={this.props.columns}
                />
            </div>
        );
    }
}

export default MyTable;
