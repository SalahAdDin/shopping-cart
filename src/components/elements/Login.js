import React, { useState } from "react"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import { useFormik } from "formik"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core"
import { loginUser } from "../../actions/usersActions"

const validate = (values) => {
  const errors = {}
  if (!values.email) errors.email = "Required"
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    errors.email = "Invalid email address"
  if (!values.password) errors.password = "Required"
  else if (values.password.length < 6)
    errors.password = "Password must be longer than 6 characters"
  return errors
}

const Login = ({ show, onClose }) => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: ({ email, password }, { resetForm }) => {
      dispatch(loginUser({ email, password }))
      resetForm()
      onClose()
    },
  })

  return (
    <Dialog open={show} onClose={onClose} aria-labelledby="login-form-title">
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle id="login-form-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Haydi buyurun, buyurun, cok taze bulursun, buyurun!
          </DialogContentText>
          <TextField
            autoFocus
            name="email"
            label="Email Address"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="email"
            value={formik.values.email}
          />
          <TextField
            name="password"
            label="Password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="password"
            value={formik.values.password}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button
            //onClick={handleClose}
            variant="contained"
            color="primary"
            type="submit"
          >
            Login
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

Login.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
}

export default Login
