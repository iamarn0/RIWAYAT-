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
    flavour: "Saffron, kewra and a ghee-soft spice that prefers perfume to heat.",
    image: photos.biryani,
    imageAlt: "Chicken biryani with mint, cucumber and small bowls of sauce",
    dishIds: ["galouti-kebab", "lucknowi-biryani", "sheermal"],
  },
  {
    id: "punjab",
    name: "Punjab",
    line: "Tandoor bread, black lentils, and gravies cooked without hurry.",
    flavour: "Charcoal, butter and the comfort of a gravy meant to be shared.",
    image: photos.kadhai,
    imageAlt: "Vegetable curries and rice in steel bowls",
    dishIds: ["dal-riwayat", "butter-chicken", "amritsari-fish"],
  },
  {
    id: "kashmir",
    name: "Kashmir",
    line: "Fennel, dry ginger, and a lamb curry that smells of the valley.",
    flavour: "Fennel, dry ginger and a red that should not taste of tomato.",
    image: photos.skillet,
    imageAlt: "A dark pan of spiced meat and rice with naan",
    dishIds: ["rogan-josh", "kahwa", "saffron-pulao"],
  },
  {
    id: "bengal",
    name: "Bengal",
    line: "Mustard oil, poppy seed, and a meal that ends in milk and saffron.",
    flavour: "Mustard oil, poppy seed and a sweet note that closes the meal.",
    image: photos.puri,
    imageAlt: "Puffed bread frying in a steel pan",
    dishIds: ["kosha-mangsho", "aloo-posto", "rasmalai"],
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    line: "Desert chilli, gram flour breads, and a heat that stays dry.",
    flavour: "Dried red chilli, ghee and a heat that stays dry on the tongue.",
    image: photos.amber,
    imageAlt: "Sandstone walls and an arched gate at Amber Fort, Jaipur",
    dishIds: ["laal-maas", "missi-roti", "jaljeera"],
  },
  {
    id: "kerala",
    name: "Kerala",
    line: "Coconut, coastal fish, and spice that tastes of the backwaters.",
    flavour: "Coconut, curry leaf and a coastal sourness under the spice.",
    image: photos.bananaLeaf,
    imageAlt: "A meal of rice, curry and breads on a banana leaf",
    dishIds: ["malabar-fish", "tandoori-prawns", "filter-coffee"],
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    line: "Layered biryani, fried onion, and a salan made to be shared.",
    flavour: "Fried onion, mint and saffron, built in layers and left sealed.",
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
  {
    name: "Cardamom",
    note: "Green pods, cracked only when the gravy is nearly done.",
    origin: "Cultivated along the Western Ghats and traded into kitchens across India.",
    flavour: "Cool, floral, with a clean menthol edge.",
    use: "Cracked into gravies at the end, and steeped in milk for sweets.",
  },
  {
    name: "Saffron",
    note: "A few strands for milk, bread and the occasional pulao.",
    origin: "Grown in Kashmir, and treated here as a rare thread rather than a colour.",
    flavour: "Honeyed, floral, and faintly metallic.",
    use: "Bloomed in warm milk for breads, desserts and a restrained pulao.",
  },
  {
    name: "Turmeric",
    note: "Earth and colour, used as a spice rather than a dye.",
    origin: "A rhizome of the south and the Deccan, dried and ground close to cooking.",
    flavour: "Earthy, bitter, and warm.",
    use: "A foundation for gravies and marinades, never a substitute for other spice.",
  },
  {
    name: "Fenugreek",
    note: "Dried leaves, crushed between the palms at the end.",
    origin: "Leaves and seeds from the north and west, used with a light hand.",
    flavour: "Bitter, maple-like, and unmistakably savoury.",
    use: "Crushed over a finished gravy, or toasted as seed in a tadka.",
  },
  {
    name: "Black Cardamom",
    note: "Smoke and camphor, used where the dish can hold it.",
    origin: "Dried over fire in the eastern Himalaya, which is why it tastes of smoke.",
    flavour: "Camphor, resin and a cold smoke.",
    use: "One pod in long meat gravies and in some biryanis. Removed before serving.",
  },
  {
    name: "Coriander",
    note: "Seed for the masala, leaf for the last scatter of green.",
    origin: "Seed from the spice routes of the west; leaf from the morning market.",
    flavour: "Citrus peel and warmth in the seed. Bright and green in the leaf.",
    use: "Ground into the masala, or scattered raw so the dish still smells alive.",
  },
  {
    name: "Mustard",
    note: "Oil and seed, especially when the recipe comes from Bengal.",
    origin: "Oil pressed for the east; seed used whole, cracked or as a paste.",
    flavour: "Pungent, sharp, and slightly sweet once the seed has popped.",
    use: "The fat for a Bengali gravy, and the first sound of a tadka.",
  },
  {
    name: "Clove",
    note: "One or two. Enough to be felt, never enough to numb.",
    origin: "A bud traded into Indian cooking, used sparingly in whole form.",
    flavour: "Sweet, numbing and woody.",
    use: "One or two in a meat gravy or a pot of rice. Never a handful.",
  },
  {
    name: "Cinnamon",
    note: "A quiet sweetness in meat gravies and in kahwa.",
    origin: "Bark used in both savoury potli and in Kashmiri kahwa.",
    flavour: "Sweet wood, warm rather than sharp.",
    use: "A stick in slow gravies, and a quieter note in tea.",
  },
  {
    name: "Cumin",
    note: "Toasted whole, or ground the same morning.",
    origin: "A seed of the north-west, toasted so it smells of itself.",
    flavour: "Earthy, nutty, and a little bitter when it has caught the pan.",
    use: "Whole in tadka, or ground the morning it is cooked.",
  },
];

export const techniques = [
  {
    name: "Dum Cooking",
    text: "A sealed pot and low heat. Steam finishes what the hand began.",
    detail: "The lid is closed and left alone. Biryani and galouti are done when the pot says so, which is why they are never rushed.",
  },
  {
    name: "Tandoor",
    text: "Clay, coal and a short, fierce heat.",
    detail: "Breads blister. Marinades tighten. The smoke stays on the bread, and is treated as an ingredient.",
  },
  {
    name: "Bhuna",
    text: "Cooked until the moisture leaves and the gravy shines.",
    detail: "Onion, meat and spice are worked in the pan until the oil separates. The colour deepens. Water is not added to hurry it.",
  },
  {
    name: "Tadka",
    text: "Fat, then spice. The sound tells you when it is ready.",
    detail: "The fat has to be hot enough for the seed to crack, and not so hot that it burns. That crack is the recipe.",
  },
  {
    name: "Hand-Ground Masala",
    text: "Small batches, so the spice still smells like itself.",
    detail: "Stone or mortar, not a jar that has been open for a month. The kitchen should still smell of what was ground that morning.",
  },
  {
    name: "Slow Cooking",
    text: "Dal, halwa and kosha are clocks.",
    detail: "They are finished when the texture changes — when the lentil yields, when the halwa leaves the pan — not when a timer ends.",
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

export const recipeArchive = {
  kicker: "Written for this house",
  lede: "In the story of RIWAYAT, the recipes live in a cloth-bound book. The handwriting changes. The attention does not. Nothing on this page is a historical record — it is how the kitchen explains itself.",
  margin: "Less chilli. More time. Write it that way.",
  pages: [
    {
      page: "12",
      title: "Galouti",
      region: "Awadh",
      excerpt: "Mince until the grain disappears. Sear in ghee. Do not press the kebab — it should yield to the bread.",
    },
    {
      page: "27",
      title: "Kosha",
      region: "Bengal",
      excerpt: "Mustard oil, and patience. The gravy is finished when it leaves the side of the pan and the oil returns.",
    },
    {
      page: "41",
      title: "Dal",
      region: "Punjab",
      excerpt: "Black lentils overnight. A tempering of garlic and chilli at the last minute, never at the beginning.",
    },
  ],
  memories: [
    {
      label: "Memory",
      text: "A winter afternoon. Carrots for halwa, cardamom in the milk, and someone told to keep stirring.",
    },
    {
      label: "Tradition",
      text: "The same dum, taught by standing beside the pot rather than by reading the page aloud.",
    },
    {
      label: "Craft",
      text: "Masala ground that morning. The stone still smells of it when the first guests are seated.",
    },
  ],
};

export const signatureExperiences = [
  {
    name: "Chef's Tasting Menu",
    detail: "7-course curated experience",
    price: "₹4,200 per guest",
    text: "A sequence written for the evening: a kebab, a coastal note, dum rice, and a sweet that closes the book. The kitchen chooses the order. The table keeps the conversation.",
  },
  {
    name: "Regional Discovery Menu",
    detail: "A guided exploration of India's culinary regions",
    price: "₹3,500 per guest",
    text: "One table, several kitchens. Awadh, Bengal, the coast — served as a path through the archive, not as a list of dishes.",
  },
  {
    name: "Celebration Dining",
    detail: "Custom experience for special occasions",
    price: "Custom pricing",
    text: "A room set for the reason you came. The menu is written with you, then cooked as if the notebook had been given a new page.",
  },
];

export const diningExperiences = [
  {
    id: "private-dining",
    name: "Private Dining",
    guests: "6–10 guests",
    description: "A room of your own, and a menu that does not have to explain itself to the next table.",
    image: photos.thali,
    imageAlt: "A steel thali of small bowls, bread and rice",
  },
  {
    id: "chefs-tasting",
    name: "Chef's Tasting Experience",
    guests: "2–6 guests",
    description: "Seven courses, paced by the kitchen. The story of the house, served in order.",
    image: photos.biryani,
    imageAlt: "Chicken biryani with mint, cucumber and small bowls of sauce",
  },
  {
    id: "family",
    name: "Family Celebrations",
    guests: "4–10 guests",
    description: "Birthdays, anniversaries, the long Sunday table. Bread keeps arriving. The meal is allowed to take its time.",
    image: photos.wood,
    imageAlt: "Steel bowls of curry and a stack of naan on a dark wooden table",
  },
  {
    id: "corporate",
    name: "Corporate Gatherings",
    guests: "8–10 guests",
    description: "A composed room for a conversation that matters. Service stays attentive, and unhurried.",
    image: photos.brassPot,
    imageAlt: "A curry in an engraved brass bowl",
  },
];

export const testimonials = [
  {
    name: "Ananya Sen",
    city: "Kolkata",
    occasion: "Anniversary Dinner",
    quote: "We came for the room and stayed for the quiet. The biryani arrived as if the pot had been waiting for our table.",
    image: photos.guestAnanya,
    imageAlt: "Fictional guest portrait for an anniversary dinner at RIWAYAT",
  },
  {
    name: "Kabir Malhotra",
    city: "Delhi",
    occasion: "Family Celebration",
    quote: "Three generations, one long table. The dal tasted like someone had been trusted with the recipe, not given a shortcut.",
    image: photos.guestKabir,
    imageAlt: "Fictional guest portrait for a family celebration at RIWAYAT",
  },
  {
    name: "Leela Iyer",
    city: "Bengaluru",
    occasion: "Business Dinner",
    quote: "The service never performed. Courses arrived when the conversation allowed them. It felt like a house, not a booking.",
    image: photos.guestLeela,
    imageAlt: "Fictional guest portrait for a business dinner at RIWAYAT",
  },
  {
    name: "Rohan Das",
    city: "Mumbai",
    occasion: "Chef's Tasting",
    quote: "Seven courses, and I could still tell you where each one began. That is rarer than richness.",
    image: photos.guestRohan,
    imageAlt: "Fictional guest portrait for a tasting menu at RIWAYAT",
  },
];
