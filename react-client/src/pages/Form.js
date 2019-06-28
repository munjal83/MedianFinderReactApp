import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {

    textField: {
        marginLeft: 120,
        marginRight: 100,
        width: 200,
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
        flexWrap: 'wrap',
        fontSize: '2em'
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
        if (Number.isInteger(Number(this.state.number)) && this.state.number >= 0) {
            this.props.sendNumber(this.state.number);
            event.preventDefault();
        } else {
            this.setState({ alert: "Please input a valid number" });
        }
    }

    render() {
        
        return (
            <div style={styles.row}>
                <form autoComplete="off">
                    <TextField
                        id="number"
                        label="Please Enter A Number"
                        style={styles.textField}
                        value={this.state.number}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                    <div style={styles.row}>
                        <Button variant="extendedFab" color="primary" onClick={this.handleSubmit}>
                            Get Median
                        </Button>
                    </div>
                </form>
                <div style={styles.row}>
                    <Paper style={styles.root} elevation={1}>
                        <div style={styles.row}>
                        <Typography variant="title" component="h3" color="error">
                            {this.state.alert}
                        </Typography>
                        </div>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default Form;
