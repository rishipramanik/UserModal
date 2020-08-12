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
import SimpleTable from "../src/components/UserList";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserList: [],
    };
  }

  componentWillMount() {
    const contactsAPI = "http://localhost:3000/members";
    const { UserList } = this.state;
    let init = {
      method: "GET",
      headers: new Headers(),
      mode: "cors",
      cache: "default",
    };

    fetch(contactsAPI, init)
      .then((response) => response.json())
      .then((data) =>
        this.setState((prevState) => ({
          UserList: [...data],
        }))
      );
  }

  render() {
    const { UserList } = this.state;
    return (
      <div>
        <SimpleTable display={UserList}></SimpleTable>
      </div>
    );
  }
}

export default App;
