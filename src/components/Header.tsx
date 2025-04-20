import DateRangePicker from "./DatePicker";

export default function Header() {
    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-4 py-3 border-b border-border">
            <h6 className="text-lg md:text-xl text-foreground font-medium text-center md:text-left">
                Portfolio & Benchmark
            </h6>
            <div className="flex flex-wrap items-center gap-2">
                <DateRangePicker />
            </div>
        </div>
    );
}
