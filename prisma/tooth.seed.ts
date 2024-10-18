import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface ToothMaster {
  name: string
  toothNumber: number
  growthTime: string
}

const DATA: ToothMaster[] = [
  {
    name: 'Răng cửa giữa (hàm dưới bên trái)',
    toothNumber: 1,
    growthTime: '6 - 10 tháng tuổi',
  },
  {
    name: 'Răng cửa giữa (hàm dưới bên phải)',
    toothNumber: 1,
    growthTime: '6 - 10 tháng tuổi',
  },
  {
    name: 'Răng cửa bên (hàm dưới bên trái)',
    toothNumber: 4,
    growthTime: '10 - 16 tháng tuổi',
  },
  {
    name: 'Răng cửa bên (hàm dưới bên phải)',
    toothNumber: 4,
    growthTime: '10 - 16 tháng tuổi',
  },
  {
    name: 'Răng nanh (hàm dưới bên trái)',
    toothNumber: 8,
    growthTime: '17 - 23 tháng tuổi',
  },
  {
    name: 'Răng nanh (hàm dưới bên phải)',
    toothNumber: 8,
    growthTime: '17 - 23 tháng tuổi',
  },
  {
    name: 'Răng cối thứ nhất (hàm dưới bên trái)',
    toothNumber: 6,
    growthTime: '14 - 18 tháng tuổi',
  },
  {
    name: 'Răng cối thứ nhất (hàm dưới bên phải)',
    toothNumber: 6,
    growthTime: '14 - 18 tháng tuổi',
  },
  {
    name: 'Răng cối thứ 2 (hàm dưới bên trái)',
    toothNumber: 9,
    growthTime: '23 - 31 tháng tuổi',
  },
  {
    name: 'Răng cối thứ 2 (hàm dưới bên phải)',
    toothNumber: 9,
    growthTime: '23 - 31 tháng tuổi',
  },

  // TODO: Răng hàm trên
  {
    name: 'Răng cửa giữa (hàm trên bên trái)',
    toothNumber: 2,
    growthTime: '8 - 12 tháng tuổi',
  },
  {
    name: 'Răng cửa giữa (hàm trên bên phải)',
    toothNumber: 2,
    growthTime: '8 - 12 tháng tuổi',
  },
  {
    name: 'Răng cửa bên (hàm trên bên trái)',
    toothNumber: 3,
    growthTime: '9 - 13 tháng tuổi',
  },
  {
    name: 'Răng cửa bên (hàm trên bên phải)',
    toothNumber: 3,
    growthTime: '9 - 13 tháng tuổi',
  },
  {
    name: 'Răng nanh (hàm trên bên trái)',
    toothNumber: 7,
    growthTime: '16 - 22 tháng tuổi',
  },
  {
    name: 'Răng nanh (hàm trên bên phải)',
    toothNumber: 7,
    growthTime: '16 - 22 tháng tuổi',
  },
  {
    name: 'Răng cối thứ nhất (hàm trên bên trái)',
    toothNumber: 5,
    growthTime: '13 - 19 tháng tuổi',
  },
  {
    name: 'Răng cối thứ nhất (hàm trên bên phải)',
    toothNumber: 5,
    growthTime: '13 - 19 tháng tuổi',
  },
  {
    name: 'Răng cối thứ 2 (hàm trên bên trái)',
    toothNumber: 10,
    growthTime: '25 - 33 tháng tuổi',
  },
  {
    name: 'Răng cối thứ 2 (hàm trên bên phải)',
    toothNumber: 10,
    growthTime: '25 - 33 tháng tuổi',
  },
]

async function main() {
  console.log('Start seeding...')

  for (const toothMaster of DATA) {
    const { name, toothNumber, growthTime } = toothMaster
    await prisma.toothMaster.upsert({
      where: { name },
      create: {
        name,
        toothNumber,
        growthTime,
        jawPosition: name.includes('dưới') ? 'LOWER' : 'UPPER',
      },
      update: {
        jawPosition: name.includes('dưới') ? 'LOWER' : 'UPPER',
      },
    })
    console.log(`Added tooth master: ${name}`)
  }

  console.log('done.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

export default main
