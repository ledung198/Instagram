import React from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { } from 'react-native';
import { Feather, AntDesign, FontAwesome } from '@expo/vector-icons';



const NewFeed = ({
    avatar,
    title,
    image,
    likeCount,
    timeCreate
}) => {
    return (
        <>
            <View style={styles.newFeed}>
                <View style={styles.headerNewFeed}>
                    <View style={styles.userAvatar}>
                        <Image style={styles.imageAvatar} source={avatar} />
                        <Text style={styles.userName}>{title}</Text>
                    </View>
                    <View style={styles.ShowMore}>
                        <Feather name="more-horizontal" size={24} color="black" />
                    </View>
                </View>
                <Image style={styles.imageNewFeed} source={image} />
                <View style={styles.reactNewFeed}>
                    <View style={styles.reactList}>
                        <TouchableOpacity>
                            <AntDesign style={styles.iconReact} name="hearto" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome style={styles.iconReact} name="comment-o" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather style={styles.iconReact} name="send" size={24} color="black" style={styles.iconHeader} />
                        </TouchableOpacity>

                    </View>
                    <View style={styles.reactSave}>
                        <FontAwesome name="bookmark-o" size={24} color="black" />
                    </View>
                </View>
                <View style={styles.likeNewFeed}>
                    <Text style={styles.likeCount}>{likeCount} người thích</Text>
                    <Text style={styles.timer}>{timeCreate} giờ trước</Text>
                </View>
            </View>


        </>
    )
}

const styles = StyleSheet.create({
    newFeed: {
        paddingVertical: 20
    },
    headerNewFeed: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    userAvatar: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageAvatar: {
        height: 30,
        width: 30,
        borderRadius: 25
    },
    userName: {
        paddingLeft: 20,
        fontWeight: '600'

    },
    imageNewFeed: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        // paddingVertical: 20
        marginTop: 10
    },
    reactNewFeed: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10

    },
    reactList: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    iconReact: {
        paddingHorizontal: 10
    },
    reactSave: {
        paddingRight: 10
    },
    likeNewFeed: {
        paddingLeft: 10,
        fontWeight: '600'

    },
    likeCount: {
        fontWeight: '600'
    },
    timer: {
        fontSize: 10,
        color: 'grey'
    }

})
export default NewFeed;