# Portal for Corda Developers @ GitHub

Visit [https://github.com/corda](https://github.com/corda) to view rendered repository.
The page contains a listing of repositories that are open source and maintained by Corda Developers.

### Getting Started

1. Clone the repository and checkout a new branch.

```
$ git clone https://github.com/corda/corda.github.io.git
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

To have a new repository show up at [corda.github.io](corda.github.io), a change to [orgs.js](orgs.js) file is required.

* To add all the repositories inside a Github organization: Add a new entry to [orgs.js](orgs.js), specify the Github organization name, and set the `type` to `org`:

```
  {
      "name": "Corda",
      "type": "org"
  }
```

* To add a single repository: Add a new entry to [orgs.js](orgs.js), specify the Github organization name and the repository name (separate them with a `/`), and set the `type` to `repo`:

```
  {
      "name": "Corda/CordaPublic",
      "type": "repo"
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
