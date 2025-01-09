import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const Navigate = useNavigate();
  //data

  const arr = [
    {
        id: "mourya",
        name: "Maurya Empire",
        year: "322 BCE – 185 BCE",
        description: "The Maurya Empire (322–185 BCE), founded by Chandragupta Maurya, was a significant Iron Age power based in Magadha, South Asia. It expanded under Chandragupta to include regions like Afghanistan and the northern Deccan. During Ashoka's reign, it briefly controlled much of the Indian subcontinent, excluding the deep south. The capital, Patliputra (modern Patna), was central to an economy bolstered by agriculture, trade, and infrastructure like the Uttarapath road. Ashoka's conversion to Buddhism after the Kalinga War led to widespread promotion of nonviolence and Buddhist missions, alongside environmental preservation. The empire is known for its artistic and architectural legacies, such as the Lion Capital of Ashoka, now India's national emblem. Archaeological links include Northern Black Polished Ware. Despite achievements, the period also saw a decline in women's rights and reinforcement of caste structures. The Mauryan administration was highly centralized and efficient, with policies of Dhamma ensuring harmony among diverse social groups. The decline of the Maurya Empire marked a significant political transition in ancient India.",
        num: 1
    },
    {
        id: "ganga",
        name: "Western Ganga dynasty",
        year: "350–999 CE",
        description: "The Western Ganga Dynasty (350–999 CE), an influential South Indian power, was centered in the present-day Karnataka region. Founded by Konganivarman, it ruled as an independent dynasty until the rise of the Cholas. The Ganga kings are known for their patronage of Jainism and contributions to temple architecture. Their influence extended over parts of Tamil Nadu and Andhra Pradesh, with the capital initially at Kolar and later at Talakad. The Gangas excelled in irrigation management, constructing reservoirs like the Ganganadu and promoting agricultural prosperity. Their administration was efficient, with local self-governance playing a key role. The dynasty's contributions to art and architecture include the Gomateshwara statue at Shravanabelagola, a symbol of Jain heritage. Cultural advancements under the Gangas saw the promotion of literature in Kannada and Sanskrit. Though their decline came with the Chola conquests, the Western Ganga Dynasty left a lasting legacy in South Indian history. Their temples are celebrated for intricate carvings that reflect both religious devotion and artistic excellence.",
        num: 2
    },
    {
        id: "chola",
        name: "Chola Empire",
        year: "848–1279 CE",
        description: "The Chola Empire (848–1279 CE), one of the longest-ruling dynasties in South India, rose to prominence under rulers like Rajaraja Chola I and his son Rajendra Chola I. They expanded the empire through military conquests across South India, Sri Lanka, and Southeast Asia, establishing it as a naval and economic powerhouse. The Cholas played a key role in spreading Tamil culture, art, and architecture abroad. The capital, Thanjavur, housed remarkable contributions like the Brihadeeswara Temple, a UNESCO World Heritage Site. The economy thrived on agriculture, inland trade, and maritime commerce across the Indian Ocean. The Cholas are renowned for their artistic excellence seen in bronze sculptures like the Nataraja and for their advanced irrigation systems including the Grand Anicut. Their administration was highly organized with a strong emphasis on local self-governance through village assemblies that empowered local leaders while maintaining central authority.",
        num: 3
    },
    {
        id: "rashtrakoota",
        name: "Rashtrakuta Dynasty",
        year: "753–983 CE",
        description: "The Rashtrakuta Dynasty (753–983 CE), one of the major Indian powers during the early medieval period, ruled from their capital at Manyakheta (modern-day Malkhed). The dynasty is known for its military conquests which included defeating the Pratiharas and the Palas while establishing a stronghold across present-day India including parts of Gujarat, Maharashtra, and Karnataka. Under rulers like Dantidurga and Krishna I, the Rashtrakutas became a major cultural and religious force patronizing literature art and both Jain and Hindu traditions. Their monumental architectural achievements include the Kailasa temple at Ellora which remains an engineering marvel today showcasing intricate rock-cut designs that reflect religious devotion and artistic skill. The dynasty's economy was driven by agriculture trade and a well-organized administrative system that facilitated governance across vast territories while fostering cultural exchanges between different communities.",
        num: 4
    },
    {
        id: "rajput",
        name: "Rajput Dynasty",
        year: "6th–16th century CE",
        description: "The Rajput Dynasty (6th–16th century CE) refers to a diverse collection of warrior clans in northern and central India who played a significant role in shaping Indian history through their valor chivalry and military prowess. Known for establishing powerful kingdoms such as Mewar Marwar and Jaipur these warrior clans defended their territories against invasions from formidable forces including Ghaznavids Ghurids while maintaining their unique cultural identities. The Rajputs were also patrons of art culture architecture building magnificent forts palaces temples that showcased their wealth power while enriching Indian heritage through vibrant paintings depicting royal life mythology which continue to inspire admiration today. Despite facing challenges from emerging powers like Mughal Empire they maintained significant influence until 17th century leaving behind a legacy evident in architectural marvels such as Amber Fort Udaipur’s City Palace which stand testament to their enduring spirit.",
        num: 5
    },
    {
      id: "chalukya",
      name: "Chalukya Dynasty",
      year: "6th–12th century CE",
      description: "The Chalukya Dynasty was a prominent Indian dynasty that ruled over large parts of southern and central India from around the 6th century until approximately 12th century CE. Known for its contributions to Indian architecture especially rock-cut temples at Badami along with structural temples at Pattadakal they played significant roles in shaping cultural heritage throughout this region during their reigns across various phases including Early Chalukyas of Badami followed by Western Chalukyas based out Kalyani along Eastern branch located Vengi region too contributing immensely towards promoting both Hinduism & Jainism through patronage given towards religious institutions flourishing under them over centuries while fostering advancements across literature arts sciences alike too which reflected societal values prevalent then amidst changing dynamics politically as well economically within subcontinent.",
      num: 6
    },
    {
        id: "gupta",
        name: "Gupta Empire",
        year: "320–550 CE",
        description: "The Gupta Empire (320–550 CE) is often referred to as the Golden Age of India due to its extraordinary achievements across various fields including science mathematics astronomy literature art etc., founded by Chandragupta I who brought about political stability economic prosperity northern parts subcontinent during this period while promoting Hinduism yet maintaining tolerance other religions such Buddhism Jainism too thereby creating an environment conducive growth intellectual pursuits seen through advancements made like Aryabhata's work mathematics astronomy alongside compositions major Sanskrit texts Kalidasa's 'Shakuntala' which continue inspire generations today even after centuries passed since then reflecting rich cultural heritage developed under them amidst flourishing trade networks established throughout empire facilitating exchange ideas goods alike enhancing overall prosperity experienced widely across regions governed directly under them.",
        num: 7
    },
    {
        id: "sikh",
        name: "Sikh Empire",
        year: "1799–1849 CE",
        description: "The Sikh Empire (1799–1849 CE) founded by Maharaja Ranjit Singh emerged as major power northern India early 19th century based Punjab region being first significant Sikh political entity recorded history while resisting British colonization effectively until its eventual annexation post Ranjit Singh’s death marking end independent rule over territory once held firmly within grasp earlier on due strong leadership exhibited throughout reign characterized military strength religious tolerance promotion arts culture witnessed growth infrastructure development trade harmony among diverse communities residing therein leading construction iconic Golden Temple Amritsar serving spiritual center Sikhs worldwide even today representing resilience spirit people despite challenges faced historically during tumultuous times encountered thereafter following disintegration empire itself amidst rising colonial pressures exerted upon local rulers ultimately culminating loss sovereignty experienced later down line when British took control entire region completely transforming landscape socio-political dynamics prevailing back then significantly altering course history forevermore.",
        num: 8
    },
    {
        id: "delhi",
        name: "Delhi Sultanate",
        year: "1206–1526 CE",
        description: "The Delhi Sultanate (1206–1526 CE) was series Islamic dynasties that ruled large parts India from Delhi founded Qutb-ud-Din Aibak marking establishment Muslim rule northern subcontinent lasting over three centuries playing key role shaping history through cultural political changes introduced during this era including integration Islamic culture architecture institutions into fabric society existing prior while witnessing significant military campaigns led Alauddin Khalji Muhammad bin Tughlaq amongst others resulting expansion territories controlled significantly impacting demographics regions governed directly under sultanate influence gradually evolving landscape governance witnessed decline early 16th century eventually giving rise Mughal Empire after defeat Lodi dynasty culminating end period marked profound transformations experienced throughout subcontinent thereafter continuing resonate deeply within collective memory populace even today reflecting rich tapestry woven together diverse influences encountered along way.",
        num: 9
    },
    {
        id: "mughal",
        name: "Mughal Empire",
        year: "1526–1857 CE",
        description: "The Mughal Empire (1526–1857 CE) stands out as one largest most influential empires Indian history founded Babur expanding cover most subcontinent height under rulers Akbar Jahangir Shah Jahan Aurangzeb marked blend Persian Indian Central Asian cultures especially art architecture administration promoting religious tolerance cultural integration economic prosperity witnessed monumental structures like Taj Mahal fostering trade industry creating unified legal system reforms governance implemented Akbar ensuring stability amidst diversity prevalent within society however after Aurangzeb’s death 1707 empire began weaken due internal strife external invasions British colonial influence ultimately leading its official end during rebellion 1857 when British took direct control India leaving behind complex legacy shaped experiences countless individuals who lived through tumultuous times filled both triumph tragedies intertwined deeply rooted narratives shaping identity nation itself still resonates strongly even today reminding us rich heritage inherited past generations.",
        num: 10
    },
    {
        id: "maratha",
        name: "Maratha Empire",
        year: "1674–1818 CE",
        description: "The Maratha Empire (1674–1818 CE) emerged as one powerful Hindu empires Indian history established Chhatrapati Shivaji Maharaj known military prowess decentralized administration ability resist Mughal expansion successfully western Deccan Plateau setting foundation expansion witnessed rise dominance throughout much present-day Maharashtra Madhya Pradesh Gujarat Uttar Pradesh reaching zenith under Peshwas however series defeats British during Anglo-Maratha Wars ultimately led absorption into British India despite challenges faced throughout journey remarkable resilience exhibited remains strong legacy shaping contemporary narratives surrounding identity culture within regions once governed them reflecting enduring spirit people who fought valiantly protect sovereignty against formidable odds encountered along way highlighting significance historical events shaped course nation’s evolution over centuries past.",
        num: 11
    },
    {
      id: "peshwa", 
      name:"Peshwa Dynasty", 
      year:"1714–1818 CE", 
      description:"The Peshwa Dynasty served as administrative leadership under Maratha Empire with Peshwas acting prime ministers most notable Baji Rao I greatly expanded territory across India influencing political military landscape eighteenth century however after defeat Third Anglo-Maratha War replaced British authority marking decline Maratha power despite this Peshwas contributed immensely spread culture religion particularly western central India.", 
      num : 12 
   },
   { 
     id : 'sultanate', 
     name : 'Sultanate of Delhi', 
     year : '1206–1526 CE', 
     description : 'The Delhi Sultanate was series Muslim dynasties ruled northern India from 1206 until 1526 established Qutb-ud-Din Aibak lasted over three centuries influenced culture architecture economy marked beginning Muslim rule India sultans promoted religious tolerance economic growth through trade urbanization innovations agriculture.', 
     num : 13 
   }, 
   { 
     id : 'bahamani', 
     name : 'Bahmani Sultanate', 
     year : '1347–1527 CE', 
     description : 'The Bahmani Sultanate was medieval Muslim kingdom Deccan region India founded Ala-ud-Din Bahman Shah ruled capital Gulbarga later Bidar known military expansion administrative reforms patronage Persian art culture fought numerous battles Vijayanagara Empire other regional powers leaving behind legacy architectural monuments Islamic culture.', 
     num : 14 
   }, 
   { 
     id : 'vijayanagar', 
     name : 'Vijayanagara Empire', 
     year : '1336–1646 CE', 
     description : 'The Vijayanagara Empire was South Indian empire ruled most southern subcontinent during fourteenth seventeenth centuries known advanced economy military prowess cultural flourishing capital city Hampi became hub commerce one largest urban centers time rulers promoted Hinduism patrons art literature architecture leaving lasting cultural legacy.', 
     num : 15 
   }, 
   { 
     id : 'holkar', 
     name : 'Holkar Dynasty', 
     year : '1731–1818 CE', 
     description : 'The Holkar Dynasty was powerful Maratha dynasty ruled Malwa region central India initially serving military commanders under Maratha Empire later established own kingdom known strong leadership military campaigns patronage arts including contributions development literature architecture fought several battles against British East India Company eventually lost power after defeat Third Anglo-Maratha War.', 
     num : 16 
   }, 
   { 
     id : 'scindia', 
     name : 'Scindia Dynasty', 
     year : '1707–1948 CE', 
     description : 'The Scindia Dynasty is prominent Maratha family ruled princely state Gwalior played important role Maratha Empire later during British colonial period known military strength alliances British contributed cultural political landscape India eighteenth nineteenth centuries.', 
     num : 17 
   },  
   {  
      id:'nizam',
      name:'Nizam of Hyderabad',
      year:'1724-1948CE',
      description:'The Nizam Hyderabad was powerful Muslim dynasty ruled princely state Hyderabad southern India established Asaf Jah I appointed Mughal Emperor governor Deccan known wealth patronage arts military might ruled over two centuries until Hyderabad annexed India1948.',
      num:'18'
   }
];



  const handleSend = () => {
    for (const el of arr) {
      if (props.search === el.id) {
        props.setName(el.name);
        console.log(el.name);
        props.setYear(el.year);
        console .log(el.year);
        props.setDescription(el.description);
        console.log(el.description);
       props.setDynNum(el.num);
       console.log(props.dynNum);
       console.log(el.num);
      }
    }
    Navigate("/page2");
  };

  return (
    <>
      <div className="completeCover">
        <Navbar
          handleChange={props.handleChange}
          handleSend={handleSend}
          name={props.name}
          setName={props.setName}
          year={props.year}
          search={props.search}
          setSearch={props.setSearch}
          setYear={props.setYear}
          description={props.description}
          setDescription={props.setDescription}
        />
        <div className="blurOverlay"></div>

        <div className="mainDiv">
          <div className="UpperText">
            <span>Research, Analyze and Access</span>
            <span style={{ color: "rgba(183, 88, 0, 0.996)" }}>
              the Desired Manuscripts
            </span>
          </div>
          <div className="lowerSearchArea">
            <input
              type="text"
              onChange={(e) => props.handleChange(e)}
              className="lowerinputArea"
              placeholder="Enter the name of the Dynasty.."
            />
            <button class="btn" onClick={handleSend}>
              <i className="fa-regular fa-paper-plane"></i>
            </button>
          </div>
          <div className="div"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
