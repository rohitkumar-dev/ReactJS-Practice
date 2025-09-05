import React from 'react'
import {Container, PostForm} from '../index'
import service from '../../appwrite/config'


function AddPost() {
  return (
    <div className='py-8'>
        <Container>
            <PostForm/>
        </Container>
    </div>
  )
}

export default AddPost