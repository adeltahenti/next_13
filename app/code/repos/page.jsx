import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

async function fetchGitHubUsers() {
  const response = await fetch('https://api.github.com/users');

  await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second

  const users = await response.json();
  return users;
}

async function fetchRepos() {
  const response = await fetch(
    'https://api.github.com/users/adeltahenti/repos'
  );

  await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second

  const repos = await response.json();
  return repos;
}

async function fetchRepos2(user) {
  const response = await fetch(`https://api.github.com/users/${user}/repos`);

  await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second

  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  // const repos = await fetchRepos();
  const repos = await fetchRepos2('bradtraversy');

  return (
    <div className='repos-container'>
      <h2>Repositories</h2>
      <ul className='repo-list'>
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className='repo-details'>
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
