import React from "react"

class Customer extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <tr>
        <td data-column="customerId">{this.props.customer.customerId}</td>
        <td data-column="name">{this.props.customer.name}</td>
        <td data-column="age">{this.props.customer.age}</td>
        <td data-column="Twitter">{this.props.customer.address}</td>
        <td data-column="Twitter"><font style={{color: 'blue', cursor:"pointer"}} onClick = {()=> this.props.handleDelete(this.props.customer.customerId)}>delete</font> <font style={{color: 'blue', cursor:"pointer"}}>update</font></td>
    </tr>
        )
    }
}
export default Customer;