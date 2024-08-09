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

  await prisma.group.upsert({
    where: {
      name: 'Group 1',
    },
    update: {},
    create: {
      name: 'Group 1',
      description: 'Description of Group 1',
      background: 'https://source.unsplash.com/random',
    },
  });

  await prisma.group.upsert({
    where: {
      name: 'Group 2',
    },
    update: {},
    create: {
      name: 'Group 2',
      description: 'Description of Group 2',
      background: 'https://source.unsplash.com/random',
    },
  });

  await prisma.group.upsert({
    where: {
      name: 'Group 3',
    },
    update: {},
    create: {
      name: 'Group 3',
      description: 'Description of Group 3',
      background: 'https://source.unsplash.com/random',
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
