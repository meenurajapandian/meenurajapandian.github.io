---
layout: blog
title:  "Communities and Modularity"
date:   2019-03-1 19:20:41 -0500
categories: jekyll update
description: A quick introduction to Git and Github
---

community
noun

1. A group of people living in the same place or having a particular characteristic in common.
‘Montreal's Italian community’
‘the gay community in London’
‘the scientific community’

2. mass noun The condition of sharing or having certain attitudes and interests in common.
‘the sense of community that organized religion can provide’

We all know what a community means and what it means to be a part of it. If a person came up to you and asked if you belong to a certain community and who are the other people in that community, you can almost immediately answer the question with a list of names, perhaps incomplete, but almost always correct. A kid will immediately list out his/her best friends and the community (s)he belongs to in school. Intuitively, we all know what a community means. But how do we translate this mathematically?

All of the above examples only described communities in a social setting - a social network. But isn't it also possible to find communities in the animal kingdom, telephone network, the world wide web, your anatomy, etc? We struggle a bit, but we can soon see how the idea of a community can be extended to different networks, but what does it mean for a set of entities to be a part of a community, mathematically? There have been a number of studies on how to define a community, find how many communities are present in a network and also how to segregate them. But there is still no consensus on a single or a set of frameworks that would work for different networks.

One of the first papers on community detection methods that I read was the ``Modularity and Community Structure in Network". The central idea of the paper was that if there are more than expected edges within a module (community) or equivalently, if there are less than expected edges between modules, we can conclude the current segregation is the most optimal method of dividing the network into communities. This is done by maximizing the modularity of the network given by
\[
Q = \frac{1}{2m} \sum_{ij} (A_{ij} - \frac{k_ik_j}{2m}) \delta_{ij}
\]
where $A_{ij}$ is the edge weight between nodes $i$ and $j$, $k_i$ is the degree of node $i$, $m$ is the total number of edges in the network, and $\delta_{ij}$ is the Kronecker's delta which is 1 if the nodes $i$ and $j$ belong to the same community.

Let's take a step back and have a closer look at what the formula represents. The term within the summation is only taken into account when the two nodes $i$ and $j$ belong to the same community. The term is rewarding (towards modularity) when two nodes of relatively low degrees that belong to the same module are directly connected and the least contribution to modularity when two nodes of very high degrees are directly connected within the module since it is not a very surprising possibility. In fact term gives a high negative value when two nodes of very high degree belong to the same module. You can think of it as the nodes of high degree repelling each other and the nodes of lower degree connected to these high degree nodes following them to form modules. If this results in a node pair that have low degrees to be assigned to the same module and are connected, then there is a positive contribution to the modularity value. The network is divided into two communities by maximizing this modularity value.

Skipping the theory behind how this algorithm came to be from the formula above, the method of dividing the network into 2 communities is as follows:

\begin{enumerate}
    \item Find the Modularity matrix $B = A - \frac{kk^T}{2m}$ where k is the vector of degree of all nodes
    \item Compute the eigen value and eigen vector of the modularity matrix B.
    \item The eigen vector corresponding to the highest eigen value represents the communities of the network. All node positions with positive values of the vector correspond to one community and the negative values correspond to a different community. If all the positions of this eigen vector have the same sign then they cannot be divided and all nodes belong to a single community.
\end{enumerate}

To divide the network into more than two communities, the same method as above is applied to the different community subgraphs with a small change. Instead of maximizing the modularity, we try to maximize the contribution to modularity by dividing the subgraph. Alternatively, we subtract the contribution from the modularity matrix towards the previous division and follow the eigenvalue decomposition method for the remaining values.

Hence the modularity matrix for the subgraph to be divided is
\[
B_{ij}^{(g)} = B_{ij} - \delta_{ij} \sum_{k\in g} B_{ik}
\]
where $B^{(g)}$ is the modularity matrix of the subgraph to be divided

If the maximum eigen value of this matrix is positive, then the community can be divided further according to the signs of the corresponding eigen vector. If the maximum eigen value is negative or 0, then the community cannot be divided further. This is done for all subgraph resulting from further division until we cannot divide them anymore.

This method gives excellent results in dividing a number of networks with widely known communities. However, it does not show the robustness of the method by it's comparison with other network metrics. Although it shows that this method gives higher modularity values for the network than other segregation methods, is it really fair to use the same computation that was maximised to also find the robustness/accuracy of the method in finding communities. There is a need to find other network measurements that also indicate how the resulting division of network into communities is accurate(not really but close) especially for those networks for which we do not have real world data about their communities.

The complexity of this method is also quite high - since we need to find the eigenvalue decomposition for every division of the network. However this is better than the methods that were used before this paper was published.

This method gives a network hard boundaries of which communities the nodes belong to. But in this complex world, where we have access to high resolution network data, isn't it more likely that each node belongs to different communities at different levels of strength? The search for a better method continues...
