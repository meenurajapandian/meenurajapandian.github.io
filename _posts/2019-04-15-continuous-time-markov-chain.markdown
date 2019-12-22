---
layout: blog
title:  "Continuous Time Markov Chain"
date:   2019-04-15 19:20:41 -0500
categories: jekyll update
description: A quick introduction to Git and Github
---

Until now, we would check the state of our process at every predetermined amount of time (epoch). But what if the process could let us know when the transition takes place? In our manufacturing process example, instead of checking the state of the product every one hour, we instead make a note of the transition of the product to a different state whenever it happens - 0.5 hrs, 2.75 hr, 3.5 hrs - it doesn't matter. Such a model of stochastic process is called a Continuous Time Markov Chain*

The Markov Assumption and stationarity assumption holds true even here. The Markov Assumption says that the probability that we will be in a certain state j at a time t given that we are in state i is independent of where the model was before or even how long we were in state i. Note that the the Markov Assumption for a continuous state markov process is stronger in the sense it doesn't matter if I just entered my current state or if I have been in my current state for 10 hrs, the probability that I will be in state j after time t (from now) is the same. You might ask does this make sense? Where in the real world can I reasonably use this assumption. Let's say you are outside the Engineering Building in your University selling cupcakes to raise funds. It doesn't matter if you just set up your table or if you have been standing there for 2hrs now, the rate at which the customer comes and by extension the probability that a customer will buy a cake after time t and change your state from n cupcakes to n-1 is the same. (Ignore lunch times and out of standard hours possibilities). In situations like this where you can model your -- as an exponential random variable, the Markov assumption is valid. The stationarity assumption just means the model we have built is can remain the same throughout our time of asking questions?

If we used the Transition Probability Matrix for Discrete time Markov Chains, we will use something called the transition rate matrix for continuous time markov chain. Think of it as the rate at which the state goes from i to j.

The transitions can occur at literally any instant. Then we would have to keep track of an infinite number of discrete time possibilities

Since we have continuous time and we cannot count it as discrete steps, we use the rate at which the state changes rather than the probability. In our cupcake example, we might be selling, on an average, 1 cupcake every 30 minutes. Hence the transition rate of going from n cupcakes to n-1 is 1/30 if I consider the unit as minutes or 2 if I consider the unit as hours.

Embedded Markov Chain
How would you
