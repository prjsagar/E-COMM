import { Star, Heart } from 'lucide-react';

export default function ProductCard({
  name,
  image,
  price,
  originalPrice,
  rating,
  isHot,
  discount,
}) {
  return (
    <div className="group relative overflow-hidden bg-card border-border hover:shadow-hover transition-smooth">
      {/* Hot Badge */}

      {/* Product Image */}
      <div className="relative aspect-square bg-secondary/50 p-6 flex items-center justify-center overflow-hidden bg-[#F6F7F8] ">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-105 transition-smooth"
        />
        {isHot && (
          <div className="absolute top-3 left-3 z-10">
            <div className="bg-red-500 text-white px-2 py-1 ">Hot</div>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col items-center justify-between">
        <h3 className="font-medium text-card-foreground mb-2 line-clamp-2">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-primary font-bold text-lg">
            ${(price ?? 0).toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-muted-foreground line-through text-sm">
              ${originalPrice.toFixed(2)}
            </span>
          )}
          {discount && (
            <span className="text-accent font-medium text-sm">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Add to Cart */}
        {/* <div className="w-full">Add to Cart</div>  */}
      </div>
    </div>
  );
}
