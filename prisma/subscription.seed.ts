import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Dữ liệu gói cước
const subscriptions = [
  {
    name: 'Miễn phí',
    price: 0,
    duration: 7,
    features: [
      'Không có quảng cáo',
      'Đồng bộ dữ liệu lên đám mây',
      'Truy cập vào các biểu đồ',
    ],
  },
  {
    name: '1 tháng',
    price: 19000,
    duration: 30,
    features: [
      'Không có quảng cáo',
      'Đồng bộ dữ liệu lên đám mây',
      'Truy cập vào biểu đồ và lịch sử',
    ],
  },
  {
    name: 'Trọn đời',
    price: 499000,
    duration: -1, // Trọn đời
    features: [
      'Không có quảng cáo',
      'Đồng bộ dữ liệu lên đám mây',
      'Truy cập toàn quyền vào biểu đồ và lịch sử',
      'Xuất báo cáo tất cả dữ liệu của bé',
    ],
  },
];

export async function subscriptionSeed() {
  for (const subscription of subscriptions) {
    const { name, price, duration, features } = subscription;

    const upsertedSubscription = await prisma.subscription.upsert({
      where: { name },
      update: {
        price,
        duration,
        features: {
          deleteMany: {},
          create: features.map((description) => ({ description })),
        },
      },
      create: {
        name,
        price,
        duration,
        features: {
          create: features.map((description) => ({ description })),
        },
      },
    });

    console.log(`Upserted Subscription: ${upsertedSubscription.name}`);
  }
}

subscriptionSeed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
