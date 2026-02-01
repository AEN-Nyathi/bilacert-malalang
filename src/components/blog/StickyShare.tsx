import { Twitter, Linkedin, Facebook } from 'lucide-react';

export function StickyShare() {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-2">
        <button className="p-3 bg-blue-400 text-white hover:bg-blue-500">
          <Twitter className="h-5 w-5" />
        </button>
        <button className="p-3 bg-blue-600 text-white hover:bg-blue-700">
          <Linkedin className="h-5 w-5" />
        </button>
        <button className="p-3 bg-blue-800 text-white hover:bg-blue-900">
          <Facebook className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
