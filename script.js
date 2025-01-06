//your code here
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Navbar and Audio Section</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    nav {
      background-color: #333;
      padding: 10px;
    }
    nav ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
    }
    nav ul li {
      margin-right: 20px;
    }
    nav a {
      color: white;
      text-decoration: none;
      font-size: 18px;
    }
    nav a:hover {
      text-decoration: underline;
    }
    .audio-section {
      margin-top: 30px;
    }
    .audio-section h2 {
      text-align: center;
      font-size: 24px;
    }
    .audio-player {
      margin: 20px auto;
      display: block;
    }
  </style>
</head>
<body>

  <!-- Part 1: Navbar -->
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
    </ul>
  </nav>

  <!-- Part 2: Audio Section -->
  <div class="audio-section">
    <h2>3 Random Audios</h2>

    <audio class="audio-player" controls>
      <source src="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3" type="audio/mp3">
      Your browser does not support the audio element.
    </audio>

    <audio class="audio-player" controls>
      <source src="http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg" type="audio/ogg">
      Your browser does not support the audio element.
    </audio>

    <audio class="audio-player" controls>
      <source src="http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3" type="audio/mp3">
      Your browser does not support the audio element.
    </audio>
  </div>

</body>
</html>
Breakdown: