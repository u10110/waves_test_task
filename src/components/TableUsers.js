import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
class TableUsers extends React.Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <ReactTable
                    data={data}
                    columns={[

                                {
                                    Header: "ФИО",
                                    accessor: "fio"
                                },
                                {
                                    Header: "Дата рождения",
                                    accessor: "birthDay"
                                },
                                {
                                    Header: "Адрес",
                                    accessor: "address"
                                },
                                {
                                    Header: "Город",
                                    accessor: "town"
                                },
                                {
                                    Header: "Телефон",
                                    accessor: "phone"
                                }

                    ]}
                    showPagination={false}
                    className="-striped -highlight"
                />
                <br />
            </div>
        );
    }
}

export default TableUsers;