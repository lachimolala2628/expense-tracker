import React from 'react'
import Chart from 'react-apexcharts'


const options = {
    labels: ["Income", "Expense"],
    colors: ["#41B06E", "#C40C0C"],
    chart: {
        width: "50px",
    },
    states: {
        hover: {
            filter: {
                type: "none",
            },
        },
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
        donut: {
            expandOnClick: false,
            donut: {
                labels: {
                    show: false,
                },
            },
        },
    },
    fill: {
        colors: ["#41B06E", "#C40C0C"],
    },
    tooltip: {
        enabled: true,
        theme: "dark",
        style: {
            fontSize: "12px",
            fontFamily: undefined,
            backgroundColor: "#000000",
        },
    },
};

const Charts = ({ expense = 100, income = 100 }) => {
    return (
        <>
            <Chart
                options={options}
                series={[income, expense]}
                type="pie"
                width={"100%"}
                height={"100%"}
            />
        </>
    )
}

export default Charts