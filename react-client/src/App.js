import React, { Component } from "react";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from '@material-ui/core/Button';

import teal from "@material-ui/core/colors/teal";
import grey from "@material-ui/core/colors/grey";

import Form from "./pages/Form";

const styles = {
  container: {
    height: "100%",
    background: "#c2c4c6",
    padding: "15%"
  },
  box: {
    width: "80%",
    margin: "0 auto",
    border: "black",
    maxWidth: 700
  },
  row: {
    display: "flex",
    margin: "0 auto",
    justifyContent: "center",
    flexWrap: "wrap"
  }
};

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: grey,
    text: "#fff"
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      limit: "",
      median: "",
      open: false,
    };

    this._sendNumber = this._sendNumber.bind(this);
    this._getMedian = this._getMedian.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  _sendNumber(number) {
    this.setState({ limit: number }, function() {
      this._getMedian(this.state.limit);
    });
    this.setState({open: true});
  }

  _getMedian(number) {
    let upperLimit = number;
    fetch(`http://localhost:9000/getMedian/${upperLimit}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.statusText);
      })
      .then(data => {
        this.setState({ median: data.med }, function() {
        });
      })
      .catch(() => {
        this.setState({ median: "An Error occured, Please try again" });
      });
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  handleClose() {
    this.setState({open: false, median: ""});
  }
  render() {
    const page = [<Form sendNumber={this._sendNumber} />];
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <AppBar position="static" color="secondary">
            <Typography variant="title" color="primary">
              Median Finder
            </Typography>
          </AppBar>
        </div>
        <div style={styles.container}>
          <div style={styles.box}>
            <Card>
              <div style={styles.row}>
                <CardHeader
                  title={
                    <Typography
                      color="secondary"
                      gutterbottom
                      variant="display1"
                      align="center"
                      component="h3"
                    >
                      Input a number to get median of all primes
                    </Typography>
                  }
                />
              </div>
              <CardContent>
                <div style={styles.row}>{page}</div>
              </CardContent>
            </Card>
            <Dialog open={this.state.open} onClose={this.handleClose}>
              <DialogTitle id="alert-dialog-title" color="secondary">
                The Median For Primes Below {this.state.limit}
              </DialogTitle>
              <DialogContent>
                <div style={styles.row}>
                  <Typography
                    variant="display2"
                    component="h3"
                    color="primary"
                    align="center"
                  >
                    {this.state.median.length > 1 ? `${this.state.median[0]} & ${this.state.median[1]}` : `${this.state.median}`}
                  </Typography>
                </div>
              </DialogContent>
              <DialogActions>
                <Button variant="contained" onClick={this.handleClose} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
