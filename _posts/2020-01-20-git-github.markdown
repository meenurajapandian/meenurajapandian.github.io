---
layout: blog
title:  "Git and GitHub"
date:   2020-01-20 19:20:41 -0500
categories: jekyll update
description: A quick introduction to Git and Github
---


git = version control
github = web service

Linux Commands
cd to go to a certain directory
pwd current directory (not necessary in git bash)
ls lists all files and folders in the current directory
cd .. to go to the previous folders


repo is on github and it needs to be cloned and the files added.

repo exists locally, initialize git and put it on github




Git Bash Commands

git clone https://github.com/meenurajapandian/direc.git
clone existing repository on git hub to local directory
creates a repository just like the one in git hub in the current directory

git add filename.c
adds filename to the staging area

git add -A
adds all files to the staging area

git commit -a -m "Commit Message"
commits the changes made, commit message is compulsory


git status
shows the status of the git directory. shows which branch, list of files which are modified but not committed, list of files that are not tracked


git log -2
shows the last commit

:q
if you find yourself in a weird place


git remote -v
lists the branches, list the origin of the github repository

git push origin master
to push the changes to github. master is the branch name



If the current directory is not a git repository

git init
initializes empty git

git add -A
adds files to staging area

git commit
commits the changes that are made

git remote add origin
links current local directory with a repo on github

git push origin master
push changes to remote

git pull origin master
If changes are made on the hub and they need to reflected in the local directory. This has to be done before git push if you have changes in github that are not in the current local directory


To commit to a new branch
git checkout -b your-new-branch
Creates a new branch by the given name
git add <files>
git commit -m "message"
git push origin your-new-branch



To tell git not to track some files
touch .gitignore
Creates a gitignore file
git add .gitignore


.gitignore is a hidden file and needs to be edited to add all files and directory that should not be tracked
Sample .gitignore file

directory1/
directory2/

file1.csv
file2.csv
