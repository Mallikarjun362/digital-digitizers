import BrandLogo from "@/../public/Logo/Logo_Red_1/Standard_400px-W/RED/Digital_Digitizers_Red_Logo_Square_Transparent.png";
import { getAllServices__SA } from "@/backend/Admin";
import Image from "next/image";

export default async function LandingPage() {
    const services = await getAllServices__SA();
    return (
        <main>
            <header className="bg-[linear-gradient(to_right,#00c6ff,#0072ff)] p-[100px_10%] lg:p-[100px_15%] min-h-[30vh] text-white flex flex-col lg:flex-row lg:gap-[100px] fontTimes items-center">
                <Image
                    alt="Brand Logo"
                    src={BrandLogo}
                    className="object-contain lg:flex-1/3"
                />
                <div className="flex flex-col gap-[20px] lg:flex-2/3">
                    <h1 className="text-[calc(20px+3vw)] lg:text-[calc(30px+2vw)]">
                        Next-gen digital Power house.
                    </h1>
                    <p className="text-[#FFFB] text-[18px]">
                        India&apos;s No.1 Digital Marketing Company
                    </p>
                    <a
                        href="/contact"
                        className="bg-[#FFF3] hover:bg-[#FFF5] text-[25px] w-min whitespace-nowrap p-[7px_60px] rounded-full border-[2px] hover:border-white border-transparent"
                    >
                        Contact us
                    </a>
                </div>
            </header>
            <section className="lg:p-[50px_20%] p-[50px_5%]">
                <h1 className=" font-bold text-[30px]">Services</h1>
                <br />
                <div className="responsiveGrid">
                    {services.map((ele, idx) => (
                        <div
                            className="bg-[#ddd] rounded-lg overflow-hidden flex-1 border-2"
                            key={idx}
                        >
                            {ele.posterLink ? (
                                <img
                                    src={ele.posterLink}
                                    className="w-[100%] object-fill"
                                />
                            ) : null}
                            <div className="p-[20px]">
                                <b className="text-[22px]">{ele.title}</b>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
