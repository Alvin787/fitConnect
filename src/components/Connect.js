import React, { useEffect, useState } from "react";
import Card from "./UI/Card";
import axios from "axios";
import styles from "./Profile.module.css";

const Connect = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.chatengine.io/users", {
        headers: { "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY },
      })

      .then((resp) => {
        setUsers(resp.data);
        setLoading(false);
      })

      .catch(console.error);
  }, []);

  return (
    <>
      {loading ? (
        <p>loading</p>
      ) : (
        <div>
          {users.map((users) => {
            return (
              <Card className={styles.main}>
                <div className={styles.general}>
                  <img className={styles.newAvatar} src={users.avatar}></img>
                  <p className={styles.emailThing}>{users.username}</p>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Connect;
