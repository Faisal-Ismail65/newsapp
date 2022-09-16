import './App.css';
import React, { Component} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About'; 
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
export class App extends Component {
  pageSize = 6; 
  apiKey= process.env.REACT_APP_NEWS_API;
  state = {
    progress : 0
  }
  setProgress = progress => this.setState({progress:progress});
  render() {
    return (
      <>
      
      <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={4}
        progress={this.state.progress}
      />
        <Routes>
        <Route exact path="/" element={<News apiKey={this.apiKey}  setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="us" category="general"/>}/>
        <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="us" category="business"/>}/>
        <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment"/>}/>
        <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="us" category="health"/>}/>
        <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="us" category="science"/>}/>
        <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="us" category="sports"/>}/>
        <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="us" category="technology"/>}/>
        <Route exact path="/About"element={<About/>}/> 
        </Routes>
        </Router>
      </>
    )
  }
}
export default App