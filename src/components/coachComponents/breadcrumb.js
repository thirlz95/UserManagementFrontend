import React from 'react'

const BreadCrumbs = (props) => {
  console.log('props for breadcrumbs', props);
  return (
    <div className='form-breadcrumbs'>
      <h5 className={props.formSection === 1 ? 'form-active': ''}>1. Your Details</h5>
      <h5 className={props.formSection === 2 ? 'form-active': ''}>2. Be a coach</h5>
      <h5 className={props.formSection === 3 ? 'form-active': ''}>3. Be coached</h5>
    </div>
  )
}

export default BreadCrumbs;