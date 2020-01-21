import React, { useContext } from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'

import { MediaContext } from '../contexts/MediaContext'
import ListItem from './ListItem'
import { useFetch } from '../hooks/APIHooks'
import { url } from '../constants'

const List = ({ mediaArray }) => {
    const [ media, setMedia ] = useContext(MediaContext)
    const [data, loading] = useFetch(url)
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

List.propTypes = { mediaArray: PropTypes.array }

export default List