import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Main() {
  return ( 
    <>
    <Contentdiv style={{display: 'flex'}}>
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>오늘의 숙소~</Card.Title>
        <Card.Text>
            숙소 풍경 농협은행...
        </Card.Text>
        <Button variant="primary">상세보기</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>오늘의 숙소~</Card.Title>
        <Card.Text>
            숙소 풍경 농협은행...
        </Card.Text>
        <Button variant="primary">상세보기</Button>
      </Card.Body>
    </Card>

    </Contentdiv>

    <Contentdiv style={{display: 'flex'}}>
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>오늘의 숙소~</Card.Title>
        <Card.Text>
            숙소 풍경 농협은행...
        </Card.Text>
        <Button variant="primary">상세보기</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>오늘의 숙소~</Card.Title>
        <Card.Text>
            숙소 풍경 농협은행...
        </Card.Text>
        <Button variant="primary">상세보기</Button>
      </Card.Body>
    </Card>
    </Contentdiv>
    </>

  );
}

export default Main;

const Contentdiv = styled.div`
margin-bottom: 80px;
margin-top: 50px;
`