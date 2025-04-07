export interface Office {
    id: number;
    name: string;
    thumbnail: string;
    price: number;
    duration: number;
    about: string;
    address: string;
    city: City;
    slug: string;
    rating: number;
    photos: Photo[];
    benefits: Benefit[];
}

interface Photo {
    id: number,
    photo: string,
}

interface Benefit {
    id: number,
    name: string,
}

export interface City {
    id: number,
    name: string,
    photo: string,
    slug: string,
    officeSpaces: Office[],
    officeSpaces_count: number,
}

export interface BookingDetails {
    id: number,
    name: string,
    phone_number: string,
    booking_trx_id: string,
    is_paid: boolean,
    started_date: string,
    ended_date: string,
    total_amount: number,
    duration: number,
    officeSpace: Office,
}