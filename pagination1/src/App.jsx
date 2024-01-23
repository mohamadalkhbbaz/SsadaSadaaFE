import React, { useState } from "react";
import {
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { Data, columns } from "./Data/Data";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const dataWithPage = Data.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(Data.length / recordsPerPage);

  const prePage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <TableContainer component={Paper} variant="outlined">
        <Table aria-label="demo table">
          <TableHead>
            <TableRow>
              {columns.map((col, index) => (
                <TableCell key={index}>{col}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataWithPage.map((item) => (
              <TableRow key={item.ID}>
                <TableCell>{item.ID}</TableCell>
                <TableCell>{item.Name}</TableCell>
                <TableCell>{item.Email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <nav className="pagination-nav">
        <ul className="pagination-ul">
          <li className="pagination-li">
            <a href="#" className="page-link" onClick={prePage}>
              Prev
            </a>
          </li>
          {[...Array(totalPages).keys()].map((n) => (
            <li
              className={`pagination-li ${
                currentPage === n + 1 ? "active" : ""
              }`}
              key={n}
            >
              <a
                href="#"
                className="page-link"
                onClick={() => changePage(n + 1)}
              >
                {n + 1}
              </a>
            </li>
          ))}
          <li className="pagination-li">
            <a href="#" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
