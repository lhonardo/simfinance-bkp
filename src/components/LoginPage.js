import React from 'React'
import { connect } from 'react-redux'
import { login } from '../store/actions'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Key from '@material-ui/icons/VpnKey'
import Button from '@material-ui/core/Button'

export class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: props.userName || '',
            hasError: false,
        }
    }

    OnClickLogin = (e) => {
        e.preventDefault()
        if (this.state.userName.length) {
            this.props.startLogin(this.state.userName)
            this.props.history.push('/home')
        } else {
            this.setState({
                hasError: true,
            })
        }
    }

    render() {
        return (
            <div className="login-page-class">
                <Paper className="loginPaper">
                    <div className="loginheaderpart">
                        <Typography
                            variant="display3"
                            gutterBottom
                            className="loginpageheader"
                        >
                            Ola.
                        </Typography>
                    </div>
                    <Typography variant="headline" component="h3">
                        Para começar, insira seu nome!
                    </Typography>
                    <form onSubmit={this.OnClickLogin}>
                        <div className="loginformgroup">
                            <AccountCircle />
                            <TextField
                                id="input-username"
                                label="Nome"
                                value={this.state.userName}
                                onChange={(e) =>
                                    this.setState({ userName: e.target.value })
                                }
                                required
                                error={this.state.hasError}
                                helperText={
                                    this.state.hasError && (
                                        <span>Campo obrigatório</span>
                                    )
                                }
                            />
                        </div>
                    </form>

                    <Button
                        variant="raised"
                        color="primary"
                        onClick={this.OnClickLogin}
                    >
                        <Typography
                            variant="button"
                            gutterBottom
                            className="logintypography"
                        >
                            Começar
                        </Typography>
                    </Button>
                </Paper>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: (userName) => dispatch(login(userName)),
})

const mapStateToProps = (state) => ({
    userName: state.auth.userName,
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
