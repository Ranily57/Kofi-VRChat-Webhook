[![Issue Listener](https://github.com/Ranily57/Kofi-VRChat-Webhook/actions/workflows/issue-listener.yml/badge.svg?branch=main)](https://github.com/Ranily57/Kofi-VRChat-Webhook/actions/workflows/issue-listener.yml)
# Ko-Fi to VRChat User List

A automation system to receive donations and subscriptions from Ko-Fi and update a list of users and their contributions on VRChat.

You'll need to have those with you if you want to use this workflow: 
- An activate and fully functionnal Ko-Fi Account
- An account on Zappier, please refer to the Zappier Button on the API section of Ko-Fi in your account settings
- A public repository on Github for the text update
- The UdonGraph (available on this repo) on your VRChat map with a text field to update

## Authors

Created by [Spokeek](https://github.com/Alexandre-Belhomme) and [Ranily](https://github.com/Ranily57)!

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B3NGKMR)

 <img src="https://img.shields.io/badge/Ranily-Spokeek-blue"/><img src="https://img.shields.io/badge/License-GPL%20v3-brightgreen?style=normal"/><img src="https://img.shields.io/github/languages/code-size/Ranily57/Kofi-VRChat-Webhook?logo=github&style=normal"/>

## 📁 Welcome to our Project

This project includes two important files: `update-users.js` and a Github Action. Let's take a look at what each element does:

### update-users.js

The `update-users.js` file is responsible for event management. It handles information related to donations and subscriptions received by our service. Specifically, it takes event data, such as the user's name and the amount given, and adds it to a list containing the users' names and their total contributions so far.

### Github Action

We've also included a Github Action, a small program that monitors opened issues in our project. When a new issue is opened, the action triggers the `Event.js` script to update our list of users and amounts based on the information provided in the issue.

## How Does It Work?

When a new event is detected (donation or subscription), we record the user's name and the associated amount in our list. If the user already exists in the list, we simply update the total amount to reflect the new donation or subscription.

We've automated everything using Github Actions, which means the process runs seamlessly without requiring any manual intervention.

<details>
<summary><strong>User Data Update Script</strong></summary>

This script is designed to handle user data updates based on specific events in our project. The script is created by Spokeek and further edited by Ranily to ensure smooth functionality.

<details>
<summary><strong>How It Works</strong></summary>

1. **Event Data Retrieval**: The script receives event data in the `event_raw` variable from the environment.
2. **Parsing Data**: The script parses the received data as JSON after removing any newline characters for proper formatting.
3. **Reading User Data**: It reads the existing user data from the file named `vrchat-kofi-users.txt`.
4. **Processing Data**: The script converts the user data into an array and processes the event JSON to extract the event type and amount.
5. **Event Type Handling**: Depending on the event type (either "Subscription" or "Donation"), the amount is adjusted accordingly.
6. **Updating User Data**: If the user doesn't exist in the user data array, the script adds the new user along with their respective amount. If the user already exists, the script updates the user's amount accordingly.
7. **Writing to File**: Finally, the script updates the `vrchat-kofi-users.txt` file with the new user data.
8. **Error Handling**: If any errors occur during the process, they are caught and logged for further investigation.

The script provides logging information to track its execution progress, making it easier to understand its behavior.

</details>

<details>
<summary><strong>Usage</strong></summary>

The script is integrated with our Github Action and automatically triggered when specific events occur in our project. It plays a crucial role in maintaining an up-to-date user list with the latest donation and subscription information.

Feel free to explore the code, suggest improvements, or use it in your own projects!

</details>

<details>
<summary><strong>Contributors</strong></summary>

- [Spokeek](https://github.com/Alexandre-Belhomme)
- [Ranily](https://github.com/Ranily57)

</details>

</details>
<details>
<summary><strong>Github Action: Issue Listener</strong></summary>

This Github Action, called "Issue Listener," is designed to respond to new issue openings in our project repository. The action is responsible for updating user data based on the information provided in the issue body.

<details>
<summary><strong>Trigger Event</strong></summary>

The action is triggered when a new issue is opened in the project repository.

</details>

<details>
<summary><strong>Permissions</strong></summary>

The action requires specific permissions to interact with issues and contents in our repository:

- `issues: write`: This permission allows the action to write to issues, which is necessary for updating user data based on the issue information.

- `contents: write`: This permission allows the action to write to repository files, such as updating the `vrchat-kofi-users.txt` file with new user data.

</details>

<details>
<summary><strong>Workflow Steps</strong></summary>

The action follows these steps to update user data:

1. **Checkout code**: The action first checks out the project code from the repository to access the required files.

2. **Get Issue Body**: The action retrieves the body of the opened issue and stores it in the `issue_body` variable.

3. **Update Users List**: The action runs the `update-users.js` script using Node.js, passing the issue body as an argument and setting it as the `EVENT_RAW` environment variable. The script processes the event data and updates the user list accordingly.

4. **Commit and Push Changes**: The action automatically commits any changes made to `vrchat-kofi-users.txt` during the previous step and pushes the changes back to the repository.

5. **Close Initial Issue**: After updating the user data, the action automatically closes the initial issue with a comment indicating that it has been automatically closed.

</details>

</details>
