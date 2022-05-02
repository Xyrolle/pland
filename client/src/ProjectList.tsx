import { gql, useQuery } from '@apollo/client';

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

	console.log(loading, error, data);

	if (loading) return <div>loading...</div>;

	return (
		<ul>
			{data.projects.map((project: Project) => (
				<li key={project.id}>
					{project.name} - {project.description} - {project.id}
				</li>
			))}
		</ul>
	);
};

export default ProjectList;
