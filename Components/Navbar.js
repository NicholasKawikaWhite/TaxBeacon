import React from "react";
import {Button, Navbar, Nav, Container} from 'react-bootstrap';
import Image from 'next/image';
import styles from "../Components/Navbar.module.css";
import { useRouter } from "next/router";


const Navigation = (props) => {
    const router = useRouter();

    return ( 
        <Navbar collapseOnSelect expand="lg" className={styles.navbar} sticky="top" bg="light">
          <Container>
            <Navbar.Brand href="/">
              <Image
                src="/logo.png"
                alt="Tax-Beacon"
                width={60}
                height={60}
                className={styles.image}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className={styles.rightMargin} href="/contact">How It Works</Nav.Link>
              <Nav.Link className={styles.rightMargin} href="/contact">Pricing</Nav.Link>
              <Nav.Link className={styles.rightMargin} href="/contact">Contact Us</Nav.Link>

            </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
              {props.user ? <Button onClick={props.signOut}>Sign Out</Button>: <Button onClick={() => {router.push('/SignIn')}}>Sign In</Button>}

    </Navbar.Collapse>
          </Container>
        </Navbar>
     );
  }
   
  export default Navigation;