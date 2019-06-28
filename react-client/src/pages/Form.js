import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {

  row: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    flexWrap: 'wrap',
    fontSize: '2em',
    padding: '5%',
  },
}

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      number: '',
      alert: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ number: event.target.value, alert: '' });
  }

  handleSubmit(event) {
    if (Number.isInteger(Number(this.state.number)) && this.state.number >= 3) {
      this.props.sendNumber(this.state.number);
      event.preventDefault();
    } else {
      this.setState({ alert: "Please input a valid number" });
    }
  }

  render() {

    return (
      <div>
        <form autoComplete="off">
          <InputLabel>Please Enter A Number</InputLabel>
          <Input
            id="number"
            value={this.state.number}
            onChange={this.handleChange}
            fullWidth
          />
          <div style={styles.row}>
            <Button variant="extendedFab" color="primary" onClick={this.handleSubmit}>
              Get Median
                        </Button>
          </div>
        </form>
        <Paper style={styles.row}>
          <Typography variant="subheading" component="h3" color="error" align="center">
            {this.state.alert}
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default Form;
