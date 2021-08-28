import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Login from '../Login/Login'
import Register from '../Register/Register'
import './App.css'
import InfoToolTip from '../InfoToolTip/InfoToolTip'
function App() {
  const [isSideMenueOpen, setSideMenue] = React.useState(false)

  function closeSideMenue() {
    setSideMenue(false)
  }

  function openSideMenue() {
    setSideMenue(true)
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies
            onClose={closeSideMenue}
            isOpen={isSideMenueOpen}
            onClick={openSideMenue}
            onLinkClick={closeSideMenue}
          />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies
            onClose={closeSideMenue}
            isOpen={isSideMenueOpen}
            onClick={openSideMenue}
            onLinkClick={closeSideMenue}
          />
        </Route>
        <Route path="/profile">
          <Profile
            onClose={closeSideMenue}
            isOpen={isSideMenueOpen}
            onClick={openSideMenue}
            onLinkClick={closeSideMenue}
          />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/error">
          <InfoToolTip />
        </Route>
      </Switch>
    </div>
  )
}

export default App
