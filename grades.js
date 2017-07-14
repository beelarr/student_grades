/**
 * Created by beelarr on 7/14/17.
 */
let scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
let low = Math.min.apply(null, scores);
console.log(`The low score is ${low}`);

let high = Math.max.apply(null, scores);
console.log(`The high score is ${high}`);

let A = 'A', B = 'B', C = 'C', D = 'D', F = 'F';

function gradeCheck(low, high, letter) {

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= low && scores[i] <= high) {
            var num_scores = [i];


        }

    }
    console.log(`There are ${num_scores} ${letter}s`)
}



gradeCheck(91, 100, A);
gradeCheck(81, 90, B);
gradeCheck(71, 80, C);
gradeCheck(61, 70, D);
gradeCheck(50, 60, F);

