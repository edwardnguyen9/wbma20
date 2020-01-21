import { StyleSheet } from 'react-native'

export const url = 'https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json'

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