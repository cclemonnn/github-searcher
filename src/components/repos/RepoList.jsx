function RepoList({ repos }) {
  return (
    <div>
      {repos.map((repo) => (
        <div>{repo.name}</div>
      ))}
    </div>
  );
}
export default RepoList;
