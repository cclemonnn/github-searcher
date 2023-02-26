import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import RepoList from "../components/repos/RepoList";
import Star from "../components/star/Star";
import { useParams } from "react-router-dom";
import {
  FaSpinner,
  FaGithub,
  FaTwitter,
  FaUsers,
  FaUserFriends,
} from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { VscRepo, VscGist } from "react-icons/vsc";
import u from "./User.module.css";

function User() {
  const { user, getUserData, loading, getUserRepos, repos } =
    useContext(GithubContext);

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
    public_repos,
    public_gists,
    followers,
    following,
  } = user;

  // Get user data and repos once
  useEffect(() => {
    getUserData(params.login);
    getUserRepos(params.login);
  }, []);

  if (loading) {
    return (
      <div className={u.spinnerContainer}>
        <FaSpinner className={u.spinner} />
      </div>
    );
  }

  return (
    <div className={u.container}>
      <div className={u.profileContainer}>
        {/* Star */}
        <Star
          style={{ fontSize: "20px", top: "-3px", left: "0" }}
          login={login}
        />

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
            {name !== null && <div className={u.name}>{name}</div>}
            <div className={u.login}>
              (<i>{login}</i>)
            </div>
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

      {/* Extra Info */}
      <div className={u.extraInfoContainer}>
        <div className={u.outerContainer}>
          <div className={u.innerContainer}>
            <FaUsers className={u.infoIcons} />
            <div className={u.innerText}>Followers</div>
          </div>
          {followers}
        </div>
        <div className={u.outerContainer}>
          <div className={u.innerContainer}>
            <FaUserFriends className={u.infoIcons} />
            <div className={u.innerText}>Following</div>
          </div>
          {following}
        </div>
        <div className={u.outerContainer}>
          <div className={u.innerContainer}>
            <VscRepo className={u.infoIcons} />
            <div className={u.innerText}>Public Repos</div>
          </div>
          {public_repos}
        </div>
        <div className={u.outerContainer}>
          <div className={u.innerContainer}>
            <VscGist className={u.infoIcons} />
            <div className={u.innerText}>Public Gists</div>
          </div>
          {public_gists}
        </div>
      </div>

      {/* Repo List */}
      <RepoList repos={repos} />
    </div>
  );
}
export default User;
