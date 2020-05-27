import React, { useState } from 'react';
import Base from '../core/Base';
import { isAuthenticated } from '../auth/helper';
import { Link } from 'react-router-dom';

const AddCategory = () => {
  const [name, setName] = useState('initialState');

  return (
    <Base
      title='Create a category here'
      description='Add a new category for new tshirts'
      className='conatiner bg-info p-4'>
      <div className='row bg-white rounded'>
        <div className='col-md-8 offset-md-2'>
          <h1>Hello there</h1>
        </div>
      </div>
    </Base>
  );
};

export default AddCategory;
