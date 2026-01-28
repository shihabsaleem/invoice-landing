import { InvoiceData } from "@/types/invoice";

export function calculateTotals(data: InvoiceData) {
    let subtotal = 0;
    let totalTax = 0;

    data.items.forEach((item) => {
        const amount = (item.qty || 0) * (item.price || 0);
        subtotal += amount;
    });

    const discountAmount = data.config.enableDiscount
        ? (subtotal * (data.config.discountPercentage || 0)) / 100
        : 0;

    const afterDiscount = subtotal - discountAmount;

    if (data.config.enableTax) {
        data.items.forEach((item) => {
            const itemTotal = (item.qty || 0) * (item.price || 0);
            // Weighted tax calculation to match extension logic:
            // totalTax += afterDisc * (itemAmount / subtotal) * (itemTax / 100)
            // If subtotal is 0, avoid division by zero
            if (subtotal > 0) {
                const prop = itemTotal / subtotal;
                totalTax += afterDiscount * prop * ((item.tax || 0) / 100);
            }
        });
    }

    const grandTotal = afterDiscount + totalTax;

    return {
        subtotal,
        discountAmount,
        totalTax,
        grandTotal,
    };
}
