import React, { useEffect, useState } from "react";
import "../Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import db from "../firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))) //doc.id and doc.data can be found in cloud firestore
    ); //doc.id and doc.data are pulled from cloud firestore
  }, []); //realtime database connection

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
};

export default Feed;

{
  /* <Post
profilePic="https://pbs.twimg.com/profile_images/1348263265009164288/AJoeWyHD_400x400.jpg"
message="Wow it actually works!"
timestamp="This is a timestamp"
username="itsyaboijepoy"
image="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"
/>
<Post profilePic="" message="" timestamp="" username="" image="" />
<Post profilePic="" message="" timestamp="" username="" image="" /> */
}
