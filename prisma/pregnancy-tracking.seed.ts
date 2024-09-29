import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const unbornChildren = await prisma.child.findMany({
    where: {
      status: 'UNBORN',
    },
  });

  const pregnancyWeeks = [
    {
      weekNumber: 30,
      progress: 70,
      description:
        'Vào tuần thai thứ ba mươi, thai nhi có kích thước bằng một bắp cải, khoảng 1,396 kg. Mặc dù vòng bụng căng tròn như có cả một quả dưa bên trong, chiều dài của thai nhi tầm khoảng 40.5 cm. Khi thai nhi phát triển, lượng nước ối sẽ bị giảm, đây là một dấu hiệu tốt của sự tăng trưởng bình thường.',
    },
  ];

  const pregnancyWeekDetails = [
    {
      weekNumber: 45,
      description:
        'Thời điểm bây giờ, trẻ đã thành thục hoàn thiện các kỹ năng vận động tinh của mình...',
    },
  ];

  const appointments = [
    {
      weekNumber: 5,
      content:
        'Lần 1: Tuần 5-7 Kiểm tra túi phôi trong buồn tử cung Siêu âm đầu dò âm đạo hoặc Siêu âm bụng đen trắng',
      status: true,
    },
  ];

  for (const child of unbornChildren) {
    for (const week of pregnancyWeeks) {
      await prisma.pregnancyWeek.create({
        data: {
          ...week,
          childId: child.id,
        },
      });
    }

    for (const detail of pregnancyWeekDetails) {
      await prisma.pregnancyWeekDetail.create({
        data: {
          ...detail,
          childId: child.id,
        },
      });
    }

    for (const appointment of appointments) {
      await prisma.appointment.create({
        data: {
          ...appointment,
          childId: child.id,
        },
      });
    }
  }

  console.log(
    'Seed data for pregnancy tracking has been added for UNBORN children.',
  );
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
