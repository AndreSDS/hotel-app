import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();
//<RoomContext.Provider value={''hello'} />
class RoomProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
<<<<<<< HEAD
      loading: true,
=======
      loading: true
>>>>>>> 5e4bd2625be605e3260e2790c57f4ebed864c687
    };
    this.formatData = this.formatData.bind(this);
  }

  componentDidMount() {
    let rooms = this.formatData(items);
<<<<<<< HEAD
    let featuredRooms = rooms.filter((room) => room.featured === true);
=======
    let featuredRooms = rooms.filter(room => room.featured === true);
>>>>>>> 5e4bd2625be605e3260e2790c57f4ebed864c687
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
<<<<<<< HEAD
      loading: false,
=======
      loading: false
>>>>>>> 5e4bd2625be605e3260e2790c57f4ebed864c687
    });
  }

  formatData(items) {
<<<<<<< HEAD
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((img) => img.fields.file.url);
=======
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(img => img.fields.file.url);
>>>>>>> 5e4bd2625be605e3260e2790c57f4ebed864c687
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

<<<<<<< HEAD
  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
=======
  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
>>>>>>> 5e4bd2625be605e3260e2790c57f4ebed864c687
    return room;
  };

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
