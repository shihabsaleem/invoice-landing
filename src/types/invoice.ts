export type InvoiceItem = {
    id: string;
    desc: string;
    qty: number;
    price: number;
    tax: number;
    discount?: number;
};

export type InvoiceData = {
    company: {
        name: string;
        tax: string;
        address: string;
        email: string;
        phone: string;
        logo?: string;
    };
    client: {
        name: string;
        tax: string;
        address: string;
        email: string;
        phone: string;
    };
    details: {
        docType: string;
        invoiceNumber: string;
        invoiceDate: string;
        dueDate: string;
        currency: string;
        brandColor: string;
    };
    items: InvoiceItem[];
    config: {
        enableTax: boolean;
        enableDiscount: boolean;
        discountPercentage: number;
        notesHeading: string;
        notes: string;
        labels: {
            items: string;
            qty: string;
            price: string;
            amount: string;
        }
    };
};

export const DEFAULT_INVOICE: InvoiceData = {
    company: { name: "", tax: "", address: "", email: "", phone: "" },
    client: { name: "", tax: "", address: "", email: "", phone: "" },
    details: {
        docType: "Invoice",
        invoiceNumber: "",
        invoiceDate: new Date().toISOString().split("T")[0],
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
        currency: "$",
        brandColor: "#e11d48", // Brand-600
    },
    items: [
        { id: "1", desc: "", qty: 1, price: 0, tax: 0, discount: 0 }
    ],
    config: {
        enableTax: true,
        enableDiscount: false,
        discountPercentage: 0,
        notesHeading: "Notes",
        notes: "",
        labels: {
            items: "Description",
            qty: "Qty",
            price: "Price",
            amount: "Amount"
        }
    },
};
