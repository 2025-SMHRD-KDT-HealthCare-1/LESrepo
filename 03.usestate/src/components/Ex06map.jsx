import React from 'react'
import {Card, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Ex06map = ({item}) => {
    console.log(item)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.imgSrc}  style={{ width: '100%', height: '280px'}} />
      <Card.Body>
        <Card.Title>{item.title} {item.birthYear}년생</Card.Title>
        <Card.Text>
          {item.content}
        </Card.Text>
        <a href={item.SNS}>
            <Button  variant="warning">Instagram</Button>
        </a>
      </Card.Body>
    </Card>
  )
}

export default Ex06map