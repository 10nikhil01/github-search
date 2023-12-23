import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState("");

  const searchUser = () => {
    fetch("https://api.github.com/users/" + username)
      .then((res) => res.json())
      .then((data) => setUserData(data));
    console.log(userData);
    setUsername("");
  };
  return (
    <div className="App">
      <div className="form">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => searchUser()}>Search</button>
      </div>
      {userData.message ? (
        <div>
          <p>{userData.message}</p>
        </div>
      ) : (
        userData &&
        !userData.message && (
          <div className="userDetailCard">
            <div className="userDetailBody">
              <p className="name">{userData.name}</p>
              <em className="username">{userData.login}</em>
              <div className="follow">
                <p>Followers : {userData.followers}</p>
                <p>Following : {userData.following}</p>
              </div>
              <div className="profDetail">
                <p>🏢 {userData.company}</p>
                <p>🗒️ {userData.bio}</p>
              </div>
            </div>
            <div className="userImage">
              <img src={userData.avatar_url} alt="avatar" />
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default App;
