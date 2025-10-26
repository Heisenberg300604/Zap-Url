import { Link2 } from "lucide-react";

const Footer = () => {
    return (
        <footer className="border-t border-border/40 bg-card/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                            <Link2 className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm text-muted-foreground">
              © 2025 ZapURL. Fast, reliable, secure.
            </span>
                    </div>

                    <div className="flex gap-6 text-sm text-muted-foreground">
                        <a href="#" className="transition-colors hover:text-foreground">
                            Privacy
                        </a>
                        <a href="#" className="transition-colors hover:text-foreground">
                            Terms
                        </a>
                        <a href="#" className="transition-colors hover:text-foreground">
                            API Docs
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
