"use client";
import { getAllServices__SA } from "@/backend/Admin";
import { IClientEnquiry } from "@/database/ClientEnquiries.Collection";
import { IService } from "@/database/Services.Collection";
import { useEffect, useState } from "react";

export default function ContactPage() {
    const [details_S, setDetails_S] = useState<IClientEnquiry>({
        email: "",
        fullName: "",
        message: "",
        phoneNumber: "",
        service: { id: "", title: "" },
    });
    const [services_S, setServices_S] = useState<IService[]>([]);
    useEffect(() => {
        (async () => {
            setServices_S(await getAllServices__SA());
        })();
    }, []);
    return (
        <main className="lg:p-[50px_20%] p-[50px_20px]">
            <form action={async () => {}}>
                <h1>Contact us</h1>
                {/* FULL NAME */}
                <input
                    value={details_S.fullName}
                    onChange={(e) =>
                        setDetails_S((prev) => ({
                            ...prev,
                            fullName: e.target.value,
                        }))
                    }
                    placeholder="Name"
                    name="fullName"
                    required
                    type="text"
                />
                {/* EMAIL */}
                <input
                    onChange={(e) =>
                        setDetails_S((prev) => ({
                            ...prev,
                            email: e.target.value,
                        }))
                    }
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    defaultValue={details_S.email}
                />
                {/* MESSAGE */}
                <textarea
                    onChange={(e) =>
                        setDetails_S((prev) => ({
                            ...prev,
                            message: e.target.value,
                        }))
                    }
                    name="message"
                    placeholder="Message"
                    defaultValue={details_S.message}
                />
                {/* PHONE NUMBER */}
                <input
                    onChange={(e) =>
                        setDetails_S((prev) => ({
                            ...prev,
                            phoneNumber: e.target.value,
                        }))
                    }
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone number"
                    defaultValue={details_S.phoneNumber}
                />
                {/* SERVICE */}
                <select name="service" id="" defaultValue="">
                    <option value="" disabled>
                        -- Select Service --
                    </option>
                    {services_S.map((ele, idx) => (
                        <option
                            key={idx}
                            onClick={() => {
                                setDetails_S((prev) => ({
                                    ...prev,
                                    service: { id: ele._id!, title: ele.title },
                                }));
                            }}
                        >
                            {ele.title}
                        </option>
                    ))}
                </select>
                <input type="submit" value="Add Service" />
            </form>
        </main>
    );
}
