import { CategoryType, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const categories = [
  {
    name: 'Cổ tích Việt Nam',
    type: CategoryType.STORY,
    image: 'https://storage.happymom.vn/co-tich-viet-nam.png',
  },
  {
    name: 'Truyện cổ thế giới',
    type: CategoryType.STORY,
    image: 'https://storage.happymom.vn/truyen-co-the-gioi.png',
  },
  {
    name: 'Truyện ngụ ngôn',
    type: CategoryType.STORY,
    image: 'https://storage.happymom.vn/truyen-ngu-ngon.png',
  },
  {
    name: 'Truyện cổ Andersen',
    type: CategoryType.STORY,
    image: 'https://storage.happymom.vn/truyen-co-andersen.png',
  },
  {
    name: 'Truyện cổ Grim',
    type: CategoryType.STORY,
    image: 'https://storage.happymom.vn/truyen-co-grim.png',
  },
  {
    name: 'Nghìn lẻ một đêm',
    type: CategoryType.STORY,
    image: 'https://storage.happymom.vn/nghin-le-mot-dem.png',
  },
  {
    name: 'Thần thoại Hy Lạp',
    type: CategoryType.STORY,
    image: 'https://storage.happymom.vn/than-thoai-hy-lap.png',
  },
]

type CategoryStoryType =
  | 'Cổ tích Việt Nam'
  | 'Truyện cổ thế giới'
  | 'Truyện ngụ ngôn'
  | 'Truyện cổ Andersen'
  | 'Truyện cổ Grim'
  | 'Nghìn lẻ một đêm'
  | 'Thần thoại Hy Lạp'

const stories: Record<CategoryStoryType, { name: string; content: string }[]> =
  {
    'Cổ tích Việt Nam': [
      {
        name: 'Anh em họ Điền',
        content: `<div class="wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
        <p></p><div style="clear: both; text-align: center; visibility: visible; animation-name: fadeIn;" class="wow fadeIn"><a style="margin-left: 1em; margin-right: 1em;" href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVfZzDT6MMIDmNQ62GCzSU3TMRXf5ioMYDkpEgqv21dP6PHtpF59rP529k-hoKEyfMtYRnI34BlVSQ26oMcwQG_SUMrgebPRpLBQ1EyDW14sn18-rA16-k7SR9U6VQh4b0eU9zc0wJ3bidi33FgGtQQAyLskhC4XiEi0ab2nEPmBOQMMef9XLNxULgDdBu/s799/truye%CC%A3%CC%82n%20co%CC%82%CC%89%20ti%CC%81ch%20anh%20em%20ho%CC%A3%20%C4%91ie%CC%82%CC%80n%20.jpg"><img decoding="async" src="http://truyenthieunhi.net/wp-content/uploads/2024/06/truyeCCA3CC82n20coCC82CC8920tiCC81ch20anh20em20hoCCA320C491ieCC82CC80n20.jpg" border="0" data-original-height="799" data-original-width="799"></a></div>
<p><span style="font-family: arial; font-size: medium;">&nbsp;</span></p>
<p style="height: 0px;">
</p><p>Ngày xưa, có dòng&nbsp;<a href="https://truyenthieunhi.net/2020/03/anh-em-ho-dien.html" target="_blank" rel="noopener">họ Điền</a>, anh em sống với nhau từ đời nọ tới đời kia rất hòa thuận. Về sau họ này chỉ còn có 3 anh em. Ba người vẫn chung sống với nhau vui vẻ tử tế, cho đến khi người thứ hai lấy vợ. Người vợ tính tình ích kỉ, lại hay sinh sự, lắm lời, nên không khí trong gia đình không còn được như xưa.<span id="more-340"></span>&nbsp;Rồi một hôm người vợ nhất quyết đòi chia gia tài của ba anh em, và bắt ép chồng đi ở riêng. Người chồng ban đầu nghĩ tình anh em bấy lâu nay sum họp mà không nỡ chia lìa, nhưng vì người vợ ngày đêm cằn nhằn khó chịu, kiếm chuyện gây gổ trong nhà, nên rồi cũng đành phải nghe theo vợ, nói với anh em đi ở riêng.&nbsp;<a href="https://truyenthieunhi.net/2020/03/anh-em-ho-dien.html" target="_blank" rel="noopener">Người anh</a>&nbsp;cả khuyên can không được cũng đành phải chia của cha mẹ để lại ra làm 3 phần đều nhau. Chỉ còn một cây cổ thụ trước nhà, cành lá sum xuê xanh tốt, chưa biết làm cách nào để chia cho đều. Ba anh em cùng nghĩ ngợi, rồi sau cùng quyết định gọi thợ về hạ cây xuống, cưa xẻ thành ván để chia làm 3 phần.</p>
<p>Đền hôm định hạ cây xuống, buổi sáng 3 anh em ra vườn thì thấy cây cổ thụ đã khô héo từ bao giờ. Người anh cả bèn ôm lấy cây mà khóc nức nở. Hai người em thấy vậy mới bảo anh:</p>
<p>“Một thân cây khô héo, giá phỏng là bao mà anh phải thương tiếc như thế?</p>
<p><a href="https://truyenthieunhi.net/2020/03/anh-em-ho-dien.html" target="_blank" rel="noopener">Người anh</a>&nbsp;cả đáp lại rằng: “Có phải anh khóc vì tiếc cây đâu, song nghĩ vì loài cây cỏ vô tri kia nghe thấy sắp phải chia lìa mà mà còn biết buồn phiền khô héo đi, huống gì chúng ta đây là người cùng ruột thịt. Anh thấy cây mà suy đến cảnh anh em chúng ta, anh mới phải khóc.”</p>
<p>Nghe anh nói, hai người em hiểu ý đưa mắt nhìn nhau rồi cùng òa khóc. Người vợ xúi chồng đi ở riêng thấy vậy cũng rơm rớm nước mắt, đâm ra hối hận, cúi đầu xin lỗi 2 anh và thề không bao giò còn tính đến việc chia lìa nhau nữa.</p>
<p>Từ hôm đó, 3<a href="https://truyenthieunhi.net/2020/03/anh-em-ho-dien.html" target="_blank" rel="noopener">&nbsp;anh em</a>&nbsp;lại ở với nhau êm ấm, vui vẻ như trước. Cây cổ thụ nọ đã khô héo cũng trở lại xanh tươi như trước.</p>
<p></p>
      </div>`,
      },
      {
        name: 'Anh chàng nghèo khổ',
        content: `<div style="text-align: justify; visibility: visible; animation-name: fadeIn;" class="wow fadeIn">
<p>Ngày xưa có hai mẹ con nhà nọ nghèo rớt mồng tơi, anh chàng lang thang đi kiếm việc làm nhưng chả có ai cho thuê cả. Mãi sau, có một chủ thuyền buôn thấy anh khoẻ mạnh, lại biết bơi lội mới thuê anh về làm thuỷ thủ, hắn hứa cho anh cơm một ngày ba bữa và một năm bốn mươi quan tiền trả trước. Anh chàng tưởng không có nỗi mừng nào hơn thế nữa, vội cầm ba mươi quan về cho mẹ tiêu, còn mười quan thì mang theo định để dành may mặc.</p>
<p>Thuyền cất hàng, vượt biển luôn năm ngày đến một thị trấn lớn. Trên bến người mua kẻ bán chen chúc như hội. Bọn thuỷ thủ bảo chàng:</p>
<p>– Ở đây buôn thứ gì cũng được. Cứ mua một ít đưa về quê nhà bán là tự khắc có lãi.</p>
<p>Anh chàng xưa nay không quen buôn nên cầm mười quan tiền trong tay, chưa biết nên mua thứ hàng gì. Bỗng chốc, anh thấy có một người mang ra bến một con chó bị trói toan vứt xuống sông. Lấy làm thương, anh vội ngăn lại và hỏi duyên cớ. Người ấy cho biết chó này là của chủ mình. Hôm nay chủ đi chợ mua thịt dọn tiệc, không rõ cất đặt thế nào để chó ăn vụng mất cả. Chủ tức giận trói chó đánh một trận thừa sống thiếu chết rồi sai đi bỏ sông. Nghe kể thế, anh chàng xin mua lại con chó. Người kia cười mà rằng:</p>
<p>– Nó chỉ chuyên môn ăn vụng, anh mua về làm gì?</p>
<p>Chàng nghèo đáp:</p>
<p>– Thây kệ, cứ bán nó cho tôi đi!</p>
<p>Cuối cùng anh chàng xỉa ra ba quan mua lại con chó. Anh cởi trói cho nó rồi xích lại bên chỗ mình làm việc.</p>
<p>Sau đó một chốc, anh lại trông thấy có một người đàn bà mang một con mèo toan vứt xuống sông. Anh chàng vội ngăn lại và hỏi duyên cớ. Khi biết tội trạng của mèo cũng chỉ là ăn vụng, anh nài nỉ để con vật lại cho mình. Thấy người đàn bà khuyên không nên mua thứ mèo xấu nết, anh không nghe và nói:</p>
<p>– Thây kệ! Chị cứ bán cho tôi đi!</p>
<p>Thế là cuối cùng mèo cũng thoát chết. Và người chủ mới của nó sau khi xỉa ra ba quan để mua, đem buộc lại gần bên con chó. Ngồi một mình trên thuyền, thấy buồn, anh chàng bèn bỏ thuyền lên bộ đi dạo bờ sông. Bỗng chốc anh thấy có ba đứa trẻ chăn trâu bắt được một con rắn nước, toan dùng roi xử tội. Anh chàng vội chạy lại ngăn cản:</p>
<p>– Các em đừng đánh nó, nó là rắn nước, có làm hại ai đâu?</p>
<p>– “Mặc kệ chúng tôi” – bọn trẻ đáp, rồi lại tiếp: “Chúng tôi bắt được nó, chúng tôi đánh, ông cản làm gì?”</p>
<p>Thấy bọn chúng khăng khăng cố tình giết rắn, anh chàng lại dùng tiền để cứu con vật vô tội. Chúng đòi năm quan. Mãi sau anh mới bớt được một. Thế là tất cả số tiền mang theo lần lượt vơi đến hết. Mua được con rắn, anh vội thả xuống sông cho nó trở về xứ sở. Bọn thuỷ thủ khi nghe anh kể lại những việc mua bán của mình, thì đều cười ngất, cho là một người khờ dại ít có. Anh chỉ ngồi lặng yên, không nói gì cả.</p>
<p>Khi thuyền bắt đầu trở về vào khoảng nửa đêm, anh đang chèo bỗng thấy con rắn nước từ dưới sông bơi lên trao cho mình một viên ngọc mà nói:</p>
<p>– Cha tôi là Long Vương cảm ơn anh cứu mạng tôi, cho tôi đem biếu anh viên ngọc “băng xuyên” để mời anh xuống chơi. Mang ngọc vào mình, anh có thể đi được dưới nước cũng như đi trên bộ.</p>
<p>Anh chàng nghe nói vội vàng đi theo con rắn nước xuống thuỷ phủ. Quả nhiên anh được Long Vương tiếp đãi rất hậu, và biếu anh ngọc vàng châu báu rất nhiều. Sau đó, anh được người của Long Vương đưa về đến tận nhà.</p>
<p>Chủ thuyền thấy anh mất hút, tưởng anh đã rơi xuống nước, bèn đỗ thuyền lại trình xã sở tại. Nhưng khi mọi người về đến quê hương thì họ rất lấy làm ngạc nhiên vì anh thuỷ thủ trẻ đã về đến nhà ba ngày trước rồi.</p>
<p>Từ đó anh trở nên giầu có. Nhưng anh vẫn sống một cuộc đời bình thường với mẹ già. Con chó, con mèo được anh cứu vẫn theo anh không rời. Về sau, anh lấy vợ. Vợ anh là một cô gái rất đẹp. Nàng rất thích đeo nữ trang. Thấy viên ngọc “băng xuyên” chiếu sáng một góc tủ, nàng thích lắm, nên một hôm lấy trộm mang đến cho một người thợ kim hoàn, bảo đánh cho mình một chiếc nhẫn. Không ngờ, người thợ kim hoàn biết là ngọc quý ít có trong thế gian, bèn đi kiếm một viên khác tương tự như thế đánh tráo mà cướp lấy bảo vật.</p>
<p>Khi biết rõ chuyện mất cắp thì anh chàng thuỷ thủ trở nên buồn bã. Hàng ngày anh ra bờ sông, mong tìm lại con rắn nước nhưng chả làm sao gặp được. Chó và mèo thấy chủ không vui, một hôm nói với chủ xin đi tìm viên ngọc.</p>
<p>Đường đi đến nhà người thợ kim hoàn phải qua một con sông rộng. Không có cách gì để vượt cả, hai con vật cứ loanh quanh ở trên bờ. Về sau chúng nó tìm được vào nhà một con rái cá và nhờ nó đưa giúp qua sông. Rái cá vui lòng gọi cho các bạn bè của nó đứng sát vào nhau, kết thành một cái bè cho chó và mèo ngồi lên lưng, chở qua sông yên lành.</p>
<p>Khi đến nhà người thợ kim hoàn, mèo bảo chó:</p>
<p>– Để tao trèo lên nóc nhà kêu lên mấy tiếng cho những con chó trong xóm xúm lại sủa. Thế là mày cứ đường hoàng theo cổng mà vào, không ai biết.</p>
<p>Quả nhiên, bầy chó của nhà người thợ kim hoàn nghe mấy tiếng mèo kêu vội xông ra đuổi. Mèo dẫn chúng đi thật xa nên chó ta lẻn vào nấp dưới cái hầm, vô sự.</p>
<p>Khi hai con vật gặp lại nhau, chúng tìm tòi khắp trong nhà. Tất cả của cải của lão kim hoàn đều bỏ trong cái rương xe, luôn luôn khoá kín, không dễ gì lọt vào được. Mèo bèn cố sức tìm, chụp bắt được một con chuột. Chuột van lạy xin tha mạng. Mèo bảo nó dẫn mình đến gặp chuột chúa đàn. Mèo nói rõ việc mình đến đây và nhờ hắn giúp mình lấy cho được viên ngọc, đổi lại mèo hứa sẽ không chạm đến gia tộc nhà hắn. Chuột chúa đàn vâng dạ rối rít.</p>
<p>– Để tôi bảo lũ con cháu, tôi tớ trong nhà khoét chiếc rương ra, tìm cho các ông.</p>
<p>Nhưng đến khi lọt vào được rương, lũ chuột tìm mãi vẫn không thấy ngọc. Chuột chúa đàn ra báo cho mèo biết, và nói:</p>
<p>– Trong rương này có một cái hộp bằng bạc. Có lẽ nó giấu trong đó; Cái hộp đó thì khó lòng mà gặm được.</p>
<p>– Vậy làm thế nào bây giờ? – mèo hỏi.</p>
<p>– Chỉ có cách là chúng tôi sẽ nhờ xóm giềng hợp sức cùng chúng tôi khoét rộng lỗ thủng làm sao đưa lọt cái hộp ấy ra đây cho các ông tìm.</p>
<p>– Thế thì làm gấp đi.</p>
<p>Chỉ trong một đêm, cả xóm nhà chuột đã lấy được cái hộp đưa cho mèo. Hai con vật tìm cách phá hộp ra, quả thấy viên ngọc của chủ. Chúng vô cùng mừng rỡ.</p>
<p>Sau khi ra khỏi nhà người thợ kim hoàn, chó tranh mèo mang ngọc. Nhưng đến lúc sắp sửa sang sông, vì mắng nhau với một con chó khác, nên chó đã lỡ làm cho ngọc văng xuống nước. Một con cá trông thấy ngọc vội bơi tới đớp và nuốt ngay.</p>
<p>Thấy chó để mất ngọc, mèo giận quá, mắng cho một trận thậm tệ. Chó biết lỗi, lặng thinh, cuối cùng mếu máo:</p>
<p>– Biết làm sao bây giờ?</p>
<p>Suy nghĩ một lát, mèo tìm được một kế bảo chó:</p>
<p>– Chúng ta sẽ tìm đến nhà thuyền chài ở vùng này xin ở với họ. Thế rồi chờ khi họ câu được con cá đã nuốt viên ngọc thì sẽ kiếm cách cướp lấy đem về.</p>
<p>Chó khen mưu kế hay, bèn cùng mèo tìm đến một gia đình ông chài đang đỗ thuyền lại ở bờ sông phơi lưới. Hai con vật tỏ ra rất khôn ngoan, hiền lành nên được cả nhà đối đãi tử tế.</p>
<p>Mấy hôm sau, ông chài đánh mẻ lưới được một con cá chày rất lớn, mổ ruột ra, thấy có viên ngọc. Chó và mèo khấp khởi mừng thầm. Trong khi cả nhà đang trao ngọc cho nhau để xem của lạ, thì mèo tiến lại cọ vào người chủ. Nhân khi chủ sơ ý, nó nhảy lên ngoạm lấy viên ngọc và lập tức cong đuôi nhảy lên bờ chạy mất. Thấy thế, chó cũng ba chân bốn cẳng chạy theo trước con mắt ngơ ngác của mấy bố con nhà ông chài.</p>
<p>Lần này mèo tranh chó mang ngọc. Mèo lên mặt, bảo chó:</p>
<p>– Lần trước ngậm bị rơi mất, lần này có cách rất hay là đội lên đầu. Sắp đến nhà rồi, chả sợ gì nữa.</p>
<p>Nó nói thế nào thì làm như thế.</p>
<p>Nào ngờ mới đi được một quãng đường, bấy giờ có một con quạ đang bay trên đầu mèo, thình lình sà xuống đớp lấy rồi bay lên đậu trên cành cao. Thấy ngọc lại mất, đến lượt chó mắng mèo rất dữ, rồi nói:</p>
<p>– Ngọc rơi xuống nước còn có thể lấy lại được, chứ bay lên trời thì đừng có hòng.</p>
<p>Mèo buồn rầu, nhưng ngẫm nghĩ một lát, nó lại bảo chó:</p>
<p>– Đúng rồi. Tao đã nghĩ ra được một kế.</p>
<p>Chó hỏi:</p>
<p>– Kế gì?</p>
<p>Mèo đáp:</p>
<p>– Giả chết bắt quạ.</p>
<p>Nói xong mèo chạy xuống bờ sông uống một bụng nước đầy căng. Đoạn trở về xua chó trốn đi một chỗ, còn mình thì tới gốc cây phơi bụng trắng hếu giả vờ chết. Quạ đang ngậm ngọc, đậu trên cây cao nhìn xuống thoáng thấy có bóng con vật chết, vội vàng bay xuống toan rỉa thịt. Nhưng khi quạ vừa xáp lại thì mèo đã nhảy xổ lên vồ lấy Quạ. Quạ van lạy xin trả lại viên ngọc cho mèo để được tha mạng. Mèo chỉ đợi có thế, ngoạm lấy viên ngọc ra đi.</p>
<p>Lần này, cả hai con đưa ngọc về đến nhà vẹn toàn. Anh chàng thuỷ thủ lấy lại được món tặng vật của Long Vương, hết sức vui mừng càng thêm quý mến hai con vật có tình có nghĩa.</p>
</div>`,
      },
      {
        name: 'Ba chàng dũng sĩ',
        content: `<div class="wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
        <p></p><div style="background-color: white; border: 0px; font-stretch: inherit; font-variant-east-asian: inherit; font-variant-numeric: inherit; line-height: inherit; margin: 0px; max-width: 100%; padding: 0px; text-align: center; vertical-align: baseline; visibility: visible; animation-name: fadeIn;" class="wow fadeIn"><span style="font-family: arial; font-size: medium;">(Truyện cổ dân tộc người BaNa)</span></div>
<p>&nbsp;</p>
<div style="text-align: center; visibility: visible; animation-name: fadeIn;" class="wow fadeIn"></div>
<p>&nbsp;</p>

<h2 style="clear: both; text-align: center;"><span style="font-family: arial; font-size: x-large;">Ba chàng dũng sĩ</span></h2>
<p><span style="font-family: arial;"><a name="more"></a><br>
</span></p>
<p>Ở làng kia, có một người đàn bà rất chăm làm. Từ mờ sáng, khi chim Mơ lang vừa cất tiếng hót thì đã thấy bà rời làng lên nương rồi. Bà cặm cụi làm việc cho đến khi ngôi sao Bắc đẩu lấp lánh trên trời cao mới lại trở về làng.</p>
<p>Một hôm, đang làm rẫy, bà bỗng thấy trong người choáng váng, khó chịu, cổ họng khô cháy như lửa đốt. Bà vội tìm đến chiếc chòi giữa rẫy, nhấc ống nước định uống thì thấy trong ống chẳng còn giọt nước nào.&nbsp;<span id="more-979"></span>Cơn khát ngày càng hành hạ bà. Bà đảo mắt nhìn quanh để tìm nước uống, chợt thấy xa xa từ khe núi có một khe nước đang rỏ giọt. Bà mừng rỡ vội vã rảo cẳng chạy tới. Đó là một quả núi giống hình một người đành ông to lớn, đang cầm chà gạc (*) ngó trời. Từ trên đỉnh đầu hình người chảy ra những giọt nước trong vắt, mát lạnh. Bà ngửa cổ vừa uống ba ngụm đã thấy cơn khát dịu ngay, cổ họng còn đọng mãi vị thơm ngọt của dòng nước lạ.<br>
Từ hôm đó, bà thấy trong người khang khác và bụng ngày một to dần. Bà đã thụ thai.</p>
<p>Nhưng đã chín tháng mười ngày rồi mà bà vẫn chưa đẻ. Một năm, rồi hai năm, ngày sinh vẫn chưa tới. Cho mãi đến năm thứ ba, vào một ngày mặt trăng và mặt trời gặp nhau (nhật thực) tỏa ánh sáng vàng dìu dịu, bà mẹ mới trở dạ. Bà sinh được ba đứa con trai bụ bẫm, kháu khỉnh và giống nhau như lột.</p>
<p>Ngày tháng trôi qua, ba đứa trẻ lớn dần lên. Từ đấy, núi rừng có thêm ba chàng trai khỏe mạnh. Cánh tay họ cứng như sắt có thể bẻ gãy cây to như ngắt ngọn cỏ. Cặp chân họ chạy nhanh như gió, một bước nhảy vượt băng một cánh rừng. Mắt họ sáng, nhìn xa hơn mắt chim ưng.</p>
<p>Thấy các con đã khôn lớn, một hôm bà mẹ bảo họ:</p>
<p>– Đất trời mình còn rộng lắm. Các con hãy chia nhau đi các ngả mà làm ăn. Lâu lâu, các con hãy về thăm mẹ nhé!</p>
<p>Ba chàng trai vâng lời, từ biệt mẹ lên đường.</p>
<p>Người em út theo hướng mặt trời mọc mà đi. Đường đi mỗi ngày một xuống thấp và chẳng bao lâu đồng bằng bát ngát, biển khơi mênh mông sóng nước hiện ra. Người em út ưng miền đất đẹp này lắm và chọn nơi ấy làm chốn ở của mình. Từ đó, ngày tắm nước bể trong xanh, đêm nằm dài trên cát mịn, da dẻ chàng thay đổi dần, trắng trẻo như cục bột. Người ta gọi chàng là Ngọc.</p>
<p>Người em thứ hai cứ theo hướng mặt trời lặn mà đi. Đất dưới chân chàng ngày một cao dần lên, rừng rậm trùng điệp hiện ra và núi non hùng vĩ nhô lên như chào đón chàng. Gặp một khe suối nước chảy óng ánh như màu đồng hun, chàng cởi áo lội qua bờ bên kia. Dòng nước kì lạ ấy đã làm cho người em thứ hai khi từ khe nước bước lên đổi hẳn màu da, trở thành ngăm ngăm đen hệt như màu nước. Thấy đất màu mỡ, chàng bèn dừng lại và dựng trại làm ăn. Từ đó người ta gọi chàng là chàng Lèo.</p>
<p>Còn người anh cả ở giữ quê hương. Chàng dựng lên một chiếc nhà rông cao nhất trời, mái nhà cong vút chấm tới mây, cột nhà dựng san sát như cây rừng. Chàng sống ở đó, trông núi rừng cho suối đánh đàn, cho hoa nhảy múa, cho muôn thú và gió lộng hát ca…</p>
<p>Nhưng bỗng một hôm, một con Xà tinh không biết từ đâu hiện ra, mình nó lớn bằng cả một dãy núi. Nó có cánh để bay vút lên trời, lại có vây để lặn sâu xuống nước. Nhưng lợi hại nhất là ba viên ngọc ước của họ nhà trời mà Xà tinh đã ăn cắp được, đem về cất giấu trong chiếc túi tròn, đeo ở nách bên phải của nó. Hòn ngọc thứ nhất màu xanh biếc, khi giơ ra thì lập tức giông bão nổi lên, gió gào thét điên cuồng, thổi bật đi cả từng khu rừng một. Hòn ngọc thứ hai màu trắng nhạt, cầm đến nó thì lập tức sóng nước cuồn cuộn trào dâng, cuốn trôi băng cả hàng chục làng. Hòn ngọc thứ ba màu đỏ chói, khi tung lên thì khói lửa rừng rực bốc lên, thiêu rụi hết mọi vật. Xà tinh dùng ba viên ngọc ước này để tàn phá tất cả những miền mà nó đi qua.</p>
<p>Một hôm, Xà tinh mò đến quê hương của ba chàng trai. Nó đi đến đâu, cây rừng nghiêng ngả, gió rú ào ào, khói mây bay mù mịt đến đấy. Người anh cả thấy có chuyện lạ, vội từ trong nhà rông bước ra, một tay cầm chiếc khiên đính lục lạc đồng, một tay cầm con dao nhọn, sắc như nước.</p>
<p>Trông thấy vẻ hùng dũng của người anh cả, Xà tinh cũng có ý chờn. Nó thò tay vào túi, bốc viên ngọc xanh biếc ra, tức thì dông bão ầm ầm nổi lên, cây bật rễ, đá núi bay rào rào. Thấy Xà tinh bỗng dưng tác oai, tác quái, tàn phá buôn làng quê hương mình, người anh cả nổi giận lao người tới trước mặt nó, vung mạnh tay khiên. Chiếc khiên quay vun vút làm thành một trận gió mạnh, xô bạt cơn dông của Xà tinh đi. Sau nửa ngày đánh nhau kịch liệt, Xà tinh đuối sức phải thu ngay viên ngọc xanh lại. Nó tức giận gầm lên một tiếng vang trời rồi nhấc viên ngọc màu trắng nhạt ra. Lập tức cả một bể nước ậo tới, phủ kín núi rừng. Lợn lòi, chồn, rắn nổi lềnh bềnh trên mặt nước. Trước sức mạnh ghê gớm của nước lụt, người anh cả thấy hết phương chống cự. Chàng chạy vội lên ngọn núi cao nhất, quờ cây khô, dồn lá héo, chất thành đống lớn, châm lửa đốt lên. Ngày trước, lúc chia tay lên đường, ba anh em đã hẹn ước với nhau rằng bao giờ có giặc hay gặp nguy nan, người anh cả sẽ dùng ánh lửa đốt trên núi cao để báo hiệu gọi các em về, một ngọn là hiệu gọi em út, hai ngọn là gọi em thứ hai.</p>
<p>Thấy một ngọn lửa nơi quê mẹ bùng cháy, chàng Ngọc lúc đầu ngỡ là ánh sáng mặt trời rọi lên, chẳng để ý tới. Nhưng ánh lửa mỗi lúc một cháy to, ngọn lửa lắc lư như vẫy gọi. Biết là lửa của anh cả gọi mình, chàng Ngọc bèn chạy một mạch như bay về quê hương.</p>
<p>Tới làng cũ, nhìn thấy núi rừng tiêu điều, xơ xác, chàng Ngọc vô cùng căm giận, ngồi bên suối ngày đêm nghĩ cách trừ Xà tinh.</p>
<p>Một buổi sáng, chàng Ngọc từ biệt anh cả đi thẳng vào sào huyệt của yêu quái. Thấy chàng trai trắng trẻo, Xà tinh gầm gừ rồi quát lớn:</p>
<p>– Hỡi con thỏ trắng kia! Mày mang da đến đây cho tao lột phải không?</p>
<p>Chàng Ngọc dũng cảm thét vào mặt nó:</p>
<p>– Ta đến tìm mày để hỏi tội đây. Thần nước ở quê ta, ta còn trị được nữa là vũng nước chân trâu hôi thối của mày!</p>
<p>Xà tinh giận lắm. Hắn bốc ngay viên ngọc trắng nhạt ra. Lập tức sóng ngàn, nước cả hiện ra trắng xóa một vùng. Nhanh như chớp, chàng Ngọc co mạnh tay, dẫm mạnh chân xuống đất. Tức thì, từ trong lòng đất nổi lên một bức thành dài dằng dặc. Lớp thành đất vững chắc như thép nhô cao lên mãi, vây chặt lấy bể nước rồi khép dần lại. Dòng nước hung dữ cố sức phá vỡ bức thành để tràn ra ngoài nhưng không nổi. Nước ngày một cạn dần đi. Xà tinh yếu thế vội thu viên ngọc trắng lại và giở viên ngọc đỏ chói ra. Lập tức khói bốc lên mù trời, lửa cháy rừng rực, cây xanh cháy thành than. Nước suối sôi lên ùng ục. Người em út không trị được nạn lửa ghê gớm ấy, đành phải chạy về vùng biển.</p>
<p>Thấy nguy khốn, người anh cả lại lên núi cao, chất hai đống lửa lớn, gọi người em thứ hai về cứu. Trông thấy hiệu lửa, chàng Lèo liền nhắm hướng lửa mà chạy như gió, chẳng quản ngày đêm. Đến quê mẹ, chàng chạy thẳng đến hang Xà tinh và gặp nó đang mài vuốt trước cửa hang. Chẳng nói, chằng rằng, chàng Lèo nhằm giữa mặt nó phóng một ngọn lao mạnh như sấm sét. Biết dòng họ dũng sĩ đã lại đến, Xà tinh liền tìm cách thử tài. Lùi lại tránh mũi lao, nó bốc một nắm lá, niệm thần chú rồi tung lên trời. Lập tức một bầy ong vò vẽ hiện ra vù vù xông tới. Chàng Lèo bình tĩnh tháo bông hoa cài trên đầu cắm nhẹ trên đất. Tức thì khắp một cánh rừng, những bông hoa muôn sắc tỏa ra rồi dệt lại thành một tấm thảm đẹp tuyệt vời. Đàn ong bén mùi mật hoa, sà cả xuống bám đen nghịt. Chúng chui vào bông hoa để hút mật. Bỗng nhiên bông hoa rùng mình khép luôn cánh lại, nhốt chặt đàn ong ma quái ở bên trong.</p>
<p>Thấy phép thuật của mình đã bị hại, Xà tinh gầm lên, bốc viên ngọc đỏ chói ra, thét lớn:</p>
<p>– Đến ngọc này thì mày cũng sẽ phải chạy như hai tên nhãi trước thôi!</p>
<p>Thấy ngọn lửa ngùn ngụt bốc cao, cháy rừng rực, dữ tợn, chàng Lèo liền cởi ống nước phép đeo trên lưng, trút xuống đất. Những tia nước mát rượi bắn tung ra rồi bỗng dâng cao thành những suối nước khổng lồ bao lấy lửa. Chẳng bao lâu, lửa của Xà tinh đã bị các suối nước làm tắt ngấm hết. Bị thua, Xà tinh càng điên cuồng gầm thét. Hắn thu viên ngọc đỏ lại rồi vung viên ngọc trắng nhạt ra. Lập tức sóng nước dâng lên cuồng cuộn, mưa xối ào ào như nước chảy trong ống. Nước dâng lên rất nhanh khiến người em thứ hai không tài nào chống nổi, đành phải theo hướng mặt trời lặn mà chạy về núi.</p>
<p>Người anh cả thấy các em mình không trị được Xà tinh thì vô cùng lo lắng. Dâng làng thấy vậy cũng rất lo. Họ liền hợp sức nhau lại, góp công đóng một chiếc thang thật dài, bắc qua sông, bảo người anh cả leo lên hỏi Trời xem có phép gì giúp cho dân làng giết được Xà tinh không. Người anh cả leo thang lên Trời ngay.</p>
<p>Sáng hôm ấy, Trời ngủ dậy muộn, vừa mở mắt Trời đã thấy người anh cả quỳ trước mặt, thưa rõ đầu đuôi câu chuyện và xin Trời giúp cho cách đánh Xà tinh. Suy nghĩ một lát, trời gật gù bảo:</p>
<p>– Con Xà tinh này quả là có lắm phép. Nhưng tài trí của các cháu cũng không kém gì nó lắm đâu. Chỉ vì các cháu chưa biết hợp sức lại mà đánh nên mới trị được phép này, nó lại giở phép khác. Thôi, bây giờ hãy trở về núi cao, đốt lửa gọi hai em cháu về. Rồi cả ba anh em cùng hợp sức đánh thử xem. Nếu vẫn thua, ta sẽ bày cách khác.</p>
<p>Người anh cả vâng lời, trở về núi cao đốt lửa gọi hai em lần nữa. Ba anh em hợp nhau lại cùng với dân làng, chia thành ba ngả kéo thẳng đến sào huyệt Xà tinh.</p>
<p>Đang gục đầu ăn gan trâu trắng, uống rượu đen, chợt thấy ba chàng dũng sĩ đứng chặn ngay trước cửa hang, Xà tinh liền gầm gừ:</p>
<p>– Kìa, ba con thỏ non lại kéo đến nộp mạng rồi. Hãy đợi đấy, ăn uống xong, ta sẽ hỏi tội chúng mày.</p>
<p>Người anh cả đáp lại, giọng to như tiếng cồng vang:</p>
<p>– Yêu quái, hôm nay mày sẽ phải đền tội. Mày đã tàn phá núi rừng này, giết hại dân làng này, giờ đây anh em ta sẽ hợp sức nhau lại trị tội mày.</p>
<p>Xà tinh giận lắm. Nó nhảy ra khỏi hang, giơ viên ngọc xanh ra. Dông bão nổi lên. Nhanh như chớp, người anh cả vung chiếc khiên, giơ đằng đông, núi đằng đông sạt; giơ đằng tây, núi đằng tây đổ. Chiếc khiên quay tròn, cuốn gió thổi bạt cả dông bão của Xà tinh đi. Xà tinh thua trận đầu, vội giở tiếp ngay viên ngọc trắng ra. Nước lũ ào ào tràn tới. Người em út lao ngay ra giữa dòng nước, giơ cao kiếm dẫm chân mạnh xuống đất. Tức thì lớp lớp thành lũy nổi lên, bủa vây và nhốt chặt dòng nước lại. Thấy phép màu bị hại, Xà tinh hấp tấp bốc vội viên ngọc đỏ ra. Khói lửa cuộn đến, cháy ngút trời. Nhanh như cắt, người em thứ hai trút ngay ống nước phép xuống đất. Những dòng nước nhỏ, trong chốc lát biến ngay thành trăm ngàn con rồng bằng nước lạnh, uốn khúc, lấp loáng bám lấy bể lửa. Lửa lụi dần rồi tắt ngấm.</p>
<p>Thấy mất trọn cả ba phép lạ, Xà tinh cuống cuồng toan chạy trốn ra bể. Nhưng chàng Ngọc đã lăm lăm thanh kiếm chặn mắt đường. Xà tinh hoảng sợ vội quay đầu chạy lên núi. Nhưng chàng Lèo đã chống ngọn lao đợi sẵn ở đấy. Bí thế, Xà tinh toan chạy trốn lên trời, nhưng người anh cả đã nhảy vọt tới, vung con dao sắc như nước xả tới tấp vào mình nó. Xà tinh gào thét giãy giụa chuyển cả rừng, rung cả đất. Cuối cùng kiệt sức, nó lăn ra chết, hóa thành dãy núi Róc Ron lởm chởm, nứt nẻ, lồi lõm, cằn cỗi màu chết chóc.</p>
<p>Từ đó, núi rừng Tây Nguyên trở lại cảnh thanh bình ngày trước. Nương đầy lúa, rẫy đầy khoai, sông đầy cá, bờ suối khoe sắc hoa vàng hoa đỏ. Ba chàng dũng sĩ lại chia tay nhau, kẻ xuống hướng đông, kẻ lên phía tây làm ăn. Người anh cả ở lại rừng, dựng nhà rông cao to hơn xưa để giữ gìn quê mẹ. Hàng năm, người em út dưới biển gánh muối lên cho hai anh em, người em thứ hai cõng chiêng, mền lên cho anh cả. Còn anh cả thì chia cho các em gỗ quý, mật ong, thịt rừng, nếp thơm.</p>
<p>Cho đến nay, đồng bào Tây Nguyên còn truyền tụng rằng: người anh cả có tài múa khiên bạt gió, đó là người Tây Nguyên. Chàng Ngọc, người em út ở gần sông gần bể nên thạo nghề đắp đê ngăn nước, là người Việt. Còn người em thứ hai – chàng Lèo ở xứ nóng bức, có gió Lào, hay bị hỏa hoạn nên có tài chống lửa, đó là người Lào. Ba anh em xưa là con một mẹ.</p>
<p>(<em>Truyện cổ dân tộc người BaNa</em>)<br>
(*) một loại vũ khí đi rừng của người Tây Nguyên.</p>
<p></p>
      </div>`,
      },
    ],
    'Truyện cổ thế giới': [
      {
        name: 'Bác nông dân và con Gấu',
        content: `<div class="wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
        <p></p>
<p>Ngày xưa có một bác nông dân già sống cùng với một cô con gái. Vợ bác mất sớm nên mọi tình yêu thương bác đều dành cho con. Một hôm bác quyết định đi thăm họ hàng ở xa và để cô con gái ở nhà một mình.</p>
<p>Bác ra đi, qua bao nhiêu rừng sâu, núi cao, suối dài, rất vất vả nhưng cuối cùng bác cũng đến nơi an toàn. Anh em gặp nhau mừng mừng tủi tủi nói chuyện quên hết mọi thứ xung quanh. Ở chơi với họ hàng vài hôm, bác lên đường trở về nhà. Khi băng qua khu rừng rậm, còn chưa tìm được lối ra thì trời đã sẩm tối. Phải tìm một chỗ nghỉ qua đêm là điều cần nhất bây giờ. Bác nghĩ vậy nên đi loanh quanh trong rừng, mong tìm được nhà nào đó để xin nghỉ nhờ.</p>
<p>Lát sau bác nhìn thấy có ánh đèn le lói sau đám lá rừng. Bác vội bước tới, nhưng trước mặt bác không phải là một ngôi nhà bình thường mà là tòa lâu đài cổ. Bác gõ cửa và một con gấu to xuất hiện. Gấu hỏi:</p>
<p>– Ông ở đâu đến và ông muốn gì?</p>
<p>– Tôi đi thăm họ hàng nhưng chẳng may lạc đường, trời tối mà vẫn chưa về được. Xin ông cho tôi nghỉ nhờ một đêm – Bác nông dân lo sợ trả lời Gấu.</p>
<div class="text-center wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
<p align="center">
</p></div>
<p>– Ông có thể ở lại đây. Chỉ có một mình tôi thôi.</p>
<p>Thấy Gấu nhẹ nhàng, hiền lành, bác nông dân mới thấy yên tâm và bước vào lâu đài cùng với Gấu. Gấu làm việc như người bình thường, dọn cơm mời bác nông dân ăn, dọn giường cho bác nông dân ngủ.</p>
<p>Sáng dậy, bác nông dân cảm ơn Gấu, xin phép ra đi. Nhưng bác không biết lối ra nên nhờ Gấu chỉ đường Gấu bảo:</p>
<p>– Tôi sẽ chỉ đường cho ông nếu ông gả con gái cho tôi.</p>
<p>Bác nông dân nghe vậy thì không đồng ý, bác chỉ có mỗi một người con gái, nếu gả cho Gấu thì bác</p>
<p>sẽ mất con. Thế nên bác quyết tâm tự tìm đường về mà không cần sự giúp đỡ của Gấu. Thế nhưng rừng già bạt ngàn âm u, bác lại không thuộc đường nên loay hoay suốt cả ngày trời bác không thể nào ra được. Đêm xuống bác lại quay về tòa lâu đài của Gấu xin ngủ nhờ. Gấu đón tiếp bác ân cần như buổi tối hôm trước, trò chuyện rất vui vẻ. Đến sáng người nông dân lại nói với Gấu:</p>
<p>– &nbsp;Gấu hãy chỉ giúp tôi đường về nhà.</p>
<p>Gấu trả lời:</p>
<p>– Tôi sẽ giúp ông nếu ông gả con gái cho tôi.</p>
<p>Người nông dân biết rằng muốn ra khỏi cánh rừng này thì chỉ còn cách duy nhất là nhờ sự giúp đỡ của Gấu. Bác đành hứa gả con gái của mình cho Gấu. Gấu đón tiếp ông nồng hậu đúng như thái độ của cha vợ và con rể và chỉ lối cho bác nông dân trở về. Bác hứa sẽ dẫn con gái mình trở lại.</p>
<p>Bác nông dân ra về mà lòng nặng trĩu. Cô con gái nhận ra ngay nét mặt không vui của cha, cô nghĩ là đã có chuyện gì xảy ra. Còn bác nông dân thấy thật khó có thể nói với con gái về chuyện con Gấu kia, nhưng trước sau gì thì bác cũng phải nói sự thật. Cuối cùng không thể giấu con được nữa bác đành phải kể lại toàn bộ câu chuyện, cả về lời hứa gả cô cho Gấu.</p>
<p>Cô gái chăm chú lắng nghe cha kể, cô không hề thấy lo sợ mà cảm thấy có gì uẩn khúc ở trong đó. Thế là cô gái bằng lòng. Hai cha con cùng nhau đến tòa lâu đài của Gấu đúng như đã hẹn. Gấu đón họ rất long trọng, niềm nở và ân cần. Bác nông dân ở lại chơi vài hôm cùng con gái rồi từ giã trở về nhà. Gấu cùng cô gái sống hoà thuận bên nhau, yêu quý tôn trọng nhau như vợ chồng. Tuy nhiên cô gái để ý thấy ở dưới lớp da Gấu là thân thể của một con người. Nàng quyết định khám phá bằng được điều bí mật ấy.</p>
<p>Một đêm, nàng không ngủ mà lén đến phòng của Gấu. Nhìn qua khe cửa, nàng thấy Gấu trút bỏ bộ lông và biến thành một chàng trai, chỉ có cái đầu là của Gấu. Thế là chờ Gấu ngủ say, nàng đã lén vào phòng, ném bộ da Gấu vào bếp lửa. Bộ da Gấu biến thành than, nhưng từ hôm đó Gấu lâm bệnh nặng.</p>
<p>Biết lý do Gấu ốm, nàng ân hận lắm, dành hết tình cảm của mình để quan tâm chăm sóc Gấu, hy vọng Gấu khỏe lại. Thế nhưng bệnh của Gấu ngày càng nặng hơn, đến hôm thứ hai thì Gấu nằm gần như sắp chết. Cô gái ngồi bên giường Gấu, than thở, khóc lóc nhưng những giọt nước mắt không làm đỡ cơn đau của Gấu. Ngày thứ ba, Gấu nằm khò khè thở những hơi thở nặng nhọc. Cô gái nghĩ thế là hết, ta sẽ chết theo Gấu thôi.</p>
<p>Nhưng đêm thứ ba qua đi, khi cô gái tỉnh dậy thì thấy trên giường bệnh không phải là Gấu ốm yếu nữa mà là một chàng trai khôi ngô, tuấn tú. Cô gái vô cùng kinh ngạc. Họ sung sướng ôm lấy nhau khóc vì quá mừng vui. Chàng trai kể hết sự thật cho nàng nghe.</p>
<p>Chỉ khi nào có một người con gái yêu thương Gấu thật lòng thì Gấu sẽ trở lại thành người và bộ da Gấu kia phải được đốt thành tro. Chàng rất biết ơn người vợ yêu quý đã dũng cảm cứu chàng để chàng được quay trở lại làm người.</p>
<p>Thế rồi ngay hôm sau, hai người đã tổ chức một lễ cưới linh đình, mời tất cả mọi người tới dự. Bác nông dân được mời đến và bác rất ngạc nhiên không tin vào mắt mình được nữa. Con Gấu đã biến thành một chàng trai tuấn tú. Bác rất mừng cho cô con gái của mình được hạnh phúc. Từ đấy, bác ở lại luôn trong lâu đài, sống vui vẻ cùng con gái và con rể không trở về nhà nữa.</p>
<p></p>
      </div>`,
      },
      {
        name: 'Lỗ Ban học nghề',
        content: `<div class="wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
        <p></p>
<p>Sông Thanh Thủy chảy vòng về phía Đông thành một vụng lớn,&nbsp;trong vụng có một dãy nhà đất gọi là Lỗ Gia Loan. Ở đây có một ông già họ Lỗ làm nghề thợ mộc. Ông đã năm mươi tám tuổi, đi học nghề, theo phường từ năm mười tám, tính ra đã làm nghề mộc bốn mươi năm ròng.</p>
<p>Ông thợ mộc già cần cù làm lụng suốt đời, dựng được hai dãy nhà đất, một dãy ở phía Nam, một dãy ở phía Bắc. Tính tình ông cũng hơi kỳ lạ, làm nghề mộc suốt đời mà chẳng nhận qua một học trò. Có ai đến nhận ông làm thầy, xin theo để học nghề, ông đều thoái thác nói rằng: “Đi theo tôi thì học được nghề nghiệp gì, anh chẳng xem dãy nhà tôi làm kia đã ngả nghiêng xiêu vẹo, hòm tủ thì méo mó xù xì đó sao”. Mọi người đều biết tính tình kỳ quặc của ông, nên ai muốn học nghề cũng chẳng bao giờ đến học ông.</p>
<p>Ông thợ mộc già suốt đời chưa vừa ý với tài nghệ của mình. Ông không dạy người khác mà ngay con cái trong nhà ông cũng không dạy. Suốt đời, ông ăn tiêu dè sẻn, tần tiện từng đồng, như vậy cũng đã dành dụm được ba trăm lạng bạc và ba con ngựa tốt, chờ khi các con khôn lớn sẽ chia cho chúng để chúng đi tìm thầy học nghề.</p>
<p>Ông thợ mộc già có ba người con trai. Con lớn là Lỗ Thuyên, mười tám tuổi; con thứ hai là Lỗ Tân, mười lăm tuổi; con nhỏ nhất là Lỗ Ban, mười hai tuổi. Lỗ Thuyên và Lỗ Tân đều là những kẻ lười nhác ngồi không ăn sẵn, từ lúc sinh ra cho đến lúc lớn, chiếc rìu đặt nghiêng không biết dựng lại, chiếc búa rơi không biết nhặt lên, cưa đục chẳng bao giờ động tay đến. Cha mẹ đều không thích hai anh lớn. Lỗ Ban từ nhỏ đã cần cù hiếu học, thường theo sát bên cha, giúp cha căng dây, làm các việc vặt, học cách vác rìu, cầm búa, cưa cắt cây gỗ của cha.</p>
<p>Một hôm tới bữa ăn trưa, bà mẹ chợt nhớ ra Lỗ Ban đã quá nửa ngày không ở nhà, bà lo lắng vội chạy ra ngoài đi tìm, tìm một hồi lâu mới thấy Lỗ Ban ở trước một ngôi nhà mới, đang ngồi ở một bên, hai tay chống má, ngây ra nhìn mấy người thợ mộc làm cánh cửa. Sáu bảy tuổi Lỗ Ban đã thích cầm rìu cầm cưa, khúc gỗ tròn đã đẽo được thành vuông, tấm gỗ dày đã cưa thành những phiến mỏng. Đến năm mười tuổi, thì mọi thứ đồ nghề Lỗ Ban đều dùng được cả, chiếc rìu chiếc đục luôn ở trên tay.</p>
<p align="center">
</p><p>Lỗ Ban không lúc nào chịu rảnh tay, đóng rất nhiều hòm tủ, ghế con xe nhỏ, xếp đầy trong nhà ngoài hiên như một cửa hàng đồ gỗ nhỏ. Thấy mẹ ngồi trên giường lò kéo sợi rất tốn sức, Lỗ Ban liền lên núi Nam chặt một cây liễu về làm ghế cho mẹ: “Mẹ ơi, mẹ hãy ngồi trên ghế này mà kéo sa cho khỏi đau lưng”. Thấy giỏ kim chỉ của chị không có chỗ để, Lỗ Ban bèn lên núi Bắc chặt một cây du, đóng cho chị một chiếc rương gỗ: “Chị ơi, chị hãy đặt giỏ khâu vào đây cho khỏi lẫn kim vương chỉ”. Nhưng khi anh cả, anh hai bảo Lỗ Ban làm một chút đồ gỗ gì thì Lỗ Ban nói: “Có gỗ, có rìu, tự mình lại không làm được hay sao?”.</p>
<p>Cha mẹ và chị gái rất yêu quý Lỗ Ban. Ba anh em trai mỗi ngày một khôn lớn. Một hôm, người cha gọi con cả đến trước mặt nói:</p>
<p>– Con ơi, con đã lớn rồi, không thể chỉ dựa vào cha mẹ mà sống. “Nghé lên ba, trai mười tám” đang lúc nhiều sức lực này, con hãy đi học chút nghề nghiệp gì, hay là học nghề mộc đi, nhưng cha không dạy cho con được, cha vụng tay, nghề không giỏi, xưa nay chưa hề nhận một người học trò nào. Con hãy mang theo một trăm lạng bạc, cưỡi con ngựa lên núi Chung Nam tìm học ông tổ nghề mộc đang ẩn cư ở đó!</p>
<p>Ông già chớp chớp mắt nhìn Lỗ Thuyên. Quen lười nhác, Lỗ Thuyên nhăn nhó mặt mày chẳng nói chẳng rằng nhận số bạc cưỡi ngựa, lắc lư đi thẳng.</p>
<p>Ra khỏi nhà, Lỗ Thuyên nghĩ thầm: “Núi Chung Nam cách đây mười vạn tám nghìn dặm, đi đâu tìm thầy mà chẳng được”.</p>
<p>Hắn cưỡi ngựa, tìm đông tìm tây ba năm ròng, tiền bạc tiêu hết, ngựa cũng bán, trần trụi quay về nhà. Ông thợ mộc già chẳng nói nửa lời đuổi Lỗ Thuyên ra khỏi nhà. Ông lại gọi Lỗ Tân tới:</p>
<p>– Con ơi, con cũng đã mười tám rồi. Con hãy mang một trăm lạng bạc, cưỡi con ngựa hay, lên núi Chung Nam tìm thầy mà học! Thế nào cũng đừng có bắt chước như anh con.</p>
<p>Ông già chớp chớp mắt nhìn Lỗ Tân. Lỗ Tân ngoác mồm ra khóc thút thít, nhận số bạc rồi uể oải lên ngựa ra đi.</p>
<p>Lỗ Tân đi được một đêm một ngày, hỏi thăm thấy nói núi Chung Nam còn cách đây hơn một vạn dặm đường, hắn nản lòng. Mặc ngựa đưa đi lang thang suốt ba năm ròng, tiêu hết số bạc, ngựa cũng bán mất, Lỗ Tân khoác chiếc bao tải quay về. Ông thợ mộc già càng giận dữ, cầm luôn cây gậy bằng gỗ du đánh cho Lỗ Tân một trận rồi đuổi đi.</p>
<p>Ông già gọi Lỗ Ban lại, ứa nước mắt, xoa đầu chàng, nói:</p>
<p>– Con ơi, hai anh con không có chút tương lai gì, cha đã đuổi đi rồi. Niềm mong ước suốt đời của cha lần này đều gửi gắm ở nơi con. Con đừng để cho cõi lòng của cha phải chịu băng giá, chớ có làm như hai anh con…</p>
<p>Không chờ cha nói hết, Lỗ Ban đã tiếp lời:</p>
<p>– Cha ơi, cha cứ yên lòng! Con đã sắp sẵn tiền bạc, sửa soạn ngựa xong xuôi, chỉ chờ cha cho phép là ra đi. Không tìm được thầy, không học được nghề, con quyết không trở về gặp lại cha nữa!</p>
<p>Lỗ Ban từ biệt cha mẹ, lên ngựa phi thẳng về phía Tây. Ông thợ mộc già nhìn theo hút bóng con, chùi nước mắt, mồm lẩm nhẩm: “Chỉ có Lỗ Ban là khá…”.</p>
<p>Lỗ Ban vung roi thúc ngựa, người ngựa mải miết phi nhanh, một ngày đã đi được hơn ba trăm dặm đường. Lỗ Ban đi được mười ngày, vượt qua ba nghìn dặm đường, đã đi tới tận cùng con đường cái lớn quang đãng. Trước mặt là một trái núi lớn. Núi cao dốc đứng, đường quanh co khúc khuỷu mọc đầy gai góc và đá tai mèo. Lỗ Ban buồn rầu gò cương dừng lại. Giữa lúc đó chợt có một ông tiều phu già từ chân núi đi ra. Lỗ Ban nhảy xuống, dắt ngựa bước lên, chấp tay cúi chào:</p>
<p>– Thưa cụ, núi Chung Nam còn cách đây bao xa?</p>
<p>Ông già tiểu phu vuốt râu, chậm rãi nói:</p>
<p>– Hà, đi thẳng thì còn sáu nghìn dặm, đi đường vòng thì mất một vạn hai nghìn dặm, nếu muốn tìm đường ngắn nhất, thì phải vượt qua được ngọn núi cao này!</p>
<p>Lỗ Ban lại hỏi:</p>
<p>– Thưa cụ, cụ có cách nào giúp cháu vượt qua được trái núi lớn này không?</p>
<p>Cụ già lắc đầu:</p>
<p>– Núi cao như thế này, leo một năm cũng không tới được lưng chừng núi.</p>
<p>Lỗ Ban nói:</p>
<p>– Một năm leo không qua thì leo hai năm, hai năm leo không qua thì leo ba năm, không leo tới đỉnh núi thì có chết cháu cũng không chịu xuống núi.</p>
<p>Thấy Lỗ Ban nói kiên quyết như vậy, cụ già rất thán phục. Cụ cười nói:</p>
<p>– Cháu hãy mang theo chiếc dao rừng này của lão để chặt cây phá đá thì có thể leo lên đỉnh núi nhanh chóng được.</p>
<p>Lỗ Ban sung sướng vô cùng cúi đầu bái tạ cụ già, nhận dao rồi đi lên núi. Ngọn dao nhẹ phạt trên mặt đất, gai góc và đá nhọn đều sạch quang, Lỗ Ban đã mau chóng leo lên được đỉnh núi.</p>
<p>Chàng treo dao vào một cây cổ thụ, nhảy lên lưng ngựa đi thẳng theo con đường lớn về phía Tây. Lỗ Ban đi mười ngày nữa, lại vượt được ba nghìn dặm đường, tới chỗ tận cùng con đường cái quang đãng. Trước mặt là một con sông lớn chảy ngang qua. Nước sông xám xịt, ném một hòn đá xuống, hồi lâu vẫn không gợn chút bọt nước. Lỗ Ban buồn rầu gò cương đứng lại. Giữa lúc đó, chợt có một chiếc thuyền con từ bờ bên kia chèo sang, trên thuyền có một anh chài trẻ tuổi. Lỗ Ban xuống, dắt ngựa bước lên, cúi đầu vái chào:</p>
<p>– Anh ơi, từ đây đến núi Chung Nam còn bao xa nữa.</p>
<p>Anh chài giơ tay chỉ:</p>
<p>– Chà, đi thẳng thì còn ba nghìn dặm, đi đường vòng thì còn sáu nghìn dặm, muốn tìm con đường thuận tiện nhất thì phải vượt qua được dòng sông lớn này.</p>
<p>Lỗ Ban hỏi tiếp: Anh ơi, anh có cách gì giúp tôi qua sông không?</p>
<p>Anh chài chau mày:</p>
<p>– Không được đâu! Sông rộng nước sâu, từ xưa tới nay dòng sông này đã dìm chết không biết bao nhiêu người qua đường rồi.</p>
<p>Lỗ Ban nói:</p>
<p>– Không sợ nước sâu trông không thấy đáy, không sợ sông rộng đến tận chân trời. Không vượt qua được dòng sông lớn này thì có chết tôi cũng chẳng chịu quay về.</p>
<p>Thấy Lỗ Ban kiên cường như vậy, anh chài cười nói:</p>
<p>– Thôi chú em, hãy dắt ngựa xuống thuyền đi, tôi sẽ đưa chú qua sông.</p>
<p>Lỗ Ban qua sông, lại phi nhanh trên con đường lớn. Lướt gió đuổi theo măt trời mười ngày nữa, ba nghìn dặm đường đã lùi lại phía sau. Lại đi tới chỗ tận cùng con đường lớn. Trước mặt là một dãy núi cao. Lỗ Ban thầm nghĩ: “Dãy núi cao này là núi Chung Nam chăng?”. Đỉnh núi nhấp nhô, hàng nghìn con đường nhỏ khúc khuỷu quanh co. Đi theo đường nào lên núi được?</p>
<p>Lỗ Ban lại buồn rầu đứng lại. Giữa lúc đó chàng chợt nhìn thấy ở dưới chân núi có một ngôi nhà nhỏ, trước cửa có một bà cụ đang ngồi xe chỉ. Lỗ Ban liền dắt ngựa đi lên, cúi đầu vái chào:</p>
<p>– Thưa cụ, núi Chung Nam còn cách đây bao xa nữa?</p>
<p>Bà cụ đáp:</p>
<p>– Đi thẳng thì còn một trăm dặm, đi vòng thì còn ba trăm dặm nữa. Ba trăm ngọn núi, có ba trăm vị thần tiên: cháu muốn tìm vị nào?</p>
<p>Nghe nói vậy Lỗ Ban sung sướng vô cùng liền đáp:</p>
<p>– Cháu muốn tìm vị tổ sư nghề mộc. Chẳng hay phải đi theo đường nào ạ?</p>
<p>Bà cụ nói:</p>
<p>– Chín trăm chín mươi chín con đường nhỏ, con đường chính giữa là đường đi đó!</p>
<p>Lỗ Ban luôn miệng cảm tạ, rồi bắt đầu đếm từ phía bên trái bốn trăm chín mươi chín con đường, lại đếm từ phía bên phải bốn trăm chín mươi chín con đường, chàng bước lên con đường nhỏ ở chính giữa, cưỡi ngựa phi thẳng lên núi.</p>
<p>Lên tới đỉnh núi, Lỗ Ban chỉ thấy một nóc nhà lồi lõm ẩn hiện dưới rừng cây, lại gần thấy một ngôi nhà nhỏ ba gian. Lỗ Ban khẽ đẩy cửa bước vào, trong nhà rìu mẻ đục cùn bày la liệt trên mặt đất không còn chỗ len chân. Nhìn lên giường, Lỗ Ban thấy có một ông già đầu tóc bạc phơ đang nằm dang chân ra ngủ, tiếng ngáy vang như sấm. Lỗ Ban nghĩ thầm: “Ông cụ này chắc là ông tổ nghề mộc”.</p>
<p>Không dám làm kinh động tới giấc ngủ của thầy, Lỗ Ban lẳng lặng thu những rìu cùn cưa mẻ xếp vào trong một chiếc thùng gỗ, rồi ngồi ngay ngắn trên chiếc ghế dài chờ ông cụ tỉnh dậy.</p>
<p>Ông già ngủ rất say, trở mình mấy lần rồi mà vẫn chưa thức giấc. Cho tận tới lúc mặt trời gác núi, ông già mới mở mắt ngồi dậy. Lỗ Ban bước lên, quỳ ngay xuống nền nhà nói:</p>
<p>– Thưa thầy, kẻ học trò này hôm nay đến bái yết thầy, cầu mong thầy thu nhận, dạy nghề cho.</p>
<p>Cụ già hỏi:</p>
<p>– Ngươi tên là gì? Từ đâu tới?</p>
<p>Lỗ Ban đáp:</p>
<p>– Con là Lỗ Ban, từ Lỗ Gia Loan, cách đây ngoài vạn dặm tới.</p>
<p>Cụ già lại hỏi:</p>
<p>– Đi học nghề, tại sao lại tìm đến ta?</p>
<p>Lỗ Ban trả lời rành rọt:</p>
<p>– Vì thầy là ông tổ của nghề mộc.</p>
<p>Cụ già ngừng một lát rồi nói:</p>
<p>– Ta phải hỏi ngươi một chút đã, nếu trả lời đúng ta sẽ thu nhận, nếu trả lời không đúng thì đừng trách ta không nhận, đến như thế nào thì cứ như thế ấy mà trở về.</p>
<p>Lỗ Ban giật mình:</p>
<p>– Nếu hôm nay: con trả lời không được, xin thầy để cho ngày mai. Hôm nào trả lời được xin thầy thu nhận cho vào học từ hôm ấy.</p>
<p>– Có mấy cột cái, có mấy cột quân, có mấy hàng rui, có mấy hàng mè?</p>
<p>Lỗ Ban trả lời ngay:</p>
<p>– Một ngôi nhà ba gian bình thường có ba cột cái, có ba cột quân, lớn nhỏ có hai mươi hàng rui, một trăm hàng mè. Từ khi lên năm con đã đếm kỹ.</p>
<p>Cụ già khẽ gật đầu, hỏi tiếp:</p>
<p>– Cùng một môn học, có người học ba tháng đã xong, có người phải học ba năm mới biết; vậy ba tháng và ba năm bắt nguồn từ ở đâu?</p>
<p>Lỗ Ban nghĩ một lát rồi đáp:</p>
<p>– Ba tháng học xong nghề, bắt nguồn từ con mắt; ba năm học xong nghề, bắt nguồn từ lòng mình.</p>
<p>Cụ già khẽ gât đầu, hỏi tiếp câu thứ ba:</p>
<p>– Một người thợ mộc dạy nghề cho hai học trò. Học trò lớn múa rìu một cái đã thu về được hàng núi bạc, học trò thứ hai múa rìu một cái đã khắc được tên mình trong lòng người. Nếu ngươi học xong nghề, sẽ đi theo người nào?</p>
<p>Lỗ Ban trả lời ngay:</p>
<p>– Con sẽ đi theo người thứ hai!</p>
<p>Cụ già thôi không hỏi nữa, cụ nói:</p>
<p>– Thôi được, ngươi đã trả lời đúng, ta sẽ nhận làm học trò. Nhưng có việc này là muốn học nghề của ta thì phải dùng được “đồ nghề” của ta. Những đồ dùng đó đã năm trăm năm nay chưa đổi, ngươi hãy mang đi sửa chữa.</p>
<p>Lỗ Ban đứng dậy, xách chiếc hòm gỗ đựng đồ nghề đặt xuống bên một hòn đá mài, lấy từng thứ ra. Lúc này chàng mới nhìn kỹ: lưỡi rìu đã mẻ, lưỡi cưa cùn không còn một răng nào, hai chiếc đục thì vừa cong vừa cùn hoen rỉ hết cả. Lỗ Ban không chút ngại ngần, xắn tay áo, bắt đầu mài. Chàng mài ngày, mài đêm, mài cho tới lúc hai cánh tay tê đại, hai bàn tay sưng phồng, hòn đá mài vừa dày vừa cao giờ đã mài lõm xuống như hình mặt trăng lưỡi liểm. Lỗ Ban mài luôn bảy ngày bảy đêm, lưỡi rìu đã sắc, răng cưa đã nhọn, đục đã hết hoen ri, mọi thứ “đồ nghề” đều đã mài sắc bén sáng loáng. Lỗ Ban đem từng thứ đưa cho cụ già xem. Cụ già chỉ khẽ gật đầu chẳng nói một lời được hay không được. Sau cùng cụ già nói:</p>
<p>– Để thử xem lưỡi cưa mài như thế nào, ngươi hãy ra cưa cho đổ cây cổ thụ mọc ở phía cửa. Cây này sống đã tròn năm trăm năm rồi.</p>
<p>Lỗ Ban vác cưa ra gốc cây cổ thụ. Thân cây lớn hai người ôm không xuể, ngọn cây cao vút tưởng như chạm tới trời xanh. Lỗ Ban ngồi dưới gốc cây bắt đầu cưa. Chàng cưa vừa đúng mười hai ngày mười hai đêm, mới cưa đổ được cây cổ thụ. Lỗ Ban mang cưa vào gặp cụ già. Cụ già lại nói:</p>
<p>– Để thử xem lưỡi rìu mài như thế nào, ngươi hãy đem rìu ra đẽo cây gỗ này cho thành một chiếc xà lớn. Phải đẽo cho nhẵn nhụi không còn một vết xơ và tròn như trăng đêm rằm.</p>
<p>Lỗ Ban quay mình mang rìu đi ra. Rìu vung lên chặt cụt các cành, bóc hết lớp vỏ cây. Đẽo gọt vừa đúng mười hai ngày mười hai đêm mới xong được chiếc xà lớn, Lỗ Ban mang rìu vào gặp ông cụ. Ông cụ lại nói:</p>
<p>– Chưa xong, để thử xem lưỡi đục mài như thế nào, ngươi hãy đem đục ra đục chiếc xà lớn thành hai nghìn bốn trăm lỗ: sáu trăm lỗ vuông, sáu trăm lỗ tròn, sáu trăm lỗ ba cạnh, sáu trăm lỗ hình thoi.</p>
<p>Lỗ Ban mang đục ra đục luôn. Vụn gỗ bay tả tơi, chàng càng đục càng thấy khoẻ ra. Đục vừa đúng mười hai ngày mười hai đêm, hai nghìn bốn trăm lỗ đục đã làm xong, Lỗ Ban mang đục vào gặp cụ già. Cụ già cất tiếng cười sung sướng, bước vội khỏi ghế, đón chiếc đục trong tay Lỗ Ban, lau mồ hôi trên mặt chàng rồi nói:</p>
<p>– Con yêu quý, không có gì làm con ngã lòng được! Ta sẽ đem tất cả nghề ta ra truyền dạy cho con!</p>
<p>Nói đoạn, cụ dẫn Lỗ Ban tới gian phòng phía Tây. Vừa bước vào, Lỗ Ban đã hoa cả mắt, phải mở to ra nhìn. Trong gian phòng này bày không biết bao nhiêu là hình mẫu, trong đó có đủ các loại nhà gác nhà lầu, cầu, tháp, bàn ghế, hòm tủ, cái nào cũng làm rất tinh vi. Cụ già cười nói:</p>
<p>– Con hãy tháo từng chiếc ra rồi lắp vào, mỗi hình mẫu tháo ra một lần lắp lại một lần. Tháo lắp thành thạo là nghề con cũng giỏi. Con hãy chuyên tâm mà học, ta chẳng nói nhiều.</p>
<p>Lỗ Ban cầm hình mẫu, lật đi lật lại xem xét, đặt ở trên tay chắng muốn buông rời. Thầy bảo tháo lắp một lần, Lỗ Ban tháo lắp tới ba lần. Ngày ngày chỉ thấy chàng vào trong phòng mà không thấy ra. Cơm để nguội cũng chẳng buồn ăn, tay chân mỏi rã rời cũng chẳng muốn nghỉ ngơi. Ngày ngày trước khi đi ngủ, cụ già đến thăm thì thấy Lỗ Ban vẫn ngồi tháo lắp trong phòng. Khi ngủ dậy, cụ đến thăm thì thấy Lỗ Ban hãy còn ngồi tháo lắp ở đó. Khi cụ già giục Lỗ Ban đi ngủ, chàng chỉ “dạ dạ…” nhưng tay vẫn nắm các hình mẫu không buông. Cứ như vậy, Lỗ Ban đã kiên trì trong suốt ba năm học được thành tài.</p>
<p>Thầy dạy muốn thử xem chàng học như thế nào, liền đem hủy tất cả các hình mẫu, nhưng Lỗ Ban nhờ vào trí bền bỉ của mình, đã lần lượt dựng lại được tất cả các hình mẫu. Cụ già lại đưa ra nhiều kiểu mới cho Lỗ Ban làm. Chàng chăm chú suy nghĩ một lát rồi rất nhanh chóng dựng nên các hình mẫu mới theo ý muốn của cụ già. Cụ già rất vừa ý. Một hôm cụ già gọi Lỗ Ban tới, lưu luyến nói với chàng:</p>
<p>– Con thân yêu, ba năm đã qua, nghề con cũng đã học thành tài, hôm nay con phải xuống núi thôi.</p>
<p>Lỗ Ban thấy lạnh hẳn một bên lòng:</p>
<p>– Thưa thầy, con chưa học thành nghề, xin thầy cho con học thêm ba năm nữa!</p>
<p>Cụ già cười:</p>
<p>– Sau này con hãy tự học lấy, hôm nay thế nào con cũng phải xuống núi thôi. Học trò sắp ra đi, thầy biết cho cái gì đây?</p>
<p>Cụ già nghĩ một lát rồi nói:</p>
<p>– Thôi được, rìu cưa đục con đã mài, ta đem tặng cho con mang theo mà dùng.</p>
<p>Lỗ Ban ngồi lặng đi, nhìn thầy mà khóc:</p>
<p>– Đứa học trò nghèo khổ này không biết lấy gì để lại tặng thầy…</p>
<p>Cụ già cười khanh khách:</p>
<p>– Ta không lấy gì của con cả, chỉ mong con đừng làm mất thanh danh của thầy là được rồi.</p>
<p>Lỗ Ban rưng rưng nước mắt, bái biệt thầy, xuống núi. Trên đường trở về, Lỗ Ban không tìm thấy bà cụ già chỉ đường, không gặp anh chài đưa chàng qua sông, không thấy ông già tiều phu cho chàng mượn dao vượt núi. Để đền đáp ân tình của họ, Lỗ Ban liền dựng một tòa miếu lớn ở dưới chân núi Chung Nam, bắc một chiếc cầu lớn qua sông rộng, xây một chiếc tháp lớn trên ngọn núi cao lần đầu tiên vượt qua. Truyền rằng những công trình xây dựng này ngày nay vẫn còn.</p>
<p>Lỗ Ban về nhà, gặp lại cha mẹ. Chàng nhớ lời dặn của thầy, mang những đồ dùng của thầy cho, đi làm nhiều việc có ích cho nhân dân, còn lưu lại những câu chuyện rất cảm động. Sau này, mọi người tôn thờ Lỗ Ban làm ông tổ của nghề mộc.</p>
<p></p>
      </div>`,
      },
      {
        name: 'Chàng rể thông minh',
        content: `<div class="wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
        <p></p>
<p>&nbsp;</p>
<p>Vua A-bíp có một nàng công chúa đã lớn mà chưa chịu lấy chồng.</p>
<p>Đã có hàng trăm chàng trai, con các gia đình quyền quý đến cầu hôn nhưng nàng đều từ chối.</p>
<p>Vua cha tuy không muốn ép buộc con, nhưng vẫn lo âu, phàn nàn với công chúa:</p>
<p>– Con không thể ở vậy suốt đời con ạ, con chẳng có anh em trai, con là con gái độc nhất của ta. Sau khi ta chết đi, thân phận con rồi sẽ ra sao? Con ương bướng thế này làm ta buồn phiền lắm.</p>
<p>– Thưa vua cha, con có từ chối không lấy chồng đâu. Con chỉ muốn cha tìm được một chàng rể chồng thông minh và tế nhị.</p>
<p>Vua cha vui mừng:</p>
<p>– Vậy con làm thế nào để nhận ra trí thông minh và sự tế nhị của người chồng tương lại của con?</p>
<p>– Như thế này ạ: Vua cha hãy mở một cuộc thi. Con sẽ kể về một câu chuyện nói khoác. Người nào bịa được một chuyện nói khoác tài hơn sẽ làm chồng con.</p>
<div class="text-center wow fadeIn" style="visibility: hidden; animation-name: none;">
<p align="center">
</p></div>
<p>Đúng là một lý lẽ khôn ngoan, vì phải có một trí thông minh mới bịa được một câu chuyện hay.</p>
<p>Đối với nhà vua, cách chọn chồng như vậy thật là lạ đời, nhưng vua vẫn không muốn trái ý cô con gái yêu.</p>
<p>Lệnh truyền đi khắp các đô thị, thôn xóm, các bộ lạc xa xôi: Nhà vua sẽ gả con gái cho người nào kể được một câu chuyện nói khoác hay hơn hẳn câu chuyện của công chúa.</p>
<p>Câu chuyện ấy như sau: “Công chúa thuê làm một cái nồi. Nồi to đến nỗi phải dùng ba trăm sáu mươi cái đinh để đóng ghép các bộ phận lại. Mỗi cái đinh phải do một người thợ rèn đóng. Người thợ rèn này không nghe thấy tiếng búa của người kia vì khoảng cách giữa những người thợ làm chiếc nồi khổng lồ kia xa lắm”.</p>
<p>Những chàng trai con các nhà quyền quý, sang trọng từ khắp bốn phương trời đến, lũ lượt về thủ đô dự thi. Họ đều được mời vào triều, đến trước nhà vua, có công chúa đứng bên cạnh.</p>
<p>Người nào cũng kể câu chuyện nói khoác của mình nhưng so với câu chuyện của công chúa thì những chuyện của họ đều ngớ ngẩn.</p>
<p>Tuần này tiếp tuần nọ, các chàng trai đến cầu hôn ngượng ngùng lần lượt rút lui. Vua cha vẫn làm tiệc linh đình tiễn đưa họ và ban nhiều tặng phẩm an ủi họ.</p>
<p>Công chúa thắng lợi. Nàng kiêu hãnh thấy mình đã hơn hẳn các chàng trai kia. Hơn nữa nàng vui sướng được tiếp tục sống theo ý thích của mình mà vẫn không làm vua cha buồn giận. Trái lại nhà vua rất buồn phiền, lo lắng. Vua biết rằng mỗi một người thua cuộc sẽ là một kẻ thù địch của đất nước mình.</p>
<p>Thế rồi một ngày nọ, một chàng trai đến xin dự thi. Anh ta khác hẳn các chàng trai giàu có, sang trọng đến thi lần trước: Anh ta chỉ là một người nghèo khổ. Cúi chào nhà vua và công chúa xong, anh bắt đầu kể:</p>
<p>“Tôi trồng được một cây bắp cải có ba trăm sáu mươi lá. Mỗi lá che được ba trăm sáu mươi kỵ sĩ. Người kỵ sĩ này không trông thấy được kỵ sĩ kia, vì chỗ họ đứng rất cách xa nhau”</p>
<p>Công chúa hỏi:</p>
<p>– Thế anh định dùng cái gì để luộc cây bắp cải ấy?</p>
<p>– Thưa công chúa, chính dùng cái nồi của công chúa đấy ạ.</p>
<p>Công chúa reo lên:</p>
<p>– A! Câu chuyện của anh hay hơn hẳn của tôi. Tôi xin chịu tài anh.</p>
<p>Thế là anh chàng nghèo khó được lấy công chúa và họ sống cuộc đời rất sung sướng.</p>
<p></p>
      </div>`,
      },
    ],
    'Truyện ngụ ngôn': [
      {
        name: 'Đeo chuông cho mèo',
        content: `<div class="wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
        <p></p>
<p><a name="more"></a></p>
<h2 style="text-align: center;"><em style="box-sizing: border-box; caret-color: #696969; color: dimgrey; font-family: 'Be Vietnam', Arial, 'Helvetica Neue', Helvetica, sans-serif;"><span style="font-size: large;">ĐEO CHUÔNG CHO MÈO</span></em></h2>
<p><em style="box-sizing: border-box; caret-color: #696969; color: dimgrey; font-family: 'Be Vietnam', Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16.6292px;">Trong một cửa hàng bách hóa nọ có rất nhiều chuột. Hằng ngày, chúng phá phách và làm hư hỏng rất nhiều hàng hóa. Vì vậy, chủ tiệm đã quyết định mua một con mèo để dẹp yên lũ chuột này. Đàn chuột rất lo lắng về điều đó và tìm cách tự cứu lấy mình.</em></p>
<p style="box-sizing: border-box; caret-color: #696969; color: dimgrey; font-family: 'Be Vietnam', Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16.6292px; line-height: 1.4; margin-bottom: 1.3em; margin-top: 0px; text-size-adjust: auto;"><em style="box-sizing: border-box;">Một con chuột đứng dậy và nói: “Tôi có kế hoạch này, nếu chúng ta đeo một cái chuông vào cổ của con mèo thì mọi cử động của nó, chúng ta đều biết được”. Đây cũng là một ý kiến hay, thế nhưng vấn đề là ai sẽ làm điều đó. Và khi câu hỏi này được nêu lên, không một ai đáp lại.</em></p>
<p style="box-sizing: border-box; caret-color: #696969; color: dimgrey; font-family: 'Be Vietnam', Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16.6292px; line-height: 1.4; margin-bottom: 1.3em; margin-top: 0px; text-size-adjust: auto;"><span style="box-sizing: border-box; font-weight: bolder;">Ý nghĩa câu chuyện: N</span>ếu các chú chuột dũng cảm đeo chuông cho mèo thì chúng đã có thể tự cứu lấy mình. Song, không ai dám làm điều đó. Truyện nhấn mạnh rằng hành động thực tế luôn ý nghĩa hơn mọi lý thuyết dù hay đến thế nào đi chăng nữa.</p>
<p></p>
      </div>`,
      },
      {
        name: 'Thỏ Rừng và những người Bạn',
        content: `<div style="background-color: white; border: 0px; font-family: &quot;lucida grande&quot;, tahoma, verdana, arial, sans-serif; font-stretch: inherit; font-variant-east-asian: inherit; font-variant-numeric: inherit; line-height: inherit; margin: 0px; max-width: 100%; padding: 0px; vertical-align: baseline; visibility: visible; animation-name: fadeIn;" class="wow fadeIn">
<div style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin-bottom: 10px; margin-top: 10px; max-width: 100%; padding: 0px; text-align: justify; vertical-align: baseline; visibility: visible; animation-name: fadeIn;" class="wow fadeIn"><span style="border: 0px; color: darkgreen; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; max-width: 100%; padding: 0px; vertical-align: baseline;"><span style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; max-width: 100%; padding: 0px; vertical-align: baseline;"><span style="font-size: large;">hỏ rừng và những người bạn</span></span></span></div>
<div style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin-bottom: 10px; margin-top: 10px; max-width: 100%; padding: 0px; text-align: justify; vertical-align: baseline; visibility: visible; animation-name: fadeIn;" class="wow fadeIn"><span style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; max-width: 100%; padding: 0px; vertical-align: baseline;"><span style="font-size: large;">Một con Thỏ Rừng rất được yêu mến bởi những con thú tự xưng là bạn của nó. Một hôm nó nghe thấy đàn chó săn đang đến gần và hy vọng thoát khỏi bầy chó nhờ sự giúp đỡ của những người Bạn.</span></span></div>
<div style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin-bottom: 10px; margin-top: 10px; max-width: 100%; padding: 0px; text-align: justify; vertical-align: baseline; visibility: visible; animation-name: fadeIn;" class="wow fadeIn"><span style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; max-width: 100%; padding: 0px; vertical-align: baseline;"><span style="font-size: large;">Nên nó đến gặp Ngựa và nhờ cậu ta chở đi trốn khỏi chúng trên lưng của anh ta. Nhưng cậu ta từ chối và giải thích cậu bận làm một việc quan trọng cho chủ. “Tôi chắc chắn”, cậu ta nói “rằng những người bạn khác sẽ giúp đỡ cô “.</span></span></div>
<div style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin-bottom: 10px; margin-top: 10px; max-width: 100%; padding: 0px; text-align: justify; vertical-align: baseline; visibility: visible; animation-name: fadeIn;" class="wow fadeIn"><span style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; max-width: 100%; padding: 0px; vertical-align: baseline;"><span style="font-size: large;">Sau đó Thỏ đến gặp Bò Đực với hi vọng anh ta sẽ dùng cái sừng đẩy lùi đàn chó săn.&nbsp;Bò Đực trả lời: “Rất xin lỗi, hôm nay tôi có hẹn với bạn gái rồi; nhưng tôi chắc Dê – bạn của chúng ta sẽ giúp cô làm những việc cô muốn”.</span></span></div>
<div style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin-bottom: 10px; margin-top: 10px; max-width: 100%; padding: 0px; text-align: justify; vertical-align: baseline; visibility: visible; animation-name: fadeIn;" class="wow fadeIn"><span style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; max-width: 100%; padding: 0px; vertical-align: baseline;"><span style="font-size: large;">Tuy Dê sợ rằng chở Thỏ trên lưng mình sẽ làm Thỏ đau; nhưng anh ta chắc chắn rằng Cừu sẽ đồng ý giúp đỡ. Thế nên Thỏ đến gặp Cừu và kể cho anh ta nghe sự việc.</span></span></div>
<div style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin-bottom: 10px; margin-top: 10px; max-width: 100%; padding: 0px; text-align: justify; vertical-align: baseline; visibility: visible; animation-name: fadeIn;" class="wow fadeIn"><span style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; max-width: 100%; padding: 0px; vertical-align: baseline;"><span style="font-size: large;">Cừu đáp ” Lần khác nhé, bạn yêu quý. Tôi thật sự không thích can thiệp vào việc của người khác, bởi vì chó săn, ngoài Thỏ ra, còn ăn luôn cả Cừu nữa”.</span></span></div>
<div style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin-bottom: 10px; margin-top: 10px; max-width: 100%; padding: 0px; text-align: justify; vertical-align: baseline; visibility: visible; animation-name: fadeIn;" class="wow fadeIn"><span style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; max-width: 100%; padding: 0px; vertical-align: baseline;"><span style="font-size: large;">Thỏ Rừng sau đó đến gặp Bê, với hy vọng nhỏ nhoi cuối cùng. Bê nói rất tiếc vì đã không thể giúp được Thỏ bởi lẽ Bê không muốn rước thêm chuyện cho cực thân giống như những người khác lớn hơn anh ta đã từ chối việc này.</span></span></div>
<div style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin-bottom: 10px; margin-top: 10px; max-width: 100%; padding: 0px; text-align: justify; vertical-align: baseline; visibility: visible; animation-name: fadeIn;" class="wow fadeIn"><span style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; max-width: 100%; padding: 0px; vertical-align: baseline;"><span style="font-size: large;">Lúc này đàn chó săn đã cận kề, Thỏ Rừng bèn cao chạy xa bay và may mắn chạy thoát.</span></span></div>
<blockquote style="border: 0px; font-family: Georgia, 'Times New Roman', Times, serif; font-stretch: inherit; font-style: italic; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 15px 0px 0px; max-width: 100%; padding: 0px; position: relative; text-align: justify; vertical-align: baseline;">
<div style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin-bottom: 10px; margin-top: 10px; max-width: 100%; padding: 0px; vertical-align: baseline; visibility: visible; animation-name: fadeIn;" class="wow fadeIn"><span style="border: 0px; color: indigo; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; max-width: 100%; padding: 0px; vertical-align: baseline;"><span style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; max-width: 100%; padding: 0px; vertical-align: baseline;"><span style="font-size: large;">Người được cho là có nhiều bạn đó, thực ra chẳng có người bạn nào cả.</span></span></span></div>
</blockquote>
</div>`,
      },
      {
        name: 'Không thấy ai cả',
        content: `<div class="wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
        <p></p>
<p><a name="more"></a></p>
<p>Ở nước Tề có anh chàng rất thèm kiếm được vàng. Một hôm, anh ta mặc áo quần, đội mũ tử tế đi đến chợ bán vàng, thừa lúc chủ hiệu sơ ý, anh ta quào hốt một số vàng bỏ túi rồi quay trở về, giữa đường bị quan tuần bắt lại. Quan hỏi anh ta:<br>
– Mọi người ở đó, tại sao anh dám quào hốt cướp số vàng của người ta?</p>
<p>Anh chàng trả lời:<br>
– Khi tôi thò tay quào hốt, thì trước mắt tôi chỉ thấy vàng, ngoài ra không còn thấy ai cả!</p>
<p></p>
      </div>`,
      },
      {
        name: 'Con chó và bữa tối của ông chủ',
        content: `<div style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; max-width: 100%; padding: 0px; vertical-align: baseline; visibility: visible; animation-name: fadeIn;" class="wow fadeIn">
<div style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin-bottom: 10px; margin-top: 10px; max-width: 100%; padding: 0px; text-align: justify; vertical-align: baseline; visibility: visible; animation-name: fadeIn;" class="wow fadeIn">
<span style="border: 0px; color: darkgreen; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; max-width: 100%; padding: 0px; vertical-align: baseline;"><span style="font-size: large;">Con chó và bữa tối của ông chủ</span></span></div>
<div style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin-bottom: 10px; margin-top: 10px; max-width: 100%; padding: 0px; text-align: justify; vertical-align: baseline; visibility: visible; animation-name: fadeIn;" class="wow fadeIn">
<span style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; max-width: 100%; padding: 0px; vertical-align: baseline;"><span style="font-size: large;">Hàng ngày có một chú chó đã quen việc mang thức ăn tối cho ông chủ của nó. Nó rất trung thành với nhiệm vụ này, mặc cho mùi thức ăn tuyệt hảo luôn quyến rũ nó.</span></span></div>
<div style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin-bottom: 10px; margin-top: 10px; max-width: 100%; padding: 0px; text-align: justify; vertical-align: baseline; visibility: visible; animation-name: fadeIn;" class="wow fadeIn">
<span style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; max-width: 100%; padding: 0px; vertical-align: baseline;"><span style="font-size: large;">Những con chó hàng xóm đã chú ý cái giỏ mà chú ta mang đi và đã sớm phát hiện ra có gì trong đó. Một vài lần những anh bạn hàng xóm kia cố trộm giỏ thức ăn đó. Nhưng chú ta luôn thận trọng bảo vệ chiếc giỏ ấy.</span></span></div>
<div style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin-bottom: 10px; margin-top: 10px; max-width: 100%; padding: 0px; text-align: justify; vertical-align: baseline; visibility: visible; animation-name: fadeIn;" class="wow fadeIn">
<span style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; max-width: 100%; padding: 0px; vertical-align: baseline;"><span style="font-size: large;">Sau đó vào một ngày những con chó hàng xóm tụ tập lại với nhau và gặp chú chó trên đường đi cùng với giỏ đồ ăn. Con chó đã cố gắng chạy trốn khỏi chúng. Nhưng cuối cùng nó dừng lại dể tranh luận.</span></span></div>
<div style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin-bottom: 10px; margin-top: 10px; max-width: 100%; padding: 0px; text-align: justify; vertical-align: baseline; visibility: visible; animation-name: fadeIn;" class="wow fadeIn">
<span style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; max-width: 100%; padding: 0px; vertical-align: baseline;"><span style="font-size: large;">Đó là lỗi của chú. Chúng nó nhanh chóng chỉ cho chú ta thấy việc giữ cái giỏ với một miếng thịt quay lớn dự định dành cho ông chủ là hết sức buồn cười.</span></span></div>
<div style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin-bottom: 10px; margin-top: 10px; max-width: 100%; padding: 0px; text-align: justify; vertical-align: baseline; visibility: visible; animation-name: fadeIn;" class="wow fadeIn">
<span style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; max-width: 100%; padding: 0px; vertical-align: baseline;"><span style="font-size: large;">Chú ta nói : được đấy, cùng chia phần còn lại nào.</span></span></div>
<blockquote style="border: 0px; font-family: Georgia, &quot;Times New Roman&quot;, Times, serif; font-stretch: inherit; font-style: italic; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 15px 0px 0px; max-width: 100%; padding: 0px; position: relative; text-align: justify; vertical-align: baseline;">
<div style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin-bottom: 10px; margin-top: 10px; max-width: 100%; padding: 0px; vertical-align: baseline; visibility: visible; animation-name: fadeIn;" class="wow fadeIn">
<span style="border: 0px; color: indigo; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; max-width: 100%; padding: 0px; vertical-align: baseline;"><span style="border: 0px; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; max-width: 100%; padding: 0px; vertical-align: baseline;"><span style="font-size: large;">Không nên tranh luận trước những sự cám dỗ nào đó .</span></span></span></div>
</blockquote>
</div>`,
      },
    ],
    'Truyện cổ Andersen': [
      {
        name: 'Truyện cổ tích Andersen Bé tí hon',
        content: `<div class="wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
        <p></p>
<h3 style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 1.25em; margin-bottom: 0.5em; margin-top: 0px; text-rendering: optimizespeed; width: 772.5px;">1. Phép màu từ hạt lúa mì</h3>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px;">Ngày xưa có một bà ước mong sinh được một đứa con, nhưng không biết làm cách nào. Bà đành đi tìm một mụ phù thủy già và hỏi:</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px;">– Tôi rất muốn có một cháu bé, bà có thể bảo giùm tôi làm cách nào để có con được không?</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px;">– Ta sẽ giúp ngươi. Cầm lấy hạt lúa này. Nó không giống loại lúa mì mọc ngoài đồng, cũng chẳng phải là loại vẫn cho gà ăn đâu! Đem gieo nó vào một chậu hoa, rồi ngươi khắc biết.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px;">– Cám ơn bà.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px;">Nói đoạn bà trả công cho mụ phù thủy tám hào bạc, rồi về nhà đem gieo hạt lúa. Lập tức nó mọc thành một cây hoa tuyệt đẹp, trông giống như hoa uất kim hương, nhưng cánh hoa cuốn lại như một cái nụ.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px;">– Hoa đẹp quá!</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px;">Bà vừa thốt lên vừa đặt môi lên hoa.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px;">Nhưng đang lúc bà ta hôn bông hoa, bỗng có tiếng động rất mạnh làm hoa bừng nở. Rõ ràng là một bông hoa thật, nhưng ở giữa hoa có một cháu bé gái xinh đẹp ngồi trên nhụy hoa màu xanh như ngồi trên một chiếc ghế tựa, bé không lớn gì hơn ngón tay cái nên người ta gọi bé là&nbsp;<span style="box-sizing: border-box;"><a style="background-color: transparent; box-sizing: border-box; color: #222222; text-decoration-line: none; touch-action: manipulation;" href="https://thegioicotich.vn/be-ti-hon/">Bé tí hon</a></span>.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px;">Người ta lấy vỏ hạt dẻ làm cho bé một chiếc nôi rất đẹp, bên trong có nệm làm bằng một cánh hoa tím, chăn đắp là một cánh hồng. Đó là nơi bé thường ngủ. Ban ngày bé chơi trên bàn. Bà chủ nhà đặt trên đó một cái đĩa đựng đầy nước, vành đĩa khoanh một vòng hoa. Cánh hoa nổi trên mặt nước, có cả một cánh uất kim hương to. Bé tí hon có thể ngồi lên đi vòng quanh đĩa, có chiếc lông ngựa dùng để chèo. Bé tí hon cũng biết hát, giọng hát êm ái dịu dàng.</p>
<h3 style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 1.25em; margin-bottom: 0.5em; margin-top: 0px; text-rendering: optimizespeed; width: 772.5px;">2. Cuộc phiêu lưu bắt đầu</h3>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px;">Một đêm, Bé tí hon đang ngủ, bỗng một con cóc gớm ghiếc chui qua ô kính vỡ trên cửa sổ vào phòng, vừa béo vừa nhớt nhát. Nó nhảy lên bàn nơi Bé tí hon đang ngủ dưới cánh hoa hồng đỏ. Nó nghĩ thầm:</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px;">– Được con bé này làm vợ con trai mình thì ắt phải mê tít.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px;">Thế là nó chộp lấy cái vỏ hạt dẻ, bên trong có Bé tí hon đang ngủ, chui qua ô kính vỡ, đem ra vườn. Trong vườn có một dòng suối to, hai bờ lầy lội. Đấy là chỗ ở của bố con nhà cóc. Khiếp! Cóc con cũng béo phị và trông tởm như cóc bố, giống nhau như đúc.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px;">– Coọc, coọc, kẹc, kẹc, kẹc!</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px;">Khi trông thấy cô bé xinh đẹp trong vỏ hạt dẻ cóc con chỉ biết nói có vậy thôi. Cóc bố bảo:</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px;">– Đừng có kêu to như thế! Nó mà thức dậy là nó chạy trốn mất đấy, vì nó nhẹ như lông tơ thiên nga. Chúng ta sẽ đặt nó lên một lá sen to. Nó bé thế, lá sen sẽ như một hòn đảo, nó không thể chạy trốn được. Chúng ta sẽ sửa soạn một căn nhà cho nó ở trong chốn bùn lầy này.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px;">Giữa dòng suối có nhiều gốc sen, lá xanh to tướng bập bềnh trên mặt nước, tàu ở xa bờ nhất là tàu to nhất. Cóc già bơi ra tận đấy, đặt chiếc vỏ hạt dẻ đựng Bé tí hon lên tàu lá.</p>

<div style="clear: both; text-align: center; visibility: visible; animation-name: fadeIn;" class="wow fadeIn"></div>
<div style="clear: both; text-align: center; visibility: visible; animation-name: fadeIn;" class="wow fadeIn">
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Sáng hôm sau, bé tội nghiệp thức dậy. Khi nhận ra mình đang ở đâu, bé oà khóc rất thảm thiết, vì xung quanh tàu lá xanh to đều là nước. Bé tí hon không làm thế nào vào bờ được.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Trong khi đó, cóc già chuẩn bị huê phòng cho cô bé trong đám bùn lầy. Lão trang hoàng căn phòng bằng cây khê tôn và sen vàng, xong lão cùng con trai đến gặp Bé tí hon tận chiếc lá sen ngoài cùng.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Cóc già cúi rạp xuống nước chào Bé tí hon và nói:</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Ta giới thiệu với con thằng con trai của ta. Chồng của con đấy. Hai con sẽ sống trong căn phòng đẹp đẽ giữa đám bùn lầy này.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Coọc, coọc, kẹc, kẹc, kẹc!</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Cóc con vẫn chỉ nói được có thế.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Cóc bố và cóc con ngậm lấy tàu lá vừa bơi vừa kéo vào bờ. Bé tí hon ngồi trên tàu lá khóc sướt mướt. Bé vừa không muốn ở nhà con cóc già ghê tởm, vừa sợ phải lấy đứa con trai gớm guốc của lão.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">May sao lũ cá con đang bơi lội ở dưới suối đã trông thấy. Chúng thò đầu ra khỏi nước để xem Bé tí hon.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Chúng thấy cô bé đẹp và rất buồn vì cô bé phải sống với hai con cóc ghê tởm.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Không, không thể được! Chúng bơi đến ngay dưới tàu lá có Bé tí hon ngồi trên và cố hết sức cắn cuộng sen. Thế là dòng nước cuốn tàu lá đi, đồng thời đưa cô Bé tí hon ra xa giữa dòng, rõ xa, nơi mà cóc không thể ra tới nơi được.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Bé tí hon trôi qua nhiều tỉnh thành. Trong bờ bụi, chim chóc hót rằng:</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Ồ, cô bé xinh quá!</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Tàu lá vẫn trôi và đưa cô bé qua các xứ xa lạ. Một con bướm trắng bay lượn hồi lâu trên đầu cô bé rồi đậu xuống tàu lá. Cô bé rất sung sướng vì đã thoát khỏi lũ cóc và được ngắm nhìn phong cảnh tuyệt đẹp ở những xứ sở mà tàu lá trôi qua. Dưới ánh nắng, nước suối lóng lánh như vàng lỏng. Bé tí hon cởi dây lưng, buộc một đầu vào thân bướm, đầu kia vào tàu lá và khi bướm bay, nó kéo theo cả tàu lá. Bỗng có một lão bọ dừa to tướng xuất hiện. Hắn lấy chân quắp lấy Bé tí hon và đem đến một cành cây. Còn chiếc lá vẫn tiếp tục chao lượn cùng với con bướm, vì bướm đã bị buộc chặt vào lá, không tự gỡ ra được.</p>

<div style="clear: both; text-align: center; visibility: visible; animation-name: fadeIn;" class="wow fadeIn">
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Khi bọ dừa đem Bé tí hon lên cây, bé sợ lắm, sợ cả cho số phận con bướm tội nghiệp bị buộc vào tàu lá. Nếu không ai tìm cách gì cởi dây buộc ra cho bướm thì bướm đến chết đói mất! Nhưng bọ dừa chẳng nghĩ đến chuyện ấy! Hắn đặt Bé tí hon lên một chiếc lá xanh to, đem nhụy hoa đến cho bé ăn và khen rằng bé đẹp lắm, mặc dù bé không thuộc giống bọ dừa.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Nhiều bọ dừa bạn hắn, sống trên những cây bên cạnh, sang chơi. Con nào cũng nhìn Bé tí hon bằng một vẻ láo xược. Một ả bọ dừa còn trẻ kêu lên:</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Nó chỉ có hai chân thôi, chị em ạ!</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Một con khác vội thêm:</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Nó không có râu, chúng mày ạ!</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Nhiều con khác chế nhạo:</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Gớm, nom nó xấu như giống người vậy.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Thật ra Bé tí hon rất xinh. Thoạt đầu khi nó đem cô bé về, con bọ dừa không nghĩ như các bạn nó, nhưng vì tất cả lũ bọ dừa đều nhất trí là bé xấu xí, nó cũng tin như vậy và không thích Bé tí hon nữa.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Nó đem bé đặt xuống một cây cúc trắng. Bé tưởng rằng mình xấu đến nỗi bọ dừa cũng chẳng muốn cho mình sống với chúng, Bé tí hon khóc nức nở. Nhưng thực ra bé rất xinh, thanh tú và dịu dàng chẳng khác gì cánh hồng.</p>
<h3 style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 1.25em; margin-bottom: 0.5em; margin-top: 0px; text-align: start; text-rendering: optimizespeed; width: 772.5px;">3. Bé tí hon sống trong hang chuột</h3>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Bé tí hon sống một mình suốt mùa hạ trong khu rừng lớn. Bé tự làm lấy một cái võng bằng rơm, đem treo dưới một cái lá thu mẫu đơn rõ to để tránh mưa. Bé ăn nhụy hoa và uống những hạt sương rơi. Bé sống như vậy suốt mùa hè và mùa thu. Nhưng đông tới, mùa đông dài dằng dặc và lạnh giá. Tất cả những con chim nhỏ vẫn hót cho bé nghe đều bay đi trú rét mất cả. cây cối rụng hết lá, hoa đều tàn, chiếc lá thu mẫu đơn che chỗ nằm của bé quăn lại, chỉ còn trơ cái cọng vàng khô. Quần áo rách tươm, bé rét run lên.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Tuyết rơi, mỗi khi có một bông tuyết rơi vào người, bé cảm thấy nặng không chịu nổi. Bé nép mình trong một chiếc lá khô nhưng cũng chẳng ấm được chút nào, vẫn run lên cầm cập.</p>

<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Bé tí hon bỏ đi và đến một ruộng lúa ở ven rừng. Người ta đã gặt từ lâu, chỉ còn lại gốc rạ, từ dưới đất giá lạnh tua tủa đâm lên. Đối với cô bé, vượt qua mảnh ruộng ấy cũng giống như vượt qua một khu rừng, bé chuệnh choạng vấp ngã bên này bên kia. Bé tí hon lần được đến cổng nhà mụ chuột đồng – một cái lỗ đào dưới gốc rạ. Chuột đồng sống trong ấy rất thoải mái ấm áp, căn phòng của mụ đầy những lúa và các lương thực khác, hai hôm nay rồi bé chưa được miếng gì vào bụng.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Vốn tốt bụng, chuột đồng bảo:</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Tội nghiệp con bé! Vào trong nhà ăn với ta, cháu ạ!</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Thấy Bé tí hon dễ thương, chuột đồng bảo:</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Cháu có thể ở đây với ta suốt mùa đông, chỉ cần giữ gìn nhà cửa cho sạch sẽ và kể chuyện cho ta nghe, ta thích nhất là nghe kể chuyện.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Bé tí hon làm theo lời chuột già phúc hậu và được chuột đối xử rất tử tế. Một hôm, chuột đồng nói:</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Sắp có khách sang chơi đấy. Ông bạn láng giềng tuần nào cũng sang thăm ta. Ông ta còn giàu hơn ta kia đấy, có cửa cao nhà rộng. Ông ta thường khoác một bộ áo lông đen lánh như xa tanh. Cháu mà lấy được ông ta thì may lắm. Nhưng ông ta mù và cháu sẽ phải kể chuyện cho ông ta nghe.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Bé tí hon không để ý gì đến chuyện lão chuột chũi hàng xóm cả. Hắn khoác một bộ lông đen lánh như xa tanh đến thăm chuột đồng.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Theo lời chuột đồng thì hắn rất giàu và có học. Nhà hắn rộng gấp hai mươi lần nhà các con chuột chũi khác. Tuy hắn có học đôi chút, nhưng hắn không thích ánh nắng và hoa. Hắn toàn nói xấu hoa và ánh nắng. Chúng mời Bé tí hon hát. Bé hát rằng: “Bay đi, bọ dừa bay đi!”. Giọng hát của bé làm chuột chũi ta thích mê tơi, nhưng hắn không nói gì.</p>
<h3 style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 1.25em; margin-bottom: 0.5em; margin-top: 0px; text-align: start; text-rendering: optimizespeed; width: 772.5px;">4. Chú chim én chết rét</h3>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Gần đây chuột chũi đã đào một ngách từ nhà hắn ăn thông sang nhà chuột đồng. Hắn mời Bé tí hon và bạn hắn vào đấy chơi. Trong ngách có xác một con chim bị chết rét trong những ngày mùa đông. Chuột chũi lấy mõm ngậm một mầu gỗ mục (trong chỗ tối, thứ gỗ mục ấy phát ra ánh sáng) và đi trước để soi đường. Khi đến gần xác con chim, chuột chũi húc mõm lên trần để cho đất rơi xuống, trần bị thủng một lỗ, qua đó một chút ánh sáng rọi vào.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Nhờ thế họ trông thấy một con chim én nằm giữa hang, hai cánh gập lại, lông che kín đầu và chân co quắp. Con chim đáng thương rõ ràng là đã chết rét. Bé tí hon thương chim lắm. Bé vốn rất yêu những con chim bé nhỏ, đã hót cho bé nghe suốt mùa hè. Nhưng chuột chũi lấy chân ẩy chim én và nói:</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Nó không hót được nữa! Buồn thay cho số phận những con chim bé nhỏ. Lạy giời đừng bắt con cái tôi sau này hoá thành chim, vì ngoài tiếng chiêm chiếp ra, chim chẳng biết gì cả, và cứ đến mùa đông là chim chết đói.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Chuột đồng hưởng ứng:</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Bác nói rất đúng. Ngoài tiếng chiêm chiếp ra, hỏi chim còn biết gì nữa khi mùa đông tới? Nó chỉ biết có chết đói và chết rét!</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Bé tí hon không nói gì, nhưng khi hai con chuột quay lưng đi, bé liền cúi xuống, vạch lông chim, hôn lên đôi mắt nhắm nghiền của chim và nói:</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Có lẽ đúng là con chim đã làm cho mình thích mê mệt trong dạo hè vừa qua. Con chim bé nhỏ xinh đẹp, hót hay quá đi mất!</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Chuột chũi tiễn khách về nhà. Bé tí hon suốt đêm không ngủ. Bé vùng dậy lấy rơm tết lại thành một cái chăn đem đắp cho con chim chết rét. Bé còn lấy cả nhụy hoa trong buồng của chuột đồng đem phủ xung quanh thân chim. Bé nói:</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Vĩnh biệt chim bé nhỏ thân yêu, đã hót rất mê ly trong mùa hè vừa qua, khi cây cối xanh tươi và ánh nắng sưởi ấm chúng ta.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Bé tí hon lấy tay ghì đầu chim bé nhỏ vào ngực. Bỗng bé sợ hãi, lùi lại. Có vật gì động đậy dưới tay bé. Đó là trái tim của chim. Con én mới chỉ bị tê cóng vì rét, và giờ đây được sưởi ấm, chim đã tỉnh lại.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Mùa thu chim én thường bay về các xứ nóng. Thảng hoặc có con nào rớt lại thì nó sẽ bị lạnh đột ngột, rơi xuống và tuyết sẽ là mồ chôn én.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Bé tí hon sợ quá, run lên cầm cập, nhưng trấn tĩnh lại ngay. Bé rắc thêm nhụy hoa lên mình chim, lấy lá bạc hà, bé vẫn dùng làm chăn đắp bọc lấy đầu chim.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Đêm sau, bé trở lại thăm chim. Chim vẫn sống, nhưng yếu đến nỗi chỉ mở mắt được một lát để nhìn bé. Bé đứng cạnh chim, tay cầm một miếng gỗ mục thay đèn. Chim cất tiếng nói:</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Cám ơn cô bé lắm, cám ơn cô bé thân yêu! Tôi thấy trong người nóng lên rồi, tôi sẽ lại sức và sẽ có thể bay về nơi chan hoà ánh nắng.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Bé tí hon đáp:</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Chết! Bên ngoài lạnh lắm, toàn là băng tuyết. Cứ nằm yên trong cái giường bé nhỏ này, chim ạ, tôi sẽ săn sóc chim rất cẩn thận.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Bé lấy một cánh hoa múc nước đem lại cho chim én. Rồi chim nói cho bé biết chuyện chim bị thương ở cánh khi bay từ một bụi gai ra, do đó không kịp bay theo đàn về các xứ nóng và rơi xuống đất. Chim chỉ nhớ được có thế và không biết bây giờ mình đang ở đâu.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Chim én ở lại trong hang suốt mùa đông. Bé tí hon cố sức săn sóc chim, chim rất yêu quý bé. Chuột đồng và chuột chũi chẳng hề biết tí gì, nếu chúng biết thì chúng chẳng để cho chim én ở đấy.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Tia nắng đầu xuân vừa xuất hiện, chim én nói với Bé tí hon có muốn cùng đi hay không. Chim sẽ cõng bé trên lưng và đưa về rừng. Nhưng Bé tí hon cho rằng như thế là phụ ơn chuột đồng, bé nói:</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Tôi không thể làm thế được.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Thế thì từ biệt bạn thân yêu!</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Chim én nói rồi bay vút lên bầu trời, trong nắng xuân. Bé tí hon nhìn theo chim, bằng đôi mắt buồn rầu, vì bé cũng rất mến chim.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Quy-vit, quy-vit!</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Chim vừa hót vừa bay vút về rừng. Bé tí hon buồn lắm. Bé không ra ngoài nắng ấm được, vì lúa đã mọc cao. Đối với bé, thửa ruộng ấy như một cánh rừng.</p>
<h3 style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 1.25em; margin-bottom: 0.5em; margin-top: 0px; text-align: start; text-rendering: optimizespeed; width: 772.5px;">5. Cuộc chạy trốn khỏi hang chuột</h3>
<div class="wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Một hôm chuột đồng bảo bé:</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Mùa hạ đã đến, lễ cưới cháu sắp tới nơi rồi (chả là ông bạn láng giềng chuột chũi đã sang dạm hỏi Bé tí hon). Cần phải sửa soạn quần áo mới cho cháu. Ta sẽ cho cháu nhiều của hồi môn nếu cháu lấy chuột chũi.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Bé tí hon phải ngồi quay sợi. Còn có cả bốn con nhện dệt đêm dệt ngày. Chiều nào chuột chũi cũng sang chơi và nói rằng hễ mùa hè qua, trời bớt nóng – vì lúc đó đang nắng như thiêu như đốt – là hắn cưới Bé tí hon ngay.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Nhưng Bé tí hon không ưa chuột chũi tí nào. Sáng sáng, lúc bình minh, và chiều chiều, lúc mặt trời lặn, khi gió thổi các bông lúa ngã xuống, hé cho bé nhìn thấy bầu trời xanh biếc, bé mơ đến cuộc sống bên ngoài, và ước mong chim én bay trở lại.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Khi thu sang, quần áo cưới cũng chuẩn bị xong. Chuột đồng bảo bé:</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Bốn tuần nữa thì làm lễ cưới.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Nhưng Bé tí hon oà lên khóc và nói rằng không thích chuột chũi.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Chuột đồng bảo:</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Chà! Đừng có õng ẹo. Ta cắn cho mấy răng bây giờ. Ta gả mày vào nơi danh giá, còn muốn gì nữa? Đến ngay hoàng hậu cũng chẳng có bộ áo xa tanh đen bóng như nó. Mày nên cảm ơn Thượng đế mới phải.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Đến ngày cưới, chuột chũi tới để đem Bé tí hon đi. Bé sắp phải xuống ở với hắn dưới hang sâu, xa ánh nắng, vì chuột chũi ghét ánh sáng. Cô bé đáng thương đành phải từ biệt mặt trời. Ở nhà chuột đồng, ít ra bé cũng còn có thể đứng ở cửa hang mà nhìn thấy trời được.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Mặt trời nóng ấm ơi, vĩnh biệt! Bé vừa nói vừa giơ tay lên.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Rồi Bé tí hon rời nhà chuột đồng. Người ta gặt lúa rồi, trên ruộng chỉ còn có rạ.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Vĩnh biệt! Vĩnh biệt! – Bé vừa kêu lên, vừa vòng tay ôm một bông hoa nhỏ màu đỏ. Nếu hoa có thấy chim én thì cho tôi gửi lời chào.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Quy-vit, quy-vit!</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Vừa lúc ấy bé nghe thấy tiếng chim hót trên đầu mình.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Bé nhìn lên. Đúng là chim én.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Chim én vừa nhìn thấy bé, vội mừng rơn. Bé kể cho chim nghe nỗi buồn phải lấy chuột chũi và phải sống dưới hang sâu, xa ánh nắng mặt trời.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Chim én nói:</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Mùa đông sắp tới rồi và tôi cũng sắp quay về xứ nóng. Bé có muốn cùng đi với tôi không? Hãy trèo lên lưng tôi, và lấy thắt lưng buộc người vào mình tôi. Chúng ta sẽ trốn xa chuột chũi và chỗ ở ghê tởm của nó, chúng ta sẽ đi rất xa, bay qua núi non, đến tận những xứ nóng, nơi ánh nắng còn đẹp hơn đây nhiều, nơi mà suốt năm là mùa hạ, nơi có những bông hoa tuyệt đẹp. Trốn đi với tôi, Bé tí hon thân yêu, người đã cứu sống tôi khi tôi nằm cứng đờ dưới đất.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Chúng ta đi đi thôi!</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Bé tí hon đáp, rồi trèo lên lưng chim én, đặt chân lên đôi cánh dang rộng và buộc thắt lưng vào những chiếc lông to và khỏe nhất.</p>
<h3 style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 1.25em; margin-bottom: 0.5em; margin-top: 0px; text-align: start; text-rendering: optimizespeed; width: 772.5px;">6. Bé tí hon và chàng hoàng tử bé nhỏ</h3>
</div>
<div class="wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Chim én bay lên không trung, bay qua rừng này biển nọ, bay qua những ngọn núi cao tuyết phủ ngút trời. Bí tí hon run lên vì khí lạnh, chúi vào trong đám lông ấm áp, chỉ thò cái đầu xinh xinh ra để ngắm nhìn tất cả những cảnh huy hoàng dọc đường bay.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Cuối cùng, họ tới vùng xứ nóng. Ở đó, mặt trời chói lọi hơn ở nước chúng ta. Dường như trời cao gấp đôi. Trên các bui rậm lủng lẳng những chùm nho xanh và đen rất đẹp. Có những rừng toàn chanh và cam.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Những đứa trẻ rất xinh chơi đùa trên đường cái. Chim én vẫn bay đi xa mãi, phong cảnh mỗi lúc một đẹp hơn.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Dưới bóng cây xanh tuyệt đẹp, gần một dải hồ xanh biếc, sừng sững một tòa lâu đài cổ bằng cẩm thạch trắng. Cây nho và cây trường xuân leo kín các cột. Tổ chim én làm trên đỉnh một cái cột ấy. Chim nói với Bé tí hon:</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Nhà tôi đấy! Bé có thấy cây cỏ mọc ở dưới không? Tôi sẽ đặt bạn xuống giữa đám cỏ, bạn sẽ sống rất sung sướng.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Ồ! Vâng! – Bé tí hon vừa trả lời vừa vỗ tay.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Nơi đó có một cái cột bằng cẩm thạch trắng đã bị vỡ làm ba mảnh. Chung quanh đấy mọc đầy hoa trắng rất đẹp. Chim én đặt Bé tí hon xuống một chiếc lá to. Bé rất đỗi ngạc nhiên! Vì ở đấy có một chàng trai bé nhỏ trong như thủy tinh. Chàng đội một mũ miện vàng, hai vai có đeo cánh chim. Chàng chẳng to lớn gì hơn Bé tí hon. Trong mỗi bông hoa đều có một người tí hon như thế. Chàng trai trong bông hoa trắng là vua của bọn họ.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Bé tí hon thì thầm với chim én:</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">– Trời! Anh chàng đẹp trai quá!</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Hoàng tử tí hon rất sợ chim én, vì đối với chàng bé nhỏ và mảnh khảnh chim én quả là một con chim khổng lồ. Nhưng vừa nhìn thấy Bé tí hon, hoàng tử đâm mê ngay. Chàng chưa từng trông thấy người con gái nào đẹp như thế. Chàng nhấc chiếc mũ miện vàng của mình ra, đem đội lên đầu Bé tí hon và ngỏ lời muốn lấy bé. Lấy chàng, bé sẽ trở thành nữ chúa các loài hoa.</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">Thật là xứng đôi, chẳng như thằng cóc con và chuột chũi!</p>
<figure style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin: 0px 0px 2em; max-width: 100%; text-align: start; width: 1000px;" aria-describedby="caption-attachment-12032">
<p style="box-sizing: border-box; margin-bottom: 1.3em; margin-top: 0px;">Bé tí hon bằng lòng. Thế là từ mỗi bông hoa bước ra một nam và một nữ, quần áo sang trọng. Họ đều rất đẹp, nhưng cặp đẹp nhất là đôi vợ chồng chưa cưới. Người ta lắp cánh vào vai Bé tí hon, và bây giờ nàng có thể bay từ hoa này sang hoa khác được. Khắp nơi đều vui mừng. Trên kia, chim én đậu trên thành tổ ráng hết sức hót véo von, tuy rằng, chim rất buồn và nhớ tiếc Bé tí hon.</p>
<p style="box-sizing: border-box; margin-bottom: 1.3em; margin-top: 0px;">Chúa hoa bảo bé:</p>
<p style="box-sizing: border-box; margin-bottom: 1.3em; margin-top: 0px;">– Cái tên Bé tí hon xấu lắm, mà em thì lại rất đẹp. Từ nay tên em không là Bé tí hon nữa, chúng ta sẽ gọi em là Tiểu Ngọc.</p>
<p style="box-sizing: border-box; margin-bottom: 1.3em; margin-top: 0px;">– Tạm biệt! Tạm biệt! – Chim én hót chào để rời xứ nóng, trở về miền Bắc.</p>
<p style="box-sizing: border-box; margin-bottom: 1.3em; margin-top: 0px;">Con chim én ấy làm tổ ở góc một cửa sổ nhà người kể chuyện này. Nó dùng tiếng hót “quy-vit, quy-vit” mà kể lại chuyện trên đây cho ông ta, và nhờ đó mà chúng ta biết thêm được một truyện.</p>
<p style="box-sizing: border-box; margin-bottom: 1.3em; margin-top: 0px; text-align: right;"><span style="box-sizing: border-box; font-weight: bolder;"><em style="box-sizing: border-box;">Câu chuyện Bé tí hon</em></span><br style="box-sizing: border-box;"><em style="box-sizing: border-box;">Nguyễn Văn Hải – Vũ Minh Toàn dịch<br style="box-sizing: border-box;">Nguồn: Truyện cổ Anđecxen – tập 2, trang 154, NXB Đà Nẵng – 1986</em></p>
</figure>
</div>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">
</p></div>
<p>&nbsp;</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px; text-align: start;">
</p></div>
<p>&nbsp;</p>
<p style="background-color: white; box-sizing: border-box; color: #222222; font-family: Roboto, sans-serif; font-size: 18px; margin-bottom: 1.3em; margin-top: 0px;">
</p>
      </div>`,
      },
      {
        name: 'Truyện cổ tích Cây thông',
        content: `<div class="wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
        

<p>Một <a href="https://truyenthieunhi.net/2020/03/cay-thong.html">cây thông</a> non xinh tươi mọc trong rừng. Thông mọc chỗ có nắng và quang đãng. Khắp chung quanh có nhiều cây thông khác lớn hơn. Thông non ta cũng muốn lớn bằng những cây ấy.</p>
<p>Thông non rất ghét các trẻ con trong làng vừa bi ba bi bô vừa đi qua đi lại để hái quả dâu, rồi lúc trở về, tay xách giỏ dâu, ngồi gần gốc thông mà khen : “Ồ ! <a href="https://truyenthieunhi.net/2020/03/cay-thong.html">Cây thông</a> non xinh quá”.<span id="more-733"></span></p>
<p>Nó không thích người ta gọi nó là “thông non”. Năm sau nó lớn thêm một đốt, mọc thêm được một cành, năm sau lại thêm một lớp cành nữa; các bạn hẳn cũng đã biết là như thế chỉ cần đếm các lớp cành là cũng đủ nhận ra tuổi một cây thông.</p>
<p>Cây thông non thở dài:</p>
<p>– Ôi ! Giá ta cũng to lớn bằng những cây khác nhỉ ! Lúc ấy ta sẽ vươn nổi các nhánh rất xa ra xung quanh và từ trên ngọn ta có thể ngắm nhìn khắp đồng quê. Chim chóc sẽ đến làm tổ trên các cành của ta và khi gió thổi ta cũng sẽ nghiêng mình một cách đường bệ như các cây khác.</p>
<p>Bởi vậy thông non của chúng ta không thích bất cứ một thứ gì, từ nắng ấm cho đến chim chóc, thậm chí cái đám mây hồng sáng chiều bay qua trên ngọn thông.</p>
<p>Đông đến, bốn bề toàn là tuyết trắng phau lấp lánh. Một con thỏ rừng chạy ngang qua, nhảy vọt qua ngọn thông non: thông ta lấy làm nhục lắm.</p>
<p>Nhưng qua hai mùa đông nữa thông non của chúng ta lớn đến mức lũ thỏ đành phải chạy vòng quanh.</p>
<p>Nó lớn lên, lớn mãi, trở nên cao và già. Trên đời này, còn gì đẹp cho bằng, thông non vẫn đinh ninh như thế.</p>
<p>Hàng năm cứ đến mùa thu các bác tiều phu lại vào đốn ít cây to nhất.</p>
<p>Cây thông non bây giờ đã khá to; nó suy nghĩ về số phận những cây to và đẹp đang đổ xuống đất rầm rầm. Người ta chặt cành và bóc vỏ đi, cây thành ra dài và thon, không nhận ra được nữa. Sau đó, người ta đặt cây lên xe ngựa, chở ra khỏi rừng.</p>
<p>Cây đi đâu thế nhỉ ? Số phận cây rồi sẽ ra sao đây? Đến mùa xuân, khi cò và chim nhạn bay trở về, thông non trước kia của ta hỏi :</p>
<p>– Các bạn có biết người ta mang những cây to đi đâu không? Các bạn có gặp các cậu ấy không ?</p>
<p>Chim nhạn chẳng hề biết, nhưng một con cò có vẻ đứng đắn, gật gù đáp:</p>
<p>– Có lẽ tôi biết đấy! Tôi đã gặp rất nhiều tàu bè mới tinh từ Ai Cập về. Cột buồm những tàu ấy rất lộng lẫy, và tôi ngửi thấy thơm thơm, hình như gỗ thông thì phải.</p>
<p>– Chao ôi! Ước gì tôi đủ sức lớn để cũng được bồng bềnh trên mặt biển. Biển ấy như thế nào nhỉ?</p>
<p>– Nói ra thì dài dòng lắm. Cò đáp rồi bay đi.</p>
<p>Những tia mặt trời bảo thông :</p>
<p>– Cậu hãy vui sướng với cái tuổi trẻ của cậu. Hãy tận hưởng chất nhựa tươi tắn và tuổi thanh xuân của cậu!</p>
<p>Gió hôn thông và sương trang điểm cho thông những hạt lóng lánh như ngọc, nhưng thông chẳng xúc động mảy may trước sự chăm sóc ấy.</p>
<p>Gần đến lễ Noel, người ta đến chặt nhiều cây con, bé và non hơn cây thông của chúng ta, lúc này chỉ muốn rời bỏ cánh rừng. Các cây non ấy cành lá lưa thưa nên người ta để nguyên lên xe ngựa chở ra khỏi rừng.</p>
<p>Thông ta tự hỏi:</p>
<p>– Chúng đi đâu thế nhỉ ? Chúng chẳng lớn gì hơn ta, có một cây còn bé hơn ta nữa kia. Sao người ta lại giữ cả cành và đem chúng đi đâu thế ?</p>
<p>Đàn chim sẻ chiêm chiếp:</p>
<p>– Chúng tớ biết ! Chúng tớ biết ! Chúng tớ đã nhìn qua cửa kính các nhà trong thành phố. Chúng tớ biết người ta đem cây non đi đâu. Người ta mang chúng đến những nơi hội hè, tưng bừng không thể tưởng tượng được. Nhìn qua cửa kính, chúng tớ thấy người ta trồng chúng vào giữa một gian phòng ấm áp, trang điểm cho chúng bằng những vật đẹp nhất, nào táo, nào bánh ngọt, các thứ đồ chơi và hàng mấy trăm ngọn nến.</p>
<p>– Sao nữa ? – Thông vừa hỏi vừa rung lên, rung cả cành lẫn lá. Sao nữa? Sau rồi thế nào?</p>
<p>– À, chúng tớ chỉ biết có đến thế thôi! Thật là huy hoàng!</p>
<p>Thông lẩm bẩm:</p>
<p>– Số mình không được hưởng cái tương lai sáng lạn ấy hay sao? Còn thích hơn là đi biển nhiều. Ôi ! Giá bây giờ lại là lễ Noel nhỉ? Nay mình đã lớn chẳng kém gì những cây được người ta đem đi năm ngoái. Ôi! Giá mình được lên xe, được trồng trong căn phòng ấm áp, giữa những vật huy hoàng ấy! Nhưng sau đó sẽ ra sao? Hẳn là sẽ có gì nữa, nếu không thì người ta trang điểm cho cây như thế để làm gì? Phải, nhất định sẽ có cái gì tuyệt hơn. Không gì khổ bằng chờ với đợi! Nóng ruột quá đi mất.</p>
<p>Gió hiu hiu và ánh nắng bảo thông: “Hãy vui thú với chúng ta. Hãy bằng lòng với tuổi thanh xuân mơn mởn, với bầu trời khoáng đãng!”</p>
<p>Thông chẳng vui lòng chút nào. Nó lớn lên, lớn lên mãi, mùa hè cho chí mùa đông, cành lá lúc nào cũng đẹp một màu xanh thẫm, ai trông cũng khen: “Cây thông đẹp quá!” và trước lễ Noel mấy ngày người ta chặt nó trước tiên. Lưỡi rìu chặt đứt cây đến tận lõi, cây thốt ra một tiếng thở dài rồi đổ xuống. Nó đau đớn đến nỗi không còn mơ tưởng đến một chút hạnh phúc nào nữa. Nó nhớ tiếc chỗ nó mọc, nơi nó đã lớn lên. Nó biết rằng từ nay trở đi chẳng bao giờ nó còn được gặp lại các bạn cũ thân mến của nó, các bụi cây, bụi hoa mọc xung quanh nó, và biết đâu đấy? Có thể là ngay đến một con chím nó cũng không được gặp lại. Đúng, nó ra đi mà lòng không vui.</p>
<p>Cây thông của chúng ta bừng tỉnh trong sân nhà, nơi nguời ta, lôi nó ra khỏi xe cùng với các bạn khác của nó.</p>
<p>Nó nghe thấy một người lên tiếng: “Cây này đẹp đấy! Tớ đang cần một cây như thế này!”</p>
<p>Rồi có hai người hầu mặc đồng phục đến khiêng nó vào một gian phòng rộng rãi đẹp đẽ. Khắp xung quanh có những bức chân dung trên tường và trên chiếc lò sưởi lớn bằng sứ có hai lọ độc bình Trung Quốc chạm trổ đầy những rồng và hoa thếp vàng.</p>
<p>Lại còn có những cái ghế bành tuyệt đẹp, những ghế trường kỷ bọc lụa, những chiếc bàn lớn chứa đầy sách và đồ chơi quý giá, đáng hàng mấy trăm mấy nghìn đồng tiền vàng.</p>
<p>Cấy thông được đặt vào một cái thùng đầy cát, nhưng người ta không thể nào biết rằng đấy là một cái thùng gỗ vì xung quanh có rèm xanh phủ kín. Thông ta không nén nổi cảm động. Rồi sao nữa đây? Các cô gái và bạn đầy tớ bắt tay vào trang điểm cho thông. Họ treo những cái bao dài nhỏ bằng giấy màu xanh đựng đầy kẹo lên cành thông.</p>
<p>Những quả hạt dẻ và táo vàng trĩu xuống như mọc từ cành thông ra. Rồi sau họ cắm những cây nến trắng xanh đỏ, đặt những con búp bê nom như người thật lên các cành; tất cả những thứ đó thông ta chưa được nhìn thấy bao giờ. Chót vót trên ngọn thông họ cắm một ngôi sao lớn bằng giấy tráng kim tuyệt đẹp. Xung quanh thông mọi người đều reo lên:</p>
<p>– Đến tối tất cả sẽ sáng rực lên phải biết!</p>
<p>Thông ta tự nhủ:</p>
<p>– Ồ! Sao cho chóng đến tối nhỉ? Đèn nến thắp lên thì phải biết! Rồi còn gì nữa nhỉ? Giá các cây trong rừng đến được đây mà ngắm ta! Có lẽ lũ chim cũng sẽ đến ngắm ta qua cửa kính đấy. Liệu đông qua, hạ tới, ta có được trồng ở đây mãi với tất cả trang sức này không?</p>
<p>Thế là nó đã đoán ra được việc sẽ xảy ra sau này, nhưng vì quá sốt ruột, nó cảm thấy các lá đều nhức nhối, đối với một cây thông nhức lá cũng khó chịu như chúng ta nhức đầu.</p>
<p>Sau cùng, người ta thắp nến lên. Sáng quá, huy hoàng quá! Sung sướng, thông ta rùng mình đến tận các cành nhỏ, đến nỗi một ngọn nến bắt lửa vào một cành cháy khét lèn lẹt.</p>
<p>– Trời ! – các cô gái kêu lên và lao vào dập lửa.</p>
<p>Thông ta không dám rùng mình nữa, chỉ sợ hỏng mất đồ trang sức. Nó long lanh sáng rực lên.</p>
<p>Cửa ra vào bỗng mở toang ra và một lũ trẻ con ùa vào dường như muốn xô đổ cây thông. Người lớn điềm tĩnh theo sau. Lũ trẻ con dừng lại, lặng đi ngắm nghía cây thông, nhưng sau một lát chúng lại vui cười ầm ĩ và bắt đầu nhảy vòng tròn xung quanh gốc cây. Những đồ chơi dần dần bị lấy tuốt cả. Thông ta tự hỏi : “Chúng làm gì thế này? Sắp có chuyện gì chả biết được?”</p>
<p>Nến đã tàn và khi cháy gần hết người ta bèn tắt đi. Lúc ấy trẻ con được phép phá cây Noel, chúng ùa vào làm các cành thông gãy răng rắc. Nếu không được chôn chặt ắt là thông ta đã đổ nhào.</p>
<p>Sau đó lũ trẻ con nhảy múa với những đồ chơi xinh đẹp của chúng, chẳng đoái hoài gì đến thông nữa. Chỉ có mỗi bà vú già đến nhìn ngó các cành, nhưng chỉ để tìm xem có cái kẹo hoặc quả táo nào còn sót lại chăng.</p>
<p>– Kể cho chúng cháu nghe một chuyện! Kể cho chúng cháu nghe một chuyện! – Bọn trẻ con vừa reo vừa kéo một người thấp béo đến ngồi dưới gốc thông. Người ấy nói:</p>
<p>– Thế là chúng mình ngồi giữa cành lá xanh tươi và chắc thông cũng thích. Nhưng chỉ kể một chuyện thôi nhé! Các cháu có thích nghe chuyện Ivet Aval hay chuyện Klumpê Đumpê ngã thang gác nhưng vẫn trèo được lên ngôi vua và được lấy công chúa không?</p>
<p>Đứa thì kêu:</p>
<p>– Ivet Avet.</p>
<p>Đứa thì kêu :</p>
<p>– Klumpê Đumpê.</p>
<p>Chúng làm ồn lên. Riêng cây thông vẫn đứng im và tự hỏi:</p>
<p>– Họ không đếm xỉa gì đến mình nữa à? Không cần đến mình nữa chắc?</p>
<p>Ông già kể chuyện Klumpê Đumpê, bọn trẻ con vừa vỗ tay vừa la: “Nữa ! Nữa !” Chúng còn muốn nghe cả chuyện Ivet Avet, nhưng chỉ được nghe có mỗi một chuyện Klumpê Đumpê. Thông ta trầm lặng suy nghĩ, chim chóc trong rừng chưa bao giờ kể cho nó nghe một chuyện nào giống như chuyện Klumpê Đumpê bị ngã thang gác, nhưng vẫn lấy được công chúa, Thông nghĩ thầm:</p>
<p>– Ừ phải! Ở đời này cũng có thế thật. Chuyện ông cụ kể chắc là không ngoa, có vẻ thật lắm. Biết đâu đấy? Có thể mình cũng sẽ rơi xuống cầu thang, để rồi sẽ lấy được một nàng công chúa.</p>
<p>Nó khấp khởi mừng thầm và tưởng tượng đến ngày hôm sau trên người nó sẽ lại mắc đầy nến, đồ chơi, giấy tráng kim và hoa quả.</p>
<p>Nó tự nhủ:</p>
<p>– Đến mai mình sẽ không run nữa. Mình sẽ tràn trề hạnh phúc. Đến mai mình sẽ lại được nghe chuyện Klumpê Đumpê và có lẽ cả chuyện Ivet Avet nữa.</p>
<p>Đêm hôm ấy, nó lặng lẽ mơ màng.</p>
<p>Sáng ra, bọn hầu gái bước vào, thông ta hí hửng:</p>
<p>– A! Lại bắt đầu mở hội đây.</p>
<p>Nhưng không! Người ta khiêng nó ra khỏi phòng để đưa lên một cái kho trên gác, quẳng vào một xó tối như bưng.</p>
<p>Thông nghĩ thầm:</p>
<p>– Thế này là thế nào? Đến chốn này thân mình sẽ ra sao nhỉ? Lần này mình sẽ được nghe kể chuyện gì nhỉ?</p>
<p>Rồi nó dựa vào vách mà mơ màng.</p>
<p>Ngày tháng trôi qua, chẳng có ma nào trèo lên nhà kho và nếu có người lên đến nơi cũng chỉ là để đem vứt vào đấy những chiếc hòm lớn. Thông ta đành phải tin là mình đã bị quên hoàn toàn.</p>
<p>Nó tự nhủ:</p>
<p>– Ngoài kia, đông đã đến nơi rồi. Đất đã cứng ra và phủ đầy tuyết. Giờ thì người ta không đem trồng mình được nữa rồi. Tất nhiên là mình phải ở đây đến tận mùa xuân. Tất cả đều tuyệt mỹ và loài người cũng tốt thôi. Giá cái kho gớm ghiếc này đỡ tối một chút thì hay quá! Chẳng có lấy một chú thỏ nào! Trong rừng khi tuyết rơi và đàn thỏ chạy ngang qua thật là vui… thế mà hồi đó mình lại đâm cáu khi chúng nhảy qua ngọn mình. Chốn này quả là hoang vu đáng sợ.</p>
<p>– Chít ! Chít – Một con chuột nhắt vừa kêu vừa nhảy nhót đến gần thông, rồi một con nữa theo sau, cả hai đều đánh hơi rồi trèo lên cành thông. Chúng xuýt xoa:</p>
<p>– Rét đâu mà khiếp thế. Nếu không rét thì ở đây cũng sướng đấy chứ, phải chăng bác thông già?</p>
<p>Thông đáp:</p>
<p>– Ta đâu đến nỗi già, còn có khối kẻ già hơn ta.</p>
<p>– Thế bác ở đâu đến đây? Bác biết gì nào? Hãy tả những danh lam thắng cảnh trên trái đất cho chúng tôi nghe. Bác đã đi đến những nơi đó chưa? Bác đã được đến cái chạn đựng đầy phó mát trên các ngăn, có đùi lợn sấy lủng lẳng treo trên nóc, nơi có thể khiêu vũ trên những cây nến làm bằng mỡ, nơi mà khi vào thì gầy, khi ra thì béo nung núc không?</p>
<p>– Không, ta không biết nơi ấy. Nhưng ta biết cánh rừng có mặt trời lấp lánh và chim muông ca hát.</p>
<p>Thông kể cho chuột nhắt nghe cuộc đời niên thiếu của mình. Chưa bao giờ chúng từng được nghe một chuyện như vậy, chúng dỏng cả tai lên, miệng nói:</p>
<p>– Bác biết đến là nhiều chuyện. Sao bác sướng thế?</p>
<p>– Ta mà sướng ư? Nói rồi thông ngẫm nghĩ về câu chuyện mình vừa kể. Phải, suy cho cùng, hồi ấy quả có sướng thật.</p>
<p>Rồi thông kể đến chuyện đêm Noel, thân nó đầy những bánh ngọt và nến.</p>
<p>Chuột nhắt trầm trồ:</p>
<p>– Trời, bác thông già, sao bác sướng thế?</p>
<p>Thông nói:</p>
<p>– Ta đã già đâu kia chứ! Người ta mới đem ta ở rừng về từ mùa đông thôi mà. Ta vừa mới lớn lên mà họ đã tống ta vào một cái thùng. Rõ thật là khó chịu.</p>
<p>Chuột nói:</p>
<p>– Bác kể chuyện hay quá đi mất!</p>
<p>Đêm sau, hai con chuột nhắt rủ thêm bốn con nữa đến để nghe thông kể chuyện. Thông nói:</p>
<p>– Phải, hồi ấy quả có sướng thật, nhưng rồi lại cũng sẽ có những ngày như vậy. Klumpê Đumpê ngã thang gác mà còn lấy được một nàng công chúa. Rất có thể ta cũng sẽ vớ được một nàng công chúa.</p>
<p>Nói rồi thông tưởng nhớ đến một cây phong xinh xắn trong rừng mà nó tưởng tượng là một nàng công chúa thật.</p>
<p>Lũ chuột nhắt hỏi:</p>
<p>– Klumpê Đumpê là gì thế?</p>
<p>Thông ta kể lại câu chuyện không sót một chữ. Lũ chuột nhắt thích quá, tưởng như muốn nhảy lên đến ngọn thông.</p>
<p>Đêm sau, chuột nhắt kéo đến đông hơn và đến chủ nhật lại có thêm cả hai gã chuột chù, nhưng hai gã tuyên bố rằng câu chuyện chả có gì lý thú, làm cho lũ chuột nhắt buồn xỉu. Vì thế câu chuyện đối với chúng, từ đó trở đi, cũng kém phần lý thú.</p>
<p>Chuột chù hỏi:</p>
<p>– Bác chỉ biết có mỗi chuyện ấy thôi à?</p>
<p>– Ừ, chỉ có thế thôi – thông trả lời – đó là chính câu chuyện ta được nghe kể trong buổi tối sung sướng nhất của đời ta, nhưng lúc đó, ta không biết là sung sướng đến mức nào.</p>
<p>– Chuyện của bác thật chán ngấy! Thế bác không biết ở đâu có mỡ miếng và nến làm bằng mỡ à? Bác không biết chuyện nào nói về cái chạn đựng thức ăn à?</p>
<p>– Không ! Thông nói.</p>
<p>– Thế thì xin chào bác ! Nói rồi chuột chù kéo nhau về.</p>
<p>Lũ chuột nhắt cũng rút lui nốt.</p>
<p>Thông ta lẩm bẩm:</p>
<p>– Dẫu sao nhìn lũ chuột nhắt ngồi quây tròn quanh mình nghe kể chuyện cũng thấy thú vị. Nhưng cảnh đó cũng chẳng còn. Chỉ khi nào người ta lôi mình ra khỏi nơi này thì hạnh phúc mới trở lại.</p>
<p>Bao giờ đến lúc ấy nhỉ?</p>
<p>Một buổi sáng đẹp trời, người ta đến dọn dẹp kho thóc, khuân hòm đi và kéo cây thông ra khỏi xó nhà. Nó bị quăng xuống đất hơi mạnh, nhưng liền đó có một người vác nó đem qua một cầu thang sáng sủa.</p>
<p>– Đời lại vun vút lên rồi ! Thông nghĩ thầm khi được mang ra sân và cảm thấy có gió mát và ánh nắng đầu xuân.</p>
<p>Thông mải nhìn các vật quanh mình đến nỗi quên cả bản thân mình. Liền với cái sân có mảnh vườn đầy hoa nở. Hoa hồng tươi thơm ngát rủ trên bờ rào, bồ đề đang ra hoa và chim nhạn vừa bay vừa hót : kia – rơ – vi – rơ – vít.</p>
<p>– Giờ đây ta lại sắp được sống! – Thông thì thầm và vươn cành ra. Than ôi ! Cành đã khô vàng. Người ta quẳng thông vào một xó giữa đám cây tầm ma và cây gai. Ngôi sao bằng giấy vẫn còn đính trên ngọn và lấp lánh ánh nắng.</p>
<p>Trong sân có vài đứa trẻ con hôm lễ Noel đã nhảy múa quanh cây thông và thấy thông hôm ấy rất đẹp. Đứa bé nhất chạy lại cầm lấy ngôi sao vàng óng, reo lên:</p>
<p>– Ồ, xem này ! Ngôi sao hãy còn đính trên cây thông Noel già xấu xí này!</p>
<p>Nói rồi, nó dận giày lên cành thông gãy răng rắc.</p>
<p>Thông ta nhìn những đóa hoa đẹp và khu vườn xanh tươi mát mẻ rồi lại nhìn cái thân mình. Nó muốn quay trở lại xó tối trong kho thóc. Nó nghĩ đến thời thanh xuân của nó trong rừng, nghĩ đến cái đêm Noel vui sướng và nghĩ đến những con chuột nhắt thích nghe kể chuyện Klumpê Đumpê.</p>
<p>– Thế là hết ! Ai bảo lúc sướng lại chả biết đường mà sướng?</p>
<p>Một anh đầy tớ đến chặt cây ra từng mảnh, được một bó củi to đem đun bếp. Người ta nghe thấy những tiếng thở dài và những tiếng kêu thất thanh. Bọn trẻ con chạy lại đứng trước ngọn lửa mà reo: “Phì ! phì !” nhưng những tiếng phì phì của cây thông là những tiếng thở dài thực sự. Nó nghĩ đến những ngày hè trong rừng, những đêm đông ngoài bầu trời khoáng đãng, những sao lấp lánh trên trời. Nó nghĩ đến đêm Noel và đến Klumpê Đumpê, câu chuyện độc nhất đã học được và kể lại được.</p>
<p>Thế rồi, chẳng còn sót lại một tí gì của cây thông non nữa.</p>
<p>Lũ trẻ con lại chạy ra sân, đứa bé nhất còn đeo trên ngực ngôi sao vàng mà thông đã được đeo trong cái tối sung sướng nhất của đời nó.</p>
<p>Cái tối hôm ấy không còn nữa và câu chuyện của chúng ta cũng hết như tất cả các câu chuyện trên đời này.</p>
<p></p>
      </div>`,
      },
      {
        name: 'Truyện cổ tích Đôi giày hạnh phúc',
        content: `<div class="wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
<p>Trong một ngôi nhà, cạnh Hoàng trường mới, phố Đông, thành Côpenhagơ, chủ nhà đang tiếp khách. Khác hôm ấy rất đông, chủ nhà vốn là hiếu khách, hơn nữa là để được mời lại.</p>
<p>Khách khứa người thì tập trung vào bàn thờ, người thì xúm nhau trò chuyện. Xen vào nhiều chuyện khác, họ bàn đến thời Trung Cổ. Hầu hết cho rằng thời ấy không hơn thời nay, chỉ riêng ngài hội thẩm Knap và thêm bà chủ nhà kiên quyết phản đối ý kiến ấy.<span id="more-692"></span>&nbsp;Hai ngài cho rằng từ trước tới nay, thời vua Hanx là thời đại huy hoàng nhất, hạnh phúc nhất.</p>
<p>Lúc này ngoài phòng đợi, đầy áo choàng, gậy chống, ô, giầy, có hai người hầu gái, một già một trẻ. Nhưng khách đã nhầm, hai bà không phải là người hầu phòng. Hai bà là hai nàng tiên. Cứ nhìn họ mà xem: bàn tay thanh tú, dáng ngồi, điệu đi lịch sự. Quần áo của họ cũng khác thường, đầy vẻ tao nhã.</p>
<p>Nàng tiên trẻ là thị tỳ của người hầu phòng của Thần may rủi, còn bà tiên già là Thần trừng phạt. Nàng tiên trẻ có nhiệm vụ đi phát của Thần may rủi. Bà tiên Thần trừng phạt có nét mặt nghiêm khắc đi kiểm soát kết quả của công việc.</p>
<p>Hai bà đang kể cho nhau nghe những công việc đã làm hôm ấy. Nàng tiên thị tỳ nói mới làm được mấy việc lặt vặt: giữ cho chiếc mũ khỏi bị ướt mưa, chuyển cho người tài lời chào mừng của một kẻ vô lại nổi tiếng và mấy việc nữa cũng đại loại như thế. Nhưng nàng còn phải làm một việc nữa, một việc dị thường là đem đôi giầy làm quà cho người lớn dưới trần. Đôi giầy có phép lạ hễ ai xỏ chân vào nhà thì muốn đi đến đâu hoặc muốn sống lại thời đại nào cũng được ngay tức khắc. “Thật là sướng!” Nàng kết luận.</p>
<p>– Chưa chắc đâu! Bà tiên già, không khéo lại khổ gần cửa ra vào, ai nhặt được thì nhặt.</p>
<p>Đêm đã khuya, chuyện đã vãn, ngài thẩm phán ra về. Ra đến cửa, đầu óc còn đang mãi nghĩ về thời đại vua Hanx, ngài thẩm phán xỏ nhầm vào đôi giầy người thì tỳ vừa đặt. Đường về nhà ngài qua phố Đông, ngài bước về phía ấy, nhưng phép lạ của đôi giày lại đưa ngài quay trở lại thời vua Hanx, chân ngài lội vào bùn và qua các vũng nước, vì thời ấy các đường phố chưa đổ nhựa, hè phố chưa lát bê tông như bây giờ. Ngài vừa đi vừa ca cẩm:</p>
<p>– Bùn khiếp thật! Hè phố chẳng còn, đèn cũng tắt ngấm.<br>
Trăng chưa mọc, sương mù nhiều, mọi vật chìm trong đêm tối. Ở một góc đường gần đấy có treo một ngọn đèn hắt ánh sáng xuống pho tượng đức mẹ nhưng ánh sáng mờ quá phải đến tận nơi mới nhìn rõ, trông thấy đức mẹ đang bế Hài đồng trên tay. Ngài nghĩ thầm:</p>
<p>– Có lẽ đây là một cửa hàng mỹ phẩm mà người ta quên cất mẫu quảng cáo.</p>
<p>Vừa lúc ấy có hai người mặc quần áo thời cổ vượt lên trước ngài thẩm phán nói:</p>
<p>– Họ ăn mặc lạ nhỉ. Có lẽ họ vừa đi dự buổi khiêu vũ trá hình về.</p>
<p>Có tiếng trống và tiếng sáo nổi lên, ngài đứng lại thấy một đám rước diễu qua. Đi đầu là trống rồi đến thị vệ cầm cung tên và binh khí. Người chỉ huy đám rước là một nhà tu hành. Ngạc nhiên với cảnh lạ, ngài lẩm bẩm: “Sao lại thế nhỉ? Người ấy là ai?” Có tiếng trả lời:</p>
<p>– Đấy là Đức giám mục Xilen.</p>
<p>– Sao đức giám mục lại thế? Có lẽ không phải đâu, các ngài nhầm đấy.</p>
<p>Mải suy nghĩ, chẳng nhìn đường, ngài hội thẩm đi qua phố Đông và quảng trường Cầu lớn. Không sao tìm được cái cầu bắc sang quảng trường Cung điện, ngài chỉ thoáng nhìn thấy một con sông rộng và gặp hai người đang ngồi trên một chiếc thuyền. Họ hỏi: “Ngài có muốn qua sông Hôlông không?</p>
<p>– Qua sông Hôlông à? Sao lại qua sông? Hỏi vớ vẩn. Tôi muốn đến ngõ Crixtianhavu khu phố chợ (ngài hội thẩm quên là mình đang sống trở lại thời vua Hanx)</p>
<p>Thấy hai người kia ngạc nhiên nhìn ngài, ngài nói tiếp:</p>
<p>– Các ông chỉ dùm cho tôi lối lên cầu. Chẳng có đèn đuốc gì cả, tối đen như mực, lội bì bà bì bõm như đi trong ruộng lầy vậy. Bùn ơi là bùn!</p>
<p>Ngài càng nói chuyện với hai người thuỷ thủ lại càng ngạc nhiên, chẳng hiểu họ nói gì. Ngài vùng vằng:</p>
<p>– Chẳng thể nào hiểu được tiếng địa phương của các bác!</p>
<p>Ngài bực tức quay phắt đi. Ngài không thể nào tìm ra được cái cầu, ngay cả lan can dọc bờ sông cũng chẳng có. Ngài lẩm bẩm:</p>
<p>– Loạn thật!</p>
<p>Ngài chưa bao giờ thấy thời đại của ngài đang sống lại thảm hại đến thế. Ngài nghĩ bụng:</p>
<p>– Có lẽ phải gọi một cái xe mà đi mới được.</p>
<p>Nhưng tìm đâu ra xe? Trông mỏi mắt cũng chẳng có cái nào. Ngài tự nhủ:</p>
<p>– Phải quay về Hoàng trường mới mà kiếm cái xe chứ không thì chẳng đến được Crixtianhavu được.</p>
<p>Ngài thẩm phán quay trở lại phố Đông; đi gần đến phố thì trăng lên. Trông thấy cổng thành phía Đông, ngài kêu lên:</p>
<p>– Trời ơi! Người ta dựng cái đài này ở đây để làm gì kia chứ?</p>
<p>Cuối cùng ngài thẩm phán cũng tìm ra được cỗ xe ngựa và ra đến quảng trường mới hiện nay. Thời xưa chỗ này là một bãi trống chỉ có cỏ mục và một vài bụi cây; có một con sông đào chảy qua, đổ ra biển. Bờ bên kia có một vài túp lều gỗ tồi tàn của những thuỷ thủ xóm Halăng ( vì vậy nơi ấy nay đặt tên là mũi Halăng).</p>
<p>Ngài thẩm phán nghĩ bụng: ma quỷ ám mình hay mình say rượu thế này? Sao lại lung tung chẳng còn hiểu thế nào nữa! Có khi mình ốm rồi!</p>
<p>Ngày quay lại. Vào đến trong phố, ngài nhìn thấy rõ nhà cửa hơn, đa số vách thủng bằng thanh, mái lợp rạ.<br>
Ngài lẩm bẩm:</p>
<p>– Sao người khó chịu quá! Mình chỉ uống có một cốc rượu pha đường thôi thì sao thấy khó chịu thế? Lại cho mình rượu pha đường với hồi nóng nữa chứ. Thật là điên! Các bà vợ quan nội thần này ác thật! Hay là mình quay lại để cho họ biết họ làm ăn linh tinh. Nhưng chắc gì họ còn thức? Mà như vậy cũng dở lắm.</p>
<p>Ngài tìm sân nhà, nhưng tìm không ra. Ngài lẩm bẩm:</p>
<p>– Không sao nhận ra phố Đông nữa. Chẳng còn cái cửa hiệu nào! Chỉ thấy trên những túp lều cũ kỹ tồi tàn như ở Rôtxôkin hay ở Rinhxtet. Mình ốm thật rồi! Nhà quan nội thần đâu rồi nhỉ? Quái thật! Sai ta lại ốm thế này! Thấy một nhà có ánh sán lọt qua khe cửa. Đây là một quán trọ thời vua Hanx, một quán rượu bia. Căn phòng giống như quán rượu ở vùng Honxtanh. Trong quán đang có một số lính thủy, mấy người thành thị và hai nhà bác học. Cả mấy người đang trò chuyện náo nhiệt, trước mặt mỗi người một cốc bia. Ngài hội thẩm mở cửa bước vào. Họ vẫn tiếp tục trò chuyện không để ý đến ngài. Bà chủ quán chạy đến. Ngài hỏi:</p>
<p>– Thưa bà, tôi thấy trong người khó chịu như muốn ốm. Bà có thể giúp tôi gọi hộ một cái xe chở tôi về Crixitianhavu được không?</p>
<p>Bà chủ quán ngó ra, lắc đầu trả lời bằng tiếng Đức. Ngài hội thẩm cho là bà không biết tiếng Đan Mạch, nên hỏi bà ta lần này bằng tiếng Đức. Nghe tiếng nói và cách ăn mặc của ông thẩm phán, bà chủ quan tin rằng ông là người nước ngoài. Bà ta hiểu là ông ấy ốm và mang ra cho ông một cốc nước mới hứng ở vòi ra nhưng có vị mặn. Nhắp thử, ngài lắc đầu.</p>
<p>Ngài ôm trán thở dài suy nghĩ về những hiện tượng kỳ lạ chung quanh mình.</p>
<p>Thấy bà chủ quán gấp một tờ giấy khổ rộng, ngài hỏi:</p>
<p>– Có phải tờ báo “Ban ngày” mới ra tối nay đấy không?</p>
<p>Bà ta không hiểu ngài muốn nói gì, cứ chìa cho ngài tờ giấy đang gấp. Đấy là một tờ tranh khắc gỗ, vẽ một hiện tượng thiên văn như ông đã nhìn thấy ở Côlônhơ. Ngài nói:</p>
<p>– Bức tranh này cổ lắm! Bà làm thế nào mà kiếm được bức tranh hiếm có này? Quý đấy! Nhưng lời giải thích ghi trong tranh không hợp thời nữa, nó có vẻ hoang đường. Bây giờ người ta gọi hiện tượng ấy là một bắc cực quang, do điện gây ra.</p>
<p>Những người ngồi gần đấy thấy ngài thẩm phán nói đều lấy làm ngạc nhiên. Một người đứng dậy, cung kính nói:</p>
<p>– Thưa ngài, chắc hẳn ngài là một nhà bác học đại tài!</p>
<p>– Không đâu! Tôi chỉ mỗi thứ biết một tí, như mọi người thôi.</p>
<p>– Ngài khiêm tốn quá!</p>
<p>– Tôi biết thế thì nói như thế, các ngài biết thêm gì cho tôi được học.</p>
<p>Ngài hội thẩm nói với người kia: “Ngài có thể cho tôi biết quý danh được không?”</p>
<p>– Tôi là tú tài thánh thư, người kia trả lời.</p>
<p>Học vị của người ấy cũng phù hợp với cách ăn. Nhưng ngài hội thẩm nghĩ thầm:</p>
<p>– Đây hẳn là một lão hương sự loạn óc, còn sót lại ở một nơi hẻo lánh của xứ Giuytlăng.</p>
<p>Người xưng là tú tài thánh thư nói thêm:</p>
<p>– Đây không phải là một diễn đàn, nhưng mời ngài cứ tiếp tục phát biểu. Chún tôi rất thích được nghe, chắc là ngài am hiểu các tác gia thời xưa.</p>
<p>– Vâng, sách thời xưa bổ ích lắm, tôi rất thích đọc. Tôi cũng biết nhiều sách thời nay. Nhưng những “Truyện hàng ngày” thì tôi không thích vì cuộc sống thực tế cũng đã đủ lắm rồi.</p>
<p>– “Truyện hàng ngày” là truyện gì thưa ngài?</p>
<p>– Là những quyển tiểu thuyết mới viết hiện nay.</p>
<p>– Tôi thấy những quyển tiểu thuyết hiện nay cũng thú vị đấy chứ ạ! Đức vua cũng hay đọc. Người thích nhất cuốn “Ipven tiên sinh và Gôđiô tiên sinh” kể chuyện vua Actuýt và các hiệp sĩ bàn tròn.</p>
<p>– Chuyện ấy tôi chưa được đọc. Chắc là sách mới của nhà xuất bản Giêmen.</p>
<p>– Ông Giêmen là tác giả cuốn truyện có phải không?</p>
<p>Cái tên ấy nghe xưa lắm nhỉ. Đúng là tên nhà xuất bản đầu tiên của nước Đan Mạch đấy.</p>
<p>– Đúng ạ. Nhà in đầu tiên của chúng ta là nhà in Giêmen.</p>
<p>Câu chuyện đang vui bỗng có người nói đến trận dịch hạch xảy ra gần năm ấy nên họ cũng nhắc luôn cả chuyện quân cướp người Anh xông vào tận hải cảng cướp thuyền bè. Nghe thấy thế ngài hội thẩm lại tưởng họ nói về cuộc mưu sát năm 1801, nên những lời ngài nguyền rủa quân Anh trong vụ mưu sát ấy cũng vẫn khớp với câu chuyện.</p>
<p>Nhưng về sau câu chuyện trở nên chuệch choạc. Cứ ông nói gà bà nói vịt, chẳng bên nào hiểu bên nào. Họ ngẩn người ra nhìn nhau. Đến khi bí quá, vị tú tài phải phát biểu bằng tiếng Latinh hy vọng với thứ tiếng ấy người ta sẽ hiểu ông. Nhưng cuối cùng thì ngài thẩm phán không hiểu ông, mà ngài thẩm phán nói gì ông cũng không hiểu.</p>
<p>Bà chủ kéo tay áo ngài thẩm phán hỏi:</p>
<p>– Bây giờ ngài thấy thế nào rồi?</p>
<p>Câu hỏi của bà chủ quán làm ngài sực tỉnh. Vì mải nói chuyện, ngài đã quên tất cả những sự việc vừa xảy ra lúc trước. Rồi khi nhớ lại chuyện cũ ngài choáng người kêu lên:</p>
<p>– Đây là đâu thế này, các ông?</p>
<p>Một vị khách hô lớn:</p>
<p>– Cùng nhau cạn chén, các vị! Rượu mật ong pha với bia xứ Brêmơ. Xin mời ngài chạm cốc với chúng tôi.</p>
<p>Hai chị hầu bàn bừng khay ra, cúi chào khách rồi rót rượu.</p>
<p>– Rượu gì thế này? Ngài hội thẩm tự hỏi, không dám uống.</p>
<p>Nhưng thấy người ta mời chào quá nên buộc lòng phải uống vậy. Có người bảo ngài say rượu, ngài tin vậy và nhờ thuê giúp cho một cái xe ngựa để về nhà. Nghe thấy ngài nói, người ta lại tưởng ngài nói tiếng Nga. Ngài chưa tiếp xúc với những người thô lỗ như thế bao giờ. Đất nước như lùi lại thời tà giáo. Ngài nghĩ thầm:</p>
<p>– Đây đúng là giờ phút kinh khủng nhất trong đời mình.</p>
<p>Ngài bèn chui xuống gầm bàn để bò ra cửa. Ngài bò ra gần đến nơi thì có người trông thấy. Họ vội nắm cẳng ngài lôi lại. Đôi giày tụt ra khỏi chân, phép lạ cũng biến mất. Ngài hội thẩm nhìn thấy trước mặt là một cột đèn đang chiếu sáng, còn phía sau là một toà nhà lớn. Bên cạnh ngôi nhà lớn là nhiều ngôi nhà khác đang đứng xếp hàng tiếp theo nó. Lúc này ngài đang ở phố Đông. Ngài vẫn còn đương bò dưới đất trước một cái cửa. Ngài trông thấy người tuần canh đang ngủ say trước mặt mình. Ngài ngồi lên, chung quanh và kêu lên:</p>
<p>– Quái thật! Sao mình lại nằm giữa đường mà ngủ thế này nhỉ. Giữa ngay phố Đông! Đèn ơi! Cảm ơn mày nhé! Mình chỉ uống một cốc rượu pha đường mà say như thế! Khiếp thật!<br>
Hai phút sau ngài đã lên xe trở về Crixtinanhavu. Ngài nhớ lại những lo sợ khổ ải vừa trải qua và thầm khen cuộc sống thực tại sung sướng và hạnh phúc, thấy rõ ràng thời đại chúng ta chưa hoàn hảo lắm, nhưng đã hơn nhiều cái thời đại ngài sống lúc nãy.</p>
<p>Bác tuần canh nghe tiếng động bừng tỉnh và reo lên:</p>
<p>– Ơ này! Đôi giầy của ai thế này? Chắc là của quan trung uý trên gác này. Nhưng sao ngài lại để giầy ở đấy thế?</p>
<p>Bác tuần canh đã định bấm chuông gọi cửa đem trả lại giầy cho ngài. Nhưng bác thấy như vậy các nhà bên cạnh sẽ mất ngủ nên lại thôi, để sáng mai sẽ báo cho ngài biết.<br>
Rồi buồn tay, bác sỏ thử giầy vào chân, miệng khen:</p>
<p>”Vừa khít. Da mềm quá! Đi êm!“</p>
<p>Xỏ thử vào giầy rồi bác ngồi nghĩ:</p>
<p>– Ngài trung uý vậy mà sướng! Chẳng vợ chẳng con, không bấn bíu gì. Tối đến lại đi tiêu khiển đến các giới giàu sang. Ước gì mình được như ngài thì sướng.</p>
<p>Mong được ước thấy. Do phép lạ của đôi giầy, bác tuần canh vừa ước thế thì liền nhập cả hồn lẫn xác và quan trung uý. Bác thấy mình đang sống trên gác, trong căn phòng của quan trung uý, tay cầm một mảnh giấy là bản thảo một bài thơ do quan trung uý viết. Đúng là của quan trung uý. Trong đời ai mà chả có lúc hồn thơ lai láng. Lúc ấy người ta viết những ý nghĩ của mình ra giấy thế là thành thơ. Nhưng bác tuần canh không thích thơ và cũng không thích làm quan trung uý. Mới thử một tí mà bác đã thấy chán, tiếc cái nghề tuần canh của mình, nó vất vả nhưng mà thích.</p>
<p>Do phép lạ của đôi giầy, bác đang thở dài thì từ trung uý bác lại thành tuần canh, mừng là đã từ bỏ được cái nghề mới của mình. Vậy là thân tuần canh lại trở về với phận tuần canh.</p>
<p>Mình vừa mơ thấy một giấc mơ kỳ cục; tự dưng lại thành ông trung uý ở trên gác, chẳng được hơn cái gì mà lại đâm ra nhớ mẹ thằng cu và mấy đứa con.</p>
<p>Bác ngồi xuống cái ghế vẫn ngồi canh cúi đầu suy nghĩ mông lung. Bỗng trên trời có một vì sao đổi ngôi. Bác lẩm bẩm:</p>
<p>– Sao đổi ngôi! Chắc là đổi sang một thế giới sung sướng hơn. Ước gì mình được đến gần vì tinh tú ấy mà xem nhỉ. Nhất là lại được đến mặt trăng thì tuyệt. Giá được đi chơi một vòng trên ấy thì nếu có chết ở bậc cửa này cũng cam.</p>
<p>Trên đời này có nhiều điều phải dè dặt trong lời nói. Xỏ đôi giầy hạnh phúc vào lại càng phải thận trọng. Chuyện đã xảy đến với bác tuần canh như sau:</p>
<p>Vừa dứt lời, bác tuần canh đã vượt qua sáu vạn dặm lên tới cung trăng. Bác tuần canh sa vào một ngọn núi lửa thường thấy vẽ trên tấm bản đò mặt trăng của nhà bác học Hat-le. Mặt trăng được cấu tạo bằng một chất nhẹ hơn trái đất của chúng ta, tựa như tuyết khi mới rơi xuống đất. Bác tuần canh thụt sâu xuống đến nửa dặm Đan Mạch. Bên dưới là một làng hoàn toàn một màu lòng trắng trứng hoà với nước, nhưng nom rõ cả cái tháp tròn, cửa cuốn ban thờ đung đưa trên không. Trái đất của chúng ta tựa như một ngọn đèn khổng lồ treo lơ lửng trên đầu. Trên mặt trăng có nhiều sinh vật mà trái đất ta gọi là người, nhưng họ không giống chúng ta. Họ cũng có tiếng nói linh hồn bác tuần canh nghe hiểu được.</p>
<p>Trên mặt trăng họ cũng có những cuộc tranh luận về trái đất chúng ta. Họ nêu giả thuyết trái đất có người sinh sống và bàn cãi. Nhiều ý kiến cho rằng không khí ở trái đất dầy đặc quá, không thể sống được, chỉ có mặt trăng là có sinh vật mà thôi. Mặt trăng là tinh tú hoàn hảo nhất. Đấy là nơi trú ngụ của người nhà trời thời cổ xưa.</p>
<p>Chúng ta quay lại phố cửa Đông xem bác tuần canh bây giờ thế nào.</p>
<p>Bác đang nằm chết ở bậc cửa, mắt bác ngước lên mặt trăng, nơi hồn bác đang du ngoạn. Một người đi đường hỏi:</p>
<p>– Mấy giờ rồi bác?</p>
<p>Thấy bác không trả lời, người ta véo vào mũi bác, lấy tay vả vào mồm bác. Bác vẫn nằm sóng sượt bất tỉnh như một xác chết. Ai thấy thế cũng sợ. Họ cho là bác chết rồi, không thể cứu chữa được. Nhưng tảng sáng họ vẫn đưa bác vào nhà thương. Chúng ta tưởng tượng xem khi trở bác về trái đất hồn bác không tìm thấy xác thì bối rối biết chừng nào. Chắc hẳn hồn bác phải chạy đến sở cảnh sát, rồi đến phòng giữ đồ đạc, đánh mất và cuối cùng đến nhà thương. Hồn con người được thả lỏng thì tinh khôn lắm. Chỉ khi nhập vào xác. Hồn mới trở thành đần độn, nhất định nó sẽ tìm được xác bác tuần canh. Khi đem bác vào nhà thương, người ta đưa bác ngay xuống nhà xác. ở đây người ta chuẩn bị để nhập quan. Trước tiên phải cởi bỏ quần áo cũ và giầy dép để lau rửa cho bác rồi mặc áo quần mới. Người hộ lý vừa tụt đôi giầy ở chân bác tuần canh ra bỗng bác bật dậy. Thì ra hồn bác đã quay về tìm được xác bác và nhập vào và bác sống lại.</p>
<p>Bác tuần canh đã kể lại câu chuyện trong đêm và nói rằng đêm ấy là một đêm khủng khiếp nhất trong đời bác. Có cho bác hai đồng tiền mà bảo bác sống lại một đêm như thế, bác cũng xin chịu.</p>
<p>Ngay hôm ấy bác ra viện, nhưng đôi giầy thì ở lại trong nhà thương.</p>
<p>Người dân thủ đô Côpenhahagơ không ai biết cách cửa vào bệnh viện Frêđêrich, nhưng tất cả các bạn đọc sách của tôi không phải ai cũng là người Côpênhagơ, nên tôi muốn giới thiệu vắn tắt vài nét.</p>
<p>Từ ngoài phố đi vào nhà thương có một hàng rào sắt khá cao, chấn song sắt to và thưa, đủ cho trẻ con chui qua. Thông thường thì có cái đầu là khó chui nhất. Hễ đầu đi thì đuôi cũng lọt, người ta vẫn nói thế mà. Nhưng trường hợp sắp kể dưới đây có khác.</p>
<p>Một anh y tá phụ trẻ tuổi của nhà thương hôm ấy có phiên gác đêm. Mưa rào nhưng anh ta vẫn muốn bỏ trốn đi chơi mười lăm phút. Tối trời lại mưa, chẳng ai ra ngoài lúc này, nên cậu gác chui qua lối cổng chính.<br>
Vừa lúc ấy cậu ta trông thấy đồi giầy bác tuần canh để quên. Giời mưa được đôi giầy đi thì tiện quá. Cạu liền vơ lấy xỏ luôn vào chân. Rồi cậu ra phía cổng để chui qua hàng rao. Vừa đi cậu vừa lẩm nhẩm như cầu nguyện: ”Lạy giời, sao cho đầu tôi lọt qua được!“</p>
<p>Nhờ phép lạ của đôi giầy, cái đầu to tướng của cậu chui qua một cách dễ dàng. Giờ đến lượt cái mình. cậu cứ tưởng đầu đi thì đuôi lọt. Nhưng loay hoay mãi vẫn không lách bụng ra được.</p>
<p>– Không ngờ mình lại to béo thế. Cậu lẩm bẩm một mình.<br>
Xoay người đi, xoay người lại đến rách cả áo, cậu ta vẫn không sao qua được.</p>
<p>Oái oăm hơn nữa là rút đầu lại cũng không được. Thế là tiến thoái lưỡng nan! Cậu nổi cáu, không còn giữ được vui vẻ như ngày thường. Giẫy giụa mãi cũng không ăn thua gì. Thế mới chết chứ!</p>
<p>Trời vẫn mưa như trút nước xuống, phố xá vắng tanh. Muốn với cái chuông để giật nhưng không với tới. Làm thế nào để thoát khỏi bước nguy khốn này. Chưa biết chừng cứ phải đứng như thế này cho đến sáng, rồi nhờ ông thợ khoá đến cưa một song sắt đi. Nhưng vậy thì lâu quá, mưa rét thấm vào người cảm mất; rồi các chị nhà bếp và bọn trẻ con kéo nhau đến xem và bêu xấu mình.</p>
<p>– Ôi nguy quá! Nguy quá! Ước gì thoát khỏi nơi này! Cậu vừa dứt lời liền rút được đầu ra ngay. Giá cậu biết đôi giầy có phép lạ thì phải ước sớm hơn nhưng cậu không hay biết gì cả.</p>
<p>Hết tội ấy lại đến tội khác, rõ khổ cho cậu phụ tá bệnh viện. Tôi xin kể tiếp để bạn đọc nghe.</p>
<p>Ngay tối hôm ấy tại câu lạc bộ có đêm văn nghệ. Chương trình có tiết mục ngâm thơ. Đầu đề bài thơ là: “Đôi kính lão của bà nội”.</p>
<p>Nội dung bài thơ như sau: Bà nội có đôi kính nhìn thấy suốt tâm can mọi người, nhìn ai là đọc được những ý nghĩ thầm kín của người ấy. Cậu phụ tá nhà thương cũng có mặt trong buổi văn nghệ ấy. Trời mưa đường lội nên cậu ta vẫn kéo đôi giầy bắt được hôm trước, vì không thấy ai đến đòi.<br>
Cậu ta cứ suy nghĩ về chủ đề bài thơ và ước ao có được cái kính như thế nào thì cậu cũng có thể thấu suốt tâm can mọi người.</p>
<p>Nếu mình đột nhập vào đáy lòng các ông bà khán giả ngồi ghế hàng đầu kia thì mình sẽ lục lọi khắp chỗ trong lòng họ như lục lọi một kho hàng. Lòng bà này thì như một ngăn chứa đầy quần áo đủ kiểu đủ mốt; lòng bà kia thì rộng tuếch chẳng có gì. Lòng bà thứ ba con tim thấy mình mời chào rối rít lại xem. giá mình lọt được vào một con tim nhỉ!<br>
Cầu được ước thấy.</p>
<p>Cậu chui ngay vào tim một bà sang trọng. Cậu thấy tim bà ta như một mỹ viện. Cậu vào một căn phòng, trên tường treo nhiều chân tay dị dạng. ở đây khác với mỹ viện. ở mỹ viện, người tàn tật đến mới làm khuôn, còn trong tìm bà thì những con người tội nghiệp không cần trình diện cũng được làm khuôn và khuôn được giữ lại cẩn thận. Bà chủ có toàn bộ chân dung các bạn của bà rất phong phú làm nổi bật những nhược điểm về thể chất và tinh thần từng người.</p>
<p>Lục lọi xong trái tim bà thứ nhất, cậu phụ tá sang trái tim một bà khác. Tim bà thứ hai này giống như một toà nhà thờ rộng lớn và thần bí. Chim bồ câu trắng tượng trưng cho sự trong sạch xoè cánh trên bàn thờ. Nếu không phải đi sang trái tim khác thì cậu ta đã quỳ xuống rồi. Sang đến trái tim khác vẫn còn nghe vọng thấy tiếng phong cầm. Tìm trong danh sách các vị tai to mặt lớn thế nào cũng thấy tên bà.</p>
<p>Bước sang trái tim khác, anh thấy như vào một phòng khách dát toàn bằng gương như trong lâu đài Rôxăngpo nhưng khác ở lâu đài kia là gương ở đây phóng đại mọi vật lên to một cách ghê ghớm.</p>
<p>Sau cùng cậu ta vào một trái tim, cậu thấy bí rì, gỡ mãi mới tìm được lối ra.</p>
<p>Đến đây thấy mệt rồi, cậu đình chỉ việc khám nghiệm. Cậu thấy choáng váng, đầu óc quay cuồng, thân thể bất an.. Và cậu ta nghĩ ngay đến cách chữa là nước tắm nước nóng.</p>
<p>– Ước gì mình được ở trên bậc cao nhất của phòng tắm để nước đầy đủ và có độ nóng tốt nhất.</p>
<p>Cầu sao được vậy. Hơi nước tụ thành giọt nhỏ xuống mặt cậu. Nước nóng quá! Cậu thét lên và nhảy bổ sang phòng tắm nước lạnh. Cậu hầu phòng thét lên khi thấy cậu ta mặc cả quần áo vào buồng tắm. Cậu ta đã nhanh trí biện bạch.</p>
<p>– Tôi chơi đánh cuộc đấy mà.</p>
<p>Về đến nhà, việc đầu tiên là cậu ta dán ngay một lá cao lên gáy và lưng để khỏi phát điên. Vậy mà hôm sau lưng cậu ta vẫn rộp cả lên.</p>
<p>Đi đôi giầy hạnh phúc vào, cậu ta sướng thế đấy.</p>
<p>Mấy hôm sau cũng chẳng thấy ai đến nhận đôi giầy, bác tuần canh để đem đến sở cảnh sát.</p>
<p>Một ông tham làm việc tại đó, ngắm nghía đôi giầy, rồi đặt cạnh đôi giầy của mình, ông bảo:</p>
<p>– Hai đôi giầy giống nhau như hệt. Ngay thợ giầy cũng khó phân biệt đôi nào với đôi nào.</p>
<p>Có người cầm lá đơn đến trình:</p>
<p>– Bẩm quan tham!</p>
<p>Ông tham quay lại nói vài câu, rồi quay lại chỗ để giầy.<br>
Nhưng ông chẳng còn nhớ đôi giầy nào là của mình. Ông nghĩ đôi nào ướt là của mình.</p>
<p>Nhưng ông ta đã nhầm, chính đôi giầy ướt là đôi giầy hạnh phúc.</p>
<p>Ông tham xỏ giầy, nhét công văn vào túi đem về nhà xem. Thấy đẹp trời ông đi dạo một lúc lên quảng trường Frêđêrich. Vừa đi ông vừa ngắm cảnh. Ông nhìn chim chóc nhảy nhót ca hát vui vẻ trên cành và nói như than thở:</p>
<p>– Chúng sướng thật! Sướng hơn ta nhiều! Bay bổng tít trên trời, đi mây về gió, tha hồ tung cánh. Ước gì mình cũng bay được như chúng!</p>
<p>Vừa nói xong, cánh tay và vạt áo của ông biến thành cánh chim, vải biến thành lông, giầy biến thành chân chim. Ông đã thay hình đổi dạng và nghĩ thầm:</p>
<p>– Vậy là mình đã thành chim, tha hồ bay lượn. Tất cả vạn vật đều ở dưới ta. Bạn của ta là nắng, là gió, là mây.</p>
<p>Vừa nói một mình như thế, ông tham bây giờ là chim sơn ca, chao lên đảo xuống. Một lúc lâu, ông xà xuống, ngó nghiêng tứ phía. Bỗng có cái gì to lớn úp chụp lên người ông. Thì ra một chú bỏ đi ngang qua đấy, thấy con chim đẹp liền lấy mũ chụp lấy và nắm chắc mang đi.</p>
<p>Ông tham hoảng quá, ông kêu lên:</p>
<p>– Bỏ tao ra, đồ ranh con! Có bỏ ra không?</p>
<p>Thằng bé chỉ nghe tiếng chim chiêm chiếp nên chẳng biết là ông tham.</p>
<p>Dọc đường, nó gặp hai cậu học trò. Các cậu hỏ mua thằng bé đồng ý bán với giá tám si linh. Thế là ông tham được chúng đem về phố Gốt, kinh thành Côpennhagơ.</p>
<p>Mấy đứa trẻ mang ông vào một ngôi nhà đẹp. Một bà to béo ra đón chúng. Nhưng bà tỏ vè không thích chim sẻ (bà gọi chim sơn ca, tức ông tham là chim sẻ); bà ta chỉ cho đem vào một ngày thôi mà phải nhốt vào lồng, treo ở cửa sổ.</p>
<p>– Có lẽ Pốp thích lắm đây! Bà vừa nói vừa chỉ tay vào một con vẹt xanh to tướng đang lắc lư cái đầu trong chiếc lồng bằng đồng thau. Hôm nay vừa đúng là ngày sinh nhật của Pốp. Con chim sẻ sẽ chúc mừng nó.</p>
<p>Một con hoàng yến trong lồng hót vang. Bà to béo mắng và vứt cái giẻ trắng trùm lên lồng nó. Con chim hoàng yến kêu thêm vài tiếng rồi im bặt. Ông tham (tức chim sẻ) được nhốt vào lồng bên cạnh lồng hoàng yến, đặt gần lồng con vẹt. Con vẹt oang oang một tràng tiếng người mà chủ dạy nó. “Thôi thôi để yên cho chúng tao sống làm người với chứ!”.</p>
<p>Hoàng yến cũng hót lên cho người bạn mới nó là con chim sẻ nghe:</p>
<p>“Mới đây không lâu tôi còn bay lượn dưới bóng dừa xanh và bóng cây hạnh đang nở hoa. Tôi bay cùng các anh chị tôi trên rừng hoa thơm ngát, trên mặt biển trong vắt, trên bờ rợp bóng cây. Tôi cũng đã nghe nhiều con vẹt hót nhiều chuyện rất hay rất lạ.</p>
<p>Vẹt ngắt lời:</p>
<p>– Anh nghe đấy là vẹt rừng. Chúng không được dạy dỗ gì cả. “Thôi để yên cho chúng tao sống làm người với chứ! Sao mày không cười ầm lên. Bà chủ và khách cũng đang cười kia kìa. Mày không biết thưởng thức những cái hay ở đời. Thôi!thôi để yên cho chúng tao sống làm người với chứ!</p>
<p>– Mày còn nhớ bóng dáng các cô xinh đẹp nhảy múa dưới rặng chuối đang trổ hoa hay không! Có nhớ những khu rừng già rợp bóng mát và đầy hoa thơm quả ngọt không?</p>
<p>Vẹt đáp:</p>
<p>– Có chứ! Nhưng bây giờ tao thấy sung sướng hơn. Tao được nuôi nấng đầy đủ, được đối xử tử tế. Tao thấy thế nàyy là thoả mãn rồi không còn gì hơn nữa. Từ nay trở đi chúng ta hãy sống như người thật. Hãy bỏ giọng hót bi ai của mày đi! Hãy nói cái gì làm cho người ta cười lên. Tiếng cười biểu hiện sự thông minh đã đến tuyệt đỉnh. Chó hay ngựa có biết cười đâu? Chúng nó kêu thì được, chứ cười thì không. Chỉ có loài người mới biết cười. Từ nay trở đi chúng ta sẽ sống như người thật.</p>
<p>Hoàng yến quay lại sẻ nói:</p>
<p>– Này chú chim sẻ xứ Đan Mạch. Thế là chú cũng bị cầm tù rồi. Chú sống trong cánh rừng chắc rét lắm, nhưng mà được tự do. Hãy quay về đi thôi. Chuồng chú người ta quên đóng cửa. Phía trên lại có cái cửa sổ để ngỏ. Trốn được đấy! Trốn đi!</p>
<p>Không một phút do dự, chim sẻ nhảy phắt ra khỏi lồng. Cùng lúc có tiếng cửa phòng rít lên. Một con mèo mắt xanh lẻn vào săn chim. Hoàng yến vùng vẫy kêu lên. “Từ nay chúng ta hãy sống với nhau như người thật!” Ông tham sợ quá, vội bay vọt ra khỏi lồng, rồi chẳng phương hướng gì, cứ mải miết bay, qua nhà cửa, phố phường. Đến lúc mỏi cánh, ông dừng lại xả hơi. Thấy nhà bên cạnh quen quen, có một cửa sổ để ngỏ, ông bay vào.</p>
<p>Lại chính nhà ông! Ông ngồi ngay vào bàn, chẳng suy nghĩ gì, chỉ nhắc lại câu nói của con vẹt: “Từ nay trở đi chúng ta hãy sống như người thật”.</p>
<p>Và, kỳ diệu sao, ông tham lại biến thành ông đang ngồi ở bàn. Ông kêu lên:</p>
<p>– Lạy trời phù hộ! Thế nào mà mơ xong, mình lại ngồi đây! Lúc nãy mới lo làm sao chứ! Thật là dại dột!</p>
<p>Sáng sớm tinh mơ hôm sau, ông tham còn đang nằm trên giường đã nghe tiếng gõ cửa. Đấy là một anh sinh viên khoa thần học, nhà ở phòng bên cạnh, cùng một gác. Anh bước vào khẩn khoản:</p>
<p>– Bác cho tôi mượn đôi giầy. Ngoài vườn ướt quá, tôi muốn ra thở hít không khí trong lành buổi sáng.</p>
<p>Anh xỏ giầy vào chân và xuống ngay dưới vườn. Trong vườn chỉ có một cây táo và một cây mận. Nhưng giữa thủ đô Côpenhagơ mà có được một mảnh vườn dù nhỏ cũng là thú vị. Anh sinh viên đi bách bộ. Trời còn sớm. Chưa đến sáu giờ. Ngoài phố bỗng vang lên tiếng tù và của người đánh xe ngựa. Nghe tiếng vó ngựa lọc cọc trên đường cái quan, anh liên tưởng ngay đến chuyện du lịch và kêu lên:</p>
<p>– Ôi du lịch! Du lịch thật là sung sướng, thật là hạnh phúc ở đời. Ta không mong gì hơn. Đó là liều thuốc an thần giữa lúc ta đang bị tâm can cắn rứt. Ước gì ta được sang Thụy Sĩ một chuyến, rong ruổi qua nước Ý.</p>
<p>Cầu được ước thấy. Cũng như những người trước anh xỏ đôi giầy hạnh phúc vào chân, ước cái gì được ngay cái ấy. Anh sinh viên ước đi du lịch, lập tức đôi giầy đã đưa anh sang nước Ý đúng như mong ước của anh. Anh ngồi trong một cái xe ngựa, giữa mấy kiện hàng. Anh thấy nhức óc, khó thở, đầu nặng như chì, máu dồn xuống đôi chân nhét chật cứng trong ủng. Anh thấy như nửa tỉnh nửa mê; túi bên phải anh để phiếu tín dụng, túi bên trái để giấy thông hành, trên ngực lại lủng lẳng một cái túi đựng mấy đồng tiền vàng và khâu kỹ bên trong. Cứ hễ chợp mắt lại mơ thấy một thứ gì đấy. Thế là anh giật mình tỉnh dậy, vội vàng sờ xem có còn không. Chẳng đêm nào được ngủ yên giấc. Suốt ngày cứ như thấy có kẻ đến cướp đến trấn lột. Rồi mũ, ô, gậy quặc trên mui xe cứ đung đưa và vào đầu vào mặt làm anh bứt rứt khó chịu.</p>
<p>Cảnh vật xung quanh vĩ đại, oai nghiêm, những cánh rừng từng nhô ra trên vách núi dựng đứng, đỉnh núi khuất trong sương mù. Tuyết bắt đầu rơi, trời lạnh. Anh bắt đầu cảm thấy chán cảnh ngao du nơi đây. Anh nghĩ thầm:</p>
<p>– Ước gì lại được sang phía bên kia dãy núi Anpơ! Sang bên ấy sẽ được sống khí hậu mùa hè và được lĩnh tiền bằng phiếu tín dụng. Giá lạnh thế này chẳng muốn ở lại đất Thuỵ Sĩ nữa. Làm sao sang được bên kia núi nhỉ!</p>
<p>Điều mong ước của anh sinh viên lập tức được thực hiện. Chỉ một chớp mắt anh đã thấy ở bên kia dãy núi, trên đất ý, giữa Florăngxơ và Rômơ. Nước hồ Traxinen lấp lánh dưới ánh nắng chiều tà nom như vàng lỏng giữa màu xanh thẫm của núi non, nơi xưa kia Anniban đã đánh bại những cây du thụ xanh tươi một cách thanh bình. Bọn trẻ con mình trần đang chăn đàn lợn đen trong cánh rừng nguyệt quế màu hồng toả hương thơm ngát hai bên đường. Giá tôi có tài mô tả được đầy đủ cảnh tượng mỹ lệ nơi đây, chắc bạn đọc phải kêu lên: “Nước Ý đẹp quá!” Nhưng anh sinh viên của chúng ta và các du khách đi cùng xe với anh, chẳng ai reo lên như thế một lời nào.</p>
<p>Côn trùng và ruồi muỗi bay quanh chiếc xe. Họ lấy cành xim xua chúng đi nhưng không được. Không một người nào trong xe không bị chúng đốt cho sưng mặt. Chúng bâu vào cả mắt mặt những con ngựa kéo xe, làm ngựa phải vất vả mới nhìn ra đường đi. Từng đàn ruồi xông vào đốt chúng, người đánh xe liên tục xuống xe đuổi ruồi cho chúng. Lúc mặt trời lặn, gió nổi lên làm cảnh vật rung chuyển. Núi non toàn một màu xanh ngắt. Đến tận nơi ngắm mới thấy thật là hùng vĩ. Những lúc này du khách đang đói bụng. Họ mong được gặp một quán trọ để ăn nghỉ hơn là cảnh đẹp thiên nhiên.</p>
<p>Lúc qua một cánh rừng ô-liu, anh sinh viên thần học lại nhớ về tổ quốc mình. Anh thấy những cây ô-liu ấy không đẹp bằng những cây liễu già xù xì đấy mấu nơi quê hương mình. Đi thêm một quãng nữa, họ đến một quán trọ quạnh hiu. Trước cửa quán là một tốp ăn mày, người thì chân thọt, người thì mụn nhọt đầy tay, người thì tay thọt đến tận khuỷu. Họ thi nhau kêu xin cứu giúp, giọng rền rĩ xé ruột xé gan. Anh sinh viên vất vả lắm mới thoát khỏi vòng vây của họ, để vào quán trọ. Chủ quán là một mụ già, quần áo bẩn thỉu, đi đất, tóc xoã, miệng mỉm cười, trông gớm ghiếc như con quỷ cái, ra mời khách. Cửa quán buộc bằng dây thừng, trần nhà đầy dơi đậu, một mùi hôi kinh khủng vào mũi.</p>
<p>Một khách hàng hỏi:</p>
<p>– Dọn bàn ăn xuống chuồng ngựa có được không, bà chủ. Xuống đấy chỉ có riêng mùi phân ngựa, chứ ở đây đủ mọi thứ mùi, ngồi đây ăn sao nổi.</p>
<p>Bà chủ quán hiểu ý, ghé mở cửa phòng cho thoáng; nhưng cửa vừa mở, cả đoàn ăn xin xô đến, van nài:</p>
<p>– Xin các ông các bà cứu khổ cứu nạn, giúp cho kẻ khốn cùng.</p>
<p>Nhà hàng bưng mâm ra. Vừa đặt mâm xuống mùi hạt tiêu và dầu xả xông lên. Trứng thì ung, thịt gà thì khét, rượu vang thì pha, khó uống quá, đắng như thuốc.</p>
<p>Đêm ngủ không an toàn. Khách phải lấy xích sắt cửa, thay nhau thức để canh gác. Trong nhà không khí ngẹt thở. Bên ngoài lũ ăn mày vẫn lảm nhảm: “Xin các ông các bà cứu khổ cứu nạn, giúp cho kẻ khốn cùng.”</p>
<p>Trong lúc còn đang mắt nhắm mắt mở, anh sinh viên thần học cứ tưởng mình đang trên giường một căn phòng, giữa thủ đô Côpenhagơ, dưới kia là mảnh vườn nhỏ có cây táo và cây mận.</p>
<p>Đến lúc tỉnh hẳn, anh ta mới nhớ ra rằng mình đang trên đường đi du lịch tại nước ý. Dần dần anh nhớ ra những nhọc nhằn vừa trải qua và những chán ngán gặp phải trên đường. Rồi anh nằm chen chúc trên một ổ rơm hôi hám, chốc nữa mới dậy lại ngồi vào bàn ăn món gà khét lẹt, trứng tráng ung, rượu vang pha uống đắng như uống thuốc trong một căn phòng bí hơi, vừa ăn vừa nghe lũ ăn này lảm nhảm ngoài cửa: “Lạy ông, lạy bà, cứu khổ cứu nạn, giúp kẻ bần cùng”.</p>
<p>Anh sinh viên nghĩ bụng:</p>
<p>– Giá đi du lịch mà chỉ đem theo cái hồn thôi thì khoái biết mấy! Chứ như thế này thì phiền toái quá! Ước gì mình chỉ có linh hồn không thôi nhỉ. Như vậy khoái hơn, cứ như thế này chẳng khoái tí nào!</p>
<p>Anh sinh viên nghĩ như thế bỗng dưng anh thấy mình đang ở quê nhà. Rèm trắng dài buông rủ trên các cửa sổ. Giữa phòng đặt một chiếc quan tài sơn đen, trong đó xác anh sinh viên đang nằm ngay ra bất động, còn linh hồn thì đang chu du thiên hạ.</p>
<p>Một học giả Aten cổ đại là Xôlông đã có lần nói:</p>
<p>“Đừng có vội vàng nhận định ai sung sướng trước khi người ấy chết”.</p>
<p>Câu nói ấy của nhà học uyên thâm đã được thể hiện trong câu chuyện tôi kể trên đây.</p>
<p>Hai cái bóng bước vào phòng. Đó là thần Trừng phạt và sứ giả của thần Hạnh phúc. Hai thần ghé xuống nhìn xác chết.<br>
Thần Trừng phạt hỏi:</p>
<p>– Đi giầy hạnh phúc đã đem lại hạnh phúc gì cho người trần?</p>
<p>Thần kia trả lời:</p>
<p>– Đã đem cái chết dịu dàng, cái chết giữa tuổi thanh xuân cho anh ta trước khi anh ta phải nếm mùi khổ hạnh của cuộc sống.</p>
<p>– Cô nhầm rồi! Thần trừng phạt lại nói. – Anh ta đã chết quá sớm. Sống chưa hết kiếp. Do vậy tuy anh ta có quyền hưởng hạnh phúc sau nhiều thử thách gian lao, nhưng anh ta đã không được hưởng. Ta sẽ thực sự cứu giúp anh ta.</p>
<p>Nói rồi thần trừng phạt tháo đôi giầy hạnh phúc từ chân anh ra. Anh sinh viên bỗng tỉnh dậy. Cả thần Trừng phạt lẫn đôi giầy biến mất.</p>
</div>`,
      },
    ],
    'Truyện cổ Grim': [
      {
        name: 'Truyện cổ tích Grimm Sáu người hầu',
        content: `<div class="wow fadeIn" style="visibility: visible; animation-name: fadeIn;">

<h1 style="text-align: center;">Sáu người hầu</h1>
<p>&nbsp;</p>
<p style="text-align: left;">Xưa có một bà hoàng hậu già, vốn là một mụ phù thủy. Mụ sinh được một con gái đẹp vào bậc nhất trên đời. Nhưng mụ vốn chỉ tìm cách hại người nên mụ vẫn bảo: Ai đến cầu hôn cũng phải làm một việc đã, làm được mụ sẽ gả con gái cho, mà làm không xong thì mất mạng. Đã nhiều người chỉ vì mê nhan sắc phải liều thân nhưng làm chẳng nổi các việc mụ giao đành chịu quì gối rơi đầu.&nbsp;<span id="more-599"></span>Có vị hoàng tử nghe đồn về sắc đẹp của người con gái ấy, tâu vua cha:</p>
<p style="text-align: left;">– Cha cho con đi cầu hôn thử.</p>
<p style="text-align: left;">Vua khuyên hoàng tử:</p>
<p style="text-align: left;">– Không khi nào cha ưng đâu con ạ. Con đi là đi vào cõi chết đấy!</p>
<p style="text-align: left;">Hoàng tử ốm tương tư nằm liệt giường suốt bảy năm không thầy thuốc nào chữa được. Vua thấy đã tuyệt vọng, buồn lắm, bảo con:</p>
<p style="text-align: left;">– Thôi thế con cứ đi mà cầu may vậy. Cha cũng chẳng còn cách nào khác để giúp con nữa.</p>
<p style="text-align: left;">Hoàng tử nghe cha nói, đứng dậy ngay. Chàng thấy trong người lại khỏe và hớn hở lên đường.</p>
<p style="text-align: left;">Một hôm chàng đang phi ngựa qua cánh đồng hoang, bỗng thấy ở xa lù lù một vật gì tựa đống cỏ lớn. Lại gần nhìn kỹ, hóa ra đấy là bụng một anh chàng đang nằm dài dưới đất. Cái bụng ấy bằng quả núi con. Gã béo thấy có người phi ngựa đến vội đứng lên thưa:</p>
<p style="text-align: left;">– Nếu như ngài cần người, tôi xin theo hầu.</p>
<p style="text-align: left;">Hoàng tử đáp:</p>
<p style="text-align: left;">– Cồng kềnh như ngươi, ta biết dùng làm gì đây?</p>
<p style="text-align: left;">Gã béo nói:</p>
<p style="text-align: left;">– Thưa, chưa thấm vào đâu, tôi mà phình người ra thật sự, còn lớn gấp ba ngàn lần nữa.</p>
<p style="text-align: left;">Hoàng tử bảo:</p>
<p style="text-align: left;">– Nếu quả như thế thì có cơ dùng được. Ngươi đi với ta.</p>
<p style="text-align: left;">Gã béo đi theo hoàng tử. Lúc sau, lại thấy một người nằm dài dưới đất ghé tai sát mặt cỏ.</p>
<p style="text-align: left;">Hoàng tử hỏi:</p>
<p style="text-align: left;">– Ngươi làm gì thế?</p>
<p style="text-align: left;">Người ấy đáp :</p>
<p style="text-align: left;">– Tôi đang lắng nghe.</p>
<p style="text-align: left;">– Nghe gì mà chăm chú thế?</p>
<p style="text-align: left;">– Nghe xem trên thế gian mới có chuyện gì xảy ra. Chẳng có gì lọt được khỏi tai tôi. Đến tiếng cỏ mọc tôi cũng nghe thấy.</p>
<p style="text-align: left;">Hoàng tử bảo:</p>
<p style="text-align: left;">– Thế ngươi thử nói xem, ngươi đã nghe thấy gì trong triều của bà hoàng hậu già có cô con gái đẹp nhất đời ấy?</p>
<p style="text-align: left;">Gã đáp:</p>
<p style="text-align: left;">– Tôi nghe có tiếng gươm chém soàn soạt: hẳn có kẻ đến cầu hôn bị chặt đầu.</p>
<p style="text-align: left;">Hoàng tử bảo gã:</p>
<p style="text-align: left;">– Đi với ta, có thể ta cần đến ngươi.</p>
<p style="text-align: left;">Ba người cùng đi. Lúc sau, họ thấy như có hai bàn chân ai ở trước mặt họ. Họ thấy cả bắp chân nhưng không nhìn được suốt hết. Họ lại đi một quãng đường nữa mới trông thấy thân người, rồi đi mãi mới trông thấy đầu. Hoàng tử thét lên:</p>
<p style="text-align: left;">– Chao ôi! Người đâu mà dài quá!</p>
<p style="text-align: left;">Gã người dài đáp:</p>
<p style="text-align: left;">– Nào đã thấm vào đâu! Tôi mà vươn ra thật sự thì còn dài đến gấp ba ngàn lần nữa, cao hơn quả núi cao nhất thế giới. Nếu người cần hỏi tôi, tôi xin theo hầu.</p>
<p style="text-align: left;">Hoàng tử bảo gã:</p>
<p style="text-align: left;">– Đi với ta, có thể ta cần đến ngươi.</p>
<p style="text-align: left;">Họ đi một quãng, thấy có người hai mắt bịt chặt ngồi bên lề đường. Hoàng tử hỏi:</p>
<p style="text-align: left;">– Mắt ngươi hỏng hay sao mà không dám nhìn ra ánh sáng thế?</p>
<p style="text-align: left;">Gã đáp:</p>
<p style="text-align: left;">– Không phải đâu! Tôi không dám gỡ khăn bịt mắt chính là vì nhãn quang mạnh lắm. Tôi đã nhìn vật gì, vật ấy ắt nổ tung. Nếu người dùng được tôi, tôi xin theo hầu.</p>
<p style="text-align: left;">Hoàng tử bảo gã:</p>
<p style="text-align: left;">– Đi với ta, có thể ta cần đến ngươi.</p>
<p style="text-align: left;">Họ lại đi và thấy một người đang nằm sưởi giữa nắng mà cứ run cầm cập, tay chân lẩy bẩy.<br>
Hoàng tử hỏi:</p>
<p style="text-align: left;">– Trời đang nóng ngội ngạt mà sao người lại rét được?</p>
<p style="text-align: left;">Gã đáp:</p>
<p style="text-align: left;">– Trời ơi, cơ thể tôi nó rất lạ. Người ta càng thấy bức thì tôi càng thấy rét, rét thấu xương thấu tủy. Ngược lại trời càng giá thì tôi càng thấy oi bức. Tôi ngồi giữa đồng bằng mà thấy oi bức không chịu nổi. Lúc ngồi giữa đống lửa mà thấy rét không chịu nổi.</p>
<p style="text-align: left;">Hoàng tử bảo:</p>
<p style="text-align: left;">– Thật là người kỳ dị! Ngươi có muốn theo ta thì đi với ta.</p>
<p style="text-align: left;">Họ lại đi tiếp và gặp một người đang vươn cổ mà dòm qua các chỏm núi. Hoàng tử hỏi:</p>
<p style="text-align: left;">– Ngươi làm gì mà hăng thế?</p>
<p style="text-align: left;">Gã bảo:</p>
<p style="text-align: left;">– Tôi có cặp mắt rất sáng, nhìn thấu mọi núi cao, rừng rậm, đồng ruộng, lũng sâu, có thể thấy khắp cả thế gian.</p>
<p style="text-align: left;">Hoàng tử bảo gã:</p>
<p style="text-align: left;">– Nếu ngươi thuận thì đi với ta. Ta đang thiếu người có tài ấy.</p>
<p style="text-align: left;">Hoàng tử đem sáu người hầu đến thẳng thành đô, chỗ mụ hoàng hậu già ngự trị. Chàng không để lộ tung tích, chỉ nói:</p>
<p style="text-align: left;">– Nếu người định gả con gái cho tôi thì sai gì tôi cũng làm.</p>
<p style="text-align: left;">Mụ phù thủy thấy chàng đẹp trai, thế mà sa vào tay mụ thì mừng lắm. Mụ bảo:</p>
<p style="text-align: left;">– Tao sẽ giao cho mày ba việc, làm được cả thì ta gả con cho.</p>
<p style="text-align: left;">Chàng hỏi:</p>
<p style="text-align: left;">– Việc thứ nhất là việc gì?</p>
<p style="text-align: left;">– Trước tao có đánh rơi xuống Hồng Hải mất một cái nhẫn, mày đi tìm về cho tao.</p>
<p style="text-align: left;">Hoàng tử lẻn về bảo sáu người hầu:</p>
<p style="text-align: left;">– Việc thứ nhất không dễ đâu, ta phải tìm một cái nhẫn rơi ở Hồng Hải, biết làm sao bây giờ?</p>
<p style="text-align: left;">– Để tôi xem nó chỗ nào? – Gã mắt sáng nói.</p>
<p style="text-align: left;">Gã ngó một lúc rồi nói:</p>
<p style="text-align: left;">– Kia rồi! Nó bị mắc trên một mũi đá ngầm.</p>
<p style="text-align: left;">Gã người dài lưng nói:</p>
<p style="text-align: left;">– Tôi lấy được ngay, chỉ tiếc chưa nhìn thấy.</p>
<p style="text-align: left;">Gã béo hét:</p>
<p style="text-align: left;">– Chỉ cần thế thôi à?</p>
<p style="text-align: left;">Gã nằm phục xuống, ghé miệng sát mặt nước. Sóng biển xô nhau vào một hang ngầm. Gã uống một hơi dài cạn sạch nước, còn trơ đáy biển ráo khô như bãi cỏ. Lúc ấy, gã người dài mới cúi xuống, gã chỉ hơi nghiêng mình đã nhặt được nhẫn. Hoàng tử cầm nhẫn, mừng lắm, mang ngay về cho mụ già. Mụ kinh ngạc quá, kêu:</p>
<p style="text-align: left;">– Ừ, đúng cái nhẫn này rồi!</p>
<p style="text-align: left;">Rồi mụ nói tiếp:</p>
<p style="text-align: left;">– Việc thứ nhất may mắn đã xong, nhưng còn việc nữa. Mày có thấy ba trăm con bò mộng đang ăn cỏ ở ngoài bãi trước lâu đài không? Mày phải ăn được bằng hết ba trăm con bò ấy, phải ngốn cả da, lông, xương, sừng. Dưới hầm có ba trăm thùng rượu vang, mày cũng phải nốc cho bằng cạn. Không được để sót một sợi lông bò, một giọt rượu. Bằng không, mày sẽ không còn được hoàn mạng.</p>
<p style="text-align: left;">Hoàng tử hỏi:</p>
<p style="text-align: left;">– Liệu tôi có được mời bạn cùng ăn không? Ăn uống thiếu bạn phỏng còn thú vị gì.</p>
<p style="text-align: left;">Mụ già cười nham hiểm:</p>
<p style="text-align: left;">– Cho mày mời một đứa bạn, nhưng chỉ được một đứa thôi.</p>
<p style="text-align: left;">Hoàng tử ra tìm sáu người hầu và bảo gã béo:</p>
<p style="text-align: left;">– Hôm nay ngươi là khách của ta, cứ việc ăn thật no nhé.</p>
<p style="text-align: left;">Gã béo căng bụng ăn một lúc hết sạch đàn bò ba trăm con, đến sợi lông cũng không còn. Ăn xong gã còn hỏi liệu sau bữa điểm tâm ấy có gì nữa không. Gã tu cạn mấy trăm thùng rượu, chẳng cần rót ra cốc, chẳng bỏ sót một giọt.</p>
<p style="text-align: left;">Bữa ăn đã xong, Hoàng tử vào báo cho mụ già biết.</p>
<p style="text-align: left;">Mụ kinh ngạc lắm, bảo:</p>
<p style="text-align: left;">– Chưa có đứa nào làm được thế, nhưng còn việc nữa.</p>
<p style="text-align: left;">Mụ nghĩ bụng: “Đằng nào rồi mày cũng mất đầu, thoát khỏi tay ta sao được”. Mụ hẹn:</p>
<p style="text-align: left;">– Tối nay, tao sẽ cho con gái vào phòng mày. Mày phải ôm nó mà ngồi suốt đêm, cấm ngủ. Đúng nửa đêm, tao sẽ đến xem. Nếu lúc ấy mày buông tay ra rồi, tức là mày thua cuộc.</p>
<p style="text-align: left;">Hoàng tử nghĩ thầm: “Khó gì việc này, ta thức được”. Nhưng chàng vẫn gọi các người hầu vào, nói cho họ biết và bảo:</p>
<p style="text-align: left;">– Ai biết mưu sâu của nó thế nào! Cẩn thận vẫn hơn, các ngươi hãy thức canh và phải chú ý, chớ để nàng ra khỏi phòng.</p>
<p style="text-align: left;">Tối, mụ già đưa con lại, giao tận tay hoàng tử. Gã người dài vội nằm khoanh lại thành một cái vòng quanh hai người, còn gã béo đứng cạnh ngay trước cửa. Họ tưởng thế là chắc, không ai lọt vào nổi. Hai người ngồi trong, cô gái chẳng nói một câu nhưng nhờ ánh trăng rọi chếch qua cửa sổ soi tỏ khuôn mặt cô nên Hoàng tử vẫn thấy được dung nhan tuyệt vời ấy. Chàng cứ ngắm hoài, yêu thương, mừng rỡ tràn đầy, không hề thấy mỏi mắt. Khoảng mười một giờ khuya, mụ già niệm chú cho mọi người thiếp đi, rồi mụ hóa phép cướp người con gái. Họ thiếp đi cho đến tận mười một giờ bốn lăm. Khi ấy yêu thuật hết linh nghiệm mọi người tỉnh dậy. Hoàng tử kêu:</p>
<p style="text-align: left;">– Vạ đến nơi rồi! Ta thua cuộc rồi!</p>
<p style="text-align: left;">Mấy người trung thành cũng bắt đầu than thở, bỗng gã thính tai bảo:</p>
<p style="text-align: left;">– Im nào, để tôi xem nào!</p>
<p style="text-align: left;">Gã lắng tai nghe một lúc rồi bảo:</p>
<p style="text-align: left;">– Cô ấy đang ngồi than thân trong một quả núi đá, cách đây ba trăm giờ đi bộ. Cậu người dài là người duy nhất làm nổi việc này: cậu cứ duỗi dài người ra thì chỉ cần bước dăm bước là đến nơi.</p>
<p style="text-align: left;">Gã người dài bảo:</p>
<p style="text-align: left;">– Được, nhưng cậu mắt sắc phải đi với tớ, ta sẽ cùng dọn quả núi ấy đi.</p>
<p style="text-align: left;">Nói đoạn, gã xốc luôn gã bịt mắt lên vai và chỉ trong nháy mắt, chưa kịp trở bàn tay hai gã đã đứng trước quả núi yểm bùa. Gã người dài vội tháo cái khăn bịt mắt gã kia. Gã kia mới trừng mắt, cả quả núi đã nổ tan ra ngàn vạn mảnh. Gã người dài vội bế bổng cô thiếu nữ lên và chỉ trong nháy mắt, gã đã về đến nơi. Gã lại đi đón nốt bạn về, cũng nhanh như thế. Trước khi đồng hồ điểm mười hai tiếng, họ đã ngồi lại cả ở đó, tỉnh táo và hớn hở. Đúng nửa đêm, mụ già rón rén bước lại. Vẻ mặt mụ kiêu kỳ như muốn bảo: “Giờ thì mày ở trong tay tao rồi”.<br>
Mụ cứ tưởng con gái vẫn còn ngồi trong núi cách đây ba trăm dặm. Ngờ đâu mụ thấy con vẫn ngồi nguyên trong tay hoàng tử. Mụ kinh hãi quá, kêu:</p>
<p style="text-align: left;">– Thằng này thật cừ hơn ta!</p>
<p style="text-align: left;">Mụ còn biết nói sao nữa, đành phải gả con gái cho Hoàng tử nhưng mẹ khẽ rỉ tai con:</p>
<p style="text-align: left;">– Thật là nhục cho con, không kiếm được tấm chồng tương xứng, để từ nay cứ phải vâng theo một đứa thường dân.</p>
<p style="text-align: left;">Người con gái bị tổn thương lòng kiêu kỳ sinh căm giận, nghĩ cách báo thù. Sáng hôm sau, nàng sai chở ba trăm thước gỗ đến rồi nói với hoàng tử: “Mặc dầu ba việc đã làm xong, ta sẽ chỉ lấy chàng khi nào có kẻ dám ngồi giữa đống gỗ cháy mà chịu được lửa”. Nàng nghĩ chẳng kẻ hầu nào chịu thiêu mình vì chủ đâu và vì yêu nàng tất chàng sẽ phải đích thân ngồi vào, thế là nàng thoát. Sáu người hầu bàn nhau: “Bọn mình ai cũng đã được một việc, chỉ có cậu rét run chưa làm gì, giờ đến lượt cậu ấy”. Họ đã khiêng gã rét run lên đống gỗ rồi đốt lửa. Lửa cháy suốt ba ngày, cả đống gỗ ấy ra tro. Nhưng lửa vừa mới lụi đã thấy người rét run đứng dậy giữa đống tro run rẩy như tầu lá mà bảo.</p>
<p style="text-align: left;">– Đời tôi chưa khi nào thấy rét như thế này, rét thêm tý nữa chắc là chết cóng mất!</p>
<p style="text-align: left;">Người con gái đẹp không còn kế nào khác, đành nhận lời lấy chàng trai lạ mặt. Nhưng lúc họ lên xe ra nhà thờ làm lễ cưới, mụ già lại nói:</p>
<p style="text-align: left;">– Tao không chịu được cái nhục này!</p>
<p style="text-align: left;">Mụ sai binh tướng đuổi theo, hạ lệnh chúng phải giết sạch và đem bằng được con gái về cho mụ. Không ngờ gã thính tai nghe được cả những lời dặn dò kín đáo ấy. Gã hỏi gã béo:</p>
<p style="text-align: left;">– Làm thế nào đây?</p>
<p style="text-align: left;">Nhưng gã này đã có kế rồi, gã nhổ ngay nước biển đã uống khi trước, mới nhổ vài bãi đã thành cái hồ lớn chặn đường cỗ xe. Đám binh tướng của mụ già không sao tiến được và bị chết đuối rất nhiều. Mụ già biết tin lại cho một đội giáp binh nữa đuổi theo. Nhưng gã thính tai đã kịp nghe thấy tiếng đồ binh giáp va nhau lách cách. Gã giật cái khăn bịt mắt gã mắt sắc. Gã này mới chỉ hơi trừng mắt, quân thù đã tan tành như mớ thủy tinh vụn. Đoàn người yên chí đánh xe đi tiếp.</p>
<p style="text-align: left;">Khi cặp vợ chồng vào nhà thờ làm phép cưới đã xong, sáu người hầu nói với chủ:</p>
<p style="text-align: left;">– Giờ Người đã toại nguyện, không cần đến chúng tôi nữa. Chúng tôi xin đi nơi khác tìm vận hội.</p>
<p style="text-align: left;">Ở trước cung điện của hoàng tử, cách độ một nửa giờ đi bộ, có một cái thôn nhỏ. Lúc họ đi ngang đấy, thấy một người đang chăn lợn ngoài thôn. Hoàng tử bảo vợ:</p>
<p style="text-align: left;">– Nàng có biết thật ta là ai không? Ta không phải là con vua đâu mà chỉ là con của một người chăn lợn. Người chăn lợn kia chính là cha ta đấy. Rồi đôi ta cũng sẽ phải giúp cha một tay.</p>
<p style="text-align: left;">Nói đoạn, chàng xuống xe. Dắt ngang vào quán trọ. Chàng rỉ tai bảo kẻ hầu trong quán, đợi đêm lấy trộm quần áo sang trọng của hai người đi. Sáng hôm sau, lúc hai người thức dậy, quần áo mất sạch chẳng còn gì mặc. Mụ chủ cầm vào cho nàng một cái áo cũ với đôi tất đen cũng đã cũ. Mụ còn làm như món quà lớn lắm, mụ bảo:</p>
<p style="text-align: left;">– Không có chồng cô, tôi chẳng cho cô tí gì đâu!</p>
<p style="text-align: left;">Nàng lại càng tin: “Đúng chồng mình chỉ là anh chăn lợn”. Nàng cũng đi chăn lợn với chồng và nghĩ bụng: “Cũng là đáng đời mình, cứ hay kiêu kỳ ngạo nghễ”. Như thế được tám hôm, chân<br>
nàng đau nhức quá không thể chịu được nữa. Khi ấy có một người đến hỏi nàng có biết chồng nàng là ai không. Nàng đáp:</p>
<p style="text-align: left;">– Có chứ! Là anh chàng chăn lợn. Nhà tôi vừa ra xong, hình như đi mua dây bán rợ gì đấy.</p>
<p style="text-align: left;">Nhưng mấy người nọ bảo:</p>
<p style="text-align: left;">– Lại đằng này đi, chúng tôi sẽ đưa chị đến nơi. Họ dẫn nàng lên cung điện. Lúc nàng vào đến phòng lớn thì chồng nàng đã ở đấy, mình khoác hoàng bào, nhưng nàng không nhận ra. Mãi đến lúc chồng bá cổ hôn nàng mới biết. Chàng bảo:</p>
<p style="text-align: left;">– Ta chịu khổ vì em đã nhiều, nên em cũng cần chịu khổ vì ta.</p>
<p style="text-align: left;">Đám cưới được tổ chức ngay và người kể chuyện này cũng rất muốn đến dự.</p>
</div>`,
      },
      {
        name: 'Truyện cổ Grimm – Bảy con quạ',
        content: `<div style="text-align: justify; visibility: visible; animation-name: fadeIn;" class="wow fadeIn">
<p>Ngày xưa, có một người sinh được bảy con trai, nhưng không có con gái, cầu mãi cũng chẳng được. Mãi về sau, vợ có mang, bác ta chứa chan hy vọng; quả nhiên đứa con ra đời là con gái. Hai vợ chồng mừng lắm, nhưng đứa con gái lại bé quá.</p>
<p>Vì thấy con yếu ớt, bố mẹ định làm phép rửa tội gấp cho con. Bố vội sai đứa con trai chạy ra suối lấy nước.&nbsp;<span id="more-643"></span>Sáu đứa kia cũng đi theo. Bảy đứa tranh nhau múc nước, cái bình lăn xuống nước. Chúng không biết làm thế nào, không đứa nào dám về nhà. Thấy con mãi không về, bố sột ruột, nói:</p>
<p>– Mấy thằng ranh lại mải chơi quên múc nước rồi.</p>
<p>Bố sợ con gái nhỡ chết không được chịu phép rửa tội, phát cáu, rủa con:</p>
<p>– Ước gì cả bảy thằng hóa ra quạ tất.</p>
<p>Vừa nói buông lời thì nghe thấy tiếng vỗ cánh trên đầu và bảy con quạ đen như than bay liệng. Bố đã trót rủa rồi, hối lại không kịp nữa.</p>
<p>Hai vợ chồng buồn vì mất bảy đứa con trai, nhưng được an ủi vì thấy đứa con gái quí mỗi<br>
ngày một khỏe lên và đẹp ra. Mãi sau cô nghe thấy láng giềng xì xào rằng cô đẹp thật, nhưng vì cô mà bảy anh cô phải khổ, thì cô mới biết rằng cô có anh. Cô buồn rầu, hỏi bố mẹ xem là mình có anh không và các anh nay ra sao. Bố mẹ không thể giấu con được nữa, nói tránh ra rằng đó là lòng trời, và cô sinh ra chẳng có tội gì.</p>
<p>Nhưng cô em hàng ngày vẫn bị lương tâm cắn rứt và quyết tâm giải thoát cho các anh khỏi bị phù phép. Cô bứt rứt lắm, trốn nhà ra đi khắp nơi mong tìm ra tung tích các anh để giải thoát các anh bằng mọi cách. Cô chỉ mang theo một chiếc nhẫn nhỏ là vật kỷ niệm của bố mẹ, một cái bánh mì để ăn, một bình nước nhỏ để uống và một chiếc ghế con để ngồi cho đỡ mỏi.</p>
<p>Cô đi mãi đi mãi, đi đến tận cùng thế giới. Cô đi tới mặt trời, nhưng mặt trời nóng quá. Cô vội rời mặt trời và chạy đến mặt trăng, nhưng mặt trăng lạnh lẽo quá. Cô vội quay gót, đi tới các vì sao. Các vì sao tiếp cô niềm nở, vì sao nào cũng ngồi trên một cái ghế con. Sao Mai đứng dậy, cho cô một cái xương nhỏ và bảo cô:</p>
<p>– Không có cái xương nhỏ này thì con không thể mở được núi thủy tinh là chỗ ở của các anh con.</p>
<p>Cô bé cầm lấy cái xương, lấy khăn bọc cẩn thận, rồi đi mãi, đến núi thủy tinh. Cửa núi đóng. Cô cởi khăn tay ra để lấy cái xương, nhưng không thấy nữa. Thế là cô đã đánh mất món quà của vì sao tốt bụng. Làm thế nào bây giờ? Cô muốn cứu các anh mà chìa khóa núi lại mất rồi. Cô bèn rút dao ra, cắt mẩu ngón tay đút vào lỗ khóa. Cô bước vào, thấy một người lùn đi ra, hỏi:</p>
<p>– Con đến tìm gì ở đây?</p>
<p>– Con tìm các anh con là bảy con quạ.</p>
<p>– Bây giờ các ông quạ đi vắng, nhưng nếu con muốn chờ các ông về thì con vào đây.</p>
<p>Người lùn sắp bữa ăn tối cho bảy ông quạ vào bảy cái đĩa nhỏ và bảy cái cốc nhỏ. Cô bé ăn ở mỗi đĩa một miếng và uống ở mỗi cốc một hớp. Cô thả cái nhẫn mang theo vào cốc cuối cùng. Chợt cô nghe thấy trên không có tiềng vỗ cánh. Người lùn liền nói:</p>
<p>– Các ông quạ đã về đó.</p>
<p>Các ông quạ về thật. Mỗi ông đi tìm cốc đĩa của mình để ăn uống. Hết ông nọ đến ông kia hỏi:</p>
<p>– Ai đã ăn ở đĩa của tôi? Ai đã uống cốc của tôi? Nhất định có người đụng đến cốc này.</p>
<p>Khi con quạ thứ bảy uống hết cốc, thì nó thấy cái nhẫn. Nó nhìn chằm chằm và nhận ra cái nhẫn của bố mẹ, bèn nói:</p>
<p>– Cầu Chúa cho em chúng ta ở đây thì chúng ta được giải thoát.</p>
<p>Quạ vừa nói xong, cô bé đang đứng nghe sau cửa liền bước vào. Tức thì đàn quạ hóa ra người. Anh em ôm chặt lấy nhau hôn nhau mãi, rồi vui vẻ cùng nhau lên đường về nhà.</p>
</div>`,
      },
      {
        name: 'Truyện cổ Grimm – Con ngỗng vàng',
        content: `<div class="wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
        <p></p><div style="clear: both; text-align: center; visibility: visible; animation-name: fadeIn;" class="wow fadeIn"></div>

<p>Xưa có một người có ba con. Con thứ ba tên là chàng Ngốc thường bị khinh rẻ chế giễu và làm việc gì cũng bị gạt ra. Một hôm, con cả muốn vào rừng đốn củi. Trước khi anh ta đi, người mẹ cho anh ta một chiếc bánh trứng ngon lành và một chai rượu vang để mang theo ăn uống. Anh vào rừng gặp một ông lão nhỏ bé, tóc hoa râm, chào anh và nói:</p>
<p>– Cho lão xin miếng bánh ở trong bị anh và một ngụm rượu vang. Lão vừa đói vừa khát đây.&nbsp;<span id="more-476"></span></p>
<p>Anh chàng khôn ngoan đáp:</p>
<p>– Nếu tôi cho lão bánh và rượu thì tôi chẳng còn gì! Thôi lão xéo đi!</p>
<p>Rồi anh để kệ ông lão ở đấy mà đi. Anh đẵn cây được một lát thì trượt tay, rìu chém vào cánh tay, phải về nhà băng bó. Tai nạn ấy chính do ông lão bé nhỏ gây ra. Sau đó, người con thứ hai đi rừng. Người mẹ cũng cho một chiếc bánh trứng và một chai rượu vang y như với con cả. Ông lão bé nhỏ cũng đến xin anh miếng bánh và ngụm rượu. Người con thứ hai cũng rất khôn:</p>
<p>– Tôi cho lão cái gì là tôi thiệt cái ấy. Thôi lão xéo đi!</p>
<p>Rồi anh để kệ ông lão ở đấy mà đi. Anh cũng bị trừng phạt ngay: anh mới chặt cây được vài nhát thì chặt ngay vào chân, phải lê về nhà.</p>
<p>Chàng Ngốc liền nói:</p>
<p>– Thưa bố, bố để cho con đi đốn củi một lần.</p>
<p>Bố đáp:</p>
<p>– Thôi! Hai anh mày bị thương. Mày đốn củi thế nào được!</p>
<p>Chàng Ngốc xin mãi, cuối cùng bố đành bảo:</p>
<p>– Thôi thì mày cứ đi đi. Có vấp thì mới sáng mắt ra.</p>
<p>Mẹ cho một chiếc bánh luộc ủ tro và một chai bia chua. Anh vào rừng thì cũng gặp một ông lão bé nhỏ tóc hoa râm, chào anh rồi bảo:</p>
<p>– Cho lão xin một miếng bánh và một ngụm rượu, lão vừa đói vừa khát đây.</p>
<p>Chàng Ngốc đáp:</p>
<p>– Cháu chỉ có bánh ủ tro và bia chua thôi. Nếu cụ thấy tạm được, thì ông cháu ta ngồi xuống cùng đánh chén.</p>
<p>Họ ngồi xuống. Chàng Ngốc rút bánh ủ tro ra thì thấy đó là một chiếc bánh trứng ngon lành; bia chua đã biến thành rượu vang ngon. Ăn uống xong, ông lão bảo:</p>
<p>– Cháu tốt bụng, sẵn sàng chia của mình cho người khác. Để lão ban phúc cho. Chỗ kia có cây cổ thụ, cháu đẵn xuống sẽ thấy trong đám rễ cây có của quí.</p>
<p>Nói xong ông lão từ biệt lên đường.</p>
<p>Chàng Ngốc đi đẵn cây. Hạ cây xuống thì thấy trong đám rễ có một con ngỗng lông bằng vàng thật. Anh nhấc ngỗng lên ẵm vào một quán trọ để ngủ đêm. Chủ quán có ba con gái. Ba cô thấy ngỗng, tò mò không biết là chim gì mà lạ thế, chỉ muốn lấy một chiếc lông của nó. Cô cả nghĩ cách nhổ trộm một chiếc. Khi chàng Ngốc vừa ra, chị nắm ngay lấy cánh ngỗng. Nhưng tay bị dính chặt vào đó, không rút ra được. Một lát sau, cô thứ hai đến cũng chỉ chăm chăm muốn lấy một chiếc lông vàng. Cô vừa đụng đến cô chị thì bị dính ngay vào chị. Cô thứ ba cũng tới cũng định tâm lấy lông. Hai cô chị kêu lên:</p>
<p>– Ối trời ơi là trời, tránh ra, tránh ra!</p>
<p>Cô út chẳng hiểu tại sao lại phải tránh ra, nghĩ bụng các chị làm thì mình cũng làm được, liền nhảy lại. Cô vừa đụng tới các chị thì cũng bị dính vào. Cả ba cô suốt đêm phải ở liền với ngỗng. Sáng hôm sau, chàng ngốc mang ngỗng ra đi, cũng chẳng để ý đến ba cô dính vào ngỗng. Các cô đành lẽo đẽo theo sau, rẽ sang phải sang trái tùy theo bước của anh. Giữa đồng, cha xứ gặp cả đoàn người bèn nói:</p>
<p>– Đồ gái quạ mổ, không biết xấu hổ à? Cứ bám lấy giai ra đồng như vậy coi có được không?</p>
<p>Cha liền nắm tay cô út kéo lại; cha vừa đụng đến thì chính cha cũng bị dính vào và cũng phải lẽo đẽo đi theo. Một lúc sau, người giữ đồ thánh thấy cha xứ lẽo đẽo theo ba cô, ngạc nhiên quá hỏi:</p>
<p>– Thưa cha, cha đi đâu mà vội vàng thế? Cha nhớ là hôm nay còn phải làm lễ rửa tội cho một đứa trẻ nữa cơ đấy.</p>
<p>Ông ta chạy theo nắm áo cha thì cũng bị dính vào. Năm người đang bước thấp bước cao như vậy thì gặp hai bác nông dân vác cuốc ở đồng về. Cha xứ gọi họ, nhờ gỡ hộ mình và người giữ đồ thánh ra. Hai bác vừa sờ đến thì bị dính vào nốt. Như vậy là bảy người đi theo chàng Ngốc ôm ngỗng.</p>
<p>Anh đi tới kinh kỳ. Nhà vua có một cô gái nghiêm nghị, không ai làm cô cười được. Vua phán là ai làm cho cô cười thì được lấy cô. Chàng Ngốc nghe thấy nói vậy, liền vác ngỗng và cả bảy người theo đuôi đến trước công chúa. Nàng thấy bảy người lếch thếch theo nhau, liền cười sằng sặc, không kìm lại được nữa. Chàng Ngốc liền đòi lấy nàng. Vua không thích chàng rể này, viện cớ nọ cớ kia để từ chối, ra điều kiện cho anh phải tìm ra người uống hết được một hầm rượu vang thì mới cho lấy. Chàng Ngốc nghĩ đến ông lão nhỏ bé, có thể giúp được mình,<br>
liền vào rừng tìm. Tới chỗ cây bị đẵn, anh thấy có một người ngồi, mặt buồn rười rượi. Anh hỏi y sao lại buồn bao thế. Y đáp:</p>
<p>– Tôi khát quá, uống bao nhiêu cũng không đỡ khát. Tôi không chịu được nước lã. Quả là tôi đã uống cạn một thùng rượu, nhưng chẳng qua mới như muối bỏ bể.</p>
<p>Chàng Ngốc nói:</p>
<p>– Thế để tôi giúp anh. Anh chỉ việc đi với tôi là tha hồ uống.</p>
<p>Anh dẫn người ấy đến hầm rượu nhà vua. Y nhảy xổ vào những thùng rượu to, uống mãi, uống mãi đến căng cả bụng. Chưa hết một ngày, anh đã uống sạch cả hầm rượu.</p>
<p>Chàng Ngốc lại đòi lấy công chúa. Nhưng vua bực lắm, không muốn để một tên vớ vẩn mà mọi người gọi là Ngốc lấy con gái mình. Vua lại ra những điều kiện mới: anh ta phải tìm cho ra được một người ăn nổi một núi bánh. Chàng Ngốc chẳng suy nghĩ gì lâu la, lại đi ngay vào rừng. Vẫn ở chỗ cũ có một người mặt mũi thiểu não, thắt chặt bụng bằng dây da và nói:</p>
<p>– Tôi đã ăn cả một lò bánh, nhưng không ăn thua gì. Tôi háu đói quá. Bụng vẫn lép kẹp, phải thắt lại kẻo chết đói mất.</p>
<p>Chàng Ngốc thấy vậy cả mừng bảo:</p>
<p>– Thôi đi đi, đi với tôi thì tha hồ no nê.</p>
<p>Anh dẫn người ấy vào triều. Vua cho tập trung bột mì cả nước lại rồi sai nướng một núi bánh khổng lồ. Người ở rừng chỉ ăn một ngày hết sạch cả núi bánh.</p>
<p>Lần thứ ba, chàng Ngốc lại đòi lấy công chúa. Vua tìm cách thoái thác, đòi có một chiếc tàu đi được cả ở trên cạn lẫn dưới nước. Vua nói:</p>
<p>– Nếu tàu ấy cặp bến thì lập tức ngươi được lấy con gái ta.</p>
<p>Chàng Ngốc đi thẳng vào rừng. Ông lão được anh cho bánh vẫn ngồi đó, bảo anh:</p>
<p>– Chính lão đã uống và ăn hộ cho anh. Để lão cho anh chiếc tàu. Gì lão cũng làm, vì anh đã cư xử với lão tử tế.</p>
<p>Lão bèn cho anh một chiếc tàu đi được cả trên cạn lẫn dưới nước. Vua thấy không còn cách gì giữ con gái được nữa đành cho tổ chức đám cưới. Sau khi vua mất, chàng Ngốc lên ngôi. Vợ chồng sống hưởng hạnh phúc.</p>
<p></p>
      </div>`,
      },
      {
        name: 'Truyện cổ tích Grimm – Ba bà kéo sợi',
        content: `<div class="wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
        

<div class="wow fadeIn" style="visibility: visible; animation-name: fadeIn;"></div>
<div class="wow fadeIn" style="visibility: visible; animation-name: fadeIn;"></div>
<h1 style="text-align: center;">BA BÀ KÉO SỢI</h1>
<p>&nbsp;</p>
<p>Ngày xưa có một cô gái lười biếng, không chịu kéo sợi. Mẹ cô khuyên bảo thế nào cô cũng không nghe. Một hôm, bà mẹ không chịu được nữa, tức quá đánh cô, cô khóc gào lên. Vừa lúc đó, hoàng hậu đi qua nghe tiếng khóc bèn dừng xe lại, vào nhà hỏi bà mẹ vì cớ gì mà lại đánh con gái đến nỗi nó kêu ầm lên thế. Bà mẹ sợ nói con gái mình lười thì xấu hổ, nên mới tâu:</p>
<p>– Thần bảo cháu thôi đừng&nbsp;<a href="http://truyencotich.vn/" target="_blank" rel="noopener">kéo sợi</a>&nbsp;nữa vì nhà nghèo làm gì có cúi đưa cho cháu, nhưng cháu cứ đòi kéo mãi.</p>
<p>Hoàng hậu nói:</p>
<p>– Ta thích nghe tiếng guồng sợi vù vù lắm. Ngươi cứ cho con gái nhà ngươi đến cung, ta có nhiều cúi, nó tha hồ mà kéo.</p>
<p>Bà mẹ thấy vậy mừng lắm để hoàng hậu đem con gái về cung. Về đến cung, hoàng hậu dẫn cô đến ba buồng đầy ngập cúi rất tốt. Hoàng hậu bảo cô gái:</p>
<p>– Con kéo cho hết chỗ cúi này. Kéo xong ta sẽ cho lấy con trai cả ta. Con nghèo khổ ta không kể làm chi, chăm chỉ là của hồi môn quí giá lắm rồi.</p>
<p>Cô gái rất lo vì dù có sống đến ba trăm năm và làm việc từ sáng đến tối cũng không sao kéo hết chỗ cúi đó. Cô ngồi khóc một mình ba ngày liền không nhúc nhích. Hôm thứ ba, hoàng hậu tới ngạc nhiên thấy cô vẫn chưa làm gì cả. Nhưng cô thoái thác rằng vì xa mẹ, buồn rầu nên chưa làm được. Hoàng hậu cũng cho là phải, nhưng khi quay gót, dặn rằng:</p>
<p>– Mai con phải bắt đầu làm đi nhé.</p>
<p>Khi cô gái còn lại một mình một bóng, không biết xoay xở ra sao. Trong lúc bối rối, cô ra đứng cửa sổ. Cô thấy có ba bà đến. Bà thứ nhất có một bàn chân to bèn bẹt. Môi dưới bà thứ hai trễ xuống quá cằm. Bà thứ ba có một ngón tay cái bèn bẹt. Ba bà ngừng lại trước cửa sổ, ngước mắt lên nhìn cô và hỏi cô có việc gì mà phải lo âu. Cô gái kể lể sự tình khốn khổ. Ba bà hứa sẽ đến giúp:</p>
<p>– Nếu em bằng lòng mời chúng ta đi ăn cưới em, nếu em không thẹn gọi chúng ta là chị họ, nếu em bằng lòng để chúng ta ngồi cùng tiệc cưới với em, thì chúng ta sẽ kéo sợi giúp cho, chẳng mấy chốc mà xong.</p>
<p>Cô gái đáp:</p>
<p>– Vâng, em rất đồng ý. Xin mời các chị vào làm ngay cho.</p>
<p>Ba bà thợ dệt lạ lùng vào buồng thứ nhất, thu xếp chỗ ngồi và bắt đầu&nbsp;<a href="http://truyencotich.vn/" target="_blank" rel="noopener">kéo sợi</a>. Bà thứ nhất chắp sợi và đạp guồng. Bà thứ hai rấp nước vào sợi. Bà thứ ba xe chỉ và ấn xuống bàn cho nhẵn. Mỗi lần bà hất ngón tay cái là một con sợi rất mịn rơi xuống đất. Cô gái dấu không cho hoàng hậu biết có ba bà giúp mình. Mỗi khi xe hoàng hậu đến, cô cho hoàng hậu xem số sợi đã xe.&nbsp;<a href="http://truyencotich.vn/" target="_blank" rel="noopener">Hoàng hậu&nbsp;</a>khen cô hết lời.</p>
<p>Cúi buồng thứ nhất xe hết, ba bà xe đến cúi buồng thứ hai. Rồi đến cúi buồng thứ ba, chẳng mấy chốc cũng xe xong. Ba bà từ giao cô và dặn:</p>
<p>– Em chớ quên lời hứa nhé, hạnh phúc sẽ tới với em.</p>
<p>Sau khi thấy buồng đã hết cúi và những con chỉ chất thành đống, hoàng hậu định ngày cưới. Chú rể sung sướng lấy được vợ khéo léo đảm đang, ca tụng vợ mãi. Cô dâu nói:</p>
<p>– Em có ba người chị, họ đã giúp đỡ em nhiều. Trong hạnh phúc của em, em không thể quên các chị ấy được, xin chàng cho phép em mời ba chị đến ăn cưới và dự tiệc với chúng ta.</p>
<p>Chú rể và hoàng hậu nói:</p>
<p>– Nhẽ nào lại không cho phép?</p>
<p>Nghi lễ vừa bắt đầu thì ba bà đến, ăn mặc kỳ quặc. Cô dâu nói:</p>
<p>– Em xin chào mừng ba chị!</p>
<p>Chú rể hỏi thầm cô dâu:</p>
<p>– Chết nỗi, sao em có họ hàng xấu xí thế?</p>
<p>Rồi chàng hỏi bà có chân bẹt:</p>
<p>– Vì đâu mà chân bà rộng thế?</p>
<p>– Vì tôi đạp guồng.</p>
<p>Rồi chàng hỏi bà thứ hai:</p>
<p>– Vì đâu mà môi mà trễ như thế?</p>
<p>– Vì tôi rấp nước bọt vào sợi.</p>
<p>Rồi chàng hỏi bà thứ ba:</p>
<p>– Vì đâu mà ngón tay cái bà bèn bẹt?</p>
<p>– Vì tôi xe chỉ.</p>
<p>Hoàng tử khiếp sợ, nói:</p>
<p>– Từ nay về sau vợ đẹp của ta không được mó đến guồng sợi nữa.</p>
<p>Thế là vợ chàng thoát được cái việc kéo sợi mà cô ta không thích.\</p>
<p></p>
      </div>`,
      },
    ],
    'Nghìn lẻ một đêm': [
      {
        name: 'Aladdin và cây đèn thần',
        content: `<div class="wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
            <p>Aladdin là một cậu bé nghèo. Một hôm, cậu bé tình cờ gặp một người phù thủy. Người phù thủy nói với cậu rằng: “Hãy giúp tôi lấy một cái lọ từ trong hang động, tôi sẽ trả công cho em.”</p>
            <p>Aladdin không biết rằng cái lọ đó chứa đựng một đèn thần. Khi cậu mở nắp lọ, một đèn thần đã xuất hiện và thực hiện mọi điều ước của cậu. Aladdin đã trở nên giàu có và quyền lực.</p>
            <p>Aladdin đã sử dụng đèn thần để trở thành một người quyền lực và giàu có. Anh đã cưới công chúa và trở thành vua của đất nước.</p>
            <p>Nhưng một ngày, một người phù thủy khác đã lấy mất đèn thần của Aladdin. Anh ta đã sử dụng đèn thần để thực hiện mọi điều ước của mình và trở thành một người quyền lực và giàu có.</p>
            <p>Aladdin đã phải chiến đấu với người phù thủy để lấy lại đèn thần. Sau một trận chiến dài, Aladdin đã chiến thắng và lấy lại đèn thần.</p>
            <p>Aladdin đã học được bài học quý giá từ trải nghiệm của mình. Anh đã hiểu rằng quyền lực và giàu có không phải là tất cả. Quan trọng nhất là tình yêu, sự chân thành và lòng trung thành.</p>
            <p>Aladdin đã trở về với công chúa và sống hạnh phúc bên nhau suốt đời.</p>
            <p></p>
            </div>`,
      },
      {
        name: 'Ali Baba và bốn mươi tên cướp',
        content: `<div class="wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
            <p>Ali Baba là một người nghèo. Một hôm, anh tình cờ phát hiện ra hang động của bọn cướp. Anh đã nghe thấy mật khẩu để mở cửa hang động và lấy được một số vàng từ bọn cướp.</p>
            <p>Ali Baba đã chia sẻ với anh em của mình về việc này. Nhưng anh em của Ali Baba đã bị tham lam và muốn lấy thêm vàng từ hang động của bọn cướp.</p>
            <p>Ali Baba đã cảnh báo anh em của mình về nguy hiểm từ bọn cướp. Nhưng họ không nghe theo và đã bị bọn cướp bắt giữ.</p>
            <p>Ali Baba đã sử dụng một kế hoạch thông minh để giết chết bọn cướp và giải thoát cho anh em của mình. Anh đã trở thành người hùng của làng và được mọi người tôn vinh.</p>
            <p>Ali Baba đã học được bài học quý giá từ trải nghiệm của mình. Anh đã hiểu rằng lòng trung thành, sự chân thành và tình yêu là những giá trị quý giá nhất trong cuộc sống.</p>
            <p>Ali Baba đã sống hạnh phúc bên gia đình và được mọi người kính trọng suốt đời.</p>
            <p></p>
            </div>`,
      },
    ],
    'Thần thoại Hy Lạp': [
      {
        name: 'Sự hình thành thế giới thần linh và các thần nhân đầu tiên',
        content: `<div class="wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
        <p></p>
<p>Lời nói đầu:<br>
Giống như những em bé luôn háo hức đặt ra cho người lớn những câu hỏi không bao giờ dứt về mọi vật xung quanh chúng; các dân tộc khi mới hình thành cũng đặt ra cho mình những câu hỏi về thế giới vạn vật để họ tự trả lời. Dường như nhu cầu tìm hiểu ngọn nguồn của vạn vật là một nhu cầu tự nhiên của mỗi con người và mỗi dân tộc.<span id="more-1144"></span>&nbsp;Và những câu trả lời sơ khai đó chính là triết lý nguyên thủy của các dân tộc. Mỗi dân tộc đều có cách lý giải của riêng mình về sự tạo thành thế giới. Và một trong những dân tộc đã để lại cho loài người một cách lý giải độc đáo và sinh động là dân tộc Hy Lạp. Cách lý giải của họ đã thể hiện thành một hệ thống truyền thuyết và thần thoại vô cùng hấp dẫn, góp phần làm phong phú cho tâm hồn nhân loại. Tìm hiểu hệ thống thần thoại này sẽ mãi mãi là một điều bổ ích và lý thú cho mỗi tâm hồn chúng ta…</p>
<p>o O o</p>
<p>Người Hy Lạp cổ xưa kể rằng khi khai thiên lập địa khởi thủy có ba vị Thần linh: Thần Hỗn Mang Khaos, Nữ Thần Đêm tối Nyx và Thần Ái tình Eros.</p>
<p>Thần Hỗn Mang kết hợp với Nữ Thần Đêm tối sinh ra Thần Định Mệnh. Thần nhân này đui hai mắt, có quyền thống trị, mỗi khi phán quyết một điều gì lại ghi trên một quyển sách bằng đồng. Các Thần nhân sau này có thể dùng quyền lực của mình ngưng việc thi hành những phán quyết đó, nhưng không thể cưỡng lại.</p>
<p>Sau khi sinh ra Thần Định Mệnh, thần Khaos sinh ra Nữ Thần Đất Gaia và Thần Tartaros tối tăm-Đây là một vực thẳm u tối ở kế bên Trái Đất.Tiếp đó Gaia lại sinh ra Thần bầu trời trải rộng bao la (hay còn gọi là Thần Thiên Vương) Ouranos, vị thần này ra đời lại dang rộng cánh tay bao bọc lấy cả Trái Đất rộng lớn. Như vậy theo quan niệm của người Hy Lạp cổ xưa thì đất sinh ra trời chứ trời không phải sinh ra đất dù bầu trời rộng hơn đất rất nhiều. Sau đó nữ thần Đất Gaia lại sinh ra núi non hùing vĩ vươn mình lên tận trời xanh, rồi lại sinh tiếp thần Biển Cả Pontos đổ nước tràn ra khắp bề mặt Trái Đất và quanh năm vỗ sóng. Nữ Thần Gaia cũng sinh ra những thần nhân khổng lồ và độc long Cyclopes.</p>
<p>Ouranos kết hợp với mẹ mình là Nữ thần Đất Gaia sinh ra sáu người con trai(Titan) và sáu người con gái, tất cả đều là các thần khổng lồ hùng mạnh và đáng sợ. Sáu nam thần gồm có: Okeanos, Ceus, Hyperion, Japet, Cryos và Cronus. Sáu nữ thần là : Tethys, Rhea, Themys, Mnemosyne, Phoibe, Thaya…Sau đó, Gaia lại sinh thêm Briare và Gyas là hai thần nhân đại lực mỗi người có năm mươi đầu và một trăm tay.</p>
<p>Thần thoại Hy Lạp kể lại rằng sau đó vì tức giận các con mình mà thần Ouranos đạp hết các con xuống vực thẳm Tartare, nhốt họ dưới đáy sâu trong lòng đất âm u, tức là trong bụng nữ thần Đất Gaia, cấm không cho nhìn thấy ánh sáng ban ngày. Gaia, mẹ của họ vô cùng đau khổ vì gánh nặng trong bụng làm bà đau đớn. Tức giận, Gaia chế ra một lưỡi hái và kêu gọi các con trả thù, nổi dậy chống lại cha. Tuy nhiên, các con bà đều không dám làm theo lời mẹ, chỉ có người con út là Thần Cronus là dám nổi loạn và được giao nhiệm vụ này. Cronus vớisự giúp đỡ của mẹ, đã chém cha mình là Ouranos bị thương, bắt giam ông xuống Địa Ngục, sau đó thay thế Cha mình trị vì vũ trụ. Máu của Ouranos chảy xuống đất sinh ra ba nữ thần Đại Nộ Furies.</p>
<p>Để trừng phạt tội lỗi của Cronus, Nữ thần Bóng Đêm Nys đã sinh một bầy thần khủng khiếp: Thanatos – Thần Chết, Erys – Nữ thần Bất Hoà, Ates – Nữ thần Dối Trá, Kes – Nữ thần Tàn Sát, Hypnos – Thần Ngủ cùng với bầy đoàn bóng ma tăm tối, Nemetys – Nữ thần Báo Thù và nhiều thần khác. Các vị thần này chuyên đi gieo rắc nỗi kinh hoàng, sự tan vỡ, dối trá, giao rắc sự tranh chấp và bất hạnh cho thế giớI mà Cronus đã chiếm đoạt quyền ngự trị của cha mình.</p>
<p>Cronus lấy chị gái mình là Nữ thần Rhea và lên ngôi trị vì thay cho Ouranos. Với mặc cảm giết cha, Cronus luôn luôn lo sợ là quyền lực của mình sẽ không tồn tại lâu. Thần bị ám ảnh bởi một ý nghĩ cho rằng rồi sẽ có lúc đến lượt các con mình sẽ nổi loạn lật đổ thần như thần đã làm với chính cha mình. Thế là hễ Rhea sinh được người con nào, Cronus lại nuốt ngay người ấy vào bụng không chút thương xót. Ba người con đầu là Demeter, Hestia và Posiedon đều chịu số phận đó. Đến khi Rhea hạ sinh Zeus và Hera thì Cronus chỉ nuốt được Hera còn Zeus thì bị Rhea đánh tráo bằng một cục đá. Sau đó theo lời khuyên của mẹ là Gaia, Rhea bỏ trốn đến hòn đảo Crete trên Địa Trung Hải. Nàng giao Zeus cho các Nữ thần Sơn Thủy nuôi dưỡng. Đứa bé Zeus lớn lên trong sự thương yêu chăm sóc của hai nữ thần; được bú sữa của con dê cái Amalthea; từng đàn ong bay lên đỉnh núi và hai nữ thần Sơn Thủy lấy mật của chúng cho chàng; trong khi đó các tu sĩ của Cybele thay nhau nhảy múa, ca hát ngăn không cho tiếng khóc của Zeus lọt đến tai Cronus.</p>
<p></p>
      </div>`,
      },
      {
        name: 'Zeus và Hera',
        content: `<div class="wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
        


<div style="text-align: justify; visibility: visible; animation-name: fadeIn;" class="wow fadeIn">
<div class="entry-content wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
<p>ZEUS, Zoose hay Zyoose, (Thần thoại La Mã gọi là Jupiter), là vị thần tối cao trên đỉnh Olympe. Zeus là cha của các người hùng Perseus và Hercule, và là người cuối cùng trong cuộc tranh giành quyền lực trên đỉnh Olympe.</p>
<p>Zeus là con trai của thần Titan Cronus và nữ thần Rhea. Khi vừa được sinh ra, Zeus bị cha mình dự định sẽ ăn thịt như những người con khác trước đó như: Poseiden, Hades, Hestia, Demeter và Hera.&nbsp;<span id="more-1146"></span>Nhưng Rhea đã dấu đứa con mới sinh của mình trong hang núi trên đỉnh Dicte, đảo Crete. (Cho tới ngày nay, những người tại hang núi “Hang của Zeus” sử dụng đèn flash để tạo bóng của các hình nộm trong hang động, tạo ra hình ảnh của đứa bé Zues trong thần thoại).</p>
<p>Khi lớn lên, Zeus làm cho Cronus mửa ra các anh chị của mình. Các vị thần đó về phe của Zeus trong cuộc chiến giành quyền cai quản vũ trụ long trời lở đất dài mười hai năm với các thần Titan và vua của họ là Cronus. Đánh bại cha mình và các vị thần Titan khác, Zeus giam họ dưới vực thẳm Tartare.</p>
<p>Sau đó, Zeus cùng những người anh em của mình phân chia quyền lực. Poseidon cai quản biển cả, Hades cai trị âm phủ, và Zeus làm chúa tể bầu trời. Zeus được xem như là vị thần có quyền lực tối cao nhất trên trái đất và đỉnh Olympe.</p>
<p>o O o</p>
<p>Nữ thần HERA (Thần thoại La Mã gọi là Juno) là nữ thần của hôn nhân, nàng là vị thần bảo trợ cho cuộc sống gia đình, cho sự thánh thiện và bền vững của nó. Hera là vợ của thần Zeus và cũng như chồng nàng có toàn quyền thống trị của một vị Nữ hoàng trên đỉnh Olympe.</p>
<p>Khi Hera được nhả ra từ miệng của Cronus, Rhea đã đem nàng đến chỗ của thần Okeanos ở nơi tận cùng Trái Đất giao cho Nữ thần Tethys nuôi dưỡng. Hera sống một yên bình một thờI gian dài xa Olympus, cho đến khi Zeus vĩ đại tình cờ nhìn thấy nàng trong một chuyến du hành. Vị thần sấm sét vĩ đại vừa nhìn thấy nàng đã đem lòng yêu quý vá quyếr định bắt cóc nàng về làm vợ. Các vị thần đã làm cho họ một đám cưới thật linh đình. Nữ thần Cầu Vồng Irys cùng các Nữ thần Duyên Dáng mặc cho Hera bộ váy áo đẹp nhất, làm cho nàng đẹp lộng lẫy và rạng rỡ hẳn lên giữa các thần linh trên núi Olympus.</p>
<p>Hera không ưa anh hùng Heracles vì chàng là con trai của chồng mình với một người phụ nữ trần gian. Khi chàng còn nhỏ, Hera đã cho rắn đến nôi tấn công chàng. Sau đó Hera đã khuấy đảo rừng Amazon để hãm hại chàng khi chàng đang đi săn.</p>
<p>Trong khi đó Hera lại hỗ trợ người anh hùng Jason, vốn không thể nào đoạt được Con cừu vàng nếu không có sự hỗ trợ của nàng.</p>
<p>Trong thần thoại Hy lạp, Hera là vị nữ thần cai trị cung điện Olympus vì nàng chính là vợ của Zeus. Nhưng việc thờ cúng Hera lại xuất hiện trước việc thờ cúng Zeus khá lâu. Để hiểu rõ hơn, ta lùi lại cái thời mà những thế lực sáng tạo mà ta gọi là “thần” được quan niệm là người phụ nữ. Vị nữ thần mang nhiều hình dạng khác nhau, trong đó có loài chim.</p>
<p>Hera được thờ cúng khắp đất nước Hy Lạp, những đền thờ cổ xưa và quan trọng nhất được hiến dâng cho nàng. Việc Hera chinh phục thần Zeus và miêu tả nàng như là người đàn bà đanh đá ghen tuông chính là những phản ánh thần thoại về một trong những thay đổi sâu sắc nhất trong tư duy loài người.</p>
<p>Căn cứ trên những tranh vẽ hang động và các di vật khảo cổ thì hàng chục ngàn năm trước đây loài người rất quan tâm đến cơ thể người phụ nữ, hoặc là lúc đang mang thai hoặc là lúc sinh nở. Việc sinh con chính là khả năng kỳ diệu nhất của loài người khiến cho thế gian được mang lại sự sống mới tươi trẻ. Ở trình độ tiến hóa cho phép tổ tiên chúng ta nghĩ đến việc thờ cúng khả năng sinh nở này, có thể kết luận rằng họ cho rằng việc này gắn với hình ảnh người phụ nữ.</p>
<p>Hàng ngàn năm sau (tức khoảng từ 5 đến 9 ngàn năm trước đây), các hậu duệ châu Âu của những người kể trên sống trong những ngôi làng lớn, có kiến trúc đặc trưng và những đền thờ tôn giáo. Các di vật khảo cổ cho thấy họ thờ cúng một thế lực (hoặc một nhóm thế lực) mang nhiều hình dáng khác nhau-một con chim, một con rắn, cũng có thể là chính quả địa cầu. Và thế lực vĩ đại này chính là phụ nữ. Bởi vì chỉ có người phụ nữ mới có khả năng sinh sản-đem lại cuộc sống mới.</p>
<p>Người ta nói rằng khi con người khám phá ra vai trò của đàn ông trong việc sinh sản thì họ mới bắt đầu thờ cúng các nam thần. Dù vậy cũng không có gì nghi ngờ rằng các vị nam thần đã được thờ cúng từ trước đó. Và cũng rõ ràng rằng sau khi hiểu rõ hơn về việc sinh sản thì những người Châu Âu hiền hòa – quan niệm của Crete trong “Minoans” – tiếp tục thờ cúng Người Mẹ Vĩ Đại.</p>
<p>Và có rất nhiều người châu Âu hiền hòa. Những ngôi làng lớn nhất trong kỷ nguyên ấy không cần lập hàng rào phòng chắn. Nền văn minh “Châu Âu cổ” không hề lo ngại những vụ ẩu đả với xóm giềng. Nhưng sau đó sự việc đã thay đổi và một khoảng thời gian dài bạo lực bùng phát. Quân xâm lược tràn vào Châu Âu từ những vùng đất rộng lớn ở Châu Á. Họ đem theo dòng ngôn ngữ Indo-Châu Âu mà ngày nay bao gồm tiếng Pháp, Ý, Tây Ban Nha và tiếng Anh. Họ cũng đem theo một vị thần linh, vị nam thần tối cao mà thần thoại Hy Lạp gọi là Zeus.</p>
<p>Người ta biết rất ít về những người Indo-châu Âu này, nhưng những ngôi làng bình yên của châu Âu cổ không phải là điều họ mong muốn. Ở một vài nơi nền văn minh mới của họ dần chiếm thế tối thượng. Ở vài nơi khác nó thành thứ văn hóa kết hợp. Những người sống ở miền núi đã phản kháng lại, dù nhiều người đã bị đánh bật khỏi thành lũy của mình, họ tiếp tục di chuyển và đánh bật những người khác theo hiệu ứng domino. Cuộc xâm lăng Dorian của Hy Lạp cổ có thể được xem là kết quả của phản ứng dây chuyền này.</p>
<p>Trật tự cũ có vẻ như tồn tại lâu nhất tại Crete nơi được bảo vệ bởi biển Aegean khỏi những cuộc xâm lăng trên bộ, nền văn minh Minoan đã tồn tại suốt gần ba ngàn năm. Nhưng đột ngột sau đó, từ triển vọng của sự tồn tại loài người, giới tính của những quyền năng tối cao chuyển từ nữ sang nam. Và rất nhiều câu chuyện hình thành nên cơ sở cho thần thoại Hy Lạp đã chỉ được kể sau sự thay đổi này.</p>
<p>Các cuộc tình vụng trộm của Zeus có thể bắt nguồn từ những buổi lễ trong đó vị thần mới “kết hôn” với các hiện thân khác nhau của Nữ Thần Vĩ Đại. Việc có nhiều điểm nghi vấn về vị thần này và những người thờ cúng có thể thấy qua sự ra đời kỳ lạ của nữ thần Athena từ đầu của thần Zeus- dường như muốn nói rằng vị thần linh này có thể làm bất cứ điều gì mà Nữ thần vĩ đại có thể làm được.</p>
<p>Nữ thần Hera tiếp tục được thờ cúng ở nhiều hình thức, tùy vào các thời điểm lịch sử. Việc thờ cúng vị nữ thần này đôi khi bị bãi bỏ phần lớn là vì những tập tục tôn giáo bị suy thoái dưới những ảnh hưởng mới. Nhưng chúng ta có thể thấy những bằng chứng trong thần thoại về trật tự cũ của vị thần này, trong đó Athena bản thân cũng là một nữ thần.</p>
<p>Dưới ảnh hưởng của người Indo-Châu Âu, Athena trở thành thần Chiến tranh. Thần hay giả dạng thành loài cú – một loài chim biểu tượng cho thần linh.</p>
</div>
<footer></footer>
</div>
<div style="border: 0px; font-family: Arial; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; max-width: 100%; padding: 0px; vertical-align: baseline; visibility: hidden; animation-name: none;" class="wow fadeIn">
<p><span style="font-size: large;">&nbsp;</span></p>
</div>
<p></p>
      </div>`,
      },
      {
        name: 'Dionysus và Hephaestus',
        content: `<div style="text-align: justify; visibility: visible; animation-name: fadeIn;" class="wow fadeIn">
<div class="entry-content wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
<p>DIONYSUS (Thần thoại La Mã gọi là Bacchus) là vị thần Rượu Nho. Dionysus chính là con trai của thần Zeus và công chúa Semele, con gái Vua Cadmus sáng lập ra thành Thebes.</p>
<p>Khi Semele nghe theo lời xúi giục của Hera nài nỉ xin Zeus cho nàng nhìn thấy dung nhan của vị Thần oai quyền nhất vũ trụ thì nàng đang hoài thai Dionysus.<span id="more-1154"></span>&nbsp;Bị ràng buột của lời thề trước đó, Zeus hiện nguyên hình là vị thần Sấm Sét và Semele bị thiêu cháy thành than sau khi sinh non ra Dionysus. Zeus lúc đó đã rạch đùi mình và ủ Dionysus vào đó để nuôi sống đứa bé bằng sức mạnh của Vị thần tối cao. Sau đó Zeus giao Dionysus cho các Nữ thần Thời Khắc và Sơn Thủy nuôi dưỡng ở thung lũng Nyse.</p>
<p>Dionysus lớn lên trở thành Thần Rượu Nho sinh đẹp. Thần dạy loài người cách trồng nho vá cất rượu, đem lại cho loài người sức mạnh và niềm vui sảng khoái. Là một vị thần vui tính Dionysus đi chu du khắp đó đây. Thần đội chiếc vành kết bằng dây nho trên đầu, trong tay cầm một cây gậy có núm bằng quả thông và quấn dây trường xuên xung quanh. Theo sau Thần là các nữ thần Sơn Thủy và các vị thần Đồng Quê vui nhộn đội trên đầu những chiếc vành hoa lá vừa đi vừa uống rượu nho và múa hát vui vẻ.</p>
<p>Dionysus đã cứu thoát Ariadne sau khi nàng bị Theseus bỏ rơi. Chàng cũng đã cứu mẹ mình từ địa phủ, sau khi thần Zeus cho bà biết sự thật thần chính là vị thần Bão tố và đã dùng tia chớp tiêu diệt bà.</p>
<p>Dionysus chính là người đã cho Midas khả năng biến mọi thứ ông ta chạm vào trở thành vàng, nhưng sau đó chính thần cũng đã lấy lại khả năng này khi chứng minh cho Midas thấy nó không phải là một điều ước khôn ngoan vì bất cứ cái gì Midas chạm vào đều biến thành vàng, kể cả thức ăn.</p>
<p>o O o</p>
<p>HEPHAESTUS (Thần thoại La Mã gọi là Vulcan) chính là vị thần thọt chân cai quản ngọn lửa và nghề thủ công, có khi cả hai, vì vậy còn có tên gọi là thần thợ rèn.</p>
<p>Hephaestus là con trai của thần Zeus và thần Hera. Tương truyền lúc mới sinh ra Hephaestus cũng là một vị thần sinh đẹp nhưng khi Hera vì tính ghen tuông của mình mà mưu toan xúi giục các thần khác nổi loạn bị Zeus phát hiện bắt treo giữa Thiên Cung và Hạ Giới bằng sợi xích vàng, chàng định lại gần giải thoát cho mẹ thì bị thần Zeus đã nắm chân quẳng xuống đất từ trên cung điện Olympus. Cũng có dị bản kể rằng ngay từ lúc sinh ra Hephaestus đã là một cậu bé yếu ớt và thọt chân. Hera trông thấy vừa xấu hổ vừa tức giận túm ngay lấy đứa bé quẳng xuống hạ giới.</p>
<p>Hephaestus rơi xuống biển và được Nữ thần Thetis thương tình nuôi dưỡng cho đến khi trưởng thành. Dù xấu xí và thọt chân nhưng Hephaestus có hai cánh tay khoẻ mạnh và một bộ ngực rắn chắc, vạm vỡ. Và đặc biệt là chàng rất khéo léo biết chế tạo ra các thứ đồ kim loại từ to lớn đến tinh xảo.</p>
<p>Hephaestus đã thực hiện được rất nhiều công trình kiến trúc độc đáo như những cung điện nguy nga xây cho các vị thần ở trên đỉnh núi Olympus, hoặc là bộ áo giáp làm cho Achilles trong cuộc chiến thành Troy (mô tả về chiếc áo giáp này chiếm khá nhiều bút mực trong sử thi Homer về cuộc chiến thành Troy).</p>
<p>Hephaestus đồng thời cũng tạo ra người đàn bà đầu tiên cho loài người, Pandora, theo yêu cầu của phụ vương Zeus, nhằm trả đũa vụ thần Titan Prometheus lừa thần linh làm điều lợi cho con người mà gây ra tổn thất cho thần linh (đó là Prometheus đã đem lửa xuống cho loài người). Pandora được gả làm vợ anh trai của Titan, Epimetheus. Của hồi môn của Pandora là một cái bình chứa đầy điều xấu xa độc ác, khi nàng kéo nắp bình ra nàng sẽ đem khổ đau, vốn là một thứ xa lạ, đến cho con người vì họ phải làm lụng cực nhọc và đau yếu luôn. Chỉ có hy vọng là còn nằm lại trong chiếc bình đó. (Trong Thần thoại Hy Lạp có viết: “Từ nàng Pandora này sẽ sinh sôi, nảy nở ra giống đàn bà, một loài độc hại cho giống đàn ông mà giống đàn ông không sao dứt bỏ được bởi vì, theo sự sáng tạo của các vị thần, giống đàn bà là loại không thể chịu đựng được cuộc sống vất vả, nhọc nhằn, nghèo túng, khó khăn mà chỉ sinh ra để sống trong cảnh an nhàn, sung túc và hưởng thụ kết quả lao động khó nhọc của người đàn ông, cũng như gây ra cho đàn ông biết bao điều đau khổ, phiền muộn trong chuyện hôn nhân và gia đình. Người đàn bà sẽ là người bạn đường của người đàn ông nhưng là người bạn đường gây ra những nỗi bất hạnh cho người đàn ông. Đó là cái tai họa mà thần Zeus ban cho loài người”).</p>
</div>
</div>`,
      },
      {
        name: 'Poseidon và Apollo',
        content: `<div class="entry-content wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
<p>POSEIDON (Thần thoại La Mã gọi là Neptune) là vị thần của cai quản biển cả bao gồm các đại dương, hải đảo và các bờ biển. Mặc dù ông là một trong những vị thần tối cao của núi Olympus, nhưng phần lớn thời gian ông ở trong lãnh thổ của mình dưới sâu tận đáy biển của mình.</p>
<p>Poseidon là anh của thần Zeus và thần Hades.&nbsp;<span id="more-1152"></span>Ba vị thần năng chia nhau những quyền năng sáng tạo : thần Zeus thống trị bầu trời, thần Hades cai quản địa ngục và Poseidon được giao cho tất cả những gì thuộc về nước – cả sông và biển.</p>
<p>Với vẻ đẹp rực rỡ của một vị thần hùng mạnh cai trị biển cả, Poseidon có một cung điện tráng lệ nguy nga dưới đáy biển sâu. Mỗi khi Thần Poseidon trầm lặng, uy nghi ngồi trên chiếc xe do những con hải sư dũng mãnh kéo chạy trên mặt biển mênh mông, khi đó thì sóng biển dạt sang hai bên nhường đường cho thần, xung quanh có những con cá heo nhào lộn đón mừng và từng đàn cá tung tăng bám theo cỗ xe thần thánh. Khi Poseidon khua chiếc đinh ba xuống mặt nước thì biển cả dậy sóng, bão tố kinh hoàng, gây nên nhựng cơn địa chấn rung chuyển mặt đất. Nhưng khi thần chĩa đinh ba lên đầu các ngọn sóng thì chúng ngoan ngoãn dịu đi. Bão tố ngừng thổI và mặt biển trở nên êm dịu hiền hoà như cũ. Chính tay Poseidon chặt ngang các lục địa tạo thành những eo biển, cửa sông. Thần cũng tự tay phát ra các mạch nước nguồn, làm nổi lên những hải đảo. Cũng chính Poseidon đã giữ gìn cho các lục địa khỏi sụp đổ.</p>
<p>o O o</p>
<p>APOLLO (Thần thoại La Mã cũng gọi là Apollo) là Thần tiên tri, âm nhạc, chữa bệnh.</p>
<p>Như hầu hết các vị Thần trên đỉnh Olympus, Apollo ko hề do dự khi xen vào những quan hệ dưới trần gian. Thần là nguyên nhân dẫn đến sự thất bại của người anh hùng Achilles. Trong đội ngũ các anh hùng bao vây thành Troy trong cuộc chiến thành Troy, Achilles là chiến sĩ tài giỏi nhất. Chàng đã đánh bại dễ dàng chỉ huy Hector của thành Troy trong cuộc đơn đấu. Nhưng Apollo đã giúp Paris anh trai của Hector báo thù, giết chết Achilles bằng một mũi tên thần.</p>
<p>Khi một ai chết đột ngột, người đó bị cho là đã trúng một mũi tên của Apollo. Bản anh hùng ca của Homer về cuộc chiến thành Troy bắt đầu với việc thần Apollo gây ra một trận bệnh dịch bằng một cơn mưa tên xuống nơi đóng quân của quân Hy Lạp.</p>
<p>Là Thần âm nhạc, Apollo thường được hình dung khi đang chơi đàn Lia (lyre). Thế nhưng, chàng không sáng chế ra nhạc cụ này, mà được thần Hermes tặng để chuộc lỗi sau vụ Hermes bắt trộm bò của Apollo. Có người nói rằng Apollo là người sáng chế ra đàn luýt (một loại đàn dây họ ghita), mặc dù kỹ năng chơi đàn Lia của Apollo là tài giỏi nhất.</p>
<p>Apollo đã chiến thắng nhiều cuộc thi với nhạc cụ này. Trong một lần tranh tài với Aplollon, thần Pan đã dùng cây sáo mục đồng của mình và phải chịu thua cuộc trước tiếng đàn của Apollon. Lần đó, vua Midas sai lầm khi nói rằng ông thích tiếng sáo của thần Pan hơn, khiến Apollo tức giận biến tai ông thành tai lừa.</p>
</div>`,
      },
      {
        name: 'Hermes, Artemis và Ares',
        content: `<div style="text-align: justify; visibility: visible; animation-name: fadeIn;" class="wow fadeIn">
<p>Thần HERMES (Thần thoại La Mã gọi là Mercury) là sứ giả đưa tin của các vị thần và là người dẫn đường cho các linh hồn sau khi chết xuống địa phủ. Bản tính Hermes vốn hiếu động thông minh từ nhỏ. Chàng từng giúp đỡ các anh hùng Odysseus và Perseus trong những cuộc đi săn của họ.</p>
<p>Hermes là con trai thần Zeus và một nữ thần núi.&nbsp;<span id="more-1158"></span>Khi mới ra đời chàng đã tỏ ra vô cùng tinh khôn.Thuở thiếu thời có lần chàng tìm thấy một cái mai rùa rỗng và đã để ý thấy tiếng vang từ trong đó. Chàng đã cột các sợi gân vào khe mai và tạo ra chiếc đàn lia đầu tiên.</p>
<p>Hermes được mọi người biết đến bởi sự giúp ích của chàng đối với loài người, bằng tài năng của một người đưa tin lẫn những sáng kiến của chàng. Khi Perseus quyết định giáp mặt với Gorgon Medusa, Hermes đã giúp người anh hùng này. Theo một bản thần thoại thì Hermes đã cho Perseus mượn đôi giày phép thuật của mình, ai mang nó vào sẽ bay được.</p>
<p>Có người cho rằng Hermes đã cho Perseus mượn một cái mũ tàng hình. Đây chính là chiếc mũ bóng đêm, cũng giống như cái mũ mà Hermes đội khi chàng đánh bại tên khổng lồ Hippolytus. Chuyện xảy ra khi những đứa con trai khổng lồ của mặt đất ngoi lên định soán quyền với các vị thần trên đỉnh Olympus.</p>
<p>Biểu tượng nghề nghiệp của Hermes với tư cách sứ giả chính là chiếc đũa caduceus.</p>
<p>Nguồn gốc của nó là một nhánh cây liễu có nhiều dây ruybăng quấn quan, theo truyền thống là huy hiệu của người đưa tin. Nhưng các dải ruybăng về sau lại được liên hệ đến hình ảnh loài rắn. Để củng cố cho điều này, một câu chuyện cho rằng Hermes đã dùng chiếc đũa thần để tách 2 con rắn đang cắn nhau ra, sau đó chúng đã quấn mình quanh cây đũa cùng chung sống trong hòa bình.</p>
<p>Nhiệm vụ của Hermes là dẫn dắt các linh hồn sau khi chết đi xuống địa phủ. Vì là người bảo trợ cho những linh hồn nên chàng thường đội một cái mũ bằng rơm rực rỡ ánh sáng. Hermes được gọi là Mercury trong thần thoại La Mã. Hình ảnh nổi tiếng nhất về chàng là một bức tượng do Bellini điêu khắc thể hiện chàng nhanh nhẹn trên 1 chân, ở gót có cánh, chiếc đũa rắn cầm tay và ở trên đầu là một thứ kết hợp giữa chiếc mũ tàng hình và chiếc mũ ánh sáng.</p>
<p>o O o</p>
<p>ARTEMIS (Thần thoại La Mã gọi là Diana) là Nữ Thần đồng trinh (Nàng đã xin phụ vương Zeus cho Nữ Thần đồng trinh không bao giờ phải yêu) cai quản việc săn bắn. Nàng giúp đỡ những người phụ nữ trong việc sinh nở nhưng cũng mang đến những cái chết bất ngờ với những mũi tên của mình.</p>
<p>Artemis và anh trai Apollo là con của Zeus và Leto. Trong vài phiên bản Thần thoại khác thì Artemis được sinh ra trước và giúp đỡ Mẹ của mình sanh ra Apollo.</p>
<p>Niobe, nữ hoàng thành Thebes, đã khoe khoang là hơn hẳn Leto vì có nhiều con trong khi Nữ Thần Leto chỉ có 2 người con. Artemis và Apollođã rửa nhục cho mẹ bằng cách dùng tên lần lượt giết tất cả những đứa con của Niobe. Trước cái chết của các con mình, Niobe đau lòng than khóc đến khi hoá đá vẫn chưa nguôi.</p>
<p>Để ý thấy em gái suốt ngày đi săn với tên khổng lồ Orion, Apollo quyết định chấm dứt mối quan hệ này. Thần thách Artemis chứng tỏ tài nghệ của mình bằng cách bắn vào một vật đang trôi ngoài biển. Những phát bắn của Nữ Thần đều rất hoàn hảo. Sau đó nàng mới biết vật đó là cái đầu của Orion.</p>
<p>Artemis thường được miêu tả như một thiếu nữ trẻ mặc bộ áo quần làm bằng da hươu, vai đeo một cánh cung và một bao tên. Nàng thường được các động vật hoang dã như hươu hoặc gấu cái hộ tống.</p>
<p>o O o</p>
<p>ARES (Thần thoại La Mã gọi là MARS) là Thần chiến tranh, hay chính xác hơn là vị thần của những kẻ cuồng loạn hiếu chiến. Là một vị thần bất tử nhưng Ares đã bị Harales đánh bại trong một trận đánh và có lần còn suýt bị hai tên khổng lồ giết chết. Khi bị thương trong cuộc chiến thành Troy, thần đã không được phụ vương Zeus đoái hoài gì đến.<br>
Thần Ares có diện mạo khôi ngô nhưng bản tính rất tàn bạo. Thần thường được miêu tả cầm một ngọn giáo dính máu đỏ tươi. Tương truyền chiếc ngai của Thần trên đỉnh Olympus được bọc kín bằng da người.</p>
<p>Thần Mars trong thần thoại La Mã và thần Ares được xem là như nhau. Mars là cha của Romulus và Remus, hai huyền thoại sáng lập ra thành Rome. Vì vậy đối với dân La Mã thần Mars có vị trí quan trọng hơn và được sùng kính hơn</p>
</div>`,
      },
    ],
  }

async function main() {
  console.log('Start seeding...')

  for (const category of categories) {
    const res = await prisma.category.upsert({
      where: { name: category.name },
      create: {
        ...category,
        type: 'STORY',
      },
      update: {},
    })

    console.log(`Created category: ${res.name}`)

    for (const story of stories[res.name]) {
      if (!story) {
        continue
      }

      await prisma.story.upsert({
        where: {
          name: story.name,
        },
        create: {
          name: story.name,
          content: story.content,
          categoryId: res.id,
        },
        update: {},
      })

      console.log(`Created story: ${story.name}`)
    }
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
