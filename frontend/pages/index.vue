<template>
  <div class="min-h-screen bg-gray-100">
    <div class="container mx-auto py-8">
      <h1 class="text-4xl font-bold mb-6">Solar Panel Dashboard</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <!-- Total Solar Panel Output -->
        <div class="p-6 bg-white rounded-lg shadow-lg">
          <h2 class="text-xl font-semibold mb-4">Total Solar Panel Output</h2>
          <canvas id="totalOutputChart"></canvas>
        </div>

        <!-- Performance Estimate -->
        <div class="p-6 bg-white rounded-lg shadow-lg">
          <h2 class="text-xl font-semibold mb-4">Performance Estimate</h2>
          <canvas id="performanceEstimateChart"></canvas>
        </div>

        <!-- Carbon Footprint -->
        <div class="p-6 bg-white rounded-lg shadow-lg">
          <h2 class="text-xl font-semibold mb-4">Carbon Footprint</h2>
          <canvas id="carbonFootprintChart"></canvas>
        </div>
      </div>

      <!-- Performance History -->
      <div class="p-6 bg-white rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold mb-4">Performance History</h2>
        <canvas id="performanceHistoryChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { Chart } from "chart.js/auto";

// Function to render the charts with static data
const renderCharts = () => {
  // Total Output Chart
  const totalOutputCtx = document.getElementById(
    "totalOutputChart",
  ) as HTMLCanvasElement;
  new Chart(totalOutputCtx, {
    type: "bar",
    data: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Output (kWh)",
          data: [200, 300, 250, 400, 350, 450],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true },
      },
    },
  });

  // Performance Estimate Chart
  const performanceEstimateCtx = document.getElementById(
    "performanceEstimateChart",
  ) as HTMLCanvasElement;
  new Chart(performanceEstimateCtx, {
    type: "line",
    data: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Estimated Performance (kWh)",
          data: [100, 150, 120, 180],
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true },
      },
    },
  });

  // Carbon Footprint Chart
  const carbonFootprintCtx = document.getElementById(
    "carbonFootprintChart",
  ) as HTMLCanvasElement;
  new Chart(carbonFootprintCtx, {
    type: "doughnut",
    data: {
      labels: ["Saved Carbon", "Remaining Carbon"],
      datasets: [
        {
          data: [70, 30],
          backgroundColor: ["#36A2EB", "#FF6384"],
        },
      ],
    },
    options: {
      responsive: true,
    },
  });

  // Performance History Chart
  const performanceHistoryCtx = document.getElementById(
    "performanceHistoryChart",
  ) as HTMLCanvasElement;
  new Chart(performanceHistoryCtx, {
    type: "line",
    data: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Historical Performance (kWh)",
          data: [120, 130, 110, 150],
          backgroundColor: "rgba(255, 206, 86, 0.2)",
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true },
      },
    },
  });
};

// Render charts when the component is mounted
onMounted(() => {
  renderCharts();
});
</script>

<style scoped>
/* Add custom styles here if necessary */
</style>
