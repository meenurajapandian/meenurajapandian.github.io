---
layout: blog
title:  "Graphviz"
date:   2019-03-1 19:20:41 -0500
categories: jekyll update
---

Using graphviz

From networkx graph to dot file

from networkx.drawing.nx_pydot import write_dot
write_dot(G, 'file.dot')

neato -Gbgcolor=transparent -Nshape=point -Nstyle=filled -Ncolor="#00ff005f" -Nfillcolor="#00ff005f" -Nwidth=0.02 -Nheight=0.02 -Eweight=0.01 -Ecolor="#00ff005f" -Tpng file.dot -o outfile.png

-Goverlap=scale
-Goverlap=false

Install graphviz with triangulation library


sudo apt purge graphviz
sudo apt install -y libgd-dev
sudo apt install -y fontconfig
sudo apt install -y libcairo2-dev
sudo apt install -y libpango1.0-dev
sudo apt install -y libgts-dev

run sudo pkg-config --libs gts

run sudo pkg-config --cflags gts


Download graphviz-2.40.1.tar.gz from here

Navigate to directory containing download, and extract with tar -xvf graphviz-2.40.1.tar.gz (or newer whatever the download is named.)

cd into extracted folder (ie cd graphviz-2.40.1) and run sudo ./configure --with-gts

Run sudo make in the folder
Run sudo make install in the folder
Reinstall library using pip install graphviz

https://www.graphviz.org/doc/info/attrs.html
https://graphviz.gitlab.io/_pages/pdf/dot.1.pdf
https://graphviz.gitlab.io/_pages/doc/info/command.html
https://graphviz.gitlab.io/_pages/pdf/neatoguide.pdf
https://renenyffenegger.ch/notes/tools/Graphviz/examples/index
https://www.tonyballantyne.com/graphs.html
https://graphviz.readthedocs.io/en/stable/api.html
