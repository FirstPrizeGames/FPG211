module.exports = (request, response) => {
  response.setHeader("Cache-Control", "no-store, max-age=0");
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.status(200).json({
    status: "operational",
    service: "First PrizeGames",
    checkedAt: new Date().toISOString(),
  });
};
