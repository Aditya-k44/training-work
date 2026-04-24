import React from 'react'
import {useParams} from 'react-router-dom'
import {students} from '../data'

function StudentDetails() {

    const{id} = useParams();

    const student = students.find((s) => s.id === Number(id));
    
    if (!student) {
        return <h2>Student not found</h2>
    }
  return (
    <div className='details'>
      <h2>Name: {student.name}</h2>
      <p>Course: {student.course}</p>
    </div>
  )
}

export default StudentDetails
