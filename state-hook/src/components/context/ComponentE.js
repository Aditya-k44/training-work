import React, { useContext } from 'react'
import { StateContext, UserContext } from '../../App'

function ComponentE() {
  const user = useContext(UserContext)
  const state = useContext(StateContext)
  return (
    <div>
      User Context value {user} and the state context value {state}
    </div>
  )
}

export default ComponentE
