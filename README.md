# GitHub User Activity CLI

A Command-Line Interface (CLI) tool to fetch and display recent activity of a GitHub user. This tool leverages the [GitHub Events API](https://docs.github.com/en/rest/activity/events) to provide detailed insights into public activities, such as commits, repository creations, pull requests, and more.

## Features

- Retrieve and display recent public events for any GitHub user.
- Handles events like:
  - Commits (with commit counts)
  - Repository creations or deletions
  - Pull requests, issue comments, and releases
  - Repository forking and watching
- Graceful error handling for rate limits or invalid users.
https://roadmap.sh/projects/github-user-activity

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sattarrasouli/github-user-activity-cli.git
   cd github-user-activity-cli
   npm install

# Usage

```bash
    node index.js get <username>