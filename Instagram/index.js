import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
// import { } from 'react-native';
import Header from './header';
import ListNewFeed from './ListNewFeed';
import ListStory from './ListStory'


const Instagram = () => {
    return (
        <>
            <SafeAreaView>
                <StatusBar />
                <Header />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ListStory />
                    <ListNewFeed />
                </ScrollView>
            </SafeAreaView>
        </>
    )
}
export default Instagram;