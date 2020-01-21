import React from 'react'
import { View } from 'react-native'
import List from './components/List'

import { MediaProvider } from './contexts/MediaContext'
import { styles } from './constants'

const App = () => {
 return (
   <View style={styles.container}>
     <MediaProvider>
       <List />
     </MediaProvider>
   </View>
 );
};

export default App;