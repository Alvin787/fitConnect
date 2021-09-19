import React, { useEffect, useState } from "react";
import Card from "./UI/Card";
import styles from "./Profile.module.css";
import axios from "axios";
import styles1 from "./UI/profileStats.module.css";

const Profile = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [age, setAge] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("");

  useEffect(() => {
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: { "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY },
        header: 'Project-ID: {{project_id}}',
        header: 'User-Name: {{user_name}}', 
        header: 'User-Secret: {{user_secret}}'
      })

      .then((resp) => {
        setUser(resp.data);
        setLoading(false);
      })

      .catch(console.error);
  }, []);

  const ageHandler = (event) => {
    setAge(event.target.value);
  };
  const pronounsHandler = (event) => {
    setPronouns(event.target.value);
  };
  const weightHandler = (event) => {
    setWeight(event.target.value);
  };
  const goalHandler = (event) => {
    setGoal(event.target.value);
  };


  return (
    <>
      <Card className={styles.main}>
        {loading ? (
          <p>loading</p>
        ) : (
          <div className={styles.align}>
            <img className={styles.image} src={user.avatar} ></img>
            <p className={styles.username}>{user.username}</p>
            <p className={styles.age}>Age:{age}</p>
            <p className={styles.pronouns}>Pronouns:{pronouns}</p>
            <p className={styles.weight}>Weight:{weight} kg</p>
            <p className={styles.goal}>My goal:{goal}</p>
          </div>
        )}
      </Card>
      <Card className={styles1.input}>
        <form>
          <label htmlFor="age">
            Age:
            <input id="age" type="number" onChange={ageHandler} value={age} />
          </label>
        </form>

        <form>
          <label htmlFor="pronouns">
            Pronouns:
            <select id="pronouns" onChange={pronounsHandler} value={pronouns}>
              <option value="select">select</option>
              <option value="he/him">he/him</option>
              <option value="she/her">she/her</option>
              <option value="other">other</option>
            </select>
            
          </label>
        </form>

        <form>
          <label htmlFor="weight">
            Weight (lbs):
            <input id="weight" type="number" onChange={weightHandler} value={weight} />
          </label>
        </form>

        <form>
          <label htmlFor="goal">
            Goal:
            <input id="goal" type="text" onChange={goalHandler} value={goal} />
          </label>
        </form>
      </Card>
    </>
  );
};

export default Profile;
