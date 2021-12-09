import { Facebook, Instagram, Pinterest, Twitter, YouTube } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
`;
const Left = styled.div`
flex: 1;
`;

const Logo = styled.h1``;
const Desc = styled.p``;
const SocialContainer = styled.div``;
const SocialIcon = styled.div``;

const Center = styled.div`
flex: 1;
`;
const Right = styled.div`
flex: 1;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>FAST.</Logo>
                <Desc>
                    hksckshuwsryifdjfhwisdwggf
                </Desc>
                <SocialContainer>
                    <SocialIcon>
                       <Facebook/>
                      </SocialIcon>
                      <SocialIcon>
                       <YouTube/>
                      </SocialIcon>
                      <SocialIcon>
                       <Instagram/>
                      </SocialIcon>
                      <SocialIcon>
                       <Twitter/>
                      </SocialIcon>
                      <SocialIcon>
                       <Pinterest/>
                      </SocialIcon>
                </SocialContainer>
            </Left>
            <Center></Center>
            <Right></Right>
        </Container>
    )
}

export default Footer
