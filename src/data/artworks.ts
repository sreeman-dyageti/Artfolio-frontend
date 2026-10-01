import type { Artwork, Collection } from "../types/artwork";

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "A Study in Motion",
    artist: "Mara Solis",
    location: "Brooklyn, NY",
    year: 2025,
    medium: "Oil and graphite on linen",
    dimensions: "76 × 101 cm",
    price: "$3,800",
    genre: "Abstract",
    collection: "Color in motion",
    image:
      "https://cdn.b12.io/client_media/0U0qFqi9/7ff25775-bda6-11f1-8085-0242ac110002-a-sophisticated-contemporary-gallery-artwork-photograph-for-.jpg",
    note:
      "Solis layers loose arcs of pigment until movement feels almost tangible. A quietly confident centerpiece for a considered room.",
  },
  {
    id: 2,
    title: "Sunday, Somewhere",
    artist: "Nina Okafor",
    location: "London, UK",
    year: 2024,
    medium: "Oil on cotton canvas",
    dimensions: "61 × 81 cm",
    price: "$2,450",
    genre: "Figurative",
    collection: "Quiet forms",
    image:
      "https://cdn.b12.io/client_media/0U0qFqi9/7ff30b54-bda6-11f1-927e-0242ac110002-a-contemporary-figurative-oil-painting-artwork-photographed-.jpg",
    note:
      "A pause in the middle of an ordinary day, rendered in warm light and generous, simplified shapes.",
  },
  {
    id: 3,
    title: "Soft Terrain No. 4",
    artist: "Elliot Park",
    location: "Seoul, KR",
    year: 2025,
    medium: "Acrylic and pumice on canvas",
    dimensions: "90 × 70 cm",
    price: "$4,200",
    genre: "Abstract",
    collection: "Color in motion",
    image:
      "https://cdn.b12.io/client_media/0U0qFqi9/8038cd15-bda6-11f1-81ee-0242ac110002-a-richly-textured-contemporary-abstract-painting-artwork-dee.jpg",
    note:
      "Built from tactile layers and softened edges, this work rewards a closer look from every angle.",
  },
  {
    id: 4,
    title: "Last Light, East Pier",
    artist: "Amélie Laurent",
    location: "Marseille, FR",
    year: 2023,
    medium: "Oil on linen",
    dimensions: "80 × 100 cm",
    price: "$3,100",
    genre: "Landscape",
    collection: "Quiet forms",
    image:
      "https://cdn.b12.io/client_media/0U0qFqi9/800b2bf7-bda6-11f1-8266-0242ac110002-a-beautiful-contemporary-landscape-painting-hazy-twilight-co.jpg",
    note:
      "A still coastline at the edge of evening. Laurent makes the space between sea and sky feel wonderfully expansive.",
  },
  {
    id: 5,
    title: "The Red Room",
    artist: "Jo Park",
    location: "Los Angeles, CA",
    year: 2025,
    medium: "Oil and cold wax on panel",
    dimensions: "55 × 72 cm",
    price: "$2,900",
    genre: "Still life",
    collection: "Color in motion",
    image:
      "https://cdn.b12.io/client_media/0U0qFqi9/801f3a50-bda6-11f1-8105-0242ac110002-a-contemporary-sculptural-still-life-painting-in-expressive-.jpg",
    note:
      "A familiar bloom becomes an expressive study in shape, shadow and the pleasures of looking slowly.",
  },
  {
    id: 6,
    title: "Held in the In-Between",
    artist: "Sofia Reyes",
    location: "Mexico City, MX",
    year: 2024,
    medium: "Ink and watercolor on paper",
    dimensions: "50 × 65 cm",
    price: "$1,850",
    genre: "Works on paper",
    collection: "Color in motion",
    image:
      "https://cdn.b12.io/client_media/0U0qFqi9/801c418f-bda6-11f1-a3a1-0242ac110002-an-elegant-contemporary-abstract-artwork-layered-translucent.jpg",
    note:
      "Fluid passages of color meet delicate marks in a one-of-a-kind work on handmade paper.",
  },
  {
    id: 7,
    title: "A Place to Return To",
    artist: "Theo Bennett",
    location: "Lisbon, PT",
    year: 2024,
    medium: "Egg tempera on wood panel",
    dimensions: "68 × 86 cm",
    price: "$3,450",
    genre: "Landscape",
    collection: "Quiet forms",
    image:
      "https://cdn.b12.io/client_media/0U0qFqi9/8002d478-bda6-11f1-86ec-0242ac110002-modern-fine-art-painting-of-a-quiet-architectural-courtyard-.jpg",
    note:
      "An intimate architectural view held in warm afternoon stillness; a small world with a long horizon.",
  },
  {
    id: 8,
    title: "Field Notes in Yellow",
    artist: "Rae Kim",
    location: "Portland, OR",
    year: 2025,
    medium: "Acrylic and collage on canvas",
    dimensions: "72 × 92 cm",
    price: "$2,700",
    genre: "Abstract",
    collection: "New perspectives",
    image:
      "https://cdn.b12.io/client_media/0U0qFqi9/7fed8fea-bda6-11f1-842e-0242ac110002-a-large-contemporary-abstract-artwork-with-sculptural-fields.jpg",
    note:
      "Playful, painterly shapes come together with a lightness that feels both spontaneous and beautifully resolved.",
  },
];

export const genres = [
  "All works",
  "Abstract",
  "Figurative",
  "Landscape",
  "Still life",
  "Works on paper",
];

export const collections: Collection[] = [
  {
    title: "Color in motion",
    count: "04 works",
    descriptor: "For rooms that could use a little energy.",
    artists: "Mara Solis, Elliot Park +2",
  },
  {
    title: "Quiet forms",
    count: "03 works",
    descriptor: "A softer kind of statement.",
    artists: "Nina Okafor, Amélie Laurent +1",
  },
  {
    title: "New perspectives",
    count: "01 work",
    descriptor: "A first look at what’s just arrived.",
    artists: "Rae Kim",
  },
];

export const sortOptions = [
  "Curator’s picks",
  "Newest first",
  "Price: low to high",
  "Artist A–Z",
];