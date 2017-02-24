//allpuppies, presentpuppies

import React, {Component} from 'react'
import {connect} from 'react-redux'
import Dog from './Dog'
import {GridList} from 'material-ui/GridList';



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

		const styles = {
		  root: {
		    display: 'flex',
		    flexWrap: 'wrap',
		    justifyContent: 'space-around',
		  },
		  gridList: {
		    width: 500,
		    height: 450,
		    overflowY: 'auto',
		  },
		};

		return (
			<div style={styles.root}>
			  <GridList cellHeight={180} style={styles.gridList}>
			  	{this.props.presentPuppies.map(puppy => (
			  		<Dog key={puppy.id} />
			  	))}
			  </GridList>
			  <GridList cellHeight={180} style={styles.gridList}>
			  	{this.props.allPuppies.map(puppy => (
			  		<Dog key={puppy.id} />
			  	))}
			  </GridList>
			</div>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PuppyContainer)