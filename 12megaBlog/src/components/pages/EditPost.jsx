import React, { useEffect, useState } from 'react'
import {Container, PostForm} from '../index'
import service from '../../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            service.getPost(slug).then((post)=>{
                if(post){
                    setPost(post)
                }
            })
        }else{
            navigate('/')
        }
    },[slug,navigate])

  return post ? (
    <div>EditPost
        <PostForm post={post}/>
    </div>
  ) : null
}

export default EditPost