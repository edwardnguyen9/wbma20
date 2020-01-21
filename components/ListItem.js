import React from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { styles } from '../constants'

const ListItem = ({ item }) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <Image
              style={styles.image}
              source={{uri: item.thumbnails.w160}}
            />
            <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
          </TouchableOpacity>
    )
}

ListItem.propTypes = { item: PropTypes.object }

export default ListItem