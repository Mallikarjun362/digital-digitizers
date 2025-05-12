import { Schema } from "mongoose";
import { z } from "zod";

export const clientEnquiry_ZodSchema = z.object({
    service: z.object({ id: z.string(), title: z.string() }),
    fullName: z.string().max(500).optional(),
    message: z.string().max(1000).optional(),
    email: z.string().email(),
});

// INTERFACE
export interface IClientEnquiry {
    service: { id: string; title: string };
    phoneNumber: string;
    fullName: string;
    message: string;
    email: string;
}

// SCHEMA
export const clientEnquirySchema = new Schema<IClientEnquiry>(
    {
        phoneNumber: { type: String, maxlength: 200 },
        email: { type: String, maxlength: 500, required: true },
        fullName: { type: String, maxlength: 500 },
        message: { type: String, maxlength: 1000 },
        service: {
            title: { type: String, required: true },
            id: { type: String, required: true },
        },
    },
    { collection: "ClientEnquiryModel" }
);
