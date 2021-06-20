import axios from 'axios';
import React, { Component } from 'react';
import { AzureMP } from 'react-azure-mp';

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
                    <AzureMP
                        options={{controls: true, autoplay: true, fluid: true}}
                        src={[{ src: this.state.link, type: "application/vnd.ms-sstr+xml" }]}
                    />
                </div>
                <iframe className="center px-10 py-5" src="https://drive.google.com/file/d/1kQCGYwKtgFJtR2ohb_PGTCybyXAfZiKh/preview" width="640" height="480"></iframe>
                <iframe className="center px-10 py-5" src="https://drive.google.com/file/d/1IvivqmR5UEgDzo0TH0wN46CdrsWo06PS/preview" width="640" height="480"></iframe>
            </div>
         );
    }
}
 
export default VideoHandler;