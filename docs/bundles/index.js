/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _charsAdapter = __webpack_require__(1);
	
	var _charsAdapter2 = _interopRequireDefault(_charsAdapter);
	
	var _macbook = __webpack_require__(2);
	
	var _macbook2 = _interopRequireDefault(_macbook);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	data = [];
	
	data.push(_macbook2.default);
	
	alert("hey " + _charsAdapter2.default + "!");

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
		"OS": "",
		"CPU": "",
		"competitions_groups": {
			"resampling": {
				"title": "Convolution resampling"
			}
		},
		"competitions": [
			{
				"name": "resampling-4k-rgb",
				"group": "resampling",
				"title": "2560×1600 RGB image",
				"source": {
					"size": [
						2560,
						1600
					]
				},
				"columns": [
					{
						"name": "resolution",
						"title": "Destination resolution"
					},
					{
						"name": "filter",
						"title": "Convolution filter",
						"map": {
							"bil": "Bilinear",
							"bic": "Bicubic",
							"lzs": "Lanczos"
						}
					},
					{
						"name": "result",
						"units": "s"
					}
				],
				"competitors_groups": {
					"imagemagick": {
						"title": "ImageMagick"
					},
					"pillow": {
						"title": "Pillow"
					},
					"pillow-simd": {
						"title": "Pillow SIMD"
					},
					"skia": {
						"title": "Skia"
					}
				},
				"competitors": [
					{
						"name": "imagemagick-6.8.9",
						"group": "imagemagick",
						"title": "ImageMagick 6.8.9-9",
						"results": [
							[
								"16x16",
								"bil",
								0.099
							],
							[
								"16x16",
								"bic",
								0.199
							],
							[
								"16x16",
								"lzs",
								0.289
							],
							[
								"320x180",
								"bil",
								0.139
							],
							[
								"320x180",
								"bic",
								0.26
							],
							[
								"320x180",
								"lzs",
								0.379
							],
							[
								"1920x1200",
								"bil",
								0.23
							],
							[
								"1920x1200",
								"bic",
								0.41
							],
							[
								"1920x1200",
								"lzs",
								0.589
							],
							[
								"7712x4352",
								"bil",
								1.609
							],
							[
								"7712x4352",
								"bic",
								2.55
							],
							[
								"7712x4352",
								"lzs",
								3.75
							]
						]
					},
					{
						"name": "pillow-2.6.0",
						"group": "pillow",
						"title": "PIL & Pillow up to 2.7.0",
						"results": [
							[
								"16x16",
								"bil",
								0.08145
							],
							[
								"16x16",
								"bic",
								0.15914
							],
							[
								"16x16",
								"lzs",
								0.22069
							],
							[
								"320x180",
								"bil",
								0.12032
							],
							[
								"320x180",
								"bic",
								0.23536
							],
							[
								"320x180",
								"lzs",
								0.35478
							],
							[
								"1920x1200",
								"bil",
								0.37874
							],
							[
								"1920x1200",
								"bic",
								0.49536
							],
							[
								"1920x1200",
								"lzs",
								0.63811
							],
							[
								"7712x4352",
								"bil",
								2.23075
							],
							[
								"7712x4352",
								"bic",
								2.33359
							],
							[
								"7712x4352",
								"lzs",
								2.17505
							]
						]
					},
					{
						"name": "pillow-2.7.0",
						"group": "pillow",
						"title": "Pillow 2.7.0",
						"results": [
							[
								"16x16",
								"bil",
								0.02031
							],
							[
								"16x16",
								"bic",
								0.03882
							],
							[
								"16x16",
								"lzs",
								0.05547
							],
							[
								"320x180",
								"bil",
								0.03052
							],
							[
								"320x180",
								"bic",
								0.05457
							],
							[
								"320x180",
								"lzs",
								0.07996
							],
							[
								"1920x1200",
								"bil",
								0.11725
							],
							[
								"1920x1200",
								"bic",
								0.14903
							],
							[
								"1920x1200",
								"lzs",
								0.17944
							],
							[
								"7712x4352",
								"bil",
								0.91945
							],
							[
								"7712x4352",
								"bic",
								1.12454
							],
							[
								"7712x4352",
								"lzs",
								1.33199
							]
						]
					},
					{
						"name": "pillow-3.3.0",
						"group": "pillow",
						"title": "Pillow 3.3.0",
						"results": [
							[
								"16x16",
								"bil",
								0.01215
							],
							[
								"16x16",
								"bic",
								0.02205
							],
							[
								"16x16",
								"lzs",
								0.03616
							],
							[
								"320x180",
								"bil",
								0.01959
							],
							[
								"320x180",
								"bic",
								0.03292
							],
							[
								"320x180",
								"lzs",
								0.0498
							],
							[
								"1920x1200",
								"bil",
								0.07332
							],
							[
								"1920x1200",
								"bic",
								0.09387
							],
							[
								"1920x1200",
								"lzs",
								0.11868
							],
							[
								"7712x4352",
								"bil",
								0.61001
							],
							[
								"7712x4352",
								"bic",
								0.74344
							],
							[
								"7712x4352",
								"lzs",
								0.88627
							]
						]
					},
					{
						"name": "pillow-3.4.0",
						"group": "pillow",
						"title": "Pillow 3.4.0",
						"results": [
							[
								"16x16",
								"bil",
								0.01196
							],
							[
								"16x16",
								"bic",
								0.02276
							],
							[
								"16x16",
								"lzs",
								0.03324
							],
							[
								"320x180",
								"bil",
								0.01909
							],
							[
								"320x180",
								"bic",
								0.03161
							],
							[
								"320x180",
								"lzs",
								0.04811
							],
							[
								"1920x1200",
								"bil",
								0.0561
							],
							[
								"1920x1200",
								"bic",
								0.07734
							],
							[
								"1920x1200",
								"lzs",
								0.10153
							],
							[
								"7712x4352",
								"bil",
								0.46097
							],
							[
								"7712x4352",
								"bic",
								0.5897
							],
							[
								"7712x4352",
								"lzs",
								0.74292
							]
						]
					},
					{
						"name": "pillow-simd-3.2.0-sse4",
						"group": "pillow-simd",
						"title": "Pillow SIMD 3.2.0 SSE4",
						"results": [
							[
								"16x16",
								"bil",
								0.0096
							],
							[
								"16x16",
								"bic",
								0.01844
							],
							[
								"16x16",
								"lzs",
								0.02802
							],
							[
								"320x180",
								"bil",
								0.01378
							],
							[
								"320x180",
								"bic",
								0.02464
							],
							[
								"320x180",
								"lzs",
								0.03809
							],
							[
								"1920x1200",
								"bil",
								0.0388
							],
							[
								"1920x1200",
								"bic",
								0.05805
							],
							[
								"1920x1200",
								"lzs",
								0.07547
							],
							[
								"7712x4352",
								"bil",
								0.3164
							],
							[
								"7712x4352",
								"bic",
								0.43977
							],
							[
								"7712x4352",
								"lzs",
								0.57375
							]
						]
					},
					{
						"name": "pillow-simd-3.2.0-avx2",
						"group": "pillow-simd",
						"title": "Pillow SIMD 3.2.0 AVX2",
						"results": [
							[
								"16x16",
								"bil",
								0.00846
							],
							[
								"16x16",
								"bic",
								0.01475
							],
							[
								"16x16",
								"lzs",
								0.02314
							],
							[
								"320x180",
								"bil",
								0.01296
							],
							[
								"320x180",
								"bic",
								0.0221
							],
							[
								"320x180",
								"lzs",
								0.03311
							],
							[
								"1920x1200",
								"bil",
								0.03823
							],
							[
								"1920x1200",
								"bic",
								0.05332
							],
							[
								"1920x1200",
								"lzs",
								0.06656
							],
							[
								"7712x4352",
								"bil",
								0.30947
							],
							[
								"7712x4352",
								"bic",
								0.43915
							],
							[
								"7712x4352",
								"lzs",
								0.52902
							]
						]
					},
					{
						"name": "pillow-simd-3.3.0-sse4",
						"group": "pillow-simd",
						"title": "Pillow SIMD 3.3.0 SSE4",
						"results": [
							[
								"16x16",
								"bil",
								0.00716
							],
							[
								"16x16",
								"bic",
								0.0134
							],
							[
								"16x16",
								"lzs",
								0.02165
							],
							[
								"320x180",
								"bil",
								0.01118
							],
							[
								"320x180",
								"bic",
								0.01821
							],
							[
								"320x180",
								"lzs",
								0.02675
							],
							[
								"1920x1200",
								"bil",
								0.0312
							],
							[
								"1920x1200",
								"bic",
								0.04541
							],
							[
								"1920x1200",
								"lzs",
								0.05646
							],
							[
								"7712x4352",
								"bil",
								0.25503
							],
							[
								"7712x4352",
								"bic",
								0.32377
							],
							[
								"7712x4352",
								"lzs",
								0.41647
							]
						]
					},
					{
						"name": "pillow-simd-3.3.0-avx2",
						"group": "pillow-simd",
						"title": "Pillow SIMD 3.3.0 AVX2",
						"results": [
							[
								"16x16",
								"bil",
								0.00453
							],
							[
								"16x16",
								"bic",
								0.00741
							],
							[
								"16x16",
								"lzs",
								0.01153
							],
							[
								"320x180",
								"bil",
								0.00733
							],
							[
								"320x180",
								"bic",
								0.01159
							],
							[
								"320x180",
								"lzs",
								0.01677
							],
							[
								"1920x1200",
								"bil",
								0.02693
							],
							[
								"1920x1200",
								"bic",
								0.03646
							],
							[
								"1920x1200",
								"lzs",
								0.03971
							],
							[
								"7712x4352",
								"bil",
								0.20146
							],
							[
								"7712x4352",
								"bic",
								0.24879
							],
							[
								"7712x4352",
								"lzs",
								0.30612
							]
						]
					},
					{
						"name": "pillow-simd-3.4.0-sse4",
						"group": "pillow-simd",
						"title": "Pillow SIMD 3.4.0 SSE4",
						"results": [
							[
								"16x16",
								"bil",
								0.00319
							],
							[
								"16x16",
								"bic",
								0.00575
							],
							[
								"16x16",
								"lzs",
								0.00934
							],
							[
								"320x180",
								"bil",
								0.00474
							],
							[
								"320x180",
								"bic",
								0.00813
							],
							[
								"320x180",
								"lzs",
								0.01313
							],
							[
								"1920x1200",
								"bil",
								0.01904
							],
							[
								"1920x1200",
								"bic",
								0.02404
							],
							[
								"1920x1200",
								"lzs",
								0.03151
							],
							[
								"7712x4352",
								"bil",
								0.17956
							],
							[
								"7712x4352",
								"bic",
								0.22463
							],
							[
								"7712x4352",
								"lzs",
								0.27496
							]
						]
					},
					{
						"name": "pillow-simd-3.4.0-avx2",
						"group": "pillow-simd",
						"title": "Pillow SIMD 3.4.0 AVX2",
						"results": [
							[
								"16x16",
								"bil",
								0.00256
							],
							[
								"16x16",
								"bic",
								0.00455
							],
							[
								"16x16",
								"lzs",
								0.00752
							],
							[
								"320x180",
								"bil",
								0.00387
							],
							[
								"320x180",
								"bic",
								0.00811
							],
							[
								"320x180",
								"lzs",
								0.01064
							],
							[
								"1920x1200",
								"bil",
								0.01527
							],
							[
								"1920x1200",
								"bic",
								0.01945
							],
							[
								"1920x1200",
								"lzs",
								0.0252
							],
							[
								"7712x4352",
								"bil",
								0.14041
							],
							[
								"7712x4352",
								"bic",
								0.17111
							],
							[
								"7712x4352",
								"lzs",
								0.20077
							]
						]
					},
					{
						"name": "skia-53",
						"group": "skia",
						"title": "Skia 53",
						"results": [
							[
								"16x16",
								"bil",
								0.00506
							],
							[
								"16x16",
								"bic",
								0.00904
							],
							[
								"16x16",
								"lzs",
								0.014
							],
							[
								"320x180",
								"bil",
								0.00691
							],
							[
								"320x180",
								"bic",
								0.0125
							],
							[
								"320x180",
								"lzs",
								0.0208
							],
							[
								"1920x1200",
								"bil",
								0.0213
							],
							[
								"1920x1200",
								"bic",
								0.0363
							],
							[
								"1920x1200",
								"lzs",
								0.0391
							],
							[
								"7712x4352",
								"bil",
								0.199
							],
							[
								"7712x4352",
								"bic",
								0.248
							],
							[
								"7712x4352",
								"lzs",
								0.34
							]
						]
					}
				]
			},
			{
				"name": "blur-4k-rgb",
				"group": "blur",
				"title": "2560×1600 RGB image",
				"source": {
					"size": [
						2560,
						1600
					]
				},
				"columns": [
					{
						"name": "radius",
						"title": "Blur radius"
					},
					{
						"name": "result",
						"units": "s"
					}
				],
				"competitors_groups": {
					"imagemagick": {
						"title": "ImageMagick"
					},
					"pillow": {
						"title": "Pillow"
					},
					"pillow-simd": {
						"title": "Pillow SIMD"
					}
				},
				"competitors": [
					{
						"name": "imagemagick-6.8.9",
						"group": "imagemagick",
						"title": "ImageMagick 6.8.9-9",
						"results": [
							[
								"1px",
								0.62
							],
							[
								"10px",
								1.79
							],
							[
								"100px",
								12.009
							]
						]
					},
					{
						"name": "pillow-2.7.0",
						"group": "pillow",
						"title": "Pillow 2.7.0",
						"results": [
							[
								"1px",
								0.24177
							],
							[
								"10px",
								0.24173
							],
							[
								"100px",
								0.24188
							]
						]
					},
					{
						"name": "pillow-simd-3.2.0-sse4",
						"group": "pillow-simd",
						"title": "Pillow SIMD 3.2.0 SSE4",
						"results": [
							[
								"1px",
								0.11649
							],
							[
								"10px",
								0.11549
							],
							[
								"100px",
								0.11527
							]
						]
					}
				]
			}
		]
	};

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map