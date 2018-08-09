import React from "react";
import { Col, Container, Row, Button, Card, CardBody } from "reactstrap";

const AwardCard = props => (
  <Card>
    <CardBody>
      <img alt="award" src="http://www.pngmart.com/files/3/Award-PNG-Photos.png" width="50px" />
      <p>{props.title}</p>
      <img alt="avatar" src="https://www.iranketab.ir/Images/user.jpg" width="100px" />
      <p>{props.text}</p>
      <h6>From: {props.sender}</h6>
      <h6>To: {props.receiver}</h6>
    </CardBody>
  </Card>
)

export default AwardCard;