import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    const passwordHash = await bcrypt.hash('example_password', 10);

    const usersSeed = [
        { name: "John Doe", email: "john.doe@example.com", password: passwordHash },
        { name: "Jane Smith", email: "jane.smith@example.com", password: passwordHash },
    ];

    for (const user of usersSeed) {
        await prisma.user.upsert({
            where: { email: user.email },
            update: {},
            create: user,
        });
    }
    
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
