import {ShoppingCart, Search} from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-12 items-center justify-between border-b bg-white/95 px-3 backdrop-blur">
      <h1 className="text-sm font-semibold">HomeNiq</h1>
      <div className="flex items-center gap-3">
        <Search className="size-5" />
        <ShoppingCart className="size-5" />
      </div>
    </header>
  );
}
