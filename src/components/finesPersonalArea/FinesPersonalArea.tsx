"use client";
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

function createData(dateTime, fines, amount, car, status) {
  return { dateTime, fines, amount, car, status };
}

const rows = [
  createData("31/01/2026 12:45", "Exceeding the vehicle speed from 20 to 40", "2000 uzs", "CHEVROLET MALIBU XL FULL", "To pay"),
  createData("30/01/2026 12:45", "Exceeding the vehicle speed from 20 to 40", "2000 uzs -50% to 12:45", "CHEVROLET MALIBU XL FULL", "Paid for"),
  createData("29/01/2026 12:45", "Exceeding the vehicle speed from 20 to 40", "2000 uzs -50% to 12:45", "CHEVROLET MALIBU XL FULL", "Paid for"),
  createData("28/01/2026 12:45", "Exceeding the vehicle speed from 20 to 40", "2000 uzs -50% to 12:45", "CHEVROLET MALIBU XL FULL", "Paid for"),
  createData("31/01/2026 12:45", "Exceeding the vehicle speed from 20 to 40", "2000 uzs", "CHEVROLET MALIBU XL FULL", "To pay"),
  createData("30/01/2026 12:45", "Exceeding the vehicle speed from 20 to 40", "2000 uzs -50% to 12:45", "CHEVROLET MALIBU XL FULL", "Paid for"),
  createData("27/01/2026 12:45", "Exceeding the vehicle speed from 20 to 40", "2000 uzs -50% to 12:45", "CHEVROLET MALIBU XL FULL", "Paid for"),
  createData("26/01/2026 12:45", "Exceeding the vehicle speed from 20 to 40", "2000 uzs -50% to 12:45", "CHEVROLET MALIBU XL FULL", "Paid for"),
  createData("31/01/2026 12:45", "Exceeding the vehicle speed from 20 to 40", "2000 uzs", "CHEVROLET MALIBU XL FULL", "To pay"),
  createData("30/01/2026 12:45", "Exceeding the vehicle speed from 20 to 40", "2000 uzs -50% to 12:45", "CHEVROLET MALIBU XL FULL", "Paid for"),
  createData("25/01/2026 12:45", "Exceeding the vehicle speed from 20 to 40", "2000 uzs -50% to 12:45", "CHEVROLET MALIBU XL FULL", "Paid for"),
  createData("31/01/2026 12:45", "Exceeding the vehicle speed from 20 to 40", "2000 uzs", "CHEVROLET MALIBU XL FULL", "To pay"),
  createData("30/01/2026 12:45", "Exceeding the vehicle speed from 20 to 40", "2000 uzs -50% to 12:45", "CHEVROLET MALIBU XL FULL", "Paid for"),
  createData("24/01/2026 12:45", "Exceeding the vehicle speed from 20 to 40", "2000 uzs -50% to 12:45", "CHEVROLET MALIBU XL FULL", "Paid for"),
  createData("31/01/2026 12:45", "Exceeding the vehicle speed from 20 to 40", "2000 uzs", "CHEVROLET MALIBU XL FULL", "To pay"),
  createData("30/01/2026 12:45", "Exceeding the vehicle speed from 20 to 40", "2000 uzs -50% to 12:45", "CHEVROLET MALIBU XL FULL", "Paid for"),
  createData("31/01/2026 12:45", "Exceeding the vehicle speed from 20 to 40", "2000 uzs", "CHEVROLET MALIBU XL FULL", "To pay"),
  createData("30/01/2026 12:45", "Exceeding the vehicle speed from 20 to 40", "2000 uzs -50% to 12:45", "CHEVROLET MALIBU XL FULL", "Paid for"),
];

export default function FinesPersonalArea() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date/Time</StyledTableCell>
            <StyledTableCell>Fines</StyledTableCell>
            <StyledTableCell>Amount</StyledTableCell>
            <StyledTableCell>Car</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>{row.dateTime}</StyledTableCell>
              <StyledTableCell>{row.fines}</StyledTableCell>
              <StyledTableCell>{row.amount.includes("-50%") ? <span style={{ color: "green" }}>{row.amount}</span> : row.amount}</StyledTableCell>
              <StyledTableCell>{row.car}</StyledTableCell>
              <StyledTableCell style={{ color: row.status === "To pay" ? "red" : "green" }}>{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
