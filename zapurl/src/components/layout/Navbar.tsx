import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link2 } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary">
                            <Link2 className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-xl font-semibold text-foreground">ZapURL</span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <Link to="/shorten">
                            <Button variant="default" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
