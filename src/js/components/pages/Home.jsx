import React from 'react';
import FullWidthSection from '../FullWidthSection.jsx';
import logo from '../../../assets/images/nctu.gif';
import FontIcon from 'material-ui/lib/font-icon';
import Colors from 'material-ui/lib/styles/colors';

import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import fetch from 'isomorphic-fetch';


class Home extends React.Component {

    componentDidMount() {
        fetch('https://www.cs.nctu.edu.tw/test/hyili/job-hours-backend/public/index.php/users')
            .then(function(res){
                console.log(res);
            });
    }
    render() {
        
        const tableConfig = {
            displaySelectAll: false,
            displayRowCheckbox: false,
            adjustForCheckbox: false,
        }
        const teams = ['www', 'bsd', 'linux'];

        const playerData = [{
            id: 1,
            name: 'John',
            total: 100,
            month: 20,
            teams: {
                www: '10',
                bsd: '20',
                linux: '20',
            }
        }]

        return (
                <FullWidthSection>
                <Table>
                <TableHeader displaySelectAll={tableConfig.displaySelectAll} adjustForCheckbox={tableConfig.adjustForCheckbox}>
                <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>總時數</TableHeaderColumn>
                <TableHeaderColumn>當月總時數</TableHeaderColumn>
                </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={tableConfig.displayRowCheckbox}>
                {
                    playerData.map(function(data) {
                        return (
                                <TableRow>
                                <TableRowColumn>{data.id}</TableRowColumn>
                                <TableRowColumn>{data.name}</TableRowColumn>
                                <TableRowColumn>{data.total}</TableRowColumn>
                                <TableRowColumn>{data.month}</TableRowColumn>
                                {
                                        data.teams.map(function())                          
                                }
                                </TableRow>
                               )
                    })
                }
                </TableBody>
                </Table>
                </FullWidthSection>
                );
    }
}
export default Home;
