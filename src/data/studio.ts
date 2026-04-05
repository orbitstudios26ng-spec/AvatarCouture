import { Footprints, Gem, Palette, Shirt, Watch, type LucideIcon } from "lucide-react";

export type CategoryId = "tops" | "bottoms" | "shoes" | "accessories" | "jewelry";

export type GarmentItem = {
  name: string;
  color: string;
  description: string;
  silhouetteClass: string;
};

export const categories: { id: CategoryId; label: string; icon: LucideIcon }[] = [
  { id: "tops", label: "Tops", icon: Shirt },
  { id: "bottoms", label: "Bottoms", icon: Palette },
  { id: "shoes", label: "Shoes", icon: Footprints },
  { id: "accessories", label: "Accessories", icon: Watch },
  { id: "jewelry", label: "Jewelry", icon: Gem },
];

export const garmentItems: Record<CategoryId, GarmentItem[]> = {
  tops: [
    {
      name: "Silk Blouse",
      color: "hsl(40 50% 70%)",
      description: "Soft drape with a polished neckline.",
      silhouetteClass: "top-[30%] left-[29%] h-[18%] w-[42%] rounded-[30%_30%_20%_20%]",
    },
    {
      name: "Structured Blazer",
      color: "hsl(20 10% 15%)",
      description: "Sharp tailoring for a stronger shoulder line.",
      silhouetteClass: "top-[28%] left-[25%] h-[23%] w-[50%] rounded-[24%_24%_18%_18%]",
    },
    {
      name: "Crop Top",
      color: "hsl(0 0% 95%)",
      description: "Clean minimal layer with a modern cut.",
      silhouetteClass: "top-[32%] left-[30%] h-[13%] w-[40%] rounded-[28%_28%_18%_18%]",
    },
    {
      name: "Turtleneck",
      color: "hsl(0 72% 45%)",
      description: "Close fit with a bold statement shade.",
      silhouetteClass: "top-[28%] left-[29%] h-[19%] w-[42%] rounded-[30%_30%_20%_20%]",
    },
  ],
  bottoms: [
    {
      name: "Wide-Leg Trousers",
      color: "hsl(20 8% 12%)",
      description: "Fluid shape with extra movement through the leg.",
      silhouetteClass: "top-[47%] left-[31%] h-[25%] w-[38%] rounded-[16%_16%_28%_28%]",
    },
    {
      name: "Pencil Skirt",
      color: "hsl(40 50% 70%)",
      description: "Refined line that keeps the outfit sleek.",
      silhouetteClass: "top-[47%] left-[33%] h-[20%] w-[34%] rounded-[16%_16%_24%_24%]",
    },
    {
      name: "Leather Pants",
      color: "hsl(20 10% 8%)",
      description: "High contrast base with edge and structure.",
      silhouetteClass: "top-[47%] left-[31%] h-[26%] w-[38%] rounded-[16%_16%_28%_28%]",
    },
    {
      name: "Pleated Midi",
      color: "hsl(0 0% 85%)",
      description: "Texture and volume with a soft finish.",
      silhouetteClass: "top-[47%] left-[28%] h-[24%] w-[44%] rounded-[18%_18%_30%_30%]",
    },
  ],
  shoes: [
    {
      name: "Stiletto Heels",
      color: "hsl(0 72% 45%)",
      description: "Elegant finish with a sharp red accent.",
      silhouetteClass: "top-[76%] left-[34%] h-[9%] w-[32%] rounded-full",
    },
    {
      name: "Ankle Boots",
      color: "hsl(20 10% 10%)",
      description: "Grounded shape for a heavier silhouette.",
      silhouetteClass: "top-[75%] left-[32%] h-[10%] w-[36%] rounded-[35%]",
    },
    {
      name: "Strappy Sandals",
      color: "hsl(40 50% 70%)",
      description: "Lightweight finish with warm metallic energy.",
      silhouetteClass: "top-[77%] left-[34%] h-[8%] w-[32%] rounded-full",
    },
    {
      name: "Platform Loafers",
      color: "hsl(20 8% 20%)",
      description: "Chunky base for a fashion-forward stance.",
      silhouetteClass: "top-[75%] left-[32%] h-[10%] w-[36%] rounded-[35%]",
    },
  ],
  accessories: [
    {
      name: "Leather Belt",
      color: "hsl(20 30% 25%)",
      description: "Defines the waist and sharpens the shape.",
      silhouetteClass: "top-[47%] left-[31%] h-[3%] w-[38%] rounded-full",
    },
    {
      name: "Silk Scarf",
      color: "hsl(40 60% 82%)",
      description: "Soft neck detail that lifts the palette.",
      silhouetteClass: "top-[23%] left-[35%] h-[11%] w-[30%] rounded-full",
    },
    {
      name: "Clutch Bag",
      color: "hsl(40 50% 70%)",
      description: "Compact accent for evening styling.",
      silhouetteClass: "top-[47%] left-[62%] h-[13%] w-[12%] rounded-[30%]",
    },
    {
      name: "Sunglasses",
      color: "hsl(20 10% 10%)",
      description: "Instant attitude with a dark frame.",
      silhouetteClass: "top-[18%] left-[35%] h-[6%] w-[30%] rounded-full",
    },
  ],
  jewelry: [
    {
      name: "Gold Cuff",
      color: "hsl(40 50% 70%)",
      description: "Warm metallic highlight around the wrist.",
      silhouetteClass: "top-[46%] left-[67%] h-[6%] w-[8%] rounded-full",
    },
    {
      name: "Pearl Necklace",
      color: "hsl(0 0% 92%)",
      description: "Classic softness at the collar line.",
      silhouetteClass: "top-[25%] left-[36%] h-[5%] w-[28%] rounded-full",
    },
    {
      name: "Statement Ring",
      color: "hsl(40 60% 82%)",
      description: "Subtle shine that still reads on close view.",
      silhouetteClass: "top-[53%] left-[68%] h-[4%] w-[5%] rounded-full",
    },
    {
      name: "Drop Earrings",
      color: "hsl(40 50% 60%)",
      description: "Vertical sparkle that frames the face.",
      silhouetteClass: "top-[18%] left-[34%] h-[8%] w-[32%] rounded-full",
    },
  ],
};

export const collectionCards = [
  {
    title: "Editorial Noir",
    subtitle: "Sharp tailoring and warm metallic balance.",
    tag: "Runway edit",
    accent: "from-amber-300/40 via-transparent to-rose-300/20",
    image: "snap-1",
  },
  {
    title: "Soft Power",
    subtitle: "Cream neutrals with confident structure.",
    tag: "Client favorite",
    accent: "from-sky-300/30 via-transparent to-transparent",
    image: "snap-2",
  },
  {
    title: "After Hours",
    subtitle: "Dark layers designed for statement entrances.",
    tag: "Evening capsule",
    accent: "from-red-300/25 via-transparent to-transparent",
    image: "snap-3",
  },
];
