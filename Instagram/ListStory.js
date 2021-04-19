import Story from './story';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { stories } from './mockDataStory'

const ListStory = () => {
    const story = stories.map(item => {
        return (
            <Story avatar={item.avatar}
                title={item.title}
                isCreateStory={item.isCreateStory}
                seenStory={item.seenStory}
                key={item.id}
            />
        )
    })
    return (
        <>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.story}>
                {story}
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    story: {
        paddingVertical: 10,
        backgroundColor: '#FAFAFA',
        borderBottomWidth: 1,
        borderBottomColor: '#92929292',
    }
})
export default ListStory;