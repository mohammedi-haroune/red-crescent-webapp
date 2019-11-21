# red-cresent-webapp
A web app for the algerian red crescent


Le projet consiste en la création d un site internet sur lequel serait lister les hôpitaux d'Alger dans un 1er temps ensuite peut-être tous les hôpitaux d'Algérie où on peut faire un don de sang, sur le site y aura la liste des hôpitaux donc et en cliquant sur le nom de l'hôpital ça nous envoye sur google maps avec la localisation exacte de l'hôpital

Ce là est dans le but que plus tard on mettra un qr code qui renvoie vers ce site sur la carte de remerciement remise aux donneurs voir même sur les flyers de sensibilisation

## ça c'est la version v0 du projet.

# On peut plus tard
1. Génrer les donneurs du sang
2. Relie les demandes/donneurs
3. Prioritizer les demandes / hopitaux par groupe siguin .. etc

# Contributing
## Workflow
We are using the githhub workflow to mangage the branching model, See here for more details: http://scottchacon.com/2011/08/31/github-flow.html

In a nutshell the github workflow consists of the follwoing main points:

* Anything in the `master` branch is deployable
* To work on something new, create a descriptively named branch off of master (ie: `new-oauth2-scopes`)
* Commit to that branch locally and regularly push your work to the same named branch on the server
* When you need feedback or help, or you think the branch is ready for merging, open a pull request
* After someone else has reviewed and signed off on the feature, you can merge it into master
* Once it is merged and pushed to `master`, you can and should deploy immediately

We can (for the begging) ignore the deployement process, then we could add CI/CD jobs.

## Commit messages
Commit messages should as clear as possible and should follow the syntax and guidlines bellow bellow:

### Rules
1. Separate subject from body with a blank line
2. Limit the subject line to 50 characters
3. Capitalize the subject line
4. Do not end the subject line with a period
5. Use the imperative mood in the subject line
6. Wrap the body at 72 characters
7. Use the body to explain what and why vs. how

### Syntax
```
<TYPE>[<SCOPE>]: <Title>
// Blank line
Message
```

Where `<TYPE>` could be:

* `Feat` - feature, new functionality
* `Fix` - bug fix, not adding anything new, but rather removing "unwanted feature".
* `Refactor` - refactoring of production code. This type of commit should not have an impact on end-user experience at any point. The application's behavior should remain the same, and only the refactoring is applied.
* `Style` - code style improvements, like changing: `:a => :b` to `a: b`, or double quotes to single ones, Without any changes in the app's behavior
* `Doc` - documentation changes. That include README updates and any other documentation-specific things.
* `Test` - test coverage improvements

and `<SCOPE>` could be the file/files name/names or any readable name that has a meaning for all othe developpers.

Examples:

`Doc[README]: add contiributing rules and guidlines`

`Fix[backend]: fix hospitals lookup api`

### Installation
* Clone repository
* cd red-crescent-webapp
* npm install

### Running
* npm start
