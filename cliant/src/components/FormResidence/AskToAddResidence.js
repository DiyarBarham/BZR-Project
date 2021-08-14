import { Button } from '@material-ui/core'
import { Link } from '@reach/router'
import React from 'react'

const AskToAddResidence = () => {
    return (
        <div >
            <p style={{color:"whitesmoke"}}>Are You Have A Resiedncd to Show ? ?</p>
             <Link to="/fromResidnce"> <Button style={{backgroundColor:"white"}} > Click Here </Button> </Link>
        </div>
    )
}

export default AskToAddResidence
