import React from 'react'
import {Link} from 'react-router-dom'
import { students } from '../data'

function Students() {
  return (
    <div>
      <h2>Student List</h2>
      {students.map((s) =>(
        <div key={s.id} className='student-card'>
            <Link to={`/students/${s.id}`}>
                {s.name}
            </Link>
        </div>
      ))}
    </div>
  )
}

export default Students
