import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { redirect } from '../../actions';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/styles/withStyles';
import FormButton from '../../components/FormButton';
import { Icon } from '@bloobirds-it/bloobirds-platform-component-library';

const style = {
  container: {
    display: 'grid',
    gridTemplateRows: '10% 60px 75px 75px auto',
    flexDirection: 'column',
    padding: '0 0 0 132px',
  },
  link: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    color: '#7986cb',
    gridRow: 2,
  },
  title: {
    color: '#283593',
    margin: 0,
    gridRow: 3,
  },
  paragraph: {
    margin: 0,
    gridRow: 4,
    alignSelf: 'start',
  },
  Form: {
    form: {
      display: 'flex',
      flexDirection: 'column',
      gridRow: 5,
      maxWidth: '330px',
      alignSelf: 'start',
    },
    button: {
      margin: '76px 0 0 0',
    },
  },
};

const Form = withStyles(style.Form)(({ classes }) => (
  <form className={classes.form}>
    <TextField
      id="filled-email-input"
      label="Email"
      type="email"
      name="email"
      autoComplete="email"
      margin="normal"
      variant="filled"
    />
    <FormButton text={'send recovery password email'} className={classes.button} />
  </form>
));

const Recovery = withStyles(style)(({ performRedirect, classes }) => (
  <Grid item container xs={6} alignItems={'center'} className={classes.container}>
    <a href="#" onClick={performRedirect} className={classes.link}>
      <Icon name="arrowLeft" /> BACK TO LOGIN
    </a>
    <h1 className={classes.title}>Let's find your account</h1>
    <p className={classes.paragraph}>
      Enter your email address below and we'll get you back on track
    </p>
    <Form />
  </Grid>
));

const mapDispatchToProps = dispatch => ({
  performRedirect: e => dispatch(redirect(e)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Recovery);
