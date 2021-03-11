(this["webpackJsonptweet_lite-web"] =
	this["webpackJsonptweet_lite-web"] || []).push([
	[0],
	{
		12: function (e, t, c) {},
		13: function (e, t, c) {},
		15: function (e, t, c) {
			"use strict";
			c.r(t);
			var s = c(1),
				n = c.n(s),
				a = c(6),
				r = c.n(a),
				i = (c(12), c.p + "static/media/logo.6ce24c58.svg"),
				o = (c(13), c(7)),
				l = c(2);
			var j = c(0);
			function b(e) {
				var t = n.a.createRef(),
					c = Object(s.useState)([]),
					a = Object(l.a)(c, 2),
					r = a[0],
					i = a[1];
				return Object(j.jsxs)("div", {
					className: e.className,
					children: [
						Object(j.jsx)("div", {
							className: "col-12 mb-3",
							children: Object(j.jsxs)("form", {
								onSubmit: function (e) {
									e.preventDefault();
									var c = t.current.value;
									console.log(c);
									var s = Object(o.a)(r);
									s.unshift({ content: c, likes: 0, id: 123121 }),
										i(s),
										(t.current.value = "");
								},
								children: [
									Object(j.jsx)("textarea", {
										required: !0,
										ref: t,
										className: "form-control",
									}),
									Object(j.jsx)("button", {
										type: "submit",
										className: "btn-success my-3",
										children: "Tweet",
									}),
								],
							}),
						}),
						Object(j.jsx)(u, { newTweets: r }),
					],
				});
			}
			function u(e) {
				var t = Object(s.useState)([{ content: "default" }]),
					c = Object(l.a)(t, 2),
					n = c[0],
					a = c[1],
					r = Object(s.useState)([]),
					i = Object(l.a)(r, 2),
					b = i[0],
					u = i[1];
				return (
					Object(s.useEffect)(
						function () {
							var t = Object(o.a)(e.newTweets).concat(n);
							t.length !== b.length && u(t);
						},
						[e.newTweets, b, n]
					),
					Object(s.useEffect)(function () {
						!(function (e) {
							var t = new XMLHttpRequest();
							(t.responseType = "json"),
								t.open("GET", "http://127.0.0.1:8000/api/tweets"),
								(t.onload = function () {
									e(t.response, t.status);
								}),
								(t.onerror = function (t) {
									console.log(t),
										e({ msessage: "The request was an error" }, 400);
								}),
								t.send();
						})(function (e, t) {
							200 === t ? a(e) : alert("There was an error");
						});
					}, []),
					b.map(function (e, t) {
						return Object(j.jsx)(
							d,
							{ tweet: e, className: "my-5 py-5 border bg-white text-dark" },
							"".concat(t, "-{item.id}")
						);
					})
				);
			}
			function d(e) {
				var t = e.tweet,
					c = e.className ? e.className : "col-10 mx-auto col-md-6";
				return Object(j.jsxs)("div", {
					className: c,
					children: [
						Object(j.jsxs)("p", { children: [t.id, " - ", t.content] }),
						Object(j.jsxs)("div", {
							className: "btn btn-group",
							children: [
								Object(j.jsx)(p, {
									tweet: t,
									action: { type: "like", display: "Like" },
								}),
								Object(j.jsx)(p, {
									tweet: t,
									action: { type: "unlike", display: "Unlike" },
								}),
								Object(j.jsx)(p, {
									tweet: t,
									action: { type: "retweet", display: "Retweet" },
								}),
							],
						}),
					],
				});
			}
			function p(e) {
				var t = e.tweet,
					c = e.action,
					n = Object(s.useState)(t.likes ? t.likes : 0),
					a = Object(l.a)(n, 2),
					r = a[0],
					i = a[1],
					o = Object(s.useState)(!0 === t.userLike),
					b = Object(l.a)(o, 2),
					u = b[0],
					d = b[1],
					p = e.className ? e.className : "btn btn-success btn-sm",
					m = c.display ? c.display : "Action",
					O = "like" === c.type ? "".concat(r, " ").concat(m) : m;
				return Object(j.jsx)("button", {
					className: p,
					onClick: function (e) {
						e.preventDefault(),
							"like" === c.type &&
								(!0 === u ? (d(!1), i(r - 1)) : (d(!0), i(r + 1)));
					},
					children: O,
				});
			}
			var m = function () {
				return Object(j.jsx)("div", {
					className: "App",
					children: Object(j.jsxs)("header", {
						className: "App-header",
						children: [
							Object(j.jsx)("img", {
								src: i,
								className: "App-logo",
								alt: "logo",
							}),
							Object(j.jsxs)("p", {
								children: [
									"Edit ",
									Object(j.jsx)("code", { children: "src/App.js" }),
									" and save to reload.",
								],
							}),
							Object(j.jsx)("div", { children: Object(j.jsx)(b, {}) }),
							Object(j.jsx)("a", {
								className: "App-link",
								href: "https://reactjs.org",
								target: "_blank",
								rel: "noopener noreferrer",
								children: "Learn React",
							}),
						],
					}),
				});
			};
			document.getElementById("root") &&
				r.a.render(
					Object(j.jsx)(n.a.StrictMode, { children: Object(j.jsx)(m, {}) }),
					document.getElementById("root")
				),
				document.getElementById("tweet-lite") &&
					r.a.render(
						Object(j.jsx)(n.a.StrictMode, { children: Object(j.jsx)(b, {}) }),
						document.getElementById("tweet-lite")
					);
		},
	},
	[[15, 1, 2]],
]);
//# sourceMappingURL=main.0ffbd2a6.chunk.js.map
