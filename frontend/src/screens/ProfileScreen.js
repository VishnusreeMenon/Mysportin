import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'
import { listMyOrders } from '../actions/orderActions'
import {useNavigate} from 'react-router-dom';
import '../index.css';
import { logout } from '../actions/userActions'

function ProfileScreen({ history }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const userDetails = useSelector(state => state.userDetails)
    const { error, loading, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    const orderListMy = useSelector(state => state.orderListMy)
    const { loading: loadingOrders, error: errorOrders, orders } = orderListMy


    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        } else {
            if (!user || !user.name || success || userInfo._id !== user._id) {
                dispatch({ type: USER_UPDATE_PROFILE_RESET })
                dispatch(getUserDetails('profile'))
                dispatch(listMyOrders())
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, userInfo, user, success])

    const submitHandler = (e) => {
        e.preventDefault()

        if (password != confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(updateUserProfile({
                'id': user._id,
                'name': name,
                'email': email,
                'password': password
            }))
            setMessage('')
        }

    }
    const logoutHandler = (e) => {
        e.preventDefault()
        console.log("in handle")
        dispatch(logout(email, password)).then((response) => {

          navigate('/home')

        })
    }

    return (
        <div>
            <div id='button' style={{paddingRight:"2rem"}}>
                <button className='btn btn-dark rounded' style = {{marginRight:"1rem"}} onClick={() => navigate('/home')}>Home</button>
                
                <button className='btn btn-dark rounded' onClick={logoutHandler}>Logout</button>
                 
                 
            </div>
            <Row className=''>
                <Col md={4} style={{paddingLeft:"2rem"}}>
                    <h2>User Profile</h2>

                    {message && <Message variant='danger'>{message}</Message>}
                    {/* {error && <Message variant='danger'>{error}</Message>} */}
                    {loading && <Loader />}
                    <Form   onSubmit={submitHandler} style={{paddingRight:"2rem"}}>

                        <Form.Group controlId='name' >
                            <Form.Label className='form-label'>Name</Form.Label>
                            <br/>
                            <Form.Control
                                required
                                type='name'
                                placeholder='Enter name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='form-field rounded-pill'
                            >
                            </Form.Control>
                        </Form.Group>
                        <br/>
                        <Form.Group controlId='email'>
                            <Form.Label className='form-label'>Email Address</Form.Label>
                            <Form.Control
                                required
                                type='email'
                                placeholder='Enter Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='rounded-pill'
                            >
                            </Form.Control>
                        </Form.Group>
                        <br/>
                        <Form.Group controlId='password'>
                            <Form.Label className='form-label'>Password</Form.Label>
                            <br/>
                            <Form.Control

                                type='password'
                                placeholder='Enter Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='rounded-pill'
                            >
                            </Form.Control>
                        </Form.Group>
                        <br/>
                        <Form.Group controlId='passwordConfirm'>
                            <Form.Label className='form-label'>Confirm Password</Form.Label>
                            <br/>
                            <Form.Control

                                type='password'
                                placeholder='Confirm Password'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className='rounded-pill'
                            >
                            </Form.Control>
                        </Form.Group>
                        <br/>
                        <Button className='btn rounded-pill' type='submit' variant='primary'>
                            Update
                    </Button>

                    </Form>
                    <br/>
                    <br/>
                </Col>

                <Col md={5}>
                    <h2>My Orders</h2>
                    {
                        loadingOrders ? (
                        <Loader /> ) 
                        : errorOrders ? (
                        <Message variant=''></Message>) : 
                        (
                                <Table striped responsive className='table-sm'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Date</th>
                                            <th>Total</th>
                                            <th>Paid</th>
                                            <th>Delivered</th>
                                            <th></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {orders.map(order => (
                                            <tr key={order._id}>
                                                <td>{order._id}</td>
                                                <td>{order.createdAt.substring(0, 10)}</td>
                                                <td>${order.totalPrice}</td>
                                                <td>{order.isPaid ? order.paidAt.substring(0, 10) : (
                                                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                                                )}</td>
                                                <td>
                                                    <LinkContainer to={`/order/${order._id}`}>
                                                        <Button className='btn-sm'>Details</Button>
                                                    </LinkContainer>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            )}
                </Col>
            </Row>
        </div>
    )
}

export default ProfileScreen