import { PrismaClient, CategoryType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Categories
  const categories = [
    {
      name: 'Ẩm thực',
      type: CategoryType.ARTICLE,
      description: 'Khám phá ẩm thực đa dạng từ khắp nơi trên thế giới',
    },
    {
      name: 'Các giai đoạn',
      type: CategoryType.ARTICLE,
      description: 'Món ăn phù hợp cho từng giai đoạn của cuộc sống',
    },
    {
      name: 'Các món ăn cho bà bầu',
      type: CategoryType.ARTICLE,
      description: 'Dinh dưỡng cân bằng cho mẹ bầu',
    },
    {
      name: 'Món ăn dặm cho bé',
      type: CategoryType.ARTICLE,
      description: 'Thực đơn phong phú cho bé tập ăn dặm',
    },
  ];

  for (const category of categories) {
    await prisma.category.create({ data: category });
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
  ];

  for (const subCategory of subCategories) {
    const category = await prisma.category.findUnique({
      where: { name: subCategory.categoryName },
    });
    await prisma.subCategory.create({
      data: {
        name: subCategory.name,
        description: subCategory.description,
        image: `${subCategory.name.toLowerCase().replace(/\s+/g, '-')}.jpg`,
        category: { connect: { id: category.id } },
      },
    });
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
    // Thêm các món ăn cho các subcategory khác ở đây
  };

  for (const [subCategoryName, recipes] of Object.entries(subCategoryRecipes)) {
    const subCategory = await prisma.subCategory.findFirst({
      where: { name: subCategoryName },
    });
    for (const recipe of recipes) {
      await prisma.recipe.create({
        data: {
          title: recipe.title,
          thumbnail: `${recipe.title.toLowerCase().replace(/\s+/g, '-')}.jpg`,
          description: recipe.description,
          cookingTime: recipe.cookingTime,
          subCategory: { connect: { id: subCategory.id } },
          ingredients: [
            { name: 'Nguyên liệu 1', image: 'ingredient1.jpg' },
            { name: 'Nguyên liệu 2', image: 'ingredient2.jpg' },
            { name: 'Nguyên liệu 3', image: 'ingredient3.jpg' },
          ],
          steps: [
            { description: 'Bước 1: Chuẩn bị nguyên liệu' },
            { description: 'Bước 2: Chế biến' },
            { description: 'Bước 3: Hoàn thành và trang trí' },
          ],
        },
      });
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
