"use client";

import {
    createUpdateService__Admin_SA,
    deleteService__Admin_SA,
    getAllServices__SA,
} from "@/backend/Admin";
import { IService } from "@/database/Services.Collection";
import { useEffect, useState } from "react";

export default function AdminPage() {
    const [updateService_S, setUpdateService_S] = useState<IService>({
        description: "",
        posterLink: "",
        title: "",
        _id: "",
    });
    const [services_S, setServices_S] = useState<IService[]>([]);
    const refresh = async () => {
        setServices_S(await getAllServices__SA());
    };
    useEffect(() => {
        refresh();
    }, []);
    return (
        <main className="lg:p-[50px_20%] p-[50px_20px]">
            <form
                action={async () => {
                    const res = await createUpdateService__Admin_SA(
                        updateService_S
                    );
                    if (res) {
                        refresh();
                        alert("Process success");
                    } else {
                        alert("Process failed");
                    }
                }}
            >
                <h1>Add Service</h1>
                <input
                    value={updateService_S.title}
                    onChange={(e) =>
                        setUpdateService_S((prev) => ({
                            ...prev,
                            title: e.target.value,
                        }))
                    }
                    placeholder="Service title"
                    name="title"
                    type="text"
                    required
                />
                <input
                    onChange={(e) =>
                        setUpdateService_S((prev) => ({
                            ...prev,
                            posterLink: e.target.value,
                        }))
                    }
                    type="url"
                    name="posterLink"
                    placeholder="Image link"
                    defaultValue={updateService_S.posterLink}
                />
                <textarea
                    onChange={(e) =>
                        setUpdateService_S((prev) => ({
                            ...prev,
                            description: e.target.value,
                        }))
                    }
                    name="description"
                    placeholder="Service description"
                    defaultValue={updateService_S.description}
                />
                <div className="flex gap-[10px]">
                    <input
                        type="reset"
                        value="Clear"
                        onClick={() => {
                            setUpdateService_S({
                                description: "",
                                posterLink: "",
                                title: "",
                            });
                        }}
                    />
                    <input type="submit" value="Add Service" />
                </div>
            </form>
            <br />
            <h1 className="text-[22px]">Services</h1>
            <div className="flex flex-col gap-[30px]">
                {services_S.length
                    ? services_S.map((ele, idx) => (
                          <div
                              key={idx}
                              className="bg-[#0001] p-[20px] rounded-md"
                          >
                              {ele.posterLink ? (
                                  <img src={ele.posterLink} alt="" />
                              ) : null}
                              <b className="text-[30px]">{ele.title}</b>
                              <p>{ele.description}</p>
                              <br />
                              <div className="flex gap-[10px] serviceButtons">
                                  {ele._id ? (
                                      <button
                                          className="bg-red-300 hover:bg-red-400"
                                          onClick={async () => {
                                              const res = ele._id
                                                  ? await deleteService__Admin_SA(
                                                        ele._id
                                                    )
                                                  : null;
                                              if (res) {
                                                  setServices_S((prev) => [
                                                      ...prev.filter(
                                                          (val) =>
                                                              val._id !==
                                                              ele._id
                                                      ),
                                                  ]);
                                                  alert("Deletion Successful");
                                              }
                                          }}
                                      >
                                          Delete
                                      </button>
                                  ) : null}
                                  <button className="bg-orange-300 hover:bg-orange-400">
                                      Update
                                  </button>
                              </div>
                          </div>
                      ))
                    : "Empty"}
            </div>
        </main>
    );
}
