document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.querySelector("#star-canvas");
  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);
  const stars = [];
  const numStars = 150;
  const maxDistance = 150;
  const mouse = { x: width / 2, y: height / 2 };

  // Initialize stars
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      radius: Math.random() * 2 + 1,
      color: "white",
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Update stars
    stars.forEach((star) => {
      star.x += star.vx;
      star.y += star.vy;

      if (star.x < 0 || star.x > width) {
        star.vx *= -1;
      }
      if (star.y < 0 || star.y > height) {
        star.vy *= -1;
      }

      // Draw star
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = star.color;
      ctx.fill();
    });

    // Draw lines between stars and mouse
    stars.forEach((star) => {
      const dx = star.x - mouse.x;
      const dy = star.y - mouse.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < maxDistance) {
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance})`;
        ctx.lineWidth = 2; // Make the lines a bit stronger
        ctx.stroke();
      }
    });

    requestAnimationFrame(draw);
  }

  // Update mouse position
  canvas.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
  });

  // Update mouse position when it enters the canvas
  canvas.addEventListener("mouseenter", (event) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
  });

  // Resize canvas on window resize
  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  draw();
});
