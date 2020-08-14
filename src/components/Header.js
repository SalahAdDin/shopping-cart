import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core"
import { AccountCircle } from "@material-ui/icons"
import Login from "./elements/Login"
import { logoutUser } from "src/actions/usersActions"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Header = () => {
  const classes = useStyles()
  const { authenticated, user } = useSelector((state) => state.users)
  const [openLogin, setOpenLogin] = useState(false)
  const dispatch = useDispatch()

  const handleClickOpenLogin = () => setOpenLogin(true)

  const handleClickCloseLogin = () => setOpenLogin(false)

  const handleOnClickLogout = () => dispatch(logoutUser())

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography component="h4" variant="h4" className={classes.title}>
            Pazar de hele!
          </Typography>
          {!authenticated && (
            <Button color="inherit" onClick={handleClickOpenLogin}>
              Login
            </Button>
          )}
          {authenticated && (
            <>
              <Typography component="h6" variant="h6">
                {user.username}
              </Typography>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Button onClick={handleOnClickLogout} color="inherit">
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Login show={openLogin} onClose={handleClickCloseLogin} />
    </div>
  )
}

export default Header
