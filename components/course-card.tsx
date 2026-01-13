import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart } from "lucide-react";
import Image from "next/image";

interface CourseCardProps {
  title: string;
  instructor: string;
  level: string;
  medium: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  badgeColor?: string;
}

export function CourseCard({
  title,
  instructor,
  level,
  medium,
  price,
  rating,
  reviews,
  image,
  badge,
  badgeColor,
}: CourseCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all">
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {badge && (
          <div
            className={`absolute left-3 top-3 rounded px-2 py-1 text-xs font-bold text-white ${badgeColor}`}
          >
            {badge}
          </div>
        )}
        <button className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white hover:text-red-500 transition-colors">
          <Heart className="size-5" />
        </button>
      </div>

      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary" className="text-[10px] uppercase">
            {level}
          </Badge>
          <Badge variant="outline" className="text-[10px] uppercase">
            {medium}
          </Badge>
        </div>
        <h3 className="text-lg font-bold line-clamp-2 mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">By {instructor}</p>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-end justify-between border-t border-dashed">
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground">Monthly</span>
          <span className="text-lg font-bold text-primary">
            LKR {price.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="size-4 fill-secondary text-secondary" />
          <span className="text-sm font-bold">{rating}</span>
          <span className="text-xs text-muted-foreground">
            ({reviews.toLocaleString()})
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}