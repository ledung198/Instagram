import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

const DisplayResult = ({userChoice, computerChoice}) => {
    const Icons =
    [
        'hand-scissors','hand-rock','hand-paper'
    ]
    return (
        <>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.playGame}>
                    <FontAwesome5 name={Icons[userChoice - 1]} size={32} color="#6a5300" style={[styles.userGame, userChoice == 1 ? styles.scissorsLeftIcon : styles.leftIcon]} />
                </View>
                <Text>You</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.playGame}>
                    <FontAwesome5 name={Icons[computerChoice - 1]} size={32} color="#6a5300" style={[styles.computerGame, computerChoice == 1 ? styles.scissorsRightIcon : styles.rightIcon]} />
                </View>
                <Text>Computer</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    userGame: {
        fontSize: 50,
    },
    playGame: {
        height: 80,
        width: 80,
        borderRadius: 100,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftIcon: {
        transform: [{ rotateZ: "80deg" }],
    },
    scissorsLeftIcon: {
        transform: [{ rotateZ: "180deg" }, { rotateX: "180deg" }],
    },
    rightIcon: {
        transform: [{ rotateZ: "-80deg" }, { rotateY: "180deg" }],
    },
    scissorsRightIcon: {
        transform: [
            { rotateZ: "180deg" },
            { rotateY: "180deg" },
            { rotateX: "180deg" },
        ]
    },
    computerGame: {
        fontSize: 50,
    },
})

export default DisplayResult;