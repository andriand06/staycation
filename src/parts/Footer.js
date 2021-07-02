import React from 'react'
import Button from 'elements/Button'
import IconText from 'parts/IconText'
export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <IconText />
                        <div className="text-gray-500">
                            We Kaboom your beauty holiday<br></br> instantly and memorable.
                        </div>
                    </div>
                    <div className="col-3 mr-5">
                            <h6 className="mt-2 font-weight-bold">
                                For Beginners
                            </h6>
                            <ul className="list-group list-group-flush">
                                <li className="mt-2">
                                    <Button className="text-gray-500" type="link" href="/register">
                                        New Account
                                    </Button>
                                </li>
                                <li className="mt-2">
                                    <Button className="text-gray-500" type="link" href="/properties">
                                        Start Booking a room 
                                    </Button>
                                </li>
                                <li className="mt-2">
                                    <Button className="text-gray-500" type="link" href="/use-payments">
                                        Use Payments
                                    </Button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-2 mr-5">
                            <h6 className="mt-2 font-weight-bold">
                                Explore Us
                            </h6>
                            <ul className="list-group list-group-flush">
                                <li className="mt-2">
                                    <Button className="text-gray-500" type="link" href="/career">
                                        Our Careers
                                    </Button>
                                </li>
                                <li className="mt-2">
                                    <Button className="text-gray-500" type="link" href="/privacy">
                                        Privacy 
                                    </Button>
                                </li>
                                <li className="mt-2">
                                    <Button className="text-gray-500" type="link" href="/terms-conditions">
                                        Terms&Conditions
                                    </Button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h6 className="mt-2 font-weight-bold">
                                Connect Us
                            </h6>
                            <ul className="list-group list-group-flush">
                                <li className="mt-2">
                                    <Button isExternal className="text-gray-500" type="link" href="mailto:support@staycation.id">
                                        support@staycation.id
                                    </Button>
                                </li>
                                <li className="mt-2">
                                    <Button className="text-gray-500" type="link" href="tel:+6281363883325">
                                        0813-6388-3325
                                    </Button>
                                </li>
                                <li className="mt-2">
                                    <span className="text-gray-500">Staycation, Kemang, Jakarta</span>
                                </li>
                            </ul>
                        </div>
                </div>
                <div className="row mt-3">
                    <div className="col text-center copyrights text-gray-500">
                        Copyright 2019 • All rights reserved • Staycation
                    </div>
                </div>
            </div>
        </footer>
    )
}
