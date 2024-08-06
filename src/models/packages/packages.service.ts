import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class PackagesService {
  constructor(private prisma: PrismaService) {}

  // async findAll(defaultFindAllQuery: PackageQueryDto) {
  //   const {
  //     perPage = 20,
  //     page = 1,
  //     startAt,
  //     endAt,
  //     searchMany,
  //     searchOne,
  //     status,
  //   } = defaultFindAllQuery;

  //   const where: Prisma.PackageWhereInput = {
  //     created_at: {
  //       gte: startAt,
  //       lte: endAt,
  //     },
  //     id: {
  //       in: searchMany,
  //       contains: searchOne,
  //       mode: 'insensitive',
  //     },
  //     status: status,
  //   };

  //   const [total, data, totalWeight] = await Promise.all([
  //     this.prisma.package.count({
  //       where: where,
  //     }),
  //     this.prisma.package.findMany({
  //       where: where,
  //       orderBy: {
  //         created_at: 'desc',
  //       },
  //       skip: page && perPage ? (page - 1) * perPage : undefined,
  //       take: page && perPage ? perPage : undefined,
  //       include: {
  //         shipments: true,
  //       },
  //     }),
  //     this.prisma.package.aggregate({
  //       where: where,
  //       _sum: {
  //         actual_weight: true,
  //       },
  //     }),
  //   ]);

  //   return {
  //     data: data,
  //     meta: {
  //       currentPage: page,
  //       perPage,
  //       total: total ?? 0,
  //       totalPages: Math.ceil((total ?? 0) / perPage),
  //     },
  //     totalWeight: totalWeight._sum.actual_weight?.toFixed(2) ?? 0,
  //   };
  // }

  // async update(updatePackageDto: UpdatePackageDto) {
  //   await this.prisma.$transaction(
  //     async (prisma) => {
  //       const promises = updatePackageDto.map((item) => {
  //         return prisma.package.update({
  //           where: {
  //             id: item.id,
  //           },
  //           data: {
  //             status: item.status,
  //             actual_weight: item.actual_weight,
  //           },
  //         });
  //       });

  //       await Promise.all(promises);
  //     },
  //     {
  //       isolationLevel: 'Serializable',
  //       maxWait: 5000,
  //       timeout: 15000,
  //     },
  //   );

  //   return {
  //     message: 'Update successfully',
  //   };
  // }

  // async deleteMany(deleteManyPackageDto: DeleteManyPackageDto) {
  //   await this.prisma.$transaction(
  //     async (prisma) => {
  //       await prisma.package.deleteMany({
  //         where: {
  //           id: {
  //             in: deleteManyPackageDto.ids,
  //           },
  //         },
  //       });
  //     },
  //     {
  //       isolationLevel: 'Serializable',
  //       maxWait: 5000,
  //       timeout: 15000,
  //     },
  //   );

  //   return {
  //     message: 'Delete successfully',
  //   };
  // }
}
