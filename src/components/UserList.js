import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Modal from "@material-ui/core/Modal";
import mod from "../components/mod";
// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

const useStyles = makeStyles({
  table: {
    Width: 80,
  },
  paper: {
    position: "absolute",
    width: 800,
    height: 400,
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: 5,
    padding: 10,
  },
});

function createData(name, history) {
  return { name, history };
}

const rows = [
  createData("Egon Spengler", 159),
  createData("Glinda Southgood", 237),
];

export default function SimpleTable(props) {
  console.log(props.display);

  const classes = useStyles();
  // const [modalStyle] = React.useState(getModalStyle);
  // const [open, setOpen] = React.useState(false);

  const handleOpen = (name, id) => {
    return <mod name={name} id={id} open={true} />;
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const body = ({ name, id, open }) => {
  //   return (
  //     <Modal
  //       key={id}
  //       open={open}
  //       onClose={handleClose}
  //       aria-labelledby="simple-modal-title"
  //       aria-describedby="simple-modal-description"
  //     >
  //       <div style={modalStyle} className={classes.paper} key={id} id={id}>
  //         <h2 id={id}>{id}</h2>
  //         <p id={id}>{name}</p>
  //         {console.log("id", id)}
  //       </div>
  //     </Modal>
  //   );
  // };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User Name</TableCell>
            <TableCell align="right">History</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.display.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.real_name}
              </TableCell>
              <TableCell align="right">
                <div>
                  <button
                    type="button"
                    onClick={(event) => {
                      handleOpen(row.name, row.id);
                    }}
                  >
                    Open Modal
                  </button>

                  {/* <Modal
                    key={row.id}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                  >
                    <div
                      style={modalStyle}
                      className={classes.paper}
                      key={row.id}
                      id={row.id}
                    >
                      <h2 id={row.id}>{row.id}</h2>
                      <p id={row.id}>{row.real_name}</p>
                      {console.log("id", row.id)}
                    </div>
                  </Modal> */}
                </div>
              </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
