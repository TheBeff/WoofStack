'use strict';

import React from 'react';
import {Paper, RaisedButton} from 'material-ui';
import {GridTile} from 'material-ui/GridList';
import updatePuppies from '../reducers/puppies';

const sampleDog = {id: 2, name: 'Ben', imageURL: '/images/redsweatshirt.jpg', parentName: 'Ceren', preferredPettings: ['head'], okToFeed: 'Will eat anything!', notes: 'Is a sad dog...', floor: '11', cohort: 'Staff', breed: 'Mutt', age: 4, attendance: 'present'};

const style = {
  paper: {
    height: 500
  },
  img: {
    maxHeight: 300
  }
};

export default class Dog extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      attendance: sampleDog.attendance === 'present' ? 'Check Me Out!' : 'Check Me In!',
      onClick: sampleDog.attendance === 'present' ? this.logOut : this.logIn
    }
  }

  logIn () {
    updatePuppies({id: sampleDog.id, attendance: 'present'})
    this.setState({ attendance: 'Check Me Out!', onClick: this.logOut })
  }

  logOut () {
    updatePuppies({id: sampleDog.id, attendance: 'absent'})
  }
  
  render () {

    return (
          <Paper style={style.paper} zDepth={3}>
            <img style={style.img} src={sampleDog.imageURL} />
            <h1>{sampleDog.name}</h1>
            <RaisedButton label={this.state.attendance} primary={true} style={style} onClick={this.state.onClick}/>
            <p>Parent: {sampleDog.parentName}</p>
            <p>What I can eat: {sampleDog.okToFeed}</p>
            <p>Pet me on my: {sampleDog.preferredPettings}</p>
            <p>Floor: {sampleDog.floor}</p>
            <p>Cohort: {sampleDog.cohort}</p>
            <p>Notes: {sampleDog.notes}</p>
          </Paper>
    );
  }
};
