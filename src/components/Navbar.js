import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import logo from "D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\logo2.png"
function Navbar(props) {
 
    
//local data for reference

const arr = [
    {
        id: "mourya",
        name: "Maurya Empire",
        year: "322 BCE – 185 BCE",
        description: "The Maurya Empire (322–185 BCE), founded by Chandragupta Maurya, was a significant Iron Age power based in Magadha, South Asia. It expanded under Chandragupta to include regions like Afghanistan and the northern Deccan. During Ashokas reign, it briefly controlled much of the Indian subcontinent, excluding the deep south. The capital, Patliputra (modern Patna), was central to an economy bolstered by agriculture, trade, and infrastructure like the Uttarapath road" +
            "Ashokas conversion to Buddhism after the Kalinga War led to widespread promotion of nonviolence and Buddhist missions, alongside environmental preservation. The empire is known for its artistic and architectural legacies, such as the Lion Capital of Ashoka, now Indias national emblem. Archaeological links include Northern Black Polished Ware. Despite achievements, the period also saw a decline in womens rights and reinforcement of caste structures.",
        num: 1
    },
    {
        id: "ganga",
        name: "Western Ganga dynasty",
        year: "350–999 BCE",
        description: "The Western Ganga Dynasty (350–999 CE), an influential South Indian power, was centered in the present-day Karnataka region. Founded by Konganivarman, it ruled as an independent dynasty until the rise of the Cholas. The Ganga kings are known for their patronage of Jainism and contributions to temple architecture. Their influence extended over parts of Tamil Nadu and Andhra Pradesh, with the capital initially at Kolar and later at Talakad." +
            "The Gangas excelled in irrigation management, constructing reservoirs like the Ganganadu and promoting agricultural prosperity. Their administration was efficient, with local self-governance playing a key role. The dynasty's contributions to art and architecture include the Gomateshwara statue at Shravanabelagola, a symbol of Jain heritage." +
            "Cultural advancements under the Gangas saw the promotion of literature in Kannada and Sanskrit. Though their decline came with the Chola conquests, the Western Ganga Dynasty left a lasting legacy in South Indian history.",
        num: 2
    },
    {
        id: "chola",
        name: "Chola Empire",
        year: "848–1279 BCE",
        description: "The Chola Empire (848–1279 CE), one of the longest-ruling dynasties in South India, rose to prominence under rulers like Rajaraja Chola I and his son Rajendra Chola I. They expanded the empire through military conquests across South India, Sri Lanka, and Southeast Asia, establishing it as a naval and economic powerhouse. The Cholas played a key role in spreading Tamil culture, art, and architecture abroad" +
            "The capital, Thanjavur, housed remarkable contributions like the Brihadeeswara Temple, a UNESCO World Heritage Site. The economy thrived on agriculture, inland trade, and maritime commerce across the Indian Ocean. The Cholas are renowned for their artistic excellence, seen in bronze sculptures like the Nataraja, and for their advanced irrigation systems, including the Grand Anicut" +
            "Their administration was highly organized, with a strong emphasis on local self-governance through village assemblies",
        num: 3
    },
    {
        id: "rashtrakoota",
        name: "Rashtrakuta Dynasty",
        year: "753–983 CE",
        description: "The Rashtrakuta Dynasty (753–983 CE), one of the major Indian powers during the early medieval period, ruled from their capital at Manyakheta (modern-day Malkhed). The dynasty is known for its military conquests, which included defeating the Pratiharas and the Palas, and establishing a stronghold across present-day India, including parts of Gujarat, Maharashtra, and Karnataka." +
            "Under rulers like Dantidurga and Krishna I, the Rashtrakutas also became a major cultural and religious force, patronizing literature, art, and the Jain and Hindu traditions. Their monumental architectural achievements include the Kailasa temple at Ellora, which remains an engineering marvel." +
            "The dynastys economy was driven by agriculture, trade, and a well-organized administrative system. Though the Rashtrakutas power waned by the end of the 10th century due to internal conflicts and invasions, they left a lasting legacy in Indian history through their cultural and architectural contributions.",
        num: 4
    },
    {
        id: "rajput",
        name: "Rajput Dynasty",
        year: "6th–16th century CE",
        description: "The Rajput Dynasty (6th–16th century CE) refers to the diverse collection of warrior clans in northern and central India, who played a significant role in Indian history. Known for their valor and chivalry, the Rajputs rose to prominence during the early medieval period, establishing powerful kingdoms like Mewar, Marwar, and Jaipur. Their military strength and strategic alliances allowed them to defend against invasions, including from the Ghaznavids and Ghurids." +
            "The Rajputs were also patrons of art, culture, and architecture, known for building magnificent forts, palaces, and temples. The Rajput style of painting and their elaborate court life enriched Indian culture during their rule. The Rajputs practiced a feudal system of governance with a strong emphasis on local chieftains and warrior codes." +
            "Despite facing challenges from the Mughal Empire and other regional powers, the Rajput kingdoms remained influential until the 17th century. The Rajput legacy is still evident in Indias architectural heritage, including structures like the Amber Fort and Udaipur’s City Palace, and their code of honor continues to be celebrated in folklore and literature.",
        num: 5
    },
    {
      id: "chalukya",
      name: "Chalukya Dynasty",
      year: "6th–12th century CE",
      description: "The Chalukya Dynasty was a prominent Indian dynasty that ruled over large parts of southern and central India. Known for its contributions to Indian architecture, especially the rock-cut temples at Badami and the structural temples at Pattadakal, the Chalukyas played a significant role in shaping the cultural heritage of India. They were great patrons of art, literature, and religion, fostering the growth of Hinduism and Jainism. The dynasty witnessed three distinct phases: the Early Chalukyas of Badami, the Western Chalukyas of Kalyani, and the Eastern Chalukyas of Vengi.",
      
      num: 6
    },
    {
        id: "gupta",
        name: "Gupta Empire",
        year: "320–550 CE",
        description: "The Gupta Empire (320–550 CE) is often referred to as the Golden Age of India due to its extraordinary achievements in science, mathematics, astronomy, literature, and art. Founded by Chandragupta I, the Gupta Empire brought a period of political stability and economic prosperity to northern India." +
            "The Guptas are known for promoting Hinduism, but they also maintained tolerance for other religions, including Buddhism and Jainism. The period saw advancements like Aryabhata's work in mathematics and astronomy, and the composition of major Sanskrit texts like Kalidasa's 'Shakuntala'." +
            "The Gupta administration was highly organized, with a strong central government and flourishing trade networks. The Gupta period also saw significant architectural contributions, including the development of temple art and sculpture. However, the empire declined due to invasions from the Huns in the 5th and 6th centuries.",
        num: 7
    },
    {
        id: "sikh",
        name: "Sikh Empire",
        year: "1799–1849 CE",
        description: "The Sikh Empire (1799–1849 CE), founded by Maharaja Ranjit Singh, was a major power in northern India during the early 19th century. Based in the Punjab region, it was the first major Sikh political entity in Indian history and one of the last independent kingdoms to resist British colonization." +
            "Ranjit Singh was a skilled military leader who united various Sikh factions into a single kingdom, and his rule was marked by military strength, religious tolerance, and the promotion of art and culture. He oversaw the construction of the Golden Temple in Amritsar and was known for his progressive policies, which promoted trade, infrastructure, and religious harmony." +
            "Despite its military successes, the Sikh Empire fell after Ranjit Singh's death, eventually succumbing to British annexation in 1849. The legacy of the Sikh Empire remains strong in the history of Punjab and in the cultural contributions of the Sikh people.",
        num: 8
    },
    {
        id: "delhi",
        name: "Delhi Sultanate",
        year: "1206–1526 CE",
        description: "The Delhi Sultanate (1206–1526 CE) was a series of Islamic dynasties that ruled large parts of India from Delhi. Founded by Qutb-ud-Din Aibak, it saw the establishment of Muslim rule in northern India, which lasted for over three centuries and played a key role in shaping the subcontinent's history." +
            "The Delhi Sultanate included five major dynasties: the Mamluk, Khalji, Tughlaq, Sayyid, and Lodi dynasties. During this period, the Indian subcontinent saw significant cultural and political changes, including the introduction of Islamic culture, architecture, and institutions." +
            "The Delhi Sultanate also saw significant military campaigns, such as those led by Alauddin Khalji and Muhammad bin Tughlaq. The empire's decline began in the early 16th century, culminating in the rise of the Mughal Empire after the defeat of the Lodi dynasty in 1526.",
        num: 9
    },
    {
        id: "mughal",
        name: "Mughal Empire",
        year: "1526–1857 CE",
        description: "The Mughal Empire (1526–1857 CE) was one of the largest and most influential empires in Indian history. Founded by Babur, the Mughal Empire expanded to cover most of the Indian subcontinent at its height under rulers like Akbar, Jahangir, Shah Jahan, and Aurangzeb. The empire was marked by its blend of Persian, Indian, and Central Asian cultures, especially in art, architecture, and administration." +
            "The Mughals promoted religious tolerance, cultural integration, and economic prosperity. They were known for monumental architecture, including the Taj Mahal, and for fostering trade and industry. Under Akbar, the empire saw reforms in governance, including the creation of a unified legal system." +
            "However, after the death of Aurangzeb in 1707, the empire weakened due to internal strife, external invasions, and British colonial influence. The empire officially ended in 1857 after the Indian Rebellion, when the British took direct control of India.",
        num: 10
    },
    {
        id: "maratha",
        name: "Maratha Empire",
        year: "1674–1818 CE",
        description: "The Maratha Empire (1674–1818 CE) was one of the most powerful Hindu empires in Indian history, established by Chhatrapati Shivaji Maharaj. The Marathas were known for their military prowess, decentralized administration, and ability to resist Mughal expansion in India. Shivaji's innovative guerrilla tactics and stronghold in the western Deccan Plateau set the foundation for the empire's expansion." +
            "The Marathas played a significant role in the eventual downfall of the Mughal Empire and became a dominant force in India during the 18th century. Their empire included parts of present-day Maharashtra, Madhya Pradesh, Gujarat, and Uttar Pradesh." +
            "The Maratha Empire reached its zenith under the Peshwas, but after a series of defeats by the British during the Anglo-Maratha Wars, the Marathas were ultimately defeated and absorbed into British India. Despite this, the Maratha legacy remains strong in Indian history and culture.",
        num: 11
    },
    {
        id: "peshwa",
        name: "Peshwa Dynasty",
        year: "1714–1818 CE",
        description: "The Peshwa Dynasty was the administrative leadership under the Maratha Empire, with the Peshwas serving as the prime ministers. The most famous of these leaders was Baji Rao I, who greatly expanded the Maratha Empire across India." +
            "The Peshwas were influential in shaping the political and military landscape of the 18th century. However, after the defeat in the Third Anglo-Maratha War, the Peshwas were replaced by British authority, marking the decline of the Maratha Empire." +
            "Despite this, the Peshwas contributed greatly to the spread of Maratha culture and religion, particularly in western and central India.",
        num: 12
    }
   ,
   {
    id: "sultana",     
    name: "Sultanate of Delhi",
    year: "1206–1526 CE",
    description: "The Delhi Sultanate was a series of Muslim dynasties that ruled northern India from 1206 until 1526. Established by Qutb-ud-Din Aibak, it lasted over three centuries, and during this time, it influenced India's culture, architecture, and economy. It marked the beginning of Muslim rule in India, and the sultans promoted religious tolerance and economic growth through trade, urbanization, and innovations in agriculture.",
    num: 13
},
{
    id: "bahamani",
    name: "Bahmani Sultanate",
    year: "1347–1527 CE",
    description: "The Bahmani Sultanate was a medieval Muslim kingdom in the Deccan region of India. Founded by Ala-ud-Din Bahman Shah, the Bahmanis ruled from their capital at Gulbarga and later Bidar, and they were known for their military expansion, administrative reforms, and patronage of Persian art and culture. They fought numerous battles with the Vijayanagara Empire and other regional powers, leaving behind a legacy of architectural monuments and Islamic culture.",
    num: 14
},
{
    id: "vijayanagar",
    name: "Vijayanagara Empire",
    year: "1336–1646 CE",
    description: "The Vijayanagara Empire was a South Indian empire that ruled most of the southern subcontinent during the 14th to 17th centuries. Known for its advanced economy, military prowess, and cultural flourishing, the empire's capital city, Hampi, became a hub of commerce and one of the largest urban centers of its time. The Vijayanagara rulers promoted Hinduism and were patrons of art, literature, and architecture, leaving a lasting cultural legacy.",
    num: 15
},
{
  id: "hoysala",
  name: "Hoysala Empire",
  year: "c. 10th – 14th centuries CE",
  description: "The Hoysala Empire was a prominent South Indian dynasty that ruled most of what is now Karnataka between the 10th and the 14th centuries. The capital was initially located at Belur but later moved to Halebidu. The Hoysalas, originally from the elevated Malenadu region, rose to power by taking advantage of conflicts between the Western Chalukyas and Kalachuris. They are renowned for their unique temple architecture, including the Chennakesava Temple at Belur and the Hoysaleswara Temple at Halebidu, characterized by intricate carvings and a distinctive star-shaped platform. The empire fostered a rich cultural environment, promoting literature in Kannada and Sanskrit, and patronizing various religious traditions including Shaivism, Vaishnavism, and Jainism. The Hoysala rulers were also known for their diplomatic skills, forming alliances with neighboring kingdoms to strengthen their position. Their administration was marked by a well-organized system of local governance through village councils, which facilitated efficient management of resources. Despite facing invasions from the Delhi Sultanate and internal strife, the legacy of the Hoysala Empire endures in its architectural marvels and cultural contributions, which continue to inspire admiration and scholarly interest today.",
 num:16
},
{
    id: "scindia",
    name: "Scindia Dynasty",
    year: "1707–1948 CE",
    description: "The Scindia Dynasty is a prominent Maratha family that ruled the princely state of Gwalior. The dynasty played an important role in the Maratha Empire and later during the British colonial period. The Scindias were known for their military strength and alliances with the British, and they contributed to the cultural and political landscape of India during the 18th and 19th centuries.",
    num: 17
},
{
    id: "nizam",
    name: "Nizam of Hyderabad",
    year: "1724–1948 CE",
    description: "The Nizam of Hyderabad was a powerful Muslim dynasty that ruled over the princely state of Hyderabad in southern India. The dynasty was established by Asaf Jah I, who was appointed by the Mughal Emperor as the governor of the Deccan. The Nizams are known for their wealth, patronage of the arts, and military might. They ruled for over two centuries until Hyderabad was annexed by India in 1948.",
    num: 18
},
{
    id: "rajwade",
    name: "Rajwade Dynasty",
    year: "1300–1800 CE",
    description: "The Rajwade Dynasty was a prominent feudal dynasty in Rajasthan. They were known for their contribution to the Rajput culture and their influence in the political and military affairs of the region. The dynasty saw a rise to power during the early medieval period and played a key role in the defense of Rajasthan against invasions. Their military prowess and administrative skills helped in establishing strong regional dominance.",
    num: 19
},
{
  id: "kadamba",
  name: "Kadamba Dynasty",
  year: "345–525 CE",
  description: "The Kadamba Dynasty, founded by Mayurasharma, was one of the earliest indigenous ruling dynasties of Karnataka. They established their capital at Banavasi and played a pivotal role in the history of South India. The Kadambas were known for their administrative reforms, including a structured feudal system, and for promoting Sanskrit and Kannada literature. They maintained independence for nearly two centuries before becoming feudatories to the Chalukyas and other empires. Their legacy is evident in the temples, inscriptions, and cultural developments they left behind.",
  num: 22
},
{
    id: "maratha",
    name: "Maratha Empire",
    year: "1674–1818 CE",
    description: "The Maratha Empire was founded by Chhatrapati Shivaji Maharaj and was one of the most powerful empires in India. The Marathas fought against the Mughal Empire and expanded their territories across India, from Maharashtra to parts of Madhya Pradesh, Gujarat, and Uttar Pradesh. Their military innovations and guerrilla tactics made them formidable opponents. Despite facing internal conflicts and British colonization, the Marathas had a lasting impact on Indian history and culture.",
    num: 21
},
{
    id: "mughal",
    name: "Mughal Empire",
    year: "1526–1857 CE",
    description: "The Mughal Empire was one of the largest and most influential empires in Indian history, founded by Babur after his victory at the Battle of Panipat in 1526. The empire expanded significantly under Akbar, Jahangir, Shah Jahan, and Aurangzeb, and it is known for its contributions to art, architecture, and culture. The Mughals built the Taj Mahal, developed an efficient administrative system, and promoted religious tolerance, though the empire weakened after Aurangzeb’s death.",
    num: 22
}
];

//same as in home.js => nenapu itko
const Navigate = useNavigate(); 
//data


      

const handleClick=()=> {

    for(const el of arr) {
        if(el.id==props.name) {
            console.log("found");
            props.setYear(el.year);
            props.setName(el.name)
            props.setDescription(el.description);
            Navigate("/page2");
        }
    }
}

const handleChange=(e)=> {
    props.setName("");
    props.setName(e.target.value);
    console.log(props.name);  
}



  return (
   <>
  <div className="total">
    <div className="logo"> 
    <span>
        <img src={logo} alt="" />
    </span>
     </div>
    <div className="content">
        <Link to="/">
        <div className="home">Home</div>
        </Link>
        <Link to="/about">
        <div className="AboutUs">About Us</div>
        </Link>
        <Link to="/faq">
        <div className="AboutUs">FAQs</div>
        </Link>
        <Link to="/survey">
        <div className="AboutUs">Survey</div>
        </Link>
        <div className="search">
        <i className="fa-solid fa-magnifying-glass" onClick={ handleClick}></i>
            <input type="text" onChange={(e)=> handleChange(e)}  className="inputArea" placeholder='Search your Dynasty' />
        </div>
    </div>
  </div>
   </>
  )
}

export default Navbar
