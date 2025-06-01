import { Box, Heading, Card, CardBody } from "@chakra-ui/react";
import Plot from "react-plotly.js";

export default function MetricPlotCard() {
  const dynamicTrue = {
    entropy: [0.16, 0.165, 0.167, 0.169, 0.172],
    mid_energy: [0.004, 0.0041, 0.0043, 0.0042, 0.00405],
    variance: [0.0019, 0.00191, 0.00192, 0.0019, 0.001915],
    hardness_score: [0.33, 0.332, 0.331, 0.334, 0.333]
  };

  const dynamicFalse = {
    entropy: [0.14, 0.155, 0.19, 0.20, 0.18],
    mid_energy: [0.003, 0.0032, 0.0045, 0.0046, 0.0043],
    variance: [0.00189, 0.00193, 0.00188, 0.00195, 0.00190],
    hardness_score: [0.31, 0.32, 0.34, 0.35, 0.33]
  };

  const createViolin = (metricName: string, trueData: number[], falseData: number[]) => ({
    data: [
      {
        type: "violin",
        y: falseData,
        name: "False",
        side: "negative",
        line: { color: "orange" },
        fillcolor: "rgb(255, 132, 0)",
        points: "all"
      },
      {
        type: "violin",
        y: trueData,
        name: "True",
        side: "positive",
        line: { color: "blue" },
        fillcolor: "rgb(0, 140, 255)",
        points: "all"
      }
    ],
    layout: {
      title: metricName,
      violingap: 0,
      violinmode: "overlay",
      paper_bgcolor: "transparent",
      plot_bgcolor: "transparent",
      font: { color: "white" },
      margin: { t: 30, l: 40, r: 30, b: 30 }
    },
    config: { displayModeBar: false },
    style: { width: "100%", height: "300px" }
  });

  const plots = [
    createViolin("Entropy", dynamicTrue.entropy, dynamicFalse.entropy),
    createViolin("Mid Energy", dynamicTrue.mid_energy, dynamicFalse.mid_energy),
    createViolin("Variance", dynamicTrue.variance, dynamicFalse.variance),
    createViolin("Hardness Score", dynamicTrue.hardness_score, dynamicFalse.hardness_score)
  ];

  return (
    <Card.Root mt={8} bg="#151b2a" borderRadius="2xl" boxShadow="xl" p={4} border={0}>
      <CardBody>
        <Heading size="md" mb={4} textAlign="center" color="white">
          Metric Distribution by Match (Violin Plots)
        </Heading>
        {plots.map((plot, index) => (
          <Box key={index} mb={6}>
            <Plot
              data={plot.data as any[]}
              layout={{...plot.layout, title: {text: plot.layout.title}}}
              config={plot.config}
              style={plot.style}
            />
          </Box>
        ))}
      </CardBody>
    </Card.Root>
  );
}
