'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "acf05a318ed28cb4e3cb760205c9c58e",
"assets/AssetManifest.json": "54610a371f34e29994c6653cd3107776",
"assets/assets/common_icons/ic_arrow_right.svg": "6f2c66fcf8fec29c42833f5670f0e807",
"assets/assets/common_icons/ic_bank_black.svg": "b2c28ba921c2d99f28f217873e9ba5fe",
"assets/assets/common_icons/ic_bank_white.svg": "1ad64cf74e045830ee4e1ccec212d873",
"assets/assets/common_icons/ic_bus.svg": "827730d44231ee452f56afba26807e32",
"assets/assets/common_icons/ic_car.svg": "f235ee1a760b887044bcd2b57e30f5e9",
"assets/assets/common_icons/ic_checkout.svg": "a8e9c667e930e775508175a18fa5679f",
"assets/assets/common_icons/ic_close.svg": "be31d8968b1db0ad66788366d9aac322",
"assets/assets/common_icons/ic_copy.svg": "1de1c1b80f002bc996994988e82822dc",
"assets/assets/common_icons/ic_copy_home.svg": "e8cf964be96e7dc8c21aee2741751e47",
"assets/assets/common_icons/ic_crypto_onramp.svg": "2af3c837defb4a4b063ea896f8e6c35a",
"assets/assets/common_icons/ic_fastag.svg": "1395020c8275850867bb2b7bae2690e6",
"assets/assets/common_icons/ic_flight.svg": "707402b328ae8a65cda7a2b4080eacc4",
"assets/assets/common_icons/ic_fraud.svg": "236c36706bd98f23a7c567ab8bac26cc",
"assets/assets/common_icons/ic_info.svg": "bbf811f9926466f1956069d47b1628ad",
"assets/assets/common_icons/ic_insurance.svg": "942228d0332cdfc28c58773ad5dd6552",
"assets/assets/common_icons/ic_invest.svg": "5dc748fb80e7dff231e829f1f7b14df7",
"assets/assets/common_icons/ic_invoice.svg": "6c2e63c800a78f0c60bd7be2dc2a8476",
"assets/assets/common_icons/ic_loans.svg": "1f2bbb3d4e27fcfd7657312486f1dd6d",
"assets/assets/common_icons/ic_money_tracker.svg": "aeea608e2d1749412b1700e4a829a1e8",
"assets/assets/common_icons/ic_movies.svg": "e3aca9e3ad8f11dbdf3d6dc53161c712",
"assets/assets/common_icons/ic_ninjatag_scanner.svg": "fe8817913bad5f2c467b17ed32208758",
"assets/assets/common_icons/ic_payment_button.svg": "b88d89b2eb1fa62019ef125bfedaaa9a",
"assets/assets/common_icons/ic_payment_link.svg": "81b62296e34741596ea68224397c589c",
"assets/assets/common_icons/ic_paywalls.svg": "b02e1baa5b1fd1465203ce57f16c2b4a",
"assets/assets/common_icons/ic_pos.svg": "571d863dea797f00824887fd313c25cb",
"assets/assets/common_icons/ic_qr_plugin.svg": "781d5a9663d84a436a91b94206d3cfdd",
"assets/assets/common_icons/ic_quick_voucher.svg": "64f6eed3d49f42dea556004f4d8726f2",
"assets/assets/common_icons/ic_reminder.svg": "d68f8c0b23f267ed081ca40852879382",
"assets/assets/common_icons/ic_scan_qr_code_black.svg": "9214d43ca9d8b6840f51ea7acdc462a5",
"assets/assets/common_icons/ic_scan_qr_code_white.svg": "1a61f5a4873087ab513a9f4fc8a3fb29",
"assets/assets/common_icons/ic_share.svg": "aa2f41e46947e0a915d26e1c146f172a",
"assets/assets/common_icons/ic_split.svg": "d063972afaa6fd7ebd0d49cae692aaf2",
"assets/assets/common_icons/ic_spotify.svg": "4a2a2efabc7a18361105f1a3f45f69b3",
"assets/assets/common_icons/ic_telegram.svg": "733d4da1417eb5139a5afc7be5e59369",
"assets/assets/common_icons/ic_trains.svg": "3772347fd9a7b3311a2753c1cce2dd39",
"assets/assets/common_icons/ic_whatsapp.svg": "168cff7166850569b650b226c62064b7",
"assets/assets/common_icons/khata.svg": "28f67b32a14f6ea00474358a64368d88",
"assets/assets/common_icons/more_vertical_menu_logo.svg": "bb477d5f77206f146ec40d36663c53d5",
"assets/assets/common_icons/my_business.svg": "779ce800857fb9ca1fb2a5d5badda991",
"assets/assets/images/btc_wall.png": "bf13510c66421dfeb3d8a419fcdca388",
"assets/assets/images/eye.svg": "a052642c8e681d1d13cd3c3161b70ef7",
"assets/assets/images/ic_full_graph.svg": "437dd9bb18a22031766d2ba92f2aeeba",
"assets/assets/images/lnbits.png": "d8f3dd15bcebbde38413ef9a941731b9",
"assets/assets/images/lnbits.svg": "f2ae00e100898a482ab332ef01d79e84",
"assets/assets/images/logo.png": "7850abdda86b188768ee6e2a245a8eab",
"assets/assets/images/logotext.svg": "a83aabd9aed1da8a4c66935c8a463ddd",
"assets/assets/images/logo_dark.svg": "2998c4f5c059c4bff2513aeefc439be2",
"assets/assets/images/logo_light.svg": "920d5053ba20c5a9e1a0497bc581c7f7",
"assets/assets/images/lwallet.png": "2261c6dfa529927f9482cfd5ac69ac31",
"assets/assets/images/pending.svg": "dc913dfae80abdae90333d0085f059c7",
"assets/assets/images/receive.svg": "839169117f5afbc5c2accb316265b337",
"assets/assets/images/send.svg": "e48589f1e225179a0b9dbedc77b15754",
"assets/assets/upi_icons/bhim_wallet_background.png": "f510fd7f847750ba4060707345e08ec3",
"assets/assets/upi_icons/clipboard.svg": "2dcfc5e23c62d8c859740ac1c4e65b8a",
"assets/assets/upi_icons/ic_bhim.png": "51ebb4d59ddf3737788ebd83956e862b",
"assets/assets/upi_icons/ic_checked.svg": "b7e9f97bf435e4425ab66da35497c482",
"assets/assets/upi_icons/ic_pay_mobile_black.svg": "6552b6312d00e8b7f12e291149d1be57",
"assets/assets/upi_icons/ic_pay_mobile_white.svg": "793be05762feb4f263d7f10892e34d14",
"assets/assets/upi_icons/ic_request_money_black.svg": "2dca4f7187d7e36723a973abc6242306",
"assets/assets/upi_icons/ic_request_money_white.svg": "6ef32710e0519b98fdd82c53b1ebee67",
"assets/assets/upi_icons/ic_smartphone.svg": "60f5ff9e64f8f1d7ec033bf7854eb5ec",
"assets/assets/upi_icons/ic_tv.svg": "6dcc8975a1a1e948801fffffadf03ba1",
"assets/assets/upi_icons/ic_uncheck.svg": "a8aab0145867365ebf77e26dccead280",
"assets/assets/upi_icons/ic_wifi.svg": "a38730bee7fada0a08abdd169985f661",
"assets/assets/upi_icons/ic_zap.svg": "1683d95afc6b43067c03c24eb48a709f",
"assets/assets/upi_icons/powered_by.svg": "1a6cc9fafe9fc21d918d2ec01eea6c2b",
"assets/FontManifest.json": "7359f04ca879b9e17466023ca6ca349f",
"assets/fonts/arial.ttf": "fe6b41f2c2d2c7655ec1e44520667a13",
"assets/fonts/BrushScriptStd.otf": "23b310a04ce09971a5dd194ffdaa54ef",
"assets/fonts/courier_new_bold.ttf": "3ac34121267d029b38fdd39cde3ba7d9",
"assets/fonts/digital_numbers_regular.ttf": "df8665d3e226b24d8a296cb34a3692fd",
"assets/fonts/garamond.ttf": "2bf40ab72ea4897a3fd9b6e48b233a19",
"assets/fonts/GeorgiaEstate.ttf": "3f5cfbeab2de650e9ca0fd0a3708651c",
"assets/fonts/Graphik-Light.ttf": "976b88a114b5677abbf4761fc6211d78",
"assets/fonts/Graphik-Medium.ttf": "988e0f8701a6a1a3f2a941d39c29e1d5",
"assets/fonts/Graphik-Regular.ttf": "257cdf7f5288951d172ebd0b8fe74c43",
"assets/fonts/graphik_semi_bold.ttf": "3dc608623223f33a37731d1f2ab4ac70",
"assets/fonts/MaterialIcons-Regular.otf": "4ef848ebcd0b64e2abc9a38165a82271",
"assets/fonts/montserrat-black.ttf": "cec22558884de7e330133a391f3796f9",
"assets/fonts/Montserrat-Bold.ttf": "88932dadc42e1bba93b21a76de60ef7a",
"assets/fonts/Montserrat-Medium.ttf": "a98626e1aef6ceba5dfc1ee7112e235a",
"assets/fonts/Montserrat-Regular.ttf": "9c46095118380d38f12e67c916b427f9",
"assets/fonts/Montserrat-SemiBold.ttf": "c88cecbffad6d8e731fd95de49561ebd",
"assets/fonts/MonumentExtended-Regular.otf": "73b9994bb505da43a387d107849baf95",
"assets/fonts/Spartan%2520SemiBold%2520600.ttf": "685afe2283f2d6006cfe243a161972d1",
"assets/fonts/tahoma.ttf": "f2e23885f804603feafbea12f793dee3",
"assets/fonts/times%2520new%2520roman.ttf": "e2f6bf4ef7c6443cbb0ae33f1c1a9ccc",
"assets/fonts/trebuchet.ttf": "54e1c73dfe6eedcd3ba28ea086cdaa53",
"assets/fonts/verdana.ttf": "7652f550f74d065c79f44da613344338",
"assets/images/account.svg": "7a818050216da3c4ad7c571d832736ad",
"assets/images/account_arrow_right.svg": "67ce1f0dbf22b643b618aa96be29142a",
"assets/images/add_attatchment.svg": "3a1f5bad44197740a7f5ed3ec6bd1dcf",
"assets/images/admin_logo.svg": "c032cd7e24a5eb513518a48e40afb9f8",
"assets/images/app_launcher.png": "7850abdda86b188768ee6e2a245a8eab",
"assets/images/app_logo.svg": "844ed3d8dd5a321aaa4230afed14d6e0",
"assets/images/arrow_down.svg": "b54e573f84da8ed35d094b82f3c2b341",
"assets/images/asset_btc.svg": "75804dcc0f4e5cbe6eaeff79ec407c53",
"assets/images/asset_eth.svg": "f2dd3c3e437a6a2bbbdb266fdde1d16a",
"assets/images/asset_litecoin.svg": "6e321c058d865fd3a235c341bd9c617d",
"assets/images/asset_polygon.svg": "2481c5aa0483db8cd352fdcab13f4d15",
"assets/images/back_chevron_logo.svg": "9a00bead5a5f9ffe34a7764df8274f44",
"assets/images/btc_convert_logo.svg": "b3496d35f453e04c1a30853a03838133",
"assets/images/btc_flag_icon.svg": "314acfeff689dfcb7d012b663f5a539a",
"assets/images/btc_network.svg": "6a3b4eb80af206b37307e5f3634d348b",
"assets/images/btc_transaction_logo.svg": "c78714d0dec676fa49bd5dfcb0a323be",
"assets/images/btc_wallet_background.png": "4e9fc1bc81ec8faf4604ed0aaef75135",
"assets/images/cards_tab_logo.svg": "94553c7b19c981997957b9fa0352cc23",
"assets/images/chat_send.svg": "dfdcf1ced66e98552af753d7ae6a3eb3",
"assets/images/digital_wallet.png": "8abef782f0d3a1d2fcb0b16bc6a97a84",
"assets/images/download_icon.svg": "f2ab55408bdf6816cbf5c7edbcd93390",
"assets/images/edit_amount.svg": "8537bf1c5c957d2b1fff3a23ea752e4e",
"assets/images/edit_confirmation_logo.svg": "c890e66f61118ad710c9fe3069fccfcf",
"assets/images/edit_profile_logo.svg": "fce82551baa58f0327e71740a6525e21",
"assets/images/enter_future.svg": "8dc1a30a6d396416c1c80f4c8127005c",
"assets/images/find_agent_bg_bottom.png": "2a36523346c2db3a75a04774eb7c9523",
"assets/images/find_agent_bg_top.png": "86a3197266520d1afe319288c118899c",
"assets/images/flat_money.png": "1c3748b67986bc62c2b2707f31aa905a",
"assets/images/fund_send.png": "3b923514f8700cf6cacf80ab3c4e8689",
"assets/images/future_app_icon.svg": "0db06bee7131b455d766731cfc9b5107",
"assets/images/google_login.svg": "c945710a37076530d79dd302a8454e92",
"assets/images/google_pay.svg": "c389e2e654c56fa98cf1432e422c1687",
"assets/images/home_selected.svg": "d7f2822b864584380cfac546ab23d724",
"assets/images/home_unselected.svg": "5bd31381d0c813905fc0b87472960b32",
"assets/images/ic_add.svg": "eccc21bf0b426e7d527cfb0fe61a7058",
"assets/images/ic_add_button.svg": "a92086a49483304627679d482bda9d65",
"assets/images/ic_add_circle.svg": "509b9c83097c50d730c25ee3a086c511",
"assets/images/ic_add_round.svg": "ceb5b3db683481bd4d299d16539dcb8d",
"assets/images/ic_advance_trade.svg": "3cbe9655a75b5eb17e0e4c7c39f28b93",
"assets/images/ic_ai_bot.png": "a93dc64d4d4eed96440306c711f5e41d",
"assets/images/ic_alert.svg": "8aa0da6a543dc1e6466a189f6ddd2aed",
"assets/images/ic_apple.svg": "11ff17239587dc8ba56ab845eeb75663",
"assets/images/ic_approve.svg": "5ef37363e75d085b9b2cb34d5162a96f",
"assets/images/ic_arrow_down.svg": "637870182c66c0f5c5d73919c2accc5b",
"assets/images/ic_arrow_down1.svg": "c99a3772d18a73f1dc990443d5569a77",
"assets/images/ic_arrow_down_fill.svg": "2910fc5490cc14be1006fdaac0a37916",
"assets/images/ic_arrow_drop_down.svg": "cfffc9a87e92e43cb538d54a336b5e5f",
"assets/images/ic_arrow_next.svg": "dc7fb6d631a40a753772d550801cfcbf",
"assets/images/ic_arrow_right.svg": "c1ac45b9e8c83c4c4f3802aff41cf040",
"assets/images/ic_arrow_right_fill.svg": "49d5f5f41def3dde4e9fe887c04558c6",
"assets/images/ic_attension.svg": "850772a778ebd8761729414942f3c708",
"assets/images/ic_auto_buy_sell.svg": "b732afc65305f26d545a1e6ec69a7f63",
"assets/images/ic_auto_gradient.png": "4c0834ad751178b6caf82cc09f659bde",
"assets/images/ic_bhim.png": "c8c267a71597922d83e73f1a910224e4",
"assets/images/ic_bhim_upi_large.png": "14fb11e0169c0c46bee2477200aaed28",
"assets/images/ic_btc_address_qr.svg": "e162abf687aa3b24462fe2de5274f833",
"assets/images/ic_btc_chain.svg": "cbf68ad380048a78a299b3c96165cd0c",
"assets/images/ic_btc_deposit.png": "2fac61d7eda44a7a9f718ad2b196dd81",
"assets/images/ic_btc_logo.png": "225726e8b4083faf073e6a721edfe80d",
"assets/images/ic_btc_network.svg": "838bd605c21060e01a6135d7c08c1b60",
"assets/images/ic_buy.svg": "8c521178d1baa3eacc7989ddf511cde3",
"assets/images/ic_calender.svg": "49a3a5f1261604796db27b5daa891e52",
"assets/images/ic_calender1.svg": "f32bd417be8f42df8b81d615a7139d15",
"assets/images/ic_call.svg": "6fd8a388183b5eefa25d652fa7e343cd",
"assets/images/ic_call1.svg": "6fd8a388183b5eefa25d652fa7e343cd",
"assets/images/ic_card.svg": "4f8051d4bbcbf5607a818d4257fede00",
"assets/images/ic_cash_bill.svg": "2431634c36b4170063f2cefc5db5c388",
"assets/images/ic_change_theme.svg": "9a0bdb524f9213bd1ce86557b93cc709",
"assets/images/ic_charge_expire.svg": "4e11f9448942f0bdb0124f6e2adf7326",
"assets/images/ic_charge_paid.svg": "aa8a28d57a3aafd6b960279436ca5846",
"assets/images/ic_chat.svg": "6f803e4c4db3b13ca102dce3bc51fa23",
"assets/images/ic_chats.svg": "75d849aa7840fc17861998f8476f8f94",
"assets/images/ic_check.svg": "57338b2ee1e6db1a0dd62dfc05b451fe",
"assets/images/ic_check_1.svg": "487554c01179a2a1d50169fb3586daa7",
"assets/images/ic_check_fill.svg": "900e721f76304eac85ed2bc8c5a9fd93",
"assets/images/ic_clipboard.svg": "4014642f0aaa082cd8b199aa0ea60831",
"assets/images/ic_close_fill.svg": "ee07ae937f08451a5935d700913e01d2",
"assets/images/ic_credit_card.svg": "8b8e5c25514ffb9f8c4c08638825eb1d",
"assets/images/ic_declined.svg": "d9f1f804fd54b6154a3f563565bdb48c",
"assets/images/ic_delete.svg": "d939bf1a47812f5adcdc3ec98f0cec32",
"assets/images/ic_deposit.svg": "ec25b57db197a3503ea305826819fb48",
"assets/images/ic_deposit_onchain.svg": "7e4997fd632f911013427dea0a39f082",
"assets/images/ic_drop_down.svg": "d333826adf2ac0a587d7fb804b3c5852",
"assets/images/ic_earn_corner.svg": "c8aee057b6f7693ba42226af4ef003b8",
"assets/images/ic_edit.svg": "42d951649bbbbc3fd8c5af57f812ae75",
"assets/images/ic_edit_fill.svg": "3eab0f7e230ce3d5461fe836bd9f0e6e",
"assets/images/ic_edit_pencil.svg": "dae7cba63d2a7ce567eeb708a2f4264b",
"assets/images/ic_edit_source.svg": "fdd0263121dbbef1f87c5ac283d0b340",
"assets/images/ic_email.svg": "2a6143dd36afb1749824bbebcdbe4a79",
"assets/images/ic_email_sign.svg": "617c013822822338dca47a7af54eac2c",
"assets/images/ic_fav.png": "0dd19d3cfd52801cb35a9ea5a2c71f70",
"assets/images/ic_flag_ind.svg": "0447f25e729b5021d542b6a4999e9946",
"assets/images/ic_flag_us.svg": "c4a62b6e1367e9373cafbf24e3b3aefe",
"assets/images/ic_flip.svg": "ffd34d2e54f75f1284974b61bc8f7604",
"assets/images/ic_future_tab.png": "aa142a18e363fd2714160758d1ce1a3f",
"assets/images/ic_future_tab.svg": "e36e06d85d8a217554b35fd37cebfe75",
"assets/images/ic_genrate_invoice.svg": "4606c9f3d2a41fbe3b8a41efcefee4c2",
"assets/images/ic_gift.svg": "44fd2d9e58481339263b131ba68df3ab",
"assets/images/ic_gmail_app.png": "a0c06f1f7207e14ea681f2cf1e3050d0",
"assets/images/ic_google.svg": "d17b48615b39efd2217dcb6edc7b9f21",
"assets/images/ic_graph.svg": "cf8126ef94135e878de041ce50cb1d4d",
"assets/images/ic_green_link.png": "bac3965d75a8be68cfa8da5ee2fc164a",
"assets/images/ic_help.svg": "a0eff12eec153471983077e73285711c",
"assets/images/ic_history_icon2.svg": "dfadc697bf2158ffd0543727fc3016d9",
"assets/images/ic_identity.svg": "208a72d13e143dfd3f989d3a0b7c82ae",
"assets/images/ic_info.svg": "bbf811f9926466f1956069d47b1628ad",
"assets/images/ic_info2.svg": "3f0adc0391c13849ffe60edcb273088e",
"assets/images/ic_lighting_wallet.svg": "2a5bbf926e297459c23c833fc3621f37",
"assets/images/ic_lightning_wallet.png": "17489fb538e5d5bc3e1219fc805b670c",
"assets/images/ic_link.svg": "13982f456ffa5159aaf69b551f60dab1",
"assets/images/ic_lnbits.png": "5f269d169652baaa945bfa7d2574c17f",
"assets/images/ic_lnd.png": "372b3f7541880e7b662290c44a846a0e",
"assets/images/ic_lnd_hub.png": "b2e91c708edb00b7241acc243f1830bb",
"assets/images/ic_lock.svg": "da4b36d576714aa618b1689ab8fc878a",
"assets/images/ic_mail.svg": "86abf47fdf6b9c802534ad2877df550e",
"assets/images/ic_mail_large.svg": "0cacd2f9e5b5b5c2e0e8defc352d9031",
"assets/images/ic_max.svg": "41e7d584dd29ccdf24ce6617b4a52a85",
"assets/images/ic_mic.svg": "6f9ec6fe97908891e05b72d8014478a8",
"assets/images/ic_minus.svg": "5eadca46e51b042db17b1954bd6fdf6a",
"assets/images/ic_minus_circle.svg": "de0e619b29baa099e673eb960ae09fc3",
"assets/images/ic_mobile.svg": "bf797cb1ddb42f83a3f18f9299d4e53e",
"assets/images/ic_mobile_banking.png": "c1a34a44e41395d78a25188d7d1599f9",
"assets/images/ic_next.svg": "dc7fb6d631a40a753772d550801cfcbf",
"assets/images/ic_ninjapay_circle.svg": "462f8f0aa6dedc49da9c4a55422c5603",
"assets/images/ic_ninja_pay.png": "5a9089fb3765248a1ceee970a6b7967e",
"assets/images/ic_notification.svg": "2da1585beacd31f0a28004ac5e261c7b",
"assets/images/ic_p2p_gateway.png": "87091de521871f3b4fc292cfee9c166e",
"assets/images/ic_paste_address.svg": "122b14ca3cd88b7e2eaa1b6f45b3ce88",
"assets/images/ic_percent.svg": "e9e09614c676652a1f183cf9922a6dee",
"assets/images/ic_phone.svg": "f435531bcaf728ec593b851a743b05a3",
"assets/images/ic_play.svg": "bb38835ed9c5e573d5abeae769c7770c",
"assets/images/ic_plus.svg": "670b6719f9c5c5208a0e17cd234b9706",
"assets/images/ic_radar.svg": "0941a079fc15e814d5748d1852e75ff8",
"assets/images/ic_receive.svg": "41efc438a510cfabf79c07897949b055",
"assets/images/ic_receive_money_black.svg": "1e93dc39503ce20e045ddb94f8030b10",
"assets/images/ic_receive_money_white.svg": "18efdf7142c159c1126f31d5b5845599",
"assets/images/ic_record.svg": "7405b07cad3772de65a9bf054ec4f5ac",
"assets/images/ic_refresh.svg": "df3a94c18be74a9d7aba436180a43a44",
"assets/images/ic_reminder.svg": "a40c1490f82b8366abe599fd1a1f046c",
"assets/images/ic_right_arrow.svg": "2182291811c5434a113e05163ed67583",
"assets/images/ic_rings.svg": "8484d83175ec6656bdfaedcd223a806b",
"assets/images/ic_scan_without_bg.svg": "e22da4273639723c89d379b1c1ae6e35",
"assets/images/ic_search.svg": "d14698c9a25a2702e155b15d570b0b8c",
"assets/images/ic_search1.svg": "d14698c9a25a2702e155b15d570b0b8c",
"assets/images/ic_selected_source.png": "c68810522fc283295fe24aa24119f747",
"assets/images/ic_sell.svg": "a0d8fe59653abc8b12915ba3e061c116",
"assets/images/ic_seller_agent.svg": "0e6762d1dad5b7b118607606b4a17b36",
"assets/images/ic_send.svg": "7c092cbac479514dcbccd1ecc70085ae",
"assets/images/ic_send_message.svg": "7f9f1071413b3bb4e0053d87893861ac",
"assets/images/ic_send_to_us.svg": "1928fbdc8762b48c2177f92aae92f522",
"assets/images/ic_send_to_us_black.svg": "c58f10b64cce1128c031903bf176158b",
"assets/images/ic_send_to_us_white.svg": "2cb1f5ad2b981daf890d75883dcc9ea7",
"assets/images/ic_setting.svg": "c8d4c9bad74af3c278792b1c032a6af8",
"assets/images/ic_share.svg": "f420a0fef976db9f2152c84fec7244b5",
"assets/images/ic_signal.svg": "decaa15f6feaba8bb5791c4be76c108c",
"assets/images/ic_strike.svg": "cd061e84abad466ca0419a78bc802e16",
"assets/images/ic_talegram_app.png": "965a0b2fc4d1959c9d822d04f22a218a",
"assets/images/ic_teather.png": "ae9f6b15ca809b5d92a8f305d954682b",
"assets/images/ic_tracking.svg": "9ca985adaf29052e8bdae91a82901b56",
"assets/images/ic_transfer.svg": "a700197af395557fba1fea723181192e",
"assets/images/ic_un_check.svg": "6dfa019b4f113ec38fa8bda1f77d952c",
"assets/images/ic_upi_agent.svg": "b8604a7383651f5124394eddd3b2cdbc",
"assets/images/ic_upi_check.svg": "fb62a54ec857061abca774ab6a7c566d",
"assets/images/ic_upi_with_bg.png": "1ae2071a10085df2d006b473e3688fa2",
"assets/images/ic_upload.svg": "3604818ac01356dc3d4d72e518830666",
"assets/images/ic_usdt_logo.png": "ab686f703c1f680e1ce94ad96827596c",
"assets/images/ic_usdt_wallet.svg": "ed4b38fb7118363a4967ce7d4f1d9cb5",
"assets/images/ic_user.svg": "961dcca4d6ef39680c676e1e2bd575b5",
"assets/images/ic_voucher.png": "4515e32c095a1e0d485dbb229cd105d0",
"assets/images/ic_voucher_green.svg": "8fa8f226d346fdca0e19cff2f7f12cde",
"assets/images/ic_warning.svg": "b57355af8bf53a175473375bc0e791ec",
"assets/images/ic_whatsapp.png": "343a12a283e5c65223dd96c253a9201d",
"assets/images/img_radar.png": "967e0d1f1e8b65304a18d620ae5add5d",
"assets/images/img_shield.svg": "4a15937e8e03caf3bcafa3ff623f0cd9",
"assets/images/img_verify_identity.png": "eef10dcac744df1b92242d5d3e81bfd5",
"assets/images/lightning_network.svg": "23aa9020e9cd3c460c189e61f9146b34",
"assets/images/lightning_network_grey.svg": "8729833ba32e79c7d46e2049336a2d52",
"assets/images/lightning_wallet_background.png": "ecaa50bda01fefc7e1f28db7a42b3302",
"assets/images/lightning_wallet_logo.png": "ba00a6b89cda145fe31c4da54bbf1ff5",
"assets/images/lightning_wallet_text.svg": "63c3aa6a996a96361ac74bd808a738c8",
"assets/images/lines_left.svg": "7454af37633cdbe393bc7fa1af9c5c7e",
"assets/images/lines_right.svg": "b8217f5a4d003bd18dfa32f98e6ed94c",
"assets/images/magic_link_logo.svg": "3f9ef8b0c211ea70a7a2332492fbc371",
"assets/images/more_vertical_menu_logo.svg": "bb477d5f77206f146ec40d36663c53d5",
"assets/images/ninjapay_home_text.svg": "3190ec24cd6927ba5665430736a59988",
"assets/images/ninjapay_icon.svg": "beb4880eff8e6896e9bd61fe0d6bb2f3",
"assets/images/no_user_emoji.svg": "651f82ac601d3c22b37b1be3fb104598",
"assets/images/on_chain_network.svg": "239608ca6b30cda37a97db2ba7becda0",
"assets/images/order_failed.svg": "328e4f70fd8574a2696613e29d725f30",
"assets/images/order_success.svg": "158d71226f36b623c45785fe39c3e813",
"assets/images/paytm.svg": "fadbb294a5935505039c597d8a81fb6c",
"assets/images/pay_selected.svg": "51b3847bfceef45af9844102d04d151c",
"assets/images/pay_unselected.svg": "d92c6e6af86a0be0ae47feae0bc31310",
"assets/images/phone_logo.svg": "5f0ffc9b4ef8dde349bff23d5ce98000",
"assets/images/phone_pay.svg": "c5403f9206129c8da9cb057b966a5206",
"assets/images/plus_home.svg": "561012b40736f6607e28749cdb89d241",
"assets/images/powered_by_logo.svg": "6c575d02bac84bccb341db6bec9ff7d6",
"assets/images/qr_logo.png": "ccf21f3793d9b8bb152d8075c5b512f4",
"assets/images/safety_money.png": "2c56deb87dbfdf3f4c0e4f21e5aae564",
"assets/images/scanner.svg": "10933e620b5f277a899a070c2914bac7",
"assets/images/scanner_mask.png": "5be66b1c838b8994386bf716da854a0f",
"assets/images/search_home.svg": "fe701944303ddd6b2850c5175e22653a",
"assets/images/spotify_logo_with_bg.png": "cd353467bb570122a1a22b8a46307a15",
"assets/images/star.svg": "24cc0ec80a427296fbbf0dc36a92b3aa",
"assets/images/star_fill.png": "bd176336082ccb40d91fb483e86aaa24",
"assets/images/star_filled.svg": "bb2275234968dd0248f8dac22ca278c3",
"assets/images/star_unfilled.svg": "3cb8c3a1555ad2909e8936c1c3393713",
"assets/images/success_json.json": "ba68698c78a464fe00ec1176a7ef4833",
"assets/images/success_line.svg": "608a991c42d74f2a7693f14f2e9620eb",
"assets/images/trade_selected.svg": "3ab636b588bbeac16c192e94431a3e95",
"assets/images/trade_unselected.svg": "895c1bbc7a955f1f81e9e064bbef3f8a",
"assets/images/trading_pair_drop_down.svg": "2910fc5490cc14be1006fdaac0a37916",
"assets/images/transaction_error.svg": "10915743ef44dad68ae42e1de594626a",
"assets/images/transaction_history.svg": "be43d18b95a8ea64fabe75d802e76c96",
"assets/images/transaction_incoming.svg": "2a0701e73f14eea0ac730ff7eb3614d0",
"assets/images/transaction_outgoing.svg": "5a3701ca852ae4d24e51d6fcc9b71496",
"assets/images/transaction_waiting.svg": "d60ae59a711a784917ea3e70642b5ee0",
"assets/images/upi_login.json": "b0726d85c6fb47390a498ead44c5faff",
"assets/images/upi_trade_selected.svg": "79d4c70c9e6112a0a294ab00b9b5fee6",
"assets/images/upi_trade_unselected.svg": "f812148ccdeb87d1a87b813f0bde6330",
"assets/images/upi_wallet_background.png": "84fcdc7d10099ef63e94cb6b5da7addb",
"assets/images/upi_wallet_logo.png": "44db5bfb817257daa9b91a0bbe7e9a5a",
"assets/images/upi_wallet_text.svg": "482f5b3af1f81d2637a5f1e7cdf67a7a",
"assets/images/usdt_flag_icon.svg": "9d7af8f9eb4888c087d5c056be1ace8d",
"assets/images/usdt_network.svg": "0181d2b5dfc6d48f1ba6f3d6c2f1f855",
"assets/images/usdt_wallet_background.png": "31a96e3fa084931c4e48a322c4ba435d",
"assets/images/usdt_wallet_background_right.png": "e4c4ea38175dfe45b2513f230a999bb4",
"assets/NOTICES": "da42a4d974dec9dd10b20f886fb4df10",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"firebase-messaging-sw.js": "4a1ce0347c620f0019f5ebb71a7e2b20",
"firebase_info.js": "49d04c930f70f4876e49b682be989aaf",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/apple-touch-icon.png": "04132d22b5f13bd5d76f54b5141741ab",
"icons/ic_launcher_bg_white.png": "1380d1ad78d2e2fd27a065e01427cb88",
"icons/ninjapay_live.svg": "19a9284811379101cba4fa339a11c15c",
"icons/ninjapay_live_link.png": "8f0dcf9e8ddf11e9f8a3ac0079317264",
"index.html": "cc52b58645a3ae06deb632c1bb7e9dbe",
"/": "cc52b58645a3ae06deb632c1bb7e9dbe",
"main.dart.js": "bfcac180f2ef73d105dfc8e84746254d",
"manifest.json": "cdc2090520354438b06bd8dc0855a998",
"ninjapay_live_link.png": "8f0dcf9e8ddf11e9f8a3ac0079317264",
"version.json": "d4960b3b46d103862db9726c4d637f4e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
