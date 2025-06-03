# Paper 1: Spectral Geometry of SAT

**Title:** Spectral Geometry of Boolean Satisfiability: A Fourier-Walsh Perspective on Complexity Landscapes  
**Link to Preprint:** [https://doi.org/10.13140/RG.2.2.34455.89765](https://doi.org/10.13140/RG.2.2.34455.89765)

## Summary

This paper introduces a novel spectral-topological framework for analyzing Boolean satisfiability (SAT) problems. By applying Fourier and Walsh–Hadamard transforms to logical formulas, it extracts spectral signatures that reveal the internal complexity structure of SAT instances.

Key contributions include:
- Continuous transformation of SAT formulas to \([-1,1]^n\) using Fourier-Walsh.
- Extraction of spectral features (entropy, energy, variance).
- Projection using UMAP to visualize separability between SAT and UNSAT instances.
- Introduction of the concept of a **complexity manifold**, a continuous space encoding problem hardness.

## Folders
- `benchmarks`: Test SAT instances used for evaluation.
- `datasets`: Generated or transformed spectral data.
- `visualizations`: UMAP plots and cluster projections for complexity geometry.

