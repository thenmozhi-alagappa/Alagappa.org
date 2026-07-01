import { useState } from "react";
import { X, CaretLeft, CaretRight } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { schoolData } from "@/data/schoolData";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    "all",
    ...new Set(schoolData.gallery.map((img) => img.category)),
  ];

  const filteredImages =
    selectedCategory === "all"
      ? schoolData.gallery
      : schoolData.gallery.filter((img) => img.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Gallery</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Photo Gallery
            </h1>
            <p className="text-lg text-muted-foreground">
              Experience our vibrant school community through these captured
              moments of learning, achievement, and friendship.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b">
        <div className="container px-4">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-medium">Filter by:</span>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all"
                      ? "All Categories"
                      : category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span className="text-sm text-muted-foreground ml-auto">
              {filteredImages.length} photos
            </span>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Badge variant="secondary" className="bg-white/90">
                    {image.category}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={closeLightbox}
          >
            <X size={24} />
          </Button>

          {/* Navigation buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
          >
            <CaretLeft size={32} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
          >
            <CaretRight size={32} />
          </Button>

          {/* Image */}
          <div
            className="max-w-4xl max-h-[80vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <Badge variant="outline" className="bg-black/50 text-white border-white/30">
                {selectedImage.category}
              </Badge>
              <p className="text-white mt-2">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}

      {/* Categories Overview */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Categories</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Explore Our Gallery
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through different categories to see specific aspects of our
              school community.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.slice(1).map((category) => {
              const categoryCount = schoolData.gallery.filter(
                (img) => img.category === category
              ).length;
              const categoryImages = schoolData.gallery.filter(
                (img) => img.category === category
              );
              const previewImage = categoryImages[0];
              return (
                <div
                  key={category}
                  className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setSelectedCategory(category)}
                >
                  <img
                    src={previewImage.src}
                    alt={category}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors flex flex-col items-center justify-center">
                    <span className="text-white font-medium capitalize">
                      {category}
                    </span>
                    <span className="text-white/70 text-sm">
                      {categoryCount} photos
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}