// PROJECT OBJECTS ARRAY
var rawProject = [
  {
    id: 1,
    title: 'Busmall',
    image: 'busmall.png',
    gitRepo: 'https://github.com/muniri92/busmall',
    url: 'http://muniri92.github.io/busmall/',
    body: '<p>Your bones don\'t break, mine do. That\'s clear. Your cells react to bacteria and viruses differently than mine. You don\'t get sick, I do. That\'s also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We\'re on the same curve, just on opposite ends.</p>',
    startDate: '2016-01-12'
  },
  {
    id: 2,
    title: 'Equip',
    image: 'equip.png',
    gitRepo: 'https://github.com/muniri92/equip',
    url: 'http://heyduckd.github.io/equip/',
    body: '<p>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother\'s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.</p>',
    startDate: '2016-01-24'
  },
];

//////////////////////////////////////////////

// EDUCATION OBJECTS ARRAY
var rawEducation = [
  {
    id: 1,
    degree: 'BACHELOR OF ARTS IN MATHEMATICS<br>- APPLIED MATHEMATICS MINOR<br>- DIVERSITY MINOR',
    location: '<em>UNIVERSITY OF WASHINGTON - SEATTLE</em>',
    body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
    date: 'Sept 2010 - Dec 2015'
  },
  {
    id: 2,
    degree: 'Code 201: Foundations of Software Development',
    location: '<em>CODE FELLOWS</em>',
    body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
    date: 'Jan-Feb 2016'
  },
  {
    id: 3,
    degree: 'Code 301: Intermediate Software Development',
    location: '<em>CODE FELLOWS</em>',
    body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
    date: 'Feb-March 2016'
  },
];


$(window).ready(function() {
  console.log('ready');
  $('.main_nav').fadeIn(100);
});
