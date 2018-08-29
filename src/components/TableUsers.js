import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
class TableUsers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data ? props.data : []
        };
    }

    render() {
        const { data } = this.state;
        const { onEdit, onDelete } = { ... this.props }
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
                                },
                                {
                                    Header: "",
                                    accessor: "edit",
                                    Cell: (row) => (
                                        <div onClick={ () => { onEdit( row.original, row.index )} } className="pointer">Редактировать</div>
                                    )
                                },
                                {
                                    Header: "",
                                    accessor: "delete",
                                    Cell: (row) => (
                                        <div onClick={ () => { onDelete( row.index )} } className="pointer">Удалить</div>
                                    )

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