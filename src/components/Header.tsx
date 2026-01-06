import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-border">
      <div className="container max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl font-bold tracking-tight">
          Menem Ragab
        </Link>
        
        <nav>
          <Link 
            to="/" 
            className="text-foreground hover:underline underline-offset-4"
          >
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
