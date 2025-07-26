import Link from 'next/link';
import React, {ReactNode} from 'react';
import {FaBell, FaShoppingCart, FaUserCircle} from 'react-icons/fa';

interface HeaderProps {
  children?: ReactNode;
}

export default function Header({children}: HeaderProps) {
  return (
    <header
      className="
        w-full h-14 flex items-center justify-between
        bg-white border-b border-gray-200
        sticky top-0 z-50 px-4
      "
    >
      {/* 로고/홈 */}
      <Link href="/" className="text-gray-800 no-underline">
        <span className="font-bold text-xl">ShoppingMall</span>
      </Link>

      {/* 중앙 검색창 */}
      <div className="flex-1 mx-4 max-w-xl">
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          className="
            w-full px-3 py-1.5
            border border-gray-300 rounded-lg
            focus:outline-none focus:border-blue-500
            text-sm
          "
        />
      </div>

      {/* 우측 아이콘 메뉴 */}
      <div className="flex items-center gap-4">
        <Link
          href="/cart"
          aria-label="장바구니"
          className="text-gray-700 hover:text-blue-600"
        >
          <FaShoppingCart size={22} />
        </Link>
        <Link
          href="/mypage"
          aria-label="마이페이지"
          className="text-gray-700 hover:text-blue-600"
        >
          <FaUserCircle size={22} />
        </Link>
        <Link
          href="/notifications"
          aria-label="알림"
          className="text-gray-700 hover:text-blue-600"
        >
          <FaBell size={22} />
        </Link>
      </div>
      {children}
    </header>
  );
}
