import React, { useRef, useState } from 'react'
import {
    Animated,
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Action from './Action';
import DisplayResult from './DisplayResult';

const Game = () => {

    const fadeAnim = useRef(new Animated.Value(1)).current;



    const [userChoice, setUserChoice] = useState(0);
    const [computerChoice, setComputerChoice] = useState(0);
    const [result, setResult] = useState('');
    const play = (choice) => {
        // 1 keo, 2 bua, 3 giay
        const ComputerChoice = Math.floor(Math.random() * 3) + 1;
        let resultString = "";
        if (choice === 1) {
            resultString = ComputerChoice === 3 ? "Win" : "Lose"
        } else if (choice === 2) {
            resultString = ComputerChoice === 1 ? "Win" : "Lose"
        } else {
            resultString = ComputerChoice === 2 ? "Win" : "Lose"
        }
        if (choice === ComputerChoice) {
            resultString = "DRAW"
        }
        setComputerChoice(ComputerChoice);
        setUserChoice(choice);
        
        setTimeout(()=> {
            setResult(resultString);
        },300);
        
        Animated.sequence([
            Animated.timing(
                fadeAnim,{
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                fadeAnim,{
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true
                }
            )
        ]).start();
    }
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.header}>
                    <Animated.Text style={[styles.textHeader, {opacity: fadeAnim}]}>{result}</Animated.Text>
                </View>
                <View style={styles.body}>
                    {
                        !result ? (
                            <Animated.Text style={[styles.readyText,{opacity: fadeAnim}]}> Let's PLay</Animated.Text>
                        ) : (
                            <DisplayResult userChoice={userChoice} computerChoice={computerChoice} />
                        )
                    }
                </View>
                <Action play={play} />

            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    header: {
        flex: 2,
        alignItems: 'center'
    },
    textHeader: {
        padding: 20,
        fontSize: 40,
        fontWeight: 'bold'
    },
    body: {
        flex: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 50
    },

  
    readyText:{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },

})
export default Game;