import { Box, Heading, Card, CardBody } from "@chakra-ui/react";
import type { PlotData } from "plotly.js";
import Plot from "react-plotly.js";

export default function UMAPPlotCard() {

  const sat = {
    x: [1, 2, 3, 4, 5],
    y: [1, 3, 2, 4, 5],
    mode: "markers",
    name: "SAT",
    type: "scatter",
    marker: { color: "mediumpurple", size: 10, symbol: "circle" },
  };

  const unsat = {
    x: [-1, -2, -3, -4, -5],
    y: [-1, -3, -2, -4, -5],
    mode: "markers",
    name: "UNSAT",
    type: "scatter",
    marker: { color: "gold", size: 10, symbol: "diamond" },
  };

  return (
    <Card.Root bg="#151b2a"  boxShadow="2xl" borderRadius="2xl" border={0} p={4} mt={10}>
      <CardBody>
        <Heading size="md" mb={4} textAlign="center" color={"white"}>
          UMAP Projection of SAT vs UNSAT
        </Heading>
        <Box>
          <Plot
            data={[sat, unsat] as PlotData[]}
            layout={{
              paper_bgcolor: "transparent",
              plot_bgcolor: "transparent",
              font: { color: "#ffffff" },
              xaxis: { gridcolor: "#222" },
              yaxis: { gridcolor: "#222" },
              legend: { bgcolor: "transparent" },
              margin: { t: 20, l: 40, r: 20, b: 40 },
            }}
            config={{ displayModeBar: false }}
            style={{ width: "100%", height: "400px" }}
          />
        </Box>
      </CardBody>
    </Card.Root>
  );
}