import React from 'react';

export default function Footer() {
  return (
    <footer
      className="
      w-full h-14 flex items-center justify-around fixed bottom-0 left-1/2 
      -translate-x-1/2 bg-white border-t border-gray-200 max-w-[420px] z-40"
    >
      {/* 네이게이션 버튼/아이콘 자리 */}
      <button className="text-sm text-gray-600 font-medium">홈</button>
      <button className="text-sm text-gray-600 font-medium">메뉴</button>
      <button className="text-sm text-gray-600 font-medium">설정</button>
    </footer>
  );
}
