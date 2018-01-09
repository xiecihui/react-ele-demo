import React, { Component } from 'react';
import Header from '../../components/header/header';
import EntrySmart from './entry/EntrySmart';
import ActivitySmart from './activity/ActivitySmart';


export default class Find extends Component{

	render(){
		return(
			<div >
				<Header title ="发现"/>
				<EntrySmart/>
				<ActivitySmart/>
			</div>
		)
	}
}

