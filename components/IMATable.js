// Table.js
import { useTable, useFilters, useSortBy } from "react-table";
import React, { useState, useEffect } from "react";


const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };
export default function IMATable({ columns, data, }) {// Use the useTable Hook to send the columns and data to build the table
    // Use the useTable Hook to send the columns and data to build the table
    const [filterInput, setFilterInput] = useState("");
    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups if your table have groupings
        rows, // rows for the table based on the data passed
        prepareRow, // Prepare the row (this function need to called for each row before getting the row props)
        setFilter
    } = useTable({
        columns,
        data
    },
        useFilters,
        useSortBy 
    );

    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("name", value); // Update the show.name filter. Now our table will filter and show only the rows which have a matching value
        setFilterInput(value);
    };

    /* 
      Render the UI for your table
      - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
    */
    return (
        <> 
        <label>
            Filter by Product
        </label>
        <input
            className="text-input"
            value={filterInput}
            onChange={handleFilterChange}
            placeholder={"Search name"}
            type="text"
        />
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}</th>
                            
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </>
    );
}