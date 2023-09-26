import { IAuthorProps } from './author';
import { ISocialLinks } from './socials';

// ----------------------------------------------------------------------

export type ITourProps = {
  id: string;
  slug: string;
  price: number;
  heroImg: string;
  ratings: number;
  reviews: number;
  coverImg: string;
  location: string;
  duration: string;
  continent: string;
  priceSale: number;
  gallery: string[];
  favorited: boolean;
  description: string[] | string;
  languages: string[];
  highlights: string[];
  tourGuide: IAuthorProps;
  shareLinks: ISocialLinks;
  createdAt: Date | string | number;
  availableEnd: Date | string | number;
  availableStart: Date | string | number;
  program: {
    label: string;
    text: string;
  }[];
  includes: {
    label: string;
    enabled: boolean;
    name?: string;
    description?: string;
  }[];
};

export type IHotelProps = {
  id: string;
  slug: string;
  heroImg: string;
  ratings: number;
  reviews: number;
  coverImg: string;
  location: string;
}

export type ITourCheckoutProps = {
  billingAddress: {
    firstName: string;
    lastName: string;
    fullAddress: string;
    fullAddress2: string;
  };
  shippingAddress: {
    firstName: string;
    lastName: string;
    fullAddress: string;
    fullAddress2: string;
  };
  paymentMethods: {
    methods: string;
    card: {
      cardNumber: string;
      cardHolder: string;
      expirationDate: string;
      ccv: string;
    };
  };
};

// ----------------------------------------------------------------------

export type ITourFilterValue = string | string[] | Date | ITourGuide[] | null;

export type ITourFilters = {
  tourGuides: ITourGuide[];
  destination: string[];
  services: string[];
  startDate: Date | null;
  endDate: Date | null;
};

// ----------------------------------------------------------------------

export type ITourGuide = {
  id: string;
  name: string;
  avatarUrl: string;
  phoneNumber: string;
};

export type ITourBooker = {
  id: string;
  name: string;
  avatarUrl: string;
  guests: number;
};

export type ITourItem = {
  id: string;
  name: string;
  price: number;
  totalViews: number;
  tags: string[];
  content: string;
  publish: string;
  images: string[];
  durations: string;
  priceSale: number;
  services: string[];
  destination: string;
  ratingNumber: number;
  bookers: ITourBooker[];
  tourGuides: ITourGuide[];
  createdAt: Date | string | number;
  available: {
    startDate: Date | null;
    endDate: Date | null;
  };
};