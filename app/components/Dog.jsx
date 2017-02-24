'use strict';

import React from 'react';

import { connect } from 'react-redux';
import {Paper, RaisedButton} from 'material-ui';
import { updatePuppies } from '../reducers/puppies';

const sampleDog = {id: 2, name: 'Ben', imageURL: '/images/redsweatshirt.jpg', parentName: 'Ceren', preferredPettings: ['head'], okToFeed: 'Will eat anything!', notes: 'Is a sad dog...', floor: '11', cohort: 'Staff', breed: 'Mutt', age: 4, attendance: 'absent'};

import {GridTile} from 'material-ui/GridList';


const style = {
  img: {
    height: '300px',
    width: 'auto'
  },

  Paper: {
    textAlign: 'center',
    marginBottom: '10px',
    padding: '10px'
  }
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
          <GridTile>
            <Paper style={style.Paper}>
              <img style={style.img} src={this.props.puppy.imageURL} />
              <h1>{this.props.puppy.name}</h1>
              <RaisedButton label={this.state.attendance} primary={true} style={style} onClick={this.state.onClick}/>
              <p><strong>Parent:</strong> {this.props.puppy.parentName}</p>
              <p><strong>What I can eat:</strong> {this.props.puppy.okToFeed}</p>
              <p><strong>Pet me on my:</strong> {this.props.puppy.preferredPettings}</p>
              <p><strong>Floor:</strong> {this.props.puppy.floor}</p>
              <p><strong>Cohort:</strong> {this.props.puppy.cohort}</p>
              <p><strong>Notes:</strong> {this.props.puppy.notes}</p>
            </Paper>
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
