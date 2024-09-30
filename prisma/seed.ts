import { GuidelineType, PrismaClient } from '@prisma/client';
import { hashPassword } from 'src/shared/utils/hash';
import { pregnancyTrackingSeed } from './pregnancy-tracking.seed';

const prisma = new PrismaClient();

const generateVaccine = async () => {
  const vaccineHBV = await prisma.vaccine.upsert({
    where: {
      name: 'Viêm gan B (HBV)',
    },
    create: {
      name: 'Viêm gan B (HBV)',
      diseaseDescription: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <p> Viêm gan B là bệnh rất dễ lây qua đường tiêm chích (Dùng chung bơm kim tiêm), quan hệ tình dục, lây truyền từ mẹ sang con (Trong quá trình chuyển dạ đẻ). </p> <p> Bệnh thường gây nên xơ gan, ung thư gan, ảnh hưởng lớn đến sức khoẻ cộng đồng </p> </div>`,
      numberOfInjectionDoses: 5,
      vaccineTypesDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <p>Có thể là 1 trong 3 loại vắc xin sau:</p> <ul> <li>Engerix B</li> <li>Euvax B</li> <li>Hepavax</li> </ul> </div>',
      sideEffects: 'Sưng nóng đỏ tại chỗ tiêm 1-2 ngày',
      injectionDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <p>Cho trẻ từ sơ sinh</p> <p>Lịch tiêm thông thường 3 mũi</p> <ul> <li>Mũi 1: Lần tiêm đầu</li> <li>Mũi 2: 1 tháng sau mũi một</li> <li>Mũi 3: 6 tháng sau mũi một</li> </ul> <p>Lịch tiêm đặc biệt 3 mũi</p> <ul> <li>Mũi 1: Lần tiêm đầu</li> <li>Mũi 2: 1 tháng sau mũi một</li> <li>Mũi 3: 2 tháng sau mũi một</li> <li>Mũi 4: 12 tháng sau mũi một</li> </ul> <p> Lịch tiêm này dùng khi phối hợp với các vắc xin khác, trẻ có mẹ nhiễm viêm gan B, người mới tiếp xúc với nguồn bệnh, người di trú hoặc không thể tuân thủ phác đồ thông thường. Tiêm nhắc lại một mũi sau 5 năm. </p> </div>',
      vaccineDoeses: {
        createMany: {
          data: [
            {
              time: '0-24h sau sinh',
              priority: 1,
              description: `<div style={{fontSize: "10px",fontWeight: "500",lineHeight: "14px",textAlign: "left"}}><h3>Viêm gan B (HBV) - Mũi 1: Tốt nhất tiêm trong vòng 24h sau sinh</h3><p>Cho trẻ sơ sinh</p><ul><li>Lịch tiêm thông thường 3 mũi</li></ul></div>`,
              dueVaccination: 'Mũi 1: tốt nhất tiêm trong vòng 24h sau sinh',
            },
            {
              time: '2 tháng',
              priority: 4,
              description: `<div style={{fontSize: "10px",fontWeight: "500",lineHeight: "14px",textAlign: "left"}}><h3>Viêm gan B (HBV) - Mũi 2</h3><ul><li>Lịch tiêm thông thường 3 mũi</li></ul></div>`,
              dueVaccination: 'Mũi 2',
            },
            {
              time: '3 tháng',
              priority: 7,
              description: `<div style={{fontSize: "10px",fontWeight: "500",lineHeight: "14px",textAlign: "left"}}><h3>Viêm gan B (HBV) - Mũi 3</h3><ul><li>Lịch tiêm thông thường 3 mũi</li></ul></div>`,
              dueVaccination: 'Mũi 3',
            },
            {
              time: '16 tháng',
              priority: 26,
              description: `<div style={{fontSize: "10px",fontWeight: "500",lineHeight: "14px",textAlign: "left"}}><h3>Viêm gan B (HBV) - Nhắc lại</h3><ul><li>Lịch tiêm thông thường 3 mũi</li></ul></div>`,
              dueVaccination: 'Mũi 3',
            },
            {
              time: '60 tháng',
              priority: 32,
              description: `<div style={{fontSize: "10px",fontWeight: "500",lineHeight: "14px",textAlign: "left"}}><h3>Viêm gan B (HBV) - Nhắc lại</h3><ul><li>Lịch tiêm thông thường 3 mũi</li></ul></div>`,
              dueVaccination: 'Mũi 3',
            },
          ],
        },
      },
    },
    update: {},
  });

  const vaccineLao = await prisma.vaccine.upsert({
    where: {
      name: 'Lao',
    },
    create: {
      name: 'Lao',
      diseaseDescription: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <p> Bệnh lao là bệnh truyền nhiễm lây qua đường hô hấp, trẻ nhỏ có thế mắc lao kê, lao màng não rất nguy hiếm. </p> </div>`,
      numberOfInjectionDoses: 1,
      vaccineTypesDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <p>BCG</p> </div>',
      injectionDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <p>Cho trẻ sơ sinh</p> <ul> <li> Lịch tiêm 1 mũi duy nhất. Tiêm càng sớm càng tốt trong tháng đầu tiên sau sinh khi trẻ có cân nặng trên 2500 gram. </li> <li>Liêu dùng: 0.1 ml</li> <li> Đường dùng: tiêm trong da, mặt ngoài phí~ trên cánh tay hoặc vai trái </li> </ul> </div>',
      sideEffects:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <ul> <li> Vắc xin phòng lao sau khi tiêm từ 4- 6 tu. chỗ tiêm sẽ xuất hiện 1 vết mưng đỏ có kích thước bằng hạt đồ xanh, sau khoảng vài tuần vết loét tự lành để lại sẹo có kích thước khoảng 5mm. </li> <li> Có hạch cổ, nách, dưới đòn trái, mủ quá to (đường kính >1 cm) cân khám lại ngay </li> </ul> </div>',
      vaccineDoeses: {
        createMany: {
          data: [
            {
              time: '0-1 tháng',
              priority: 2,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <h3>Lao: Tiêm 01 mũi càng sớm càng tốt trong vòng 30 ngày sau sinh</h3> <p>Cho trẻ sơ sinh:</p> <ul> <li> Lịch tiêm 1 mũi duy nhất, tiêm càng sớm càng sớm trong 1 tháng sau sinh </li> </ul> </div>`,
              dueVaccination:
                'Tiêm 01 mũi càng sớm càng tốt trong vòng 30 ngày sau sinh',
            },
          ],
        },
      },
    },
    update: {},
  });

  const vaccineRota = await prisma.vaccine.upsert({
    where: {
      name: 'Rota',
    },
    create: {
      name: 'Rota',
      diseaseDescription: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <p> Rota virut là nguyên nhân của khoảng 50% tré dưới 5 tuối phải nhập viện vì viêm dạ dày ruột - tiêu chảy nặng. Trẻ mắc Rota virut thường biếu hiện sốt, nôn, tiêu chảy mất nước và phải truyền dịch bù nước. </p> <p> Bệnh không có thuốc điều trị đặc hiệu. Trẻ cân được uống vắc xin càng sớm càng tốt. </p> </div>`,
      numberOfInjectionDoses: 3,
      vaccineTypesDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <p>Có thể là 1 trong 2 tên sau:</p> <ul> <li>Rotarix</li> <li>Rotateq</li> </ul> </div>',
      injectionDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <p>Cho trẻ từ 1,5 tháng tuổi trở lên</p> <div> <span> • Lịch uông 2 liêu: Rotarix (Bí) hai liêu liên tiếp cách nhau tối thiếu 4 tuần </span> <span>- Liều đâu tiên có thế uống sớm lúc 1.5 tháng tuổi</span> <span>- Hoàn thành phác đô trước 6 tháng tuối</span> <span>- Liều dùng 1.5 ml</span> <span>- Đường dùng: đường uống</span> </div> <div> <span> • Lịch uống 3 liều: Rotateq (Mỹ) ba liều liê các liều cách nhau tối thiểu 4 tuần </span> <span>- Liều đầu tiên khi trẻ được 7.5 - 12 tuần</span> <span>- Hoàn thành phác đồ trước 8 tháng tuối</span> <span>- Liêu dùng: 2 ml</span> <span>- Đường dùng: đường uống</span> </div> </div>',
      sideEffects:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <p> Có thế rối loạn tiêu hóa. Thường tự khỏi sau vài ngày. Nếu đi ngoài phân nước nhiều lần, nôn nhiêu, có dâu hiệu mất nước cân khám lại ngay </p> </div>',
      vaccineDoeses: {
        createMany: {
          data: [
            {
              time: '1.5-2 tháng',
              priority: 3,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <h3>Rota - Uống liều 1</h3> <p>Cho trẻ từ 1,5 tháng tuổi trở lên</p> <ul> <li> Lịch uống 2 liều: Rotarix (Bỉ) hai liều liên tiếp cách nhau tối thiểu 4 tuần </li> <li> Lịch uống 3 liều: Rotateq(Mỹ) ba liều liên tiếp, các liều cách nhau tối thiểu 4 tuần. </li> </ul> </div>`,
              dueVaccination: 'Uống liều 1',
            },
            {
              time: '3 tháng',
              priority: 10,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <h3>Rota - Uống liều 2</h3> <p>Cho trẻ từ 1,5 tháng tuổi trở lên</p> <ul> <li> Lịch uống 2 liều: Rotarix (Bỉ) hai liều liên tiếp cách nhau tối thiểu 4 tuần </li> <li> Lịch uống 3 liều: Rotateq(Mỹ) ba liều liên tiếp, các liều cách nhau tối thiểu 4 tuần. </li> </ul> </div>`,
              dueVaccination: 'Uống liều 2',
            },
            {
              time: '4 tháng',
              priority: 12,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <h3>Rota - Uống liều 3</h3> <p>Cho trẻ từ 1,5 tháng tuổi trở lên</p> <ul> <li> Lịch uống 2 liều: Rotarix (Bỉ) hai liều liên tiếp cách nhau tối thiểu 4 tuần </li> <li> Lịch uống 3 liều: Rotateq(Mỹ) ba liều liên tiếp, các liều cách nhau tối thiểu 4 tuần. </li> </ul> </div>`,
              dueVaccination: 'Uống liều 3',
            },
          ],
        },
      },
    },
    update: {},
  });

  const vaccine5in1Or6in1 = await prisma.vaccine.upsert({
    where: {
      name: '5in1 hoặc 6in1',
    },
    create: {
      name: '5in1 hoặc 6in1',
      diseaseDescription: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", display: "flex", flexDirection: "column", alignItems: "start", gap: "8px" }} > <p> Bệnh bạch hâu là bệnh truyền nhiêm lây qua đường hô hấp, bệnh có thế gây biên chứng nặng ở tim và thân kinh. </p> <p> Bệnh ho gà là bệnh truyền nhiêm lây qua đường hô hấp, triệu chứng là ho thành cơn, thường nôn và kiệt sức sau cơn ho. Viêm phối là biển chứng thường gặp và dễ gây tử vong. </p> <p> Uốn ván là bệnh nhiễm trùng nhiềm độc do vi khuân xâm nhập qua vết thương hớ gây co cứng, co giật, ngạt thở dẫn đến tử vong. </p> <p> Bệnh bại liệt là bệnh truyền nhiễm lây qua đường tiêu hóa, trẻ bị bệnh thường có biểu hiện liệt chi, một số trường hợp liệt cơ hô hấp dân tới tử vong. Những trường hợp qua khỏi đế lại di chứng liệt suốt đời. </p> <p> Bệnh viêm phổi và viêm màng não mủ do HIB là những bệnh truyền nhiềm vi khuấn Heamophilus influenzea týp B gây ra, bệnh lây qua đường hô hấp và thường gặp ở trẻ nhỏ. Viêm nàng não mủ do HIB có thể để lại di chứng thân kinh vĩnh viên, tôn thương não, điếc, rồi loạn tâm thân, tý lệ tứ vong cao. </p> <p> Viêm gan B là bệnh rất dễ lây qua đường tiêm chích (dùng chung bơm kim tiêm), quan dục, lây truyền từ mẹ sang con (trong quá trình chuyển dạ đẻ). Bệnh thường gây nên xơ gan, ung thư gan ảnh hướng lớn đến sức khỏe cộng đồng </p> </div>`,
      numberOfInjectionDoses: 4,
      vaccineTypesDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", display: "flex", flexDirection: "column", alignItems: "start", gap: "8px" }} > <p>Có thể chọn 1 trong 3 loại Vắc xin sau:</p> <div style={{ display: "flex", flexDirection: "column" }} > <span>1. Văc xin 6in1 ngừa 6 bệnh:</span> <span>- Bạch hầu</span> <span>- Ho gà</span> <span>- Uốn ván</span> <span>- Bại liệt</span> <span>- Hib</span> <span>- Viêm gan B</span> <span> Hiện nay, tại các trung tâm tiêm chúng dịch vụ đang có 2 loại vacxin 6in1, gôm Infanrix Hexa của Bí và Hexaxim của Pháp </span> </div> <div style={{ display: "flex", flexDirection: "column" }} > <span>2. Vacxin 5in1 Pentaxim ngừa 5 bệnh:</span> <span>- Bạch hầu</span> <span>- Ho gà</span> <span>- Uốn ván</span> <span>- Bại liệt</span> <span>- Hib</span> <span> Được sử dụng trong tiêm chủng dịch vụ, sản xuất tại Pháp và Canada bới công ty dược phẩm Sanofi Pasteur </span> </div> <div style={{ display: "flex", flexDirection: "column" }} > <span> 3. Vacxin 5in1 ComBE Five do Công ty Biological, Ấn Độ sản xuất ngừa 5 bệnh: </span> <span>- Bạch hầu</span> <span>- Ho gà</span> <span>- Uốn ván</span> <span>- Hib</span> <span> Được sử dụng trong tiêm chủng dịch vụ, sản xuất tại Pháp và Canada bới công ty dược phẩm Sanofi Pasteur </span> </div> </div>',
      injectionDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", display: "flex", flexDirection: "column", alignItems: "start", gap: "8px" }} > <div style={{ display: "flex", flexDirection: "column" }} > <span> Cho trẻ từ 2 tháng tuổi trở lên</span> <span>• Lịch tiêm 4 mũi</span> <span> - Mũi 1,2,3: khi trẻ 2,3,4 tháng tuổi hoặc 2,4,6 tháng tuổi. </span> <span>- Mũi 4: khi trẻ 15 - 18 tháng tuối</span> <span>• Liêu dùng: 0.5 ml</span> <span>• Đường dùng: tiêm bắp</span> </div> </div>',
      sideEffects:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <p> Có thể sốt >38,5°C và sưng đau tại chỗ tiêm </p> </div>',
      vaccineDoeses: {
        createMany: {
          data: [
            {
              time: '2 tháng',
              priority: 5,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <h3>5in1 hoặc 6in1 - Mũi 1</h3> <p>Cho trẻ từ 2 tháng tuổi trở lên</p> <ul> <li> Lịch tiêm 4 mũi. </li> </ul> </div>`,
              dueVaccination: 'Mũi 1',
            },
            {
              time: '3 tháng',
              priority: 8,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <h3>5in1 hoặc 6in1 - Mũi 2</h3> <p>Cho trẻ từ 2 tháng tuổi trở lên</p> <ul> <li> Lịch tiêm 4 mũi. </li> </ul> </div>`,
              dueVaccination: 'Mũi 2',
            },
            {
              time: '4 tháng',
              priority: 11,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <h3>5in1 hoặc 6in1 - Mũi 3</h3> <p>Cho trẻ từ 2 tháng tuổi trở lên</p> <ul> <li> Lịch tiêm 4 mũi. </li> </ul> </div>`,
              dueVaccination: 'Mũi 3',
            },
            {
              time: '16 tháng',
              priority: 25,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <h3>5in1 hoặc 6in1 - Mũi 4</h3> <p>Cho trẻ từ 2 tháng tuổi trở lên</p> <ul> <li> Lịch tiêm 4 mũi. </li> </ul> </div>`,
              dueVaccination: 'Mũi 4',
            },
          ],
        },
      },
    },
    update: {},
  });

  const vaccinePheCau = await prisma.vaccine.upsert({
    where: {
      name: 'Phế cầu',
    },
    create: {
      name: 'Phế cầu',
      diseaseDescription: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", display: "flex", flexDirection: "column", alignItems: "start", gap: "8px" }} > <p> Các bệnh viêm phổi, hội chứng nhiễm trùng, viêm màng não, nhiễm khuẩn huyết và viêm tai giữa cấp tính do phế cầu khuấn gây nên là những bệnh nhiễm khuẩn cấp tính. Nếu không điều trị kịp thời tỷ lệ tử vong cao. </p> <p> Văc xin Synflorix là vắc xin phế cầu cộng hợp: dùng cho trẻ từ 6 tuần tuổi đến 5 tuối. </p> </div>`,
      numberOfInjectionDoses: 4,
      vaccineTypesDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <p>Có thể chọn 1 trong 2 loại Vắc xin sau:</p> <ul> <li>Synflorix</li> <li>Prevenar 13</li> </ul> </div>',
      injectionDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", display: "flex", flexDirection: "column", alignItems: "start", gap: "8px" }} > <p>Cho trẻ từ 2 tháng tuổi trở lên</p> <div style={{ display: "flex", flexDirection: "column" }} > <span>• Lịch tiêm 4 mũi cho trẻ từ 2 - 6 tháng tuổi</span> <span>- Mũi 1: lúc 2 tháng tuối</span> <span>- Mũi 2: 1 hoặc 2 tháng sau mũi 1</span> <span>- Mũi 3: 1 hoặc 2 tháng sau mũi 2</span> <span>- Mũi 4: 6 tháng sau mũi ba</span> </div> <div style={{ display: "flex", flexDirection: "column" }} > <span>• Lịch tiêm 3 mũi cho trẻ từ 7 - 11 tháng tuổi</span> <span>- Mũi 1: lân tiêm đầu tiên</span> <span>- Mũi 2: một tháng sau mũi 1</span> <span>- Mũi 3: hai tháng sau mũi 2 và tiêm sau 1 tuổi</span> </div> <div style={{ display: "flex", flexDirection: "column" }} > <span>• Lịch tiêm 2 mũi cho trẻ từ 1 đến 5 tuổi</span> <span>- Mũi 1: lân tiêm đầu tiên</span> <span>- Mũi 2: cách mũi 1 ít nhất hai tháng.</span> </div> <div style={{ display: "flex", flexDirection: "column" }} > <span>• Liều dùng: 0.5ml</span> <span>• Đường dùng: tiêm bắp</span> <span>Không tiêm vắc xin này khi trẻ trên 5 tuối</span> </div> </div>',
      sideEffects:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <p> Có thể sốt >38,5°C và sưng đau tại chỗ tiêm </p> </div>',
      vaccineDoeses: {
        createMany: {
          data: [
            {
              time: '2 tháng',
              priority: 6,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <h3>Phế cầu - Mũi 1</h3> <p>Cho trẻ từ 2 tháng tuổi trở lên</p> <ul> <li>Lịch tiêm 4 mũi cho trẻ từ 2-6 tháng tuổi.</li> <li>Lịch tiêm 3 mũi cho trẻ từ 7-11 tháng tuổi</li> <li>Lịch tiêm 2 mũi cho trẻ từ 1-5 tuổi</li> </ul> </div>`,
              dueVaccination: 'Mũi 1',
            },
            {
              time: '3 - 4 tháng',
              priority: 9,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <h3>Phế cầu - Mũi 2</h3> <p>Cho trẻ từ 2 tháng tuổi trở lên</p> <ul> <li>Lịch tiêm 4 mũi cho trẻ từ 2-6 tháng tuổi.</li> <li>Lịch tiêm 3 mũi cho trẻ từ 7-11 tháng tuổi</li> <li>Lịch tiêm 2 mũi cho trẻ từ 1-5 tuổi</li> </ul> </div>`,
              dueVaccination: 'Mũi 2',
            },
            {
              time: '5 tháng',
              priority: 13,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <h3>Phế cầu - Mũi 3</h3> <p>Cho trẻ từ 2 tháng tuổi trở lên</p> <ul> <li>Lịch tiêm 4 mũi cho trẻ từ 2-6 tháng tuổi.</li> <li>Lịch tiêm 3 mũi cho trẻ từ 7-11 tháng tuổi</li> <li>Lịch tiêm 2 mũi cho trẻ từ 1-5 tuổi</li> </ul> </div>`,
              dueVaccination: 'Mũi 3',
            },
            {
              time: '11 tháng',
              priority: 18,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <h3>Phế cầu - Mũi 4</h3> <p>Cho trẻ từ 2 tháng tuổi trở lên</p> <ul> <li>Lịch tiêm 4 mũi cho trẻ từ 2-6 tháng tuổi.</li> <li>Lịch tiêm 3 mũi cho trẻ từ 7-11 tháng tuổi</li> <li>Lịch tiêm 2 mũi cho trẻ từ 1-5 tuổi</li> </ul> </div>`,
              dueVaccination: 'Mũi 4',
            },
          ],
        },
      },
    },
    update: {},
  });

  const vaccineCumMua = await prisma.vaccine.upsert({
    where: {
      name: 'Cúm mùa',
    },
    create: {
      name: 'Cúm mùa',
      diseaseDescription: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", display: "flex", flexDirection: "column", alignItems: "start", gap: "8px" }} > <p> Bệnh cúm là bệnh truyền nhiễm cấp tính đường hô hấp do virut cúm với triệu chứng chủ yếu là sốt, đau đầu, đau cơ, mệt mói, đau họng và ho. Bệnh nguy hiêm là do lây lan nhanh gây thành dịch, biển chứng chủ yếu là viêm phổi hoặc bội nhiễm vi khuẩn. </p> </div>`,
      numberOfInjectionDoses: 2,
      vaccineTypesDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <p>Có thể chọn 1 trong 2 loại Vắc xin sau:</p> <ul> <li>Vaxigrip</li> <li>Influvac</li> </ul> </div>',
      injectionDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", display: "flex", flexDirection: "column", alignItems: "start", gap: "8px" }} > <p>Cho trẻ từ 6 tháng tuối và người lớn</p> <div style={{ display: "flex", flexDirection: "column" }} > <span>• Lịch tiêm 2 mũi: cho trẻ từ 6 tháng đến 9 tuổi</span> <span>- Mũi 1: lân tiêm đâu tiên</span> <span>- Mũi 2: một tháng sau mũi 1</span> </div> <span> • Lịch tiêm 1 mũi: cho trẻ dưới 9 tuối đã từng tiêm vắc xin cúm, trẻ trên 9 tuối và người lớn </span> <div style={{ display: "flex", flexDirection: "column" }} > <span>• Liêu dùng:</span> <span>- Trẻ từ 6 - 36 tháng tuổi: 0.25ml</span> <span>- Trẻ từ 36 tháng tuối trở lên và người lớn: 0.5 mli</span> <span>• Đường dùng: tiêm bắp</span> </div> <div style={{ display: "flex", flexDirection: "column" }} > <span>Tiêm nhắc một mũi hàng năm sau khi tiên. phác đồ chuẩn</span> <span> Khuyến cáo tiêm chủng cho phụ nữ có thai sau 3 tháng đầu thai kỳ </span> </div> </div>',
      sideEffects:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <p> Có thể sốt >38,5°C, hắt hơi, chảy nước mũi trong (giả cúm), sưng tại chỗ tiêm </p> </div>',
      vaccineDoeses: {
        createMany: {
          data: [
            {
              time: '6 tháng',
              priority: 14,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <h3>Cúm mùa - Mũi 1</h3> <p>Cho trẻ từ 6 tháng tuổi và người lớn</p>  </div>`,
              dueVaccination: 'Mũi 1',
            },
            {
              time: '7 tháng',
              priority: 16,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <h3>Cúm mùa - Mũi 2</h3> <p>Cho trẻ từ 6 tháng tuổi và người lớn</p>  </div>`,
              dueVaccination: 'Mũi 2',
            },
          ],
        },
      },
    },
    update: {},
  });

  const vaccineViemMangNaoBC = await prisma.vaccine.upsert({
    where: {
      name: 'Viêm màng não BC',
    },
    create: {
      name: 'Viêm màng não BC',
      diseaseDescription: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", display: "flex", flexDirection: "column", alignItems: "start", gap: "8px" }} > <p> Bệnh viêm màng não do não mô câu là bệnh truyền nhiễm lây qua đường hô hấp, bệnh có tỷ lệ tử vong cao (đến 50% ở trẻ em), những trường hợp qua khỏi vẫn phải chịu biến chứng như: tâm thần, điếc, liệt, động kinh... </p> </div>`,
      numberOfInjectionDoses: 2,
      vaccineTypesDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <p>VA-Mengoc-BC</p> </div>',
      injectionDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", display: "flex", flexDirection: "column", alignItems: "start", gap: "8px" }} > <p>Cho trẻ từ 6 tháng tuối trở lên và người lớn đến 45 tuổi</p> <div style={{ display: "flex", flexDirection: "column" }}> <span>• Lịch tiêm: 2 mũi cách nhau 2 tháng</span> <span>• Liều dùng: 0.5 ml</span> <span>• Đường dùng: tiêm bắp sâu</span> </div> </div>',
      sideEffects:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <p> Có thể sưng đau tại chỗ tiêm, sốt nhẹ. </p> </div>',
      vaccineDoeses: {
        createMany: {
          data: [
            {
              time: '6 tháng',
              priority: 15,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <h3>Viêm màng não BC - Mũi 1</h3> <p>Cho trẻ từ 6 tháng tuổi trở lên và người lớn đến 45 tuổi</p> <ul> <li>Lịch tiêm: 2 mũi cách nhau 2 tháng</li> </ul> </div>`,
              dueVaccination: 'Mũi 1',
            },
            {
              time: '8 tháng',
              priority: 17,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <h3>Viêm màng não BC - Mũi 2</h3> <p>Cho trẻ từ 6 tháng tuổi trở lên và người lớn đến 45 tuổi</p> <ul> <li>Lịch tiêm: 2 mũi cách nhau 2 tháng</li> </ul> </div>`,
              dueVaccination: 'Mũi 2',
            },
          ],
        },
      },
    },
    update: {},
  });

  const vaccineSoiQuaiBiRubela = await prisma.vaccine.upsert({
    where: {
      name: 'Sởi - Quai bị - Rubela',
    },
    create: {
      name: 'Sởi - Quai bị - Rubela',
      diseaseDescription: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", display: "flex", flexDirection: "column", alignItems: "start", gap: "8px" }} > <p> Bệnh sởi là bệnh truyền nhiêm lây qua đường hô hấp, ở trẻ em bệnh gây suy giảm miễn dịch nên dễ biến chứng viêm phổi, tiêu chảy, suy dinh dưỡng dẫn đến tử vong. </p> <p> Bệnh quai bị là bệnh truyền nhiễm lây qua đường hô hấp. Biếu hiện sưng tuyền nước bọt phía dưới và trước tai là triệu chứng nối bật của bệnh. Biên chứng thường gặp là viêm tinh hoàn hoặc buông trứng dân đến vô sinh, ngoài ra còn có thế gặp biền chứng viêm não, viêm màng não, điếc... Bệnh không có thuốc điều trị đặc hiệu nên tiêm vắc xin là biện pháp tốt nhất đế phòng bệnh. </p> </div>`,
      numberOfInjectionDoses: 2,
      vaccineTypesDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <p>MMR II</p> </div>',
      injectionDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", display: "flex", flexDirection: "column", alignItems: "start", gap: "8px" }} > <p>Cho trẻ từ 12 tháng tuổi và người lớn</p> <div style={{ display: "flex", flexDirection: "column" }} > <span> • Lịch tiêm 2 mũi cho trẻ từ 12 tháng tuối trở lên đến dưới 7 tuổi </span> <span>- Mũi 1: lân tiêm đầu tiên</span> <span>- Mũi 2: khi trẻ 4 - 6 tuối, cách mũi 1 ít nhất một tháng</span> </div> <div style={{ display: "flex", flexDirection: "column" }} > <span>• Lịch tiêm 2 mũi cho trẻ từ 7 tuổi và người lớn</span> <span>- Mũi 1: lân tiêm đầu tiên</span> <span>- Mũi 2: cách mũi 1 ít nhất 1 tháng</span> <span> Phụ nữ nên hoàn tất lịch tiêm trước khi có thai ít nhất 3 tháng </span> </div> <div style={{ display: "flex", flexDirection: "column" }} > <span>• Liều dùng: 0.5ml</span> <span> • Đường dùng: tiêm dưới da, nên tiêm mặt ngoài phía trên cánh tay. </span> </div> </div>',
      sideEffects:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <p> Có thế sưng đau tại chô tiêm, phát ban nhẹ, nôn, ít khi sốt. </p> </div>',
      vaccineDoeses: {
        createMany: {
          data: [
            {
              time: '12 tháng',
              priority: 19,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <h3>Sởi, Quai bị, Rubella - Mũi 1</h3> <p>Cho trẻ từ 12 tháng tuổi và người lớn</p> <ul> <li> Lịch tiêm 2 mũi cho trẻ từ 12 tháng tuổi trở lên đến dưới 7 tuổi </li> <li>Lịch tiêm 2 mũi cho trẻ từ 7 tuổi và người lớn</li> </ul> </div>`,
              dueVaccination: 'Mũi 1',
            },
            {
              time: '13 - 14 tháng',
              priority: 23,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <h3>Sởi, Quai bị, Rubella - Mũi 2</h3> <p>Cho trẻ từ 12 tháng tuổi và người lớn</p> <ul> <li> Lịch tiêm 2 mũi cho trẻ từ 12 tháng tuổi trở lên đến dưới 7 tuổi </li> <li>Lịch tiêm 2 mũi cho trẻ từ 7 tuổi và người lớn</li> </ul> </div>`,
              dueVaccination: 'Mũi 2',
            },
          ],
        },
      },
    },
    update: {},
  });

  const vaccineViemNaoNB = await prisma.vaccine.upsert({
    where: {
      name: 'Viêm não Nhật Bản B',
    },
    create: {
      name: 'Viêm não Nhật Bản B',
      diseaseDescription: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", display: "flex", flexDirection: "column", alignItems: "start", gap: "8px" }} > <p> Bệnh Viêm não Nhật Bản là bệnh truyền nhiễm do muỗi truyền, bệnh thường gặp ở trẻ em dưới 15 tuổi với biểu hiện viêm não, màng não, có thể để lại di chứng nặng nề về tinh thần và vận động (liệt, rối loạn tâm thần...) </p> <p> Bệnh không có thuốc điều trị đặc hiệu nên tiêm vắc xin là biện pháp tốt nhất để phòng bệnh. </p> </div>`,
      numberOfInjectionDoses: 3,
      vaccineTypesDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <p>Jevax</p> </div>',
      injectionDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", display: "flex", flexDirection: "column", alignItems: "start", gap: "8px" }} > <p>Cho trẻ từ 12 tháng tuổi và người lớn</p> <div style={{ display: "flex", flexDirection: "column" }} > <span>• Lịch tiêm 3 mũi</span> <span>- Mũi 1: lân tiêm đâu tiên</span> <span>- Mũi 2: một đến hai tuân sau mũi 1</span> <span>- Mũi 3: một năm sau mũi 1</span> <span>Tiêm nhắc một mũi môi 3 năm</span> </div> <div style={{ display: "flex", flexDirection: "column" }} > <span>• Liều dùng</span> <span>- Trẻ dưới 3 tuối: 0.5ml</span> <span>- Trẻ trên 3 tuổi và người lớn: 1ml</span> </div> <p> • Đường dùng: tiêm dưới da, nên tiêm mặt ngoài phía trên cánh tay. </p> </div>',
      sideEffects:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <p> Có thể sưng đau tại chỗ tiêm, nhức đầu. </p> </div>',
      vaccineDoeses: {
        createMany: {
          data: [
            {
              time: '12 tháng',
              priority: 20,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <h3>Viêm não Nhật Bản B - Mũi 1</h3> <p>Cho trẻ từ 12 tháng tuổi và người lớn</p> <ul> <li> Lịch tiêm 3 mũi </li> </ul> </div>`,
              dueVaccination: 'Mũi 1',
            },
            {
              time: '13 - 14 tháng',
              priority: 24,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <h3>Viêm não Nhật Bản B - Mũi 2</h3> <p>Cho trẻ từ 12 tháng tuổi và người lớn</p> <ul> <li> Lịch tiêm 3 mũi </li> </ul> </div>`,
              dueVaccination: 'Mũi 2',
            },
            {
              time: '25 - 26 tháng',
              priority: 30,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <h3>Viêm não Nhật Bản B - Nhắc lại</h3> <p>Cho trẻ từ 12 tháng tuổi và người lớn</p> <ul> <li> Lịch tiêm 3 mũi </li> </ul> </div>`,
              dueVaccination: 'Nhắc lại',
            },
          ],
        },
      },
    },
    update: {},
  });

  const vaccineThuyDau = await prisma.vaccine.upsert({
    where: {
      name: 'Thuỷ đậu',
    },
    create: {
      name: 'Thuỷ đậu',
      diseaseDescription: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", display: "flex", flexDirection: "column", alignItems: "start", gap: "8px" }} > <p> Thủy đậu là bệnh truyền nhiễm lây qua đường hô hấp, tiêp xúc trực tiếp qua mụn nước trên da hoặc có thể truyền từ mẹ sang con. </p> <p> Bệnh có thể có những biển chứng như bội nhiễm nốt phỏng rạ để lại sẹo vĩnh viễn hoặc biến chứng nhiễm trùng huyết, viêm mô tế bào, viêm phối, viêm não... </p> </div>`,
      numberOfInjectionDoses: 2,
      vaccineTypesDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <p>Có thế là 1 trong 3 tên sau:</p> <ul> <li>Varivax</li> <li>Varilrix</li> <li>Varicella</li> </ul> </div>',
      injectionDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", display: "flex", flexDirection: "column", alignItems: "start", gap: "8px" }} > <p>Cho trẻ từ 12 tháng tuổi và người lớn chưa từng mắc bệnh</p> <div style={{ display: "flex", flexDirection: "column" }} > <span> • Lịch tiêm cho trẻ từ 12 tháng tuối đến 12 tuối: tiêm 2 mũi cách nhau ít nhất 3 tháng </span> <span>Lịch tiêm khuyến cáo ở trẻ nhỏ dưới 4 tuối:</span> <span>- Mũi 1: lúc 12 tháng tuổi</span> <span>- Mũi 2: lúc 4-6 tuổi</span> </div> <div style={{ display: "flex", flexDirection: "column" }} > <span> • Lịch tiêm cho trẻ em từ 13 tuổi trở lên và người lớn: Tiêm 2 mũi cách nhau ít nhất 1.5 tháng </span> <span> Phụ nữ nên hoàn tất lịch tiêm trước khi có thai ít nhất 3 tháng </span> </div> <div style={{ display: "flex", flexDirection: "column" }} > <span>• Liêu dùng: 0.5ml</span> <span> • Đường dùng: tiêm dưới da, nên tiêm mặt ngoài phía trên cánh tay </span> </div> </div>',
      sideEffects:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <p> Có thế gặp sốt kèm phát ban sau 1-3 tuần. Sưng quâng đỏ tại chỗ tiêm 1-2 ngày. </p> </div>',
      vaccineDoeses: {
        createMany: {
          data: [
            {
              time: '12 tháng',
              priority: 21,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <h3>Thuỷ đậu - Mũi 1</h3> <p>Cho trẻ từ 12 tháng tuổi và người lớn chưa từng mắc bệnh</p> </div>`,
              dueVaccination: 'Mũi 1',
            },
            {
              time: '47 - 48 tháng',
              priority: 31,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <h3>Thuỷ đậu - Mũi 2</h3> <p>Cho trẻ từ 12 tháng tuổi và người lớn chưa từng mắc bệnh</p> </div>`,
              dueVaccination: 'Mũi 2',
            },
          ],
        },
      },
    },
    update: {},
  });

  const vaccineViemGanA = await prisma.vaccine.upsert({
    where: {
      name: 'Viêm gan A',
    },
    create: {
      name: 'Viêm gan A',
      diseaseDescription: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", display: "flex", flexDirection: "column", alignItems: "start", gap: "8px" }} > <p> Bệnh viêm gan A là bệnh truyền nhiêm cấp tính gây dịch. Bệnh lây qua đường tiêu hóa gây tổn thương chủ yếu ở nhu mô gan. </p> <p>Biến chứng cũng có thế dẫn đến xơ gan và ung thư gan.</p> </div>`,
      numberOfInjectionDoses: 2,
      vaccineTypesDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <p>Có thế là 1 trong 2 tên sau:</p> <ul> <li>Avaxim</li> <li>Havax</li> </ul> </div>',
      injectionDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", display: "flex", flexDirection: "column", alignItems: "start", gap: "8px" }} > <p>Cho trẻ từ 12 tháng tuổi và người lớn.</p> <div style={{ display: "flex", flexDirection: "column" }} > <span>• Lịch tiêm 2 mũi cách nhau ít nhất 6 - 12 tháng</span> <span>• Liêu dùng:</span> <span>Avaxim</span> <span> - Trẻ em từ 12 tháng tuổi - 15 tuổi: Avaxim 80UI 0.5ml</span> <span>- Người từ 16 tuổi trở lên: Avaxim 160UI 0.5ml</span> <span>Havax</span> <span>- Trẻ em từ 24 tháng tuổi - dưới 18 tuổi: havax 0,5ml</span> <span>- Người lớn từ 18 tuối trở lên: Havax 1ml</span> <span>• Đường dùng: tiêm bắp</span> </div> </div>',
      sideEffects:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <p> Ít tác dụng phụ, có thể sưng quầng đỏ tại chỗ tiêm 1-2 ngày. </p> </div>',
      vaccineDoeses: {
        createMany: {
          data: [
            {
              time: '12 - 15 tháng',
              priority: 22,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <h3>Viêm gan A - Mũi 1</h3> <p>Cho trẻ từ 12 tháng tuổi và người lớn</p> <ul> <li>Lịch tiêm 2 mũi cách nhau ít nhất 6-12 tháng</li> </ul> </div>`,
              dueVaccination: 'Mũi 1',
            },
            {
              time: '18 - 24 tháng',
              priority: 27,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <h3>Viêm gan A - Mũi 2</h3> <p>Cho trẻ từ 12 tháng tuổi và người lớn</p> <ul> <li>Lịch tiêm 2 mũi cách nhau ít nhất 6-12 tháng</li> </ul> </div>`,
              dueVaccination: 'Mũi 2',
            },
          ],
        },
      },
    },
    update: {},
  });

  const vaccineViemMangNaoAC = await prisma.vaccine.upsert({
    where: {
      name: 'Viêm màng não AC',
    },
    create: {
      name: 'Viêm màng não AC',
      diseaseDescription: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", display: "flex", flexDirection: "column", alignItems: "start", gap: "8px" }} > <p> Bệnh viêm màng não do não mô câu là bệnh truyền nhiễm lây qua đường hô hấp, bệnh có tỷ lệ tử vong cao (đến 50% ở trẻ em), những trường hợp qua khỏi vân phải chịu biển chứng như: tâm thần, điếc, liệt, động kinh... </p> </div>`,
      numberOfInjectionDoses: 1,
      vaccineTypesDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <p>Meningo A+C</p> </div>',
      injectionDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", display: "flex", flexDirection: "column", alignItems: "start", gap: "8px" }} > <div style={{ display: "flex", flexDirection: "column" }} > <span>Cho trẻ từ 2 tuổi và người lớn</span> <span>• Lịch tiêm 1 mũi</span> <span>• Liều dùng: 0.5 ml</span> <span>• Đường dùng: tiêm bắp</span> <span>Tiêm nhắc một mũi mỗi 3 năm</span> </div> </div>',
      sideEffects:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <p> Có thể sưng đau tại chỗ tiêm, sốt nhẹ. </p> </div>',
      vaccineDoeses: {
        createMany: {
          data: [
            {
              time: '24 tháng',
              priority: 28,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <h3>Viêm màng não AC</h3> <p>Cho trẻ từ 2 tuổi và người lớn</p> <ul> <li>Lịch tiêm 1 mũi</li> </ul> </div>`,
              dueVaccination: '',
            },
          ],
        },
      },
    },
    update: {},
  });

  const vaccineThuongHan = await prisma.vaccine.upsert({
    where: {
      name: 'Thương hàn',
    },
    create: {
      name: 'Thương hàn',
      diseaseDescription: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", display: "flex", flexDirection: "column", alignItems: "start", gap: "8px" }} > <p> Bệnh thương hàn là bệnh lây truyền qua đường tiêu hóa. Biểu hiện chính của bệnh là sốt tăng dần, rối loạn tiêu hóa, gan to. Chảy máu ruột và thủng ruột là biến chứng thường gặp và gây tử vong. </p> </div>`,
      numberOfInjectionDoses: 1,
      vaccineTypesDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <p>Typhim VI</p> </div>',
      injectionDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", display: "flex", flexDirection: "column", alignItems: "start", gap: "8px" }} > <div style={{ display: "flex", flexDirection: "column" }} > <span>Cho trẻ từ 2 tuổi trở lên và người lớn</span> <span>• Lịch tiêm 1 mũi</span> <span>• Liều dùng: 0.5 ml</span> <span>• Đường dùng: tiêm bắp hoặc dưới da</span> <span>Tiêm nhắc: mỗi 3 năm nếu có nguy cơ nhiễm bệnh</span> </div> </div>',
      sideEffects:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <p>  </p> </div>',
      vaccineDoeses: {
        createMany: {
          data: [
            {
              time: '24 tháng',
              priority: 29,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <h3>Thương hàn - Tiêm 1 mũi</h3> <p>Cho tuổi từ 2 tuổi trở lên và người lớn</p> <ul> <li>Lịch tiêm 1 mũi</li> </ul> </div>`,
              dueVaccination: 'Tiêm 1 mũi',
            },
          ],
        },
      },
    },
    update: {},
  });

  const vaccineHPV = await prisma.vaccine.upsert({
    where: {
      name: 'Ung thư cổ tử cung, u nhú cho HPV',
    },
    create: {
      name: 'Ung thư cổ tử cung, u nhú cho HPV',
      diseaseDescription: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", display: "flex", flexDirection: "column", alignItems: "start", gap: "8px" }} > <p> Ung thư cổ tử cung là bệnh nguy hiểm. Số mắc cố tứ cung ớ phụ nữ đứng hàng thứ 2 trên thể giới sau ung thư vú. Hàng năm, trên thế giới có khoảng 520.000 phụ nữ măc mới ung thư cố tử cung và hơn 274.000 người tử vong vì căn bệnh này, trong đó có Việt Nam. </p> <p> Bệnh tiến triển âm thầm thường không có biểu hiện rõ, khi phát hiện được thường ở giai đoạn muộn (giai đoạn tiền ung thư hoặc ung thư) </p> </div>`,
      numberOfInjectionDoses: 1,
      vaccineTypesDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <p>Có thể là 1 trong 2 tên sau</p> <ul> <li>Cervarix</li> <li>Gardasil</li> </ul> </div>',
      injectionDescription:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", display: "flex", flexDirection: "column" }} > <span>Cho trẻ gái từ 9 tuổi đến 26 tuổi</span> <span>• Lịch tiêm 3 mũi</span> <span>- Mũi 1: lân tiêm đâu tiên</span> <span>- Mũi 2: 1-2 tháng sau mũi 1</span> <span>- Mũi 3: 6 tháng sau mũi 1</span> <span> Khi cân điều chính lịch tiêm thì mũi 2 phải cách mũi 1 ít nhất một tháng và mũi 3 phải cách mũi 2 ít nhất ba tháng. </span> <span>• Liêu dùng: 0.5ml</span> <span>• Đường dùng: tiêm bắp</span> </div>',
      sideEffects:
        '<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px", textAlign: "left" }} > <p> Tại chỗ tiêm: có thể ban đỏ, sưng, đau, ngứa </p> </div>',
      vaccineDoeses: {
        createMany: {
          data: [
            {
              time: '24 tháng',
              priority: 33,
              description: `<div style={{ fontSize: "10px", fontWeight: "500", lineHeight: "14px" }} > <h3>Ung thư cổ tử cung, u nhú cho HPV - Mũi 1</h3> <p>Cho trẻ gái từ 9 tuổi đến 26 tuổi</p> <ul> <li>Lịch tiêm 3 mũi</li> </ul> </div>`,
              dueVaccination: 'Mũi 1',
            },
          ],
        },
      },
    },
    update: {},
  });
};

async function main() {
  const password = await hashPassword('123123a');

  await prisma.account.upsert({
    where: {
      username: 'admin@gmail.com',
    },
    update: {},
    create: {
      username: 'admin@gmail.com',
      password,
      role: 'ADMIN',
    },
  });

  await prisma.account.upsert({
    where: {
      username: 'netbase@gmail.com',
    },
    update: {},
    create: {
      username: 'netbase@gmail.com',
      password,
      role: 'USER',
    },
  });

  await prisma.group.upsert({
    where: {
      name: 'Group 1',
    },
    update: {},
    create: {
      name: 'Group 1',
      description: 'Description of Group 1',
      background: 'https://source.unsplash.com/random',
    },
  });

  await prisma.group.upsert({
    where: {
      name: 'Group 2',
    },
    update: {},
    create: {
      name: 'Group 2',
      description: 'Description of Group 2',
      background: 'https://source.unsplash.com/random',
    },
  });

  await prisma.group.upsert({
    where: {
      name: 'Group 3',
    },
    update: {},
    create: {
      name: 'Group 3',
      description: 'Description of Group 3',
      background: 'https://source.unsplash.com/random',
    },
  });

  await prisma.category.upsert({
    where: {
      name: 'Chưa có thai',
    },
    create: {
      name: 'Chưa có thai',
      subCategories: {
        createMany: {
          data: [
            {
              name: 'Di truyền và giới tính',
              image: 'https://source.unsplash.com/random',
            },
            {
              name: 'Tâm lý & sức khoẻ',
              image: 'https://source.unsplash.com/random',
            },
          ],
        },
      },
    },
    update: {},
  });

  const category_1 = await prisma.category.upsert({
    where: {
      name: 'Đang mang thai',
    },
    create: {
      name: 'Đang mang thai',
      subCategories: {
        createMany: {
          data: [
            {
              name: 'Thai nhi theo tuần tuổi',
              image: 'https://source.unsplash.com/random',
            },
            {
              name: 'Thay đổi của mẹ',
              image: 'https://source.unsplash.com/random',
            },
          ],
        },
      },
    },
    update: {},
    include: {
      subCategories: true,
    },
  });

  const category_2 = await prisma.category.upsert({
    where: {
      name: 'Nuôi con nhỏ',
    },
    create: {
      name: 'Nuôi con nhỏ',
      subCategories: {
        createMany: {
          data: [
            {
              name: 'Trẻ sơ sinh',
              image: 'https://source.unsplash.com/random',
            },
            {
              name: 'Thuốc và tiêm phòng',
              image: 'https://source.unsplash.com/random',
            },
            {
              name: 'Bệnh thường gặp',
              image: 'https://source.unsplash.com/random',
            },
          ],
        },
      },
    },
    update: {},
    include: {
      subCategories: true,
    },
  });

  await prisma.article.upsert({
    where: {
      id: '66d0a109f12e64855b2e2531',
    },
    create: {
      id: '66d0a109f12e64855b2e2531',
      title: 'Bé sơ sinh tuần thứ 1',
      content: 'Nội dung bí quyết chăm sóc trẻ sơ sinh',
      subCategory: {
        connect: {
          id: category_1.subCategories[0].id,
        },
      },
      description:
        'Sự phát triển và những điều cần chú ý khi nuôi dưỡng bé sơ sinh 1 tuần tuổi.',
      thumbnail:
        'https://pub-402f41e20b984c66a583408bb7b47aeb.r2.dev/1706770133_avatar_1706770133%201.png',
    },
    update: {},
  });

  await prisma.article.upsert({
    where: {
      id: '66d0a109f12e64855b2e2533',
    },
    create: {
      id: '66d0a109f12e64855b2e2533',
      title: 'Bé sơ sinh tuần thứ 2',
      content: 'Nội dung bí quyết chăm sóc trẻ sơ sinh',
      subCategory: {
        connect: {
          id: category_1.subCategories[0].id,
        },
      },
      description:
        'Sự phát triển và những điều cần chú ý khi nuôi dưỡng bé sơ sinh 2 tuần tuổi.',
      thumbnail:
        'https://pub-402f41e20b984c66a583408bb7b47aeb.r2.dev/1706770133_avatar_1706770133%201.png',
    },
    update: {},
  });

  await prisma.article.upsert({
    where: {
      id: '66d0a109f12e64855b2e2534',
    },
    create: {
      id: '66d0a109f12e64855b2e2534',
      title: 'Bé sơ sinh tuần thứ 3',
      content: 'Nội dung bí quyết chăm sóc trẻ sơ sinh',
      subCategory: {
        connect: {
          id: category_1.subCategories[0].id,
        },
      },
      description:
        'Sự phát triển và những điều cần chú ý khi nuôi dưỡng bé sơ sinh 3 tuần tuổi.',
      thumbnail:
        'https://pub-402f41e20b984c66a583408bb7b47aeb.r2.dev/1706770133_avatar_1706770133%201.png',
    },
    update: {},
  });

  await prisma.article.upsert({
    where: {
      id: '66d0a109f12e64855b2e2532',
    },
    create: {
      id: '66d0a109f12e64855b2e2532',
      title: 'Bài 1: Di truyền nhóm máu',
      content: 'Nội dung bí quyết chăm sóc trẻ sơ sinh',
      subCategory: {
        connect: {
          id: category_2.subCategories[0].id,
        },
      },
      description:
        'Di truyền nhóm máu có quy luật hơn so với di truyền về ngoại hình và cũng dễ suy đoán...',
      thumbnail:
        'https://pub-402f41e20b984c66a583408bb7b47aeb.r2.dev/1706770133_avatar_1706770133%201.png',
    },
    update: {},
  });

  const foodCategories = await Promise.all([
    prisma.foodCategory.upsert({
      where: { name: 'Ngũ cốc nguyên hạt' },
      update: {},
      create: {
        name: 'Ngũ cốc nguyên hạt',
        imageUrl:
          'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/11/9/veggies-1667967142376-1667967142662941776652.jpg',
      },
    }),
    prisma.foodCategory.upsert({
      where: { name: 'Rau củ' },
      update: {},
      create: {
        name: 'Rau củ',
        imageUrl:
          'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/11/9/veggies-1667967142376-1667967142662941776652.jpg',
      },
    }),
    prisma.foodCategory.upsert({
      where: { name: 'Gia vị' },
      update: {},
      create: {
        name: 'Gia vị',
        imageUrl:
          'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/11/9/veggies-1667967142376-1667967142662941776652.jpg',
      },
    }),
    prisma.foodCategory.upsert({
      where: { name: 'Các loại hạt' },
      update: {},
      create: {
        name: 'Các loại hạt',
        imageUrl:
          'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/11/9/veggies-1667967142376-1667967142662941776652.jpg',
      },
    }),
    prisma.foodCategory.upsert({
      where: { name: 'Trái cây' },
      update: {},
      create: {
        name: 'Trái cây',
        imageUrl:
          'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/11/9/veggies-1667967142376-1667967142662941776652.jpg',
      },
    }),
  ]);

  // Seed Foods with Guidelines
  await prisma.food.upsert({
    where: { name: 'Gạo lứt' },
    update: {},
    create: {
      name: 'Gạo lứt',
      description: 'Gạo lứt là loại ngũ cốc nguyên hạt, giàu dinh dưỡng.',
      imageUrl:
        'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/11/9/veggies-1667967142376-1667967142662941776652.jpg',
      foodCategoryId: foodCategories[0].id, // Ngũ cốc nguyên hạt
      guidelines: {
        create: [
          {
            name: 'Mang thai',
            type: GuidelineType.CAN_EAT,
            description: 'Gạo lứt có thể ăn, tốt cho sức khỏe.',
          },
          {
            name: 'Hậu sản',
            type: GuidelineType.CAN_EAT_NOT_RECOMMENDED,
            description: 'Ăn gạo lứt nhiều có thể gây khó tiêu.',
          },
        ],
      },
    },
  });

  await prisma.food.upsert({
    where: { name: 'Cà rốt' },
    update: {},
    create: {
      name: 'Cà rốt',
      description: 'Cà rốt giàu vitamin A, tốt cho mắt và da.',
      imageUrl:
        'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/11/9/veggies-1667967142376-1667967142662941776652.jpg',
      foodCategoryId: foodCategories[1].id, // Rau củ
      guidelines: {
        create: [
          {
            name: 'Mang thai',
            type: GuidelineType.CAN_EAT,
            description: 'Có thể ăn cà rốt, tốt cho sức khỏe.',
          },
          {
            name: 'Hậu sản',
            type: GuidelineType.SHOULD_NOT_EAT,
            description: 'Không nên ăn quá nhiều cà rốt, có thể gây vàng da.',
          },
        ],
      },
    },
  });

  await generateVaccine();

  await pregnancyTrackingSeed();

  console.log('seed success');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
