import { Facebook, Instagram, Pinterest, Twitter, YouTube, Room, Phone, MailOutline } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
`;
const Left = styled.div`
flex: 1;
dispaly: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1`

`;
const Desc = styled.p`
margin: 20px 0px;
`;
const SocialContainer = styled.div`
display: flex;
`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
`;

const Title = styled.h3`
margin-buttom: 30px;
`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;

const ListItem = styled.li`
width: 50%;
margin-buttom: 10px;
`;
const Right = styled.div`
flex: 1;
padding: 20px;
`;

const ContactItem = styled.div`
margin-button: 20px;
display: flex;
align-items: center;
`;

const Payment = styled.img`
width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>FAST.</Logo>
                <Desc>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don’t look even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="385999">
                       <Facebook/>
                      </SocialIcon>
                      <SocialIcon color="E4405F">
                       <YouTube/>
                      </SocialIcon>
                      <SocialIcon color="55ACEE">
                       <Instagram/>
                      </SocialIcon>
                      <SocialIcon color="E60023">
                       <Twitter/>
                      </SocialIcon>
                      <SocialIcon color="E4405F">
                       <Pinterest/>
                      </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Orden Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:"10px"}}/> 678 ghrndfi , gjsddwj 56789</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/> +52 5678645679</ContactItem>
                <ContactItem><MailOutline style={{marginRight:"10px"}}/> contact@fast.com</ContactItem>
                <Payment src="http://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer
