export type TableRow = {
    [key: string]: string | number;
};

type TableProps = {
    title?: string;
    columns: string[];
    data: TableRow[];
    highlightedValues?: (string | number)[];
    currencyColumns?: string[];
};

const formatValue = (
    value: string | number,
    key: string,
    currencyColumns: string[] = []
) => {
    if (typeof value === "number") {
        return currencyColumns.includes(key)
            ? `$${value.toFixed(2)}`
            : value.toFixed(2);
    }

    if (typeof value === "string" && !isNaN(Number(value))) {
        const num = Number(value).toFixed(2);
        return currencyColumns.includes(key) ? `$${num}` : num;
    }

    return value;
};

export default function Table({
    title,
    columns,
    data,
    highlightedValues = [],
    currencyColumns = [],
}: TableProps) {
    return (
        <div className="bg-background-secondary rounded-lg border border-border overflow-hidden shadow-sm min-h-100">
            {title && (
                <div className="p-2">
                    <h2 className="text-foreground text-lg font-medium">{title}</h2>
                </div>
            )}
            <div className="mx-2 mb-1">
                <table className="w-full text-sm text-foreground rounded-lg overflow-hidden">
                    <thead className="bg-black text-muted-foreground text-sm">
                        <tr>
                            {columns.map((col, idx) => (
                                <th
                                    key={idx}
                                    className={`px-3 pt-1 pb-1.5 font-medium leading-6 text-left border-r border-border`}
                                >
                                    {col}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, i) => (
                            <tr
                                key={i}
                                className={`border-t border-border ${i % 2 !== 0 ? "" : "bg-[#ffffff0d]"}`}
                            >
                                {columns.map((col, j) => {
                                    const key = Object.keys(row)[j];
                                    const value = row[key];
                                    const isHighlighted = highlightedValues.includes(value);

                                    return (
                                        <td
                                            key={j}
                                            className={`${isHighlighted ? "px-4" : "px-6"} py-1.25 text-sm text-left leading-5`}
                                        >
                                            {isHighlighted ? (
                                                <p className="text-information px-2 bg-[#ffffff0d] border border-neutral-500 rounded-xl w-fit leading-5">
                                                    {formatValue(value, key, currencyColumns)}
                                                </p>
                                            ) : (
                                                formatValue(value, key, currencyColumns)
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
