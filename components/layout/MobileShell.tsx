import BottomNav from './BottomNav';
import Header from './Header';

export default function MobileShell({children}: {children: React.ReactNode}) {
  return (
    <div className="mx-auto flex h-dvh max-w-[420px] min-w-[320px] flex-col border border-border bg-background shadow-sm">
      {/* iOS 노치 영역 확보 */}
      <div className="h-[env(safe-area-inset-top)]" />

      {/* 고정 헤더 */}
      <Header />

      {/* 스크롤 영역 */}
      <main className="flex-1 overflow-y-auto">
        {children}
        {/* iOS 홈바 영역 확보 */}
        <div className="h-[env(safe-area-inset-bottom)]" />
      </main>

      {/* 고정 하단 네비게이션 */}
      {/* <BottomNav /> */}
    </div>
  );
}
