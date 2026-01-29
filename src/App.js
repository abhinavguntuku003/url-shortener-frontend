import React, { useState } from "react";
import axios from "axios";
import { QRCodeCanvas } from "qrcode.react";


function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const shortenUrl = async () => {
    const res = await axios.post("https://url-shortener-abhinav.onrender.com/api/shorten", {
      long_url: longUrl,
    });
    setShortUrl(res.data.short_url);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    alert("Copied to clipboard!");
  };

  return (
    <div style={styles.container}>
      <h2>🔗 React URL Shortener</h2>

      <input
        type="text"
        placeholder="Enter Long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        style={styles.input}
      />

      <button onClick={shortenUrl} style={styles.button}>
        Shorten
      </button>

      {shortUrl && (
        <div style={styles.result}>
          <p>Short URL:</p>
          <a href={shortUrl} target="_blank" rel="noreferrer">
            <button>Click to open</button>
            {shortUrl}
          </a>
          <button onClick={copyToClipboard} style={styles.copyBtn}>
            📋 Copy
          </button>

          <h3>QR Code</h3>
          <QRCodeCanvas value={shortUrl} size={150} />
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial",
  },
  input: {
    padding: "10px",
    width: "300px",
  },
  button: {
    padding: "10px 20px",
    marginLeft: "10px",
    background: "#ff0080",
    color: "white",
    border: "none",
  },
  copyBtn: {
    marginLeft: "10px",
    padding: "5px 10px",
    background: "#00bfff",
    border: "none",
    color: "white",
  },
  result: {
    marginTop: "20px",
  },
};

export default App;
