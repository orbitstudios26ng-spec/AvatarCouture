import { useState } from "react";
import Navbar from "@/pages/Navbar";
import HeroSection from "@/pages/HeroSection";
import DesignStudio from "@/pages/DesignStudio";
import AvatarSection from "@/pages/AvatarSection";
import AIStylist from "@/pages/AIStylist";
import CollectionsSection from "@/pages/CollectionsSection";
import FeaturesSection from "@/pages/FeaturesSection";
import Footer from "@/pages/Footer";
import { type CategoryId } from "@/data/studio";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("tops");
  const [selectedItems, setSelectedItems] = useState<Partial<Record<CategoryId, string>>>({});

  const toggleItem = (category: CategoryId, name: string) => {
    setSelectedItems((current) => ({
      ...current,
      [category]: current[category] === name ? "" : name,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DesignStudio
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        selectedItems={selectedItems}
        onToggleItem={toggleItem}
      />
      <AvatarSection selectedItems={selectedItems} />
      <AIStylist />
      <CollectionsSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
