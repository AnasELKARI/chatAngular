  ui: {
    port: 8080
  }
  browserSync({
    files: ["./web/**/*.{html,htm,css,js}"]
  });
  server: {
    baseDir: "./web"
    index:"index.html"
  }
