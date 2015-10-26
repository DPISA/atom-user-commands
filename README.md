# Atom User Commands

Configure shell commands as atom commands.

Configure commands on your config file like this
```
"atom-user-commands":
  commands: [
    {
      name: "build"
      selector: "atom-workspace"
      command: "call {project}/build.bat"
      arguments: []
      options:
        cwd: "./"
    }
  ]
 ```
This will create the atom command "atom-user-commands:build" that you can now bind to an keymap or launch from the command palette.
It also generates an entry in the Atom User Commands menu under packages. The command, arguments and options values accepts the variables {project}, {path} and {absPath}
