import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Correct_TAG from "../../assets/img/Correct_Tag.png";
import False_TAG from "../../assets/img/False_Tag.png";
import Warning_TAG from "../../assets/img/Warning_Tag.png";

export default class AnnoCard extends Component {
  render() {
    return (
        <Card style={tag[this.props.tag]}>
            <Card.Body>
                <Card.Title>{this.props.summary}</Card.Title>
                <div style={{margin: 10}}>
                    <img src={tag_image[this.props.tag]}/>
                </div>
                <Card.Text>
                {this.props.annoText}
                </Card.Text>
                <Card.Link href={this.props.reference}>{this.props.reference}</Card.Link>
                <div style={{margin:10}}>{this.props.date}</div>
                <div>{this.props.userName}</div>
                <div>{this.props.emotes}</div>
            </Card.Body>
        </Card>
    );
  }
}

const warning = {
    backgroundColor: "#FCEECE",
    borderRadius: 5,
    padding: 5,
    margin: 5,
    flex: 1,
    flex: 1,
    alignItems: 'center',
};

const false_info = {
    backgroundColor: "#FFE0E2",
    borderRadius: 5,
    padding: 5,
    margin: 5,
    flex: 1,
    alignItems: 'center',
};

const correct = {
    backgroundColor: "#E0F6E6",
    borderRadius: 5,
    padding: 5,
    margin: 5,
    flex: 1,
    alignItems: 'center',
};

const tag = {
    "warning": warning,
    "false": false_info,
    "correct": correct
}

const tag_image = {
    "warning": Warning_TAG,
    "false": False_TAG,
    "correct": Correct_TAG
}

