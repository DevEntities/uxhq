module.exports = {
  apps: [
    {
      name: "uxhq-frontend",
      script: "http-server",
      args: ["dist", "-p", "5173", "-a", "0.0.0.0"],
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
