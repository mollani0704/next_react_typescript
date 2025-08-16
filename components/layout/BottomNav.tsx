import {Home, Heart, User, Layers3} from 'lucide-react';
import {Button} from '@/components/ui/button';

export default function BottomNav() {
  return (
    <nav className="sticky bottom-0 z-50 border-t bg-white/95 backdrop-blur">
      <div className="grid grid-cols-4">
        <Button
          variant="ghost"
          className="h-12 w-full flex-col gap-1 rounded-none"
        >
          <Home className="size-5" />
          <span className="text-[10px] leading-none">홈</span>
        </Button>
        <Button
          variant="ghost"
          className="h-12 w-full flex-col gap-1 rounded-none"
        >
          <Layers3 className="size-5" />
          <span className="text-[10px] leading-none">카테고리</span>
        </Button>
        <Button
          variant="ghost"
          className="h-12 w-full flex-col gap-1 rounded-none"
        >
          <Heart className="size-5" />
          <span className="text-[10px] leading-none">찜</span>
        </Button>
        <Button
          variant="ghost"
          className="h-12 w-full flex-col gap-1 rounded-none"
        >
          <User className="size-5" />
          <span className="text-[10px] leading-none">마이</span>
        </Button>
      </div>
    </nav>
  );
}
