import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";
import { FaSpinner, FaGithub, FaTwitter } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import u from "./User.module.css";

function User() {
  const { user, getUserData, loading } = useContext(GithubContext);

  // Get login param
  const params = useParams();

  // User items
  const {
    name,
    login,
    avatar_url,
    email,
    bio,
    html_url,
    twitter_username,
    blog,
  } = user;

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
      {/* Avatar */}
      <figure className={u.avatarContainer}>
        <img src={avatar_url} alt="user avatar" className={u.avatar} />
        <figcaption>hover for more information</figcaption>
        <div className={u.overlayContainer}>
          <div className={u.twitterContainer}>
            <FaTwitter className={u.twitterIcon} />
            {twitter_username !== null ? (
              <a
                href={`https://twitter.com/${twitter_username}`}
                target="_blank"
                rel="noreferrer"
              >
                <div className={u.twitter}>{twitter_username}</div>
              </a>
            ) : (
              <div className={u.noTwitter}>
                (<i>Twitter not provided</i>)
              </div>
            )}
          </div>
          <div className={u.blogContainer}>
            <CgWebsite className={u.blogIcon} />
            {blog !== "" ? (
              <div className={u.blog}>{blog}</div>
            ) : (
              <div className={u.noBlog}>
                (<i>Blog not provided</i>)
              </div>
            )}
          </div>
        </div>
      </figure>

      {/* Profile Info */}
      <div className={u.profileInfo}>
        {/* Name */}
        <div className={u.nameContainer}>
          {name !== null && <span className={u.name}>{name}&nbsp;</span>}
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

        {/* Github link */}
        <div className={u.gitContainer}>
          <FaGithub className={u.gitIcon} />
          <a href={html_url} target="_blank" rel="noreferrer">
            <div className={u.gitText}>Visit Github Page</div>
          </a>
        </div>

        {/* User bio */}
        <div className={u.bioContainer}>
          <div className={u.aboutMe}>About Me:</div>
          {bio !== null ? (
            <div className={u.bio}>{bio}</div>
          ) : (
            <div className={u.noBio}>
              (<i>Bio not provided</i>)
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default User;
