import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import { UidContext } from "./components/AppContext";
import Cookies from "universal-cookie";
import axios from "axios";
const cookies = new Cookies();

function App() {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    if (uid === null) setUid(cookies.get("userConnect"));

    if (uid) axios
      .get(`${process.env.REACT_APP_API_URL}/api/user/${uid}`, {
        withCredentials: true,
      })
      .then((res) => {
        setUid(res.data);
        console.log(uid);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [uid]);

  return (
    <UidContext.Provider value={uid}>
      <Navigation />
    </UidContext.Provider>
  );
}

export default App;
