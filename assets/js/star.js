document.addEventListener("DOMContentLoaded", function () {
  const hero = document.getElementById("hero");

  if (!hero) return;

  // High-quality, eye-catching images (royalty-free)
  const images = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];

  hero.style.backgroundImage = `linear-gradient(
      rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 0.65)
    ),
    url(${randomImage}?auto=format&fit=crop&w=1920&q=80)`;

  hero.style.backgroundSize = "cover";
  hero.style.backgroundPosition = "center";
  hero.style.backgroundRepeat = "no-repeat";
});
