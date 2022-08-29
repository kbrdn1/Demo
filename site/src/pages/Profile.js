import React, { useContext } from "react";
import { UidContext } from '../components/AppContext';

const Profile = () => {
    const user = useContext(UidContext);

    return (
      <div>
        {user ? (
          <>
            <h1>Bonjour {user.pseudo},</h1>
            <ul>
              <li>
                            <span>email: </span> {user.email}
                            <br />
              </li>
                    </ul>
                    <a href="/logout">
                        <button>Logout</button>
                    </a>
          </>
        ) : (
          <h1>Vous n'êtes pas connecté</h1>
        )}
      </div>
    );
};

export default Profile;