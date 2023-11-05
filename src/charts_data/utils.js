export const colors = {
    'red': 'rgb(255, 99, 132)',
    'orange': 'rgb(255, 159, 64)',
    'yellow': 'rgb(255, 205, 86)',
    'green': 'rgb(75, 192, 192)',
    'blue': 'rgb(54, 162, 235)',
    'purple': 'rgb(153, 102, 255)',
    'grey': 'rgb(201, 203, 207)'
}

export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'];

export const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];

export function transparentize(value, opacity) {
    var alpha = opacity === undefined ? 0.5 : 1 - opacity;
    // take rgb color string and convert it to rgba with given alpha value 
    var new_alpha = ', '+alpha+')';
    const new_color = colors[value].replace(')', new_alpha);
    return new_color;
}