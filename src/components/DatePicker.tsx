import { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import dayjs from "dayjs";

const getOrdinal = (d: number) =>
    d +
    (d % 10 === 1 && d !== 11
        ? "st"
        : d % 10 === 2 && d !== 12
            ? "nd"
            : d % 10 === 3 && d !== 13
                ? "rd"
                : "th");

const formatDate = (date?: Date) =>
    date ? `${getOrdinal(date.getDate())} ${dayjs(date).format("MMM, YYYY")}` : "Select date";

const DateRangePicker = () => {
    const [startDate, setStartDate] = useState<Date | undefined>(new Date("2025-01-23"));
    const [endDate, setEndDate] = useState<Date | undefined>(new Date("2025-04-17"));
    const [openPicker, setOpenPicker] = useState<"start" | "end" | null>(null);
    const pickerRef = useRef<HTMLDivElement>(null);
    const endBtnRef = useRef<HTMLButtonElement>(null);
    const [isRightAligned, setIsRightAligned] = useState(false);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
                setOpenPicker(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (openPicker === "end" && endBtnRef.current) {
            const rect = endBtnRef.current.getBoundingClientRect();
            setIsRightAligned(rect.left + 320 > window.innerWidth);
        }
    }, [openPicker]);

    const renderPicker = (
        type: "start" | "end",
        date: Date | undefined,
        setDate: (d: Date | undefined) => void,
        ref?: React.RefObject<HTMLButtonElement | null>
    ) => (
        <div className="relative flex-1">
            <button
                ref={ref}
                onClick={() => setOpenPicker(openPicker === type ? null : type)}
                className="flex items-center justify-between w-full gap-4 px-3 py-3 rounded-md text-xs text-foreground border border-border cursor-pointer min-w-[160px]"
            >
                {formatDate(date)}
                <Calendar className="h-4 w-4 text-foreground" />
            </button>
            {openPicker === type && (
                <div
                    className={`absolute z-50 mt-2 p-4 bg-background-primary rounded-lg shadow-lg border border-border ${type === "end" && isRightAligned ? "right-0" : "left-0"
                        }`}
                >
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={(d) => {
                            setDate(d ?? undefined);
                            setOpenPicker(null);
                        }}
                        defaultMonth={date}
                        modifiersClassNames={{
                            selected: "bg-information text-background-primary",
                        }}
                        classNames={{
                            day: "w-8 h-8 text-sm text-foreground rounded hover:bg-border",
                            today: "text-information",
                            month: "text-foreground font-medium text-center",
                        }}
                        components={{
                            Chevron: ({ orientation = "left" }) =>
                                orientation === "left" ? (
                                    <ChevronLeft className="h-6 w-6 text-information" />
                                ) : (
                                    <ChevronRight className="h-6 w-6 text-information" />
                                ),
                        }}
                    />
                </div>
            )}
        </div>
    );

    return (
        <div
            ref={pickerRef}
            className="flex flex-col sm:flex-row sm:items-center gap-3 flex-wrap w-full"
        >
            <div className="flex items-center gap-2 w-full sm:w-auto">
                {renderPicker("start", startDate, setStartDate)}
                <span className="text-sm text-foreground">–</span>
                {renderPicker("end", endDate, setEndDate, endBtnRef)}
            </div>
            <button className="rounded-md w-full sm:w-[100px] text-sm text-neutral-200 bg-neutral-900 font-medium py-2 transition cursor-pointer border border-border">
                Apply
            </button>
        </div>
    );
};

export default DateRangePicker;
