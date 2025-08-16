import {NextResponse} from 'next/server';

// ---- 타입 (필요한 부분만) ----
type OptionValue = {
  mallProductNo: number;
  optionNo: number;
  optionValue: string;
  stockCnt: number;
};

type ImageUrlInfo = {url: string; type: 'IMAGE_URL'};
type HasCoupons = {
  product: boolean;
  brand: boolean;
  category: boolean;
  partner: boolean;
  event: boolean;
};
type ProductItem = {
  optionValues: OptionValue[];
  shippingArea: string;
  accumulationUseInfo: {
    usable: boolean;
    accumulationInfo: {unitType: 'PERCENT' | 'WON'; limitValue: number};
  };
  deliveryConditionInfo: {
    summary: string;
    deliveryFeeRanges: {
      deliveryAmt: number;
      below: number;
      aboveOrEqual: number;
    }[];
    criteria: number;
    rangeSummaries: string[];
    perOrderCnt: number;
  };
  expirationDate: string;
  rentalInfos: {
    rentalPeriod: number;
    monthlyRentalAmount: number;
    creditRating: number;
  }[];
  stickerLabels: string[];
  partnerNo: number;
  maxDiscountAmount: number;
  minSalePrice: number;
  maxSalePrice: number;
  brandNo: number;
  listImageUrls: string[];
  hasCoupons: HasCoupons;
  couponDiscountAmt: number;
  contentsIfPausing: string;
  displayCategoryNos: string;
  maxCouponAmt: number;
  registerYmdt: string;
  searchProductId: string;
  frontDisplayYn: boolean;
  urlDirectDisplayYn: boolean;
  productManagementCd: string;
  mainBestProductYn: boolean;
  sectionProductStartYmdt: string | null;
  sectionProductEndYmdt: string | null;
  couponTag: string;
  salePeriodType: 'REGULAR';
  enableCoupons: boolean;
  hsCode: string;
  accumulationInfo: {
    amount: number;
    rewardRateOfProduct: number;
    rewardRateOfMemberBenefit: number;
  };
  accumulationAmtWhenBuyConfirm: number;
  canAddToCart: boolean;
  unitPrice: {name: string; type: string; price: number};
  customProperties: {
    propNo: number;
    propName: string;
    propType: string;
    propValueNo: number;
    propValue: string;
    isMultipleSelection: boolean;
  }[];
  productNameEn: string;
  partnerName: string;
  promotionText: string;
  immediateDiscountAmt: number; // 즉시할인액
  immediateDiscountUnitType: 'WON' | 'PERCENT';
  immediateDiscountStartYmdt: string;
  immediateDiscountEndYmdt: string;
  additionDiscountAmt: number;
  additionDiscountUnitType: 'WON' | 'PERCENT';
  totalReviewCount: number;
  deliveryConditionType: 'CONDITIONAL' | 'FREE' | 'PAID';
  liked: boolean;
  likeCount: number;
  reviewRating: number;
  saleCnt: number;
  stockCnt: number;
  mainStockCnt: number;
  brandName: string;
  brandNameEn: string;
  stickerInfos: {no: number; type: 'TEXT'; label: string; name: string}[];
  adult: boolean;
  saleStartYmdt: string;
  saleEndYmdt: string;
  saleStatusType: 'ONSALE' | 'SOLDOUT' | 'PAUSE';
  reservationData: {
    reservationStartYmdt: string;
    reservationEndYmdt: string;
    reservationDeliveryYmdt: string;
    reservationStockCnt: number;
  };
  imageUrls: string[];
  productNo: number;
  productName: string;
  groupManagementCode: string;
  groupManagementCodeName: string;
  imageUrlInfo: ImageUrlInfo[];
  listImageUrlInfo: ImageUrlInfo;
  productType: string;
  brandNameType: 'NAME_KO' | 'NAME_EN';
  salePrice: number;
  brandNameKo: string;
  productSalePeriodType: string | null;
  isSoldOut: boolean;
};
type ApiResponse = {
  totalCount: number;
  pageCount: number;
  minPrice: number;
  maxPrice: number;
  items: ProductItem[];
  brands: {
    brandNo: number;
    brandName: string;
    brandNameKo: string | null;
    brandNameEn: string | null;
    brandNameType: string;
    count: number;
  }[];
  depth1Categories: any[];
  depth2Categories: any[];
  depth3Categories: any[];
  depth4Categories: any[];
  depth5Categories: any[];
  multiLevelCategories: any[];
  clickUrlPrefix: {url: string; param: string};
  displayableStock: boolean;
};

let seed = 20250816;
const rand = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 2 ** 32;
const pick = <T>(arr: T[]) => arr[Math.floor(rand() * arr.length)];
const nowISO = () => new Date().toISOString();

function makeItem(i: number): ProductItem {
  const brands = ['삼물-브랜드A', '삼물-브랜드B', '삼물-브랜드C'];
  const names = [
    '프리미엄 티셔츠',
    '데일리 팬츠',
    '모던 스니커즈',
    '스마트 텀블러',
    '라이트 백팩',
    '컴팩트 우산',
  ];
  const salePrice = 10000 + Math.floor(rand() * 90000); // 10,000 ~ 100,000
  const immediateDiscountAmt = [0, 1000, 2000, 5000][Math.floor(rand() * 4)];
  const listImg =
    '//shopby-images.cdn-nhncommerce.com/SERVICE/20191212/XYkrzmG.jpg';

  return {
    optionValues: [
      {
        mallProductNo: 10000000 + i,
        optionNo: 1,
        optionValue: '레드',
        stockCnt: 100,
      },
    ],
    shippingArea: 'PARTNER_SHIPPING_AREA',
    accumulationUseInfo: {
      usable: true,
      accumulationInfo: {unitType: 'PERCENT', limitValue: 10},
    },
    deliveryConditionInfo: {
      summary:
        '배송비 3,000원, 10000원 이상 무료 배송 (10000원 이상~20000원 이하 까지)',
      deliveryFeeRanges: [
        {deliveryAmt: 3000, below: 20000, aboveOrEqual: 10000},
      ],
      criteria: 10000,
      rangeSummaries: ['차등 조건 구간 요약'],
      perOrderCnt: 2,
    },
    expirationDate: '2026-07-30',
    rentalInfos: [
      {rentalPeriod: 12, monthlyRentalAmount: 10000, creditRating: 700},
    ],
    stickerLabels: ['스티커라벨'],
    partnerNo: 1,
    maxDiscountAmount: 0,
    minSalePrice: 0,
    maxSalePrice: 0,
    brandNo: 10,
    listImageUrls: [listImg],
    hasCoupons: {
      product: false,
      brand: false,
      category: false,
      partner: false,
      event: false,
    },
    couponDiscountAmt: 0,
    contentsIfPausing: '가격대체문구입니다.',
    displayCategoryNos: '26916',
    maxCouponAmt: 0,
    registerYmdt: nowISO(),
    searchProductId: `ab${1000 + i}`,
    frontDisplayYn: true,
    urlDirectDisplayYn: false,
    productManagementCd: `PRD${10000 + i}`,
    mainBestProductYn: false,
    sectionProductStartYmdt: null,
    sectionProductEndYmdt: null,
    couponTag: '',
    salePeriodType: 'REGULAR',
    enableCoupons: false,
    hsCode: 'HSCODE',
    accumulationInfo: {
      amount: 0,
      rewardRateOfProduct: 0,
      rewardRateOfMemberBenefit: 0,
    },
    accumulationAmtWhenBuyConfirm: 0,
    canAddToCart: true,
    unitPrice: {name: '단위명', type: '개', price: 1000},
    customProperties: [
      {
        propNo: 1,
        propName: '시즌',
        propType: 'STRING',
        propValueNo: 11,
        propValue: '2025',
        isMultipleSelection: true,
      },
    ],
    productNameEn: '',
    partnerName: '다팔아',
    promotionText: '홍보문구',
    immediateDiscountAmt,
    immediateDiscountUnitType: 'WON',
    immediateDiscountStartYmdt: nowISO(),
    immediateDiscountEndYmdt: nowISO(),
    additionDiscountAmt: 0,
    additionDiscountUnitType: 'WON',
    totalReviewCount: Math.floor(rand() * 1000),
    deliveryConditionType: 'CONDITIONAL',
    liked: false,
    likeCount: Math.floor(rand() * 2000),
    reviewRating: Math.round((3 + rand() * 2) * 10) / 10, // 3.0 ~ 5.0
    saleCnt: Math.floor(rand() * 5000),
    stockCnt: 100,
    mainStockCnt: 50,
    brandName: pick(brands),
    brandNameEn: 'dummy brand',
    stickerInfos: [
      {no: 10, type: 'TEXT', label: '스티커라벨', name: '스티커명'},
    ],
    adult: false,
    saleStartYmdt: nowISO(),
    saleEndYmdt: '2027-07-30T05:41:07.141604427',
    saleStatusType: rand() < 0.2 ? 'SOLDOUT' : 'ONSALE',
    reservationData: {
      reservationStartYmdt: '2025-04-30T05:41:07.141373832',
      reservationEndYmdt: '2025-05-30T05:41:07.141536296',
      reservationDeliveryYmdt: '2025-06-30T05:41:07.141578283',
      reservationStockCnt: 5,
    },
    imageUrls: [listImg],
    productNo: 10000000 + i,
    productName: `${pick(names)} ${i}`,
    groupManagementCode: 'CODE',
    groupManagementCodeName: 'CODE NAME',
    imageUrlInfo: [{url: listImg, type: 'IMAGE_URL'}],
    listImageUrlInfo: {url: listImg, type: 'IMAGE_URL'},
    productType: 'NORMAL',
    brandNameType: 'NAME_KO',
    salePrice,
    brandNameKo: '더미 브랜드',
    productSalePeriodType: null,
    isSoldOut: false, // 화면 오버레이에 쓰려면 여기 true/false 사용
  };
}

export async function GET(req: Request) {
  const {searchParams} = new URL(req.url);
  const limit = Math.max(
    1,
    Math.min(50, Number(searchParams.get('limit') ?? '6')),
  ); // 기본 6

  const items = Array.from({length: limit}, (_, idx) => makeItem(idx + 1));

  const res: ApiResponse = {
    totalCount: items.length,
    pageCount: 1,
    minPrice: 0,
    maxPrice: 0,
    items,
    brands: [
      {
        brandNo: 1,
        brandName: '브랜드 이름',
        brandNameKo: null,
        brandNameEn: null,
        brandNameType: 'NAME_EN',
        count: items.length,
      },
    ],
    depth1Categories: [],
    depth2Categories: [],
    depth3Categories: [],
    depth4Categories: [],
    depth5Categories: [],
    multiLevelCategories: [],
    clickUrlPrefix: {url: '/test', param: 'test'},
    displayableStock: true,
  };

  return NextResponse.json(res);
}
