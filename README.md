# Remote-Experiment App Rest-Service

This is the Rest API for [this project.](https://github.com/Pil0tJones/university-remote-experiment-app).
This ReadMe will guide you on how to set up the Rest API to work with the React-Native app.

I will use the AWS RDS-Database as well as AWS Elastic-Beanstalk to deploy it on an AWS-server, however other providers can be choosen as well.

## Steps to set up database

1. Create an AWS account
2. Navigate to Services > Databases > RDS > Create Database
3. In the section 'Choose a database creation method' choose 'Standard Create'
4. Choose PostgreSQL as the engine option
5. Remember the master username and password
6. In the 'Connectivity' section under 'Public access' choose 'Yes' 

## Prepare the REST Service

1. In the root directory, create a `.env` file
2. Create three variables with your database credentials like so:
  * RDS_USERNAME=Your_Master_Username (default = postgres)
  * RDS_PASSWORD=Your_Master_Password
  * RDS_HOSTNAME=Your_Database_Endpoint (can be found in your database details)

## Deploy the Rest API on an Amazon Server

**Set up a code pipeline**

1. To create continous deployment fork this project so you have it as an GitHub repository
2. Navigate to AWS > CodePipeline
3. Give your pipeline a name
4. Choose GitHub (Version 2) as a provider and connect it to your GitHub
5. Choose your forked repository and the main/origin branch

**Set up an Elastic Beanstalk environment**

1. Navigate to AWS > services > Elastic Beanstalk 
2. Click on 'Create new environment'
3. Choose web server environment
4. Choose node.js as the platform
5. In the application code section choose existing code and choose the according code pipeline

Your Rest Service should now be hosted. You can see the URL to Your Rest Service under Elastic Beanstalk > Your Environment > URL
This URL has to be used in the React-Native application in the `src/redux` folder for every logic file.

**How to run the app locally**

1. Go into the root directory of the rest service and type `npm install`
2. Download [ngrok](https://ngrok.com/)
3. Execute the file in a terminal with `./ngrok http 3000` (this exposes your local port)
4. Exchange the generated ngrok URL as the new URL for your REST Service in the React-Native application in the `src/redux` folder for every logic file.
5. Run `npm dev`


