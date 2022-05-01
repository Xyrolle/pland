import { PrismaClient } from '@prisma/client';
const prismaClient = new PrismaClient();

const main = async () => {
	await prismaClient.user.deleteMany();
	const user = await prismaClient.user.create({
		data: {
			email: 'xyrolle@gmail.com',
			username: 'xyrolle',
			password: '123',
			name: 'Serghei',
			surname: 'Hmeli',
		},
	});

	console.log({ user });

	prismaClient.$disconnect();
};

main();
