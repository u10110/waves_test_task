import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";


function TableUsers(props){

        const { data } = props;
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
                                        <div onClick={ () => { } } className="pointer">Редактировать</div>
                                    )
                                },
                                {
                                    Header: "",
                                    accessor: "delete",
                                    Cell: (row) => (
                                        <div onClick={ () => { } } className="pointer">Удалить</div>
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

export default TableUsers;