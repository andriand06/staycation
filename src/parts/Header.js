import React from 'react';
import Button from 'elements/Button';
import BrandIcon from 'parts/IconText';
import Fade from 'react-reveal/Fade';
export default function Header(props) {
    const getNavLinkClass = path => {
        return props.location.pathname === path ? "active" : "";
    }
    if(props.isCentered) {
        return (
            <Fade>
                <header className="spacing-sm">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Button className="brand-text-icons mx-auto" href="" type="link">
                                Stay<span className="text-gray-900">cation.</span>
                            </Button>
                        </nav>
                    </div>
                </header>
            </Fade>
        );
    }
    return (
        <Fade>
        <header className="spacing-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <BrandIcon />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item ${getNavLinkClass("/")}`}>
                            <Button className="nav-link" type="link" href="">
                                Home
                            </Button>

                        </li>
                        <li className={`nav-item ${getNavLinkClass("/browse-by")}`}>
                            <Button className="nav-link" type="link" href="/browse-by">
                                Browse by
                            </Button>

                        </li>
                        <li className={`nav-item ${getNavLinkClass("/stories")}`}>
                            <Button className="nav-link" type="link" href="/stories">
                                Stories
                            </Button>

                        </li>
                        <li className={`nav-item ${getNavLinkClass("/agents")}`}>
                            <Button className="nav-link" type="link" href="/agents">
                                Agents
                            </Button>

                        </li>
                    </ul>
                </div>
                </nav>
            </div>
        </header>
        </Fade>
    );
}
