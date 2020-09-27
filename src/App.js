import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BreakpointProvider } from 'react-socks'
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import './App.css'

function App() {
    return (
        <BreakpointProvider>
            <div className="App">
                <Router>
                    <Switch>
                        <Route path="/login" component={LoginPage} />
                        <Route path="/" component={Home} />
                    </Switch>
                </Router>
            </div>
        </BreakpointProvider>
    )
}

export default App
