export default function MessagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen">
      {children}
    </div>
  );
} 