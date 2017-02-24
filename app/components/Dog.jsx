'use strict';

import React from 'react';
import {Paper} from 'material-ui';

const sampleDog = {name: 'Ben', imageURL: '/images/redsweatshirt.jpg', parentName: 'Ceren', preferredPettings: ['head'], okToFeed: 'Will eat anything!', notes: 'Is a sad dog...', floor: '11', cohort: 'Staff', breed: 'Mutt', age: 4, attendance: 'present'};

const style = {
  height: 500,
  width: 500
};

const Dog = (props) => {
  return (
    <Paper style={style} zDepth={3}>
      <img src={sampleDog.imageURL} />
      <h1>{sampleDog.name}</h1>
      <p>Parent: {sampleDog.parentName}</p>
      <p>What I can eat: {sampleDog.okToFeed}</p>
      <p>Pet me on my: {sampleDog.preferredPettings}</p>
      <p>Floor: {sampleDog.floor}</p>
      <p>Cohort: {sampleDog.cohort}</p>
      <p>Notes: {sampleDog.notes}</p>
    </Paper>
  );
};

export default Dog;
