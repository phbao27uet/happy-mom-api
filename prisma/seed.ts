import { GuidelineType, PrismaClient } from '@prisma/client';
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

  const category_1 = await prisma.category.upsert({
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
    include: {
      subCategories: true,
    },
  });

  const category_2 = await prisma.category.upsert({
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
    include: {
      subCategories: true,
    },
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
          id: category_1.subCategories[0].id,
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
          id: category_1.subCategories[0].id,
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
          id: category_1.subCategories[0].id,
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
          id: category_2.subCategories[0].id,
        },
      },
      description:
        'Di truyền nhóm máu có quy luật hơn so với di truyền về ngoại hình và cũng dễ suy đoán...',
      thumbnail:
        'https://pub-402f41e20b984c66a583408bb7b47aeb.r2.dev/1706770133_avatar_1706770133%201.png',
    },
    update: {},
  });

  const foodCategories = await Promise.all([
    prisma.foodCategory.upsert({
      where: { name: 'Ngũ cốc nguyên hạt' },
      update: {},
      create: {
        name: 'Ngũ cốc nguyên hạt',
        imageUrl:
          'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/11/9/veggies-1667967142376-1667967142662941776652.jpg',
      },
    }),
    prisma.foodCategory.upsert({
      where: { name: 'Rau củ' },
      update: {},
      create: {
        name: 'Rau củ',
        imageUrl:
          'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/11/9/veggies-1667967142376-1667967142662941776652.jpg',
      },
    }),
    prisma.foodCategory.upsert({
      where: { name: 'Gia vị' },
      update: {},
      create: {
        name: 'Gia vị',
        imageUrl:
          'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/11/9/veggies-1667967142376-1667967142662941776652.jpg',
      },
    }),
    prisma.foodCategory.upsert({
      where: { name: 'Các loại hạt' },
      update: {},
      create: {
        name: 'Các loại hạt',
        imageUrl:
          'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/11/9/veggies-1667967142376-1667967142662941776652.jpg',
      },
    }),
    prisma.foodCategory.upsert({
      where: { name: 'Trái cây' },
      update: {},
      create: {
        name: 'Trái cây',
        imageUrl:
          'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/11/9/veggies-1667967142376-1667967142662941776652.jpg',
      },
    }),
  ]);

  // Seed Foods with Guidelines
  await prisma.food.upsert({
    where: { name: 'Gạo lứt' },
    update: {},
    create: {
      name: 'Gạo lứt',
      description: 'Gạo lứt là loại ngũ cốc nguyên hạt, giàu dinh dưỡng.',
      imageUrl:
        'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/11/9/veggies-1667967142376-1667967142662941776652.jpg',
      foodCategoryId: foodCategories[0].id, // Ngũ cốc nguyên hạt
      guidelines: {
        create: [
          {
            name: 'Mang thai',
            type: GuidelineType.CAN_EAT,
            description: 'Gạo lứt có thể ăn, tốt cho sức khỏe.',
          },
          {
            name: 'Hậu sản',
            type: GuidelineType.CAN_EAT_NOT_RECOMMENDED,
            description: 'Ăn gạo lứt nhiều có thể gây khó tiêu.',
          },
        ],
      },
    },
  });

  await prisma.food.upsert({
    where: { name: 'Cà rốt' },
    update: {},
    create: {
      name: 'Cà rốt',
      description: 'Cà rốt giàu vitamin A, tốt cho mắt và da.',
      imageUrl:
        'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/11/9/veggies-1667967142376-1667967142662941776652.jpg',
      foodCategoryId: foodCategories[1].id, // Rau củ
      guidelines: {
        create: [
          {
            name: 'Mang thai',
            type: GuidelineType.CAN_EAT,
            description: 'Có thể ăn cà rốt, tốt cho sức khỏe.',
          },
          {
            name: 'Hậu sản',
            type: GuidelineType.SHOULD_NOT_EAT,
            description: 'Không nên ăn quá nhiều cà rốt, có thể gây vàng da.',
          },
        ],
      },
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
