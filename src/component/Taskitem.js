import React ,{Component} from 'react';

class Taskitem extends Component{

    //function onUpdateStatus
    onUpdateStatus = ()=>{
        this.props.onUpdateStatus(this.props.task.id);
        // console.log(this.props.task.id);
    }

    render(){

        var {task,index} = this.props;
        return(
            <tr>
                <td>{index + 1}</td>
                <td>{task.Namework}</td>
                <td className="text-center">
                    <span className={ task.Status === true ? 'badge bg-success' : 'badge bg-danger'} onClick = {this.onUpdateStatus}>
                       {task.Status === true ? 'Kích Hoạt' : 'Ẩn'}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning">
                        <span className="fas fa-pencil-alt mr-5"></span> Edit
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger">
                        <span className="fa fa-trash mr-5"></span> Delete
                    </button>
                </td>
            </tr>
        )
    }
}

export default Taskitem;