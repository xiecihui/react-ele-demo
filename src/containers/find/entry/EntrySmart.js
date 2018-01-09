import React, { Component } from 'react';
import Entry from '../../../components/finder/entry/Entry';
import {entryData} from '../../../data/data';

export default class EntrySmart extends Component{
    constructor(){
        super();
        this.state={
            entryData:[]
        }
    }
    componentWillMount(){
        this.setState({
            entryData
        })
    }

    render(){
        return(
              <Entry data={this.state.entryData}/>

        )
    }
}

