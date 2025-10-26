import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy, ExternalLink } from "lucide-react";
import { toast } from "sonner";

interface ResultDisplayProps {
    shortUrl: string;
    originalUrl: string;
}

const ResultDisplay = ({ shortUrl, originalUrl }: ResultDisplayProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shortUrl);
            setCopied(true);
            toast.success("Copied to clipboard!");
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            toast.error("Failed to copy");
        }
    };

    return (
        <div className="w-full space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="rounded-xl border border-border bg-card p-6">
                <div className="mb-4">
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Original URL
                    </label>
                    <p className="text-sm text-foreground/70 truncate">{originalUrl}</p>
                </div>

                <div className="mb-4">
                    <label className="text-sm font-medium text-foreground mb-2 block">
                        Shortened URL
                    </label>
                    <div className="flex items-center gap-2 rounded-lg bg-background border border-border p-3">
                        <a
                            href={shortUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-accent hover:underline font-medium truncate"
                        >
                            {shortUrl}
                        </a>
                        <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    </div>
                </div>

                <Button
                    onClick={handleCopy}
                    className="w-full bg-success hover:bg-success/90 transition-colors"
                >
                    {copied ? (
                        <>
                            <Check className="mr-2 h-4 w-4" />
                            Copied!
                        </>
                    ) : (
                        <>
                            <Copy className="mr-2 h-4 w-4" />
                            Copy to Clipboard
                        </>
                    )}
                </Button>
            </div>

            <div className="text-center text-sm text-muted-foreground">
                Your link is ready to share! Track analytics in your dashboard.
            </div>
        </div>
    );
};

export default ResultDisplay;
