import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: 400,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listItem: {
        borderWidth: 1,
        borderColor: '#000',
        flexDirection: 'row',
        margin: 5,
        backgroundColor: '#ddd'
    },
    image: {
        borderColor: '#000',
        borderRadius: 50,
        borderWidth: 1,
        width: 100,
        height: 100,
        margin: 5
    },
    content: {
        margin: 5
    },
    title: {
        fontWeight: 'bold'
    }
});

export const mediaArray = [
    {
      'key': '0',
      'title': 'Title 1',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
      'thumbnails': {
        w160: 'http://placekitten.com/160/161',
      },
      'filename': 'http://placekitten.com/2048/1920',
    },
    {
      'key': '1',
      'title': 'Title 2',
      'description': 'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
      'thumbnails': {
        w160: 'http://placekitten.com/160/162',
      },
      'filename': 'http://placekitten.com/2041/1922',
    },
    {
      'key': '2',
      'title': 'Title 3',
      'description': 'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
      'thumbnails': {
        w160: 'http://placekitten.com/160/163',
      },
      'filename': 'http://placekitten.com/2039/1920',
    },
];