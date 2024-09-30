import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const weekData = [
  {
    weekNumber: 1,
    progress: 10,
    description: `Tuần thai 1: Thai nhi đang hình thành các cơ quan và bộ phận.`,
  },
  {
    weekNumber: 2,
    progress: 21.28,
    description: `Tuần thai 2: Thai nhi phát triển nhanh chóng, các bộ phận cơ thể dần hình thành.`,
  },
  {
    weekNumber: 3,
    progress: 31.91,
    description: `Tuần thai 3: Bắt đầu xuất hiện các bộ phận sinh dục.`,
  },
  {
    weekNumber: 4,
    progress: 42.55,
    description: `Tuần thai 4: Thai nhi bắt đầu có hình dáng giống như em bé.`,
  },
  {
    weekNumber: 5,
    progress: 53.19,
    description: `Tuần thai 5: Cơ bắp và hệ thần kinh bắt đầu phát triển.`,
  },
  {
    weekNumber: 47,
    progress: 100,
    description: `Tuần thai 47: Thai nhi đã sẵn sàng cho việc sinh nở.`,
  },
];

const weekDetailData = [
  {
    weekNumber: 1,
    description: `Tuần 1: Thai nhi đang trong giai đoạn hình thành.`,
  },
  { weekNumber: 2, description: `Tuần 2: Các cơ quan bắt đầu phát triển.` },
  {
    weekNumber: 3,
    description: `Tuần 3: Bắt đầu xuất hiện các bộ phận sinh dục.`,
  },
  {
    weekNumber: 4,
    description: `Tuần 4: Thai nhi đã có hình dáng giống như em bé.`,
  },
  {
    weekNumber: 5,
    description: `Tuần 5: Hệ thần kinh và cơ bắp bắt đầu phát triển.`,
  },
  {
    weekNumber: 47,
    description: `Tuần 47: Thai nhi đã sẵn sàng cho việc sinh nở.`,
  },
];

const appointmentData = [
  {
    weekNumber: 1,
    content: `Khám thai tuần 1: Kiểm tra sự phát triển của thai nhi.`,
    status: false,
  },
  {
    weekNumber: 2,
    content: `Khám thai tuần 2: Kiểm tra sự phát triển của thai nhi.`,
    status: false,
  },
  {
    weekNumber: 3,
    content: `Khám thai tuần 3: Kiểm tra sự phát triển của thai nhi.`,
    status: false,
  },
  {
    weekNumber: 4,
    content: `Khám thai tuần 4: Kiểm tra sự phát triển của thai nhi.`,
    status: false,
  },
  {
    weekNumber: 5,
    content: `Khám thai tuần 5: Kiểm tra sự phát triển của thai nhi.`,
    status: false,
  },
  {
    weekNumber: 47,
    content: `Khám thai tuần 47: Kiểm tra sự phát triển của thai nhi.`,
    status: false,
  },
];

async function upsertPregnancyWeek(
  childId: string,
  week: (typeof weekData)[0],
) {
  await prisma.pregnancyWeek.upsert({
    where: {
      childId_weekNumber: { childId, weekNumber: week.weekNumber },
    },
    update: { ...week, childId, createdAt: new Date(), updatedAt: new Date() },
    create: { ...week, childId, createdAt: new Date(), updatedAt: new Date() },
  });
}

async function upsertPregnancyWeekDetail(
  childId: string,
  week: (typeof weekData)[0],
) {
  const detail = weekDetailData.find((d) => d.weekNumber === week.weekNumber);
  if (detail) {
    await prisma.pregnancyWeekDetail.upsert({
      where: {
        childId_weekNumber: { childId, weekNumber: week.weekNumber },
      },
      update: {
        ...detail,
        childId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      create: {
        ...detail,
        childId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }
}

async function upsertAppointment(childId: string, week: (typeof weekData)[0]) {
  const appointment = appointmentData.find(
    (a) => a.weekNumber === week.weekNumber,
  );
  if (appointment) {
    await prisma.appointment.upsert({
      where: {
        childId_weekNumber: { childId, weekNumber: week.weekNumber },
      },
      update: {
        ...appointment,
        childId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      create: {
        ...appointment,
        childId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }
}

export async function pregnancyTrackingSeed() {
  const unbornChildren = await prisma.child.findMany({
    where: { status: 'UNBORN' },
  });

  for (const child of unbornChildren) {
    for (const week of weekData) {
      await upsertPregnancyWeek(child.id, week);
      await upsertPregnancyWeekDetail(child.id, week);
      await upsertAppointment(child.id, week);
    }
  }

  console.log('Pregnancy tracking seed completed.');
}
