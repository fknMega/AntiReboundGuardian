

# AntiReboundGuardian

AntiReboundGuardian is a Node.js application that allows you to kick specific accounts from a group chat on Discord. It can be used as a countermeasure against users utilizing the ReboundGuardian tool to automatically re-add themselves after being kicked.

This tool was made to neutralize [AntiReboundGuardian](https://github.com/fknMega/AntiReboundGuardian)
## Installation

1. Clone the repository or download the source code.
2. Open a terminal or command prompt and navigate to the project directory.
3. Run the following command to install the required dependencies:

   ```
   npm install xmlhttprequest
   ```

## Configuration

1. Open the `app.js` file in a text editor.
2. Replace `"your-token"` with your Discord bot token.
3. Replace `"group-id"` with the ID of the group chat you want to kick users from.
4. Modify the `tokick` array to include the user IDs of the accounts you want to kick. For example:

   ```javascript
   let tokick = ["id1", "id2", "id3"];
   ```

   Add as many user IDs as needed, following the same structure.

## Usage

1. Open a terminal or command prompt and navigate to the project directory.
2. Run the following command to start the AntiReboundGuardian:

   ```
   node app.js
   ```

   The application will kick the specified user accounts from the group chat.

3. Check the console output to verify that the accounts were successfully kicked.

## Notes

- Be cautious when using this tool, as it may be considered a violation of Discord's Terms of Service. Use it responsibly and only on groups where you have the necessary permissions.
- This application is provided as-is, without any warranty. Use it at your own risk.

## License

This project is licensed under the [MIT License](LICENSE).
