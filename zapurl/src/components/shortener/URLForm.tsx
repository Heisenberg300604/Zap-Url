import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

interface URLFormProps {
    onSubmit: (url: string) => Promise<void>;
    loading: boolean;
}

const URLForm = ({ onSubmit, loading }: URLFormProps) => {
    const [url, setUrl] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (url.trim()) {
            await onSubmit(url);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col sm:flex-row gap-3">
                <Input
                    type="url"
                    placeholder="Enter your long URL here..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                    disabled={loading}
                    className="flex-1 h-12 text-base bg-background border-border focus-visible:ring-accent"
                />
                <Button
                    type="submit"
                    disabled={loading}
                    className="h-12 px-8 bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                    {loading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Shortening...
                        </>
                    ) : (
                        "Shorten URL"
                    )}
                </Button>
            </div>
        </form>
    );
};

export default URLForm;
