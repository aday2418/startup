# January 12th Notes

### Github

+ Github is a way to work collaboratively on projects with other developers
+ It saves your changes so that they are stored remotely
    + This makes it so that if your computer dies, you don't lose your entire project

### Committing Changes
+ In order to save your local changes, you need to commit them to a remote repository
+ To do this, first add the changes, then commit them, and finally push them 
    1. ```git add .```
    2. ```git commit -m " "``` 
    3. ```git push``

### Handling Conflicts
+ When working with others, sometimes people will make commits that change part of the code you are working on
+ When this happens you need a way to both save changes you have made while not overriding code they already pushed
+ In order to do this you need to handle conflicts
+ When needed, github will prompt you to make changes to both the remote and local code
+ You should not delete remote code, but rather find a way to incorporate both sets of changes

### Forks
+ A GitHub fork provides the ability to create a copy of a GitHub repository (essentially a pull request)
+ This lets you work with any open source code

