import React, { useEffect, useState } from 'react'
import { BlogItem, Button, Gap } from '../../components'
import './home.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setDataBlog } from '../../config/redux/action'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import Axios from 'axios'

const Home = () => {
    const [counter, setCounter] = useState(1)
    const { dataBlog, page } = useSelector(state => state.homeReducer)
    const dispatch = useDispatch()

    console.log(page)

    useEffect(() => {
        dispatch(setDataBlog(counter))
    }, [dispatch, counter])

    const navigate = useNavigate()

    const previous = () => {
        setCounter(counter <= 1 ? 1 : counter - 1)
        console.log(counter)
    }

    const next = () => {
        setCounter(counter === page.totalPage ? page.totalPage : counter + 1)
        console.log(counter)
    }

    const confirmDelete = (id) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Apakah Anda yakin akan menghapus post ini?',
            buttons: [
                {
                    label: 'Ya',
                    onClick: () => {
                        Axios.delete(`http://localhost:4000/v1/blog/post/${id}`)
                            .then(res => {
                                console.log('success delete: ', res.data)
                                dispatch(setDataBlog(counter))
                            })
                            .catch(err => {
                                console.log('err: ', err)
                            })
                    }
                },
                {
                    label: 'Tidak',
                    onClick: () => console.log('user tidak setuju')
                }
            ]
        })
    }

    return (
        <div className='home-page-wrapper'>
            <div className='create-wrapper'>
                <Button title="create-blog" onClick={() => navigate('/create-blog')} />
            </div>
            <Gap height={20} />
            <div className='content-wrapper'>
                {dataBlog.map(blog => {
                    return <BlogItem
                        key={blog._id}
                        image={`http://localhost:4000/${blog.image}`}
                        title={blog.title}
                        name={blog.author.name}
                        date={blog.createdAt}
                        body={blog.body}
                        _id={blog._id}
                        onDelete={confirmDelete}
                    />
                })}
            </div>
            <div className='pagination'>
                <Button title='Previous' onClick={previous} />
                <Gap width={20} />
                <p className='text-page'>{page.currentPage} / {page.totalPage}</p>
                <Gap width={20} />
                <Button title='Next' onClick={next} />
            </div>
            <Gap height={20} />
        </div>
    )
}

export default Home