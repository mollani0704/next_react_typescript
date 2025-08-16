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
    content: `
<section style="padding:8px 0">
  <h3 style="font-size:16px;margin:0 0 8px 0;">프리미엄 코튼 티셔츠</h3>
  <p style="color:#555;line-height:1.7;margin:0 0 12px 0;">
    부드러운 촉감과 깔끔한 실루엣의 데일리 티셔츠입니다. 사계절 내내
    단독/레이어드로 활용 가능하며, 변형을 최소화한 넥 라인으로 오래도록
    깔끔한 핏을 유지해 줍니다.
  </p>

  <ul style="margin:0 0 12px 18px;color:#444;line-height:1.7;">
    <li>20수 코튼 100%, 소프트 워싱 가공</li>
    <li>넥 라인 변형 방지 립 원단</li>
    <li>드롭 숄더, 스탠다드 핏</li>
    <li>남녀 공용, 6가지 컬러</li>
  </ul>

  <!-- 착용컷 -->
  <img
    src="http://images.unsplash.com/photo-1520975916090-3105956cec88?auto=format&fit=crop&w=1200&q=80"
    alt="착용컷"
    style="width:100%;height:auto;display:block;margin:12px 0;border-radius:8px;"
  />

  <h4 style="font-size:15px;margin:12px 0 6px 0;">사이즈 가이드</h4>
  <table style="width:100%;border-collapse:collapse;font-size:13px;">
    <thead>
      <tr>
        <th style="text-align:left;border-bottom:1px solid #eee;padding:6px 4px;">사이즈</th>
        <th style="text-align:right;border-bottom:1px solid #eee;padding:6px 4px;">총장</th>
        <th style="text-align:right;border-bottom:1px solid #eee;padding:6px 4px;">가슴단면</th>
        <th style="text-align:right;border-bottom:1px solid #eee;padding:6px 4px;">어깨단면</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:6px 4px;border-bottom:1px solid #f2f2f2;">S</td>
        <td style="padding:6px 4px;text-align:right;border-bottom:1px solid #f2f2f2;">66</td>
        <td style="padding:6px 4px;text-align:right;border-bottom:1px solid #f2f2f2;">50</td>
        <td style="padding:6px 4px;text-align:right;border-bottom:1px solid #f2f2f2;">44</td>
      </tr>
      <tr>
        <td style="padding:6px 4px;border-bottom:1px solid #f2f2f2;">M</td>
        <td style="padding:6px 4px;text-align:right;border-bottom:1px solid #f2f2f2;">70</td>
        <td style="padding:6px 4px;text-align:right;border-bottom:1px solid #f2f2f2;">54</td>
        <td style="padding:6px 4px;text-align:right;border-bottom:1px solid #f2f2f2;">48</td>
      </tr>
      <tr>
        <td style="padding:6px 4px;border-bottom:1px solid #f2f2f2;">L</td>
        <td style="padding:6px 4px;text-align:right;border-bottom:1px solid #f2f2f2;">74</td>
        <td style="padding:6px 4px;text-align:right;border-bottom:1px solid #f2f2f2;">58</td>
        <td style="padding:6px 4px;text-align:right;border-bottom:1px solid #f2f2f2;">52</td>
      </tr>
    </tbody>
  </table>

  <h4 style="font-size:15px;margin:16px 0 6px 0;">세탁 및 취급 주의사항</h4>
  <ol style="margin:0 0 12px 18px;color:#444;line-height:1.7;">
    <li>찬물에 단독 손세탁을 권장합니다.</li>
    <li>표백제 사용을 금합니다.</li>
    <li>건조기 사용 시 수축이 있을 수 있습니다.</li>
  </ol>

  <img
    src="http://images.unsplash.com/photo-1515895309285-129c8a62752d?auto=format&fit=crop&w=1200&q=80"
    alt="디테일컷"
    style="width:100%;height:auto;display:block;margin:12px 0;border-radius:8px;"
  />

  <p style="color:#666;line-height:1.7;margin:8px 0;">
    * 촬영 환경/모니터 환경에 따라 실제 색상과 차이가 있을 수 있습니다.
  </p>

  <p style="color:#555;line-height:1.8;margin:10px 0;">
    소재 정보: 면 100%. 두께감: 보통 · 비침: 없음 · 촬영 모델 178cm / L 착용.
    고객 만족도를 위해 원단 수급/마감 공정은 수시로 개선되고 있으며,
    세부 스펙은 생산 시기마다 ±1~2cm 오차가 있을 수 있습니다.
    반품/교환 시에는 상품 택을 제거하지 말아 주세요.
  </p>

  <img
    src="http://picsum.photos/seed/homeniq-banner/1200/600"
    alt="프로모션 배너"
    style="width:100%;height:auto;display:block;margin:12px 0;border-radius:8px;"
  />
</section>
`.trim(),
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
