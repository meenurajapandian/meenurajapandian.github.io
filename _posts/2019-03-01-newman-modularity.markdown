---
layout: blog
title:  "Communities and Modularity"
date:   2019-03-1 19:20:41 -0500
categories: jekyll update
---

community
noun

1. A group of people living in the same place or having a particular characteristic in common.
‘Montreal's Italian community’
‘the gay community in London’
‘the scientific community’

2. mass noun The condition of sharing or having certain attitudes and interests in common.
‘the sense of community that organized religion can provide’

We all know what a community means and what it means to be a part of it. If a person came up to you and asked if you belong to a certain community and who are the other people in that community, you can almost immediately answer the question with a list of names, perhaps incomplete, but almost always right. A kid will immediately list out his/her best friends and the community (s)he belongs to in school. We all know, intuitively, what a community means. But how do we translate this mathematically?

All of the above example only described communities in a social setting - a social network. But isn't it also possible to find communities in the animal kingdom, telephone network, the world wide web, your anatomy, etc? We struggle a bit, but we can soon see how the idea of a community can be extended to different networks, but what does it mean, mathematically, for a set of entities to be a part of a community?

There have been a number of studies on how to define a community, find how many communities are present in a network and also how to segregate them. But there is still no consensus on a single or a set of frameworks that would work for different networks.

One of the first paper on community detection methods that I read was the Modularity and Community Structure in Network. The central idea of the paper was that if there are more than expected edges within a module (community) or equivalently, if there are less than expected edges between modules, we can conclude the current segregation is the most optimal method of dividing the network into communities. This is done by maximizing the modularity of the network given by Q = 1/4m *insert formula*.  where .....

Let's take a deeper look at what the formula represents. The value that is summed is also taken into account when the two nodes i and j belong to the same community. The term rewards when two nodes of relatively low degrees that belong to the same module are directly connected and there is a very small contribution when two nodes of very high degrees are directly connected within the module since it is not a very surprising possibility and still lower value when two nodes have high degrees but are not directly connected(? but shouldn't this be a higher value since this is surprising possibility but since it is not directly connected it isn't considered????)  Let's see how this value changes for different degree pairs that belong in the same module for a network with say a 100 edges.
