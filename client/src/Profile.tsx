import { gql, useQuery } from "@apollo/client";
import { useUserContext } from "./Context";

const USER_DETAILS = gql`
	query User($userId: Int!) {
		user(id: $userId) {
			id
			name
			surname
			username
			email
			password
			createdAt
		}
	}
`;

const Profile = () => {
	const { user } = useUserContext()

	const { loading, error, data } = useQuery(USER_DETAILS, { variables: { userId: user?.id } })

	return (
		<div className="profile-container">
			<div>My Profile</div>
			<div>
				{data?.user?.name}
			</div>
			<div>
				{data?.user?.surname}
			</div>
			<div>
				{data?.user?.email}
			</div>
		</div>

	)

};

export default Profile;
