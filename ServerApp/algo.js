function redditScore(points, hours_elapsed, distance) {
	return (points - 1) / (Math.pow((hours_elapsed + 2), 1.8) + Math.pow(distance, 1.2));
}

function comparePosts(post1, post2) {
	var currHour = new Date().getHours(),
		score1 = redditScore(post1.upvotes - post1.downvotes, Math.abs(post1.postTime.getHours() - currHour), getDistance(post1.postLoc, userLoc));
		score2 = redditScore(post2.upvotes - post2.downvotes, Math.abs(post2.postTime.getHours() - currHour), getDistance(post2.postLoc, userLoc));
		return score1 - score2;
}

function getDistance(postLoc, userLoc) {
	return Math.abs(postLoc - userLoc);
}


var post = {
	link: '',
	upvotes: '',
	downvotes: '',
	postTime: '',
	postLoc: ''
}

posts = [post1, post2, post3]

posts.sort(comparePosts);

// function range(start, end) {
// 	var result = [];
// 	for(var i = start; i < end + 1; i++) {
// 		result.push(i);
// 	}
// 	return result;
// }

// var hours_elapsed = range(0, 24),
// 	distances = range(0, 100);

// hours_elapsed.forEach(function(hours) {
// 	distances.forEach(function(distance) {
// 		console.log(redditScore(30, hours, distance));
// 	});
// 	console.log('\n')
// })

// redditScore()

// console.log(redditScore(30, 1, 1.8));

