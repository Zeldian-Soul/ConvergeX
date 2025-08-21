export type ULID = string;

export interface User {
    id: ULID;
    displayName: string;
    email: string;
    photoURL?: string;
    interests: string[];
    followedClubs: ULID[];
    memberships: { [clubId: string]: Membership };
    deviceTokens?: string[];
}

export interface Membership{
    status: "none" | "pending" | "active" | "expired";
    since?: number;
    until?: number;
}

export interface Club{
    id: ULID;
    name: string;
    handle: string;
    about?: string;
    visibility: "public" | "private";
    tags: string[];
    admins: ULID[];
    metrics: { followers: number; members: number};
}

export interface Event{
    id: ULID;
    clubid: ULID;
    title: string;
    summary?: string;
    description?: string;
    coverURL?: string;
    startsAt: number;
    endsAt?: number;
    venue?: string;
    mode?: "offline" | "online";
    tags: string[];
    status: "draft" | "published" |"closed" | "cancelled";
    registration?:{
        required: boolean;
        capacity?: number;
        waitlist?: boolean;
    };
    pricing?:{
        currency: "INR" | string;
        amount: number;
    };
    analytics?:{
        views?: number;
        likes?: number;
        shares?: number;
        registrations?: number;
    };
    createdBy: ULID;
    createdAt: number;
    updatedAt?: number;
}

export interface Registration{
    id: ULID;
    eventId: ULID;
    userId: ULID;
    clubId: ULID;
    status: "initiated" | "pendingPayment" | "paid" | "cancelled" | "refunded" | "waitlisted";
    payment?:{
        orderId: string;
        razorpayPaymentId?: string;
        method?: string;
        amount?: number;
        currency?:string;
        capturedAt?: number;
    };
    remainder?:{
        set: boolean;
        scheduledAt?: number;
    };
    createdAt: number;
}