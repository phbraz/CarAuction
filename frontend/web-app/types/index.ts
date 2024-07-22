export interface PagedResult<T> {
  results: T[];
  pageCount: number;
  totalCount: number;
}

export interface Auction {
  id: string;
  createdAt: string;
  updatedAt: string;
  auctionEnd: string;
  seller: string;
  winner?: string;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  imageUrl: string;
  status: string;
  reservePrice: number;
  soldAmount: number;
  currentHighBid: number;
}

export interface Bid {
  id: string;
  auctionId: string;
  bidder: string;
  bidTime: string;
  amount: number;
  bidStatus: string;
}
