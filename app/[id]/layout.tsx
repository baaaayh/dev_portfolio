export default function subPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="sub-layout">
            <div className="sub-layout__inner">{children}</div>
        </div>
    );
}
