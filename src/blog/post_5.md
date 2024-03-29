---
title: "(Re-post) Why AGI Will Not Be Realized, According to Embodied Cognition Theorists"
---
*This is a migration of my article originally published [here](https://just-a-thought.xyz/2022/09/08/why-agi-will-not-be-realized-according-to-embodied-cognition-theorists/) on the 8th Sep 2022, with minor revisions.*

![Why AGI Will Not Be Realized, According to Embodied Cognition Theorists. This image is generated by Microsoft Copilot](/assets/images/post5_AGI_Ragnar_Fjelland_credit_copilot.png)
*Why AGI Will Not Be Realized, According to Embodied Cognition Theorists. This image is generated by Microsoft Copilot*

## Introduction
In this blog, I’d like to discuss a paper titled [Why general artificial intelligence will not be realized](https://www.nature.com/articles/s41599-020-0494-4) by Ragnar Fjelland.

### Criticisms of symbol-based strong AI
Re-creating the human mind has always been the holy grail of AI research since its inception. Many believed the progress we made in computer science would eventually lead to **strong AI**, an AI that not only possesses human-like intelligence, but is also endowed with a subjective consciousness similar to ours.

However there had always been critics as well. The late philosopher, [Hubert Dreyfus](https://en.wikipedia.org/wiki/Hubert_Dreyfus) became one of the more prominent ones when he published *What Computers Can’t Do: The Limits of Artificial Intelligence* in 1972 dismissing the strong AI endeavour as alchemy.

He attacked the mainstream AI method back then, the [logic-based symbolic AI](https://en.wikipedia.org/wiki/Symbolic_artificial_intelligence) and argued that symbols cannot capture the human intelligence because the latter is “in the world”, a concept from [Heideggerian philosophy](https://en.wikipedia.org/wiki/Martin_Heidegger), while the former is not. One feature of “being-in-the-world-ness” is that much of the knowledge is tacit and cannot be explicitly stated as logical propositions or mutually-exclusively defined tokens, or symbols (Dreyfus, 1972).

Although the reactions from the AI community at the time were rather negative, with many dismissing the criticisms as philosophical mumbo jumbo, the later dead-end encountered by symbolic AI and the AI winter that ensued showed that Dreyfus’s criticisms may indeed hold some legitimacy.

### The new hype: Deep Learning based AGI

Since the turn of the century, especially during the last decade, the new dominant paradigm of AI, that is, [Deep Neural Networks (or just Deep Learning)](https://en.wikipedia.org/wiki/Deep_learning) coupled with [Big Data](https://en.wikipedia.org/wiki/Big_data) seemed to have resolved Dreyfus’s criticisms.

Deep Neural Nets (DNN) do not use symbols (they are called "sub-symbolic"), but rely on the emergent properties of an assembly of simple operations, analogous to how our brain works (you can already tell from its name), even though much more simplified. Training DNNs with Big Data, as in, literally big sets of data in various modalities and forms: images, videos, audios, etc, turns out to be a much more effective and scalable way to instil “knowledge” into a software program, than manually coding up the symbols and logics.

Almost every day there are new problems previously thought impossible for AI suddenly cracked by a novel variant of DNN with a carefully curated dataset.

But now the AI researchers exercise more caution when making big claims; now the new buzzword is **Artificial General Intelligence (AGI), an AI that can solve any problem a human can, with minimal human intervention**.

Compared with strong AI, AGI only sets its ambition on achieving human-level general intelligence, but lays no claims on the consciousness part. One could argue that general intelligence may require consciousness, but that’s a topic for another day.

So, can these much more powerful methods achieve a seemingly weaker claim: can  DNN + Big Data lead to AGI? This paper by Fjelland with a rather provocative title still says no. It can be seen as a renewal of Dreyfus’s original criticisms that covers the latest AI methodsi. It restates the central statement that AGI is not possible because the current methods are still not “in the world”, and approaches this central statement via two angles:

* Current AI lacks real understanding of causality.
* Current AI is not embodied or situated in the (human) world.

## Reason 1: Current AI lacks real understanding of causality
Fjelland, citing the *Book of Why: The New Science of Cause and Effect* (Judea Pearl, 2018) highlighted DL’s well-known issue of inexplicability and attributed it to DL’s inherent lack of causal understanding. This is in no way a novel criticism, but Fjelland injected a bit of Heidegger into the mix, and showed why true causal understanding is so hard to achieve. Fjelland put forward his argumentation roughly this way:

### (A) Causality is different from correlation
We are all familiar with the phrase: “just because A is correlated with B doesn’t necessarily mean A causes B or vice versa”. It is true that two events that occur in conjunction doesn’t tell us anything about which causes which to occur, or if they are caused by some other hidden factors.

Fjelland gave a, rather cliched, example of the relation between smoking and lung cancer. From population study, we had long noticed the pattern that smoking and lung cancer occur frequently together, a correlative relation.

But on its own, this pattern does not tell us if smoking causes lung cancer, or if lung cancer causes people to want to smoke more, or if there’re hidden biophysical or social factors that cause both to co-occur.

### (B) Discovering causality requires intervening in the world
So how do we establish a new causal relation between two events, say event A and B? In the scientific world, the only method is to perform an experiment, to intervene: we introduce event A while controlling all other conditions to be the same, and observe if event B ensues, and by how much; if event B follows the introduction of event A, then we can claim with some confidence that A causes B (directly or indirectly).

In the smoking and lung cancer example, it means we need a clinical trial which randomly separates a group of healthy people into a control group and an experimental group. Both groups would screen for lung cancer regularly, the only difference being subjects in the experimental group start smoking.

Likewise, if we want to test the causal flow in the other direction: lung cancer causes people to smoke more, we need a similar setup: we’d have (magically and inhumanely) the experimental group to develop lung cancer, and then observe if they start smoking more than the control group.

### (C) Causal thinking is still necessary for acquiring knowledge and understanding, and therefore indispensable to AGI
Fjelland acknowledged some radical attacks against causality itself

1. From classical empiricists like [David Hume](https://en.wikipedia.org/wiki/David_Hume) who argues that we cannot prove causality necessarily exists. All we will ever observe is just a conjunction of a series of events, and we should just be satisfied with that.

2. From modern day mathematicians, scientists and engineers claiming the concept of causality is outdated and even unnecessary. For instance, [Bertrand Russel](https://en.wikipedia.org/wiki/Bertrand_Russell) pointed to the mathematical formulation of gravity as an example that in modern physics, there are no causes or effects, just formula relating different variables.

Regarding the first claim which is ontological, Fjelland simply suspended the discussion, believing it’s less fruitful to go into the debate about the existence of causal relationships. But I would further add that we intuitively know that we think in terms of causality. In Hume’s term, causality has become part of our custom, a collective mental habit. So, in the context of AGI, it doesn’t matter what the true nature of causality is; even if it is merely a mental construct, it’s still something that AGI needs to possess in order to think like us.

To the second claim that causality is not necessary or outdated in scientific descriptions, Fjelland argues that although we can abstract away causality in some of our descriptions of world phenomenon, it does not mean that causality is not needed during the discovery of said descriptions in the first place. Newton would still need to perform experiments on the effects of forces to establish the validity of his theory, so that later theorists can abstract away the cause, the force, from the picture.

### (D) Mainstream Deep Learning methods can only discover correlative, not causal, relationships

The (big) data driven AI algorithms are excellent in discovering patterns in the dataset. However, such patterns are only correlative.

Many AI practitioners and researchers may not be too impressed by this claim. The causality issue with DL has long been discovered, and **causal AI** is already becoming a new trend in the field.

This article [The Case for causal AI](https://ssir.org/articles/entry/the_case_for_causal_ai) examines the drawbacks of predictive AI methods like DNN and discusses some causality learning methods (Sgaier, 2020). Another example is this paper *Towards Causal Representation Learning* that discusses the merging of Deep Learning with causality learning (Bernhard Schölkopf, 2021).

These new hybrid methods can leverage the best from both worlds: they can learn low level features with DNN, and organize them into higher level causal variables, forming causal structures. It seems that in the near future we will have agents that can automatically uncover causal relationships from any form of data.

But causality learning methods alone are not sufficient for AGI-level agent. To Fjelland and Dreyfus, the crux of the causality problem for AGI is not merely the lack of more advanced algorithms, nor even the lack of causal representations and their calculus, but the lack of a (human) body that affords the AGI with the right kind of causal structures and allows the AGI to intervene in the (human) world.

## Reason 2: Current AI is not embodied or situated in the (human) world
A body, it seems, is one key missing piece of AGI. This is backed by the [Embodied Cognition theory](https://en.wikipedia.org/wiki/Embodied_cognition), which believes that a human body, hooked into the sensorimotor loop that interacts with the outside world, is necessary for the development of human cognition; some would even argue that the body not merely causes the cognition, but even constitutes the latter (Shapiro, 2021). But this is a topic for another day.

### Can cognition be fully understood just by studying the brain?
Embodied Cognition theory seems to contradict the common beliefs about brains and the nervous system. Modern science tells us that the brain is the seat of our cognition and consciousness. It seems to us that we are just our brain, and everything else, our limbs, eyes, and other organs are just peripherals that sustain or enable us.

This brain reductionist view becomes an almost truth in our collective understanding. Fjelland quotes the [Francis Crick](https://en.wikipedia.org/wiki/Francis_Crick) saying “You are … nothing but the behaviour of a vast assembly of nerve cells and their molecules” (Crick, 1994). The implication here is palpable. If human cognition, or even consciousness, can be fully explained by just looking at the brain and its electrochemical connections, then surely computers can completely decipher and replicate human emotions and intelligence, as they are just biochemical algorithms.

#### “Lifeworld” vs “Objective World”
Fjelland tried to dispute this so called “objectivism” or “scientism” by invoking [Edmund Husserl](https://en.wikipedia.org/wiki/Edmund_Husserl)‘s phenomenological concept of “**lifeworld**“, our everyday world, in contrast to the ideal world described by scientific models.

Husserl’s phenomenology philosophy rejects the idea that all our everyday world can be entirely reduced to and replaced by the world of physical sciences. To understand someone is not by just looking at the biochemistry of their brain, of their nervous system; we need to also look beyond the individuals, to take the situation they are in into the account.

One example Fjelland gave is a thought experiment put forward by the novelist [Theodore Roszak](https://en.wikipedia.org/wiki/Theodore_Roszak_(scholar)). Imagine a hard-working psychiatrist who’s attending a group of patients with severe mental disorders. He followed every rule in the book to treat these patients, but to no avail. In fact, the more earnest his effort, the worse the patients become. Now we zoom out, the psychiatrist’s office is in Buchenwald and the patients are the prisoners in the concentration camp (Roszak, 1992).

The reason we and the oblivious psychiatrist failed to understand these patients was not that we didn’t look at the biochemistry of their brain hard enough, but that we failed to see the bigger context they are in (Fjelland, 2020).

However, a more careful brain reductionist may be quick to point out that the “context”, or parts of it that are relevant to the patients’ “situation”, still reside in the brain. Otherwise, how would the patients be tormented by their situation, if they cannot perceive it or remember it?  If then the reader could have full access to the patients’ perception and memory regions inside their brain, they can retrieve the “context” and thus be able to fully understand the cause of their distress.

In my opinion, this may seem a stronger response to the original example, but it still misses the point. Even if we can retrieve full context from a patient’s brain, what is the “context”, other than yet another description of our everyday world? The neural processes descriptions, be it neural spike trains or the functional connectomes ultimately still need to be decoded into and annotated with the corresponding mental phenomenon, or the “context” to make sense. This is also a point about **intentionality**: our thoughts, our neural processes, are always about something, something in our lifeworld.

#### Embodied sensorimotor stimuli are necessary for the development of cognition
Therefore, Crick’s statement can be inverted on itself. Imagine a brain identical to that of an adult human in all aspects, except that it’s grown in a lab. If it is never connected to a body, or a simulator, is never exposed to any external stimuli and experiences, then how confident are we to claim that this blob of tissues, this “vast assembly of nerve cells” is as intelligent as us? How can we even start to imagine what sort of consciousness it experiences?

If anything, the limited sensory deprivation experiments conducted throughout the last century, showed a very significant disruption in the participants’ mood, cognitive abilities and conscious experiences (Sireteanu R, 2008). When the opposite claim, that consciousness only requires the biological brain alone, lacks evidence, it’s safe to assume that we need external stimuli and proper embodied sensorimotor experiences to think.

### Can Big Data Capture our embodied experiences?
Combing back to the topic of AI, some may argue that Big Data is a way to capture and sample our embodied experiences. In a way, Big Data is closer to the original Husserl and Heideggerian phenomenology than symbolic computationalism, or brain reductionism, because it captures our experiences more directly.

Images are what we see, audio waveforms are what we hear, words are what we think, right? Anyone can sample and describe their lifeworld without having to first reason about what their lifeworld means or if they exist at all.  The data truly seem to “speak for themselves” as most data scientists claim.

However, Fjelland is quick to point out that data, in fact, are always predicated on some model. In addition, the data are still picked and curated by humans. In machine learning jargon, data always contain biases. And according to Bayesians, there are always some prior beliefs that we place in our model (and thus the data we collect to fit that model), no matter how objective we think we are.

Using digital images alone, a 2D array of RGB values, to capture our visual perception seems objective and sensible enough, but it already contains so many prior beliefs about vision: that all “pixels” in our visual field receive equal attention, that our visual perception is always passive, etc.

Therefore, Big Data with Deep Learning is not all that different from symbolic AI, in that sweeping human interventions still exist, but now in the form of data collection and model selection, instead of explicit rules and frames.

### Can Reinforcement Learning capture our embodied experiences?
But what if we can automate data collection and model selection as well? Enter Reinforcement Learning. Fjelland didn’t talk about RL specifically here, but I believe it is very relevant to the discussion (Dreyfus seems to agree as he discussed about RL extensively in his second edition of What Computers Can’t Do). RL frames the intelligence problem into one where an agent interacts with the world to maximize its expected rewards.

In my opinion, what makes RL a lot closer to Heideggerian philosophy and embodied cognition is that the agent is actively interacting with the world. Here the “world” is as important as the agent itself as it provides direct feedback (reward signals) to the agent. Hence, the agent does not need to model the world completely. (although in practice many algorithms choose to, which is called model-based RL).

In addition, the interactive nature of RL also seems to address the intervention problem that we talked about earlier: an RL agent can manipulate its environment, thus could in principle have the ability to conduct experiments to discover the causality in its world. This aspect is also talked about in (Bernhard Schölkopf, 2021). All of these may be the reason why the RL agents seem so eerily lifelike: it’s because they are so coupled to their environment through interactions, just like animals are.

However, there still is a huge gap between what RL offers and what AGI entails. One issue is the use of rewards means most RL tasks are goal specific: there are clearly defined end goals, like in most video games. But what about human coping? What are the end goals of a human life? How do we translate them into reward reinforcements and propagate them down the unstructured paths of life, down to all the novel tasks that we need to learn?

Unfortunately, this devolves into yet another form of rule-writing, where we need to explicitly reason and spell out how much reward we can get for all of our actions in all circumstances. (There are methods to mitigate this issue, like inverse reinforcement learning, but it’s still limited to narrow domains, and is still goal-driven).

Dreyfus, again, uses embodied cognition to argue that we humans do not need such rules, because “our needs, desires and emotions provide us directly with a sense of the appropriateness of our behaviour”. He then concludes:

> “If these needs, desires and emotions in turn depend on the abilities and vulnerabilities of a biological body socialized into a culture, even reinforcement-learning devices still have a very long way to go”
>
> (Dreyfus, What Computers Still Can’t Do: A Critique of Artificial Reason, 1992, p. xlv).

## Conclusion
We discussed Fjelland’s paper, which is a continuation from Hubert Dreyfus’ criticisms of strong AI, to the modern pursuit of AGI. Fjelland examined the latest breakthroughs in AI, namely Big Data and Deep Learning through the lens of causality and embodied cognition theory and concluded that AGI will not be realized because current AI paradigm is still “not in the world”. I expanded on the topics of brain reductionism and Reinforcement Learning, but I haven’t elaborated on my own overall position regarding the paper yet.

## My view: Is AGI a worthwhile pursuit if it's "unachievable"?
Let's assume the embodied cognition hypothesis is true, and AGI is truly "unachievable". Then what's the point? Should we give up on all AGI research?

The central claim that Fjelland and Dreyfus hold: "a human-like intelligence (AGI) may require a human-like body, socialized into a human world, hence, advancements in algorithms and data science alone may not be enough to lead us to true AGI", is completely different than “AGI is physically impossible” or “AGI will never be achieved”.
The former can be easily dispelled by realising that general intelligence already exists in the form of physical humans, us, unless you're a material dualist.
The second is simply scepticism regarding the reach of human technology; a complete explanation of general intelligence phenomenon may be theoretically possible, but our technology shall never reach a point where we can replicate said phenomenon.
I don’t think Fjelland is trying to make such absolute predictions.

To me, this paper is more about cautioning us against a new brand of scientism based on worshiping current AI, algorithms and data as the superior form of intelligence and the supreme reign of truth.

In his last couple of paragraphs Fjelland cautions “If we think …, that the world is governed at the bottom by algorithms, then we’ll have a tendency to overestimate the powers of AI and underestimate human accomplishments… may lead to serious oversimplifications of human and social phenomena”. (Fjelland, 2020)

I agree with Fjelland about this sentiment. Having more data and more algorithms to process those data is great. But they can yet replace real human understanding, because our embodied life processes are where the understanding occurs and where it’s validated. So we should exercise caution when we consider ceding our understanding and agency to algorithms and replacing humans with AIs, naively believing the latter is always superior.

That being said, I still believe in the values of pursuing AGI, first as an engineering exercise, but more so as an intellectual quest to understand the big questions: what is intelligence, what makes up our mind, our “soul”? We humans as a species will never stop searching for answers to these questions, and we for sure will keep using our newest technologies to explore and validate our hypothesis.

Our current methods might still be primitive and misguided, like alchemy, as Dreyfus puts it. But it was precisely the dream to transform lead into gold that ignited a multi-century interest in studying the properties of various matter. This persistent quest eventually led to modern nuclear chemistry, which does enable us to achieve the impossible. I believe our dream to recreate the mind will do the same.

## References
Bernhard Schölkopf, F. L. (2021). Towards Causal Representation Learning. arXiv preprint arXiv, 2102.11107.

Crick, F. (1994). The Astonishing Hypothesis. Macmillan Publishing Company.

Dreyfus, H. L. (1972). What computers can’t do: The Limits of Artificial Intelligence. New York: Harper & Row.

Dreyfus, H. L. (1992). What Computers Still Can’t Do: A Critique of Artificial Reason. Cambridge, MA, USA: MIT Press.

Fjelland, R. (2020). Why general artificial intelligence will not be realized. Humanities and Social Sciences Communications, 7(1):10.

Judea Pearl, D. M. (2018). The Book of Why: The New Science of Cause and Effect. Basic Books (US) Penguin (UK).

Roszak, T. (1992). The Voice of the Earth: An Exploration of Ecopsychology. New York: Simon & Shuster.

Sgaier, S. K. (2020). The Case for Causal AI. Stanford Social Innovation Review, 18(3), 50–55. Von https://doi.org/10.48558/KT81-SN73 abgerufen

Shapiro, L. a. (2021). Embodied Cognition. (E. N. Zalta, Hrsg.) The Stanford Encyclopedia of Philosophy. Von https://plato.stanford.edu/archives/win2021/entries/embodied-cognition abgerufen

Sireteanu R, O. V. (2008). Graphical Illustration and Functional Neuroimaging of Visual Hallucinations during Prolonged Blindfolding: A Comparison to Visual Imagery. Perception, 37(12):1805-1821.