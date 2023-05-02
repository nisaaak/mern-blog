import React, { useEffect, useState } from 'react'
import './detailBlog.scss'
import { Link, useParams } from 'react-router-dom'
import { Gap } from '../../components'
import Axios from 'axios'

const DetailBlog = (props) => {
    const params = useParams();
    const [data, setData] = useState({})

    useEffect(() => {
        console.log('params', params.id)
        const id = params.id
        Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
            .then(res => {
                console.log('success: ', res)
                setData(res.data.data)
            })
            .catch(err => {
                console.log('err: ', err)
            })
    }, [props])
    if (data.author) {
        return (
            <div className='detail-blog-wrapper'>
                <img className='img-cover' src={`http://localhost:4000/${data.image}`} alt='thumb' />
                <p className='blog-title'>{data.title}</p>
                <p className='blog-author'>{data.author.name} - {data.createdAt}</p>
                <p className='blog-body'>{data.body}</p>
                <Gap height={20} />
                <Link to={'/'}>Kembali Ke Home</Link>
            </div>
        )
    }
    return <p>Loading data...</p>
}

export default DetailBlog