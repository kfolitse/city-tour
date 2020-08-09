import React, { Component } from 'react'
import './App.scss'
import Navbar from './component/Navbar/Navbar'
import TourList from './component/TourList/TourList'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <TourList />
      </div>
    )
  }
}
export default App
