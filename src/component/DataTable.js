import React, { useState }  from "react";
import "./DataTable.css";

function DataTable({tableInstance, onCheckboxChange}){
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
    const [selectedRow, setSelectedRow] = useState(null);

 //체크 박스가 바뀌면 해당 로우의 정보와 청구기호를 가져옴
    const CheckboxChange = (row, billingSymbol) => {
      
      if (selectedRow === row.id) {
        setSelectedRow(null);
        onCheckboxChange(null);
      } else {
        setSelectedRow(row.id);
        onCheckboxChange(billingSymbol);
      }
    };

    return(
      <>
      <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            <th/>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
               <td>
                  <input type="checkbox" checked={row.id === selectedRow} onChange={() => CheckboxChange(row, row.values.billing_symbol)}/>
                </td>
              {row.cells.map((cell) => {
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

export default DataTable;