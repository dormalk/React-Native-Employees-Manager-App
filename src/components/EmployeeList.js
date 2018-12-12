import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {ListView,View,Text} from 'react-native';
import {employeesFatch} from '../actions';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends React.Component{
    componentWillMount(){
        this.props.employeesFatch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps);
    }

    createDataSource({employees}){
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2 });
        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee){
        return <EmployeeListItem employee={employee}/>;
    }

    render(){
        return(
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    };
};


const mapStateToProps = (state) => {
    const employees = _.map(state.employees,(val,uid) => {
        return{...val,uid};
    });

    return {employees};
};

export default connect(mapStateToProps,{employeesFatch})(EmployeeList);