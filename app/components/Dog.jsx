'use strict';

import React from 'react';

import { connect } from 'react-redux';
import {Paper, RaisedButton} from 'material-ui';
import { updatePuppies } from '../reducers/puppies';

// const sampleDog = {id: 2, name: 'Ben', imageURL: '/images/redsweatshirt.jpg', parentName: 'Ceren', preferredPettings: ['head'], okToFeed: 'Will eat anything!', notes: 'Is a sad dog...', floor: '11', cohort: 'Staff', breed: 'Mutt', age: 4, attendance: 'absent'};

import {GridTile} from 'material-ui/GridList';


const style = {
  img: {
    height: '300px',
    width: 'auto'
  }
};

class Dog extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      attendance: this.props.puppy.attendance === 'present' ? 'Log Me Out!' : 'Log Me In!',
      onClick: this.props.puppy.attendance === 'present' ? this.logOut.bind(this) : this.logIn.bind(this)
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  logIn () {
    this.props.updatePuppies({id: this.props.puppy.id, attendance: 'present'});
    // this.setState({ attendance: 'Check Me Out!', onClick: this.logOut })
  }

  logOut () {
    this.props.updatePuppies({id: this.props.puppy.id, attendance: 'absent'})

  }

  render () {
    return (
          <GridTile>
            <img style={style.img} src={this.props.puppy.imageURL} />
            <h1>{this.props.puppy.name}</h1>
            <RaisedButton label={this.state.attendance} primary={true} style={style} onClick={this.state.onClick}/>
            <p>Parent: {this.props.puppy.parentName}</p>
            <p>What I can eat: {this.props.puppy.okToFeed}</p>
            <p>Pet me on my: {this.props.puppy.preferredPettings}</p>
            <p>Floor: {this.props.puppy.floor}</p>
            <p>Cohort: {this.props.puppy.cohort}</p>
            <p>Notes: {this.props.puppy.notes}</p>
          </GridTile>
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
