import React, { useContext } from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'

import { MediaContext } from '../contexts/MediaContext'
import ListItem from './ListItem'
import { getAllMedia } from '../hooks/APIHooks'
import { url } from '../constants'

const List = () => {
    const [data, loading] = getAllMedia(url)
    const [ media, setMedia ] = useContext(MediaContext)
    setMedia(data)

    return (
        <FlatList
      data={media}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => {
        return <ListItem item={item} />
      }}
    />
    )
}

export default List