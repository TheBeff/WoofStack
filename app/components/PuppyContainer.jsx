//allpuppies, presentpuppies

import React, {Component} from 'react'
import {connect} from 'react-redux'
import Dog from './Dog'
import {GridList} from 'material-ui/GridList';
import {Paper} from 'material-ui'
import NavBar from './AppBar'

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
		    fontFamily: 'Roboto'
		  },
		  gridList: {
		    overflowY: 'auto',
		    width: '90%'
		  },
		  h2: {
		  	textAlign: 'center'
		  },
		  Paper: {
		  	padding: '1px 10px',
		  	margin: '10px 5px',
		  	backgroundColor: '#AD1457',
		  	color: 'white'
		  }
		};

		return (
			<div>
				<NavBar />
				<div style={styles.root}>
				  <Paper style={styles.Paper}>
					<h2>Puppies On Deck</h2>
				  </Paper>
				  <GridList cellHeight='auto' style={styles.gridList} cols='2'>
				  	{this.props.presentPuppies.map(puppy => (
				  		<Dog key={puppy.id} puppy={puppy}/>
				  	))}
				  </GridList>
				</div>
				<div style={styles.root}>
				  <Paper style={styles.Paper}>
				  	<h2>All Fullstack Puppies</h2>
				  </Paper>
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

export default connect(mapStateToProps)(PuppyContainer)