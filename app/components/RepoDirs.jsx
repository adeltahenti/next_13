import Link from 'next/link';

async function fetchRepoContents(userName, name) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://api.github.com/repos/${userName}/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const contents = await response.json();
  return contents;
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents('bradtraversy', name);
  const dirs = contents.filter((content) => content.type === 'dir');

  return (
    <>
      <h3 className='font-bold mb-2 underline'>Directories</h3>
      <ul className='list-disc ml-6'>
        {dirs.map((dir) => (
          <li key={dir.path} className='hover:text-emerald-700 hover:font-bold'>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDirs;
