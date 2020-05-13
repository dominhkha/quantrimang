import React from "react"
import "./view.css"
import Customer from "./customer"

class View extends React.Component{
    constructor(props){
        super(props)
        this.state={
            customers:[
                {
                    "customerId": 0,
                    "name": "kha",
                    "age":20
                }
            ],
            isChange: false,
            customer: {
              // "customerId":1
            }

        }
        this.changeInput  = this.changeInput.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    changeInput(event){
      let customer = JSON.parse(JSON.stringify(this.state.customer));
      customer[event.target.name] = event.target.value;
      this.setState({
        customer: customer
      })


    }
    handleAdd(){
      let customers = JSON.parse(JSON.stringify(this.state.customers));
      customers.unshift(this.state.customer);
      this.setState({
        customers: customers,
        customer:{
          "customerId":"",
          "age":"",
          "name":"",
          "address":""
        }
      })
    }
    handleDelete(customerId){
      let customers = this.state.customers;
      customers = customers.filter(x => x.customerId !== customerId);
      this.setState({
        customers: customers
      })
    }

    render(){
        let renderCustomer = this.state.customers.map((customer)=>(<Customer customer={customer} handleDelete={this.handleDelete}/>));
        return(
            
            <div>
    <div class="form-inline" >
  <label for="text">ID: </label>
  <input type="text" id="customerId" placeholder="Enter ID" name="customerId" onChange={this.changeInput} value={this.state.customer.customerId}/>
  <label for="pwd">Name:</label>
  <input type="text" id="name" placeholder="Enter Name" name="name" onChange={this.changeInput} value={this.state.customer.name}/>
  <label for="pwd">Age:</label>
  <input type="text" id="age" placeholder="Enter Age" name="age" onChange={this.changeInput} value={this.state.customer.age}/>
  <label for="pwd">Address:</label>
  <input type="text" id="address" placeholder="Enter address" name="address" onChange={this.changeInput} value={this.state.customer.address}/>
  
  <button onClick={this.handleAdd}>Add</button>
</div>
            <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Do</th>
              </tr>
            </thead>
            <tbody>
             {renderCustomer}
            </tbody>
          </table>
  
          </div>
)
    }
}

export default View;