import {NextRequest, NextResponse} from 'next/server';
import {mockProducts} from '@/mocks/products';

export async function GET(request: NextRequest) {
  // ?offset=20&limit=10
  const {searchParams} = request.nextUrl;
  const offset = parseInt(searchParams.get('offset') || '0', 10);
  const limit = parseInt(searchParams.get('limit') || '20', 10);

  const sliced = mockProducts.slice(offset, offset + limit);

  const isEnd = offset + limit >= mockProducts.length;

  return NextResponse.json({products: sliced, isEnd});
}
