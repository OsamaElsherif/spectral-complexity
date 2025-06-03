# 🌌 Spectral Complexity Theory

Welcome to the official repository of **Spectral Complexity Theory (SCT)** — a new mathematical and computational framework for understanding the geometry of problem complexity, solvability, and hardness.

This repository includes (For Now):

- 📘 Preprints and research on SAT, Fourier-Walsh analysis, and spectral landscapes

---

## 🧠 About the Theory

Spectral Complexity Theory aims to reimagine the way we measure and visualize complexity. Instead of treating Boolean satisfiability (SAT) as purely symbolic, we convert logical formulas into **spectral signals** and project them into continuous geometries.

The approach draws from:

- 🧮 **Fourier and Walsh-Hadamard transforms**  
- 📊 **Spectral metrics** like entropy, energy, and variance  
- 🗺️ **UMAP projections** to map solvable vs unsolvable regions  
- 📐 A **manifold-based representation** of complexity classes

> _"What if we could see the hardness of a problem — before solving it?"_

---

## 🚀 Live Demo

👉 [View the Interactive Site](https://osamaelsherif.github.io/spectral-complexity/)  
📝 [Read the Preprint on ResearchGate](https://www.researchgate.net/publication/392202309)

---

## 📦 Tech Stack

- ⚛️ React (w/ TypeScript)
- 💅 Chakra UI
- 📊 Plotly.js
- ⚡ Vite
- 🌐 GitHub Pages for deployment

---

# 📜 Papers

This repository contains the artifacts and code associated with a series of research papers exploring the spectral and geometric structure of Boolean satisfiability problems (SAT). The goal is to reframe complexity through a continuous, spectral-topological lens and construct a measurable geometry of problem hardness.

---

## Paper 1: Spectral Geometry of SAT

**Title:** Spectral Geometry of Boolean Satisfiability: A Fourier-Walsh Perspective on Complexity Landscapes  
**Link to Preprint:** [https://doi.org/10.13140/RG.2.2.34455.89765](https://doi.org/10.13140/RG.2.2.34455.89765)

### Summary

This paper introduces a novel spectral-topological framework for analyzing Boolean satisfiability (SAT) problems. By applying Fourier and Walsh–Hadamard transforms to logical formulas, it extracts spectral signatures that reveal the internal complexity structure of SAT instances.

Key contributions include:
- Continuous transformation of SAT formulas to \([-1,1]^n\) using Fourier-Walsh.
- Extraction of spectral features (entropy, energy, variance).
- Projection using UMAP to visualize separability between SAT and UNSAT instances.
- Introduction of the concept of a **complexity manifold**, a continuous space encoding problem hardness.

### Folders
- `benchmarks`: Test SAT instances used for evaluation.
- `datasets`: Generated or transformed spectral data.
- `visualizations`: UMAP plots and cluster projections for complexity geometry.

---

## Paper 2: Separability Across k-SAT

**Title:** Spectral Separation and Complexity Landscapes in SAT  
**Link to Preprint:** [https://doi.org/10.13140/RG.2.2.31262.65605](https://doi.org/10.13140/RG.2.2.31262.65605)

### Summary

Building on the foundation laid in Paper 1, this work extends the spectral analysis across multiple levels of k-SAT (2-SAT, 3-SAT, 4-SAT). It tests the **continuity and geometric separability** of these instances within the proposed complexity manifold.

Key contributions include:
- Dynamic spectral feature extraction across varying clause counts.
- Cross-instance UMAP projection for geometric analysis of separability.
- Introduction of spectral deformation and match metrics to evaluate continuity.
- Empirical evidence supporting the existence of a learnable geometric space of SAT complexity.

### Folders
- `benchmarks`: k-SAT benchmarks and experiments.
- `datasets`: Fourier/Walsh-transformed data for multiple k-SAT levels.
- `visualizations`: Comparative plots between 2-SAT, 3-SAT, and 4-SAT instances.

---

## 🧪 Use Cases

- 🔍 Visualizing complexity before solving
- 🧠 Predicting optimal NN architectures via spectrum
- 📐 Comparing AI models and logical problems in the same complexity space

---

## 🧑‍💻 Author

**Osama Elsherif**  
🧠 AI Researcher | CS Graduate | Creator of Spectral Complexity Theory  
📫 [Contact Me](mailto:elsherif.osama155@gmail.com)  
🌐 [LinkedIn](https://www.linkedin.com/in/osama-elsherif-5349b816a/) | [Medium](https://medium.com/@elsherif.osama155)

---

## 📄 License

This repository is licensed under [Creative Commons Attribution 4.0 (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).  
Feel free to explore, fork, and build upon it with proper credit.

---

### ⭐ If you find this work useful, consider starring the repo or sharing it!
