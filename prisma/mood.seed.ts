import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const moods = [
    { name: 'Bình tĩnh' },
    { name: 'Vui vẻ' },
    { name: 'Mạnh mẽ' },
    { name: 'Phấn chấn' },
    { name: 'Thất thường' },
    { name: 'Bực bội' },
    { name: 'Buồn' },
    { name: 'Lo lắng' },
    { name: 'Trầm cảm' },
    { name: 'Cảm thấy có lỗi' },
    { name: 'Bối rối' },
    { name: 'Lãnh đạm' },
    { name: 'Ám ảnh' },
  ];

export async function moodSeed() {
  for (const mood of moods) {
    const { name } = mood;

    const upsertedMood = await prisma.mood.upsert({
      where: { name },
      update: {},
      create: { name },
    });

    console.log(`Created Mood: ${upsertedMood.name}`);
  }
}

moodSeed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
