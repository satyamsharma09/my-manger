import { cn } from "@/lib/utils"

interface DottedSeparatorProps {
    className?: string;
    color?: string;
    height?: string;
    dotsize?: string;
    gapsize?: string;
    direction?: "horizontal" | "vertical";
};

const DottedSeparator = ({
    className,
    color = "#d4d4d8",
    height = "2px",
    dotsize = "2px",
    gapsize = "6px",
    direction = "horizontal"
}: DottedSeparatorProps) => {
    const isHorizontal = direction === "horizontal";

    const dot = parseInt(dotsize); // e.g. 2
    const gap = parseInt(gapsize); // e.g. 6

    const backgroundSize = isHorizontal
        ? `${dot + gap}px ${height}`
        : `${height} ${dot + gap}px`;

    return (
        <div className={cn(
            isHorizontal ? "w-full flex items-center" : "h-full flex flex-col items-center",
            className,
        )}>
            <div
                className={isHorizontal ? "flex-grow" : "flex-grow-0"}
                style={{
                    width: isHorizontal ? "100%" : height,
                    height: isHorizontal ? height : "100%",
                    backgroundImage: `radial-gradient(circle, ${color} ${dotsize}, transparent ${dotsize})`,
                    backgroundSize,
                    backgroundRepeat: isHorizontal ? "repeat-x" : "repeat-y",
                    backgroundPosition: "center",
                }}
            />
        </div>
    );
};

export default DottedSeparator;
