# Using Python Copier

## 1. Install Python

First, ensure you have Python installed on your system so that you can use `pip`, Python's package installer, in the instructions that follow. You can download Python from the official website: [python.org](https://www.python.org/).

## 2. Install Copier

On **Windows**, open Command Prompt (search for `cmd` in the Start menu).

On **MacOS** open Terminal. You can find it in the Launchpad or in Applications > Utilities.

On **Linux** open your Terminal.

Run the following command to install Copier using pip:

   ```sh
   pip install copier
   ```

## 3. Invoke Copier with the GitHub Repo

Navigate into the directory where you want to create your new web experiment project and run the following command:

   ```sh
   copier copy github.com:gt-sse-center/AutoRA-experiment-server . --trust
   ```
   
Note: The dot (.) means "here in this folder". You can also replace the dot with a path to an existing folder, or the name you would like the new directory to have and it will be created.

This command must be run with the `--trust` flag. The `--trust` flag is required because certain features, in this case, executing post generation tasks, can pose security risks if the template contains unsafe or malicious code. By using the `--trust` flag, you’re explicitly confirming that you trust the source of the template and allow Copier to run potentially unsafe operations safely.

Follow the [prompts](docs%questionnaire.md). Copier will generate the web experiment files based on our GitHub template.

## 4. Committing the Resulting Code to GitHub (optional but recommended)

There are advantages to committing what Copier produces to a code repository. What follows is instructions for creating a repository from the directory that Copier produces. A GitHub account is required to proceed with either of the two options. The GitHub CLI is a separate software tool but it facilitates [creating a repository from your local machine](#with-the-github-command-line-interface-cli). [Without the CLI](#without-the-github-cli) the repository will have to be created at https://github.com/.

### Using the GitHub Command-Line Interface (CLI)
- Install the GitHub CLI:
  - On **Windows** download and run the installer from the [GitHub CLI releases page](https://github.com/cli/cli/releases).
  - On **MacOS** install using [Homebrew](https://brew.sh/):
        ```bash
        brew install gh
        ```
  - On **Linux** Follow the installation instructions for your specific distribution from [cli.github.com](https://cli.github.com/).
    
- Open a terminal.

- Authenticate with your GitHub account:
      ```bash
      gh auth login
      ```
- Follow the prompts to log in via your web browser or enter a personal access token.

- Navigate to your local code directory:
      ```bash
      cd /your-copier-output-path
      ```
- Initialize a Git repository:
      ```bash
      git init
      ```
- Create a new GitHub repository using the GitHub CLI:
      ```bash
      gh repo create
      ```
- Follow the interactive prompts. You can specify the repository name (it does not need to match the directory's name), description, visibility (public or private).

- Add all your files to the staging area:
  ```bash
  git add .
  ```
- Commit the files:
      ```bash
      git commit -m "Initial commit of boilerplate code generated by Copier."
      ```
- Push your local repository to GitHub:
      ```bash
      git push -u origin HEAD
      ```

### Without the GitHub CLI

- Create the repository in GitHub following [their instructions](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository). 

- Take note of the URL of your new repository. It should look something like this: `https://github.com/yourusername/your-repo-name`
   ```sh
   git init
   git add .
   git commit -m "Initial commit"
   # in the next command ".git" is appended to the repository URL you noted above
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```