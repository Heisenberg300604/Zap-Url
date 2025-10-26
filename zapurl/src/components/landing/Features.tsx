import { Link2, BarChart3, Shield, Zap, Code, Clock } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Sub-100ms response times with global CDN delivery and optimized routing",
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        description: "Industry-standard encryption at rest and in transit. Your links are always protected",
    },
    {
        icon: BarChart3,
        title: "Advanced Analytics",
        description: "Track clicks, geographic data, devices, and referrers with real-time insights",
    },
    {
        icon: Link2,
        title: "Custom Short Codes",
        description: "Create branded, memorable links with custom aliases for better recognition",
    },
    {
        icon: Clock,
        title: "Link Expiration",
        description: "Set automatic expiration dates for time-sensitive campaigns and content",
    },
    {
        icon: Code,
        title: "Developer API",
        description: "RESTful API with comprehensive documentation for seamless integration",
    },
];

const Features = () => {
    return (
        <section className="py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                        Why Choose ZapURL?
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Built with modern infrastructure and designed for scale. Everything you need
                        to manage your links professionally.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-glow"
                        >
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-foreground">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
