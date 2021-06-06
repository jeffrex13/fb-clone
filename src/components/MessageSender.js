import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "../MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db from "../firebase"
import firebase from "firebase"

const MessageSender = () => {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // post to db
    db.collection('posts').add({
      message: input, //map message to input
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), //use timestamp within firestore so that it is dynamic
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageURL,
    })

    setInput("");
    setImageURL("")
  };

  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender_input"
            placeholder={`What's on your mind, ${user.displayName}?`}
          />
          <input
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            placeholder="image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <VideocamIcon style={{ color: "red" }} />
          <h5>Live Video</h5>
        </div>

        <div className="messageSender_option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h5>Photo/Video</h5>
        </div>

        <div className="messageSender_option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h5>Feeling/Activity</h5>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
