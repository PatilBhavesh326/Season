import './SeasonStyle.css';
import React from 'react';

const seasonConfig = {
    summer:{
        text:"Let's hit the beach",
        iconName:"sun"
    },
    winter:{
        text:"Burr, It is Chilly!",
        iconName:'snowflake'
    }
}

const getSeason = (lat, month)=>{
    if(month > 2 && month <9){
      return  lat > 0 ? 'summer':'winter';
    } else {
        return lat > 0 ? 'winter':'summer';
    }
}

export default function SeasonsDisplay(props){
    const season = getSeason(props.lat, new Date().getMonth());
    
    const { text, iconName } = seasonConfig[season] // <-- will return {text , icon }

    return (
           <div className={`season-display ${season}`}>
                <i className={`icon-left huge ${iconName} icon`} />
                {text}
                <i className={`icon-right huge ${iconName} icon`} />
           </div>
    );
            
};