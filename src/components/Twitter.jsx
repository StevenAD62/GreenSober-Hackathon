import React, { Component } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

class Twitter extends Component {
  render() {
    return (
      <div>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="sobergreen"
          options={{ height: 600 }}
        />
      </div>
    );
  }
}

export default Twitter;
