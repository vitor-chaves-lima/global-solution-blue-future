const buttonSignOut = document.querySelector("#btn-signout");
const chart = document.getElementById("chart");

buttonSignOut.addEventListener("click", () => {
  localStorage.setItem("signedBool", false);
  return location.assign("../home/index.html");
});

async function initChart() {
  await customElements.whenDefined("gmp-map");

  const map = document.querySelector("gmp-map");

  map.innerMap.setOptions({
    mapTypeControl: false,
  });
}

new Chart(chart, {
  type: "bar",
  data: {
    labels: ["SP", "RJ", "BA"],
    datasets: [
      {
        label: "Produtos reciclados",
        data: [2, 3, 2],
        borderWidth: 1,
      },

      {
        label: "Produtos não reciclados",
        data: [1, 3, 1],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  initChart();

  if (localStorage.getItem("signedBool") == "false") {
    alert(
      "Usuário ainda não está logado! Redirecionando para a página de login..."
    );
    return window.location.assign("../login");
  }
});
