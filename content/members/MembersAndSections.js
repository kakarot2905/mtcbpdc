import coreAryanSatwani              from "./core_aryan_satwani.jpg";
import coreMrudulaRahate             from "./core_mrudula_rahate.jpg";
import coreVennelaVallabhaneni       from "./core_vennela_vallabhaneni.jpg";
import coreAdityaGopinath            from "./core_aditya_gopinath.jpg";
import coreKeaneCoutinho             from "./core_keane_coutinho.jpg";
import coreLasyaSai                  from "./core_lasya_sai.jpg";

import techShaikMohammedAnas         from "./tech_shaik_mohammed_anas.jpg";
import techLayaShreeElango           from "./tech_laya_shree_elango.jpg";
import techStellinJohnGeorge         from "./tech_stellin_john_george.jpg";
import techSrihariSai                from "./tech_srihari_sai.jpg";

import eventsBhavyaKothari           from "./events_bhavya_kothari.jpg";
import eventsKarthikVishal           from "./events_karthik_vishal.jpg";
import eventsNardaZaria              from "./events_narda_zaria.jpg";
import eventsMahinPoptani            from "./events_mahin_poptani.jpg";
import eventsMyshaIqbal              from "./events_mysha_iqbal.jpg";
import eventsReubenThomas            from "./events_reuben_thomas.jpg";

import marketingSathvikSreeram       from "./marketing_sathvik_sreeram.jpg";
import marketingEshanTiwari          from "./marketing_eshan_tiwari.jpg";
import marketingKAnkitaMenon         from "./marketing_k_ankita_menon.jpg";
import marketingKhyatiJetly          from "./marketing_khyati_jetly.jpg";
import marketingSrinjitaRoyChowdhury from "./marketing_srinjita_roy_chowdhury.jpg";
import marketingAmeyiaWankhede       from "./marketing_ameyia_wankhede.jpg";

import outreachJoelJoseph            from "./outreach_joel_joseph.jpg";
import outreachUtkarshTripathi       from "./outreach_utkarsh_tripathi.jpg";
import outreachPrasannahRaman        from "./outreach_prasannah_raman.jpg";
import outreachSiddharathNagesh      from "./outreach_siddharath_nagesh.jpg";
import outreachAkashRajasekar        from "./outreach_akash_rajasekar.jpg";
import outreachDiyaFreddy            from "./outreach_diya_freddy.jpg";

import facultyDrElakkiyaR            from "./faculty_dr_elakkiya_r.jpg";



/** Type definition for a Member.
 * @typedef Member
 * @property {} image Image
 * @property {string} name Name of person
 * @property {string} position Position/Role of person
 * @property {string} [linkInstagram] (optional) Instagram link
 * @property {string} [linkLinkedIn] (optional) LinkedIn link
 * @property {string} [linkGitHub] (optional) GitHub link
 */

/** Type definition for a Section.
 * @typedef Section
 * @property {string} sectionTitle Title of section.
 * @property {Member[]} members List of members in this section.
 * @property {number} numCols Number of columns to display in the webpage.
 */



/** An array of members in the Core Members section @type {Member[]} */
const sectionCore = [
  {
    image: coreAryanSatwani,
    name: "Aryan Satwani",
    position: "Chair",
    linkInstagram: "https://www.instagram.com/aryan_satwani/",
    linkLinkedIn: "https://www.linkedin.com/in/aryan-satwani-43a46a211/",
    linkGitHub: "https://github.com/aryansatwani",
  },
  {
    image: coreMrudulaRahate,
    name: "Mrudula Rahate",
    position: "Co-Chair",
    linkInstagram: "https://www.instagram.com/mrudula12503/",
    linkLinkedIn: "https://www.linkedin.com/in/mrudula-rahate/",
    linkGitHub: "https://github.com/Mrudula1205",
  },
  {
    image: coreVennelaVallabhaneni,
    name: "Vennela Vallabhaneni",
    position: "Vice Chair",
    linkInstagram: "https://www.instagram.com/venn.by/",
    linkLinkedIn: "https://www.linkedin.com/in/venn-v/",
    linkGitHub: "https://github.com/vennby",
  },
  {
    image: coreAdityaGopinath,
    name: "Aditya Gopinath",
    position: "Ex-Officio",
    linkInstagram: "https://www.instagram.com/aditya_gopinath/",
    linkLinkedIn: "https://www.linkedin.com/in/aditya-gopinath-a907091ab/",
    linkGitHub: "https://github.com/adi14023",
  },
  {
    image: coreKeaneCoutinho,
    name: "Keane Coutinho",
    position: "Treasurer & DevOps Head",
    linkInstagram: "https://www.instagram.com/keane_2703/",
    linkLinkedIn: "https://www.linkedin.com/in/keane-coutinho/",
    linkGitHub: "https://github.com/keanec27",
  },
  {
    image: coreLasyaSai,
    name: "Lasya Sai",
    position: "General Secretary",
    linkInstagram: "https://www.instagram.com/lasyaasai_/",
    linkLinkedIn: "http://www.linkedin.com/in/lasya-sai-dabbakuti-533625249",
    linkGitHub: "https://github.com/LasyaSai",
  },
];

/** An array of members in the Tech Team @type {Member[]} */
const sectionTechTeam = [
  {
    image: techShaikMohammedAnas,
    name: "Shaik Mohammed Anas",
    position: "Technical Head",
    linkInstagram: "https://www.instagram.com/armaan_0510/",
    linkLinkedIn: "https://www.linkedin.com/in/anas-shaik/",
    linkGitHub: "https://github.com/Brightlord5",
  },
  {
    image: techLayaShreeElango,
    name: "Laya Shree Elango",
    position: "Technical Manager",
    linkInstagram: "https://www.instagram.com/layashreeelango/",
    linkLinkedIn: "http://www.linkedin.com/in/laya-shree-elango",
    linkGitHub: "https://github.com/Laya-Shree",
  },
  {
    image: techStellinJohnGeorge,
    name: "Stellin John George",
    position: "Technical Executive",
    linkInstagram: "https://www.instagram.com/Stellin_15/",
    linkLinkedIn: "http://www.linkedin.com/in/stellin-john-george-1bb757163",
    linkGitHub: "https://github.com/Stellin-15",
  },
  {
    image: techSrihariSai,
    name: "Srihari Sai",
    position: "Technical Executive",
    linkInstagram: "http://instagram.com/ft.hyper",
    linkLinkedIn: "http://www.linkedin.com/in/sri-hari-sai-subramanian-737279322",
    linkGitHub: "http://github.com/HyperPlexG",
  },
];

/** An array of members in the Events Team @type {Member[]} */
const sectionEventsTeam = [
  {
    image: eventsBhavyaKothari,
    name: "Bhavya Kothari",
    position: "Events Head",
    linkInstagram: "https://www.instagram.com/bruhvya/",
    linkLinkedIn: "https://www.linkedin.com/in/bhavya-manish-kothari/",
    linkGitHub: "https://github.com/bruhvya",
  },
  {
    image: eventsKarthikVishal,
    name: "Karthik Vishal",
    position: "Events Manager",
    linkInstagram: "https://www.instagram.com/karthik_vishal03/",
    linkLinkedIn: "https://www.linkedin.com/in/karthik-vishal-sr-1a7995245/",
    linkGitHub: "https://github.com/Karthik-Vishal03",
  },
  {
    image: eventsNardaZaria,
    name: "Narda Zaria",
    position: "Strategy Officer",
    linkInstagram: "https://www.instagram.com/nardazaria/",
    linkLinkedIn: "https://www.linkedin.com/in/narda-zaria-60254823b/",
    // linkGitHub: "https://github.com/aina282", // NOT WORKING
  },
  {
    image: eventsMahinPoptani,
    name: "Mahin Poptani",
    position: "Events Executive",
    linkInstagram: "https://www.instagram.com/mahin_sp20/",
    linkLinkedIn: "https://www.linkedin.com/in/mahin-poptani-b22166118/",
    linkGitHub: "https://github.com/Mahin200405",
  },
  {
    image: eventsMyshaIqbal,
    name: "Mysha Iqbal",
    position: "Events Executive",
    linkInstagram: "https://www.instagram.com/myshaa.i/",
    linkLinkedIn: "https://www.linkedin.com/in/mysha-i-baaa87318/",
    linkGitHub: "https://github.com/Mysha-BITS",
  },
  {
    image: eventsReubenThomas,
    name: "Reuben Thomas",
    position: "Events Executive",
    linkInstagram: "https://www.instagram.com/reuben_thooo/",
    linkLinkedIn: "https://www.linkedin.com/in/reuben-thomas-thovelil-689893263/",
    linkGitHub: "https://github.com/reuben-tho",
  },
];

/** An array of members in the Marketing & Creative Team @type {Member[]} */
const sectionMarketingTeam = [
  {
    image: marketingSathvikSreeram,
    name: "Sathvik Sreeram",
    position: "Marketing Head",
    linkInstagram: "https://www.instagram.com/sathvikboseman/",
    linkLinkedIn: "https://www.linkedin.com/in/sathvik-sreeram-06b350280/",
    linkGitHub: "https://github.com/sathvikboseman",
  },
  {
    image: marketingEshanTiwari,
    name: "Eshan Tiwari",
    position: "Creative Head",
    linkInstagram: "https://www.instagram.com/eshan.tiw_/",
    linkLinkedIn: "https://www.linkedin.com/in/eshan-tiwari-354728274/",
    linkGitHub: "https://github.com/Eshan-BlipTweak",
  },
  {
    image: marketingKAnkitaMenon,
    name: "K Ankita Menon",
    position: "Marketing Executive",
    linkInstagram: "https://www.instagram.com/ankita_menon_04/",
    linkLinkedIn: "https://www.linkedin.com/in/k-ankita-menon-4513b8232/",
    // linkGitHub: "",
  },
  {
    image: marketingKhyatiJetly,
    name: "Khyati Jetly",
    position: "Marketing Executive",
    linkInstagram: "https://www.instagram.com/_kxyati_/",
    linkLinkedIn: "http://www.linkedin.com/in/khyati-jetly-085792306",
    linkGitHub: "https://github.com/khyati2107",
  },
  {
    image: marketingSrinjitaRoyChowdhury,
    name: "Srinjita Roy Chowdhury",
    position: "Marketing Executive",
    linkInstagram: "https://www.instagram.com/srinxie/",
    linkLinkedIn: "https://www.linkedin.com/in/srinjita-roy-chowdhury-99707531a/",
    linkGitHub: "https://github.com/Srinjita-RC",
  },
  {
    image: marketingAmeyiaWankhede,
    name: "Ameyia Wankhede",
    position: "Creative Executive",
    linkInstagram: "https://www.instagram.com/ameiya.w/",
    linkLinkedIn: "https://www.linkedin.com/in/ameiya-wankhede-7600912b1",
    linkGitHub: "https://github.com/aw2106",
  },
];

/** An array of members in the Outreach & DevOps Team @type {Member[]} */
const sectionOutreachTeam = [
  {
    image: outreachJoelJoseph,
    name: "Joel Joseph",
    position: "Outreach Head",
    linkInstagram: "https://www.instagram.com/joelj.05/",
    linkLinkedIn: "https://www.linkedin.com/in/joel-joseph-30a289215/",
    linkGitHub: "https://github.com/JJ512-ishere",
  },
  {
    image: outreachUtkarshTripathi,
    name: "Utkarsh Tripathi",
    position: "Outreach Manager",
    linkInstagram: "https://www.instagram.com/Wtffut/",
    linkLinkedIn: "http://www.linkedin.com/in/wtffut",
    linkGitHub: "https://github.com/btwitsutkarsh",
  },
  {
    image: outreachPrasannahRaman,
    name: "Prasannah Raman",
    position: "Outreach Manager",
    linkInstagram: "https://www.instagram.com/_prasannargh/",
    linkLinkedIn: "https://www.linkedin.com/in/prasannah-raman-0a7a6926b/",
    // linkGitHub: "https://github.com/codeyko-blip", // NOT WORKING
  },
  {
    image: outreachSiddharathNagesh,
    name: "Siddharath Nagesh",
    position: "DevOps Manager",
    linkInstagram: "https://www.instagram.com/siddharath_nagesh?igsh=eG11d2JwNmhscGEx",
    linkLinkedIn: "http://linkedin.com/in/siddharath-malavalli-nagesh-270b571ba",
    linkGitHub: "https://github.com/SiddharathMN",
  },
  {
    image: outreachAkashRajasekar,
    name: "Akash Rajasekar",
    position: "DevOps Manager",
    linkInstagram: "https://www.instagram.com/akash_r3/",
    linkLinkedIn: "https://www.linkedin.com/in/akash-rajasekar/",
    linkGitHub: "https://github.com/Akashrajasekar",
  },
  {
    image: outreachDiyaFreddy,
    name: "Diya Freddy",
    position: "Content Executive",
    linkInstagram: "https://www.instagram.com/diya.freddy/",
    linkLinkedIn: "https://www.linkedin.com/in/diya-freddy-1592012b4/",
    linkGitHub: "https://github.com/diyastudio1",
  },
];

/** An array of members in the Faculty In-Charge section @type {Member[]} */
const sectionFaculty = [
  {
    image: facultyDrElakkiyaR,
    name: "Dr. Elakkiya R.",
    position: "Assistant Professor",
    linkLinkedIn: "https://www.linkedin.com/in/elakkiya-r-581884b1/",
  }
]



/** An array of all sections in the About page. @type {Section[]} */
const sections = [
  {numCols: 3, sectionTitle: "Core Members", members: sectionCore},
  {numCols: 2, sectionTitle: "Tech Team", members: sectionTechTeam},
  {numCols: 3, sectionTitle: "Events Team", members: sectionEventsTeam},
  {numCols: 3, sectionTitle: "Marketing & Creative Team", members: sectionMarketingTeam},
  {numCols: 3, sectionTitle: "Outreach & DevOps Team", members: sectionOutreachTeam},
  {numCols: 1, sectionTitle: "Faculty In-Charge", members: sectionFaculty},
];

export default sections;
