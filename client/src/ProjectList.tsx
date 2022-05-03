import { gql, useQuery } from '@apollo/client';

import ProjectCard from './ProjectCard';

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

	if (loading) return <div>loading...</div>;

	return (
		<div className="project-list">
			{data?.projects.map((project: Project) => (
				<ProjectCard key={project.id} title={project.name} description={project.description} tag="IT" />
			))}
		</div>
	);
};

export default ProjectList;
