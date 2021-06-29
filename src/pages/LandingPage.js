import React, { Component } from 'react'
import Header from 'parts/Header'
import landingPage from 'json/landingPage.json'
import Hero from 'parts/Hero'
export default class Landingpage extends Component {
    render() {
        return (
            <>
             <Header {...this.props}></Header>
             <Hero data={landingPage.hero}/>   
            </>
            
        )
    }
}
