import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

const Action = ({play}) => {
    return (
        <View style={styles.bottom}>
            <TouchableOpacity style={[styles.btnBottom, { transform: [{ rotate: '90deg' }] }]} onPress={() => play(1)}>
                <FontAwesome5 style={styles.game} name={'hand-scissors'} size={32} color="#6a5300" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnBottom} onPress={() => play(2)}>
                <FontAwesome5 style={styles.game} name={"hand-rock"} size={32} color="#6a5300" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnBottom} onPress={() => play(3)}>
                <FontAwesome5 style={styles.game} name={"hand-paper"} size={32} color="#6a5300" />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    bottom: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    btnBottom: {
        height: 60,
        width: 60,
        borderRadius: 100,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    },
    game: {
        fontSize: 35,
    },
})

export default Action;