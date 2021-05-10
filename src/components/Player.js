import React from 'react'

const Player = () => {
    const progressStyle = {
        "width":"20%",
    }

    return (
        <div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={progressStyle} 
                aria-valuenow="41" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-danger mt-2 p-2 m-1">Stop</button>
                <button className="btn btn-light  mt-2 p-2 m-1">Play</button>
                <button className="btn btn-secondary mt-2 p-2 m-1">Pause</button>
            </div>
        </div>
    )
}

export default Player;