'use client';

import React, {useEffect, useState} from 'react';
import {useKeenSlider} from 'keen-slider/react';
import {Pause, Play} from 'lucide-react';
import Image from 'next/image';

interface Banner {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

const banners: Banner[] = [
  {
    id: 1,
    imageUrl: '/images/banner1.jpg',
    title: '썸머마켓 여름 생존템',
    description: '올 여름 생존템, 여기 다있다.',
  },
  {
    id: 2,
    imageUrl: '/images/banner2.jpg',
    title: '여름 필수템 특가',
    description: '올 여름 필수 아이템 특가 할인',
  },
  {
    id: 3,
    imageUrl: '/images/banner3.jpg',
    title: '바캉스 준비 완벽 가이드',
    description: '여름 바캉스 필수템 추천',
  },
];

export default function Banner() {
  const [pause, setPause] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  useEffect(() => {
    if (!pause && instanceRef.current) {
      const interval = setInterval(() => {
        instanceRef.current?.next();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [pause, instanceRef]);

  return (
    <div className="relative">
      {/* 슬라이더 */}
      <div ref={sliderRef} className="keen-slider rounded-xl overflow-hidden">
        {banners.map((banner, index) => (
          <div
            className="keen-slider__slide p-0 bg-transparent"
            key={banner.id}
          >
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={banner.imageUrl}
                alt={banner.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
              <div className="inline-block bg-yellow-400 text-xs text-gray-900 font-bold px-2 py-1 rounded mb-2 w-fit">
                기획전
              </div>
              <div className="text-white font-bold text-lg drop-shadow mb-1">
                {banner.title}
              </div>
              <div className="text-gray-200 text-sm drop-shadow">
                {banner.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* 하단 컨트롤 */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white/80 rounded-full px-3 py-1 shadow">
        {/* 멈춤/재생 버튼 */}
        <button
          className="p-1 rounded hover:bg-gray-200 transition"
          onClick={() => setPause(prev => !prev)}
          aria-label={pause ? '재생' : '멈춤'}
        >
          {pause ? <Play size={19} /> : <Pause size={18} />}
        </button>
        {/* 인디케이터 (숫자) */}
        <span className="text-xs font-bold">
          {currentSlide + 1} / {banners.length}
        </span>
      </div>
    </div>
  );
}
