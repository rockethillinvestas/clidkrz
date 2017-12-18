export const graphDataHandler = (data, normalizationWeight) => {
  var graphData = [];
  data.timestamps.forEach(e => {
    var object = {
      timestamp: e,
      value: 0
    };
    graphData.push(object);
  });

  data.positions.forEach(e => {
    e.position.forEach((el, i) => {
      if (!(i % 2 === 0) || i === 0) return;
      graphData[i / 2].value += (e.position[i - 2] * e.position[i - 1])/normalizationWeight;
    });
  });
  graphData.shift();
  return graphData;
};
