import {
    clientEnquirySchema,
    IClientEnquiry,
} from "./ClientEnquiries.Collection";
import mongoose, { Connection, Model } from "mongoose";
import { Schema } from "zod";
import { IService, serviceSchema } from "./Services.Collection";

declare global {
    const mainConn: Connection;
}

export const getMongodbConnection = async (): Promise<Connection> => {
    const MONGODB_CONNECTION_URI =
        process.env.MONGODB_URI +
        "&maxPoolSize=20&socketTimeoutMS=1000&minPoolSize=0";
    await new Promise((r) => setTimeout(r, 300));
    const _globalThis = globalThis as any;
    if (_globalThis.mainConn) {
        // IF ALREADY EXISTS
        console.info(
            `Connection already exists. (${
                (_globalThis.mainConn as any)?.base?.connections?.length
            })`
        );
        return _globalThis.mainConn;
    } else {
        // IF NOT EXISTS
        console.info("Creating MainDB Connection");
        const connection = _globalThis.mainConn
            ? _globalThis.mainConn
            : await mongoose
                  .createConnection(MONGODB_CONNECTION_URI, {
                      appName: "indus-cluster-genesis-mdb0",
                      socketTimeoutMS: 30_000,
                      connectTimeoutMS: 30_000,
                      maxPoolSize: 10,
                  })
                  .asPromise();
        connection.on("connected", () => console.info("MongoDB Connected"));
        connection.on("disconnected", () =>
            console.info("MongoDB Disconnected")
        );
        // SCHEMAS
        connection.model("ClientEnquiryModel", clientEnquirySchema);
        connection.model("ServiceModel", serviceSchema);
        (_globalThis as any)["mainConn"] = connection;
        return connection;
    }
};

type TMyMongodbModel<T> = Model<T, {}, {}, {}, any, Schema<T>>;

interface IMongodbModels {
    ClientEnquiryModel: TMyMongodbModel<IClientEnquiry>;
    ServiceModel: TMyMongodbModel<IService>;
    connection: Connection;
}

export const getMongoDBModels = async (): Promise<IMongodbModels> => {
    const connection = await getMongodbConnection();
    const ClientEnquiryModel: TMyMongodbModel<IClientEnquiry> =
        connection.models["ClientEnquiryModel"];
    const ServiceModel: TMyMongodbModel<IService> =
        connection.models["ServiceModel"];
    return {
        connection,
        ClientEnquiryModel,
        ServiceModel,
    };
};
