---
title: "Paper notes: TinyStories: How Small Can Language Models Be and Still Speak Coherent English?"
---

In terms of neural network models, the two size extremes: the gargantuan and the infinitesimal, are both where the cutting edge research is interested in. 

I recently came across an interesting small language model (SLM) called TinyStories because of work: 

Model card (33M variant): [TinyStories-33M](https://huggingface.co/roneneldan/TinyStories-33M)

Paper: [TinyStories: How Small Can Language Models Be and Still Speak Coherent English?](https://arxiv.org/abs/2305.07759) (Eldan and Li, 2023)

This post are some rough notes.

## Main contributions:

### A new dataset(s) for SLM
Uses GPT3.5 and GPT4 to generate a synthetic dataset TinyStories that are 2-3 paragraphs of short stories using vocabulary a 3-4 year old can understand.
Additionally trained a variant TinyStories-Instruct, which can be used for instruction following (e.g. summarising texts)

### Pretrained SLM
Trains a range of SLM (small language models) ranging from 1 transformer layer, 1M params to 4 layers, 33M params. They generate more coherent English texts than larger models like GPT-2 or GPT-Neo (100M and above)

This showed that smaller models can still learn language and have emergence properties (factual knowledge, reasoning, context tracking), but only if trained on simpler texts.

### New Language Model Evaluation paradigm
Introduces a paradigm of evaluation (small) language models using larger LMs like GPT4, which can have a richer scoring scheme than existing benchmarks for LMs

### Suggestive evidence on interpretability of SLM
Suggests that smaller models like these are more interpretable than larger models. They also include some preliminary findings (only suggestive):
* Model width (embedding size) impacts syntax, grammar and factual knowledge more
* Model depth (number of transformer layers) impacts consistency, context tracking more
* Grammar is the easiest to learn (plateaued), followed by consistency, and then creativity (which never plateaued in these models / continue to improve as model size increases)
* Looked into interpretability of the attention heads and neurons in the MLPs in a single transformer layer tiny story model
  * Found some evidence that attention heads specialise into 2 groups: local attentions (for tokens serving grammatical purposes) and global attentions (for tokens serving semantic purposes)

  * Found some evidence that MLP neurons specialise into specific functions (e.g. noun neurons, adjective neurons, name neurons etc.) in contrast with GPT-2's neurons which don't seem to converge to specific functions

### Suggestive evidence on hyperparameter tuning
Suggests smaller models can be used for hyperparameter tuning
Found some evidence to back up the polynomial scaling law between the model size and learning budget for LLMs 

