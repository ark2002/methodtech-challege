import useCsvData from "../hooks/useCsvdata";
import Table, { TableRow } from "../ui/Table";

const PerformanceSummary = () => {
    const { data } = useCsvData("/dataset/performanceSummary.csv");

    return (
        <Table
            title="Performance Summary"
            columns={["Metric", "Value", "Benchmark"]}
            data={data as TableRow[]}
            highlightedValues={["Overall Return (%)", "Realized Risk (%)", "Sharpe Ratio"]}
            currencyColumns={["Benchmark"]}
        />
    );
};

export default PerformanceSummary;
