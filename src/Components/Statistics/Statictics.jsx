import { Helmet } from "react-helmet-async";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Statistics = () => {
    const purchaseHistory = JSON.parse(localStorage.getItem("purchase-history")) || [];

    const data = {
        labels: purchaseHistory.map((item) => item.product_title),
        datasets: [
            {
                label: "Price (in USD)",
                data: purchaseHistory.map((item) => item.price),
                backgroundColor: "#9538E2",
                borderColor: "#7030A0",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
        },
    };

    return (
        <div>
            <Helmet><title>Gadget Heaven | Statistics</title></Helmet>
            <div className="p-4">
                <h2 className="text-2xl font-bold text-[#9538E2] mb-4">Purchase Statistics</h2>
                {purchaseHistory.length ? (
                    <Bar data={data} options={options} />
                ) : (
                    <p>No purchases made yet. Start shopping now!</p>
                )}
            </div>
        </div>
    );
};

export default Statistics;
