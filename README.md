# AMC Explorer: Jev × Qwen

An interactive explorer for a completed comparison on 20 AMC 12 problems:
four Qwen3.5-9B rollouts per problem and Open-Jev-9B answer probabilities.


Select a problem to inspect all four Qwen responses, correctness, seeds, token
counts, latency, and Jev’s A–E distribution. Use “Read rollout” for the complete
rendered or raw response. Search, difficulty/outcome filters, and JSON/text
exports are included. Jev’s four evaluations are deterministic timing repeats.

The agreement panel provides Venn diagrams for the whole run and selected
problem. Distinct (problem, answer) pairs define the Venn sets, while separate
counters measure all four rollouts. Qwen matches Jev’s highest-probability
choice on 20/80 rollouts (25%); 7/20 problems have at least one match and 1/20
match on all four. The matching-rollout histogram filters the problem browser.
Agreement uses the saved last boxed-letter predictions; matching choices can
be correct or incorrect.

The headline metric is avg@4: mean correctness across four calls for each
problem, averaged across the 20 problems. This run recorded Qwen avg@4 of 70%
and Jev avg@4 of 35%. Workload runtime excludes startup and warmup; individual
Qwen latencies include queueing and overlap across requests.

The app is a standalone HTML file. It also works locally without internet access.
MathJax, Marked, and DOMPurify are bundled with their license notices. No model
inference or backend service runs in the browser.

GitHub Pages serves the repository root on the `main` branch. `.nojekyll` keeps
this a static deployment.
