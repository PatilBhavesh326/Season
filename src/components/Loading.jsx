import React from 'react';

export default function Loading(props){
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
}

Loading.defaultProps = {
    message:"Loading..."
};