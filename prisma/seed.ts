import { PrismaClient } from '@prisma/client';
import { hashPassword } from 'src/shared/utils/hash';

const prisma = new PrismaClient();

async function main() {
  const password = await hashPassword('123123a');

  await prisma.account.upsert({
    where: {
      username: 'admin@gmail.com',
    },
    update: {},
    create: {
      username: 'admin@gmail.com',
      password,
      role: 'ADMIN',
    },
  });

  await prisma.account.upsert({
    where: {
      username: 'netbase@gmail.com',
    },
    update: {},
    create: {
      username: 'netbase@gmail.com',
      password,
      role: 'USER',
    },
  });

  console.log('seed success');
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
