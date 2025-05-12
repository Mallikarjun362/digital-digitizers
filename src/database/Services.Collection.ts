import { Schema } from "mongoose";
import { z } from "zod";

export const service_ZodSchema = z.object({
    description: z.string().max(1000).optional(),
    posterLink: z.string().url().optional(),
    title: z.string().max(300),
});

// INTERFACE
export interface IService {
    description: string;
    posterLink: string;
    title: string;
    _id?: string;
}

// SCHEMA
export const serviceSchema = new Schema<IService>(
    {
        title: { type: String, maxlength: 300, required: true },
        description: { type: String, maxlength: 1000 },
        posterLink: { type: String, maxlength: 1000 },
    },
    { collection: "ServiceModel" }
);
