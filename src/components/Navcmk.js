import { Navbar, Container, Nav } from 'react-bootstrap'

const Navcmk = () => {

    return (
        <Navbar style={{backgroundColor: '#00354E'}} expand="lg">
            <Container>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                
                    <Nav className="me-auto">
                        <Nav.Link href="#home" style={{color: '#FFFFFF', style: 'bold'}}>Dashboard</Nav.Link>
                        <Nav.Link href="#home" style={{color: '#FFFFFF', style: 'bold'}}>Régua de Cobrança</Nav.Link>
                    </Nav>

                    <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src="logo.png"
                        className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    )
}


export default Navcmk