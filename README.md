# Freash Works Backend Assignment

## SetUp
    Step 1: Install `NVM` and `Node 18`    
    Step 2: `npm install`

## Run Migrations
 Step 1: Run Up Migrations: `./scripts/run-migration.sh`
 
 Note: Use Down Migrations  `./scripts/undo-migration.sh` is you want to UNDO.    

## Database setup
   
step 1: Install postgres 

step 2: login to postgres as admin  
        `psql -U postgres` 

step 3: Create User 
        `create USER freshdeskdb;` 

step 4: Create Database
        `create database freshdesk;`

step 5: Create User Password
        `alter user freshdeskdb with encrypted password 'password';`

step 6: User and DB mapping       
        `grant all privileges on database freshdesk to freshdeskdb;`


## Start
dev - `npm run watch`

Server port: http://localhost:3000

-- For Development:

Create new Migrations: `./scripts/create-migration.sh $migration-name`

## Important Note:
This app in already Running in AWS EC2 instance.UI is also using the API served from AWS.


### Details of AWS hosting:

Node App is Already deployed and running in `AWS EC2 (ubuntu 20)` instance.

Domain: https://ec2-51-20-92-174.eu-north-1.compute.amazonaws.com
IP: 51.20.92.174

App is running in `port 443` in the instance and using `PM2` service for backgroud process,Below are the steps to see the App status.

Step 1: Connect to EC2 instance
Step 2: `sudo su` - admin user
Step 3: All pm2 service status `pm2 status`
Step 4: check app logs using `pm2 logs fw-demo`
Step 5: Reload/Restart the app `pm2 logs fw-demo` 


SSL setup:

App is using openSSL for certificates, Setting up SSL from the express js, Please check `app.js` file form `/src` dirctory. Refer the comments to enable the `server` code to read SSL certificate. 
