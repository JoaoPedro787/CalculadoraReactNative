import { StyleSheet } from "react-native";

export default Styles = StyleSheet.create({
    bgContainer: {
        flex: 1,
        backgroundColor: 'black'
    },

    displayContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 10,
    },

    digitsContainer: {
        flex: 2.5,
    },

    displayText: {
        color: '#FFF',
        fontSize: 60
    },

    digitContainer: {
        flexWrap: 'wrap',
        flex: 1,
        flexDirection: 'row',
    },

    digitWrapper: {
        padding: 5,
        width: '25%',
        aspectRatio: 1,
    },

    digitStyle: {
        backgroundColor: '#4F4F4F',
        borderRadius: 999,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    digitText: {
        color: '#FFF',
        fontSize: 45
    }
});