'use strict';

import React from 'react';
import {Paper, RaisedButton} from 'material-ui';
import {GridTile} from 'material-ui/GridList';
import updatePuppies from '../reducers/puppies';
import {connect} from 'react-redux'

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

const mapDispatchToProps = (dispatch) => {
  return {
    getPuppies: () => {
      dispatch(getAllPuppies())
    },
    updatePuppiesDispatch: (puppy) => {
      dispatch(updatePuppies(puppy))
    }
  }
}

export class Dog extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      attendance: props.puppy.attendance === 'present' ? 'Check Me Out!' : 'Check Me In!',
      onClick: props.puppy.attendance === 'present' ? this.logOut : this.logIn
    }
  }

  logIn () {
    updatePuppiesDispatch({id: this.props.puppy.id, attendance: 'present'})
    this.setState({ attendance: 'Check Me Out!', onClick: this.logOut })
  }

  logOut () {
    updatePuppiesDispatch({id: this.props.puppy.id, attendance: 'absent'})
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
};

export default connect(mapDispatchToProps)(Dog)