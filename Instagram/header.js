import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';


const Header = () => {
    return (
        <>
            <View style={styles.header} >
                <TouchableOpacity>
                    <Ionicons name="camera-outline" size={24} color="black" style={styles.iconHeader} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Instagram</Text>
                <TouchableOpacity>
                    <Feather name="send" size={24} color="black" style={styles.iconHeader} />
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#92929292',
        borderBottomWidth: 1,
        padding: 10

    },
    iconHeader: {
        fontSize: 26,
    },
    textHeader: {
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: '500'
    }
})


export default Header;