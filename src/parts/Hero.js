import React from 'react'
import Button from 'elements/Button'
import ImageHero from 'assets/images/picture.jpg'
import FrameHero from 'assets/images/frame.jpg'
import IconCities from 'assets/icons/ic_cities.svg'
import IconTraveler from 'assets/icons/ic_traveler.svg'
import IconTreasure from 'assets/icons/ic_treasure.svg'
import formatNumber from 'utils/formatNumber'
export default function Hero(props) {
    function showMostPicked() {
        window.scrollTo({
            top : props.refMostPicked.current.offsetTop -30,
            behavior : "smooth"
        })
    }
    
    return (
        <section className="container pt-4">
            <div className="row align-items-center">
                <div className="col-auto pr-5" style={{width : 522}}>
                    <h1 className="font-weight-bold line-height-1 mb-3" >
                        Forget Busy Work, <br/>
                        Start Next Vacation
                    </h1>
                    <p className="font-weight-light text-gray-500 w-75 mb-4" style={{lineHeight:"170%" }}>
                    We provide what you need to enjoy your holiday with family. Time to make anothe memorable moments.
                    </p>
                    <Button isPrimary isBlock hasShadow className="btn px-5 mt-3" onClick={showMostPicked} type="link">Show me now</Button >
                    <div className="row mt-5">
                        <div className="col-auto" style={{marginRight:50}}>
                            <img src={IconTraveler} alt={`${props.data.travelers} Travelers`} width="36" height="36" />
                            <h6 className="mt-3">
                                <b>{formatNumber(props.data.travelers)}</b> <span className="text-gray-500 font-weight-light">Travelers</span>
                            </h6>
                        </div>
                        <div className="col-auto" style={{marginRight:50}}>
                            <img src={IconTreasure} alt={`${props.data.treasures} Treasures`}  width="36" height="36"/>
                            <h6 className="mt-3">
                                <b>{formatNumber(props.data.treasures)}</b> <span className="text-gray-500 font-weight-light">Treasures</span>
                            </h6>
                        </div>
                        <div className="col-auto" style={{marginRight:50}}>
                            <img src={IconCities} alt={`${props.data.cities} Cities`}  width="36" height="36"/>
                            <h6 className="mt-3">
                                <b>{formatNumber(props.data.cities)}</b> <span className="text-gray-500 font-weight-light">Cities</span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col-6 pl-5">
                    <div className="image-hero">
                        <img src={ImageHero} alt="Room with Couches" className="img-fluid position-absolute" style={{margin: '-30px 0 0 -30px',zIndex:1}} />
                        <img src={FrameHero} alt="Room with Couches" className="img-fluid position-absolute" style={{margin: '0 -35px -35px 0'}} />
                    </div>
                </div>
            </div>
        </section>  
        
    )
}
