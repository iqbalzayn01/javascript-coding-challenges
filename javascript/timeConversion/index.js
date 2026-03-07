// function timeConversion(s) {
//   const period = s.slice(-2);
//   let [hour, minute, second] = s.slice(0, 8).split(':');
//   // let hour = parseInt(s.slice(0, 2), 10);
//   // let minute = s.slice(3, 5);
//   // let second = s.slice(6, 8);
//   // let period = s.slice(8);

//   if (period === 'AM') {
//     if (hour === '12') hour = '00';
//   } else {
//     if (hour !== '12') hour = String(Number(hour) + 12);
//   }

//   // if (period && period === 'AM' && hour === 12) {
//   //   hour = '00';
//   // }
//   // if (period && period === 'PM' && hour < 12) {
//   //   hour += 12;
//   // }

//   // hour = hour.padStart(2, '0');

//   return console.log(`${hour}`);
//   // return console.log(`${hour}:${minute}:${second}`);
// }

// timeConversion('06:40:03AM');

function timeConversion(s) {
  const periode = s.slice(-2);
  let [hour, minute, second] = s.slice(0, 8).split(':');

  if (periode === 'AM') {
    if (hour === '12') hour = '00';
  } else if (periode === 'PM') {
    if (hour !== '12') {
      hour = String(Number(hour) + 12);
    }
  }

  return console.log(`${hour}:${minute}:${second}`);
}

timeConversion('01:05:00PM');
