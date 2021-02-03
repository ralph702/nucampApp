import React, { Component } from 'react';
import { View, Text,ScrollView, } from 'react-native';
import { Card, } from 'react-native-elements';


class Contact extends Component {
    

    static navigationOptions = {
        title: 'Contact Us'
    }

render() {
    return (
        <ScrollView>
     
<Card  wrapperStyle= {{margin:10}} title="Contact Information" >
  <Text >
  1 Nucamp Way </Text>
  <Text>
 Seattle, WA 98001 U.S.A
    
 
     </Text>
<Text></Text>
<Text style ={{marginBottom: 10}}>
Phone: 1-206-555-1234
                            Email: campsites@nucamp.co
</Text>
  
</Card>



        </ScrollView>
      
    );
}
}

export default Contact;