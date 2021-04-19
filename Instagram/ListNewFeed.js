import NewFeed from './newFeed'
import React from 'react';
import {DataNewFeed} from './mockDataNewFeed'
const ListNewFeed = () => {
    const data = DataNewFeed.map(item => {
        return (
            <NewFeed
                avatar={item.avatar}
                title={item.title}
                image={item.image}
                likeCount={item.likeCount}
                timeCreate={item.timeCreate}
                key={item.id}
            />
        )
    })
    return (
        <>
            {data}
        </>
    )
}
export default ListNewFeed;