// lib/mocks/productDetail.ts

// 하나만 만들어 두고, 필요하면 값을 바꿔 재사용하세요.
export const productDetailMock = {
  baseInfo: {
    productNo: 10000001,
    saleStartYmdt: '2025-07-30T05:41:07.281707879',
    saleEndYmdt: '2027-07-30T05:41:07.281712641',
    salePeriodType: 'REGULAR',
    registerYmdt: '2025-05-30T05:41:07.281829283',
    promotionText: '홈닉 스페셜 프로모션',
    productName: '모바일 프리미엄 티셔츠',
    productNameEn: 'Mobile Premium T-shirt',
    imageUrls: [
      '//shopby-images.cdn-nhncommerce.com/SERVICE/20191212/XYkrzmG.jpg',
    ],
    placeOriginLabel: '국산 서울 동대문구',
    placeOriginEtcLabel: '',
    manufactureYmdt: '2024-07-30T05:41:07.281778747',
    expirationYmdt: '2026-07-30T05:41:07.281785838',
    contentHeader: '<h3>상세 상단 안내</h3>',
    content: '<div>상품상세 HTML</div>',
    contentFooter: '<p>하단 안내</p>',
    dutyInfo:
      '{"categoryNo":2,"categoryName":"구두/신발","contents":[{"제품 주소재":"상품상세 참조"},{"색상":"상품상세 참조"},{"치수":"상품상세 참조"},{"제조자":"상품상세 참조"},{"제조국":"상품상세 참조"},{"취급시 주의사항":"상품상세 참조"},{"품질보증기준":"상품상세 참조"},{"A/S 책임자와 전화번호":"상품상세 참조"}]}',
    stickerLabels: ['신상품', '인기'],
    stickerInfos: [{no: 10, type: 'TEXT', label: '신상품', name: '스티커명'}],
    optionImageViewable: false,
    productManagementCd: 'PRDC10001',
    purchaseGuide: '구입 안내 사항',
    accumulationUseYn: 'Y',
    accumulationUseLimitInfo: {unitType: 'PERCENT', limitValue: 10},
    deliveryCustomerInfo: '',
    certificationType: 'TARGET',
    certifications: [
      {
        no: 2,
        type: '어린이제품 안전인증',
        organization: '어린이 검사 기관',
        code: '329103921',
        target: '어린이 왕국',
        date: '',
      },
    ],
    productGroup: 'DELIVERY',
    hsCode: 'HSCODE',
    usableRestockNoti: true,
    productType: 'RENTAL',
    productClassType: 'RENTAL',
    mappingType: 'SINGLE',
    customPropertise: [
      {
        propNo: 1,
        propValueNo: 2,
        propType: 'STRING',
        propName: '시즌',
        propValue: '2025',
        multipleSelectionYn: 'Y',
      },
    ],
    couponUseYn: 'Y',
    minorPurchaseYn: 'Y',
    imageUrlInfo: [
      {
        url: '//shopby-images.cdn-nhncommerce.com/SERVICE/20191212/XYkrzmG.jpg',
        type: 'IMAGE_URL',
      },
    ],
  },

  deliveryDate: {daysAfterPurchase: null, daysOfWeek: null, period: null},

  stock: {saleCnt: 1200, stockCnt: 80, mainStockCnt: 40},

  price: {
    salePrice: 39000,
    immediateDiscountAmt: 3000,
    immediateDiscountUnitType: 'WON',
    immediateDiscountStartYmdt: '2025-07-30T05:41:07.281729722',
    immediateDiscountEndYmdt: '2025-08-30T05:41:07.28173438',
    additionDiscountAmt: 1000,
    additionDiscountUnitType: 'WON',
    additionDiscountValue: 1000,
    minSalePrice: 19000,
    maxSalePrice: 99000,
    maxAdditionDiscountAmt: 0,
    maxDiscountAmount: 0,
    unitName: '단위명',
    unitNameType: '개',
    unitPrice: 1000,
    maxCouponAmt: 5000,
    couponDiscountAmt: 1000,
    accumulationAmtWhenBuyConfirm: 0,
    accumulationRate: 0,
    accumulationRateOfMember: 0,
    photoReviewAccumulationAmt: 0,
    contentsIfPausing: '가격대체문구입니다.',
  },

  deliveryFee: {
    deliveryConditionType: 'FIXED_FEE',
    deliveryAmt: 2500,
    aboveDeliveryAmt: null,
    returnDeliveryAmt: 2500,
    deliveryType: 'PARCEL_DELIVERY',
    deliveryCompanyType: 'CJ',
    perOrderCnt: null,
    defaultDeliveryConditionLabel: '배송비 2,500원',
    deliveryAmtLabels: [],
    deliveryCompanyTypeLabel: 'CJ',
    deliveryConditionDetails: [],
    remoteDeliveryAreaFees: [],
    deliveryPrePayment: true,
    returnWarehouse: {
      warehouseNo: 118,
      warehouseName: '1',
      defaultReleaseWarehouseYn: 'N',
      defaultReturnWarehouseYn: 'N',
      partnerNo: 1,
      address: '경기도 용인시 기흥구 청덕동 50',
      detailAddress: '110',
      zipCd: '1234',
      overseaAddress1: '',
      overseaAddress2: '',
      overseaCity: '',
      overseaRegion: '',
      countryCd: 'KR',
      warehouseAddressType: 'ADDRESS',
      deleteYn: 'N',
      registerAdminNo: 1,
      updateYmdt: '2025-07-30T05:41:10.835015015',
      updateAdminNo: 1,
      addressStr: '경기도 용인시 기흥구 청덕동 50 11',
    },
    deliveryCustomerInfo: '',
    totalWeight: 0,
    deliveryTemplateName: '고정배송비',
  },

  limitations: {
    minBuyCnt: 1,
    maxBuyPersonCnt: 0,
    maxBuyTimeCnt: 0,
    maxBuyDays: 0,
    maxBuyPeriodCnt: 0,
    memberOnly: false,
    canAddToCart: true,
    refundable: true,
    nonRefundTypes: ['CANCEL', 'RETURN', 'EXCHANGE'],
    naverPayHandling: true,
  },

  counter: {likeCnt: 12, reviewCnt: 8, inquiryCnt: 5, myInquiryCnt: 1},

  categories: [
    {
      fullCategoryLabel: '의류>티셔츠',
      categories: [
        {label: '의류', depth: 1, categoryNo: 26915},
        {label: '티셔츠', depth: 2, categoryNo: 26916},
      ],
    },
  ],

  brand: null,
  liked: false,

  partner: {
    partnerNo: 1,
    partnerName: '다팔아',
    businessRegistrationNo: '2111112340',
    companyName: '다팔아 코리아',
    onlineMarketingBusinessDeclarationNo: '제 218-1234호',
    ownerName: '홍길동',
    officeAddressLabel:
      '(13487) 경기도 성남시 대왕판교로 645번길 16 플레이뮤지엄<br/>경기도 성남시 분당구 삼평동 629번지 플레이뮤지엄',
    phoneNo: '010-0000-1234',
    faxNo: '031-000-9876',
    email: 'info@example.com',
  },

  status: {
    saleStatusType: 'ONSALE',
    soldout: false,
    display: true,
    productClassType: 'RENTAL',
  },

  partnerNotice: {title: '파트너 공지사항', content: '많이 사주세요'},

  reservationData: {
    reservationStartYmdt: '2025-04-30T05:41:07.281679633',
    reservationEndYmdt: '2025-05-30T05:41:07.28168791',
    reservationDeliveryYmdt: '2025-06-30T05:41:07.281695378',
    reservationStockCnt: 5,
  },

  deliveryGuide: '<p>배송안내 템플릿입니다…</p>',
  afterServiceGuide: '<p>A/S 안내 템플릿입니다…</p>',
  refundGuide: '<p>환불 안내 템플릿입니다…</p>',
  exchangeGuide: '<p>교환 안내 템플릿입니다…</p>',
  liquorDelegationGuide: '<p>주류 통신판매 위임고시 내용입니다…</p>',

  relatedProductNos: [1, 2, 3],

  shippingInfo: {
    shippingAvailable: true,
    shippingConfig: {
      shippingAreaType: 'PARTNER_SHIPPING_AREA',
      shippingAreaPartnerNo: 1,
      combinable: true,
      internationalShippingAvailable: false,
      templateNo: 225,
    },
  },

  groupManagementCode: 'CODE',
  groupManagementCodeName: 'CODE NAME',

  regularDelivery: {discount: {type: 'PERCENT', value: 1}},

  rentalInfos: [],
  displayableStock: true,
  saleMethodType: 'PURCHASE',
  reviewAvailable: true,
  reviewRate: 4.7,
  mainBestProductYn: false,
} as const;

// 이 타입을 다른 곳에서 재사용하기 편하게 export
export type ProductDetail = typeof productDetailMock;
