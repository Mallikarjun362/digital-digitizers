import Link from "next/link";

export default function NavigationBar() {
    return (
        <div className="flex items-center justify-between sticky p-[10px_30px] top-0 bg-white shadow-2xl">
            <Link href="/">
                <img
                    src="https://digitaldigitizers.com/images/Digital_Digitizers_Logo.webp"
                    className="h-[60px]"
                    alt="Logo"
                />
            </Link>
            <div className="flex gap-[10px] items-center text-[17px]">
                <Link href="/admin" className="navLink">
                    Admin
                </Link>
                <Link href="/course" className="navLink">
                    Course
                </Link>
            </div>
        </div>
    );
}
