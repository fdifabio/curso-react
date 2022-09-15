import React from 'react';
import {Card, Container, Navbar} from "react-bootstrap";
import {Outlet} from "react-router-dom";

const AdminLayout = () => {
    return (
        <div>
            {/*<Navbar bg="light">*/}
            {/*    <Container>*/}
            {/*        <Navbar.Brand>Brand text</Navbar.Brand>*/}
            {/*    </Container>*/}
            {/*</Navbar>*/}

            {/*<Card style={{width: '20%', height: '100%'}}>*/}
            {/*    <Card.Body>Sidebar</Card.Body>*/}
            {/*</Card>*/}

            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default AdminLayout;
