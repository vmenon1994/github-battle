import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'    
import { ThemeProvider } from './contexts/theme'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loading from './components/Loading'

const Popular = React.lazy(() => import('./components/Popular'))
const Battle = React.lazy(() => import('./components/Battle'))
const Results = React.lazy(() => import('./components/Results'))


class App extends React.Component {

    state = {
        theme: 'light',
        toggleTheme: () => {
            this.setState(( {theme }) => ({
                theme: theme === 'light' ? 'dark' : 'light'
            }))
        }
     }

    render() {
        return (
            <React.Suspense fallback={<Loading />}>
                <Router>
                    <ThemeProvider value={this.state}> 
                        <div className={this.state.theme}>
                            <div className="container">
                                <Nav /> 
                                <Switch>
                                    <Route exact path='/' component={Popular} />
                                    <Route exact path='/battle' component={Battle} />
                                    <Route path='/battle/results' component={Results} />
                                    <Route render={() => <h1>Error 404. Not Found!</h1>} />
                                </Switch>
                            </div>
                        </div>
                    </ThemeProvider>
                </Router>
            </React.Suspense>
        )   
    }   
}

ReactDOM.render(<App />, document.getElementById('app'))
