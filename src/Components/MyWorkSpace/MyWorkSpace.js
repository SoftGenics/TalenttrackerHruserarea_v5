import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Table } from 'react-bootstrap'
import './MyWorkSpace.css'
const MyWorkSpace = () => {
  return (
    <div>
      <Sidebar />
      <NavbarMenu />
      <Container className='myworkspace'>
        <h5 className='mt-5 text-muted fw-bold text-center'>My Work Space</h5>
      </Container>
      <div className='jd-wraper'>
      <Container className='table-data'>
        <Table className='data-table'>
          <thead>
            <tr>
              <th>JD number</th>
              <th>User ID/user name</th>
              <th>Job Description</th>
              <th>Add candidate </th>
              <th>JD details</th>
              <th>Terms of JD</th>
              <th>List of candidates</th>
              <th>Button-create tracker sheet</th>
              <th>Submit</th>
              <th>No. of submissions</th>
              <th>Status</th>
              <th>Date -time of submission</th>
              <th>Feedback from client</th>
              <th>Offer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>user001</td>
            </tr>
          </tbody>
        </Table>
      </Container>
      </div>
    </div>
  )
}

export default MyWorkSpace