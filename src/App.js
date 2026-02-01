// import React, { useState } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";


// function App() {
//   const [longUrl, setLongUrl] = useState("");
//   const [shortUrl, setShortUrl] = useState("");

//   const shortenUrl = async () => {
    
//     const res = await axios.post("https://url-shortener-abhinav.onrender.com/api/shorten", {
//       long_url: longUrl,
//     });
//     setShortUrl(res.data.short_url);
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(shortUrl);
//     alert("Copied to clipboard!");
//   };

//   return (
//     <div style={styles.container}>
//       <h2>🔗 React URL Shortener</h2>

//       <input
//         type="text"
//         placeholder="Enter Long URL"
//         value={longUrl}
//         onChange={(e) => setLongUrl(e.target.value)}
//         style={styles.input}
//       />

//       <button onClick={shortenUrl} style={styles.button}>
//         Shorten
//       </button>

//       {shortUrl && (
//         <div style={styles.result}>
//           <p>Short URL:</p>
//           <a href={shortUrl} target="_blank" rel="noreferrer">
//             {shortUrl}
//           </a>

//           <button onClick={copyToClipboard} style={styles.copyBtn}>
//             📋 Copy
//           </button>

//           <h3>QR Code</h3>
//           <QRCodeCanvas value={shortUrl} size={200} />
//           <button onClick={() => {
//           const canvas = document.querySelector("canvas");
//           const url = canvas.toDataURL();
//           const a = document.createElement("a");
//           a.href = url;
//           a.download = "qrcode.png";
//           a.click();
//           }}>
//           Download QR
//           </button>

//         </div>
//       )}
//     </div>
//   );
// }

// const styles = {
//   container: {
//     textAlign: "center",
//     marginTop: "100px",
//     fontFamily: "Arial",
//   },
//   input: {
//     padding: "10px",
//     width: "300px",
//   },
//   button: {
//     padding: "10px 20px",
//     marginLeft: "10px",
//     background: "#ff0080",
//     color: "white",
//     border: "none",
//   },
//   copyBtn: {
//     marginLeft: "10px",
//     padding: "5px 10px",
//     background: "#00bfff",
//     border: "none",
//     color: "white",
//   },
//   result: {
//     marginTop: "20px",
//   },
// };

// export default App;
// import React, { useState } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";

// function App() {
//   const [longUrl, setLongUrl] = useState("");
//   const [shortUrl, setShortUrl] = useState("");
//   const [loading, setLoading] = useState(false);

//   // CHANGE THIS WHEN RUNNING LOCALLY
//   const API_BASE =
//     process.env.REACT_APP_API_URL ||
//     "https://url-shortener-abhinav.onrender.com";

//   const shortenUrl = async () => {
//     if (!longUrl) return alert("Enter a URL");

//     try {
//       setLoading(true);
//       const res = await axios.post(`${API_BASE}/api/shorten`, {
//         long_url: longUrl,
//       });
//       setShortUrl(res.data.short_url);
//     } catch (err) {
//       alert("Failed to shorten URL");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(shortUrl);
//     alert("Copied to clipboard!");
//   };

//   const downloadQR = () => {
//     const canvas = document.querySelector("canvas");
//     const url = canvas.toDataURL("image/png");
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "qrcode.png";
//     a.click();
//   };

//   return (
//     <div style={styles.container}>
//       <h2>🔗 🔗 URL Shortener</h2>

//       <input
//         type="url"
//         placeholder="Enter long URL"
//         value={longUrl}
//         onChange={(e) => setLongUrl(e.target.value)}
//         style={styles.input}
//       />

//       <button onClick={shortenUrl} style={styles.button} disabled={loading}>
//         {loading ? "Shortening..." : "Shorten"}
//       </button>

//       {shortUrl && (
//         <div style={styles.result}>
//           <p>Short URL:</p>
//           <a href={shortUrl} target="_blank" rel="noreferrer">
//             {shortUrl}
//           </a>

//           <div style={{ marginTop: "10px" }}>
//             <button onClick={copyToClipboard} style={styles.copyBtn}>
//               📋 Copy
//             </button>
//           </div>

//           <h3 style={{ marginTop: "20px" }}>QR Code</h3>
//           <QRCodeCanvas value={shortUrl} size={180} />

//           <div>
//             <button onClick={downloadQR} style={styles.qrBtn}>
//               ⬇ Download QR
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// const styles = {
//   container: {
//     textAlign: "center",
//     marginTop: "100px",
//     fontFamily: "Arial, sans-serif",
//   },
//   input: {
//     padding: "10px",
//     width: "320px",
//     marginRight: "10px",
//   },
//   button: {
//     padding: "10px 20px",
//     background: "#ff0080",
//     color: "#fff",
//     border: "none",
//     cursor: "pointer",
//   },
//   copyBtn: {
//     padding: "6px 12px",
//     background: "#00bfff",
//     color: "#fff",
//     border: "none",
//     cursor: "pointer",
//   },
//   qrBtn: {
//     marginTop: "10px",
//     padding: "6px 12px",
//     background: "#444",
//     color: "#fff",
//     border: "none",
//     cursor: "pointer",
//   },
//   result: {
//     marginTop: "30px",
//   },
// };

// export default App;


import React, { useState, useRef } from "react";
import axios from "axios";
import { QRCodeCanvas } from "qrcode.react";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const qrRef = useRef(null);

  // CHANGE THIS WHEN RUNNING LOCALLY
  const API_BASE =
    process.env.REACT_APP_API_URL ||
    "https://url-shortener-abhinav.onrender.com";

  const shortenUrl = async () => {
    if (!longUrl) return alert("Enter a URL");

    try {
      setLoading(true);
      const res = await axios.post(`${API_BASE}/api/shorten`, {
        long_url: longUrl,
      });
      setShortUrl(res.data.short_url);
    } catch (err) {
      alert("Failed to shorten URL");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadQR = () => {
    const canvas = document.querySelector("canvas");
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "qrcode.png";
    a.click();
  };

  return (
    <div style={styles.app}>
      {/* Background Elements */}
      <div style={styles.backgroundGradient}></div>
      <div style={styles.shapesContainer}>
        <div style={{ ...styles.shape, ...styles.shape1 }}></div>
        <div style={{ ...styles.shape, ...styles.shape2 }}></div>
        <div style={{ ...styles.shape, ...styles.shape3 }}></div>
      </div>

      {/* Main Container */}
      <div style={styles.container}>
        <div style={styles.glassCard}>
          {/* Header */}
          <div style={styles.header}>
            <div style={styles.iconWrapper}>
              <svg
                style={styles.logoIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 style={styles.title}>URL Shortener</h2>
            <p style={styles.subtitle}>
              Transform long URLs into short, shareable links
            </p>
          </div>

          {/* Input Section */}
          <div style={styles.inputGroup}>
            <div style={styles.inputWrapper}>
              <svg
                style={styles.inputIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <path
                  d="m21 21-4.35-4.35"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <input
                type="url"
                placeholder="Enter your long URL here..."
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
                style={styles.input}
                onKeyPress={(e) => e.key === "Enter" && shortenUrl()}
              />
            </div>
            <button
              onClick={shortenUrl}
              style={{
                ...styles.button,
                opacity: loading ? 0.7 : 1,
                cursor: loading ? "not-allowed" : "pointer",
              }}
              disabled={loading}
            >
              <span>{loading ? "Shortening..." : "Shorten URL"}</span>
              <svg
                style={styles.btnIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Result Section */}
          {shortUrl && (
            <div style={styles.resultSection}>
              {/* Success Badge */}
              <div style={styles.successBadge}>
                <svg style={styles.badgeIcon} viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="22 4 12 14.01 9 11.01"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>URL Shortened Successfully!</span>
              </div>

              {/* URL Display */}
              <div style={styles.urlDisplay}>
                <label style={styles.label}>Your shortened URL:</label>
                <div style={styles.urlBox}>
                  <input
                    type="text"
                    value={shortUrl}
                    readOnly
                    style={styles.shortUrlInput}
                  />
                  <button
                    onClick={copyToClipboard}
                    style={{
                      ...styles.btnCopy,
                      background: copied ? "#10b981" : "rgba(99, 102, 241, 0.2)",
                      borderColor: copied
                        ? "#10b981"
                        : "rgba(99, 102, 241, 0.3)",
                      color: copied ? "#fff" : "#6366f1",
                    }}
                    title="Copy to clipboard"
                  >
                    <svg
                      style={styles.copyIcon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      {copied ? (
                        <polyline
                          points="20 6 9 17 4 12"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      ) : (
                        <>
                          <rect
                            x="9"
                            y="9"
                            width="13"
                            height="13"
                            rx="2"
                            ry="2"
                            strokeWidth="2"
                          />
                          <path
                            d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                            strokeWidth="2"
                          />
                        </>
                      )}
                    </svg>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={styles.actionButtons}>
                <a
                  href={shortUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.btnSecondary}
                >
                  <svg
                    style={styles.actionIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="15 3 21 3 21 9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="10"
                      y1="14"
                      x2="21"
                      y2="3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Open Link
                </a>
                <button onClick={downloadQR} style={styles.btnSecondary}>
                  <svg
                    style={styles.actionIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="7 10 12 15 17 10"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="12"
                      y1="15"
                      x2="12"
                      y2="3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Download QR
                </button>
              </div>

              {/* QR Code Section */}
              <div style={styles.qrSection}>
                <h3 style={styles.qrTitle}>Scan QR Code</h3>
                <div style={styles.qrContainer} ref={qrRef}>
                  <QRCodeCanvas
                    value={shortUrl}
                    size={200}
                    level="H"
                    fgColor="#6366f1"
                    bgColor="#ffffff"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <p>Fast, secure, and completely free URL shortening service</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  app: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    background: "#0f172a",
    color: "#f1f5f9",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    padding: "20px",
    margin: 0,
  },
  backgroundGradient: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    opacity: 0.1,
    zIndex: 0,
  },
  shapesContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    zIndex: 0,
  },
  shape: {
    position: "absolute",
    borderRadius: "50%",
    filter: "blur(60px)",
    opacity: 0.15,
  },
  shape1: {
    width: "500px",
    height: "500px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    top: "-10%",
    left: "-10%",
  },
  shape2: {
    width: "400px",
    height: "400px",
    background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    bottom: "-10%",
    right: "-10%",
  },
  shape3: {
    width: "300px",
    height: "300px",
    background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    top: "50%",
    left: "50%",
  },
  container: {
    width: "100%",
    maxWidth: "600px",
    position: "relative",
    zIndex: 1,
  },
  glassCard: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderRadius: "24px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    padding: "48px 40px",
    boxShadow:
      "0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  iconWrapper: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "70px",
    height: "70px",
    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    borderRadius: "20px",
    marginBottom: "20px",
    boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)",
  },
  logoIcon: {
    width: "36px",
    height: "36px",
    color: "white",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: 700,
    marginBottom: "12px",
    background: "linear-gradient(135deg, #fff, #cbd5e1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    margin: "0 0 12px 0",
  },
  subtitle: {
    color: "#cbd5e1",
    fontSize: "1rem",
    fontWeight: 400,
    margin: 0,
  },
  inputGroup: {
    marginBottom: "32px",
  },
  inputWrapper: {
    position: "relative",
    marginBottom: "20px",
  },
  inputIcon: {
    position: "absolute",
    left: "16px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "20px",
    height: "20px",
    color: "#cbd5e1",
    pointerEvents: "none",
  },
  input: {
    width: "100%",
    padding: "16px 16px 16px 48px",
    background: "rgba(255, 255, 255, 0.05)",
    border: "2px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    color: "#f1f5f9",
    fontSize: "1rem",
    outline: "none",
    transition: "all 0.3s ease",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "16px 24px",
    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontSize: "1rem",
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(99, 102, 241, 0.3)",
  },
  btnIcon: {
    width: "20px",
    height: "20px",
  },
  resultSection: {
    marginTop: "32px",
  },
  successBadge: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 20px",
    background: "rgba(16, 185, 129, 0.1)",
    border: "1px solid rgba(16, 185, 129, 0.2)",
    borderRadius: "12px",
    marginBottom: "24px",
    color: "#10b981",
  },
  badgeIcon: {
    width: "20px",
    height: "20px",
  },
  urlDisplay: {
    marginBottom: "24px",
  },
  label: {
    display: "block",
    marginBottom: "12px",
    color: "#cbd5e1",
    fontSize: "0.9rem",
    fontWeight: 500,
    textAlign: "left",
  },
  urlBox: {
    display: "flex",
    gap: "8px",
  },
  shortUrlInput: {
    flex: 1,
    padding: "14px 16px",
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    color: "#f1f5f9",
    fontSize: "0.95rem",
    outline: "none",
  },
  btnCopy: {
    padding: "14px 16px",
    border: "1px solid rgba(99, 102, 241, 0.3)",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  copyIcon: {
    width: "20px",
    height: "20px",
  },
  actionButtons: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    marginBottom: "32px",
  },
  btnSecondary: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "12px 20px",
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    color: "#f1f5f9",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  actionIcon: {
    width: "18px",
    height: "18px",
  },
  qrSection: {
    textAlign: "center",
    padding: "32px",
    background: "rgba(255, 255, 255, 0.03)",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.08)",
  },
  qrTitle: {
    marginBottom: "20px",
    color: "#cbd5e1",
    fontSize: "1.1rem",
    fontWeight: 600,
    margin: "0 0 20px 0",
  },
  qrContainer: {
    display: "inline-flex",
    padding: "20px",
    background: "white",
    borderRadius: "16px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
  },
  footer: {
    textAlign: "center",
    marginTop: "32px",
    padding: "20px",
    color: "#cbd5e1",
    fontSize: "0.9rem",
  },
};

export default App;