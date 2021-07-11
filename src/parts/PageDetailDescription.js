import React from 'react'
import ReactHtmlParser from 'react-html-parser'
export default function PageDetailDescription( {data} ) {

    return (
        <main>
        <h4>About The Place</h4>
        {ReactHtmlParser(data.description)}
        <div className="row">
            {data.features.map((feature, index) => {
                return (
                    <div key={`feature-${index}`} className="col-3">
                        <img src={feature.imageUrl} alt={feature.name} width="38" className="d-block mb-2" />
                        <span>{feature.qty}</span>{" "}
                        <span className="text-gray-500 font-weight-light">{feature.name}</span>
                    </div>
                );
            })}
        </div>
        </main>
    )
}