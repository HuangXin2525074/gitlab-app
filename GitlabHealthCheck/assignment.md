# Take Home Assignment

## Objective

The objective of this assignment is to:

1. create an interactive script or app that periodically queries GitLab's health check, readiness, and metadata API endpoints.

1. store the result in a table, minimally these fields should be stored:

    - `timestamp` of each run
    - `status` of the health check
    - `status` of the readiness check
    - `version` of the GitLab instance

1. allow generating and downloading of the report in CSV format.

## Requirements

1. Use Python, or Node.js as the programming language. _Any other programming language is acceptable._
1. Choose the framework or library of your choice to create the script or app.
1. Include clear instructions on how to install any dependencies required to run the code.
1. Include clear instructions on how to set up the database and table schema.
1. Include clear instructions on how to run the script or the app and download CSV report.
1. The report should contain at least the timestamp and status of the health.
1. The script or app should be easily setup and run in any OS.
