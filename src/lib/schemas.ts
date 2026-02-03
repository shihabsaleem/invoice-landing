import { z } from "zod";

// Helper for file validation
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/jpg"];

const phoneValidation = z.string().refine((val) => {
    if (val === "") return true;
    const parts = val.split(" ");
    return parts.length > 1 && parts[1].length >= 6;
}, "Phone number must be at least 6 digits");

export const invoiceSchema = z.object({
    company: z.object({
        name: z.string(), // Removed min(1) to allow empty (no error if null/empty)
        tax: z.string().optional(),
        address: z.string(),
        email: z.string().email("Invalid email address").or(z.literal("")), // Allow empty OR valid email
        phone: phoneValidation,
        logo: z.string().optional(), // Base64 string, so we can't easily validate file type here unless we track the file object separately. 
        // We'll validate the file input onChange event for type/size.
    }),
    client: z.object({
        name: z.string(),
        tax: z.string().optional(),
        address: z.string(),
        email: z.string().email("Invalid email address").or(z.literal("")),
        phone: phoneValidation,
    }),
    details: z.object({
        docType: z.string(),
        invoiceNumber: z.string(),
        invoiceDate: z.string().refine((val) => !isNaN(Date.parse(val)), "Invalid date"),
        dueDate: z.string().refine((val) => !isNaN(Date.parse(val)), "Invalid date"),
        currency: z.string(),
        brandColor: z.string(),
    }),
    items: z.array(z.object({
        id: z.string(),
        desc: z.string(),
        qty: z.number().min(0, "Quantity must be positive"),
        price: z.number().min(0, "Price must be positive"),
        tax: z.number().min(0).optional(),
        discount: z.number().min(0).optional(),
    })).min(1, "At least one item is required"),
    config: z.object({
        enableTax: z.boolean(),
        enableDiscount: z.boolean(),
        notesHeading: z.string().optional(),
        notes: z.string().optional(),
    }),
});

export type InvoiceValidationSchema = z.infer<typeof invoiceSchema>;
