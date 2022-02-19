window.onload = function () {
  const canvas = document.getElementById("snow_canvas");
  const ctx = canvas.getContext("2d");

  const W = 1000;
  const H = 500;
  canvas.width = W;
  canvas.height = H;

  const mp = 100; //밀도 수치
  const particles = [];
  for (var i = 0; i < mp; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 4 + 3, //입자 크 최대치 조절
      d: Math.random() * mp, // 밀도
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    ctx.fillStyle = "rgba(255, 255, 255, 0.8)"; //눈 입자 색깔
    ctx.beginPath();
    for (var i = 0; i < mp; i++) {
      let p = particles[i];
      ctx.moveTo(p.x, p.y);
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
    update();
  }

  let angle = 0;
  function update() {
    angle = 0;
    for (var i = 0; i < mp; i++) {
      let p = particles[i];
      p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
      p.x += Math.sin(angle);

      if (p.x > W + 5 || p.x < -5 || p.y > H) {
        if (i % 3 > 0) {
          particles[i] = { x: Math.random() * W, y: -10, r: p.r, d: p.d };
        } else {
          if (Math.sin(angle) > 0) {
            particles[i] = { x: -5, y: Math.random() * H, r: p.r, d: p.d };
          } else {
            particles[i] = { x: W + 5, y: Math.random() * H, r: p.r, d: p.d };
          }
        }
      }
    }
  }
  setInterval(draw, 33);
};
