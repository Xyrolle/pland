import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const main = async () => {
	await prisma.user.deleteMany();
	const user = await prisma.user.create({
		data: {
			email: 'xyrolle@gmail.com',
			username: 'xyrolle',
			password: '123',
			name: 'Serghei',
			surname: 'Hmeli',
		},
	});

	console.log({ user });

	prisma.$disconnect();
};

main();
