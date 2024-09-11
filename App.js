import React from 'react';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

const show = async () => {
  SystemNavigationBar.setNavigationColor('#3A2636');
  const result = await SystemNavigationBar.navigationShow();
  console.log('Show: ', result);
};

show();
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
     <StatusBar backgroundColor="#3A2636" barStyle="light-content" />
      <View style={styles.header}>
      </View>
      <View style={styles.body}>

<View style={styles.transactionContainer }>
<Text style={styles.sectionTitle}>Recent Transaction</Text>
<Text style={styles.linkText}>Show All</Text>
</View>
<View>
  <Text style={styles.transactionText}>SPOTIFY</Text>
</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 header: {
  backgroundColor: '#3A2636',
  height: 398,
  paddingRight: 18,
  paddingBottom: 14,
  paddingLeft: 18,
  gap: 32,
  borderBottomLeftRadius: 24,  
  borderBottomRightRadius: 24, 
},
  body:{
    backgroundColor: 'green',
    height: '100%',
  },

  transactionContainer: {
    width: '100%',
    flexDirection: 'row',           
    backgroundColor: '#fff',
    borderBottomLeftRadius: 24,  
    borderBottomRightRadius: 24,      
    padding: 16,   
    alignItems: 'center'        
  },

  sectionTitle: {
    fontSize: 20,
    lineHeight: 24.6,
    textAlign: 'left',    
    fontSize: 20,  
    fontWeight:'Bold',    
    color: '#010101',
    flex: 1,
  },

  linkText:{
  color:'#5490A1',
  fontWeight:'Bold',  
  fontSize: 16,  
  textAlign: 'right',
  },

  transactionText: {
    fontSize: 16, 
    color: '#333',
  },

  transactionAmount: {
    fontSize: 16,      
    fontWeight: '600',
    color: '#000',
  },

  transactionDate: {
    fontSize: 12,      
    color: '#666',
  },
});

export default App;
