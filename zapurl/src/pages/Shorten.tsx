import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import URLForm from "@/components/shortener/URLForm";
import ResultDisplay from "@/components/shortener/ResultDisplay";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const Shorten = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<{ shortUrl: string; originalUrl: string } | null>(null);

    const handleSubmit = async (longUrl: string) => {
        setLoading(true);
        setResult(null);

        try {
            const res = await fetch("/api/links/shorten", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    longURL: longUrl,
                    expiry: null,
                }),
            });

            if (!res.ok) {
                throw new Error("Failed to shorten URL");
            }

            const data = await res.json();
            setResult({
                shortUrl: data.shortUrl,
                originalUrl: longUrl,
            });
            toast.success("URL shortened successfully!");
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Something went wrong";
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />

            <main className="flex-1 pt-32 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to home
                    </Link>

                    <div className="mx-auto max-w-2xl">
                        <div className="text-center mb-10">
                            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                                Shorten Your URL
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Transform long links into clean, shareable URLs in seconds
                            </p>
                        </div>

                        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 mb-8">
                            <URLForm onSubmit={handleSubmit} loading={loading} />
                        </div>

                        {result && (
                            <ResultDisplay shortUrl={result.shortUrl} originalUrl={result.originalUrl} />
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Shorten;
