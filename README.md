<h1>Track Your Future Works with "keepItHere"</h1>

<p>This is the official repository for the <b>keepItHere</b> application, a playlist and study tracker. This project is built with a React client and a Node.js/Express server.</p>

<hr>

<h2>🚀 Getting Started</h2>

<p>Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.</p>

<h3>Prerequisites</h3>

<p>You must have <a href="https://nodejs.org/">Node.js</a> and npm (Node Package Manager) installed on your system. You can verify your installation by running:</p>

<pre><code>node -v
npm -v</code></pre>

<h3>💻 Installation</h3>

<p>Follow these steps to set up both the client and server environments.</p>

<ol>
  <li><b>Clone the repository:</b>
    <pre><code>git clone https://github.com/Shahreyar11/keepithere.git</code></pre>
  </li>
  
  <li><b>Navigate to the root directory:</b>
    <pre><code>cd keepithere</code></pre>
  </li>

  <li><b>Set up the Client:</b>
    <pre><code>cd client
npm install</code></pre>
  </li>

  <li><b>Return to the root and set up the Server:</b>
    <pre><code>cd ..
cd server
npm install</code></pre>
  </li>
</ol>

<hr>

<h2>🏃 Running the Application</h2>

<p>To run the application, you will need to <b>open two separate terminal windows</b>: one for the client (React) and one for the server (Node.js).</p>

<h3>Terminal 1: Run the Server</h3>

<p>Navigate to the server directory and run the start script:</p>
<pre><code>cd keepithere/server
node index.js</code></pre>
<p>Your server will typically be running on <code>http://localhost:{$port}</code> (or check your server logs for the correct port).</p>

<h3>Terminal 2: Run the Client</h3>

<p>In your second terminal, navigate to the client directory and run its start script:</p>
<pre><code>cd keepithere/client
npm run dev</code></pre>
<p>Your React development server will start, and it should automatically open the application in your browser at <code>http://localhost:{port}</code>.</p>