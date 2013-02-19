Installation Instructions with Webstorm
=======================================

Download Stuff<br>
* Download Webstorm [here](http://download-ln.jetbrains.com/webide/WebStorm-5.0.4.tar.gz)<br>
* Install node.js and npm with 
<pre><code>sudo apt-get install npm node.js</code></pre>
* Install git 
<pre><code>sudo apt-get install git</code></pre>
* check out the application via command line 
<pre><code>git clone https://github.com/osintegrators/JSGranny.git</code></pre>
* cd into the directory you checked it out in
* cd into the project dir
* You might need to do the step below. It worked for me without the package but I encountered an error while re-doing it.<br> install the needed node-gyp package globally with npm
<pre><code> sudo npm install -g node-gyp </code></pre>

Install the database.
<pre><code> sudo apt-get install postgresql-9.1</code></pre>
* make a user called postgres and Start the postgresql server. Documentation regarding this can be found [here](http://www.postgresql.org/docs/9.1/static/server-start.html)
* Create a database called granny by following command <pre><code> </code>CREATE DATABASE granny;</pre>
* Create a user/role called granny by following command <pre><code> </code>CREATE USER granny WITH password 'granny';</pre>
* Grant all privileges to the granny user/role by following command <pre><code> GRANT ALL PRIVILEGES ON DATABASE granny to granny; </code></pre>
* Create a table by the following command <pre><code> CREATE TABLE phonebook(_id SERIAL PRIMARY KEY, name VARCHAR(32), address VARCHAR(64), phone VARCHAR(32), email VARCHAR(32));
 </code></pre>

Get project into Webstorm
* Open WebStorm and import from file system. 
* Alternatively, you can just see the SS#2 and checkout directly into the IDE from Github. ( Ofcourse you need git and the plugin installed for this. See [here](http://www.jetbrains.com/webstorm/webhelp/using-github-integration.html) for help ) 
* Simply Press Run at the top ... SS#3 ( You may need to specify app.js path on the system)
* At this point your server should be running on http://localhost:3000/
* Browse to that url in any browser.


Without using Webstorm, after you checkout the project from command line. You can simply execute the command to get it to run.
<pre><code> node app.js </code><pre>
