import React from "react"; 
import UserPost from "./api/endpoints/UserPost";
import TokenPost from "./api/endpoints/TokenPost";
import './App.css'
import PhotoPost from "./api/endpoints/PhotoPost";

function App() {
  return (
    <div>
      <h2>User Post</h2>
      <UserPost />
      <h2>Token Post</h2>
      <TokenPost /> 
      <h2>Photo Post</h2>
      <PhotoPost />
    </div>
  );
}

export default App;
