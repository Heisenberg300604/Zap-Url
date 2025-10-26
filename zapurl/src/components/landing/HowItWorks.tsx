import { Link, BarChart, Share2 } from "lucide-react";

const steps = [
    {
        icon: Link,
        step: "01",
        title: "Paste Your URL",
        description: "Enter any long URL you want to shorten. No sign-up required to get started.",
    },
    {
        icon: Share2,
        step: "02",
        title: "Get Short Link",
        description: "Instantly receive a clean, short URL powered by enterprise infrastructure.",
    },
    {
        icon: BarChart,
        step: "03",
        title: "Track Performance",
        description: "Monitor clicks, locations, and engagement with detailed analytics.",
    },
];

const HowItWorks = () => {
    return (
        <section className="py-20 sm:py-28 bg-gradient-subtle">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                        How It Works
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Three simple steps to shorter, smarter links
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {steps.map((step, index) => (
                        <div key={step.step} className="relative">
                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-0.5 bg-border" />
                            )}

                            <div className="relative text-center">
                                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-accent/30 bg-accent/10">
                                    <step.icon className="h-10 w-10 text-accent" />
                                </div>
                                <div className="absolute -top-2 right-[calc(50%-3rem)] text-6xl font-bold text-accent/10">
                                    {step.step}
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-foreground">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
