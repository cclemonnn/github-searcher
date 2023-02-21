import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import u from "./User.module.css";

function User() {
  const { user, getUserData, loading } = useContext(GithubContext);

  // Get login param
  const params = useParams();

  // User items
  const { name, login, avatar_url, email, bio } = user;

  // Get user data once
  useEffect(() => {
    getUserData(params.login);
  }, []);

  if (loading) {
    return (
      <div className={u.spinnerContainer}>
        <FaSpinner className={u.spinner} />
      </div>
    );
  }

  return (
    <div className={u.profileContainer}>
      <figure className={u.avatar}>
        <img src={avatar_url} alt="user avatar" />
        <figcaption>hover for more information</figcaption>
      </figure>
      <div className={u.profileInfo}>
        {/* Name */}
        <div className={u.nameContainer}>
          {name !== null && <span className={u.name}>{name}&nbsp;&nbsp;</span>}
          <span className={u.login}>
            (<i>{login}</i>)
          </span>
        </div>

        {/* Email */}
        <div className={u.emailContainer}>
          <MdEmail className={u.emailIcon} />
          {email !== null ? (
            <span className={u.emailAddress}>{email}</span>
          ) : (
            <span className={u.noEmail}>
              (<i>Email not provided</i>)
            </span>
          )}
        </div>

        {/* User bio */}
        <div className={u.bioContainer}>
          <div className={u.aboutMe}>About Me:</div>
          {bio !== null ? (
            <div className={u.bio}>{bio}</div>
          ) : (
            <div className={u.noBio}>
              (<i>No bio provided</i>)
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default User;
