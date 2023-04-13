## Using GIT Commands in VS Code
1. Open VS Code
2. Ctrl + ` - opens Terminal
3. Write commands

To clone a repository - git clone **url**
To create a local branch without upstream - > **git branch branchname**
To checkout a branch - **git checkout branchname**
To set upstream branch - **git push -u origin local-branch-name**

To create and checkout a branch - 2 in 1 step - **git checkout -b branchname**
To create and checkout a branch and make upstream branch - 3 in 1 step - **git checkout -b branchname --track origin/remote-branch-name**
o/p: branch 'local-branch' set up to track 'origin/remote-branch-name'.
To set tracking branch for existing local branch - **git branch -u origin/remote-branch-name**

If local branch name is different from tracking branch - use
**git push origin HEAD:remote-branchname**

To get all local branches - **git branch**
To get all remote branchs - **git branch -a**

To delete a local branch - **git branch -d local-branch-name**
To delete a remote branch - **git push origin -d remote-branch-name**

To get tracking branches information - **git branch -vv**

To get details of the branch - uncommit - staged - commit information of the current branch - **git status**

To stage a file - **git add "filename.extn"**
To stage all files at a time - **git add -A**
To stage only modified files and deleted files - **git add -u**

To commit a file - **git commit -m "commit message"**

To push changes - **git push**

Help - To exit from GIT pages, use q

Help - To remove a lock - **rm -force .git/index.lock**

To unstage a new file and non commited - **git rm --cached filename**
To unstage a commited file - **git restore --staged filename**

To unstage a file before commiting them - **git reset filename**
To unstage all files - **git reset .**

