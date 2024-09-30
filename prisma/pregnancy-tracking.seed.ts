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
    gestationalWeek: '1-2',
    content: `Khám thai tuần 1-2: Kiểm tra sự phát triển của thai nhi.`,
    status: false,
  },
  {
    gestationalWeek: '3-4',
    content: `Khám thai tuần 3-4: Kiểm tra sự phát triển của thai nhi.`,
    status: false,
  },
  {
    gestationalWeek: '5-6',
    content: `Khám thai tuần 5-6: Kiểm tra sự phát triển của thai nhi.`,
    status: false,
  },
  {
    gestationalWeek: '7-8',
    content: `Khám thai tuần 7-8: Kiểm tra sự phát triển của thai nhi.`,
    status: false,
  },
  {
    gestationalWeek: '9-10',
    content: `Khám thai tuần 9-10: Kiểm tra sự phát triển của thai nhi.`,
    status: false,
  },
  {
    gestationalWeek: '46-47',
    content: `Khám thai tuần 46-47: Kiểm tra sự phát triển của thai nhi.`,
    status: false,
  },
];

const getCurrentDate = () => new Date();

async function upsertPregnancyWeek(
  childId: string,
  weekDataItem: (typeof weekData)[number],
) {
  const { weekNumber, progress, description } = weekDataItem;

  await prisma.pregnancyWeek.upsert({
    where: {
      childId_weekNumber: {
        childId,
        weekNumber,
      },
    },
    update: {
      progress,
      description,
      updatedAt: getCurrentDate(),
    },
    create: {
      childId,
      weekNumber,
      progress,
      description,
      createdAt: getCurrentDate(),
      updatedAt: getCurrentDate(),
    },
  });
}

async function upsertPregnancyWeekDetail(childId: string, weekNumber: number) {
  const detail = weekDetailData.find((d) => d.weekNumber === weekNumber);
  if (detail) {
    await prisma.pregnancyWeekDetail.upsert({
      where: {
        childId_weekNumber: {
          childId,
          weekNumber,
        },
      },
      update: {
        description: detail.description,
        updatedAt: getCurrentDate(),
      },
      create: {
        childId,
        weekNumber,
        description: detail.description,
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
      },
    });
  }
}

async function upsertAppointment(childId: string, gestationalWeek: string) {
  const appointment = appointmentData.find(
    (a) => a.gestationalWeek === gestationalWeek,
  );
  if (appointment) {
    await prisma.appointment.upsert({
      where: {
        childId_gestationalWeek: {
          childId,
          gestationalWeek,
        },
      },
      update: {
        content: appointment.content,
        status: appointment.status,
        updatedAt: getCurrentDate(),
      },
      create: {
        childId,
        gestationalWeek,
        content: appointment.content,
        status: appointment.status,
        createdAt: getCurrentDate(),
        updatedAt: getCurrentDate(),
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
      await upsertPregnancyWeekDetail(child.id, week.weekNumber);

      const correspondingAppointment = appointmentData.find((a) =>
        a.gestationalWeek
          .split('-')
          .some((wk) => parseInt(wk) === week.weekNumber),
      );
      if (correspondingAppointment) {
        await upsertAppointment(
          child.id,
          correspondingAppointment.gestationalWeek,
        );
      }
    }
  }

  console.log('Pregnancy tracking seed completed.');
}
