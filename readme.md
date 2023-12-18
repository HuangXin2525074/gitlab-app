
## Interactive Script - GitlabHealthCheck
A Gitlab health check program 

## desciption:
an interactive script that periodically queries GitLab's health check, readiness, and metadata API endpoints.


## Installation
Make sure to have Node.js installed before proceeding.
bash 
npm install

## dependencies
1.Before excute the interactive script, please ensure that your GitLab instance is in a stable and expected state.
2.Change environment variable GITLAB_ENDPOINT to your own GITLAB endpoint in config.json under the config file. 

### Usage
please use commend "./index.js help" to display all functionalities

  $ gitcheck <command> [option]

 COMMANDS  

  help       Print help info
  health     Print gitlab health status
  readiness  Print gitlab readiness status
  metadata   Print gitlab metadata
  save       Save gitlab data with timestamp
  report     Generate gitlab report, file path: ./report/    
  clear      Clear gitlab data

   OPTIONS  

  -r, --readiness  specify a query parameter for readiness. eg -r 1 or --readiness 1


Examples
  $ ./index.js health 
  $ ./index.js readiness
  $ ./index.js readiness -r 1
  $ ./index.js metadata
  $ ./index.js report
  $ ./index.js clear



## Backend Endpoint - lambda
The backend has been implemented using the Serverless Framework, AWS Lambda, and DynamoDB. The Lambda function is already set up under my AWS account. If you would like to set up the endpoint in your own environment, please refer to the SETUP section.

## Installation
Make sure to have Node.js installed before proceeding.
bash 
npm install

## SETUP
1. Install Serverless Framework
Make sure you have the Serverless Framework installed globally:

npm install -g serverless

2. Install AWS CLI - reference: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
use following commend:
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

2. Configure AWS Credentials
Set up your AWS credentials using the AWS CLI:

aws configure

3. Deploy the lambda function and dynamodb schema
use following command:

sls deploy

you should able to view the endpoint from console after deployment completed.

4. replace the lambda endpoint to SERVER_URL under /GitlabHealthCheck/config/config.json











