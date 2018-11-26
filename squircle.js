class Squircle {
  paint(ctx, geometry, properties) {
    ctx.beginPath();
    ctx.lineWidth = 1;

    const multiplier = -0.01;
    const xRatio = multiplier * geometry.width;
    const yRatio = multiplier * geometry.height;

    ctx.moveTo(0, geometry.height / 2);
    ctx.bezierCurveTo(0 - xRatio, 0 - yRatio, 0 - xRatio, 0 - yRatio, geometry.width / 2, 0);

    ctx.bezierCurveTo(
      geometry.width + xRatio,
      0 - yRatio,
      geometry.width + xRatio,
      0 - yRatio,
      geometry.width,
      geometry.height / 2
    );

    ctx.bezierCurveTo(
      geometry.width + xRatio,
      geometry.height + yRatio,
      geometry.width + xRatio,
      geometry.height + yRatio,
      geometry.width / 2,
      geometry.height
    );

    ctx.bezierCurveTo(
      0 - xRatio,
      geometry.height + yRatio,
      0 - xRatio,
      geometry.height + yRatio,
      0,
      geometry.height / 2
    );

    ctx.fill();
  }
}

registerPaint("squircle", Squircle);
