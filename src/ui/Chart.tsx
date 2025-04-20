import React from 'react';
import ReactECharts from 'echarts-for-react';
import dayjs from 'dayjs';

interface SeriesItem {
    name: string;
    data: [string, number][];
}

const seriesColors: Record<string, string> = {
    Green: '#10b981',
    Blue: '#3b82f6',
    Red: '#ef4444',
};

interface TimeChartProps {
    title?: string;
    series: SeriesItem[];
}

const TimeChart: React.FC<TimeChartProps> = ({
    title = 'Returns (%)',
    series,
}) => {
    const options = {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'var(--color-background-primary)',
            borderColor: 'var(--color-border)',
            borderWidth: 1,
            textStyle: {
                color: 'var(--color-foreground)',
                fontFamily: 'Inter',
                fontSize: 12,
            },
            formatter: function (params: { axisValue: string; seriesName: string; data: [string, number]; }[]) {
                const date = dayjs(params[0].axisValue).format('MMM D, YYYY');
                let tooltip = `<div style="font-weight: 500; margin-bottom: 4px;">${date}</div>`;

                params.forEach((item: { seriesName: string; data: [string, number]; }) => {
                    tooltip += `
                        <div style="margin-bottom: 2px;">
                            <span style="display:inline-block;margin-right:8px;border-radius:4px;width:10px;height:10px;background-color:${seriesColors[item.seriesName]};"></span>
                            ${item.seriesName}: ${item.data[1].toFixed(2)}%
                        </div>`;
                });

                return tooltip;
            },
        },
        legend: {
            bottom: 0,
            data: series.map((s) => s.name),
            icon: 'roundRect',
            itemWidth: 14,
            itemHeight: 14,
            itemGap: 20,
            textStyle: {
                color: '#A7A7AB',
                fontFamily: 'Inter',
                fontSize: 12,
            },
            align: 'auto',
        },
        grid: {
            left: 10,
            right: 0,
            bottom: 40,
            top: 20,
            containLabel: true,
        },
        xAxis: {
            type: 'time',
            splitNumber: 7,
            axisLabel: {
                color: '#A7A7AB',
                formatter: (value: number) => {
                    const month = dayjs(value).format('MMM');
                    const showMonths = ['Jan', 'Mar', 'May', 'Jul'];
                    return showMonths.includes(month) ? dayjs(value).format('MMM,YYYY') : '';
                },
                fontFamily: 'Inter',
                align: "left",
            },
            axisLine: { lineStyle: { color: '#28282C' } },
            splitLine: { show: true, lineStyle: { color: '#28282C' } },
        },
        yAxis: {
            type: 'value',
            splitNumber: 6,
            axisLabel: {
                color: '#A7A7AB',
                fontFamily: 'Inter',
                formatter: (value: number, index: number) => {
                    return [0, 3, 6].includes(index) ? `${value}` : '';
                },
            },
            splitLine: {
                show: true,
                lineStyle: { color: '#28282C' },
            },
            axisLine: { lineStyle: { color: '#28282C' } },
        },
        series: series.map((s) => ({
            name: s.name,
            type: 'line',
            data: s.data,
            smooth: true,
            showSymbol: false,
            lineStyle: {
                width: 2,
                color: seriesColors[s.name],
            },
            itemStyle: {
                color: seriesColors[s.name],
            },
        })),
    };

    return (
        <div className="bg-background-secondary p-4 rounded-lg border border-border">
            <h2 className="text-foreground text-lg mb-2">{title}</h2>
            <ReactECharts option={options} style={{ height: 400 }} />
        </div>
    );
};

export default TimeChart;
