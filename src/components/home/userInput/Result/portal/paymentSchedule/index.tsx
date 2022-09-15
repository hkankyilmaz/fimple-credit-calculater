import React, { useContext } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import LanguageContext from "../../../../../../store/languageContext";
import { Column, Data } from "./paymentSchedule";
import { IinfoSchedule } from "../../../../../../customHook/calculateSchedule/calculateSchedule";
import $ from "jquery";
import { CalculateSchedule } from "../../../../../../customHook/calculateSchedule";

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { text, language } = useContext(LanguageContext);

  React.useEffect(() => {
    language === "turkish"
      ? $(".MuiTablePagination-selectLabel").html("Satır aralığı :")
      : $(".MuiTablePagination-selectLabel").html("Rows per page : ");

    const text = document
      .querySelector(".MuiTablePagination-displayedRows")!
      .innerHTML.replace("of", "/");
    $(".MuiTablePagination-displayedRows").html(text);
  });

  const columns: readonly Column[] = [
    {
      id: text.home.schedule.InsNum,
      label: text.home.schedule.InsNum,
      minWidth: 50,
    },
    {
      id: text.home.schedule.InsAmount,
      label: text.home.schedule.InsAmount,
      minWidth: 125,
    },
    {
      id: text.home.schedule.principal,
      label: text.home.schedule.principal,
      minWidth: 100,
      align: "left",
    },
    {
      id: text.home.schedule.remainPrincipal,
      label: text.home.schedule.remainPrincipal,
      minWidth: 125,
      align: "left",
    },
    {
      id: text.home.schedule.profitAmount,
      label: text.home.schedule.profitAmount,
      minWidth: 100,
      align: "left",
    },
    {
      id: "BSMV",
      label: "BSMV",
      minWidth: 75,
      align: "left",
    },
    {
      id: "KKDF",
      label: "KKDF",
      minWidth: 75,
      align: "left",
    },
  ];

  const IColumns = [
    "insNo",
    "insAmount",
    "Iprincipal",
    "remainPrincipal",
    "profitAmount",
    "kkdf",
    "bsmv",
  ];

  const Irows = CalculateSchedule();
  console.log(Irows);
  const rows = Irows;

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  if (Irows === undefined) {
    return null;
  } else {
    return (
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      fontWeight: "bold",
                      color: "#09D3AC",
                      fontSize: "15px",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {Irows.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              ).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    {IColumns.map((column, idx) => {
                      const value = row[column as keyof IinfoSchedule];
                      return (
                        <TableCell align="left">
                          {value.toLocaleString()}
                          {column !== "insNo" ? " TL" : null}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={Irows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}
