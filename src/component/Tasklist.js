import React ,{Component} from 'react';
import Taskitem from './Taskitem';

class Tasklist extends Component{

    render(){

        var {tasksProps} = this.props; // var tasks = this.props.tasks
        var Elements = tasksProps.map((task, index) => {
            return <Taskitem key = {task.id}
                             index = {index}
<<<<<<< HEAD
                             task = {task}
                             onUpdateStatus = {this.props.reciveID}
                             onDeleteItem = {this.props.reciveActionDelete}
=======
                             task = {task} 
                             onUpdateStatus = {this.props.reciveID}
                             onDeleteItem = {this.props.reciveDeleteID}
                             onUpdateItem = {this.props.reciveUpdatetID}
>>>>>>> 1cdfb928f303fc133a2a553ddcf8fab2bef9487c
                    />
        });

        return(
            <div className = "row">  
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Active</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="text" className="form-control" />
                                </td>
                                <td>
                                    <select className="form-select">
                                        <option value="-1">All</option>
                                        <option value="0">Hidden</option>
                                        <option value="1">Active</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                           {Elements}
                        </tbody>
                    </table>
                </div>
          </div>
        )
    }
}

export default Tasklist;