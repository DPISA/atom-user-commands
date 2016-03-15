# Atom User Commands
###### Configure shell commands as atom commands.

**We recomend using/migrating to [atom-shell-commands](https://atom.io/packages/atom-shell-commands) which is a fork with several improvements.
Command configuration is pretty similar and it should take no more than 5 minutes changing the configuration.**

But ff you insist on using this package, here is how:

Configure commands in your config file like this
```cson
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
It also generates an entry in the Atom User Commands menu under packages. The command, arguments and options values accepts the  following variables:

| Variable      | Meaning
|          ---: | :---                                              
| **{project}** | project folder                          
| **{path}**    | file relative path to its project folder
| **{absPath}** | file absolute path                      
