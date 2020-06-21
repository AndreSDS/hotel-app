import React, { Component } from "react";
import Hero from "../components/Hero";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context;";

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: this.props.
    };
  }

  static contextType = RoomContext;

  componentDidMount() {}

  render() {
    const {getRoom} = this.context;
    const room = getRoom(this.state.slug);
    return <div></div>;
  }
}

export default SingleRoom;
