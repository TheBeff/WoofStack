//allpuppies, presentpuppies

import React, {Component} from 'react'
import {connect} from 'react-redux'
import Dog from './Dog'
import {GridList} from 'material-ui/GridList';

const mapStateToProps = (state) => {
	return { allPuppies : state.puppies.puppies, presentPuppies: state.puppies.presentPuppies }
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
		    overflowY: 'auto',
		  },
		  h2: {
		  	textAlign: 'center'
		  }
		};

		return (
			<div>
				<div style={styles.root}>
				  <GridList cellHeight='auto' style={styles.gridList} cols='2'>
				  	{this.props.presentPuppies.map(puppy => (
				  		<Dog key={puppy.id} puppy={puppy}/>
				  	))}
				  </GridList>
				</div>
				<div style={styles.root}>
				  <h2>All Fullstack Puppies</h2>
				  <GridList cellHeight='auto' style={styles.gridList} cols='3'>
				  	{this.props.allPuppies.map(puppy => (
				  		<Dog key={puppy.id} puppy={puppy}/>
				  	))}
				  </GridList>
				</div>
			</div>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PuppyContainer)