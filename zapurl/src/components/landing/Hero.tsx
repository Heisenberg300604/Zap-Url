import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
            {/* Background glow effect */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm backdrop-blur-sm">
                        <Zap className="h-4 w-4 text-accent" />
                        <span className="text-muted-foreground">Lightning-fast URL shortening</span>
                    </div>

                    <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                        Shorten URLs.
                        <br />
                        <span className="bg-gradient-primary bg-clip-text text-transparent">
              Track Everything.
            </span>
                    </h1>

                    <p className="mb-10 text-lg text-muted-foreground sm:text-xl">
                        Professional URL shortening with enterprise-grade reliability. Fast, secure,
                        and packed with features that scale with your needs.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/shorten">
                            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-base group">
                                Start Shortening
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="text-base">
                            View Features
                        </Button>
                    </div>

                    <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                            <span>99.9% Uptime</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-accent" />
                            <span>&lt;100ms Response Time</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                            <span>Enterprise Grade</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
