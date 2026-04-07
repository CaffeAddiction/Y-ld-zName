export const zodiacSigns = [
  {
    id: 'koc',
    name: 'Koç',
    symbol: '♈',
    dates: '21 Mart - 19 Nisan',
    element: 'Ateş',
    planet: 'Mars',
    color: '#ff4444',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    id: 'boga',
    name: 'Boğa',
    symbol: '♉',
    dates: '20 Nisan - 20 Mayıs',
    element: 'Toprak',
    planet: 'Venüs',
    color: '#4caf50',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    id: 'ikizler',
    name: 'İkizler',
    symbol: '♊',
    dates: '21 Mayıs - 20 Haziran',
    element: 'Hava',
    planet: 'Merkür',
    color: '#ffeb3b',
    gradient: 'from-yellow-400 to-amber-500',
  },
  {
    id: 'yengec',
    name: 'Yengeç',
    symbol: '♋',
    dates: '21 Haziran - 22 Temmuz',
    element: 'Su',
    planet: 'Ay',
    color: '#90caf9',
    gradient: 'from-blue-300 to-cyan-400',
  },
  {
    id: 'aslan',
    name: 'Aslan',
    symbol: '♌',
    dates: '23 Temmuz - 22 Ağustos',
    element: 'Ateş',
    planet: 'Güneş',
    color: '#ff9800',
    gradient: 'from-orange-400 to-yellow-500',
  },
  {
    id: 'basak',
    name: 'Başak',
    symbol: '♍',
    dates: '23 Ağustos - 22 Eylül',
    element: 'Toprak',
    planet: 'Merkür',
    color: '#8d6e63',
    gradient: 'from-amber-700 to-yellow-800',
  },
  {
    id: 'terazi',
    name: 'Terazi',
    symbol: '♎',
    dates: '23 Eylül - 22 Ekim',
    element: 'Hava',
    planet: 'Venüs',
    color: '#e91e90',
    gradient: 'from-pink-500 to-rose-400',
  },
  {
    id: 'akrep',
    name: 'Akrep',
    symbol: '♏',
    dates: '23 Ekim - 21 Kasım',
    element: 'Su',
    planet: 'Plüton',
    color: '#9c27b0',
    gradient: 'from-purple-600 to-violet-700',
  },
  {
    id: 'yay',
    name: 'Yay',
    symbol: '♐',
    dates: '22 Kasım - 21 Aralık',
    element: 'Ateş',
    planet: 'Jüpiter',
    color: '#7c4dff',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'oglak',
    name: 'Oğlak',
    symbol: '♑',
    dates: '22 Aralık - 19 Ocak',
    element: 'Toprak',
    planet: 'Satürn',
    color: '#607d8b',
    gradient: 'from-slate-500 to-gray-600',
  },
  {
    id: 'kova',
    name: 'Kova',
    symbol: '♒',
    dates: '20 Ocak - 18 Şubat',
    element: 'Hava',
    planet: 'Uranüs',
    color: '#00bcd4',
    gradient: 'from-cyan-400 to-teal-500',
  },
  {
    id: 'balik',
    name: 'Balık',
    symbol: '♓',
    dates: '19 Şubat - 20 Mart',
    element: 'Su',
    planet: 'Neptün',
    color: '#3f51b5',
    gradient: 'from-blue-500 to-indigo-600',
  },
];

const dailyReadings = {
  koc: [
    'Bugün enerjiniz zirve noktasında! Yeni bir projeye başlamak için ideal bir gün. Mars\'ın etkisiyle cesaret ve kararlılığınız artacak. Aşk hayatınızda sürpriz gelişmeler yaşanabilir.',
    'Bugün finansal konularda dikkatli olmanız gerekiyor. Ani kararlar vermekten kaçının. Akşam saatlerinde gelen bir haber moralinizi yükseltecek.',
    'Yıldızlar bugün sosyal ilişkilerinizi ön plana çıkarıyor. Eski bir dostunuzdan haber alabilirsiniz. İş hayatınızda yeni kapılar açılmak üzere.',
    'Bugün içsel dönüşüm enerjileri güçlü. Meditasyon ve kendine zaman ayırma günü. Sağlık konularında pozitif gelişmeler sizi bekliyor.',
    'Kariyer odaklı bir gün sizi bekliyor. Liderlik yetenekleriniz ön plana çıkacak. Akşam romantik bir sürpriz olabilir.',
  ],
  boga: [
    'Maddi konularda şansınız açık! Venüs\'ün etkisiyle güzellik ve estetik duygunuz artacak. Sevdiklerinizle kaliteli zaman geçirmek ruhunuzu besleyecek.',
    'Bugün sabırlı olmanız gereken konular karşınıza çıkabilir. Pratik zekânız size yol gösterecek. Akşam saatlerinde rahatlatıcı bir haber alabilirsiniz.',
    'Doğa ile bağlantı kurmak bugün size iyi gelecek. Finansal planlarınızı gözden geçirmek için uygun bir gün. Aşkta sadakat teması ön planda.',
    'Bugün yaratıcılığınız dorukta olacak. Sanatsal aktiviteler ruhunuzu besler. İş yerinde takdir göreceksiniz.',
    'Güvenlik ve konfor ihtiyacınız artabilir. Evinize küçük dokunuşlar yapma günü. Sağlıkta olumlu sinyaller var.',
  ],
  ikizler: [
    'İletişim yetenekleriniz bugün zirve yapıyor! Merkür\'ün desteğiyle fikirleriniz parlayacak. Yeni insanlarla tanışmak için harika bir gün.',
    'Bugün çok yönlü düşünme kapasiteniz size avantaj sağlayacak. Kısa yolculuklar söz konusu olabilir. Öğrenme ve keşfetme arzunuz artacak.',
    'Sosyal medya ve iletişim kanallarından güzel haberler gelebilir. Kardeş veya yakın akrabalarla iletişim güçlenecek.',
    'Bugün merak duygunuz sizi yeni maceralara sürükleyebilir. Kitap okumak veya yeni bir şey öğrenmek için ideal gün.',
    'Zihinsel enerjiniz yüksek, ancak odaklanma konusunda zorlanabilirsiniz. Listeler yaparak gününüzü planlayın.',
  ],
  yengec: [
    'Duygusal derinlik bugün sizin güçlü yanınız. Ay\'ın etkisiyle sezgileriniz çok güçlü. Aile ile ilgili güzel gelişmeler yaşanabilir.',
    'Bugün ev ve yuva konuları ön planda. Evinize yeni bir şeyler ekleme isteği duyabilirsiniz. Nostalji dalgaları gelebilir.',
    'Sezgilerinize güvenin, sizi doğru yöne yönlendirecekler. Bir yakınınızın ihtiyacını hissedebilir ve ona destek olabilirsiniz.',
    'Bugün duygusal güvenlik ihtiyacınız artabilir. Sevdiklerinizle samimi sohbetler ruhunuzu besleyecek.',
    'Yaratıcılık ve hayal gücünüz bugün çok güçlü. Sanatsal projeler için ilham dolu bir gün. Mutfakta yeni tarifler deneyebilirsiniz.',
  ],
  aslan: [
    'Güneş\'in gücüyle bugün ışıldayacaksınız! Sahne sizin, yeteneklerinizi gösterin. Romantik ilişkilerde tutku artıyor.',
    'Bugün liderlik enerjiniz çok yüksek. Çevrenizdekiler sizden ilham alacak. Yaratıcı projeler için mükemmel bir gün.',
    'Cömertliğiniz bugün takdir görecek. Sosyal etkinlikler ve toplantılar sizin lehinize gelişecek.',
    'Bugün kendinize yatırım yapma günü. Kişisel bakım ve stil konularında kendinizi şımartın. Özgüveniniz zirve yapacak.',
    'Sahne sanatları ve eğlence bugün size iyi gelecek. Çocuklarla vakit geçirmek neşe kaynağı olabilir.',
  ],
  basak: [
    'Detaylara olan dikkatiniz bugün size büyük avantaj sağlayacak. Merkür\'ün etkisiyle analitik düşünce gücünüz artıyor. Sağlık rutininize yeni bir şeyler ekleyin.',
    'Bugün düzen ve organizasyon konularında başarılı olacaksınız. İş hayatında verimlilik artacak. Sağlıklı beslenmeye özen gösterin.',
    'Pratik zekânız bugün parlıyor. Sorunlara çözüm üretme kapasiteniz artmış durumda. Bir yakınınıza yardım etme fırsatı doğabilir.',
    'Bugün mükemmeliyetçi yönünüzü biraz gevşetin. Her şeyin kusursuz olması gerekmiyor. Kendinize nazik davranın.',
    'Sağlık ve wellness konularında yeni rutinler oluşturmak için ideal bir gün. Doğa yürüyüşü iyi gelecektir.',
  ],
  terazi: [
    'Denge ve uyum enerjileri bugün sizinle! Venüs\'ün desteğiyle ilişkileriniz güçlenecek. Estetik ve sanat alanında ilham alacaksınız.',
    'Bugün diplomatik yetenekleriniz ön plana çıkacak. Anlaşmazlıkları çözme konusunda başarılı olacaksınız. Güzellik ve bakım rutini iyi gelecek.',
    'Ortaklık ve işbirliği konuları bugün şanslı. Yeni bir partnerlikle karşılaşabilirsiniz. Sosyal hayatınız canlanacak.',
    'Bugün adalet duygunuz güçlü. Haksızlıklara karşı sesinizi yükseltebilirsiniz. Sanatsal aktiviteler ruhunuzu besleyecek.',
    'Romantizm bugün havada. Partnerinizle özel bir akşam planlayın veya yeni biriyle tanışma şansınız yüksek.',
  ],
  akrep: [
    'Derin duyguların günü! Plüton\'un etkisiyle dönüşüm enerjileri güçlü. Gizemli bir konu hakkında gerçekleri keşfedebilirsiniz.',
    'Bugün sezgisel güçleriniz dorukta. İç sesinizi dinleyin. Finansal konularda stratejik düşünme zamanı.',
    'Dönüşüm ve yenilenme enerjileri güçlü. Eski alışkanlıklardan kurtulma zamanı. Derin araştırmalar verimli olacak.',
    'Bugün tutku ve kararlılık enerjiniz yüksek. Hedefinize doğru kararlı adımlar atabilirsiniz. Gizli yetenekleriniz ortaya çıkabilir.',
    'Psikolojik derinlik bugün size güç veriyor. Terapötik aktiviteler faydalı olacak. Güven konuları gündeme gelebilir.',
  ],
  yay: [
    'Macera ruhu bugün sizinle! Jüpiter\'in bereketiyle şans kapıları aralanıyor. Yeni yerler keşfetmek ve öğrenmek için harika bir gün.',
    'Bugün iyimserliğiniz bulaşıcı olacak. Felsefi sohbetler ve entelektüel tartışmalar size ilham verecek. Yolculuk planları yapabilirsiniz.',
    'Özgürlük ihtiyacınız bugün artabilir. Rutinden kaçış arayışı güçlü. Yabancı kültürlerle ilgili konular ilginizi çekecek.',
    'Bugün eğitim ve öğrenme konuları şanslı. Yeni bir kurs veya workshop düşünebilirsiniz. Spor aktiviteleri enerji verecek.',
    'Vizyon ve büyük resmi görme yeteneğiniz bugün güçlü. Uzun vadeli planlar yapma zamanı. Şans oyunlarında dikkatli olun.',
  ],
  oglak: [
    'Disiplin ve kararlılık bugün en güçlü silahınız. Satürn\'ün desteğiyle uzun vadeli hedeflerinize yaklaşıyorsunuz. Kariyer atılımı zamanı.',
    'Bugün sorumluluk duygunuz artacak. Profesyonel ilişkilerde güven inşa etme zamanı. Sabırlı olmanız ödüllendirilecek.',
    'Pratik ve gerçekçi yaklaşımınız bugün takdir görecek. Finansal planlamalar için uygun bir gün. Geleneksel değerler ön planda.',
    'Bugün liderlik ve yönetim becerileri parlıyor. Zor kararlar alma konusunda cesur olun. Aile büyükleriyle iletişim güçlenecek.',
    'Kariyer hedeflerinize odaklanma günü. Disiplinli çalışma meyvelerini verecek. Akşam dinlenmeye vakit ayırın.',
  ],
  kova: [
    'Yenilikçi fikirler bugün akmaya devam ediyor! Uranüs\'ün etkisiyle sıra dışı çözümler bulacaksınız. Sosyal projeler için harika bir gün.',
    'Bugün özgün düşünce yapınız ön plana çıkacak. Teknoloji ile ilgili yenilikler ilginizi çekecek. Arkadaş gruplarında liderlik üstlenebilirsiniz.',
    'İnsani değerler ve toplumsal konular bugün gündemde. Gönüllü çalışmalar veya sosyal sorumluluk projeleri düşünebilirsiniz.',
    'Bugün bağımsızlık ihtiyacınız artabilir. Kendi alanınıza çekilme isteği hissedebilirsiniz. Teknolojik projeler verimli olacak.',
    'Gelecek vizyonunuz bugün netleşiyor. İnovatif fikirler ve projeler için ilham dolu bir gün. Grup aktiviteleri keyifli geçecek.',
  ],
  balik: [
    'Sezgiler ve rüyalar bugün çok güçlü! Neptün\'ün büyüsüyle yaratıcılığınız sınır tanımıyor. Sanatsal çalışmalar için muhteşem bir gün.',
    'Bugün empati gücünüz dorukta. Çevrenizdeki insanların duygularını derinden hissedeceksiniz. Spiritüel aktiviteler faydalı olacak.',
    'Hayal gücünüz bugün sınırsız. Yaratıcı projeler ve sanatsal ifade için ideal bir gün. Müzik dinlemek ruhunuzu besleyecek.',
    'Bugün içsel huzur arayışınız güçlü. Meditasyon ve yoga gibi aktiviteler çok faydalı olacak. Sezgilerinize güvenin.',
    'Romantizm ve hayal gücü bugün birleşiyor. Şiir, müzik ve sanat ilham kaynağınız olacak. Rüyalarınız mesajlar içerebilir.',
  ],
};

const weeklyReadings = {
  koc: 'Bu hafta Mars\'ın etkisiyle cesaret ve girişimcilik enerjiniz tavan yapacak. Hafta ortasında kariyer ile ilgili önemli bir karar almak zorunda kalabilirsiniz. Cuma günü aşk hayatınızda güzel bir sürpriz sizi bekliyor. Hafta sonu enerji depolamak için spor yapmanız önerilir. Finansal konularda dikkatli olun, impulsif harcamalardan kaçının.',
  boga: 'Bu hafta finansal konularda şanslı dönemdesiniz. Yatırım fırsatları kapınızı çalabilir. Hafta ortasında sevdiğiniz biriyle önemli bir konuşma yapmanız gerekebilir. Perşembe günü yaratıcılığınız dorukta olacak. Hafta sonu doğayla iç içe vakit geçirmek ruhunuzu tazeleyecek.',
  ikizler: 'Bu hafta iletişim yetenekleriniz zirve yapacak. Önemli toplantılar ve sunumlar lehinize gelişecek. Çarşamba günü sürpriz bir teklif alabilirsiniz. Hafta ortasında kısa bir seyahat gündeme gelebilir. Hafta sonu sosyal etkinliklerde yıldızınız parlayacak.',
  yengec: 'Bu hafta duygusal derinlik ve aile bağları ön planda. Pazartesi günü güçlü sezgileriniz sizi doğru yönlendirecek. Hafta ortasında ev ile ilgili güzel haberler alabilirsiniz. Cuma günü nostalji dalgaları gelebilir. Hafta sonu sevdiklerinizle kaliteli zaman geçirin.',
  aslan: 'Bu hafta sahne tamamen sizin! Sosyal hayatınız canlanacak ve dikkat çekeceksiniz. Salı günü kariyer ile ilgili heyecan verici bir gelişme yaşanabilir. Hafta ortasında yaratıcı projeler için ilham alacaksınız. Hafta sonu romantik bir kaçamak planlayabilirsiniz.',
  basak: 'Bu hafta detaylara dikkat etmeniz büyük kazanımlar sağlayacak. Pazartesi günü iş yükü artabilir ama başarıyla üstesinden geleceksiniz. Çarşamba günü sağlık rutininize yeni bir şey ekleme zamanı. Cuma günü bir arkadaşınızdan güzel bir haber alacaksınız.',
  terazi: 'Bu hafta ilişkiler ve ortaklıklar ön planda. Venüs\'ün desteğiyle aşk hayatınız güzelleşecek. Hafta ortasında diplomatik yetenekleriniz iş hayatında işe yarayacak. Perşembe günü estetik ve güzellik konularında ilham alacaksınız. Hafta sonu sosyal aktiviteler keyifli geçecek.',
  akrep: 'Bu hafta dönüşüm enerjileri güçlü. Eski kalıpları kırma ve yenilenme zamanı. Salı günü finansal konularda stratejik bir hamle yapabilirsiniz. Hafta ortasında gizli bir bilgi ortaya çıkabilir. Hafta sonu içsel yolculuk ve meditasyon faydalı olacak.',
  yay: 'Bu hafta macera ve keşif ruhu dorukta! Yeni yerler ve yeni insanlar sizi bekliyor. Pazartesi günü iyimserliğiniz bulaşıcı olacak. Çarşamba günü eğitim ile ilgili güzel haberler gelebilir. Hafta sonu uzun bir yolculuk planı yapabilirsiniz.',
  oglak: 'Bu hafta kariyer odaklı bir dönemdesiniz. Disiplinli çalışmalarınız meyvesini verecek. Salı günü önemli bir toplantıda parlayacaksınız. Hafta ortasında finansal konularda olumlu gelişmeler var. Hafta sonu aile ile kaliteli vakit geçirme zamanı.',
  kova: 'Bu hafta yenilikçi fikirlere açık olun. Teknoloji ile ilgili projeler şanslı. Pazartesi günü arkadaş çevrenizdenbir sürpriz gelebilir. Hafta ortasında sosyal sorumluluk projeleri ilginizi çekecek. Hafta sonu grup aktiviteleri enerjinizi yükseltecek.',
  balik: 'Bu hafta sezgiler ve yaratıcılık dorukta. Sanatsal projeler için mükemmel bir hafta. Salı günü rüyalarınız önemli mesajlar içerebilir. Hafta ortasında spiritüel bir deneyim yaşayabilirsiniz. Hafta sonu müzik ve sanat ile iç içe olun.',
};

const monthlyReadings = {
  koc: 'Bu ay Mars\'ın güçlü etkisiyle enerjiniz ve motivasyonunuz doruk noktasında olacak. Kariyer hayatında büyük fırsatlar kapınızı çalabilir. Ayın ilk haftasında alacağınız kararlar uzun vadede etkili olacak. Orta haftada aşk hayatınızda sürpriz gelişmeler yaşanabilir. Mali konularda dikkatli olun; yatırımlarınızı çeşitlendirmek akıllıca olacaktır. Sağlık açısından enerji dolu bir ay sizi bekliyor ancak aşırıya kaçmamaya dikkat edin. Ayın sonlarına doğru sosyal çevreniz genişleyecek ve yeni bağlantılar kuracaksınız.',
  boga: 'Bu ay Venüs\'ün uyumlu açılarıyla güzellik, konfor ve maddi konularda şanslı bir dönemdesiniz. Finansal fırsatlar ayın başında kendini gösterecek. İlişkilerinizde derinlik ve bağlılık artacak. Kariyer konusunda sabırlı ama kararlı adımlar atmalısınız. Ayın ortasında kreativite enerjiniz yükselecek. Sağlık konusunda dengeli beslenmeye ve düzenli egzersize özen gösterin. Ayın sonlarında mülk veya yatırım ile ilgili güzel haberler alabilirsiniz.',
  ikizler: 'Bu ay Merkür\'ün hareketliliğiyle iletişim ve öğrenme konularında altın bir dönemdesiniz. Yeni projeler, eğitimler ve sosyal bağlantılar ayın ilk haftasında başlayacak. Kariyer hayatınızda çok yönlülüğünüz avantaj sağlayacak. Ayın ortasında seyahat veya kısa geziler gündeme gelebilir. Aşk hayatında ilginç tanışmalar olası. Finansal açıdan gelir artışı bekleniyor. Ayın sonuna doğru öğrendiğiniz yeni beceriler işinize yarayacak.',
  yengec: 'Bu ay Ay\'ın güçlü etkisiyle duygusal derinlik ve aile bağları ön plana çıkacak. Ev ve yuva ile ilgili önemli kararlar alabilirsiniz. Ayın başında sezgileriniz çok güçlü olacak. Kariyer konusunda duygusal zekânız size avantaj sağlayacak. Ortasında nostaljik anılar ve eski bağlantılar gündeme gelebilir. Finansal güvenlik konusu önemli olacak. Ayın sonlarında aile ile ilgili kutlama veya güzel haberler sizi bekliyor.',
  aslan: 'Bu ay Güneş\'in parlaklığıyla sahne tamamen sizin! Sosyal hayatınız canlanacak ve liderlik yetenekleriniz takdir görecek. Kariyer atılımı için ayın ilk haftası kritik. Yaratıcı projeler ve sanatsal ifade için mükemmel bir dönem. Aşk hayatında tutku ve romantizm artıyor. Ayın ortasında finansal bir fırsat değerlendirilebilir. Sonuna doğru kişisel gelişim ve öz güven konularında zirve yapacaksınız.',
  basak: 'Bu ay Merkür\'ün desteğiyle analitik düşünce ve detay odaklı çalışmalarınız parlayacak. İş hayatında verimlilik artacak. Sağlık rutininizi yenileme zamanı geldi. Ayın başında organizasyon ve planlama konularında başarılı olacaksınız. Ortasında bir iş arkadaşınızla güçlü bir işbirliği kurabilirsiniz. Finansal konularda tutumluluk önerilir. Ayın sonunda kendinize ödül vermekten çekinmeyin.',
  terazi: 'Bu ay Venüs\'ün zarif etkisiyle ilişkiler, güzellik ve uyum temaları hayatınızda belirleyici olacak. Aşk hayatınızda önemli gelişmeler bekleniyor. Kariyer konusunda diplomatik yaklaşımınız kapılar açacak. Ayın başında ortaklık teklifleri gelebilir. Estetik ve sanat alanında ilham bulacaksınız. Finansal konularda denge önemli. Ayın sonuna doğru sosyal çevreniz genişleyecek ve prestijli davetler alabilirsiniz.',
  akrep: 'Bu ay Plüton\'un derin etkisiyle dönüşüm, yenilenme ve içsel güç temaları ön plana çıkacak. Eski alışkanlıklardan kurtulma zamanı. Kariyer hayatında stratejik hamleler yapabilirsiniz. Ayın başında finansal konularda önemli kararlar alacaksınız. Ortasında gizli kalmış bilgiler ortaya çıkabilir. Aşk hayatında yoğun duygular ve tutku bekleniyor. Ayın sonunda ruhsal yenilenme ve güçlenme hissedeceksiniz.',
  yay: 'Bu ay Jüpiter\'in bereketiyle macera, genişleme ve büyüme temaları hayatınızda belirleyici olacak. Eğitim ve öğrenme konularında şanslı bir dönem. Kariyer hayatında uluslararası bağlantılar güçlenebilir. Ayın başında seyahat planları şekillenecek. Ortasında felsefi ve spiritüel konulara ilginiz artacak. Finansal genişleme bekleniyor. Ayın sonuna doğru özgürlük hissi ve yeni ufuklar sizi bekliyor.',
  oglak: 'Bu ay Satürn\'ün disiplinli etkisiyle kariyer, sorumluluk ve uzun vadeli hedefler ön planda olacak. Profesyonel başarılar için zemin hazırlanıyor. Ayın başında önemli bir proje veya sorumluluk üstlenebilirsiniz. Finansal konularda tutumlu ve planlı olmak ödüllendirilecek. Ortasında liderlik yetenekleriniz takdir görecek. Aşk hayatında olgun ve derin bağlar kurulabilir. Ayın sonunda emeklerinizin karşılığını almaya başlayacaksınız.',
  kova: 'Bu ay Uranüs\'ün yenilikçi etkisiyle teknoloji, sosyal projeler ve özgün fikirler hayatınızda belirleyici olacak. Yeni ve sıra dışı fırsatlar kapınızı çalabilir. Ayın başında arkadaş çevrenizden sürpriz haberler gelebilir. Kariyer konusunda inovatif projeler şanslı. Ortasında sosyal sorumluluk projeleri ilginizi çekecek. Finansal konularda beklenmedik gelişmeler olabilir. Ayın sonuna doğru bağımsızlık ve özgürlük hissiniz artacak.',
  balik: 'Bu ay Neptün\'ün gizemli etkisiyle sezgiler, yaratıcılık ve spiritüel konular ön plana çıkacak. Sanatsal projeler için altın bir dönem başlıyor. Ayın başında rüyalarınız önemli mesajlar taşıyabilir. Kariyer konusunda yaratıcılığınızı kullanma fırsatları doğacak. Ortasında empati gücünüz sayesinde yakın ilişkileriniz derinleşecek. Finansal konularda sezgilerinize güvenin. Ayın sonuna doğru içsel huzur ve manevi doyum hissedeceksiniz.',
};

const dailyQuotes = {
  koc: [
    'Cesaret, korkunun yokluğu değil, korkuya rağmen ilerleme gücüdür.',
    'Yeni başlangıçlar, yeni zaferlerin habercisidir.',
    'Ateşin içinden geçen altın, daha parlak çıkar.',
    'Liderlik, başkalarına yol göstermekle başlar.',
    'En uzun yolculuk, ilk adımla başlar.',
    'Savaşçı ruhu, asla pes etmeyen kalptir.',
    'Cesaretin ödülü, henüz keşfedilmemiş topraklardır.',
  ],
  boga: [
    'Sabır, en güçlü savaşçıdır.',
    'Doğanın güzelliği, sabrın mükafatıdır.',
    'Sağlam temeller üzerine inşa edilen hayat, fırtınalara dayanır.',
    'Gerçek zenginlik, huzur ve mutluluktur.',
    'Toprağa ekilen her tohum, zamanla meyve verir.',
    'Sadakat, kalbin en saf dilidir.',
    'Konfor alanını genişlet, hayat genişlesin.',
  ],
  ikizler: [
    'Her yeni bilgi, evrene açılan bir penceredir.',
    'İletişim, kalpleri birbirine bağlayan köprüdür.',
    'Merak, bilgeliğin ilk adımıdır.',
    'Çift yüzlü olmak değil, çok yönlü olmak gücümüzdür.',
    'Kelimeler, dünyayı değiştiren en güçlü silahtır.',
    'Her sohbet, yeni bir evrendir.',
    'Değişim, hayatın tek sabiti ve en büyük hediyesidir.',
  ],
  yengec: [
    'Ev, kalbin sığındığı limandır.',
    'Duyguların derinliği, ruhun zenginliğidir.',
    'Sezgiler, yıldızların fısıltısıdır.',
    'Sevgi, tüm kalkanları eritir.',
    'Aile, hayatın en değerli hazinesidir.',
    'Gözyaşları, ruhun arınma yoludur.',
    'Korumak, sevmenin en güçlü halidir.',
  ],
  aslan: [
    'Güneş gibi parla, gölgelerden korkma.',
    'Krallık, taçta değil yürekte yaşar.',
    'Işığını saklamak, dünyayı karanlıkta bırakmaktır.',
    'Sahne senindir, rolünü en iyi şekilde oyna.',
    'Asalet, başkalarını yükseltmektir.',
    'Tutku olmadan başarı, ruhu olmayan bir beden gibidir.',
    'Kalbinin sesini dinle, o her zaman doğruyu söyler.',
  ],
  basak: [
    'Detaylar, mükemmelliğin yapı taşlarıdır.',
    'Düzen, zihnin huzur bulduğu yerdir.',
    'Küçük adımlar, büyük yolculukları tamamlar.',
    'Hizmet etmek, en yüce erdemdir.',
    'Analiz, gerçeğin aynasıdır.',
    'Sağlık, hayatın en değerli sermayesidir.',
    'Mükemmellik bir hedef değil, bir yolculuktur.',
  ],
  terazi: [
    'Denge, evrenin en güzel senfonisidir.',
    'Güzellik, her yerde onu arayan gözlerdedir.',
    'Adalet, toplumun temel taşıdır.',
    'Uyum, iki farklı notanın birlikte çaldığı müziktir.',
    'İlişkiler, hayatın en güzel sanat eseridir.',
    'Barış, güçlülerin tercihidir.',
    'Zarafet, ruhun dışa yansımasıdır.',
  ],
  akrep: [
    'Karanlık olmadan, ışığın değeri anlaşılmaz.',
    'Dönüşüm, acının içinden geçen bir yeniden doğuştur.',
    'Derinlik, yüzeyde kalanların asla bilemeyeceği hazinedir.',
    'Sezgi, gözlerin göremediğini hisseden kalptir.',
    'Güç, en büyük fırtınada bile ayakta kalmaktır.',
    'Sırlar, evrenin en derin bilgelikleridir.',
    'Tutku, hayata anlam katan ateştir.',
  ],
  yay: [
    'Ufuk, sonsuzluğun davetiyesidir.',
    'Özgürlük, ruhun kanatlarıdır.',
    'Her yolculuk, yeni bir hikayenin başlangıcıdır.',
    'İyimserlik, karanlıkta bile ışık görebilmektir.',
    'Bilgelik, deneyimlerin süzülmüş özüdür.',
    'Macera, hayatın en güzel öğretmenidir.',
    'Sınırlar, sadece zihinde var olan ilüzyonlardır.',
  ],
  oglak: [
    'Sabır ve disiplin, başarının ikiz kardeşleridir.',
    'Zirveye ulaşmak, bir adım bir adım tırmanmaktır.',
    'Sorumluluk, güvenilir olmanın temelidir.',
    'Zaman, en değerli ve geri dönüşü olmayan hazinedir.',
    'Sağlam temeller, yüksek kuleler inşa eder.',
    'Azim, dağları bile yerinden oynatır.',
    'Olgunluk, deneyimlerin en güzel meyvesidir.',
  ],
  kova: [
    'Farklı olmak, evrenin sana verdiği en büyük hediyedir.',
    'Gelecek, bugün hayal edenlerin ellerinde şekillenir.',
    'İnsanlık, birlikte daha güçlüdür.',
    'Yenilik, cesaretin çocuğudur.',
    'Özgür düşünce, sınırsız olasılıklar demektir.',
    'Toplum için bir şey yapmak, kendini aşmaktır.',
    'Evren, açık zihinlere sırlarını fısıldar.',
  ],
  balik: [
    'Rüyalar, gerçeğin tohumlarıdır.',
    'Empati, ruhların birbirine dokunmasıdır.',
    'Hayal gücü, sonsuzluğun kapısıdır.',
    'Sanat, ruhun en saf ifadesidir.',
    'İç huzur, dış dünyanın en güzel yansımasıdır.',
    'Sezgiler, evrenin rehberleridir.',
    'Şefkat, dünyanın en güçlü ilacıdır.',
  ],
};

export function getDailyReading(signId) {
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
  const readings = dailyReadings[signId] || dailyReadings.koc;
  return readings[dayOfYear % readings.length];
}

export function getWeeklyReading(signId) {
  return weeklyReadings[signId] || weeklyReadings.koc;
}

export function getMonthlyReading(signId) {
  return monthlyReadings[signId] || monthlyReadings.koc;
}

export function getDailyQuote(signId) {
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
  const quotes = dailyQuotes[signId] || dailyQuotes.koc;
  return quotes[dayOfYear % quotes.length];
}

export function getCompatibility(signId) {
  const compatMap = {
    koc: { best: 'aslan', good: 'yay', neutral: 'ikizler' },
    boga: { best: 'basak', good: 'oglak', neutral: 'yengec' },
    ikizler: { best: 'terazi', good: 'kova', neutral: 'koc' },
    yengec: { best: 'akrep', good: 'balik', neutral: 'boga' },
    aslan: { best: 'yay', good: 'koc', neutral: 'terazi' },
    basak: { best: 'boga', good: 'oglak', neutral: 'akrep' },
    terazi: { best: 'ikizler', good: 'kova', neutral: 'aslan' },
    akrep: { best: 'yengec', good: 'balik', neutral: 'basak' },
    yay: { best: 'koc', good: 'aslan', neutral: 'kova' },
    oglak: { best: 'boga', good: 'basak', neutral: 'balik' },
    kova: { best: 'ikizler', good: 'terazi', neutral: 'yay' },
    balik: { best: 'akrep', good: 'yengec', neutral: 'oglak' },
  };
  return compatMap[signId] || compatMap.koc;
}

export function getLuckRatings(signId) {
  const today = new Date();
  const seed = today.getDate() + today.getMonth() * 31;
  const hash = (str) => {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = ((h << 5) - h + str.charCodeAt(i)) | 0;
    return Math.abs(h);
  };
  const base = hash(signId + seed);
  return {
    love: ((base % 5) + 6) / 10,
    career: (((base >> 3) % 5) + 6) / 10,
    health: (((base >> 6) % 5) + 6) / 10,
    finance: (((base >> 9) % 5) + 6) / 10,
  };
}
