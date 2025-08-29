import React from 'react';
import './YouTubeEmbed.css';
import { Col, Row } from 'react-bootstrap';

const videos = [
    {
        id: 'D9mIf7VT2Fo',
        title: 'Affordable Festival special saree haul',
    },
    {
        id: 'XfQz2Q3_WOE',
        title: 'Partywear Lightweight Silk sarees starting',
    },
    {
        id: 'R8EK671ky8w',
        title: 'Pattu Saree Draping Step by Step',
    },
];

const YouTubeEmbed = () => {
    return (
        <div className="video-gallery">
            
            {/* <div className="video-row"> */}
                <Row>
                    { videos.map((video) => (
                        //   <div key={video.id} className="video-container">
                        <Col md={4} key={video.id}>
                            <iframe
                                src={`https://www.youtube.com/embed/${video.id}`}
                                title={video.title}
                                frameBorder="0"
                                allowFullScreen
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            ></iframe>
                            <a
                                href={`https://www.youtube.com/watch?v=${video.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="fallback-link"
                            >
                                Watch "{video.title}" on YouTube
                            </a>
                            {/* </div> */}
                        </Col>
                    ))}
                </Row>

            {/* </div> */}
        </div>
    );
};

export default YouTubeEmbed;
