import React from 'react'

export default function Barchart() {
    return (
        <div>

            <h1>Bar Chart</h1>

            <p>HTML</p>
            <div className="container">
                <div className="skills html">90%</div>
            </div>

            <p>CSS</p>
            <div className="container">
                <div className="skills css">80%</div>
            </div>

            <p>JavaScript</p>
            <div className="container">
                <div className="skills js">65%</div>
            </div>

            <p>PHP</p>
            <div className="container">
                <div className="skills php">60%</div>
            </div>
        </div>
    )
}
