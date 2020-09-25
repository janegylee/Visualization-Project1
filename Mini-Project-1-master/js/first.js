let goodFacts = [
  'This visualization is for those interested in comparing the different disease deaths worldwide',
  'This visualization is trying to show the seriousness of the coronavirus outbreak',
  'The data being encoded in this visualization is the average disease deaths per day worldwide by different pandemics and endemics',
  'The data is encoded as a horizontal bar chart with its x-axis representing the number of average disease deaths and y-axis representing the type of disease. The seriousness of COVID-19 is emphasized through being highlighted in a different color',
  'The reader is tasked with comparing the values of the total deaths and identifying the upper extreme',
  'This visualization is particularly insightful and enlightening with its use of color and the clear format of the bar chart. The bars are colored in blue except for COVID-19, allowing the audience to easily notice that the average disease deaths for the coronavirus is the highest. The bars are also sorted in the order of highest to lowest number of deaths, displaying the most important information on the top. To help with further comparison, each type of disease is categorized into either “pandemic” or “endemic” with different colors. It is also truthful since the scaling is also to standard with the numbers labeled at the tip of each bar for clarity. This visualization certainly helps the audience interpret visualization correctly, making it functional as well. It is fairly average in terms of beauty',
  'Considering all aspects, this visualization is good because it is very approachable and easy to understand. It has great quantitative measures and a clear comparison that the audience can see and figure out what is important. The use of colors are very effective and practical as well.',
];

let goodIndex = 0;

document.querySelector('#good-forward-1').onclick = function () {
  if (goodIndex >= goodFacts.length - 1) return;
  console.log('forward-1');
  goodIndex++;

  let pTag = document.querySelector('#good-1');
  pTag.innerHTML = goodFacts[goodIndex];
};

document.querySelector('#good-backward-1').onclick = function () {
  if (goodIndex <= 0) return;
  console.log('backward-1');
  goodIndex--;

  let pTag = document.querySelector('#good-1');
  pTag.innerHTML = goodFacts[goodIndex];
};

let badFacts = [
  'This visualization is for the readers of technical papers who are interested in the changing data on email usages',
  'This plot is trying to convey that email traffic is steeply on the rise',
  'The data being encoded in this visualization is the total worldwide emails being used per day, in billions, through 2017 to 2021',
  'The data is represented through a barchart. The x-axis represents years and the y-axis shows the total worldwide emails (billions). The bars have different colors that illustrate respective years',
  'The reader is tasked with identifying the different number of total emails for the years shown, recognizing the trend by comparing those numbers',
  'Although unnecessary, this visualization can be seen as beautiful with a pleasing combination of colors. However, it fails to apply the other four principles. The plot unfairly represents the data: the y-axis does not start at 0 but starts at a very large value of 225 billion instead. In addition, the time range is very narrow and includes years that need prediction of the future, not using data that is collected. The form of the barchart also has needless features such as 3D and the shadows. Thus this visualization does not have the qualities of being truthful, functional, insightful, and enlightening',
  'Considering all aspects, this visualization is bad because it can be misleading to its audience. It not only has unnecessary design features, but also misrepresents the data. The bar chart shows a trend with some predictions of the future that could not necessarily be accurate information, and has incorrect scaling that makes the chart seem like email traffic has doubled when it only went by a small fraction in truth.',
];

let badIndex = 0;

document.querySelector('#bad-forward-1').onclick = function () {
  if (badIndex >= badFacts.length - 1) return;
  console.log('forward-1');
  badIndex++;

  let pTag = document.querySelector('#bad-1');
  pTag.innerHTML = badFacts[badIndex];
};

document.querySelector('#bad-backward-1').onclick = function () {
  if (badIndex <= 0) return;
  console.log('backward-1');
  badIndex--;

  let pTag = document.querySelector('#bad-1');
  pTag.innerHTML = badFacts[badIndex];
};
