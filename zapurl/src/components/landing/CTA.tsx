import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
    return (
        <section className="py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-subtle p-8 sm:p-12 lg:p-16">
                    {/* Glow effect */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

                    <div className="relative mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                            Ready to Shorten Your Links?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Join thousands of users who trust ZapURL for their link management needs.
                            No credit card required to start.
                        </p>
                        <Link to="/shorten">
                            <Button size="lg" className="bg-white text-background hover:bg-white/90 transition-opacity text-base group">
                                Get Started Now
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
