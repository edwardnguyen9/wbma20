import React from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

const List = ({ mediaArray }) => {
    return (
        <FlatList
      data={mediaArray}
      renderItem={({item}) => {
        return <ListItem item={item} />
      }}
    />
    )
}

List.propTypes = { mediaArray: PropTypes.array }

export default List