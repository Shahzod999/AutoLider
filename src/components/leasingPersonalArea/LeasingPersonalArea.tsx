import "./leasingPersonalArea.scss";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(no: number, date: string, amount: string, status: string) {
  return { no, date, amount, status };
}

const rows1 = [
  createData(31, "26/01/2026", "2000 uzs", "To pay"),
  createData(30, "26/01/2026", "2000 uzs", "To pay"),
  createData(29, "26/01/2026", "2000 uzs", "To pay"),
  createData(28, "26/01/2026", "2000 uzs", "To pay"),
  createData(27, "26/01/2026", "2000 uzs", "To pay"),
  createData(26, "26/01/2026", "2000 uzs", "To pay"),
  createData(25, "26/01/2026", "2000 uzs", "To pay"),
  createData(24, "26/01/2026", "2000 uzs", "To pay"),
  createData(23, "26/01/2026", "2000 uzs", "To pay"),
  createData(1, "26/01/2026", "2000 uzs", "To pay"),
  createData(2, "26/01/2026", "2000 uzs", "To pay"),
  createData(3, "26/01/2026", "2000 uzs", "To pay"),
  createData(4, "26/01/2026", "2000 uzs", "To pay"),
  createData(27, "26/01/2026", "2000 uzs", "To pay"),
  createData(26, "26/01/2026", "2000 uzs", "To pay"),
  createData(25, "26/01/2026", "2000 uzs", "To pay"),
  createData(24, "26/01/2026", "2000 uzs", "To pay"),
  createData(23, "26/01/2026", "2000 uzs", "To pay"),
  createData(31, "26/01/2026", "2000 uzs", "To pay"),
  createData(30, "26/01/2026", "2000 uzs", "To pay"),
  createData(29, "26/01/2026", "2000 uzs", "To pay"),
  createData(28, "26/01/2026", "2000 uzs", "To pay"),
  createData(27, "26/01/2026", "2000 uzs", "To pay"),
  createData(26, "26/01/2026", "2000 uzs", "To pay"),
  createData(25, "26/01/2026", "2000 uzs", "To pay"),
  createData(24, "26/01/2026", "2000 uzs", "To pay"),
  createData(23, "26/01/2026", "2000 uzs", "To pay"),
  createData(31, "26/01/2026", "2000 uzs", "To pay"),
  createData(30, "26/01/2026", "2000 uzs", "To pay"),
  createData(29, "26/01/2026", "2000 uzs", "To pay"),
  createData(28, "26/01/2026", "2000 uzs", "To pay"),
  createData(27, "26/01/2026", "2000 uzs", "To pay"),
  createData(26, "26/01/2026", "2000 uzs", "To pay"),
  createData(25, "26/01/2026", "2000 uzs", "To pay"),
  createData(24, "26/01/2026", "2000 uzs", "To pay"),
  createData(23, "26/01/2026", "2000 uzs", "To pay"),
  createData(31, "26/01/2026", "2000 uzs", "To pay"),
  createData(30, "26/01/2026", "2000 uzs", "To pay"),
  createData(29, "26/01/2026", "2000 uzs", "To pay"),
  createData(28, "26/01/2026", "2000 uzs", "To pay"),
  createData(27, "26/01/2026", "2000 uzs", "To pay"),
  createData(26, "26/01/2026", "2000 uzs", "To pay"),
  createData(25, "26/01/2026", "2000 uzs", "To pay"),
  createData(24, "26/01/2026", "2000 uzs", "To pay"),
  createData(23, "26/01/2026", "2000 uzs", "To pay"),
  createData(31, "26/01/2026", "2000 uzs", "To pay"),
  createData(30, "26/01/2026", "2000 uzs", "To pay"),
  createData(29, "26/01/2026", "2000 uzs", "To pay"),
  createData(28, "26/01/2026", "2000 uzs", "To pay"),
  createData(27, "26/01/2026", "2000 uzs", "To pay"),
  createData(26, "26/01/2026", "2000 uzs", "To pay"),
  createData(25, "26/01/2026", "2000 uzs", "To pay"),
  createData(24, "26/01/2026", "2000 uzs", "To pay"),
  createData(23, "26/01/2026", "2000 uzs", "To pay"),
];

const rows2 = [
  createData(31, "26/01/2026", "2000 uzs", "Paid for"),
  createData(30, "26/01/2026", "2000 uzs", "Paid for"),
  createData(29, "26/01/2026", "2000 uzs", "Paid for"),
  createData(28, "26/01/2026", "2000 uzs", "Paid for"),
  createData(27, "26/01/2026", "2000 uzs", "Paid for"),
  createData(26, "26/01/2026", "2000 uzs", "Paid for"),
  createData(25, "26/01/2026", "2000 uzs", "Paid for"),
  createData(24, "26/01/2026", "2000 uzs", "Paid for"),
  createData(23, "26/01/2026", "2000 uzs", "Paid for"),
  createData(31, "26/01/2026", "2000 uzs", "Paid for"),
  createData(30, "26/01/2026", "2000 uzs", "Paid for"),
  createData(29, "26/01/2026", "2000 uzs", "Paid for"),
  createData(28, "26/01/2026", "2000 uzs", "Paid for"),
  createData(27, "26/01/2026", "2000 uzs", "Paid for"),
  createData(26, "26/01/2026", "2000 uzs", "Paid for"),
  createData(25, "26/01/2026", "2000 uzs", "Paid for"),
  createData(24, "26/01/2026", "2000 uzs", "Paid for"),
  createData(23, "26/01/2026", "2000 uzs", "Paid for"),
  createData(31, "26/01/2026", "2000 uzs", "Paid for"),
  createData(30, "26/01/2026", "2000 uzs", "Paid for"),
  createData(29, "26/01/2026", "2000 uzs", "Paid for"),
  createData(28, "26/01/2026", "2000 uzs", "Paid for"),
  createData(27, "26/01/2026", "2000 uzs", "Paid for"),
  createData(26, "26/01/2026", "2000 uzs", "Paid for"),
  createData(25, "26/01/2026", "2000 uzs", "Paid for"),
  createData(24, "26/01/2026", "2000 uzs", "Paid for"),
  createData(23, "26/01/2026", "2000 uzs", "Paid for"),
  createData(31, "26/01/2026", "2000 uzs", "Paid for"),
  createData(30, "26/01/2026", "2000 uzs", "Paid for"),
  createData(29, "26/01/2026", "2000 uzs", "Paid for"),
  createData(28, "26/01/2026", "2000 uzs", "Paid for"),
  createData(27, "26/01/2026", "2000 uzs", "Paid for"),
  createData(26, "26/01/2026", "2000 uzs", "Paid for"),
  createData(25, "26/01/2026", "2000 uzs", "Paid for"),
  createData(24, "26/01/2026", "2000 uzs", "Paid for"),
  createData(23, "26/01/2026", "2000 uzs", "Paid for"),
  createData(31, "26/01/2026", "2000 uzs", "Paid for"),
  createData(30, "26/01/2026", "2000 uzs", "Paid for"),
  createData(29, "26/01/2026", "2000 uzs", "Paid for"),
  createData(28, "26/01/2026", "2000 uzs", "Paid for"),
  createData(27, "26/01/2026", "2000 uzs", "Paid for"),
  createData(26, "26/01/2026", "2000 uzs", "Paid for"),
  createData(25, "26/01/2026", "2000 uzs", "Paid for"),
  createData(24, "26/01/2026", "2000 uzs", "Paid for"),
  createData(23, "26/01/2026", "2000 uzs", "Paid for"),
  createData(31, "26/01/2026", "2000 uzs", "Paid for"),
  createData(30, "26/01/2026", "2000 uzs", "Paid for"),
  createData(29, "26/01/2026", "2000 uzs", "Paid for"),
  createData(28, "26/01/2026", "2000 uzs", "Paid for"),
  createData(27, "26/01/2026", "2000 uzs", "Paid for"),
  createData(26, "26/01/2026", "2000 uzs", "Paid for"),
  createData(25, "26/01/2026", "2000 uzs", "Paid for"),
  createData(24, "26/01/2026", "2000 uzs", "Paid for"),
  createData(23, "26/01/2026", "2000 uzs", "Paid for"),
];

export default function LeasingPersonalArea() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>№</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Amount</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>№</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Amount</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows1.map((row1, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>{row1.no}</StyledTableCell>
              <StyledTableCell>{row1.date}</StyledTableCell>
              <StyledTableCell>{row1.amount}</StyledTableCell>
              <StyledTableCell style={{ color: "red" }}>{row1.status}</StyledTableCell>

              {rows2[index] && (
                <>
                  <StyledTableCell>{rows2[index].no}</StyledTableCell>
                  <StyledTableCell>{rows2[index].date}</StyledTableCell>
                  <StyledTableCell>{rows2[index].amount}</StyledTableCell>
                  <StyledTableCell style={{ color: "green" }}>{rows2[index].status}</StyledTableCell>
                </>
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
