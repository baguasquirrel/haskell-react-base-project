### How to setup

1. If you don't have homebrew, please install it now.

2. If you **do** have homebrew, `brew update`.

3. Tap these casks.
  ```
  # brew cask install vagrant
  # brew cask install virtualbox
  ```

4. Yay! You should be able to run a VM now. Get on a fast wifi, and lets get your VM up! Also, put that third export line in your `~/.profile`
  ```
  $ vagrant box add ubuntu/vivid64
  $ vagrant plugin install ansible
  $ export ANSIBLE_LIBRARY=`pwd`/ansible-module-extras
  ```

5. Ok, now for the big moment. In the root directory of this repo, bring up the VM.
  ```
  $ vagrant up
  ```

6. The VM should be up now. Get three terminal windows up.

  - to start rsync:
    ```
    $ vagrant rsync-auto
    ```

  - to build and run the webserver:
    ```
    $ vagrant ssh
    $ cd /fallingwater/haskell
    $ stack build
    $ dist/build/fallingwater/fallingwater -b 0.0.0.0 -p 8080
    ```

  - to continuously run the javascript packagers
    ```
    $ vagrant ssh
    $ cd /fallingwater/web
    $ gulp init
    $ gulp watch
    ```
