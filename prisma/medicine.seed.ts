import { MedicineUnit, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum MedicineInstructionType {
  SAFE = 'SAFE', // An toàn
  UNSAFE = 'UNSAFE', // Không an toàn
  CAUTION = 'CAUTION', // Cảnh báo
  SIDE_EFFECT = 'SIDE_EFFECT', // Tác dụng phụ
}

async function main() {
  const medicines = [
    {
      name: 'Paracetamol',
      description: 'Thuốc giảm đau và hạ sốt',
      imageUrl: 'https://example.com/paracetamol.jpg',
      unit: MedicineUnit.BLISTER,
      instructions: [
        {
          title: 'Cách dùng',
          type: MedicineInstructionType.SAFE,
          description: 'Uống 1-2 viên mỗi 4-6 giờ khi cần',
        },
        {
          title: 'Cảnh báo',
          type: MedicineInstructionType.CAUTION,
          description: 'Không dùng quá 4000mg trong 24 giờ',
        },
      ],
    },
    {
      name: 'Amoxicillin',
      description: 'Kháng sinh điều trị nhiễm trùng do vi khuẩn',
      imageUrl: 'https://example.com/amoxicillin.jpg',
      unit: MedicineUnit.PRESCRIPTION,
      instructions: [
        {
          title: 'Cách dùng',
          type: MedicineInstructionType.SAFE,
          description: 'Uống theo chỉ định của bác sĩ',
        },
        {
          title: 'Tác dụng phụ',
          type: MedicineInstructionType.SIDE_EFFECT,
          description: 'Có thể gây tiêu chảy',
        },
      ],
    },
    {
      name: 'Omeprazole',
      description: 'Thuốc ức chế bơm proton giảm acid dạ dày',
      imageUrl: 'https://example.com/omeprazole.jpg',
      unit: MedicineUnit.PRESCRIPTION,
      instructions: [
        {
          title: 'Cách dùng',
          type: MedicineInstructionType.SAFE,
          description: 'Uống vào buổi sáng trước bữa ăn',
        },
        {
          title: 'Tác dụng phụ',
          type: MedicineInstructionType.SIDE_EFFECT,
          description: 'Có thể gây đau đầu hoặc buồn nôn',
        },
      ],
    },
    {
      name: 'Metformin',
      description: 'Thuốc điều trị đái tháo đường type 2',
      imageUrl: 'https://example.com/metformin.jpg',
      unit: MedicineUnit.PRESCRIPTION,
      instructions: [
        {
          title: 'Cách dùng',
          type: MedicineInstructionType.SAFE,
          description: 'Uống cùng bữa ăn để giảm tác dụng phụ trên dạ dày',
        },
        {
          title: 'Cảnh báo',
          type: MedicineInstructionType.CAUTION,
          description: 'Có thể gây thiếu hụt vitamin B12 khi sử dụng lâu dài',
        },
      ],
    },
    {
      name: 'Losartan',
      description: 'Thuốc điều trị cao huyết áp',
      imageUrl: 'https://example.com/losartan.jpg',
      unit: MedicineUnit.PRESCRIPTION,
      instructions: [
        {
          title: 'Cách dùng',
          type: MedicineInstructionType.SAFE,
          description:
            'Uống một lần mỗi ngày, có thể uống cùng hoặc không cùng thức ăn',
        },
        {
          title: 'Cảnh báo',
          type: MedicineInstructionType.CAUTION,
          description: 'Không dùng cho phụ nữ mang thai',
        },
      ],
    },
    {
      name: 'Cetirizine',
      description: 'Thuốc kháng histamine điều trị dị ứng',
      imageUrl: 'https://example.com/cetirizine.jpg',
      unit: MedicineUnit.BLISTER,
      instructions: [
        {
          title: 'Cách dùng',
          type: MedicineInstructionType.SAFE,
          description: 'Uống một viên mỗi ngày',
        },
        {
          title: 'Tác dụng phụ',
          type: MedicineInstructionType.SIDE_EFFECT,
          description: 'Có thể gây buồn ngủ',
        },
      ],
    },
    {
      name: 'Simvastatin',
      description: 'Thuốc hạ cholesterol',
      imageUrl: 'https://example.com/simvastatin.jpg',
      unit: MedicineUnit.PRESCRIPTION,
      instructions: [
        {
          title: 'Cách dùng',
          type: MedicineInstructionType.SAFE,
          description: 'Uống vào buổi tối',
        },
        {
          title: 'Cảnh báo',
          type: MedicineInstructionType.CAUTION,
          description: 'Tránh uống nước bưởi khi dùng thuốc',
        },
      ],
    },
    {
      name: 'Salbutamol',
      description: 'Thuốc giãn phế quản điều trị hen suyễn',
      imageUrl: 'https://example.com/salbutamol.jpg',
      unit: MedicineUnit.PRESCRIPTION,
      instructions: [
        {
          title: 'Cách dùng',
          type: MedicineInstructionType.SAFE,
          description: 'Hít qua miệng khi cần',
        },
        {
          title: 'Tác dụng phụ',
          type: MedicineInstructionType.SIDE_EFFECT,
          description: 'Có thể gây run tay',
        },
      ],
    },
    {
      name: 'Metoprolol',
      description: 'Thuốc chẹn beta điều trị cao huyết áp và đau thắt ngực',
      imageUrl: 'https://example.com/metoprolol.jpg',
      unit: MedicineUnit.PRESCRIPTION,
      instructions: [
        {
          title: 'Cách dùng',
          type: MedicineInstructionType.SAFE,
          description: 'Uống cùng bữa ăn hoặc ngay sau bữa ăn',
        },
        {
          title: 'Cảnh báo',
          type: MedicineInstructionType.CAUTION,
          description: 'Không ngừng thuốc đột ngột',
        },
      ],
    },
    {
      name: 'Pantoprazole',
      description: 'Thuốc ức chế bơm proton điều trị trào ngược dạ dày',
      imageUrl: 'https://example.com/pantoprazole.jpg',
      unit: MedicineUnit.PRESCRIPTION,
      instructions: [
        {
          title: 'Cách dùng',
          type: MedicineInstructionType.SAFE,
          description: 'Uống 30 phút trước bữa ăn sáng',
        },
        {
          title: 'Tác dụng phụ',
          type: MedicineInstructionType.SIDE_EFFECT,
          description: 'Có thể gây đau đầu hoặc tiêu chảy',
        },
      ],
    },
    {
      name: 'Metronidazole',
      description: 'Thuốc kháng sinh và kháng ký sinh trùng',
      imageUrl: 'https://example.com/metronidazole.jpg',
      unit: MedicineUnit.PRESCRIPTION,
      instructions: [
        {
          title: 'Cách dùng',
          type: MedicineInstructionType.SAFE,
          description: 'Uống trong hoặc sau bữa ăn',
        },
        {
          title: 'Cảnh báo',
          type: MedicineInstructionType.UNSAFE,
          description: 'Không uống rượu trong quá trình điều trị',
        },
      ],
    },
    {
      name: 'Amlodipine',
      description: 'Thuốc chẹn kênh canxi điều trị cao huyết áp',
      imageUrl: 'https://example.com/amlodipine.jpg',
      unit: MedicineUnit.PRESCRIPTION,
      instructions: [
        {
          title: 'Cách dùng',
          type: MedicineInstructionType.SAFE,
          description: 'Uống một lần mỗi ngày',
        },
        {
          title: 'Tác dụng phụ',
          type: MedicineInstructionType.SIDE_EFFECT,
          description: 'Có thể gây phù chân',
        },
      ],
    },
    {
      name: 'Fluoxetine',
      description: 'Thuốc chống trầm cảm',
      imageUrl: 'https://example.com/fluoxetine.jpg',
      unit: MedicineUnit.PRESCRIPTION,
      instructions: [
        {
          title: 'Cách dùng',
          type: MedicineInstructionType.SAFE,
          description: 'Uống vào buổi sáng',
        },
        {
          title: 'Cảnh báo',
          type: MedicineInstructionType.CAUTION,
          description: 'Có thể mất vài tuần để có hiệu quả đầy đủ',
        },
      ],
    },
    {
      name: 'Levothyroxine',
      description: 'Thuốc điều trị suy giáp',
      imageUrl: 'https://example.com/levothyroxine.jpg',
      unit: MedicineUnit.PRESCRIPTION,
      instructions: [
        {
          title: 'Cách dùng',
          type: MedicineInstructionType.SAFE,
          description: 'Uống vào buổi sáng, lúc đói',
        },
        {
          title: 'Cảnh báo',
          type: MedicineInstructionType.CAUTION,
          description: 'Tránh uống cùng các sản phẩm có chứa canxi hoặc sắt',
        },
      ],
    },
    {
      name: 'Ibuprofen',
      description: 'Thuốc chống viêm không steroid (NSAID)',
      imageUrl: 'https://example.com/ibuprofen.jpg',
      unit: MedicineUnit.BLISTER,
      instructions: [
        {
          title: 'Cách dùng',
          type: MedicineInstructionType.SAFE,
          description: 'Uống cùng thức ăn hoặc sữa để tránh kích ứng dạ dày',
        },
        {
          title: 'Cảnh báo',
          type: MedicineInstructionType.CAUTION,
          description: 'Không dùng cho người bị loét dạ dày',
        },
      ],
    },
    {
      name: 'Escitalopram',
      description: 'Thuốc chống trầm cảm và lo âu',
      imageUrl: 'https://example.com/escitalopram.jpg',
      unit: MedicineUnit.PRESCRIPTION,
      instructions: [
        {
          title: 'Cách dùng',
          type: MedicineInstructionType.SAFE,
          description:
            'Uống một lần mỗi ngày, có thể uống cùng hoặc không cùng thức ăn',
        },
        {
          title: 'Tác dụng phụ',
          type: MedicineInstructionType.SIDE_EFFECT,
          description: 'Có thể gây buồn nôn và khó ngủ trong những ngày đầu',
        },
      ],
    },
    {
      name: 'Montelukast',
      description: 'Thuốc điều trị hen suyễn và dị ứng',
      imageUrl: 'https://example.com/montelukast.jpg',
      unit: MedicineUnit.PRESCRIPTION,
      instructions: [
        {
          title: 'Cách dùng',
          type: MedicineInstructionType.SAFE,
          description: 'Uống một lần mỗi ngày vào buổi tối',
        },
        {
          title: 'Cảnh báo',
          type: MedicineInstructionType.CAUTION,
          description: 'Có thể gây thay đổi tâm trạng hoặc hành vi',
        },
      ],
    },
    {
      name: 'Aspirin',
      description: 'Thuốc giảm đau và chống đông máu',
      imageUrl: 'https://example.com/aspirin.jpg',
      unit: MedicineUnit.BLISTER,
      instructions: [
        {
          title: 'Cách dùng',
          type: MedicineInstructionType.SAFE,
          description: 'Uống cùng thức ăn để giảm kích ứng dạ dày',
        },
        {
          title: 'Cảnh báo',
          type: MedicineInstructionType.UNSAFE,
          description: 'Không dùng cho trẻ em dưới 12 tuổi',
        },
      ],
    },
    {
      name: 'Atorvastatin',
      description: 'Thuốc hạ cholesterol',
      imageUrl: 'https://example.com/atorvastatin.jpg',
      unit: MedicineUnit.PRESCRIPTION,
      instructions: [
        {
          title: 'Cách dùng',
          type: MedicineInstructionType.SAFE,
          description:
            'Uống một lần mỗi ngày, có thể vào bất kỳ thời điểm nào trong ngày',
        },
        {
          title: 'Tác dụng phụ',
          type: MedicineInstructionType.SIDE_EFFECT,
          description: 'Có thể gây đau cơ',
        },
      ],
    },
    {
      name: 'Sertraline',
      description: 'Thuốc chống trầm cảm và rối loạn lo âu',
      imageUrl: 'https://example.com/sertraline.jpg',
      unit: MedicineUnit.PRESCRIPTION,
      instructions: [
        {
          title: 'Cách dùng',
          type: MedicineInstructionType.SAFE,
          description:
            'Uống một lần mỗi ngày, có thể uống vào buổi sáng hoặc tối',
        },
        {
          title: 'Cảnh báo',
          type: MedicineInstructionType.CAUTION,
          description: 'Tránh sử dụng đồ uống có cồn',
        },
      ],
    },
  ]

  for (const medicine of medicines) {
    await prisma.medicine.upsert({
      where: { name: medicine.name },
      create: medicine,
      update: medicine,
    })
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
