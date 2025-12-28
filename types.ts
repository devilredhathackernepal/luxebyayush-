export interface Addon {
    id: string;
    name: string;
    price: number;
}

export interface Package {
    id: string;
    name: string;
    price: number;
    description: string;
    features: string[];
    isPopular?: boolean;
}

export interface CustomerDetails {
    name: string;
    countryCode: string;
    phone: string;
}

export interface InvoiceData {
    customer: CustomerDetails;
    selectedPackage: Package;
    selectedAddons: Addon[];
    total: number;
    date: number;
}