import React from 'react'

function MemoComp({name}) {
    console.log('Rendering Memp Component')
    return (
        <div>
            {name}
        </div>
    )
}

export default  React.memo(MemoComp)
