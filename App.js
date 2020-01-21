import React from 'react'
import { View } from 'react-native'
import List from './components/List'
import { styles, mediaArray } from './constants'

const App = () => {
 return (
   <View style={styles.container}>
    <List mediaArray={mediaArray} />
   </View>
 );
};

export default App;