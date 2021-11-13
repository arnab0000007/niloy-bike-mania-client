import React from 'react';
import { Button, Container, Nav, Navbar, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './Dashboard.css'
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from './../../Login/AdminRoute/AdminRoute';
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';
import AddReview from '../AddReview/AddReview';
import AddProduct from '../AddProduct/AddProduct';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';


function Dashboard() {
    let { path, url } = useRouteMatch();
    const { admin,logOut,isAdminLoading } = useAuth();
    if (isAdminLoading ) {
        return <div className="spinner"><Spinner animation="border" variant="danger" /></div>
    }
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container className="navbar">
                    <Navbar.Brand >Dashboard</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        {admin ?
                            <>
                                <Nav.Link as={Link} to={`${url}/manageAllOrders`}>Manage All Orders</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/addProduct`}>Add Product</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/makeAdmin`}>Make Admin</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/manageProducts`}>Manage Products</Nav.Link>
                            </>
                            :
                            <>
                            <Nav.Link as={Link} to={`${url}/pay`}>Pay</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/myOrders`}>My Orders</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/addReview`}>Add Review</Nav.Link>
                            </>

                            }
                        <Button onClick={logOut} className="btn btn-sm btn-warning">Logout</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route  path={`${path}/myOrders`}>
                       <MyOrders></MyOrders>
                    </Route>
                    <Route  path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>
                    <AdminRoute  path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>

                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>

                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                   
                </Switch>
                </>
    );
}


export default Dashboard;
