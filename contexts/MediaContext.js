import React, {useState} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

// import { url } from '../constants'
const MediaContext = React.createContext([{}, () => {}])

const MediaProvider = (props) => {
  const [ media, setMedia ] = useState([])
  // axios.get(url).then(res => setMedia(res.data))
  return (
    <MediaContext.Provider value={[ media, setMedia ]}>
      {props.children}
    </MediaContext.Provider>
  )
}

MediaProvider.propTypes = { children: PropTypes.node }

export { MediaContext, MediaProvider }