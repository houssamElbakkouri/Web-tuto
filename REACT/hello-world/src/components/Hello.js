import React from 'react'

const Hello =  () => {
    //jsx vs no jsx
    /*return (
        <div className = 'dummyClass'> //with react replace class of css with className
            <h1>Hello Houssam</h1>
        </div>
    )*/
    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Houssam')
    )
}

export default Hello