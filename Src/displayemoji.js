let emoji = (obj) => {
	const emotion = obj.tone_name;
	if (obj.score === 0) {
		return "🚑🚑🚑🚑";
	}
	switch (emotion) {
		case "Anger":
			return "🤯🤬🤯🤬";
		case "Disgust":
			return "🤢🤮🤢🤮";
		case "Fear":
			return "👻👽👿👾";
		case "Joy":
			return "🤗🤗🤗🤗";
		case "Sadness":
			return "🥺😢😩😭";
	}
};

module.exports = { emoji };
