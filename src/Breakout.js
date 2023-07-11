function Breakout() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const rulesBtn = document.getElementById("rules_btn");
  const closeBtn = document.getElementById("close_btn");
  const rules = document.getElementById("rules");

  const gameOverBox = document.getElementById("game_over");

  const btnPlayAgain = document.getElementById("try_again");

  btnPlayAgain.addEventListener("click", () => {
    btnPlayAgain.classList.remove("show_btn_again");
    gameOverBox.classList.remove("show_end_game");
  });

  let score = 0;

  const brickRowCount = 5;
  const brickColumnCount = 9;

  //ball props
  const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 8,
    speed: 3,
    dx: 3,
    dy: 3,
  };

  //paddle props
  const paddle = {
    x: canvas.width / 2 - 40,
    y: canvas.height - 10,
    w: 80,
    h: 10,
    speed: 8,
    dx: 0,
  };

  //brick props
  const brickFeature = {
    offsetX: 45,
    offsetY: 60,
    w: 70,
    padding: 10,
    h: 20,
    visible: true,
  };

  //create bricks frame
  const bricks = [];

  for (let i = 0; i < brickColumnCount; i++) {
    bricks[i] = [];

    for (let j = 0; j < brickRowCount; j++) {
      const x =
        i * (brickFeature.w + brickFeature.padding) + brickFeature.offsetX;
      const y =
        j * (brickFeature.h + brickFeature.padding) + brickFeature.offsetY;

      bricks[i][j] = { x, y, ...brickFeature };
    }
  }

  //draw bricks in canvas
  function drawBricks() {
    bricks.forEach((column) => {
      column.forEach((brick) => {
        ctx.beginPath();
        ctx.rect(brick.x, brick.y, brick.w, brick.h);
        ctx.fillStyle = brick.visible ? "#8a8a8a" : "transparent";
        ctx.fill();
        ctx.closePath();
      });
    });
  }

  //draw Ball
  function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
    ctx.fillStyle = "#a10f0f";
    ctx.fill();
    ctx.closePath();
  }

  //draw Paddle
  function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
    ctx.fillStyle = "#004";
    ctx.fill();
    ctx.closePath();
  }

  // draw score
  function drawScore() {
    ctx.fillText(`score: ${score}`, canvas.width - 100, 30);
    ctx.font = "18px Lucida";
  }

  //draw everything
  function draw() {
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBall();
    drawPaddle();
    drawBricks();
    drawScore();
  }

  //  dynamic paddle
  function movePaddle() {
    paddle.x += paddle.dx;

    //wall detection
    if (paddle.x + paddle.w > canvas.width) {
      paddle.x = canvas.width - paddle.w;
    } else if (paddle.x < 0) {
      paddle.x = 0;
    }
  }

  function motionPaddle(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
      paddle.dx = paddle.speed;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      paddle.dx = -paddle.speed;
    }
  }

  function haltPaddle(e) {
    if (
      e.key === "Right" ||
      e.key === "ArrowRight" ||
      e.key === "Left" ||
      e.key === "ArrowRLeft"
    ) {
      paddle.dx = 0;
    }
  }

  //move Ball
  function moveBall() {
    ball.x = ball.x + ball.dx;
    ball.y = ball.y + ball.dy;

    //wall collision (right/left)
    if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
      ball.dx = ball.dx * -1;
    }
    //wall collision (top/bottom)
    if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
      ball.dy = ball.dy * -1;
    }

    //paddle collision
    if (
      ball.x + ball.size < paddle.x + paddle.w &&
      ball.x - ball.size > paddle.x &&
      ball.y + ball.size > paddle.y
    ) {
      ball.dy = -ball.speed;
    }

    //brick collision

    bricks.forEach((column) =>
      column.forEach((brick) => {
        if (brick.visible) {
          if (
            ball.x + ball.size < brick.x + brick.w &&
            //right brick side check
            ball.x - ball.size > brick.x &&
            //left brick side check
            ball.y - ball.size < brick.y + brick.h &&
            //bottom brick side check
            ball.y + ball.size > brick.y // top brick side check
          ) {
            ball.dy *= -1;
            brick.visible = false;
            increaseScore();
          }
        }
      })
    );

    //hit the bottom of canvas wall - lose
    if (ball.y + ball.size > canvas.height) {
      rebuildBricks();
      score = 0;
    }
  }

  //function end game
  function AddEndGame() {
    if (score === 0) {
      gameOverBox.classList.add("show_end_game");
      btnPlayAgain.classList.add("show_btn_again");
    }
  }

  //update
  function update() {
    movePaddle();
    moveBall();
    AddEndGame();
    //draw everything
    draw();

    requestAnimationFrame(update);
  }

  update();

  //rebuild bricks
  function rebuildBricks() {
    bricks.forEach((column) => {
      column.forEach((brick) => (brick.visible = true));
    });
  }

  //increase score
  function increaseScore() {
    score++;
    if (score % (brickColumnCount * brickRowCount) === 0) {
      rebuildBricks();
    }
  }

  // keyboard Event Listeners
  document.addEventListener("keydown", motionPaddle);
  document.addEventListener("keyup", haltPaddle);

  //show and hide rule event handlers
  rulesBtn.addEventListener("click", () => {
    rules.classList.add("show");
  });
  closeBtn.addEventListener("click", () => {
    rules.classList.remove("show");
  });
}

export default Breakout;
