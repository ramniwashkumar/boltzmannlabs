import Footer from "@/components/footer/Footer";
import NavbarRebolt from "@/components/navbarRebolt/NavbarRebolt";

export default function ReboltLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <main>{children}</main>
        </>
    );
}
