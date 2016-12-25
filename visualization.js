var drawCircles = function (domSelector) {
  var svg,
      rectangles,
      isLocked;
  var defaultWidth = 20;
  var rectangleSizes = [40, 40, 50, 40];

  svg = d3.select(domSelector)
    .append('svg')
    .attr("height", 150)
    .attr("width", 500)
    .style("background-color", "red");

  rectangles = svg.selectAll("rect")
    .data(rectangleSizes)
    .enter()
    .append("rect")
    .attr('class', 'locked-on-circle')
    .attr('y', function (d) { return 100 - d; })
    .attr('x', function (d, i) {
      var margin = defaultWidth;
      var offset = i * (defaultWidth + margin);
      return offset + margin;
    })
    .attr('width', defaultWidth)
    .attr('height', function (d) { return d; })
    .style("fill", "#303030")
};
