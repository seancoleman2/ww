export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t border-gold/20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-500 text-sm ">
            © {new Date().getFullYear()} • Website made with 🖤 • Vibe coded by Sean
          </p>
        </div>
      </div>
    </footer>
  );
} 