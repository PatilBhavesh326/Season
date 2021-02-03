import React from 'react';
import SeasonsDisplay from './SeasonsDisplay';  
import Loading from './Loading';

class Geolocation extends React.Component{

    state = {lat: null, errorMsg : '' };

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            
                // to updated position we called setState.
                position=>this.setState({ lat : position.coords.latitude }),

                // we do not do instead :- this.state.lat = position.coorde.latitude;
                err=>this.setState({ errorMsg: err.message })            
        );
    }

    renderContent(){
        if(this.state.errorMsg && !this.state.lat){
            return  <div>Error: {this.state.errorMsg}</div>
        } else if (this.state.lat && !this.state.errorMsg){
            return <div><SeasonsDisplay lat = {this.state.lat} /></div>
        } else {
            return <div><Loading message="Please accept location request." /></div>
        }
    }

    // React says we have to define render!!
    render() {
        return <div className="border red">
            {this.renderContent()}
        </div>
    };


};

export default Geolocation;