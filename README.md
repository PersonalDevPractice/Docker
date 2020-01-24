# Docker

## Instructions

When the directory has been pulled down onto your local machine ensure your working directory is within the ``HelloWorldServer`` file. Once this is your current working directory run the command ``docker-compose up -d --build`` which should start running a bunch of commands in your terminal. Once everything has executed try opening ``http://localhost:8085/`` in your web browser. You should successfully recieve the 'Hello World' message in this window.

### What does this command do?
``Docker-compose up`` looks to run a local ``docker-compoose.yml`` file from the folder of the directory. With the addition of ``-d`` this runs the image in a detached mannor allowing us to not see the logs running within that container and by adding ``--build`` a new version of the image will be generated from updated commands and changes to the files within the directory.