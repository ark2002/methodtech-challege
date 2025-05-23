import useCsvData from "../hooks/useCsvdata";
import Table, { TableRow } from "../ui/Table";

const ValuationRatio = () => {
    const { data, loading } = useCsvData("/dataset/valueRatio.csv");

    return (
        <Table
            title="Valuation / Ratios"
            columns={["Metric", "Value", "Benchmark"]}
            data={data as TableRow[]}
            highlightedValues={["P / E Ratio", "P / B Ratio", "ROE"]}
            currencyColumns={["Benchmark"]}
            loading={loading}
        />
    );
};

export default ValuationRatio;
