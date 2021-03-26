# Portal for R3 Developers @ GitHub

Visit [https://r3dev.github.io/](https://r3dev.github.io/) to view rendered repository.
The page contains a listing of repositories that are open source and maintained by R3 Developers.

### Getting Started

1. Clone the repository and checkout a new branch.

```
$ git clone https://r3dev.github.io
$ git checkout -b branch_name
```

2. Update the files you'd like to change.
3. Push the changes upstream.

```
$ git add filename1 filename2
$ git commit -m "add your message here"
$ git push origin branch_name
```

4. View your branch in Github and create a Pull Request.

### Add a New Repository to the List

To have a new repository show up at [r3dev.github.io](r3dev.github.io), a change to [repo.js](repo.js) file is required.

* To add all the repositories inside a Github organization: Add a new entry to [repo.js](repo.js), specify the repo category, name, URL, watchers, fork, language, and description:

```
    {
        "category": "samples",
        "name": "Features Java",
        "url": "https://github.com/corda/samples-java/tree/master/Features",
        "watchers": 30,
        "forks": 70,
        "language": "Java",
        "description": "This repository contains multiple sample apps, from CorDapps that help you get started, all the way to demonstrating specific features and advanced usage."
    }
```

### Test Changes Locally

Open the cloned repository using your terminal and run:

```
npm i -g http-server
```

Then: 

```
http-server
```

Select available server. For example: `http://127.0.0.1:8080`
