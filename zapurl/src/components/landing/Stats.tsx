const stats = [
    { value: "10M+", label: "Links Shortened" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "<100ms", label: "Avg Response" },
    { value: "50+", label: "Countries Served" },
];

const Stats = () => {
    return (
        <section className="py-20 sm:py-28 border-y border-border/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-4xl sm:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm sm:text-base text-muted-foreground">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
