import { CategoryType, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Seed Categories
  const categories = [
    {
      name: 'Ẩm thực',
      type: CategoryType.RECIPE,
      description: 'Khám phá ẩm thực đa dạng từ khắp nơi trên thế giới',
    },
    {
      name: 'Các giai đoạn',
      type: CategoryType.RECIPE,
      description: 'Món ăn phù hợp cho từng giai đoạn của cuộc sống',
    },
    {
      name: 'Các món ăn cho bà bầu',
      type: CategoryType.RECIPE,
      description: 'Dinh dưỡng cân bằng cho mẹ bầu',
    },
    {
      name: 'Món ăn dặm cho bé',
      type: CategoryType.RECIPE,
      description: 'Thực đơn phong phú cho bé tập ăn dặm',
    },
  ]

  for (const category of categories) {
    await prisma.category.upsert({
      where: { name: category.name },
      create: {
        ...category,
      },
      update: {},
    })
  }

  // Seed SubCategories
  const subCategories = [
    {
      name: 'Châu Á',
      categoryName: 'Ẩm thực',
      description: 'Hương vị đặc trưng của ẩm thực Châu Á',
    },
    {
      name: 'Châu Âu',
      categoryName: 'Ẩm thực',
      description: 'Tinh hoa ẩm thực từ lục địa già',
    },
    {
      name: 'Món chay',
      categoryName: 'Ẩm thực',
      description: 'Món ăn thuần chay bổ dưỡng',
    },
    {
      name: 'Ấn Độ',
      categoryName: 'Ẩm thực',
      description: 'Hương vị cay nồng từ đất nước Ấn Độ',
    },
    {
      name: 'Tam cá nguyệt 1',
      categoryName: 'Các giai đoạn',
      description: 'Món ăn cho 3 tháng đầu thai kỳ',
    },
    {
      name: 'Tam cá nguyệt 2',
      categoryName: 'Các giai đoạn',
      description: 'Món ăn cho 3 tháng giữa thai kỳ',
    },
    {
      name: 'Tam cá nguyệt 3',
      categoryName: 'Các giai đoạn',
      description: 'Món ăn cho 3 tháng cuối thai kỳ',
    },
    {
      name: 'Ở cữ',
      categoryName: 'Các giai đoạn',
      description: 'Món ăn bổ dưỡng cho mẹ sau sinh',
    },
    {
      name: 'Cho con bú',
      categoryName: 'Các giai đoạn',
      description: 'Thực đơn giàu dinh dưỡng cho mẹ cho con bú',
    },
    {
      name: 'Ăn dặm',
      categoryName: 'Các giai đoạn',
      description: 'Món ăn dặm phù hợp cho bé',
    },
    {
      name: '2 tuổi trở lên',
      categoryName: 'Các giai đoạn',
      description: 'Thực đơn đa dạng cho trẻ trên 2 tuổi',
    },
  ]

  for (const subCategory of subCategories) {
    const category = await prisma.category.findUnique({
      where: { name: subCategory.categoryName },
    })

    const existingSubCategory = await prisma.subCategory.findFirst({
      where: { name: subCategory.name },
    })

    // subCategory ko dùng unqiue constraint
    if (existingSubCategory) {
      continue
    }

    await prisma.subCategory.create({
      data: {
        name: subCategory.name,
        description: subCategory.description,
        image: 'https://picsum.photos/200/300',
        category: { connect: { id: category?.id } },
      },
    })
  }

  // Seed Recipes
  const subCategoryRecipes = {
    'Châu Á': [
      {
        title: 'Phở Bò',
        cookingTime: 180,
        description: 'Món ăn truyền thống của Việt Nam',
      },
      {
        title: 'Sushi',
        cookingTime: 60,
        description: 'Món ăn nổi tiếng của Nhật Bản',
      },
      {
        title: 'Pad Thai',
        cookingTime: 30,
        description: 'Món mì xào đặc trưng của Thái Lan',
      },
      {
        title: 'Dim Sum',
        cookingTime: 90,
        description: 'Món ăn nhẹ phổ biến của Trung Quốc',
      },
      {
        title: 'Bún Chả',
        cookingTime: 60,
        description: 'Món ăn đường phố yêu thích của Hà Nội',
      },
    ],
    'Châu Âu': [
      {
        title: 'Pasta Carbonara',
        cookingTime: 30,
        description: 'Món mì Ý với sốt kem và thịt xông khói',
      },
      {
        title: 'Ratatouille',
        cookingTime: 60,
        description: 'Món rau củ hầm kiểu Pháp',
      },
      {
        title: 'Fish and Chips',
        cookingTime: 45,
        description: 'Món ăn truyền thống của Anh',
      },
      {
        title: 'Beef Stroganoff',
        cookingTime: 40,
        description: 'Món bò sốt kem kiểu Nga',
      },
      {
        title: 'Greek Salad',
        cookingTime: 15,
        description: 'Salad rau củ tươi mát kiểu Hy Lạp',
      },
    ],
    'Món chay': [
      {
        title: 'Đậu hũ sốt cà chua',
        cookingTime: 20,
        description: 'Món chay đơn giản và ngon miệng',
      },
      {
        title: 'Salad Quinoa',
        cookingTime: 25,
        description: 'Salad dinh dưỡng từ hạt Quinoa',
      },
      {
        title: 'Súp lơ xanh nướng',
        cookingTime: 30,
        description: 'Món rau nướng giòn ngon',
      },
      {
        title: 'Cơm chiên rau củ',
        cookingTime: 20,
        description: 'Món cơm chay đầy đủ dinh dưỡng',
      },
      {
        title: 'Mì Ý sốt nấm',
        cookingTime: 35,
        description: 'Món mì chay với sốt nấm thơm ngon',
      },
    ],
    'Ấn Độ': [
      {
        title: 'Butter Chicken',
        cookingTime: 50,
        description: 'Món gà nướng trong sốt cà chua và bơ',
      },
      {
        title: 'Palak Paneer',
        cookingTime: 40,
        description: 'Món phô mai với sốt rau bina',
      },
      {
        title: 'Biryani',
        cookingTime: 60,
        description: 'Cơm rang gia vị với thịt hoặc rau củ',
      },
      {
        title: 'Tandoori Chicken',
        cookingTime: 40,
        description: 'Gà nướng trong lò đất truyền thống',
      },
      {
        title: 'Daal Makhani',
        cookingTime: 90,
        description: 'Món đậu đen nấu chậm với kem và bơ',
      },
    ],
    'Tam cá nguyệt 1': [
      {
        title: 'Súp gà nấm',
        cookingTime: 30,
        description: 'Súp bổ dưỡng giúp giảm ốm nghén',
      },
      {
        title: 'Sinh tố bơ sữa chua',
        cookingTime: 10,
        description: 'Đồ uống giàu dinh dưỡng cho bà bầu',
      },
      {
        title: 'Cháo yến mạch trái cây',
        cookingTime: 20,
        description: 'Bữa sáng nhẹ nhàng cho mẹ bầu',
      },
      {
        title: 'Salad rau củ trộn',
        cookingTime: 15,
        description: 'Món ăn nhẹ giàu vitamin và khoáng chất',
      },
      {
        title: 'Cá hồi nướng chanh',
        cookingTime: 25,
        description: 'Món cá giàu omega-3 tốt cho thai nhi',
      },
    ],
    'Tam cá nguyệt 2': [
      {
        title: 'Bò bít tết',
        cookingTime: 20,
        description: 'Món ăn giàu sắt cho bà bầu',
      },
      {
        title: 'Súp lơ xanh nấu tôm',
        cookingTime: 25,
        description: 'Món ăn giàu canxi và protein',
      },
      {
        title: 'Cơm gạo lứt với đậu',
        cookingTime: 30,
        description: 'Bữa ăn cân bằng dinh dưỡng',
      },
      {
        title: 'Canh rau ngót nấu tôm',
        cookingTime: 20,
        description: 'Món canh bổ dưỡng cho bà bầu',
      },
      {
        title: 'Sữa chua hoa quả',
        cookingTime: 10,
        description: 'Món tráng miệng giàu probiotics',
      },
    ],
    'Tam cá nguyệt 3': [
      {
        title: 'Cháo bí đỏ thịt bằm',
        cookingTime: 30,
        description: 'Món ăn dễ tiêu hóa cho bà bầu',
      },
      {
        title: 'Gà hấp lá chanh',
        cookingTime: 40,
        description: 'Món ăn nhẹ nhàng, dễ ăn',
      },
      {
        title: 'Canh chua cá lóc',
        cookingTime: 25,
        description: 'Món canh chua ngọt bổ dưỡng',
      },
      {
        title: 'Sinh tố chuối sữa',
        cookingTime: 10,
        description: 'Đồ uống giàu kali cho bà bầu',
      },
      {
        title: 'Salad trái cây',
        cookingTime: 15,
        description: 'Món tráng miệng tươi mát, giàu vitamin',
      },
    ],
    'Ở cữ': [
      {
        title: 'Cháo gà ác',
        cookingTime: 45,
        description: 'Món ăn bổ dưỡng giúp phục hồi sức khỏe',
      },
      {
        title: 'Canh móng giò hầm đu đủ',
        cookingTime: 120,
        description: 'Món canh giúp lợi sữa',
      },
      {
        title: 'Cá chép om dưa',
        cookingTime: 40,
        description: 'Món ăn giàu đạm, tốt cho sản phụ',
      },
      {
        title: 'Soup bí đỏ',
        cookingTime: 30,
        description: 'Món súp dễ ăn, giàu vitamin A',
      },
      {
        title: 'Thịt kho tàu',
        cookingTime: 60,
        description: 'Món ăn truyền thống cho phụ nữ sau sinh',
      },
    ],
    'Cho con bú': [
      {
        title: 'Canh rau ngót nấu thịt bằm',
        cookingTime: 20,
        description: 'Món canh lợi sữa',
      },
      {
        title: 'Cháo đậu xanh thịt nạc',
        cookingTime: 30,
        description: 'Món ăn bổ dưỡng cho mẹ sau sinh',
      },
      {
        title: 'Gà hấp hành gừng',
        cookingTime: 40,
        description: 'Món ăn giúp ấm bụng và lợi sữa',
      },
      {
        title: 'Canh bí đỏ nấu tôm',
        cookingTime: 25,
        description: 'Món canh bổ sung vitamin A',
      },
      {
        title: 'Cá thu kho cà',
        cookingTime: 35,
        description: 'Món ăn giàu DHA tốt cho mẹ và bé',
      },
    ],
    'Ăn dặm': [
      {
        title: 'Cháo bí đỏ',
        cookingTime: 20,
        description: 'Món cháo mềm, dễ ăn cho bé mới tập ăn',
      },
      {
        title: 'Súp cà rốt',
        cookingTime: 25,
        description: 'Món súp giàu vitamin A cho bé',
      },
      {
        title: 'Khoai tây nghiền',
        cookingTime: 15,
        description: 'Món ăn dặm đơn giản, dễ tiêu hóa',
      },
      {
        title: 'Cháo thịt bò cà rốt',
        cookingTime: 30,
        description: 'Món cháo giàu sắt và vitamin',
      },
      {
        title: 'Sữa chua hoa quả',
        cookingTime: 10,
        description: 'Món tráng miệng bổ sung probiotics',
      },
    ],
    '2 tuổi trở lên': [
      {
        title: 'Mì Ý sốt bò bằm',
        cookingTime: 30,
        description: 'Món ăn hấp dẫn cho bé',
      },
      {
        title: 'Cơm cuộn trứng',
        cookingTime: 20,
        description: 'Món ăn vui nhộn và bổ dưỡng',
      },
      {
        title: 'Súp gà rau củ',
        cookingTime: 35,
        description: 'Món súp đầy đủ dinh dưỡng',
      },
      {
        title: 'Bánh kếp chuối',
        cookingTime: 15,
        description: 'Món tráng miệng ngon miệng cho bé',
      },
      {
        title: 'Cá hồi nướng sốt cam',
        cookingTime: 25,
        description: 'Món cá giàu omega-3 cho bé',
      },
    ],
  }

  for (const [subCategoryName, recipes] of Object.entries(subCategoryRecipes)) {
    const subCategory = await prisma.subCategory.findFirst({
      where: { name: subCategoryName },
    })

    for (const recipe of recipes) {
      await prisma.recipe.upsert({
        where: { title: recipe.title },
        create: {
          title: recipe.title,
          thumbnail: 'https://picsum.photos/200/300',
          description: recipe.description,
          cookingTime: recipe.cookingTime,
          subCategories: {
            connect: { id: subCategory?.id },
          },
          ingredients: [
            { name: 'Nguyên liệu 1', image: 'https://picsum.photos/200/300' },
            { name: 'Nguyên liệu 2', image: 'https://picsum.photos/200/300' },
            { name: 'Nguyên liệu 3', image: 'https://picsum.photos/200/300' },
          ],
          steps: [
            { description: 'Bước 1: Chuẩn bị nguyên liệu' },
            { description: 'Bước 2: Chế biến' },
            { description: 'Bước 3: Hoàn thành và trang trí' },
          ],
        },
        update: {
          subCategories: {
            connect: { id: subCategory?.id },
          },
        },
      })
    }
  }

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

export default main
