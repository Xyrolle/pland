import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import { ColorSchemeValue } from './constants';

type Props = {
	title: string
	description: string
	tag: string
}

const ProjectCard = ({ title, description, tag }: Props) => {
	const theme = useMantineTheme();

	const secondaryColor = theme.colorScheme === ColorSchemeValue.dark
		? theme.colors.dark[1]
		: theme.colors.gray[7];

	return (
		<div style={{ width: 340 }}>
			<Card shadow="sm" p="lg">
				<Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
					<Text weight={500}>{title}</Text>
					<Badge color="pink" variant="light">
						#{tag}
					</Badge>
				</Group>

				<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
					{description}
				</Text>
			</Card>
		</div>
	)
}

export default ProjectCard