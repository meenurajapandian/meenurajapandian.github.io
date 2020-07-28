---
layout: blog
title: "Git and Github"
date: 2020-01-20 12:00:00 -0500
categories: blog
description: A quick guide to start using Git and Github
---

Git is a distributed version control system. A version control system handles different versions of a project as it evolves especially when many people are contributing toward the same project. Github on the other hand is ... But I don't want to elaborate on them as much. Let's just jump to actually using git for your projects.

Usually people want to use github in one of these circumstances.

They already have a some files as part of the project and want to put it on github or start using git for

You are starting completely new and you still don't have anything yet

Follow these steps for option 1
```
git init
```

```
git add -A
```
adds files to staging area

```
git commit
```
commits the changes that are made

```
git remote add origin
```
links current local directory with a repo on github

```
git push origin master
```
push changes to remote

```
git pull origin master
```
If changes are made on the hub and they need to reflected in the local directory. This has to be done before git push if you have changes in github that are not in the current local directory



For Option 2 - starting fresh or from repo in github
```
git clone https://github.com/meenurajapandian/direc.git
```
clone existing repository on git hub to local directory
creates a repository just like the one in git hub in the current directory

```
git add filename.c
```
adds filename to the staging area

```
git add -A
```
adds all files to the staging area

```
git commit -a -m "Commit Message"
```
commits the changes made, commit message is compulsory


As you continue to use git and github you might come across times where you want to try something different for the project but do not want to mess up your current state of the project just yet. In that case you can create a new branch and work on that branch instead of your main master branch. This is the git's version of naming your files differently so that you can keep track of them. No more final.py final_v1.py final_final_v7.py

```
git checkout -b your-new-branch
```
Creates a new branch by the given name
```
git add <files>
git commit -m "message"
git push origin your-new-branch
```

Now the changes are made only in the new branch. To go back to master
```
git checkout -b master
```
To list all branches in github
```
git remote -v
```

Once you've made awesome progress with the new branch and have a change in the new branch that you want to merge with the master so that this now becomes like the final proper version,

Include stuff about making a pull request



A number of times we have a lot of working files in our local repository which we do not want on github. They might list of things to do, large data files (which git might refuse to put on the hub), etc. But these files are always listed as untracked files and means we have to list each file we want to add instead of using git add -A. In these circumstances (even otherwise) it is good to maintain a gitignore file which will contain the list of all files and folders that you do not want git to track i.e. ignore.

```
touch .gitignore
```
Creates a gitignore file
```
git add .gitignore
```

.gitignore is a hidden file and needs to be edited to add all files and directory that should not be tracked
Sample .gitignore file

```
directory1/
directory2/

file1.csv
file2.csv
```

References:
