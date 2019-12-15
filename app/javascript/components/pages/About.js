import React from 'react'

export default function About() {
    return (
        <React.Fragment>
            <h1 style = {aboutStyle}>About</h1>
            <p style = {aboutStyle}>This is the TodoList app</p>
        </React.Fragment>
    )
}

const aboutStyle = {
    fontFamily: 'Helvetica'
}