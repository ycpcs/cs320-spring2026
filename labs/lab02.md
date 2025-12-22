---
layout: default
title: "Lab 2: Setting Up Git"
---

In this lab, you will be using [Git](http://git-scm.com/), which is currently the most widely used and arguably the best version control system.  It is also the version control system that is built into [GitHub](https://github.com), which is the website you wil be using to host the team remote code repositories, along with the GitHub issue tracker function.

You may wish to use the [GitHub Desktop Client](https://desktop.github.com) or the [Git-Tower Desktop Client](https://git-tower.com), rather than Intellij's built in versioning. Both of these applications facilitate easy(er) access and use of Git and are free to download and use.

## Before you start

Be aware of the following fact:

<div class="callout">
Git has a bit of a learning curve.
</div>

Ok, I'll admit I'm downplaying the learning curve a bit here.  You will probably find Git to be fairly confusing for a while.  Eventually, it will make sense.  I promise.

As with most worthwhile skills, becoming proficient with Git takes some work.  The best advice is to *think carefully* about what you're doing.

Another thing to keep in mind:

<div class="callout">
Git is one of the most awesome and powerful software development tools ever created.  Although it might take you a while to reach that conclusion - it could be years...
</div>

Like [OO Analysis](../lectures/lecture10.html), Git proficiency is a software development super power.

# Step 1: Create an SSH keypair

Here are GitHub's instructions for creating an SSH keypair to use with you GitHub account:

[How to Create and SSH key pair for GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

KEC Lab Computer
-------------------

**If you are working from a KEC lab computer**, execute the following commands in a Windows 10/11 Command Window (enter "cmd" in the Windows search bar) or from Cygwin (Windows 7/10/11) or from a Linux terminal window.  Those instructions will take you to your **York College home (H:) drive**, and then will list the contents of the **.ssh** directory (if it already exists):

	cd h:
    ls .ssh

If the above commands show the files **id\_rsa** and **id\_rsa.pub**, you can skip the following steps, and proceed to Step 2, as you already have SSH keys.  Otherwise, execute the following command to create the .ssh folder:

    mkdir .ssh

Then execute the following command to generate the SSH key pair:

    ssh-keygen -t rsa -b 4096
    
You will want to save your SSH keypair to your **YCP Home Drive (H:)**.  When prompted to enter the file in which to save the keypair, enter the following path and file name for the SSH keypair, otherwise the keypair will be stored at **C:/Users/your-YCP-username/.ssh** on the KEC lab computer you are working on and will **NOT** be available to you when you work on other lab computers.  The path shown in parentheses is the default location - do **NOT** use the default location.  The second URL path is where you want to store the SSH keypair, **on your H: drive.

Windows 10/11:

    Generating public/private rsa key pair.
    Enter file in which to save the key (/home/your-YCP-username/.ssh/id_rsa): h:/.ssh/id_rsa

Windows Cygwin:

    Generating public/private rsa key pair.
    Enter file in which to save the key (/home/your-YCP-username/.ssh/id_rsa): /cygdrive/h/.ssh/id_rsa
	
When prompted for a passphrase, just press enter (twice).

That will store your SSH keys in the **.ssh** directory on your York College home drive **(H:/.ssh)**.

Now skip to Step 2.

Your Own Computer
-------------------

**If you working from your own computer**, execute the following commands in a Windows 10/11 Command Window (enter "cmd" in the Windows search bar) or from Cygwin (Windows 7/10/11) or from a Linux terminal window.  Those instructions will take you to the drive you choose (for Windows, that would most likely be your **C:** drive), and then will list the contents of the **.ssh** directory (if it already exists):

	cd c:
    ls .ssh

If the above commands show the files **id\_rsa** and **id\_rsa.pub**, you can skip the following steps, and proceed to Step 2, as you already have SSH keys.  Otherwise, execute the following command to create the .ssh folder:

    mkdir .ssh
    
Then execute the following command to generate the SSH key pair:

    ssh-keygen -t rsa -b 4096
    
You will most likely want to save your SSH keypair to **your computer's root drive (C:)**.  When prompted to enter the file in which to save the keypair, enter the following path and file name for the SSH keypair, otherwise the keypair will be stored at **C:/Users/your-Windows-username/.ssh** on your computer.  That's fine, if that's where you want to store it.  The path shown in parentheses is the default location.  If you want to store the keypair somewhere else, i.e., on the root directory of your C: drive, then the second URL path is where you specify that location

Windows 10/11:

    Generating public/private rsa key pair.
    Enter file in which to save the key (/home/your-Windows-username/.ssh/id_rsa): c:/.ssh/id_rsa

Windows Cygwin:

    Generating public/private rsa key pair.
    Enter file in which to save the key (/home/your-Windows-username/.ssh/id_rsa): /cygdrive/c/.ssh/id_rsa

When prompted for a passphrase, just press enter (twice).

That will store your SSH keypair in the **.ssh** directory on your computer, at the location you specified, or the default location, if you did not specify a different location.

Now you need to tell Eclipse where to find your SSH keypair:

In Eclipse, open the **Window** tab, select **Preferences**, then **General**, then **Network Connections**, and finally **SSH**.  Or, more succinctly:

	Window->Preferences->General->Network Connections->SSH.

You should see this pop-up window (note that it is showing the current settings from Eclipse on my laptop):

> <a href="images/eclipse-setting-SSH.JPG"><img style="width: 500px;" src="images/eclipse-setting-SSH.JPG" /></a>

Now set your **SSH2 home** location and then select your **Private keys** from that location.  When you are done, select **Apply and Close**.

Alternately, you can do this directly in **Cygwin** by executing the following command, which fills in the same information in the Eclipse IDE as the above instructions do.  Adjust this command if you chose to save your SSH keypair somewhere other than your root C: drive):

    set Eclipse SSH2 home to C:/.ssh
    
# Step 2: Create a GitHub Account

If you don't already have a GitHub account, go to [GitHub](https://github.com).

Pick a username, enter a valid email address (I strongly suggest you use your YCP email address), and then select a password.

Select "Sign up for GitHub".

Choose the free service - that is the default.

Verify your email address.

# Step 3: Add your public key to your GitHub account

Log into [GitHub](https://github.com).

Click on the **Profile** icon in the top right of the page (it looks like a green square sitting on a green table.)

Click on **Settings** in the dropdown list.

Click on the **SSH and GPG keys** item about 1/3 down the left side, in the **Personal settings** column.

Click the **New SSH key** button at the top right of the SSH Keys list.

Enter "YCP" as the title.  In a text editor **Notepad++** or **Accessories &rarr; Text Editor**, open the file **.ssh/id\_rsa.pub**.  Copy the entire text in this file, and paste it into the **Key** textbox.  Then press the **Add SSH key** button.  You might need to enter the password for your GitHub account.

# Step 4: Fork

Go to the following GitHub repository page:
  [https://github.com/DonaldHakeII/MoveTheSquare](https://github.com/DonaldHakeII/MoveTheSquare)

Click "Clone or Download" and make sure that **Clone with SSH** is displayed for the clone credentials (just to the right of "Find file"). Click the **Fork** button (upper right button labelled "Fork" under the Profile icon).  This will make a clone of this repository in your own GitHub account.  This will be your personal public repository for this lab.

The repository you just forked contains an Eclipse project called **MoveTheSquare**, a game engine that will be the basis for the next great indie game.  You will just need to add some additional gameplay features!

<!-- vim:set wrap: ­-->
<!-- vim:set linebreak: -->
<!-- vim:set nolist: -->
