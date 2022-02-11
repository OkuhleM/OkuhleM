---
Layout:
Title:	"connencting to a database using mongodb"
Date:	2022-02-10
Categories:

---

# Introduction

today I was busy with a challenge in mongodb, 
and I had to connect to my mongodb database.

# Body

## Create a new cluster

- On the next page, fill in your organization's name, project's name, select JavaScript as your preferred programming language, and click the green Continue button.
- Click the Create a cluster button under Shared Clusters. This should be the only free option.
- In the Cloud Provider & Region dropdown, leave this as the default (typically AWS).
- In the Cluster Tier dropdown, leave this as the default, M0 Sandbox (Shared RAM, 512 MB Storage).
- In the Cluster Name dropdown, you can give your cluster a name, or leave it as the default, Cluster 0.
- Click the green Create Cluster button at the bottom of the screen.
-You should now see the message Your cluster is being created. New clusters take between 1-3 minutes to provision. Wait until the cluster is created before going to the next step.


## Create a new user for the database
- On the left side of screen, click on Database Access.
- Click the green Add New Database User button.
- In the modal, enter a new username and password.
- Under Database User Privileges, leave this as the default option, Read and write to any database.
- Click the Add User button to create your new user.

## Allow access from all IP addresses
- On the left side of the screen, click on Network Access.
- Click the green Add IP Address button.
- In the modal, click the ALLOW ACCESS FROM ANYWHERE button. You should see 0.0.0.0/0 in the Access List Entry entry field.
- Click the green Confirm button.

## Connect to your cluster
- Click on the green Get Started button in the bottom left of your screen should now show you the final step, Connect to your cluster, click on it.
- On the left side of the screen, click on Clusters.
- Click the Connect button for your cluster.
- In the popup modal, click on Connect your application.
- You should see the URI you'll use to connect to your database similar to this: mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<db-name>?retryWrites=true&w=majority.
- Click the Copy button to copy your URI to your clipboard.

# Conclusion

A database connection is a facility in computer science that allows client software to talk to database server software, whether on the same machine or not. A connection is required to send commands and receive answers, usually in the form of a result set. Connections are a key concept in data-centric programming.