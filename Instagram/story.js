import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Story = ({ avatar, title, isCreateStory, seenStory }) => {
    if (isCreateStory) {
        return (
            <View >
                <View style={styles.user}>
                    <View style={styles.avatarBorder}>
                        <Image source={avatar} style={styles.logo} />
                    </View>
                    <Text style={styles.name}>{title}</Text>
                    <Ionicons name="add-circle-sharp" size={24} color="#1FA0F0" style={[styles.addStory]} />
                </View>
            </View>
        )
    }
    else if (seenStory) {
        return (
            <>
                <View style={{ flex: 1 }}>
                    <View style={styles.user}>
                        <View style={styles.avatarBorder}>
                            <Image source={avatar} style={styles.logo} />
                        </View>
                        <Text style={styles.name}>{title}</Text>
                    </View>
                </View>
            </>
        )
    }
    else {
        return (
            <>
                <View style={{ flex: 1 }}>
                    <View style={styles.user}>
                        <View style={[styles.avatarBorder, { borderColor: "red" }]}>
                            <Image source={avatar} style={styles.logo} />
                        </View>
                        <Text style={styles.name}>{title}</Text>
                    </View>
                </View>
                {/* <View style={{ flex: 3 }}></View> */}

            </>
        )
    }

}

const styles = StyleSheet.create({
    logo: {
        height: 50,
        width: 50,
        borderRadius: 25,
        padding: 2,
    },
    name: {

    },
    user: {
        paddingHorizontal: 10,
        alignItems: 'center',
        position: 'relative'
    },
    addStory: {
        position: "absolute",
        bottom: 15,
        left: 50,
        // transform: [{ translateX: 25 }],
        // transform: [{ translateY: -50 }]
    },
    avatarBorder: {
        padding: 1,
        borderRadius: 25,
        borderColor: "#FAFAFA",
        borderWidth: 1,
    }

})

export default Story;