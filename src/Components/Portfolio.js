import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class Portfolio extends Component {
    render() {
        if (this.props.data) {
            var projects = this.props.data.projects.map(function (projects) {
                var projectImage = 'images/' + projects.image;
                return (
                    <div
                        key={projects.title}
                        className="columns portfolio-item"
                    >
                        <div className="item-wrap">
                            <Popup
                                trigger={
                                    <img
                                        alt={projects.title}
                                        src={projectImage}
                                    />
                                }
                                modal
                            >
                                <a
                                    href={projects.url}
                                    title={projects.title}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        alt={projects.title}
                                        src={projectImage}
                                    />
                                </a>
                                <div className="link-icon">
                                    <a
                                        href={projects.url}
                                        title={projects.title}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {/* <i className="fa fa-external-link"></i> */}
                                    </a>
                                </div>

                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <a
                                            href={projects.url}
                                            title={projects.title}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <h5>{projects.title}</h5>
                                        </a>
                                        <p
                                            style={{
                                                fontWeight: 800,
                                            }}
                                        >
                                            {projects.category}
                                        </p>
                                        <p>
                                            {projects.description1}
                                            <br />
                                            {projects.description2}
                                        </p>
                                    </div>
                                </div>

                                {/* </a> */}
                            </Popup>
                        </div>
                    </div>
                );
            });
        }

        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>
                            <span>
                                Projects I have created or collaborated in
                            </span>
                        </h1>
                        <div
                            id="portfolio-wrapper"
                            className="bgrid-thirds s-bgrid-halves cf"
                        >
                            {projects}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;
