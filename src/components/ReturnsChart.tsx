import dayjs from "dayjs";
import useCsvData from "../hooks/useCsvdata";
import Chart from "../ui/Chart";

interface RawDataEntry {
    Date: string;
    Green: string;
    Blue: string;
    Red: string;
}

const transformToTimeSeries = (rawData: RawDataEntry[]) => {
    const green: [string, number][] = [];
    const blue: [string, number][] = [];
    const red: [string, number][] = [];

    rawData.forEach((item) => {
        const dateISO = dayjs(item.Date).format("YYYY-MM-DD");
        green.push([dateISO, parseFloat(item.Green)]);
        blue.push([dateISO, parseFloat(item.Blue)]);
        red.push([dateISO, parseFloat(item.Red)]);
    });

    return [
        { name: "Green", data: green },
        { name: "Blue", data: blue },
        { name: "Red", data: red },
    ];
};

const ReturnsChart = () => {
    const { data, loading } = useCsvData("/dataset/returnsChart.csv");
    const transformedData = data && transformToTimeSeries(data as RawDataEntry[]);

    return <Chart title="Returns (%)" series={transformedData} loading={loading} />;
};

export default ReturnsChart;
