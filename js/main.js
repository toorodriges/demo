
$(document).ready(function () {
	console.log('---', );



	let text = {
		"landings": {
			"fortune-wheel": {
				"congrats-you-win-congrats": "Поздравляем!",
				"congrats-you-win-you-win": "Вы выиграли!",
				"copyright-all-rights-reserved": "Все права защищены и охраняются законом",
				"currency-EUR": "Евро",
				"currency-RUB": "Рубль",
				"currency-UAH": "Гривна",
				"currency-USD": "Доллар",
				"go-to-site-btn-heading": "Уже есть аккаунт?",
				"go-to-site-btn-login": "Войти",
				"go-to-site-btn-subheading": "Перейти на сайт",
				"input-error-email": "E-mail введен некорректно",
				"input-error-password": "Пароль должен содержать от 6 до 18 символов",
				"input-error-password-mismatch": "Пароли не совпадают",
				"input-error-phone": "Телефон введен некорректно",
				"input-error-social-not-specified": "Социальная сеть не выбрана",
				"lang-en": "Английский",
				"lang-ru": "Русский",
				"page-title": "1win",
				"placeholder-password": "Пароль",
				"placeholder-password-repeat": "Повторите пароль",
				"placeholder-tel": "Номер телефона",
				"reg-agreement-link": "Условиями Соглашения об использовании сайта 1Win",
				"reg-agreement-text": "Я подтверждаю, что я ознакомлен и полностью согласен с",
				"reg-btn": "Зарегистрироваться",
				"reg-continue": "Продолжить",
				"reg-select-email": "Быстрая",
				"reg-select-oneclick": "1 Клик",
				"reg-select-phone": "Телефон",
				"reg-select-social": "Соц. сети",
				"roulette-spin-amount-0": "Попыток",
				"roulette-spin-amount-1": "Попытка",
				"roulette-spin-amount-2": "Попытки",
				"roulette-spin-btn": "Крутить",
				"win-bonus-amount-1": "5000₽",
				"win-bonus-amount-2": "300$",
				"win-bonus-bonus": "Бонус",
				"win-bonus-or": "или",
				"win-free-spins-amount-1": "250",
				"win-free-spins-amount-2": "50",
				"win-free-spins-free": "БЕСПЛАТНЫХ",
				"win-free-spins-spins": "СПИНОВ",
				"win-no-win-no": "без",
				"win-no-win-win": "выигрыша",
				"win-try-again-again": "еще",
				"win-try-again-try": "попробуй"
			}
		},
		"common": {
			"currency": {
				"bonus": "Бонусный счет",
				"EUR": "Евро",
				"full": {
					"AED": "Дирхам ОАЭ",
					"AMD": "Армянский драм",
					"ARS": "Аргентинское песо",
					"AUD": "Австралийский доллар",
					"AZN": "Азербайджанский манат",
					"BDT": "Бангладешская така",
					"bonus": "Бонусный счет",
					"BRL": "Бразильский реал",
					"BYN": "Белорусский рубль",
					"CAD": "Канадский доллар",
					"CFA": "Африканский франк",
					"CHF": "Швейцарский франк",
					"CLP": "Чилийское песо",
					"COP": "Колумбийский песо",
					"CRC": "Коста-риканский колон",
					"EUR": "Евро",
					"GBP": "Фунт стерлингов",
					"GHS": "Ганский седи",
					"HKD": "Гонконкский доллар",
					"IDR": "Индонезийская рупия",
					"INR": "Индийская рупия",
					"IQD": "Иракский динар",
					"IRR": "Иранский реал",
					"JOD": "Иорданский динар",
					"KES": "Кенийский шиллинг",
					"KGS": "Киргизский сом",
					"KRW": "Южнокорейская вона",
					"KWD": "Кувейтский динар",
					"KZT": "Казахстанский тенге",
					"LKR": "Шри-ланкийская рупия",
					"MXN": "Мексиканское песо",
					"MYR": "Малазийский ринггит",
					"NOK": "Норвежская крона",
					"NZD": "Новозеландский доллар",
					"OMR": "Оманский реал",
					"PAB": "Панамский бальбоа",
					"PEN": "Перуанский новый соль",
					"PHP": "Филиппинское песо",
					"PKR": "Пакистанская рупия",
					"PLN": "Польский злотый",
					"QAR": "Катарский реал",
					"RUB": "Российский рубль",
					"RWF": "Руандийский франк",
					"SGD": "Сингапурский доллар",
					"THB": "Тайский бат",
					"TJS": "Таджикский сомони",
					"TRY": "Турецкая лира",
					"TZS": "Танзанийский шиллинг",
					"UAH": "Украинская гривна",
					"UGX": "Угандийский шиллинг",
					"USD": "Доллар США",
					"UZS": "Узбекский сум",
					"VND": "Вьетнамский донг",
					"XAF": "Франк КФА BEAC",
					"XOF": "Западноафриканский франк",
					"ZMW": "Замбийская квача"
				},
				"KZT": "Тенге",
				"plural": {
					"EUR": "Евро",
					"KZT": "Тенге",
					"RUB": "Рубли",
					"UAH": "Гривны",
					"USD": "Доллары"
				},
				"RUB": "Рубль",
				"UAH": "Гривна",
				"USD": "Доллар"
			}
		}
	};
	Te = function(e, t) {
		e.setAttribute("data-lang-key", t),
			e.innerHTML = [t]
	}, Pe = function() {
		document.querySelectorAll("[data-lang-key]").forEach((function(e) {
				return Te(e, e.attributes.getNamedItem("data-lang-key").value)
			}
		))
	}
	document.getElementById("run-circle").addEventListener("click", (function() {

		return e = document.querySelector(".circle"),
			t = document.querySelector(".counter-lottery .number"),
			n = document.querySelector(".counter-lottery .try"),
			e.classList.contains("stage-1") && e.classList.contains("stage-1-complete") ? (t.innerText = +t.innerText - 1,
				Te(n, "landings.fortune-wheel.roulette-spin-amount-0"),
				e.classList.add("spin-to-stage-three"),
				e.classList.remove("stage-1"),
				void setTimeout((function() {
						setTimeout((function() {
								return document.querySelector("[toggle-modal-btn]").click()
							}
						), 1e3),
							e.classList.remove("spin-to-stage-three"),
							e.classList.add("stage-2"),
							document.querySelector(".main__bonus__right").classList.remove("hide"),
							document.querySelector(".main__bonus__right").classList.add("appearing-anim"),
							localStorage.setItem("win", !0)
					}
				), 3600)) : e.classList.contains("stage-1") ? (e.classList.add("spin-to-stage-two"),
				e.classList.remove("stage-1"),
				console.log('--n-', n),
				console.log('-this--', this),
			Te(n, "landings.fortune-wheel.roulette-spin-amount-1"),
				t.innerText = +t.innerText - 1,
				void setTimeout((function() {
						e.classList.remove("spin-to-stage-two"),
							e.classList.add("stage-1"),
							e.classList.add("stage-1-complete"),
							document.querySelector(".main__bonus__left").classList.remove("hide"),
							document.querySelector(".main__bonus__left").classList.add("appearing-anim")
					}
				), 3600)) : void 0;
		var e, t, n
	}
	));
/*	it = function(e) {
		var t = $(".notifications-container")
			, n = $('<div class="notification-item"></div>');
		n.text(e),
			t.append(n),
			setTimeout((function() {
					n.remove()
				}
			), 4e3)
	}, ot = n(8), at = n(18);
	function st(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(e);
			t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}
			))),
				n.push.apply(n, r)
		}
		return n
	}
	function ut(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = null != arguments[t] ? arguments[t] : {};
			t % 2 ? st(Object(n), !0).forEach((function(t) {
					l()(e, t, n[t])
				}
			)) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : st(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}
			))
		}
		return e
	}
	function ct(e) {
		var t = be.getPartner();
		if (!t)
			return e;
		var n = e.partner_key && e.partner_key.length ? ut(ut({}, t), e) : ut(ut({}, e), t);
		return JSON.parse(JSON.stringify(n))
	}
	function lt(e) {
		return ht.apply(this, arguments)
	}
	function ht() {
		return (ht = u()(f.a.mark((function e(t) {
				var n, r, i, o, a;
				return f.a.wrap((function(e) {
						for (; ; )
							switch (e.prev = e.next) {
								case 0:
									n = t.socialObject,
										r = t.state,
										i = JSON.stringify(r),
										o = encodeURIComponent(i),
										e.t0 = n.authorizationProtocol,
										e.next = e.t0 === Qe ? 6 : e.t0 === et ? 7 : 11;
									break;
								case 6:
									localStorage.setItem(Ze, i);
								case 7:
									return e.next = 9,
										He({
											type: "AUTH:link-".concat(n.code),
											data: {
												redirectUrl: rt[n.code].redirectUrl.replace(nt, o)
											}
										});
								case 9:
									return a = e.sent.data.url,
										e.abrupt("break", 12);
								case 11:
									a = rt[n.code].url.replace(nt, o);
								case 12:
									return e.abrupt("return", a);
								case 13:
								case "end":
									return e.stop()
							}
					}
				), e)
			}
		)))).apply(this, arguments)
	}
	function ft() {
		return (ft = u()(f.a.mark((function e() {
				var t, n, r, i, o, s;
				return f.a.wrap((function(e) {
						for (; ; )
							switch (e.prev = e.next) {
								case 0:
									return e.next = 2,
										He({
											type: "USER:profile-countryInfo"
										});
								case 2:
									t = e.sent,
										n = t.data,
										r = n.currency,
										i = n.country,
										o = a()($('[data-form-field="currency"]')),
										s = a()($('[data-form-field="country"]')),
										o.forEach((function(e) {
												e.querySelector('[data-value="'.concat(r.toLowerCase(), '"]')).click()
											}
										)),
										s.forEach((function(e) {
												e.querySelector('[data-value="'.concat(i.toLowerCase(), '"]')).click()
											}
										));
								case 10:
								case "end":
									return e.stop()
							}
					}
				), e)
			}
		)))).apply(this, arguments)
	}
	(document.querySelectorAll(".go-to-site-btn").forEach((function(e) {
			return e.setAttribute("href", "".concat($e, "/casino"))
		}
	)),
		document.querySelectorAll(".go-to-login-btn").forEach((function(e) {
				return e.setAttribute("href", "".concat($e, '?modal=%7B"name"%3A"login"%7D'))
			}
		)),
		document.querySelectorAll(".go-to-rules-btn").forEach((function(e) {
				return e.setAttribute("href", "".concat($e, "/rules/4"))
			}
		)),
		new Promise((function(e, t) {
				var n = localStorage.getItem("pf_lang") ? JSON.parse(localStorage.getItem("pf_lang")) : "ru";
				(Ve = _e()("".concat(ke.socketHost, "/"), {
					origins: "*",
					path: "/",
					"force new connection": !0,
					reconnection: !0,
					transports: ["websocket"],
					query: {
						Language: n
					}
				})).on("connect", (function() {
						console.log("conected"),
							e()
					}
				)),
					Ve.on("connect_error", (function(e) {
							console.log("connect_error", e),
								t(e)
						}
					)),
					Ve.on("disconnect", (function(e) {
							return console.log("disconnect", e)
						}
					)),
					Ve.on("a", (function(e) {
							if ("domain_meta" === e.type)
								if (e.data.registration_type_config)
									try {
										je(JSON.parse(e.data.registration_type_config))
									} catch (e) {
										Ue(),
											console.error(e)
									}
								else
									Ue();
							var t = qe[e.msgid];
							if (t) {
								var n = JSON.parse(e.data);
								console.log("<<< msg", n),
									t.resolve(n)
							}
						}
					))
			}
		))).then((function() {
			!function() {
				ft.apply(this, arguments)
			}()
		}
	)),
		ze(),
		We = Object.values(rt),
		Xe = $('*[data-form-field="social"]'),
		We.forEach((function(e) {
				var t = $("<div></div>");
				t.addClass("soc-wrapper"),
					t.addClass(e.code),
					t.attr("data-value", e.code),
					t.html(e.icon),
					Xe.append(t)
			}
		));
	var pt = !1;
	function dt(e, t, n, r) {
		return mt.apply(this, arguments)
	}
	function mt() {
		return mt = u()(f.a.mark((function e(t, n, r, i) {
				var o, a, s, c, l, h, d, m, g, v, y, k, x, b, w, _, A, C, E;
				return f.a.wrap((function(e) {
						for (; ; )
							switch (e.prev = e.next) {
								case 0:
									if (o = r.country,
										a = void 0 === o ? "ru" : o,
										s = r.currency,
										c = r.password,
										l = r.social,
										!pt) {
										e.next = 3;
										break
									}
									return e.abrupt("return");
								case 3:
									return pt = !0,
										h = {
											isShort: n,
											country: a,
											partner_key: "",
											currency: s.toUpperCase(),
											timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
										},
										d = be.getPartner() || {},
										Object.assign(h, d, i),
										m = Ge("isPwaIgnored"),
										g = m.paramsIsNotEmpty,
										v = m.queryString,
										y = {
											mobile: function() {
												var e = u()(f.a.mark((function e() {
														var t, n;
														return f.a.wrap((function(e) {
																for (; ; )
																	switch (e.prev = e.next) {
																		case 0:
																			return e.next = 2,
																				He({
																					type: "USER:auth-register",
																					data: h
																				});
																		case 2:
																			return t = e.sent,
																				n = t.data,
																				e.abrupt("return", n);
																		case 5:
																		case "end":
																			return e.stop()
																	}
															}
														), e)
													}
												)));
												return function() {
													return e.apply(this, arguments)
												}
											}(),
											"1click": function() {
												var e = u()(f.a.mark((function e() {
														var t, n;
														return f.a.wrap((function(e) {
																for (; ; )
																	switch (e.prev = e.next) {
																		case 0:
																			return e.next = 2,
																				He({
																					type: "USER:auth-register",
																					data: h
																				});
																		case 2:
																			return t = e.sent,
																				n = t.data,
																				e.abrupt("return", n);
																		case 5:
																		case "end":
																			return e.stop()
																	}
															}
														), e)
													}
												)));
												return function() {
													return e.apply(this, arguments)
												}
											}(),
											full: function() {
												var e = u()(f.a.mark((function e() {
														var t, n, r;
														return f.a.wrap((function(e) {
																for (; ; )
																	switch (e.prev = e.next) {
																		case 0:
																			return e.next = 2,
																				He({
																					type: "USER:auth-register",
																					data: ct(h)
																				});
																		case 2:
																			return t = e.sent,
																				n = t.data,
																				r = void 0 === n ? {} : n,
																				e.abrupt("return", r);
																		case 6:
																		case "end":
																			return e.stop()
																	}
															}
														), e)
													}
												)));
												return function() {
													return e.apply(this, arguments)
												}
											}(),
											social: function() {
												var e = u()(f.a.mark((function e() {
														var t, r;
														return f.a.wrap((function(e) {
																for (; ; )
																	switch (e.prev = e.next) {
																		case 0:
																			return e.next = 2,
																				He({
																					type: "AUTH:profile-new",
																					data: ut(ut({
																						isShort: n,
																						currency: s,
																						domain: window.location.host,
																						password: c
																					}, Object.assign(d, i)), {}, {
																						partner_key: ct(h).partner_key
																					})
																				});
																		case 2:
																			return t = e.sent,
																				r = {
																					state: t.data.state
																				},
																			ke.oauth.oauthDomain !== window.location.origin && (r.domainInitiatorRedirect = "".concat(window.location.origin, "/oauth/").concat(l)),
																				e.next = 7,
																				lt({
																					socialObject: rt[l],
																					state: r
																				});
																		case 7:
																			window.location = e.sent;
																		case 8:
																		case "end":
																			return e.stop()
																	}
															}
														), e)
													}
												)));
												return function() {
													return e.apply(this, arguments)
												}
											}()
										}[t],
										e.next = 11,
										y();
								case 11:
									if (!(k = e.sent)) {
										e.next = 19;
										break
									}
									if (x = k.status,
										b = void 0 === x ? 200 : x,
										!(w = k.token)) {
										e.next = 18;
										break
									}
									return e.next = 17,
										p(w);
								case 17:
									localStorage.setItem("1w_token", JSON.stringify(w));
								case 18:
									b >= 200 && b < 300 ? ("full" === t && (window.location = "".concat($e, "?auth-token=").concat(w).concat(g ? "&".concat(v) : "")),
									"1click" !== t && "mobile" !== t || (_ = k.email,
										A = k.password,
										C = k.name,
										E = JSON.stringify({
											name: "success-registration",
											props: {
												modalSettings: {
													email: _,
													password: A,
													name: C
												}
											}
										}),
										window.location = "".concat($e, "?auth-token=").concat(w, "&modal=").concat(E).concat(g ? "&".concat(v) : ""))) : k.message && (it(k.message),
										pt = !1);
								case 19:
								case "end":
									return e.stop()
							}
					}
				), e)
			}
		))),
			mt.apply(this, arguments)
	}
	var gt = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
	function vt(e, t, n) {
		return {
			country: function() {
				return null
			},
			currency: function() {
				return null
			},
			email: function(e) {
				return gt.test(e) ? null : Be("landings.fortune-wheel.input-error-email")
			},
			phone: function(e) {
				var t = n.find(".input-wrapper_phone .select-wrapper").data("value")
					, r = at.countries.find((function(e) {
						return e.code === t
					}
				))
					, i = "".concat(r.prefix).concat(r.example).replace(/[^\d+]/g, "").length;
				return !e || e.length < i ? Be("landings.fortune-wheel.input-error-phone") : null
			},
			password: function(e) {
				return !e || e.length < 6 || e.length > 18 ? Be("landings.fortune-wheel.input-error-password") : null
			},
			social: function(e) {
				return e ? null : Be("landings.fortune-wheel.input-error-social-not-specified")
			}
		}[e](t)
	}
	function yt(e) {
		var t = a()($("[data-form=".concat(e, "] [data-form-field]")));
		return Object.fromEntries(t.map((function(e) {
				var t;
				return t = "INPUT" === e.tagName ? e.value : e.attributes.getNamedItem("data-value").value,
				"phone" === e.dataset.formField && (t = t.replace(/[^\d+]/g, "")),
					[e.attributes.getNamedItem("data-form-field").value, t]
			}
		)))
	}
	function kt(e, t, n) {
		$("[data-form=".concat(e, "] [data-form-field=").concat(t, "]")).closest("[data-form-field-wrapper]").attr("data-form-field-error", n)
	}
	function xt(e, t) {
		var n = $("[data-form=".concat(e, "]"))
			, r = Object.entries(t).map((function(e) {
				var t = i()(e, 2)
					, r = t[0];
				return [r, vt(r, t[1], n)]
			}
		));
		return Object.keys(t).forEach((function(t) {
				return !function(e, t) {
					var n = $("[data-form=".concat(e, "] [data-form-field=").concat(t, "]"))
						, r = "" === n.attr("data-form-field-visited");
					return r || n.attr("data-form-field-visited", ""),
						r
				}(e, t) && function(e, t) {
					$("[data-form=".concat(e, "] [data-form-field=").concat(t, "]")).on("keyup paste", (function(n) {
							var r = $("[data-form=".concat(e, "]"));
							kt(e, t, vt(t, n.target.value, r))
						}
					))
				}(e, t)
			}
		)),
			r.forEach((function(t) {
					var n = i()(t, 2)
						, r = n[0]
						, o = n[1];
					return kt(e, r, o)
				}
			)),
			r.some((function(e) {
					return null !== i()(e, 2)[1]
				}
			))
	}
	function bt() {
		return (bt = u()(f.a.mark((function e(t) {
				var n, r;
				return f.a.wrap((function(e) {
						for (; ; )
							switch (e.prev = e.next) {
								case 0:
									if (n = yt(t),
										r = xt(t, n),
										console.group("called registration with ".concat(t.toUpperCase())),
										console.log("fields:", n),
										console.log("fields validation:", r),
										console.groupEnd(),
										!r) {
										e.next = 9;
										break
									}
									return "social" === t && ($(".social-select-error").text(Be("landings.fortune-wheel.input-error-social-not-specified")),
										$(".social-select-error").show()),
										e.abrupt("return");
								case 9:
									if (document.querySelectorAll(".reg-btn").forEach((function(e) {
											return e.classList.add("disabled")
										}
									)),
										e.prev = 10,
									"1click" !== t) {
										e.next = 14;
										break
									}
									return e.next = 14,
										dt(t, !0, n);
								case 14:
									if ("mobile" !== t) {
										e.next = 17;
										break
									}
									return e.next = 17,
										dt(t, !0, n, {
											phone: "".concat(n.phone)
										});
								case 17:
									if ("social" !== t) {
										e.next = 20;
										break
									}
									return e.next = 20,
										dt(t, !1, n);
								case 20:
									if ("full" !== t) {
										e.next = 23;
										break
									}
									return e.next = 23,
										dt(t, !1, n, {
											name: "1win",
											birthday: new Date - 5692032e5,
											phone: n.phone,
											email: n.email,
											password: n.password,
											repeat_password: n.password
										});
								case 23:
									e.next = 28;
									break;
								case 25:
									e.prev = 25,
										e.t0 = e.catch(10),
										console.error("register: ", e.t0.message);
								case 28:
									pt || document.querySelectorAll(".reg-btn").forEach((function(e) {
											return e.classList.remove("disabled")
										}
									));
								case 29:
								case "end":
									return e.stop()
							}
					}
				), e, null, [[10, 25]])
			}
		)))).apply(this, arguments)
	}
	a()($("[data-form-field-wrapper-phone]")).forEach((function(e) {
			var t = $(e)
				, n = t.find("input")[0]
				, r = t.find('[data-form-field="country"]')[0]
				, i = r.dataset.value
				, o = function(e) {
				var t = at.countries.find((function(t) {
						return t.code === e
					}
				));
				return "".concat(t.prefix.replace(/0/g, "\\0"), " ").concat(t.example.replace(/\d/g, "#"))
			}
				, a = V(n, {
				mask: o(i),
				lazy: !1,
				definitions: {
					"#": /\d/
				}
			});
			r.addEventListener("change", (function(e) {
					var t = e.detail.value;
					a.updateOptions({
						mask: o(t)
					})
				}
			))
		}
	)),
		window.onClickRegister = function(e) {
			return bt.apply(this, arguments)
		}
	;
	var wt, _t = {};
	function At(e) {
		return Ct.apply(this, arguments)
	}
	function Ct() {
		return Ct = u()(f.a.mark((function e(t) {
				var n, r = arguments;
				return f.a.wrap((function(e) {
						for (; ; )
							switch (e.prev = e.next) {
								case 0:
									return n = r.length > 1 && void 0 !== r[1] ? r[1] : ot.LANG_TAG,
									_t[t] || (_t[t] = fetch("".concat("", "/lang-server/v2?keys=landings.fortune-wheel&keys=common.currency&langs=").concat(t).concat(n ? "&tag=".concat(n) : "")).then((function(e) {
											return e.json()
										}
									)).then((function(e) {
											return Je(e[t])
										}
									))),
										e.abrupt("return", _t[t]);
								case 3:
								case "end":
									return e.stop()
							}
					}
				), e)
			}
		))),
			Ct.apply(this, arguments)
	}
	function Et(e, t) {
		var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
		if (!n) {
			if (Array.isArray(e) || (n = function(e, t) {
				if (!e)
					return;
				if ("string" == typeof e)
					return St(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				"Object" === n && e.constructor && (n = e.constructor.name);
				if ("Map" === n || "Set" === n)
					return Array.from(e);
				if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
					return St(e, t)
			}(e)) || t && e && "number" == typeof e.length) {
				n && (e = n);
				var r = 0
					, i = function() {};
				return {
					s: i,
					n: function() {
						return r >= e.length ? {
							done: !0
						} : {
							done: !1,
							value: e[r++]
						}
					},
					e: function(e) {
						throw e
					},
					f: i
				}
			}
			throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}
		var o, a = !0, s = !1;
		return {
			s: function() {
				n = n.call(e)
			},
			n: function() {
				var e = n.next();
				return a = e.done,
					e
			},
			e: function(e) {
				s = !0,
					o = e
			},
			f: function() {
				try {
					a || null == n.return || n.return()
				} finally {
					if (s)
						throw o
				}
			}
		}
	}
	function St(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var n = 0, r = new Array(t); n < t; n++)
			r[n] = e[n];
		return r
	}
	window.useLang = function(e) {
		localStorage.setItem("pf_lang", JSON.stringify(e));
		var t = [At("en")];
		"en" !== e && t.push(At(e)),
			Promise.all(t).then((function(e) {
					var t;
					t = e.reduce((function(e, t) {
							return ut(ut({}, e), t)
						}
					)),
						Ae = t,
						Pe()
				}
			)),
			function(e) {
				if (Ve && Ve.connected)
					Ve.emit("set-language", {
						language: e
					})
			}(e)
	}
	;
	new Date;
	var Bt = 0
		, Tt = []
		, Pt = ($("MP.active").length,
		112);
	function Ft(e) {
		e.hasClass("active") ? Ot(e) : Dt(e)
	}
	function Dt(e) {
		$(".M_youWin").addClass("cursor-default"),
			$("footer").addClass("fixed"),
			$(".col_user-upper-panel .message-friend-btn_edit").removeClass("active"),
			Tt.push(e),
			Bt++,
			e.css("z-index", Pt),
			Pt++,
			e.addClass("active"),
		Bt > 0 && document.querySelector("body").classList.add("body-overflow-hidden"),
			e.attr("active", ""),
			e.find("[modal-wrapper]").attr("active", "")
	}
	function Ot(e) {
		if (e.is(".M_youWin"))
			return 0;
		var t = window.getSelection();
		if (String(t).length > 0)
			return 0;
		Bt--,
			Pt--,
			Tt.pop(),
			e.removeClass("active"),
		0 === Bt && document.querySelector("body").classList.remove("body-overflow-hidden"),
			e.attr("active", null),
			e.find("[modal-wrapper]").attr("active", null)
	}
	function Mt(e) {
		void 0 === e.attr("active") || 0 == ~~e.attr("active") ? function(e) {
			$(".dialog-menu-wrapper").attr("active", ""),
				$(".dialog-menu-wrapper").removeClass("show"),
				$(window).innerWidth() < 1101 ? (e.offset().left < 0 && (e.addClass("right-side"),
					e.removeClass("left-side")),
				e.offset().left + $(e).innerWidth() > $(window).innerWidth() && (e.addClass("left-side"),
					e.removeClass("right-side"))) : e.offset().left < 0 && e.addClass("right-side", "");
			e.attr("active", "1"),
				e.addClass("show")
		}(e) : function(e) {
			e.attr("active", ""),
			e.attr("active") || (e.removeClass("show"),
				e.attr("active", ""))
		}(e)
	}
	function Rt(e) {
		e.attr("clickActive") ? It(e) : function(e) {
			$(".dialog-menu-wrapper").attr("clickActive", null),
				e.attr("clickActive", "1"),
				e.closest(".dialog-show-btn").attr("active", "")
		}(e)
	}
	function It(e) {
		e.attr("clickActive", null),
			e.closest(".dialog-show-btn").attr("active", null)
	}
	$("html").on("click", "[toggle-modal-btn]", (function(e) {
			var t = $(".present-wrapper__show-in-profile");
			if (t.is(e.target) || t.has(e.target).length > 0)
				return 0;
			var n = $(this).attr("switching-modal");
			void 0 !== $(this).attr("type-block") && (attachedType = $(this).attr("type-block"));
			var r = "." + n
				, i = $(this).attr("HM_index");
			+i && $(r + " .horizontal-menu__li[index = " + i + "]").click(),
				n ? Ft($(r)) : $(this).hasClass("modal-window") || $(this).hasClass("MW") || $(this).hasClass("M") ? e.target.className == $(this).attr("class") && Ft($(this)) : Ft($(this).closest(".modal-window, .MW, .M"))
		}
	)),
		$(document).bind("keyup", (function(e) {
				"Escape" === e.key && (Tt.length && Ot(Tt[Tt.length - 1]));
				"Enter" === e.key && (Tt.length && Tt[Tt.length - 1].find(".button-success, [enter-clickable]").click())
			}
		)),
		$("html").on("mouseenter", ".dialog-show-btn", (function() {
				if ($(this).find(".dialog-menu-wrapper").attr("show") || $(this).hasClass("dialog-show-btn_onclick"))
					return 0;
				$(window).innerWidth() > 1100 && Mt($(this).find(".dialog-menu-wrapper"))
			}
		)),
		$("html").on("mouseleave", ".dialog-show-btn", (function() {
				$(window).innerWidth() > 1100 && !$(this).hasClass("dialog-show-btn_onclick") && Mt($(this).find(".dialog-menu-wrapper"))
			}
		)),
		$(document).click((function(e) {
				var t = $('.dialog-menu-wrapper[clickActive="1"]');
				!t.is(e.target) && 0 === t.has(e.target).length && t.length > 0 && It(t)
			}
		)),
		$("html").on("click", ".dialog-show-btn", (function(e) {
				if ($(this).hasClass("dialog-show-btn_onclick")) {
					if ($('.dialog-show-btn input[type="radio"]').is(e.target) || $(".dialog-show-btn label").is(e.target))
						return It($(this).find(".dialog-menu-wrapper")),
							0;
					Rt($(this).find(".dialog-menu-wrapper"))
				} else
					$(window).innerWidth() < 1101 && Rt($(this).find(".dialog-menu-wrapper"));
				e.stopPropagation()
			}
		));
	function Lt(e) {
		var t, n = ot.supportedLangs.find((function(t) {
				return i()(t, 1)[0] === e
			}
		));
		$(".lang-picker > svg > use").attr("href", (t = "flags.svg#".concat(e),
			"".concat("/img/").concat(t))),
			$(".lang-picker > span").html(n[1])
	}
	document.getElementById("run-circle").addEventListener("click", (function() {
			return e = document.querySelector(".circle"),
				t = document.querySelector(".counter-lottery .number"),
				n = document.querySelector(".counter-lottery .try"),
				e.classList.contains("stage-1") && e.classList.contains("stage-1-complete") ? (t.innerText = +t.innerText - 1,
					Te(n, "landings.fortune-wheel.roulette-spin-amount-0"),
					e.classList.add("spin-to-stage-three"),
					e.classList.remove("stage-1"),
					void setTimeout((function() {
							setTimeout((function() {
									return document.querySelector("[toggle-modal-btn]").click()
								}
							), 1e3),
								e.classList.remove("spin-to-stage-three"),
								e.classList.add("stage-2"),
								document.querySelector(".main__bonus__right").classList.remove("hide"),
								document.querySelector(".main__bonus__right").classList.add("appearing-anim"),
								localStorage.setItem("win", !0)
						}
					), 3600)) : e.classList.contains("stage-1") ? (e.classList.add("spin-to-stage-two"),
					e.classList.remove("stage-1"),
					Te(n, "landings.fortune-wheel.roulette-spin-amount-1"),
					t.innerText = +t.innerText - 1,
					void setTimeout((function() {
							e.classList.remove("spin-to-stage-two"),
								e.classList.add("stage-1"),
								e.classList.add("stage-1-complete"),
								document.querySelector(".main__bonus__left").classList.remove("hide"),
								document.querySelector(".main__bonus__left").classList.add("appearing-anim")
						}
					), 3600)) : void 0;
			var e, t, n
		}
	)),
		$("html").on("click", ".M_youWin .horizontal-menu__li", (function() {
				$(".container_toggle").attr("active", null),
					$('.container_toggle[data-form="' + $(this).attr("data-reg-type-id") + '"]').attr("active", "")
			}
		)),
		$("html").on("click", ".horizontal-menu__li", (function() {
				var e = $(this);
				$(this).closest(".horizontal-menu").find(".horizontal-menu__li").attr("active", null),
					$(this).attr("active", ""),
					function(e, t) {
						var n = e.closest(".horizontal-menu");
						if (n.attr("curEl", function(e, t) {
							var n = $(e).attr("class")
								, r = t.attr("index")
								, i = "." + n + "__li[index = " + r + "]";
							return e.find("option[index = " + r + "]").prop("selected", !0),
								i
						}(n, e)),
						void 0 !== n.attr("HM")) {
							var r = n.attr("HM")
								, i = $('[HM-wrapper="' + r + '"]')
								, o = e.attr("index");
							i.find("[HM__toggle-container]").attr("active", null),
								i.find("[HM__toggle-container=" + o + "]").is("[HM__active]") ? i.find("[HM__toggle-container=" + o + "][HM__active=active]").attr("active", "") : i.find("[HM__toggle-container=" + o + "]").attr("active", ""),
								"main-info" === r && 1 === parseInt(o) ? i.find("[HM__toggle-container=2]").find(".subcont[showed]").attr("showed", null) : "main-info" === r && 2 === parseInt(o) && setTimeout((function() {
										0 === i.find("[HM__toggle-container=2]").find(".subcont[shownexttime]").length ? i.find("[HM__toggle-container=2]").find(".subcont.firstShow").attr("showed", "") : i.find("[HM__toggle-container=2]").find(".subcont[shownexttime]").attr("showed", "")
									}
								), 10)
						}
					}(e)
			}
		)),
		$("html").on("click", ".dialog-menu-wrapper .option", (function(e) {
				var t = $(this).closest(".dialog-show-btn")
					, n = t.closest("[data-form-field]")
					, r = $(this).attr("data-value");
				"svg-sprite" === n.attr("data-form-field-avatar-type") ? t.find("svg.change-img use").attr("href", $(this).find("use").attr("href")) : t.find(".change-img").attr("src", $(this).find("img").attr("src"));
				var i = $(this).find("p");
				t.find(".change-sub-text").text($(this).find(".change-sub-text-option").text()),
					t.find(".change-text").html(i.html()),
					t.attr("data-value", r),
					n[0].dispatchEvent(new CustomEvent("change",{
						detail: {
							value: r
						}
					})),
					It($(this).closest(".dialog-menu-wrapper")),
					e.stopPropagation()
			}
		)),
		$("html").on("click", ".container_toggle[index=2] button.stage-1", (function() {
				var e = button.closest(".container_toggle");
				e.find(".incontainer-toggle").attr("active", null),
					e.find(".stage-1").attr("active", null),
					e.find(".stage-2").attr("active", "")
			}
		)),
		$("html").on("click", "[data-stepper-toggle]", (function() {
				var e = $(this).closest("[data-stepper]")
					, t = e.find("[data-stepper-page]")
					, n = e.find("[data-stepper-toggle]")
					, r = e.find("[data-stepper-belong]")
					, i = $(this).attr("data-stepper-toggle");
				t.attr("active", null),
					n.attr("active", null),
					r.attr("data-stepper-hidden", ""),
					e.find("[data-stepper-page=".concat(i, "]")).attr("active", ""),
					e.find("[data-stepper-toggle=".concat(i, "]")).attr("active", ""),
					e.find("[data-stepper-belong=".concat(i, "]")).attr("data-stepper-hidden", null)
			}
		)),
		$("html").on("click", ".soc-wrapper", (function() {
				var e = document.querySelector("[data-form-field=social]");
				a()(document.querySelectorAll(".soc-wrapper")).forEach((function(e) {
						return e.classList.remove("active")
					}
				)),
					this.classList.add("active"),
					e.setAttribute("data-value", this.attributes.getNamedItem("data-value").value),
					$(".social-select-error ").hide()
			}
		)),
		$("html").on("click", (function(e) {
				$(this);
				a()(document.querySelectorAll("[data-remove-active-on-outside-click]")).filter((function(t) {
						return 0 === $(e.target).closest(t).length
					}
				)).forEach((function(e) {
						e.removeAttribute("active"),
							e.removeAttribute("clickactive")
					}
				))
			}
		)),
		$("html").on("click", ".lang-picker", (function(e) {
				void 0 !== $(this).attr("active") ? $(this).attr("active", null) : $(this).attr("active", "")
			}
		)),
		$("html").on("click", ".lang-picker-select-option", (function() {
				$(this);
				var e = $(this).attr("data-value");
				window.useLang(e),
					Lt(e)
			}
		)),
	localStorage.getItem("win") && (Dt($(".M_youWin")),
		document.querySelector(".counter-lottery .number").innerHTML = "0");
	var Nt = localStorage.getItem("pf_lang") ? JSON.parse(localStorage.getItem("pf_lang")) : null
		, jt = null !== (wt = null != Nt ? Nt : function() {
		var e, t, n = (null !== (e = navigator.languages) && void 0 !== e ? e : []).concat(navigator.language).filter(Boolean), r = new Set(ot.supportedLangs.map((function(e) {
				return i()(e, 1)[0]
			}
		))), o = Et(n);
		try {
			for (o.s(); !(t = o.n()).done; ) {
				var a = t.value.split("-")[0];
				if (r.has(a))
					return a
			}
		} catch (e) {
			o.e(e)
		} finally {
			o.f()
		}
		return null
	}()) && void 0 !== wt ? wt : "ru";
	window.useLang(jt),
		Lt(jt)
}
], [[71, 1]]]);*/

})