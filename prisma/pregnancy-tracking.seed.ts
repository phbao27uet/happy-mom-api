import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const weekData = [
  {
    weekNumber: 1,
    progress: 10,
    description: `Tuần thai 1: Thai nhi đang hình thành các cơ quan và bộ phận.`,
    weight: 0.1,
    height: 0.4,
    headCircumference: 0.2,
  },
  {
    weekNumber: 2,
    progress: 21.28,
    description: `Tuần thai 2: Thai nhi phát triển nhanh chóng, các bộ phận cơ thể dần hình thành.`,
    weight: 0.3,
    height: 0.6,
    headCircumference: 0.4,
  },
  {
    weekNumber: 3,
    progress: 31.91,
    description: `Tuần thai 3: Bắt đầu xuất hiện các bộ phận sinh dục.`,
    weight: 0.7,
    height: 1.0,
    headCircumference: 0.6,
  },
  {
    weekNumber: 4,
    progress: 42.55,
    description: `Tuần thai 4: Thai nhi bắt đầu có hình dáng giống như em bé.`,
    weight: 1.2,
    height: 1.5,
    headCircumference: 1.0,
  },
  {
    weekNumber: 5,
    progress: 53.19,
    description: `Tuần thai 5: Cơ bắp và hệ thần kinh bắt đầu phát triển.`,
    weight: 1.8,
    height: 2.1,
    headCircumference: 1.5,
  },
  {
    weekNumber: 47,
    progress: 100,
    description: `Tuần thai 47: Thai nhi đã sẵn sàng cho việc sinh nở.`,
    weight: 3200.0,
    height: 50.0,
    headCircumference: 35.0,
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
    content: `
      <div style="font-size: 10px; font-weight: 400; line-height: 14px; text-align: left;">
        <h3 style="font-size: 10px; font-weight: 500; line-height: 14px; text-align: left;">Lần 1: Tuần 5–7</h3>
        <p style="font-size: 10px; font-weight: 400; line-height: 14px; text-align: left;">Kiểm tra túi phôi trong buồng tử cung</p>
        <ul style="font-size: 10px; font-weight: 400; line-height: 14px; text-align: left;">
          <li>Siêu âm đầu dò âm đạo hoặc Siêu âm bụng đen trắng</li>
          <li>Khám lâm sàng tổng quát</li>
        </ul>
      </div>`,
    status: false,
  },
  {
    gestationalWeek: '3-4',
    content: `
      <div style="font-size: 10px; font-weight: 400; line-height: 14px; text-align: left;">
        <h3 style="font-size: 10px; font-weight: 500; line-height: 14px; text-align: left;">Lần 2: Tuần 8–10</h3>
        <p style="font-size: 10px; font-weight: 400; line-height: 14px; text-align: left;">Kiểm tra sự phát triển của phôi thai</p>
        <ul style="font-size: 10px; font-weight: 400; line-height: 14px; text-align: left;">
          <li>Siêu âm để nghe tim thai</li>
          <li>Khám sức khỏe tổng quát</li>
        </ul>
      </div>`,
    status: false,
  },
  {
    gestationalWeek: '5-6',
    content: `
      <div style="font-size: 10px; font-weight: 400; line-height: 14px; text-align: left;">
        <h3 style="font-size: 10px; font-weight: 500; line-height: 14px; text-align: left;">Lần 3: Tuần 11–13</h3>
        <p style="font-size: 10px; font-weight: 400; line-height: 14px; text-align: left;">Kiểm tra sự phát triển và dị tật thai nhi</p>
        <ul style="font-size: 10px; font-weight: 400; line-height: 14px; text-align: left;">
          <li>Siêu âm đo độ mờ da gáy</li>
          <li>Xét nghiệm máu</li>
        </ul>
      </div>`,
    status: false,
  },
  {
    gestationalWeek: '7-8',
    content: `
      <div style="font-size: 10px; font-weight: 400; line-height: 14px; text-align: left;">
        <h3 style="font-size: 10px; font-weight: 500; line-height: 14px; text-align: left;">Lần 4: Tuần 14–16</h3>
        <p style="font-size: 10px; font-weight: 400; line-height: 14px; text-align: left;">Kiểm tra phát triển của thai nhi và sức khỏe mẹ</p>
        <ul style="font-size: 10px; font-weight: 400; line-height: 14px; text-align: left;">
          <li>Siêu âm và xét nghiệm máu</li>
          <li>Khám tim mạch cho mẹ</li>
        </ul>
      </div>`,
    status: false,
  },
  {
    gestationalWeek: '9-10',
    content: `
      <div style="font-size: 10px; font-weight: 400; line-height: 14px; text-align: left;">
        <h3 style="font-size: 10px; font-weight: 500; line-height: 14px; text-align: left;">Lần 5: Tuần 17–20</h3>
        <p style="font-size: 10px; font-weight: 400; line-height: 14px; text-align: left;">Kiểm tra toàn diện dị tật và sự phát triển thai nhi</p>
        <ul style="font-size: 10px; font-weight: 400; line-height: 14px; text-align: left;">
          <li>Siêu âm màu 4D</li>
          <li>Đánh giá sức khỏe tổng thể của mẹ</li>
        </ul>
      </div>`,
    status: false,
  },
  {
    gestationalWeek: '46-47',
    content: `
      <div style="font-size: 10px; font-weight: 400; line-height: 14px; text-align: left;">
        <h3 style="font-size: 10px; font-weight: 500; line-height: 14px; text-align: left;">Lần cuối: Tuần 46–47</h3>
        <p style="font-size: 10px; font-weight: 400; line-height: 14px; text-align: left;">Chuẩn bị sinh và kiểm tra cuối cùng trước khi sinh</p>
        <ul style="font-size: 10px; font-weight: 400; line-height: 14px; text-align: left;">
          <li>Siêu âm để xác định vị trí thai nhi</li>
          <li>Đánh giá sức khỏe cuối cùng của mẹ</li>
        </ul>
      </div>`,
    status: false,
  },
];

const getCurrentDate = () => new Date();

async function upsertPregnancyWeek(
  childId: string,
  weekDataItem: (typeof weekData)[number],
) {
  const {
    weekNumber,
    progress,
    description,
    weight,
    height,
    headCircumference,
  } = weekDataItem;

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
      weight,
      height,
      headCircumference,
      updatedAt: getCurrentDate(),
    },
    create: {
      childId,
      weekNumber,
      progress,
      description,
      weight,
      height,
      headCircumference,
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
