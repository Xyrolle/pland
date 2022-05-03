import { gql, useQuery } from '@apollo/client';
import { useMantineColorScheme } from '@mantine/core';
import { useCallback } from 'react';
import { ColorSchemeValue } from './constants';

const getProjectsQuery = gql`
	{
		projects {
			id
			name
			description
		}
	}
`;

interface Project {
	id: number;
	name: string;
	description: string;
}

const ProjectList = () => {
	const { loading, error, data } = useQuery(getProjectsQuery);

	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	const changePrefferedColorScheme = useCallback(() => {
		const nextColorScheme = colorScheme === ColorSchemeValue.dark ? ColorSchemeValue.light : ColorSchemeValue.dark;
		localStorage.setItem('theme', nextColorScheme);
		toggleColorScheme();
	}, [colorScheme])

	console.log(loading, error, data);

	if (loading) return <div>loading...</div>;

	return (
		<ul>
			{data?.projects.map((project: Project) => (
				<li key={project.id}>
					{project.name} - {project.description} - {project.id}
				</li>
			))}
			<button onClick={changePrefferedColorScheme}>toggle color scheme</button>
		</ul>
	);
};

export default ProjectList;
