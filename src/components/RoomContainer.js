import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';

function RoomContainer() {
    return (
        <div>
            hello from romms container
            <RoomsFilter />
            <RoomsList />
        </div>
    )
}

export default RoomContainer;
