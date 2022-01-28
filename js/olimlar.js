import { writeProffessor } from "./firebase.js"
import { createElement } from "./function.js"
import { body } from "./function.js"

const twoDiv=document.querySelector('#twoPage')


const olimlar=[
    {
        ism:`O.S. Sodiqov`,
        img: 'https://upload.wikimedia.org/wikipedia/ru/7/73/%D0%90%D0%B1%D0%B8%D0%B4_%D0%A1%D0%B0%D0%B4%D1%8B%D0%BA%D0%BE%D0%B2%D0%B8%D1%87_%D0%A1%D0%B0%D0%B4%D1%8B%D0%BA%D0%BE%D0%B2.jpg',
        Tyil:1913,
        Vyil:1987,
        malumot:`O\'zFA akademigi,kimyo fanlari doktori, professor. 600 dan ortiq ilmiy maqolalari, 100 dan ortiq ixtirolari bor. G\'o\'zadan ajratib olingan moddalarni kompleks kimyoviy tekshirish natijalariga bag\'ishlangan ishlari uchun 1985-yilda D.I.Mendeleyev nomidagi oltin medal bilan taqdirlangan. «Mehnat Qahramoni» unvoniga sazovor bo\'lgan. O\'zFA Bioorganik kimyo institutiga asos solgan. Dunyoga mashhur bo\'lgan kimyogar olimlar kitobiga kiritilgan o'zbek olimi.`

},
{
    ism:`S.Y. Yunusov`,
    img:    'https://upload.wikimedia.org/wikipedia/ru/e/e0/%D0%AE%D0%BD%D1%83%D1%81%D0%BE%D0%B2_%D0%A1%D0%B0%D0%B1%D0%B8%D1%80_%D0%AE%D0%BD%D1%83%D1%81%D0%BE%D0%B2%D0%B8%D1%87.jpg',
    Tyil:1909,
    Vyil:1991,
    malumot:`O'zFA akademigi, kimyo fanlari doktori, professor. 600 dan ortiq ilmiy maqolalar, 100 dan ortiq ixtirolar, 10 dan ortiq monografiyalar muallifi. 1969-yilda «Mehnat Qahramoni» unvoniga sazovor bo'lgan. D.I.Mendeleyev nomidagi oltin medal bilan taqdirlangan. O'zFA O'simlik moddalari kimyosi institutiga asos solgan va o'simlik moddalari kimyosi maktabini yaratgan. O'zbekistonda uchraydigan 3600 dan ortiq o'simlikda 2000 dan ortiq alkaloidlarni aniqlagan.`
},
    {
    ism:`N.A. Parpiyev`,
    img:    'https://uz.denemetr.com/tw_files2/urls_15/2/d-1637/7z-docs/1_html_2a956e15.png',
    Tyil:1931,
    Vyil:'y',
    malumot:`O'zFA akademigi, kimyo fanlari doktori, professor. O'zbekistonda xizmat ko'rsatgan fan arbobi. 700 dan ortiq maqola, 11 ta monografiya, 22 ta mualliflik guvohnomasi, 3 ta darslik muallifi. Ilmiy ishlari koordinatsion birikmalar stereokimyosi, ularning tuzilishiga bag'ishlangan. Molibden, reniy, volfram va simobni aniqlash hamda yuqori darajada toza molibden olishning termik usulini ishlab chiqqan.`
},
    {
    ism:`Sh.I. Solihov`,
    img:    'https://uz.denemetr.com/tw_files2/urls_15/2/d-1637/7z-docs/1_html_m4df7aab7.png',
    Tyil:1944,
    Vyil:'y',
    malumot:`O'zFA akademigi,  biologiya fanlari doktori, professor. O'zbekistond xizmat ko'rsatgan fan arbobi, 350 dan ortiq ilmiy maqolalar, monografiyalar, 100 tadan ortiq patentlar muallifi. Oqsillar kimyoviy tuzilishi va ularning organizmga ta’siri to'g'risida ilmiy maktab yaratgan. Olimning 10 ga yaqin preparatlari tibbiyot amaliyotiga joriy etilgan. Uning rahbarligida olingan feromon tutqichlari mamlakatimiz paxtachiligini zararkunandalardan himoya qilishda qo'llanilmoqda`
},
]


olimlar.map((item,index)=>{
    writeProffessor(index,item.ism,item.Tyil,item.Vyil,item.img,item.malumot)
})

const prof=(data)=>{
    // twoDiv.innerHTML=''
    const sectOlimlar =createElement('section','','bg-dark  py-5',twoDiv)
    const h1Olimlar = createElement('h1','O\'zbekistondan kimyo faniga hissa qo\'shgan olimlar','text-center text-danger  ', sectOlimlar)
    const container=createElement('div','','container  ',sectOlimlar)
    const row=createElement('div','','row',container)
    const olimlar=Object.entries(data)
    olimlar.map((item)=>{
        const col=createElement('div','','col-md-6 col-lg-4 p-3 ',row)
        const cards = createElement('div','',' cards p-2',col)
        const img = createElement('img','','',cards)
        img.src=item[1].imgUrl
        const name = createElement('h1',`${item[1].fio      }`,'text-center',cards)
        const dateT =createElement('p',`(${item[1].tyil}-${item[1].vyil})`,'text-center',cards)
        col.addEventListener('click',()=>{
           buyurtma(item[1])
        })
    })
}


const buyurtma =(data)=>{
    console.log('sa');
    const divRamazon = createElement('div','','divRamazon',body)
    divRamazon.id='divRamazon'
    if(divRamazon.classList.contains('d-none'))
        {divRamazon.classList.remove('d-none') }
    const cardRam=createElement('div','','cardRam p-3',divRamazon)
    const imgDiv=createElement('div','','text-center',cardRam)
    const imgRam=createElement('img','',' imgRam img-center',imgDiv)
    imgRam.src=`${data.imgUrl}`
    const iconRamCard=createElement('i','','fas fa-times ',cardRam)
    iconRamCard.addEventListener('click',()=>{divRamazon.classList.add('d-none')})
    const h1Ram=createElement('h1',`${data.fio}`,'text-dander px-5 py-2',cardRam)
    const pRam=createElement('p',`${data.malumot}`,'text-dark px-5 py-2 pRam' ,cardRam)
    
}
export {prof}