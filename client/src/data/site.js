import { photos } from "./images.js";

export const house = {
  name: "RIWAYAT",
  tagline: "Where tradition finds its table.",
  statement: "Recipes carried through generations. Ingredients rooted in the land. A dining experience shaped by tradition.",
  phone: "+91 33 0000 0000",
  phoneHref: "tel:+913300000000",
  email: "hello@riwayat.example",
  emailHref: "mailto:hello@riwayat.example",
  address: ["47 Heritage Avenue", "Kolkata, India"],
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "Our Story" },
  { to: "/heritage", label: "Heritage" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export const footerExplore = navLinks.filter((link) => link.to !== "/");

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

export const occasions = [
  "Just dinner",
  "Birthday",
  "Anniversary",
  "Celebration",
  "Business",
  "Family gathering",
];

export const timeline = [
  {
    year: "1947",
    title: "A family recipe book begins its journey.",
    text: "In the story of this house, a cloth-bound notebook leaves a kitchen in Lucknow. The first pages are written in pencil: a kebab, a dal, a halwa for winter.",
  },
  {
    year: "1972",
    title: "Recipes travel across generations.",
    text: "The book moves with the family. Margins fill with Bengali mustard, Kashmiri fennel, and a Hyderabadi biryani measured by feel rather than spoons.",
  },
  {
    year: "1998",
    title: "Traditional techniques meet new ideas.",
    text: "The same dum, the same hand-ground masala, presented with a lighter hand. Nothing is frozen. The method stays, and the plate begins to change.",
  },
  {
    year: "2026",
    title: "RIWAYAT opens its doors.",
    text: "A fictional dining room in Kolkata. The notebook is still in the kitchen. The room around it is contemporary, quiet, and built for a long meal.",
  },
];

export const regions = [
  {
    id: "awadh",
    name: "Awadh",
    line: "Slow dum, patient kebabs, and the perfume of a royal kitchen.",
    image: photos.biryani,
    imageAlt: "Chicken biryani with mint, cucumber and small bowls of sauce",
    dishIds: ["galouti-kebab", "lucknowi-biryani", "sheermal"],
  },
  {
    id: "punjab",
    name: "Punjab",
    line: "Tandoor bread, black lentils, and gravies cooked without hurry.",
    image: photos.kadhai,
    imageAlt: "Vegetable curries and rice in steel bowls",
    dishIds: ["dal-riwayat", "butter-chicken", "amritsari-fish"],
  },
  {
    id: "kashmir",
    name: "Kashmir",
    line: "Fennel, dry ginger, and a lamb curry that smells of the valley.",
    image: photos.skillet,
    imageAlt: "A dark pan of spiced meat and rice with naan",
    dishIds: ["rogan-josh", "kahwa", "saffron-pulao"],
  },
  {
    id: "bengal",
    name: "Bengal",
    line: "Mustard oil, poppy seed, and a meal that ends in milk and saffron.",
    image: photos.puri,
    imageAlt: "Puffed bread frying in a steel pan",
    dishIds: ["kosha-mangsho", "aloo-posto", "rasmalai"],
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    line: "Desert chilli, gram flour breads, and a heat that stays dry.",
    image: photos.amber,
    imageAlt: "Sandstone walls and an arched gate at Amber Fort, Jaipur",
    dishIds: ["laal-maas", "missi-roti", "jaljeera"],
  },
  {
    id: "kerala",
    name: "Kerala",
    line: "Coconut, coastal fish, and spice that tastes of the backwaters.",
    image: photos.bananaLeaf,
    imageAlt: "A meal of rice, curry and breads on a banana leaf",
    dishIds: ["malabar-fish", "tandoori-prawns", "filter-coffee"],
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    line: "Layered biryani, fried onion, and a salan made to be shared.",
    image: photos.brassRice,
    imageAlt: "Spiced rice in small brass bowls",
    dishIds: ["chicken-biryani", "mirchi-ka-salan", "vegetable-biryani"],
  },
];

export const traditions = [
  {
    id: "awadhi",
    name: "Awadhi",
    summary: "Dum, kebabs and a preference for perfume over heat.",
    detail:
      "Awadhi cooking seals flavour under a lid. Galouti is minced until the texture almost disappears. Biryani is layered and left alone. RIWAYAT keeps that patience, then plates it with less garnish and a clearer broth of spice.",
  },
  {
    id: "bengali",
    name: "Bengali",
    summary: "Mustard, poppy seed and the logic of a home kitchen.",
    detail:
      "Bengal cooks in sequences: a bitter note, a mustard gravy, something sweet at the end. Kosha mangsho is reduced until the oil separates. Mishti is not an afterthought. It closes the meal.",
  },
  {
    id: "rajasthani",
    name: "Rajasthani",
    summary: "Scarcity turned into depth — chilli, ghee and gram.",
    detail:
      "Desert cooking wastes nothing and fears no chilli. Laal maas is built on dried red chilli and a long bhuna. Breads carry the meal when vegetables are few. The heat is meant to be tasted, not hidden.",
  },
  {
    id: "punjabi",
    name: "Punjabi",
    summary: "The tandoor, the kadhai, and food made to be shared.",
    detail:
      "Punjab gave the modern Indian table its most familiar grammar: naan, dal, butter chicken. At RIWAYAT those dishes are cooked properly — lentils overnight, breads on coal — and served without the usual excess of cream.",
  },
  {
    id: "kashmiri",
    name: "Kashmiri",
    summary: "Fennel, ginger and a red that comes from cockscomb, not tomato.",
    detail:
      "Rogan josh is often copied and rarely understood. The Kashmiri version is aromatic, with fennel and dry ginger, and a colour that should not taste of tomato paste. We follow that older path.",
  },
  {
    id: "south",
    name: "South Indian",
    summary: "Temperings, coconut and the discipline of the filter.",
    detail:
      "From Chettinad pepper to a Malabar coconut gravy, the south cooks with souring agents and precise tadkas. Filter coffee is part of the same attention: decoction, milk, and the right pour.",
  },
  {
    id: "hyderabadi",
    name: "Hyderabadi",
    summary: "Biryani as architecture, salan as its companion.",
    detail:
      "Hyderabadi biryani is a construction: marinade, rice, fried onion, a sealed pot. Mirchi ka salan exists so the rice is never eaten alone. We treat the pot as the recipe, not the garnish on top.",
  },
];

export const ingredients = [
  { name: "Cardamom", note: "Green pods, cracked only when the gravy is nearly done." },
  { name: "Saffron", note: "A few strands for milk, bread and the occasional pulao." },
  { name: "Black Cardamom", note: "Smoke and camphor, used where the dish can hold it." },
  { name: "Cumin", note: "Toasted whole, or ground the same morning." },
  { name: "Clove", note: "One or two. Enough to be felt, never enough to numb." },
  { name: "Cinnamon", note: "A quiet sweetness in meat gravies and in kahwa." },
  { name: "Mustard", note: "Oil and seed, especially when the recipe comes from Bengal." },
  { name: "Fenugreek", note: "Dried leaves, crushed between the palms at the end." },
  { name: "Coriander", note: "Seed for the masala, leaf for the last scatter of green." },
  { name: "Turmeric", note: "Earth and colour, used as a spice rather than a dye." },
];

export const techniques = [
  {
    name: "Dum Cooking",
    text: "A sealed pot and low heat. Steam finishes what the hand began, which is why biryani and galouti are never rushed.",
  },
  {
    name: "Tandoor",
    text: "Clay, coal and a short, fierce heat. Breads blister. Marinades tighten. The smoke is an ingredient.",
  },
  {
    name: "Bhuna",
    text: "Onions, meat and spice cooked until the moisture leaves and the gravy starts to shine.",
  },
  {
    name: "Tadka",
    text: "Fat brought to the right temperature, then spice. The sound tells you when it is ready.",
  },
  {
    name: "Hand-ground Masala",
    text: "Small batches, ground on stone or in a mortar, so the spice still smells like itself.",
  },
  {
    name: "Slow Cooking",
    text: "Dal, halwa and kosha are clocks. They are done when the texture changes, not when a timer ends.",
  },
];

export const chef = {
  name: "Chef Aarav Mehta",
  role: "Chef Patron",
  note: "A fictional chef, written for this house.",
  quote: "A recipe is a memory that agrees to be cooked again.",
  paragraphs: [
    "In the story of RIWAYAT, Aarav Mehta learned to cook beside family stoves in Ahmedabad and Kolkata. He watched tadka meet cold oil, ground masala on a stone, and learned that a dish is finished when it tastes like the person who taught it.",
    "Years in contemporary kitchens taught him pacing and a cleaner plate. He brought those lessons back to the old recipes — changing the frame, leaving the memory intact. The food is traditional in method and current in how it is served.",
  ],
  image: photos.puri,
  imageAlt: "A hand frying puffed bread in a shallow steel pan",
};

export const about = {
  philosophy: [
    "RIWAYAT treats tradition as something carried, not displayed. A recipe that cannot survive a new pair of hands was never as strong as we thought.",
    "We cook from a fictional family notebook that travels across regions of India. The point is not nostalgia. It is continuity — the same attention, in a room that belongs to now.",
  ],
  ingredientsIntro:
    "The larder is seasonal where it can be, and specific where it must be. A dish from Kashmir should taste of fennel. A dish from Bengal should taste of mustard. We would rather cook fewer things well.",
  ingredientPoints: [
    { title: "Seasonal produce", text: "Carrots for halwa in winter. Greens when they are sweet. Fish when the coast allows a good one." },
    { title: "Regional spices", text: "Bought whole, toasted in small pans, and never replaced by a single anonymous mix." },
    { title: "Traditional grains", text: "Aged basmati for biryani. Whole wheat and gram flour for breads that are meant to be torn." },
    { title: "Fresh herbs", text: "Mint, coriander and curry leaf used as flavour, not as a pile of decoration." },
    { title: "Responsible sourcing", text: "A preference for producers we can name, and for ingredients that do not need to travel further than the recipe does." },
  ],
  cooking: [
    "Gravies are cooked down, not thickened in a hurry. Tandoor breads are fired over coal. Masalas are ground in batches small enough that the kitchen still smells of them.",
    "The plate is contemporary: less sauce pooled at the rim, clearer flavour, a brass bowl when the dish wants one. Presentation changes. The technique does not.",
  ],
  hospitality: [
    "Indian hospitality has a word for the guest who arrives without warning: atithi. RIWAYAT borrows that idea. The room is composed. The welcome is not a performance.",
    "You are seated as if the table was kept. Water arrives. The first bread is hot. The meal is allowed to take the time it was written for.",
  ],
};
