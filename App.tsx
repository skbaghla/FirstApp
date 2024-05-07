import React, {useState} from 'react';
import { PropsWithChildren } from 'react';
//Components:-
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput
} from 'react-native';

//styles
function App(): React.JSX.Element{
  return(
    <View> 
      <Text style = {styles.textboxStyle}>Hello This is Textbox Style</Text>
      <TextInput 

      style= {styles.textboxStyle}
      placeholder='Name'
      />
    </View>
  );
}

//inline 
const styles = StyleSheet.create({
  textboxStyle:{
    color :'#fff',
    fontSize:25,
    backgroundColor:'blue',
    margin:10,
    padding:10,
    height:150,
    textAlignVertical:'center',
    textAlign:'center',
    borderColor:'red',
    borderWidth:4
  }
}) 

/*
//Prop
type UserProps = {
  name: string;
  age: number;
};
function App(): React.JSX.Element{
  const [name, setName] = useState("Sanjeev");

  const updateUser = () => {
    setName("Peter");
  };
 return(
    <View>
      <Text style = {{fontSize:30}}> Props in React Js:</Text>
      <Button title='Update Prop' onPress={updateUser}></Button>
      <User name={name} age={29} />
    </View>
  );
}
const User = (props : UserProps) =>{
  return(
    <View style ={{ backgroundColor:'green', padding : 5}}>
      <Text style = {{fontSize:30}}> Name:{props.name}</Text>
      <Text style = {{fontSize:30}}> Age :{props.age}</Text>

    </View>
  );

}



 import UserData from './components/UserData';
 const name = "sanjeev";
 var email="er.skbaghla@gmail.com"
function App(): React.JSX.Element {
  
//Using State:
  const [name,setName] = useState("Sanjeev"); // name is actual value (getName), seName is like a function when to update
  let data = "Sam"
  function testName(){
    setName("Baghla")
    data = "peter"; // not updating  because compo doesn't re-render
  }

  // let data = 10;

  // const fruit = (val : String) =>{
  //   data = 20;
  //   console.warn(data)
  //   return "apple";
  // }
  
  // let age = 29;
  return (
    //view is wrapper for components
    <View>  
      { <Text style = {{fontSize : 20}}> Button and onPressEvent : {data}</Text>
      <Button title='Button One' color={'green'} onPress={()=>fruit("Hello")}></Button> 
       <Button title='Button two' color={'red'} onPress = {fruit}></Button> 
       <UserData></UserData> 
      
      <Text style = {{fontSize : 30}}>{name}</Text>
      <Text style = {{fontSize : 30}}>{data}</Text>
      <Button title='Update Name' onPress={testName}></Button>
    </View>
  );
  
}

const CompanyData=()=>{ 
  return(
    <View>
      { //<UserData></UserData> //nested Component }
      <Text style={{fontSize : 30}}>Name : XYZ</Text>
      <Text style={{fontSize : 30}}>Total Employee: 1000</Text>
      <Text style={{fontSize : 30}}>Location: Toronto</Text>
    </View>
  );
}
*/
export default App;
