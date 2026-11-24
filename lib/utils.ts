import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// Convert string to slug
export function slugify(text: string) {
    if (!text) return '';
    return text
        .toLowerCase()
        .replace(/[^\w]+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

// Convert slug to capitalize string
export function capitalize(str: string) {
    if (!str) return '';
    str = str.replace('-', ' ');
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Format only date
export function formatDate(dateStr: string) {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (!day || !month || !year) return dateStr;
    const dayNum = parseInt(day, 10);
    const padDay = dayNum < 10 ? `0${dayNum}` : `${dayNum}`;
    return `${padDay} ${monthNames[parseInt(month, 10) - 1]} ${year}`;
}

// Format Date as "12 Dec 2012"
export function formatDisplayDate(val?: Date | string | number | null, fallback: string = "N/A"): string {
    if (!val) return fallback;
    const str = String(val).trim();
    if (!str) return fallback;

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Match YYYY-MM-DD
    const match = str.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})/);
    if (match) {
        const year = match[1];
        const month = months[parseInt(match[2], 10) - 1];
        const day = parseInt(match[3], 10);
        if (month && !isNaN(day)) {
            const padDay = day < 10 ? `0${day}` : `${day}`;
            return `${padDay} ${month} ${year}`;
        }
    }

    const d = new Date(str);
    if (isNaN(d.getTime())) return str;
    const padDay = d.getDate() < 10 ? `0${d.getDate()}` : `${d.getDate()}`;
    return `${padDay} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

// Format Date and Time as "12 Dec 2012, 04:00 PM (UTC)"
export function formatUtcDateTime(val?: Date | string | number | null, fallback: string = ""): string {
    if (!val) return fallback;
    const str = String(val).trim();
    if (!str) return fallback;

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Match YYYY-MM-DD HH:mm(:ss)? or YYYY-MM-DDTHH:mm(:ss)?
    const match = str.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})(?:[T\s](\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/);
    if (match && match[4] !== undefined) {
        const year = match[1];
        const month = months[parseInt(match[2], 10) - 1];
        const dayNum = parseInt(match[3], 10);
        const padDay = dayNum < 10 ? `0${dayNum}` : `${dayNum}`;
        let hour = parseInt(match[4], 10);
        const min = parseInt(match[5], 10);
        const ampm = hour >= 12 ? "PM" : "AM";
        hour = hour % 12;
        if (hour === 0) hour = 12;
        const padHour = hour < 10 ? `0${hour}` : `${hour}`;
        const padMin = min < 10 ? `0${min}` : `${min}`;
        return `${padDay} ${month} ${year}, ${padHour}:${padMin} ${ampm} (UTC)`;
    }

    // Fallback using Date object with UTC methods
    const d = new Date(str.includes("Z") || str.includes("+") ? str : `${str.replace(" ", "T")}Z`);
    if (isNaN(d.getTime())) return str;

    const padDay = d.getUTCDate() < 10 ? `0${d.getUTCDate()}` : `${d.getUTCDate()}`;
    const month = months[d.getUTCMonth()];
    const year = d.getUTCFullYear();
    let hour = d.getUTCHours();
    const min = d.getUTCMinutes();
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    if (hour === 0) hour = 12;
    const padHour = hour < 10 ? `0${hour}` : `${hour}`;
    const padMin = min < 10 ? `0${min}` : `${min}`;

    return `${padDay} ${month} ${year}, ${padHour}:${padMin} ${ampm} (UTC)`;
}

// Format number format
export function formatPrice(price: any, decimal = 2) {
    // Format price
    const formattedPrice = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: decimal,
        maximumFractionDigits: 2,
    }).format(price);

    // Return formatted price
    return formattedPrice
}

// Email validator
export function isValidEmail(email: string) {
    // Basic format + minimum 2 character TLD
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

    // Block unwanted keywords
    // const blockedRegex = /text|demo|mailinator|dummy/i;
    const blockedRegex = /text|demo|dummy/i;
    if (blockedRegex.test(email)) return false;

    // Test email against regex
    return emailRegex.test(email);
}

// Phone validator
export function isValidPhone(phone: string, countryCode?: any) {
    if (!phone) return false;
    try {
        const { isValidPhoneNumber } = require("libphonenumber-js");
        const country = typeof countryCode === "string" && countryCode.length === 2 ? countryCode.toUpperCase() : undefined;
        return isValidPhoneNumber(phone.trim(), country);
    } catch {
        const digits = phone.replace(/\D/g, "");
        return digits.length >= 10 && digits.length <= 15;
    }
}

// Convert json to object
export function helperCovertJsonParse(data: any) {
    return typeof data === "string" ? JSON.parse(data) : data;
}

// Slugs for custom Bali tours with specific phone number and CTA settings
export const BALI_CUSTOM_SLUGS = [
    "beyond-the-ordinary-hidden-treasures-of-bali-lombok-6ab67929949b5",
    "yogyakarta-bali-wellness-healing-journey-holistic-health-and-jungle-serenity-6ab6791dc4f9d",
];

export function isBaliCustomTour(slug?: string) {
    if (!slug || typeof slug !== "string") return false;
    const clean = slug.toLowerCase().trim();
    return BALI_CUSTOM_SLUGS.some((s) => clean === s || clean.includes(s));
}

export function getTourPhoneNumber(slug?: string) {
    const isCustom = isBaliCustomTour(slug);
    return {
        display: isCustom ? "+1 (631) 292-8833" : "+1 703 200 3901",
        href: isCustom ? "+1-631-292-8833" : "+1-703-200-3901",
        whatsapp: "+12294666966",
        isCustom,
    };
}