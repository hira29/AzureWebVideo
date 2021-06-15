import axios from 'axios';
import React, { Component } from 'react';

class VideoHandler extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            link : null
        }
    }

    componentDidMount() {
        axios.get("http://api.video.fridayio.me/api/video/get")
            .then(x=>{
                this.setState({link : x.data.link})
            }).catch(err=>{
                console.log('videoHandlerGet', err)
            })
    }

    render() { 
        if (this.state.link == null) {
            return null
        }
        return ( 
            <div className="container mx-auto">
                <div className="center px-10 py-5">
                    <video id="vid1" className="azuremediaplayer amp-default-skin" autoPlay controls width="640" height="480" poster="poster.jpg" data-setup='{"nativeControlsForTouch": false, "fluid": true}'>
                        <source src={this.state.link} type="application/vnd.ms-sstr+xml" />
                        <p className="amp-no-js">
                            To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 video
                        </p>
                    </video>    
                </div>
            </div>
         );
    }
}
 
export default VideoHandler;