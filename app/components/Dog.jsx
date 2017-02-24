'use strict';

import React from 'react';
import { connect } from 'react-redux';
import {Paper, RaisedButton} from 'material-ui';
import { updatePuppies } from '../reducers/puppies';

const sampleDog = {id: 2, name: 'Ben', imageURL: '/images/redsweatshirt.jpg', parentName: 'Ceren', preferredPettings: ['head'], okToFeed: 'Will eat anything!', notes: 'Is a sad dog...', floor: '11', cohort: 'Staff', breed: 'Mutt', age: 4, attendance: 'absent'};

const style = {
  paper: {
    height: 500
  },
  // image: {
  //   maxHeight: 300
  // }
};

class Dog extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      attendance: sampleDog.attendance === 'present' ? 'Log Me Out!' : 'Log Me In!',
      onClick: sampleDog.attendance === 'present' ? this.logOut.bind(this) : this.logIn.bind(this)
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  logIn () {
    this.props.updatePuppies({id: sampleDog.id, attendance: 'present'});
    // this.setState({ attendance: 'Check Me Out!', onClick: this.logOut })
  }

  logOut () {
    this.props.updatePuppies({id: sampleDog.id, attendance: 'absent'})
  }

  render () {
    return (
      <Paper style={style.paper} zDepth={3}>
        <img  src={sampleDog.imageURL} />
        <h1>{sampleDog.name}</h1>
        <RaisedButton label={this.state.attendance} primary={true} style={style} onClick={this.state.onClick} />
        <p>Parent: {sampleDog.parentName}</p>
        <p>What I can eat: {sampleDog.okToFeed}</p>
        <p>Pet me on my: {sampleDog.preferredPettings}</p>
        <p>Floor: {sampleDog.floor}</p>
        <p>Cohort: {sampleDog.cohort}</p>
        <p>Notes: {sampleDog.notes}</p>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    updatePuppies: (changedPuppy) => {
      dispatch(updatePuppies(changedPuppy));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dog);
