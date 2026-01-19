export interface Customer {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
}

export interface Shipment {
    id: string;
    trackingNumber: string;
    customerId: string;
    status: 'PENDING' | 'IN_TRANSIT' | 'DELIVERED' | 'DELAYED';
    origin: string;
    destination: string;
    estimatedDelivery: string;
}

export const MOCK_CUSTOMERS: Customer[] = [
    {
        id: 'C001',
        name: 'Tech Solutions Inc.',
        email: 'contact@techsolutions.com',
        phone: '+1 555-0101',
        address: '123 Tech Park, Silicon Valley, CA'
    },
    {
        id: 'C002',
        name: 'Global Logistics Co.',
        email: 'logistics@global.com',
        phone: '+1 555-0102',
        address: '456 Harbor View, Miami, FL'
    }
];

export const MOCK_SHIPMENTS: Shipment[] = [
    {
        id: 'S001',
        trackingNumber: 'TRK-987654321',
        customerId: 'C001',
        status: 'IN_TRANSIT',
        origin: 'New York, NY',
        destination: 'Los Angeles, CA',
        estimatedDelivery: '2026-01-25'
    },
    {
        id: 'S002',
        trackingNumber: 'TRK-123456789',
        customerId: 'C002',
        status: 'PENDING',
        origin: 'Chicago, IL',
        destination: 'Houston, TX',
        estimatedDelivery: '2026-01-28'
    },
    {
        id: 'S003',
        trackingNumber: 'TRK-456123789',
        customerId: 'C001',
        status: 'DELIVERED',
        origin: 'Seattle, WA',
        destination: 'Portland, OR',
        estimatedDelivery: '2026-01-15'
    }
];
