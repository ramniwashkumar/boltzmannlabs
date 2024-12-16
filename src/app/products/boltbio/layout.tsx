export default function BoltbioLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <main>{children}</main>
        </>
    );
}
