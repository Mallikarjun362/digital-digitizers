import Image from "next/image";
import BrandLogo from "@/../public/Logo/Logo_Red_1/Standard_400px-W/RED/Digital_Digitizers_Red_Logo_Square_Transparent.png";
export default function CoursePage() {
    return (
        <main>
            {/* ==================================================================================================== */}
            <header className="bg-[linear-gradient(to_right,#00c6ff,#0072ff)] p-[100px_10%] lg:p-[100px_15%] min-h-[30vh] text-white flex flex-col lg:flex-row lg:gap-[100px] fontTimes items-center">
                <Image
                    alt="Brand Logo"
                    src={BrandLogo}
                    className="object-contain lg:flex-1/3"
                />
                <div className="flex flex-col gap-[20px] lg:flex-2/3">
                    <h1 className="text-[calc(20px+3vw)] lg:text-[calc(30px+2vw)]">
                        Become a Digital Marketer in Just 7 Days — Guaranteed
                        Job or Freelance Earning!
                    </h1>
                    <p className="text-[#FFFB] text-[18px]">
                        Powered by Digital Digitizers – India&apos;s No.1 Digital
                        Marketing Company
                    </p>
                    <a
                        href="#"
                        className="bg-[#FFF3] hover:bg-[#FFF5] text-[25px] w-min whitespace-nowrap p-[7px_60px] rounded-full border-[2px] hover:border-white border-transparent"
                    >
                        Join Now
                    </a>
                </div>
            </header>
            {/* ==================================================================================================== */}
            <section>
                <h2 className="sectionTitle">What You’ll Learn</h2>
                <div className="features">
                    <div className="featureBox">
                        <h4>SEO Basics</h4>
                        <p>Rank websites with On-Page & Off-Page techniques</p>
                    </div>
                    <div className="featureBox">
                        <h4>Google & Meta Ads</h4>
                        <p>Live ad campaign setup & optimization</p>
                    </div>
                    <div className="featureBox">
                        <h4>Landing Page Creation</h4>
                        <p>Design conversion-ready pages</p>
                    </div>
                    <div className="featureBox">
                        <h4>WhatsApp Automation</h4>
                        <p>Smart lead follow-up system</p>
                    </div>
                    <div className="featureBox">
                        <h4>Freelancing Platforms</h4>
                        <p>Start earning from Day 1</p>
                    </div>
                    <div className="featureBox">
                        <h4>Bonus Tips</h4>
                        <p>Interviews, resume, & earning tricks</p>
                    </div>
                </div>
            </section>
            {/* ==================================================================================================== */}
            <section>
                <h2 className="sectionTitle">Who Can Join?</h2>
                <div className="who-can-join">
                    <div className="joinBox">Freshers</div>
                    <div className="joinBox">Working Professionals</div>
                    <div className="joinBox">Students</div>
                    <div className="joinBox">Business Owners & Freelancers</div>
                </div>
            </section>
            {/* ==================================================================================================== */}
            <section>
                <h2 className="sectionTitle">Course Features</h2>
                <div className="features">
                    <div className="featureBox">Live + Recorded Lessons</div>
                    <div className="featureBox">
                        100% Practical Assignments Daily
                    </div>
                    <div className="featureBox">WhatsApp Group Support</div>
                    <div className="featureBox">Branded Certificate</div>
                    <div className="featureBox">
                        Client Projects / Internship
                    </div>
                    <div className="featureBox">
                        Affiliate Income Opportunity
                    </div>
                </div>
            </section>
            {/* ==================================================================================================== */}
            <section className="section-certification">
                <h2 className="sectionTitle">
                    Get Certified by Digital Digitizers
                </h2>
            </section>
            {/* ==================================================================================================== */}
            <section className="section-pricing">
                <h2>
                    Only ₹999 <del>₹4,999</del>
                </h2>
                <p>7 Days. Lifetime Access. Job / Freelance Guarantee.</p>
                <a href="#" className="btn-primary">
                    ENROLL NOW
                </a>
            </section>
            {/* ==================================================================================================== */}
            <section>
                <h2 className="sectionTitle">What Our Students Say</h2>
                <div className="testimonials">
                    <div className="testimonial">
                        <p>
                            “I landed my first client within 10 days of joining
                            this crash course. It’s magic!”
                            <br />– Ravi, Freelancer
                        </p>
                    </div>
                    <div className="testimonial">
                        <p>
                            “Their WhatsApp system and real ad training helped
                            me get a job offer within 2 weeks.”
                            <br />– Meena, Chennai
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
