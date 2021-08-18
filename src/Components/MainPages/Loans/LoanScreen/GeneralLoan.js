import { Paper } from "@material-ui/core";
import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "./Loan.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "rgb(7, 33, 70)",
    color: theme.palette.common.white,
    fontWeight:700,
  },
  body: {
    fontSize: 14,
    
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    maxWidth: 1000,
  },
});

function GeneralLoan() {
  const classes = useStyles();
  return (
    <div className="loan-container">
      {/* <div className="loan"> */}
      <h1 className="loan-header">General Loan</h1>
      <div className="loan-table">
        <TableContainer component={Paper} style={{maxWidth:1000}}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Period</StyledTableCell>
                <StyledTableCell>Intrest Rate</StyledTableCell>
                <StyledTableCell>End Use</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell>3-5 years</StyledTableCell>
                <StyledTableCell>15%</StyledTableCell>
                <StyledTableCell>For Business</StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <h2 className="loan-subHeader">Required Documents</h2>
      <div className="loan-docs">
        <div className="loan-docs-item">
          <h3 className="loan-h3">Eligibility</h3>
          <ul className="loan-list">
            <li className="loan-list-item">Regular Member</li>
          </ul>
        </div>
        <div className="loan-docs-item">
          <h3 className="loan-h3">KYC Document</h3>
          <ul className="loan-list">
            <li className="loan-list-item">Photo</li>
            <li className="loan-list-item">Pan Card</li>
            <li className="loan-list-item">Aadhar Card</li>
            <li className="loan-list-item">Ration Card</li>
            <li className="loan-list-item">Electricity Bill</li>
            <li className="loan-list-item">Election Card</li>
            <li className="loan-list-item">
              Balance Sheet 3 Years or 3 Months
            </li>
            <li className="loan-list-item">PAN card</li>
          </ul>
        </div>
        <div className="loan-docs-item">
          <h3 className="loan-h3">Guarantors Documents</h3>
          <ul className="loan-list">
            <li className="loan-list-item">2 Regular Memmbers Photo</li>
            <li className="loan-list-item">PAN card</li>
            <li className="loan-list-item">Aadhar Card</li>
            <li className="loan-list-item">Ration Card</li>
            <li className="loan-list-item">Electricity Bill</li>
            <li className="loan-list-item">Election Card</li>
            <li className="loan-list-item">Form no. 16 Total salary form</li>
            <li className="loan-list-item">Permanent Income Documents</li>
          </ul>
        </div>
        <div className="loan-docs-item">
          <h3 className="loan-h3">Other Document</h3>
          <ul className="loan-list">
            <li className="loan-list-item">Regular Member</li>
          </ul>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default GeneralLoan;
