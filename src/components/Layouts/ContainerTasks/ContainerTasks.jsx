import './ContainerTasks.css'

import React from 'react'

export const ContainerTasks = ({  children }) =>{
    return (
        <ul className="container-tasks">
            { children }
        </ul>
    )
}
