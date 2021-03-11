import React from "react";
import { loadTweets, createTweet } from "../lookup";
import { useEffect, useState } from "react";

export function TweetsComponent(props) {
	const textAreaRef = React.createRef();
	const [newTweets, setNewTweets] = useState([]);

	const handleBackendUpdate = (response, status) => {
		// backend api response handler
		let tempNewTweets = [...newTweets];
		if (status === 201) {
			tempNewTweets.unshift(response);
			setNewTweets(tempNewTweets);
		} else {
			alert("An error occured, please try again.");
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newVal = textAreaRef.current.value;
		// backend api request
		createTweet(newVal, handleBackendUpdate);
		textAreaRef.current.value = "";
	};

	return (
		<div className={props.className}>
			<div className="col-12 mb-3">
				<form onSubmit={handleSubmit}>
					<textarea
						required={true}
						ref={textAreaRef}
						className="form-control"
					></textarea>
					<button type="submit" className="btn-success my-3">
						Tweet
					</button>
				</form>
			</div>
			<TweetsList newTweets={newTweets} />
		</div>
	);
}

export function TweetsList(props) {
	const [tweetsInit, setTweetsInit] = useState([{ content: "default" }]);
	const [tweets, setTweets] = useState([]);
	const [tweetsDidSet, setTweetsDidSet] = useState(false);
	useEffect(() => {
		const final = [...props.newTweets].concat(tweetsInit);
		if (final.length !== tweets.length) {
			setTweets(final);
		}
	}, [props.newTweets, tweets, tweetsInit]);

	useEffect(() => {
		if (tweetsDidSet === false) {
			const myCallback = (response, status) => {
				if (status === 200) {
					setTweetsInit(response);
					setTweetsDidSet(true);
				} else {
					alert("There was an error");
				}
			};
			loadTweets(myCallback);
		}
	}, [tweetsInit, tweetsDidSet, setTweetsDidSet]);

	return tweets.map((item, index) => {
		return (
			<Tweet
				tweet={item}
				className="my-5 py-5 border bg-white text-dark"
				key={`${index}-{item.id}`}
			/>
		);
	});
}

function handleTweetActionBtn() {}

export function Tweet(props) {
	const { tweet } = props;
	const className = props.className
		? props.className
		: "col-10 mx-auto col-md-6";
	return (
		<div className={className}>
			<p>
				{tweet.id} - {tweet.content}
			</p>
			<div className="btn btn-group">
				<ActionBtn tweet={tweet} action={{ type: "like", display: "Like" }} />
				<ActionBtn
					tweet={tweet}
					action={{ type: "unlike", display: "Unlike" }}
				/>
				<ActionBtn
					tweet={tweet}
					action={{ type: "retweet", display: "Retweet" }}
				/>
			</div>
		</div>
	);
}

export function ActionBtn(props) {
	const { tweet, action } = props;
	const [likes, setLikes] = useState(tweet.likes ? tweet.likes : 0);
	const [userLike, setuserLike] = useState(
		tweet.userLike === true ? true : false
	);
	const className = props.className
		? props.className
		: "btn btn-success btn-sm";
	const actionDisplay = action.display ? action.display : "Action";
	const display =
		action.type === "like" ? `${likes} ${actionDisplay}` : actionDisplay;

	const handleClick = (event) => {
		event.preventDefault();
		if (action.type === "like") {
			if (userLike === true) {
				// perhapse I unlike it
				setuserLike(false);
				setLikes(likes - 1);
			} else {
				setuserLike(true);
				setLikes(likes + 1);
			}
		}
	};

	return (
		<button className={className} onClick={handleClick}>
			{display}
		</button>
	);
}
