import React, { useEffect } from 'react'
import Hoc from '../test/Hoc'

const HomePage = () => {
    return (
        <div>
            <Hoc loading={false}/>
        </div>
    )
}

export default HomePage