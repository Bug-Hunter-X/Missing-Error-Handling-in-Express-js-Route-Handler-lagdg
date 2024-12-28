# Missing Error Handling in Express.js Route Handler

This repository demonstrates a common error in Express.js applications: missing error handling for invalid user IDs in route handlers. The example code lacks a proper response when a user is not found, potentially leading to unexpected behavior or crashes.

## Bug
The bug lies in the `/users/:id` route handler.  It does not handle the case where a user with the specified ID is not found in the `users` array.  This can lead to a runtime error or unexpected output.

## Solution
The solution involves adding proper error handling to the route handler.  Instead of implicitly assuming a user exists, the code should check if the user is found and respond accordingly. In this case, a 404 Not Found status code should be returned when the user is not found.
