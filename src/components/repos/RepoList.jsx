import { HiExternalLink } from "react-icons/hi";
import r from "./RepoList.module.css";

function RepoList({ repos }) {
  return (
    <div className={r.repoContainer}>
      {repos.length > 0 ? (
        <>
          <div
            className={r.repoTitle}
          >{`Showing Latest ${repos.length} Updated Repos`}</div>
          {repos.map((repo) => (
            <a href={repo.html_url} target="_blank" rel="noreferer">
              <div className={r.innerContaienr}>
                <HiExternalLink className={r.linkIcon} />
                <div className={r.repoName}>{repo.name}</div>
              </div>
            </a>
          ))}
        </>
      ) : (
        <div className={r.noRepo}>
          (<i>No public repo</i>)
        </div>
      )}
    </div>
  );
}
export default RepoList;
