# 📁 README

## Scripts

### Event.js

This script (`Event.js`) processes event data and updates a list of users and their corresponding donation or subscription amounts. It performs the following tasks:

- Extracts content from the first argument passed to the script.
- Parses the content as JSON after removing any newline characters.
- Reads the existing list of users and amounts from `vrchat-kofi-users.txt`.
- Determines the type of the event (either "Subscription" or "Donation").
- Formats the amount based on the event type.
- Adds a new user or updates the amount for an existing user in the user list.
- Writes the updated user list back to `vrchat-kofi-users.txt`.

### Github Action

This Github Action listens for new issues being opened and triggers the `process_issue` job. The workflow is as follows:

1. **Checkout code**: The action checks out the code repository to access the required files.

2. **Get Issue Body**: The action fetches the body of the opened issue and stores it in the `issue_body` variable.

3. **Update Users List**: The action executes the `Event.js` script using Node.js, passing the issue body as an argument and setting it as the `EVENT_RAW` environment variable. The script processes the event data and updates the user list.

4. **Commit and push changes**: The action automatically commits any changes made to `vrchat-kofi-users.txt` during the previous step and pushes the changes back to the repository.

5. **Close initial issue**: The action closes the initial issue with a comment indicating that it was automatically closed.

## ℹ️ Note

Make sure to provide necessary permissions for the Github Action to write to issues and contents.
