import React from 'react'
import { StateContext, UserContext } from '../../App'

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {user =>{
          return (
          <StateContext.Consumer>
            {
              state => {
                return  <div>User Context value {user} and the state context value {state}</div>
              }
            }
           
            </StateContext.Consumer>
          )
        }}
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF
