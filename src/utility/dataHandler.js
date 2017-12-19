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
      if (!(i % 2 === 0)) return;
      graphData[i / 2].value +=
        e.position[i] * e.position[i + 1] / normalizationWeight;
    });
  });
  return graphData;
};

export const calculateValue = (data, index) => {
  var calculatedValue = 0;
  data.positions.forEach(e => {
    if (!(e.position.length === 2)) {
      calculatedValue +=
        e.position[e.position.length - 1 - index] *
        e.position[e.position.length - 1 - (index - 1)];
    } else {
      calculatedValue += e.position[0] * e.position[1];
    }
  });
  return calculatedValue;
};

export const formatCurrency = () => {
  var formatter = new Intl.NumberFormat("no-nb", {
    style: "currency",
    currency: "NOK",
    minimumFractionDigits: 0
  });
  return formatter;
};
