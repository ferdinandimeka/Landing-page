import React from 'react'
import { Col, Row } from "react-bootstrap" 
import '../Styles/Feature.css'

export const Features = (props) => {
  return (
    <div id='feat' className='text-center'>
      <div className='container'>
        <div className='col-mod-10 col-md-offset-1 section-title'>
          <h2>Features</h2>
        </div>

        <Row>
            {props.data ? props.data.map((feat, i) => (
              <Col key={`${feat.title}-${i}`} md={3} xs={6}>
                {" "}
                <Col className='icon'>
                  <i className={feat.icon}></i>
                </Col>
                <h3>{feat.title}</h3>
                <p>{feat.text}</p>
              </Col>
            )) : 'loading...'}
        </Row>
      </div>
    </div>
  )
}