<<<<<<< HEAD
import React, { Component } from 'react';
import {RoomContext} from "../context";
import Loading from './Loading';
=======
import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
>>>>>>> 5e4bd2625be605e3260e2790c57f4ebed864c687
import Room from "../components/Room";
import Title from "./Title";

class FeaturedRooms extends Component {
<<<<<<< HEAD

    static contextType = RoomContext;

    render() {
        let {loading,featuredRooms : rooms} = this.context;
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />
        });
        
        return (
            <section className="featured-rooms">
                <Title title="features rooms" />
                <div className="featured-rooms-center">
                    {loading? <Loading /> : rooms}
                </div>
            </section>
        )
    }
}

export default FeaturedRooms
=======
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="features rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
>>>>>>> 5e4bd2625be605e3260e2790c57f4ebed864c687
