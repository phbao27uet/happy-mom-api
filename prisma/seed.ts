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

  await prisma.category.upsert({
    where: {
      name: 'Chưa có thai',
    },
    create: {
      name: 'Chưa có thai',
      subCategories: {
        createMany: {
          data: [
            {
              name: 'Di truyền và giới tính',
              image: 'https://source.unsplash.com/random',
            },
            {
              name: 'Tâm lý & sức khoẻ',
              image: 'https://source.unsplash.com/random',
            },
          ],
        },
      },
    },
    update: {},
  });

  await prisma.category.upsert({
    where: {
      name: 'Đang mang thai',
    },
    create: {
      name: 'Đang mang thai',
      subCategories: {
        createMany: {
          data: [
            {
              name: 'Thai nhi theo tuần tuổi',
              image: 'https://source.unsplash.com/random',
            },
            {
              name: 'Thay đổi của mẹ',
              image: 'https://source.unsplash.com/random',
            },
          ],
        },
      },
    },
    update: {},
  });

  await prisma.category.upsert({
    where: {
      name: 'Nuôi con nhỏ',
    },
    create: {
      name: 'Nuôi con nhỏ',
      subCategories: {
        createMany: {
          data: [
            {
              name: 'Trẻ sơ sinh',
              image: 'https://source.unsplash.com/random',
            },
            {
              name: 'Thuốc và tiêm phòng',
              image: 'https://source.unsplash.com/random',
            },
            {
              name: 'Bệnh thường gặp',
              image: 'https://source.unsplash.com/random',
            },
          ],
        },
      },
    },
    update: {},
  });

  await prisma.article.upsert({
    where: {
      id: '66d0a109f12e64855b2e2531',
    },
    create: {
      id: '66d0a109f12e64855b2e2531',
      title: 'Bé sơ sinh tuần thứ 1',
      content: 'Nội dung bí quyết chăm sóc trẻ sơ sinh',
      subCategory: {
        connect: {
          id: '66d05c0e4830214de6dc4483',
        },
      },
      description:
        'Sự phát triển và những điều cần chú ý khi nuôi dưỡng bé sơ sinh 1 tuần tuổi.',
      thumbnail:
        'https://pub-402f41e20b984c66a583408bb7b47aeb.r2.dev/1706770133_avatar_1706770133%201.png',
    },
    update: {},
  });

  await prisma.article.upsert({
    where: {
      id: '66d0a109f12e64855b2e2533',
    },
    create: {
      id: '66d0a109f12e64855b2e2533',
      title: 'Bé sơ sinh tuần thứ 2',
      content: 'Nội dung bí quyết chăm sóc trẻ sơ sinh',
      subCategory: {
        connect: {
          id: '66d05c0e4830214de6dc4483',
        },
      },
      description:
        'Sự phát triển và những điều cần chú ý khi nuôi dưỡng bé sơ sinh 2 tuần tuổi.',
      thumbnail:
        'https://pub-402f41e20b984c66a583408bb7b47aeb.r2.dev/1706770133_avatar_1706770133%201.png',
    },
    update: {},
  });

  await prisma.article.upsert({
    where: {
      id: '66d0a109f12e64855b2e2534',
    },
    create: {
      id: '66d0a109f12e64855b2e2534',
      title: 'Bé sơ sinh tuần thứ 3',
      content: 'Nội dung bí quyết chăm sóc trẻ sơ sinh',
      subCategory: {
        connect: {
          id: '66d05c0e4830214de6dc4483',
        },
      },
      description:
        'Sự phát triển và những điều cần chú ý khi nuôi dưỡng bé sơ sinh 3 tuần tuổi.',
      thumbnail:
        'https://pub-402f41e20b984c66a583408bb7b47aeb.r2.dev/1706770133_avatar_1706770133%201.png',
    },
    update: {},
  });

  await prisma.article.upsert({
    where: {
      id: '66d0a109f12e64855b2e2532',
    },
    create: {
      id: '66d0a109f12e64855b2e2532',
      title: 'Bài 1: Di truyền nhóm máu',
      content: 'Nội dung bí quyết chăm sóc trẻ sơ sinh',
      subCategory: {
        connect: {
          id: '66d05c0d4830214de6dc4480',
        },
      },
      description:
        'Di truyền nhóm máu có quy luật hơn so với di truyền về ngoại hình và cũng dễ suy đoán...',
      thumbnail:
        'https://pub-402f41e20b984c66a583408bb7b47aeb.r2.dev/1706770133_avatar_1706770133%201.png',
    },
    update: {},
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
