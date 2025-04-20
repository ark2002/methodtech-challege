import Header from "../components/Header";
import PerformanceSummary from "../components/PerformanceSummary";
import ReturnsChart from "../components/ReturnsChart";
import ValuationRatio from "../components/ValuationRatio";

export default function Dashboard() {
    return (
        <div className="bg-background-primary min-h-screen">
            <Header />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 px-4 py-2">
                <PerformanceSummary />
                <ValuationRatio />
            </div>
            <div className="px-4">
                <ReturnsChart />
            </div>
        </div>
    );
}
