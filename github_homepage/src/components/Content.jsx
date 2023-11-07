import React from "react";

const trendingRepositories = [
  {
    userPic: "https://avatars.githubusercontent.com/u/89920203?s=48&v=4",
    repoName: "FashinCart",
    technologies: "Javascript",
    stars: "3k",
    description:
      "Create a Simple cart application",
  },
  {
    userPic: "https://avatars.githubusercontent.com/u/51063788?s=48&v=4",
    repoName: "Flipkart",
    technologies: "React",
    stars: "10k",
    description:
      "Build the famous website Flipkart.com 🌟 Star to support our work!",
  }
];

function Content() {
  return (
    <div>
      <div style={{ display: "flex", gap:"20px" }}>
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "1",
              padding: "1",
            }}
          >
            <div
              style={{
                fontFamily: "sans-serif",
                fontWeight: "bold",
                fontSize: "xl",
              }}
            >
              Home
            </div>
            <div style={{ color: "blue", marginLeft: "24" }}>Send feedback</div>
            <br/>
            <br/>
            <button
              style={{
                gap: "2",
                fontSize: "sm",
                backgroundColor: "green",
                color: "white",
              }}
            >
              Filter
            </button>
          </div>
          <div
            style={{
              border: "0.5px solid",
              borderColor: "gray",
              backgroundColor: "gray.100",
              margin: "1",
              padding: "10px",
            }}
          >
            <div style={{ display: "flex" }}>
              <div
                style={{ fontWeight: "bold", padding: "1", margin: "1" }}
              >
                Updates to your homepage feed
              </div>
              <br/>
              <br/>
            </div>
            <div
              style={{
                letterSpacing: "wide",
                color: "gray.600",
                padding: "1",
                margin: "1",
              }}
            >
              We've merged the capabilities of both the Following feed and the For You feed, creating a unified location for exploring GitHub content. This update includes enhanced filtering options, allowing you to tailor your feed to your preferences, alongside a fresh and appealing visual design.
            </div>
          </div>
          <div>
          <br/>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1",
                marginLeft: "2",
              }}
            >
              <div style={{ fontSize: "1.5rem" }}>Trending Repositories</div>
            </div>
            <br/>
            {trendingRepositories.map((e) => (
              <div
                key={e.repoLink}
                style={{
                  border: "1px solid",
                  borderColor: "gray.300",
                  gap: "2",
                  margin: "2",
                  padding: "2",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "4",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", gap: "2" }}>
                    <img src={e.userPic} width="6" alt={e.repoName} />
                    <div
                      style={{
                        fontFamily: "sans-serif",
                        fontWeight: "semibold",
                      }}
                    >
                      {e.repoName}
                    </div>
                  </div>
                  <button style={{ gap: "2", fontSize: "sm" }}>Star</button>
                </div>
                <div style={{ marginTop: "2", letterSpacing: "wide" }}>
                  {e.description}
                </div>
                <div style={{ gap: "2", alignItems: "center", marginTop: "2" }}>
                  <div style={{ color: "gray.500" }}>{e.technologies}</div>
                  <div style={{ color: "gray.500" }}>{e.stars}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div>
            <img src="https://i.ibb.co/6XWkvMD/github.png" alt="GitHub" style={{width:"60%", marginLeft:"100px", marginTop:"20px"}}/>
          </div>
          <div
            style={{
              padding: "10px",
              margin: "10px",
              border: "1px solid",
              borderColor: "gray.300",
            }}
          >
            <div style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
              Latest changes
            </div>
            <br/>
            <div>
              <div
                style={{ fontSize: "sm", color: "gray.500", marginTop: "2" }}
              >
                2 days ago
              </div>
              <div
                style={{
                  fontSize: "sm",
                  letterSpacing: "wide",
                  color: "gray.700",
                }}
              >
                Actions – Navbar added
              </div>
            </div>
            <br/>
            <div>
              <div
                style={{
                  fontSize: "sm",
                  letterSpacing: "wide",
                  color: "gray.500",
                  marginTop: "2",
                }}
              >
                2 days ago
              </div>
              <div
                style={{
                  fontSize: "sm",
                  letterSpacing: "wide",
                  color: "gray.700",
                }}
              >
                Footer
              </div>
            </div>
            <br/>
            <div>
              <div
                style={{
                  fontSize: "sm",
                  letterSpacing: "wide",
                  color: "gray.500",
                  marginTop: "2",
                }}
              >
                2 days ago
              </div>
              <div
                style={{
                  fontSize: "sm",
                  letterSpacing: "wide",
                  color: "gray.700",
                }}
              >
                Navbar added
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
