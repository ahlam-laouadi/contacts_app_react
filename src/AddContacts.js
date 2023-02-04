import React from 'react'

 class AddContacts extends React.Component {
    constructor(props){
    super(props);
    this.state={
        name:"",
        age:"",
    };
    }
    submitForm=(event)=>
    {
        event.preventDefault();
        const contact={
            name:this.state.name,
            age:this.state.age,
        }
        this.props.addContact(contact);
        this.setState({name:"",age:""})
    }
    render (){
    return(
        <div className='container'>
        <div className="row my-5">
           <div className="col-md-6 mx-auto">
           <div className="card bg-light">
           <form onSubmit={(event)=>this.submitForm(event)} className='p-5'>
                <div className="form-group mb-3">
                    <input type="text" className="form-control"  value={this.state.name} name='name' placeholder='Name'  onChange={(event)=>(this.setState({name:event.target.value}))}/>
                </div>
                <div className="form-group mb-3">
                    <input type="text"  className="form-control"  value={this.state.age} name='age' placeholder='Age'  onChange={(event)=>(this.setState({age:event.target.value}))}/>
                </div>
                <div className="form-group">
                    <input type="submit"  className='btn btn-primary float-start'  value='Add'/>
                </div>
            </form>
           </div>
           </div>
        </div>
    </div>
    )
  }
}
export default AddContacts;