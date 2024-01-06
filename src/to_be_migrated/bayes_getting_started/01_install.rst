**********************************************
Bayesian Statistics With PyStan - Installation
**********************************************

:date: 20210711 17:36
:tags: Bayesian, Python
:author: sicong
:category: Tutorials 

A Short Introduction to Bayesian Statistics
================================================

This is the first in a part tutorial, part study notes, part rumination series on doing Bayesian Statistics with PyStan. 

`Bayesian statistics <https://en.wikipedia.org/wiki/Bayesian_statistics>`_ is a fascinating paradigm of statistics that
takes on a subjective interpretation of probability, in contrast to the `Frequentist statistics <https://en.wikipedia.org/wiki/Frequentist_probability>`_
which is supposed to offer a more "objective" view.

This claim that Bayes is "subjective" makes more sense in the context of an inference problem. Suppose we want to model
some stochastic process with a model M, which depends on parameters P. And we observe some raw data, D. We then want to
estimate / infer the parameters P from the raw data D.

The Frequentist approach assumes that there is one true, fixed parameter value for P, and our job is to approach this
ideal from the noisy and uncertain data D. However, the Bayesians instead assumes that P itself is uncertain whereas the
data D is treated as fixed. The best we can do is to collect more fixed data, to reduce our uncertainty in P.

Furthermore, the Bayes approach is grounded firmly in the single most important corner stone in probability theory - the
Bayes' theorem

.. math::
    P(A \vert B) = \frac{P(A) * P(B \vert A)} {P(B)}

In the context of inference, this turns into:

.. math::
    P(Parameter \vert Data) = \frac{P(Parameter) * P(Data \vert Parameter)} {P(Data)}

Where

:math:`P(Parameter \vert Data)`, probability distribution of the Parameter given observed Data, is called the **posterior** distribution,
and is the goal of Bayes inference.

:math:`P(Data \vert Parameter)` is called the **likelihood**. This is the data generation process and is usually the main process that
we want to model.

:math:`P(Parameter)` is the **prior**. This is the probability of the Parameter before Data is observed, hence why "prior", 
as in a priori knowledge / belief about the Parameter. This is the controversial bit of Bayes and is partly the reason why Bayes is said to be
"subjective". Because the need for a prior implies that all parameters are fundamentally biased. There doesn't exist an ideal
where objective data alone gives us all the answer we want; the answer itself is always going to be tainted by some subjective
belief, the prior. All we can do is to weaken its influence with more data.   

:math:`P(Data)` is the **denominator**, sometimes called **marginal likelihood**. It's merely a normalization factor that
normalizes the numerator so that it remains a valid probability distribution. However, this is the main reason why exact Bayes inference
is hard.

Bayes Statistics and Computational Methods
==========================================
As stated above, the troublemaker is the denominator, because for continuous variables, it may involve *multi-parameter integration*,
which can be very difficult to calculate if not intractable. We could use another technique called `conjugate priors <https://en.wikipedia.org/wiki/Conjugate_prior>`_
to circumvent the issue. Nonetheless, this puts a restriction on what type of distributions we can use and thus only solves
the issue for special cases.

Enter `Markov Chain Monte Carlo (MCMC) <https://en.wikipedia.org/wiki/Markov_chain_Monte_Carlo>`_, a sampling-based computational
method to estimate the posterior. This topic deserves a post on its own. In short, instead of calculating the exact posterior
distribution, we "sample" from it, whose denominator we can ignore as its shape is governed by the numerator (prior * likelihood).
The exact algorithm varies across different *implementations* of MCMC, the popular ones including **Random Walk Metropolis**,
**Gibbs Sampling** and **Hamiltonian Monte Carlo**. However the principle is the same: we use *local decision rules* 
to accept or reject a sample point before moving on to the next one, so that *globally* the distribution of the samples we accept,
follows the posterior distribution.


Stan, PyStan
============
`Stan <https://mc-stan.org/>`_ is a state-of-the-art platform for statistical modeling and high-performance statistical computation.
It implements a very fast MCMC sampling method called NUTS (No-U-Turn-Sampler) and interfaces with many languages like R,
Python MATLAB and so on.

For this series I will try using Stan with Python via the `PyStan3 <https://github.com/stan-dev/pystan>`_ open-source python package. 


How to Install PyStan
=====================
PyStan has its `official guide <https://pystan.readthedocs.io/en/latest/>`_.

The system requirements for the installation include:

* Python ≥3.7
* Linux or macOS
* x86-64 CPU
* C++ compiler: gcc ≥9.0 or clang ≥10.0

To install, simply use pip:
::
    
    python3 -m pip install pystan 

Common Problems
---------------

#. RuntimeError when using pystan in Jupyter Notebook 
    There is a known error with using pystan3 in Jupyter Notebook. See `the FAQ session <https://pystan.readthedocs.io/en/latest/faq.html>`_ 
    of the official guide:
    ::

        RuntimeError: asyncio.run() cannot be called from a running event loop when running stan.build(...)

    This is because pystan3 relies on asyncio and Jupyter Notebook blocks some of its functionalities.
    
    To solve this:

    1. Install nest-asyncio
    2. Run this before importing pystan in your notebook:
       ::

            import nest_asyncio
            nest_asyncio.apply()

Stay tuned for more to come!