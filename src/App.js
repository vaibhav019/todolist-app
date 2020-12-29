//import logo from './logo.svg';
//import { Typography } from '@material-ui/core';
import React from 'react'
import './App.css';
import Header from './components/Header';
import Input from '@material-ui/core/Input';
import { Button, Container, IconButton, Typography } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Jumbotron, ListGroup, ListGroupItem } from 'reactstrap';
//import Carasoul from './components/Carasoul';
//import List from '@material-ui/core/List';
//import ListItem from '@material-ui/core/ListItem';
//import ListItemAvatar from '@material-ui/core/ListItemAvatar';
//import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
//import ListItemText from '@material-ui/core/ListItemText';
//import Avatar from '@material-ui/core/Avatar';
//import DeleteIcon from '@material-ui/icons/Delete';
//import { Toast, ToastBody, ToastHeader } from 'reactstrap';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      newitem:"",
      list:[]
    }
  }
  additem(todovalue){
    if (todovalue !== ""){
      const newitem={
        id:Date.now(),
        value:todovalue,
        isDone:false
      };
      const list =[...this.state.list];
      list.push(newitem);


      this.setState({
        list,
        newitem:""
      });

    }
  }

  deleteitem(id){
    const list=[...this.state.list];
    const updatedlist=list.filter(item=>item.id !== id);
    this.setState({list:updatedlist})
  }
updateinput(input){
  this.setState({newitem:input});
}
  
  render(){
  return (
    <div div className="App">
    <Header/>
    
    <h1 className="app-title">Have U Done?</h1>
    <div clasName='Container'>
    <Input
     placeholder="write a todo" 
     inputProps={{ 'aria-label': 'description' }} 
     value={this.state.list.newitem}
    onChange={e=>this.updateinput(e.target.value)} 
    />
    <Button 
    variant="contained" 
    color="primary" 
    href="#contained-buttons"
    onClick={() => this.additem(this.state.newitem)}
    disabled={!this.state.newitem.length}
    >
  add todo
  </Button><br/><br/>
  <ListGroup >
  {this.state.list.map(item =>{
    return(
      <Container color="primary"> 
      <Jumbotron>
      <ListGroupItem key={item.id} style={{listStyleType:'none',backgroundColor:'secondary' ,margin:10 ,padding:10}} >
      {/*< input
       type="checkbox"
        name="isDone" 
        checked={item.isDone}
        onChange={()=>{}}
      />*/}
      
        {item.value}

        <IconButton style={{ marginLeft:10}}>
        <DeleteForeverIcon 
        onClick={()=>this.deleteitem(item.id)}

        color="secondary" style={{}} justify="center"
        />
        </IconButton >
        
      </ListGroupItem>
      </Jumbotron>
      </Container>
    )
  })}
  
    </ListGroup>
  
    {/*<div >
  
    <List  style={{width:400,backgroundColor:'primary',justifyContent:'center'}}>
    {this.state.list.map(item =>{
      return(
        <ListItem>
          <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={logo} />
          </ListItemAvatar>
          <ListItemText>
          {item.value}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete"  >
              <DeleteIcon  onClick={()=>this.deleteitem(item.id)}/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )
    })}
    </List>
  </div>*/}


</div>
 </div>
    
  );
}
}
export default App;
