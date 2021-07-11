import React, { Component } from 'react'
import BreadCrumb from 'elements/Breadcrumb/index'
export default class Examples extends Component {
  
    render() {
        const breadcrumbList = [
            {pageTitle : "Home", pageHref : ""},
            {pageTitle : "House Details", pageHref : ""}
        ];
        return (
            <div className="container">
                <div className="row align-items-center justify-content-center" style={{height:"100vh"}}>
                    <div className="col-auto">
                  <BreadCrumb data={breadcrumbList} />
                    </div>
                </div>
            </div>
        )
    }
}

