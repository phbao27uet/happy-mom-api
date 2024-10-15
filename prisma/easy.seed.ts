import { PrismaClient } from '@prisma/client'
import { differenceInMinutes } from 'date-fns'

const prisma = new PrismaClient()

async function main() {
  const admin = await prisma.account.findUniqueOrThrow({
    where: {
      username: 'admin@gmail.com',
    },
  })

  await prisma.easy.upsert({
    where: {
      creatorId_name: {
        name: 'E.A.S.Y 3',
        creatorId: admin.id,
      },
    },
    update: {},
    create: {
      name: 'E.A.S.Y 3',
      startWeek: 0,
      endWeek: 6,
      note: 'Độ tuổi được áp dụng: Khi bé được khoảng 0-6 tuần: Mẹ có thể bắt đầu áp dụng EASY 3 sau khi bé được khoảng 2 tuần tuổi và có cân nặng trung bình từ từ 2.9 kg trở lên. Các bé sinh non dưới 28 tuần sẽ cần đạt đủ số cân nặng trung bình, và cần đưa về tuổi hiệu chỉnh (tức tuổi trên ngày dự kiến sinh) thì mới áp dụng E.A.S.Y.\n\nĂn: Mỗi cữ bú cách nhau khoảng 2.5-3 giờ, bé được ăn ngay sau khi ngủ dậy, bé bú một cữ mất khoảng 20-40 phút.\n\nHoạt động: Sau khi ăn xong bé được ợ hơi kỹ, được thay bỉm và mẹ quan sát tín hiệu để thực hiện trình tự ngủ cho bé. Tổng thời gian để bé hoạt động, bao gồm cả thực hiện trình tự ngủ khá ngắn chỉ khoảng 20-30 phút.\n\nNgủ: Bé ngủ 4 giấc ngày bao gồm 3 giấc dài 1.5-2h và 1 giấc ngắn cuối ngày từ 30-40 phút. Bé ngủ đêm 11-13 giờ và thời gian thức trước các giấc ngủ của bé là 45-60 phút.',
      type: 'DEFAULT',
      creatorId: admin.id,
      easyActivityGroups: {
        create: [
          // TODO: #1
          {
            name: 'E.A.S.Y 3 - 1',
            easyActivities: {
              createMany: {
                data: [
                  {
                    startTime: new Date('2021-01-01T07:00:00Z'),
                    endTime: new Date('2021-01-01T07:45:00Z'),
                    duration: 45,
                    type: ['EAT'],
                    note: 'Ngủ dạy và ĂN',
                  },
                  {
                    startTime: new Date('2021-01-01T07:45:00Z'),
                    endTime: new Date('2021-01-01T08:00:00Z'),
                    duration: 15,
                    type: ['ACTIVITY'],
                    note: 'Thay bỉm và CHƠI',
                  },
                  {
                    startTime: new Date('2021-01-01T08:00:00Z'),
                    endTime: new Date('2021-01-01T10:00:00Z'),
                    duration: 120,
                    type: ['SLEEP'],
                    note: 'Bé NGỦ giấc ngày #1',
                  },
                  {
                    startTime: new Date('2021-01-01T08:00:00Z'),
                    endTime: new Date('2021-01-01T10:00:00Z'),
                    duration: 120,
                    type: ['YOUR_TIME'],
                    note: 'Thời gian của mẹ',
                  },
                ],
              },
            },
          },
          // TODO: #2
          {
            name: 'E.A.S.Y 3 - 2',
            easyActivities: {
              createMany: {
                data: [
                  {
                    startTime: new Date('2021-01-01T10:00:00Z'),
                    endTime: new Date('2021-01-01T10:45:00Z'),
                    duration: 45,
                    type: ['EAT'],
                    note: 'Ngủ dạy và ĂN',
                  },
                  {
                    startTime: new Date('2021-01-01T10:45:00Z'),
                    endTime: new Date('2021-01-01T11:00:00Z'),
                    duration: 15,
                    type: ['ACTIVITY'],
                    note: 'Thay bỉm và CHƠI',
                  },
                  {
                    startTime: new Date('2021-01-01T11:00:00Z'),
                    endTime: new Date('2021-01-01T13:00:00Z'),
                    duration: 120,
                    type: ['SLEEP'],
                    note: 'Bé NGỦ giấc ngày #2',
                  },
                  {
                    startTime: new Date('2021-01-01T11:00:00Z'),
                    endTime: new Date('2021-01-01T13:00:00Z'),
                    duration: 120,
                    type: ['YOUR_TIME'],
                    note: 'Thời gian của mẹ',
                  },
                ],
              },
            },
          },
          // TODO: #3
          {
            name: 'E.A.S.Y 3 - 3',
            easyActivities: {
              createMany: {
                data: [
                  {
                    startTime: new Date('2021-01-01T13:00:00Z'),
                    endTime: new Date('2021-01-01T13:45:00Z'),
                    duration: 45,
                    type: ['EAT'],
                    note: 'Ngủ dạy và ĂN',
                  },
                  {
                    startTime: new Date('2021-01-01T13:45:00Z'),
                    endTime: new Date('2021-01-01T14:00:00Z'),
                    duration: 15,
                    type: ['ACTIVITY'],
                    note: 'Thay bỉm và CHƠI',
                  },
                  {
                    startTime: new Date('2021-01-01T14:00:00Z'),
                    endTime: new Date('2021-01-01T16:00:00Z'),
                    duration: 120,
                    type: ['SLEEP'],
                    note: 'Bé NGỦ giấc ngày #3',
                  },
                  {
                    startTime: new Date('2021-01-01T14:00:00Z'),
                    endTime: new Date('2021-01-01T16:00:00Z'),
                    duration: 120,
                    type: ['YOUR_TIME'],
                    note: 'Thời gian của mẹ',
                  },
                ],
              },
            },
          },
          // TODO: #4
          {
            name: 'E.A.S.Y 3 - 4',
            easyActivities: {
              createMany: {
                data: [
                  {
                    startTime: new Date('2021-01-01T16:00:00Z'),
                    endTime: new Date('2021-01-01T16:45:00Z'),
                    duration: 45,
                    type: ['EAT'],
                    note: 'Ngủ dạy và ĂN',
                  },
                  {
                    startTime: new Date('2021-01-01T16:45:00Z'),
                    endTime: new Date('2021-01-01T17:00:00Z'),
                    duration: 15,
                    type: ['ACTIVITY'],
                    note: 'Thay bỉm và CHƠI',
                  },
                  {
                    startTime: new Date('2021-01-01T17:00:00Z'),
                    endTime: new Date('2021-01-01T17:45:00Z'),
                    duration: 120,
                    type: ['SLEEP'],
                    note: 'Bé NGỦ NAP NGẮN 30-45p',
                  },
                  {
                    startTime: new Date('2021-01-01T17:00:00Z'),
                    endTime: new Date('2021-01-01T17:45:00Z'),
                    duration: 120,
                    type: ['YOUR_TIME'],
                    note: 'Thời gian của mẹ',
                  },
                ],
              },
            },
          },
          // TODO: #5
          {
            name: 'E.A.S.Y 3 - 5',
            easyActivities: {
              createMany: {
                data: [
                  {
                    startTime: new Date('2021-01-01T18:00:00Z'),
                    type: ['OTHER'],
                    note: 'Bé đi tắm và thực hiện trình tự giấc ngủ đêm.',
                  },
                  {
                    startTime: new Date('2021-01-01T19:00:00Z'),
                    type: ['OTHER'],
                    note: 'Bé đi ngủ giấc đêm',
                  },
                ],
              },
            },
          },
        ],
      },
    },
  })

  await prisma.easy.upsert({
    where: {
      creatorId_name: {
        name: 'E.A.S.Y 3.5',
        creatorId: admin.id,
      },
    },
    update: {},
    create: {
      name: 'E.A.S.Y 3.5',
      startWeek: 6,
      endWeek: 8,
      note: 'Độ tuổi được áp dụng: Khi bé được khoảng 6-8 tuần và bé có tín hiệu chuyển dịch nếp sinh hoạt như ăn nhởn nhơ với cữ bú 3 giờ, ngủ siêu ngắn vào ban ngày, khó vào giấc ngày và đêm, đêm tỉnh giấc nhiều.\n\nĂn: Mỗi cữ bú cách nhau khoảng 3h15-3h30, bé được ăn ngay sau khi ngủ dậy, bé bú một cữ mất khoảng 15-30 phút.\n\nHoạt động: Sau khi ăn xong bé được ợ hơi kỹ, được thay bỉm, được chơi tự lập và mẹ quan sát tín hiệu để thực hiện trình tự ngủ cho bé. Tổng thời gian để bé hoạt động, bao gồm cả thực hiện trình tự ngủ khoảng 45-60 phút.\n\nNgủ: bé ngủ 4 hoặc 3 giấc ngày bao gồm 2-3 giấc kéo dài 1,5-2 giờ và 1 giấc ngắn cuối ngày từ 30-40 phút. Bé ngủ đêm 11-12 giờ và thời gian thức trước các giấc ngủ của bé là 75-90 phút.',
      type: 'DEFAULT',
      creatorId: admin.id,
      easyActivityGroups: {
        create: [
          // TODO: #1
          {
            name: 'E.A.S.Y 3.5 - 1',
            easyActivities: {
              createMany: {
                data: [
                  {
                    startTime: new Date('2021-01-01T07:00:00Z'),
                    endTime: new Date('2021-01-01T07:45:00Z'),
                    duration: 45,
                    type: ['EAT'],
                    note: 'Ngủ dạy và ĂN',
                  },
                  {
                    startTime: new Date('2021-01-01T07:45:00Z'),
                    endTime: new Date('2021-01-01T08:30:00Z'),
                    duration: 45,
                    type: ['ACTIVITY'],
                    note: 'Thay bỉm và CHƠI',
                  },
                  {
                    startTime: new Date('2021-01-01T08:30:00Z'),
                    endTime: new Date('2021-01-01T10:30:00Z'),
                    duration: 120,
                    type: ['SLEEP'],
                    note: 'Bé NGỦ giấc ngày #1',
                  },
                  {
                    startTime: new Date('2021-01-01T08:30:00Z'),
                    endTime: new Date('2021-01-01T10:30:00Z'),
                    duration: 120,
                    type: ['YOUR_TIME'],
                    note: 'Thời gian của mẹ',
                  },
                ],
              },
            },
          },
          // TODO: #2
          {
            name: 'E.A.S.Y 3.5 - 2',
            easyActivities: {
              createMany: {
                data: [
                  {
                    startTime: new Date('2021-01-01T10:30:00Z'),
                    endTime: new Date('2021-01-01T11:15:00Z'),
                    duration: 45,
                    type: ['EAT'],
                    note: 'Ngủ dạy và ĂN',
                  },
                  {
                    startTime: new Date('2021-01-01T11:15:00Z'),
                    endTime: new Date('2021-01-01T12:00:00Z'),
                    duration: 45,
                    type: ['ACTIVITY'],
                    note: 'Thay bỉm và CHƠI',
                  },
                  {
                    startTime: new Date('2021-01-01T12:00:00Z'),
                    endTime: new Date('2021-01-01T14:00:00Z'),
                    duration: 120,
                    type: ['SLEEP'],
                    note: 'Bé NGỦ giấc ngày #2',
                  },
                  {
                    startTime: new Date('2021-01-01T12:00:00Z'),
                    endTime: new Date('2021-01-01T14:00:00Z'),
                    duration: 120,
                    type: ['YOUR_TIME'],
                    note: 'Thời gian của mẹ',
                  },
                ],
              },
            },
          },
          // TODO: #3
          {
            name: 'E.A.S.Y 3.5 - 3',
            easyActivities: {
              createMany: {
                data: [
                  {
                    startTime: new Date('2021-01-01T14:00:00Z'),
                    endTime: new Date('2021-01-01T14:45:00Z'),
                    duration: 45,
                    type: ['EAT'],
                    note: 'Ngủ dạy và ĂN',
                  },
                  {
                    startTime: new Date('2021-01-01T14:45:00Z'),
                    endTime: new Date('2021-01-01T15:30:00Z'),
                    duration: 45,
                    type: ['ACTIVITY'],
                    note: 'Thay bỉm và CHƠI',
                  },
                  {
                    startTime: new Date('2021-01-01T15:30:00Z'),
                    endTime: new Date('2021-01-01T17:00:00Z'),
                    duration: 90,
                    type: ['SLEEP'],
                    note: 'Bé NGỦ giấc ngày #3',
                  },
                  {
                    startTime: new Date('2021-01-01T15:30:00Z'),
                    endTime: new Date('2021-01-01T17:00:00Z'),
                    duration: 90,
                    type: ['YOUR_TIME'],
                    note: 'Thời gian của mẹ',
                  },
                ],
              },
            },
          },
          // TODO: #4
          {
            name: 'E.A.S.Y 3.5 - 4',
            easyActivities: {
              createMany: {
                data: [
                  {
                    startTime: new Date('2021-01-01T17:00:00Z'),
                    endTime: new Date('2021-01-01T17:30:00Z'),
                    duration: 30,
                    type: ['EAT'],
                    note: 'Ngủ dạy và ĂN',
                  },
                  {
                    startTime: new Date('2021-01-01T17:30:00Z'),
                    endTime: new Date('2021-01-01T18:00:00Z'),
                    duration: 30,
                    type: ['ACTIVITY'],
                    note: 'Thay bỉm và CHƠI',
                  },
                  {
                    startTime: new Date('2021-01-01T18:00:00Z'),
                    endTime: new Date('2021-01-01T18:30:00Z'),
                    duration: 30,
                    type: ['SLEEP'],
                    note: 'Bé NGỦ NAP NGẮN 20-30p',
                  },
                  {
                    startTime: new Date('2021-01-01T18:00:00Z'),
                    endTime: new Date('2021-01-01T18:30:00Z'),
                    duration: 30,
                    type: ['YOUR_TIME'],
                    note: 'Thời gian của mẹ',
                  },
                ],
              },
            },
          },
          // TODO: #5
          {
            name: 'E.A.S.Y 3.5 - 5',
            easyActivities: {
              createMany: {
                data: [
                  {
                    startTime: new Date('2021-01-01T19:15:00Z'),
                    type: ['OTHER'],
                    note: 'Bé đi tắm và thực hiện trình tự giấc ngủ đêm.',
                  },
                  {
                    startTime: new Date('2021-01-01T19:30:00Z'),
                    type: ['OTHER'],
                    note: 'Bé đi ngủ giấc đêm',
                  },
                ],
              },
            },
          },
        ],
      },
    },
  })

  await prisma.easy.upsert({
    where: {
      creatorId_name: {
        name: 'E.A.S.Y 4',
        creatorId: admin.id,
      },
    },
    update: {},
    create: {
      name: 'E.A.S.Y 4',
      startWeek: 8,
      endWeek: 19,
      note: "Độ tuổi được áp dụng: Khi bé được khoảng 8-19 tuần và bé có tín hiệu chuyển dịch nếp sinh hoạt.\n\nĂn: Mỗi cữ bú cách nhau khoảng 3h75'- 4h.\n\nHoạt động: Tổng thời gian để bé hoạt động, bao gồm cả thực hiện trình tự ngủ khoảng 80-100 phút.\n\nNgủ: bé ngủ 3 giấc ngày bao gồm 2 giấc dài 1,5-2 giờ và 1 giấc ngắn cuối ngày từ 30-40 phút. Bé ngủ đêm 11-12 giờ và thời gian thức trước các giấc ngủ của bé là 110-120 phút.",
      type: 'DEFAULT',
      creatorId: admin.id,
      easyActivityGroups: {
        create: [
          // TODO: #1
          {
            name: 'E.A.S.Y 4 - 1',
            easyActivities: {
              createMany: {
                data: [
                  {
                    startTime: new Date('2021-01-01T07:00:00Z'),
                    type: ['EAT', 'ACTIVITY'],
                    note: 'Bé (E). Sau đó bé được ợ hơi và được thực hiện các hoạt động (A).',
                  },
                  {
                    startTime: new Date('2021-01-01T09:00:00Z'),
                    endTime: new Date('2021-01-01T11:00:00Z'),
                    duration: 120,
                    type: ['SLEEP', 'YOUR_TIME'],
                    note: 'Bé NGỦ (S) giấc ngắn #1 và mẹ có thời gian dành cho mình (Y).',
                  },
                ],
              },
            },
          },
          // TODO: #2
          {
            name: 'E.A.S.Y 4 - 2',
            easyActivities: {
              createMany: {
                data: [
                  {
                    startTime: new Date('2021-01-01T11:00:00Z'),
                    type: ['EAT', 'ACTIVITY'],
                    note: 'Bé (E). Sau đó bé được ợ hơi và được thực hiện các hoạt động (A).',
                  },
                  {
                    startTime: new Date('2021-01-01T13:00:00Z'),
                    endTime: new Date('2021-01-01T15:00:00Z'),
                    duration: 120,
                    type: ['SLEEP', 'YOUR_TIME'],
                    note: 'Bé NGỦ (S) giấc ngắn #2 và mẹ có thời gian dành cho mình (Y).',
                  },
                ],
              },
            },
          },
          // TODO: #3
          {
            name: 'E.A.S.Y 4 - 3',
            easyActivities: {
              createMany: {
                data: [
                  {
                    startTime: new Date('2021-01-01T15:00:00Z'),
                    type: ['EAT', 'ACTIVITY'],
                    note: 'Bé (E). Sau đó bé được ợ hơi và được thực hiện các hoạt động (A).',
                  },
                  {
                    startTime: new Date('2021-01-01T15:00:00Z'),
                    endTime: new Date('2021-01-01T17:00:00Z'),
                    duration: 120,
                    type: ['SLEEP', 'YOUR_TIME'],
                    note: 'Bé NGỦ (S) giấc ngắn #3 và mẹ có thời gian dành cho mình (Y). Giấc ngủ này kéo dài 30-45p',
                  },
                ],
              },
            },
          },
          // TODO: #4
          {
            name: 'E.A.S.Y 4 - 4',
            easyActivities: {
              createMany: {
                data: [
                  {
                    startTime: new Date('2021-01-01T17:30:00Z'),
                    type: ['EAT', 'ACTIVITY'],
                    note: 'Mẹ có thể thực hiện một bữa ngắn NẾU BÉ HỢP TÁC VÀ NGỪNG ĂN ĐÊM',
                  },
                ],
              },
            },
          },
          // TODO: #5
          {
            name: 'E.A.S.Y 4 - 5',
            easyActivities: {
              createMany: {
                data: [
                  {
                    startTime: new Date('2021-01-01T19:00:00Z'),
                    type: ['OTHER'],
                    note: 'BEDTIME - ROUNTIME\nMẹ tắm cho bé và thực hiện trình tự chuẩn bị cho bé ngủ đêm. Khi đó bé được ăn-ợ hơi (nằm trong trình tự ngủ đêm) và được đặt ngủ luôn (khoảng 19h30).',
                  },
                ],
              },
            },
          },
        ],
      },
    },
  })

  await prisma.easy.upsert({
    where: {
      creatorId_name: {
        name: 'E.A.S.Y 2-3-4',
        creatorId: admin.id,
      },
    },
    update: {},
    create: {
      name: 'E.A.S.Y 2-3-4',
      startWeek: 19,
      endWeek: 46,
      note: 'Độ tuổi được áp dụng: Khi bé được khoảng 19-46 tuần và bé có tín hiệu chuyển dịch nếp sinh hoạt. Ăn: Mỗi cữ bú cách nhau khoảng 4-4.5h.\n\nHoạt động: Bé bắt đầu ăn dặm khi được 6 tháng tuổi.\n\nThời gian thức trước các giấc ngủ của bé lần lượt là: 2 giờ trước khi ngủ giấc 1; 3 giờ trước khi ngủ giấc 2; 4 giờ trước khi ngủ đêm (2-3-4).\n\nNgủ: bé ngủ 3 giấc ngày bao gồm 2 giấc dài 1,5-2 giờ và 1 giấc ngắn cuối ngày từ 30-40 phút. Bé ngủ đêm 11-12 giờ.',
      type: 'DEFAULT',
      creatorId: admin.id,
      easyActivityGroups: {
        create: [
          // TODO: #1
          {
            name: 'E.A.S.Y 2-3-4 - 1',
            easyActivities: {
              createMany: {
                data: [
                  {
                    startTime: new Date('2021-01-01T07:00:00Z'),
                    endTime: new Date('2021-01-01T09:00:00Z'),
                    duration: 120,
                    type: ['EAT', 'ACTIVITY'],
                    note: 'Bé ăn, sau đó được ợ hơi (bé dưới 6 tháng), được thực hiện các hoạt động (A). Thời gian thực hiện các hoạt động dài hơn vì thời gian thức dài hơn. Bé thức tổng cộng 2 TIẾNG (giờ ăn + giờ thực hiện thủ tục đi ngủ).',
                  },
                  {
                    startTime: new Date('2021-01-01T09:00:00Z'),
                    endTime: new Date('2021-01-01T11:00:00Z'),
                    duration: 120,
                    type: ['SLEEP', 'YOUR_TIME'],
                    note: 'Bé NGỦ (S) giấc ngắn #1 và mẹ có thời gian dành cho mình (Y).',
                  },
                ],
              },
            },
          },
          // TODO: #2
          {
            name: 'E.A.S.Y 2-3-4 - 2',
            easyActivities: {
              createMany: {
                data: [
                  {
                    startTime: new Date('2021-01-01T11:00:00Z'),
                    endTime: new Date('2021-01-14:00:00Z'),
                    duration: differenceInMinutes(
                      new Date('2021-01-01T14:00:00Z'),
                      new Date('2021-01-01T11:00:00Z'),
                    ),
                    type: ['EAT', 'ACTIVITY'],
                    note: 'Bé ăn sữa và ăn dặm ngay sau đó. Bé được chơi tự lập và thực hiện các hoạt động. Bé thức tổng cộng 3 TIẾNG (giờ ăn + giờ thực hiện thủ tục đi ngủ).',
                  },
                  {
                    startTime: new Date('2021-01-01T14:00:00Z'),
                    endTime: new Date('2021-01-01T15:00:00Z'),
                    duration: differenceInMinutes(
                      new Date('2021-01-01T15:00:00Z'),
                      new Date('2021-01-01T14:00:00Z'),
                    ),
                    type: ['SLEEP', 'YOUR_TIME'],
                    note: 'Bé NGỦ (S) giấc ngắn #2 và mẹ có thời gian dành cho mình (Y). Bé có thể ngủ đến 15:30.',
                  },
                ],
              },
            },
          },
          // TODO: #3
          {
            name: 'E.A.S.Y 2-3-4 - 3',
            easyActivities: {
              createMany: {
                data: [
                  {
                    startTime: new Date('2021-01-01T15:00:00Z'),
                    type: ['EAT', 'ACTIVITY'],
                    note: 'Bé được ăn sữa và được chơi tự lập, chơi cùng mẹ.',
                  },
                ],
              },
            },
          },
          // TODO: #4
          {
            name: 'E.A.S.Y 2-3-4 - 4',
            easyActivities: {
              createMany: {
                data: [
                  {
                    startTime: new Date('2021-01-01T18:00:00Z'),
                    type: ['EAT'],
                    note: 'Các bé dưới 6 tháng, bé được tắm và uống sữa, thực hiện trình tự đi ngủ đêm (bedtime roundtine). Tổng thời gian từ thức giấc #2 đến khi ngủ đêm là 3.5-4 TIẾNG. Bé >6 tháng thì bé sẽ tắm, ăn dặm, thực hiện trình tự ngủ đêm + UỐNG SỮA. Nhiều mẹ có thể thực hiện tắm + uống sữa sau đó mới ăn dặm và trình tự đi ngủ là đọc sách, kể truyện, hát mà KHÔNG kèm theo bình sữa. Sau 6 tháng thì thời gian thức cho chu kỳ EASY cuối này là 4 tiếng.',
                  },
                  {
                    startTime: new Date('2021-01-01T18:30:00Z'),
                    type: ['SLEEP'],
                    note: '18:30 với các bé thực hiện E.A.S.Y. 2-3-3.5h, 19:00 với bé thục hiện E.A.S.Y. 2-3-4 là thời điểm bé được đặt vào giường ngủ đêm. (Tính 3,5-4h từ lúc bé dậy sau giấc ngủ thứ 2. Thời gian ngủ đêm này dao động rất nhiều tùy theo các bé và thời lượng giấc ngủ thứ 2 quá ngắn, mẹ có thể cân nhắc thực hiện cho bé thức 3,5h đồng thời quan sát chất lượng giấc ngủ đêm.)',
                  },
                ],
              },
            },
          },
        ],
      },
    },
  })

  await prisma.easy.upsert({
    where: {
      creatorId_name: {
        name: 'E.A.S.Y 5-6',
        creatorId: admin.id,
      },
    },
    update: {},
    create: {
      name: 'E.A.S.Y 5-6',
      startWeek: 46,
      endWeek: null,
      note: 'Độ tuổi được áp dụng: Khi bé được khoảng 46 tuần trở lên và bé có tín hiệu chuyển dịch nếp sinh hoạt.\n\nBé chuyển sang sinh hoạt gần như người lớn với 4 bữa ăn/ngày cả sữa và cơm.\n\nThời gian thức của bé như sau: ngủ dậy thức 5 giờ rồi đi ngủ trưa, ngủ trưa dậy thức 6 giờ và đi ngủ đêm. Bé ngủ 1 giấc trưa kéo dài từ 1.5-2h. Đêm bé ngủ từ 10-12 tiếng.',
      type: 'DEFAULT',
      creatorId: admin.id,
      easyActivityGroups: {
        create: [
          // TODO: #1
          {
            name: 'E.A.S.Y 5-6 - 1',
            easyActivities: {
              createMany: {
                data: [
                  {
                    startTime: new Date('2021-01-01T07:00:00Z'),
                    type: ['EAT'],
                    note: 'Bé dậy, uống sữa, ăn sáng sau đó được vệ sinh cá nhân.',
                  },
                  {
                    startTime: new Date('2021-01-01T07:30:00Z'),
                    endTime: new Date('2021-01-01T11:10:00Z'),
                    duration: differenceInMinutes(
                      new Date('2021-01-01T11:10:00Z'),
                      new Date('2021-01-01T07:30:00Z'),
                    ),
                    type: ['ACTIVITY'],
                    note: 'Bé được tham gia các hoạt động, lý tưởng là được chơi tự lập 30p - 60p sau khi ăn',
                  },
                  {
                    startTime: new Date('2021-01-01T11:00:00Z'),
                    endTime: new Date('2021-01-01T11:30:00Z'),
                    duration: differenceInMinutes(
                      new Date('2021-01-01T11:30:00Z'),
                      new Date('2021-01-01T11:00:00Z'),
                    ),
                    type: ['ACTIVITY'],
                    note: 'Bé được ăn trưa. Vệ sinh cá nhân sau khi ăn.',
                  },
                  {
                    startTime: new Date('2021-01-01T12:00:00Z'),
                    endTime: new Date('2021-01-01T14:00:00Z'),
                    duration: differenceInMinutes(
                      new Date('2021-01-01T14:00:00Z'),
                      new Date('2021-01-01T12:00:00Z'),
                    ),
                    type: ['SLEEP'],
                    note: 'Mẹ thực hiện trình tự đưa bé đi ngủ. Bé ngủ trưa trong khoảng 1.5-2 giờ.',
                  },
                  {
                    startTime: new Date('2021-01-01T14:00:00Z'),
                    type: ['EAT'],
                    note: 'Bé dậy và được uống sữa.',
                  },
                  {
                    startTime: new Date('2021-01-01T14:00:00Z'),
                    endTime: new Date('2021-01-01T17:30:00Z'),
                    duration: differenceInMinutes(
                      new Date('2021-01-01T17:30:00Z'),
                      new Date('2021-01-01T14:00:00Z'),
                    ),
                    type: ['ACTIVITY'],
                    note: 'Bé được tham gia các hoạt động, kể cả cá hoạt động chơi tự lập, thời gian theo khả năng của bé, ngay sau khi ăn bữa sữa 14:00.',
                  },
                  {
                    startTime: new Date('2021-01-01T17:00:00Z'),
                    type: ['OTHER'],
                    note: 'Bé tắm và chuẩn bị trình tự ngủ đêm.',
                  },
                ],
              },
            },
          },
          // TODO: #2
          {
            name: 'E.A.S.Y 5-6 - 2',
            easyActivities: {
              createMany: {
                data: [
                  {
                    startTime: new Date('2021-01-01T18:00:00Z'),
                    type: ['EAT'],
                    note: 'Bé được ăn tối. Bé uống sữa trước và ăn dặm sau (trước 14 tháng), không nhất thiết phải uống sữa sau bữa ăn (sau 14 tháng). Bé vệ sinh cá nhân sau bữa ăn: rửa tay, đánh răng, ...',
                  },
                  {
                    startTime: new Date('2021-01-01T18:00:00Z'),
                    type: ['OTHER'],
                    note: 'Thời gian thư giãn trước khi ngủ: bé được trò chuyện cùng người thân, đọc sách, hát, ...',
                  },
                  {
                    startTime: new Date('2021-01-01T19:00:00Z'),
                    endTime: new Date('2021-01-01T19:30:00Z'),
                    duration: 30,
                    type: ['OTHER'],
                    note: 'Mẹ tắt đèn và ra khỏi phòng bé, sau đây là giấc ngủ đêm của bé.',
                  },
                ],
              },
            },
          },
        ],
      },
    },
  })

  console.log('Done')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
