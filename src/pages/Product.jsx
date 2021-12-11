import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div``;
const Wrapper = styled.div``;
const ImgContainer = styled.div``;
const Image = styled.img``;
const InfoContainer = styled.div``;
const Title = styled.h1``;
const Desc = styled.p``;
const Price = styled.span``;

const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
              <ImgContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
              </ImgContainer>
              <InfoContainer>
                <Title>Levis 501</Title>
                <Desc>Lorem ipsum dolor sit amet
                     consectetur adipisicing elit.
                      Soluta suscipit tempore
                      dignissimos laboriosam eaque
                       hic cupiditate, mollitia illo
                        perferendis sint inventore
                         libero veritatis ducimus repellat
                         eum, numquam amet sunt ratione!</Desc>
                <Price>$20</Price>
             </InfoContainer>  
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
