//allpuppies, presentpuppies

import React, {Component} from 'react'
import {connect} from 'react-redux'


import {getAllPuppies, updatePuppies} from '../reducers/puppies'

const mapStateToProps = (state) => {
	return { allPuppies : state.puppies.puppies, presentPuppies: state.puppies.presentPuppies }
}

const mapDispatchToProps = (dispatch) => {
	return {
		getPuppies: () => {
			dispatch(getAllPuppies())
		},
		updatePuppies: (puppy) => {
			dispatch(updatePuppies(puppy))
		}
	}
}

export class PuppyContainer extends Component {

	constructor(props){
		super(props)
	}

	render() {
		return (
			<div>hello</div>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PuppyContainer)