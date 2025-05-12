"use server";
import { getMongoDBModels } from "@/database/connection";
import { IService } from "@/database/Services.Collection";
import { revalidatePath } from "next/cache";

export const createUpdateService__Admin_SA = async ({
    id,
    description,
    posterLink,
    title,
}: {
    id?: string;
    title: string;
    description?: string;
    posterLink?: string;
}): Promise<boolean> => {
    const { ServiceModel } = await getMongoDBModels();
    try {
        if (id) {
            await ServiceModel.updateOne(
                { _id: id },
                { $set: { description, posterLink, title } }
            ).exec();
        } else {
            await ServiceModel.create([{ description, posterLink, title }]);
        }
        revalidatePath("/");
        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
};

export const getAllServices__SA = async (): Promise<Array<IService>> => {
    const { ServiceModel } = await getMongoDBModels();
    return JSON.parse(
        JSON.stringify(await ServiceModel.find({}).lean().exec())
    );
};

export const deleteService__Admin_SA = async (id: string): Promise<boolean> => {
    const { ServiceModel } = await getMongoDBModels();
    try {
        if (id) {
            await ServiceModel.deleteOne({ _id: id }).exec();
        }
        return true;
    } catch {
        return false;
    }
};
