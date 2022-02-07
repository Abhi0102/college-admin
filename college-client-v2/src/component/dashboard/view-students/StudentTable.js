import {
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from "@mui/material";

import { makeStyles } from "@mui/styles";

import { Box } from "@mui/system";

import TableListHead from "./TableListHead";
import React, { useState } from "react";
import { openIcon, TABLE_HEAD } from "./StudentTableConfig";
import { Link as RouterLink } from "react-router-dom";
import TableToolbar from "./TableToolbar";

const useStyles = makeStyles({
  root: { width: "100%", overflowX: "auto" },
  table: { minWidth: 700, overflow: "auto" },
});

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  return stabilizedThis.map((el) => el[0]);
}

function StudentTable(props) {
  const classes = useStyles();
  // const { classes } = props;
  console.log(classes);
  const { studentList } = props;
  const [order, setOrder] = useState("desc");
  const [orderBy, setOrderBy] = useState("appNo");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (e, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (e) => {
    if (e.target.checked) {
      const newSelected = studentList.map((st) => st._id);
      setSelected(newSelected);
      return;
    }

    setSelected([]);
  };

  const handleClick = (e, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };
  // console.log(filteredList);
  const filteredList = applySortFilter(
    studentList,
    getComparator(order, orderBy)
  );

  // console.log(filteredUser);
  return (
    <Card elevation={4} sx={{ borderRadius: "20px" }}>
      <TableToolbar numSelected={selected.length} selected={selected} />

      <TableContainer>
        <Table>
          <TableListHead
            headLabel={TABLE_HEAD}
            rowCount={studentList.length}
            order={order}
            orderBy={orderBy}
            numSelected={selected.length}
            onRequestSort={handleRequestSort}
            onSelectAllClick={handleSelectAllClick}
          />
          <TableBody>
            {filteredList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                const isItemSelected = selected.indexOf(row._id) !== -1;
                const { _id } = row;

                return (
                  <TableRow
                    hover
                    key={row._id}
                    tabIndex={-1}
                    role="checkbox"
                    selected={isItemSelected}
                    aria-checked={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        onChange={(e) => handleClick(e, _id)}
                      />
                    </TableCell>
                    {TABLE_HEAD.map((column) => {
                      const colName = column.id;
                      return colName === "dateOfBirth" ? (
                        <TableCell align="left" key={column.id}>
                          {new Date(row[colName]).toLocaleDateString()}
                        </TableCell>
                      ) : (
                        <TableCell align="left" key={column.id}>
                          {row[colName]}
                        </TableCell>
                      );
                    })}
                    <TableCell align="left">
                      <Box
                        component={RouterLink}
                        to={`/dashboard/student-profile/${row._id}`}
                      >
                        {openIcon}
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 25, filteredList.length]}
        component="div"
        count={filteredList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Card>
  );
}

export default StudentTable;
