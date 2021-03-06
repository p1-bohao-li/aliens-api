module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/constants.js":
/*!*********************************!*\
  !*** ./src/config/constants.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nconst devConfig = {\n  MONGO_URL: 'mongodb://localhost:27017/test',\n  JWT_SECRET: 'this_is_a_jwt_secret'\n};\n\nconst testConfig = {\n  MONGO_URL: 'mongodb://localhost:27017/test',\n  JWT_SECRET: 'this_is_a_jwt_secret'\n};\n\nconst prodConfig = {\n  MONGO_URL: 'mongodb://localhost:27017/test',\n  JWT_SECRET: 'this_is_a_jwt_secret'\n};\n\nconst defaultConfig = {\n  PORT: process.env.PORT || 3000\n};\n\nfunction envConfig(env) {\n  switch (env) {\n    case 'development':\n      return devConfig;\n    case 'test':\n      return testConfig;\n    default:\n      return prodConfig;\n  }\n}\n\nexports.default = Object.assign({}, defaultConfig, envConfig(\"development\"));\n\n//# sourceURL=webpack:///./src/config/constants.js?");

/***/ }),

/***/ "./src/config/database.js":
/*!********************************!*\
  !*** ./src/config/database.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_mongoose2.default.Promise = global.Promise;\n\ntry {\n  _mongoose2.default.set('useCreateIndex', true);\n  _mongoose2.default.connect(_constants2.default.MONGO_URL, { useNewUrlParser: true });\n} catch (err) {\n  _mongoose2.default.createConnection(_constants2.default.MONGO_URL);\n}\n\n_mongoose2.default.connection.once('open', () => console.log('MongoDB running')).on('error', e => {\n  throw error;\n});\n\n//# sourceURL=webpack:///./src/config/database.js?");

/***/ }),

/***/ "./src/config/middleware.js":
/*!**********************************!*\
  !*** ./src/config/middleware.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar _morgan2 = _interopRequireDefault(_morgan);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst isDev = \"development\" === 'development';\nconst isProd = \"development\" === 'production';\n\nexports.default = app => {\n  if (isProd) {\n    app.use((0, _compression2.default)());\n    app.use((0, _helmet2.default)());\n  }\n\n  app.use((0, _cors2.default)());\n  app.use(_bodyParser2.default.json());\n  app.use(_bodyParser2.default.urlencoded({ extended: true }));\n  app.use(_passport2.default.initialize());\n\n  if (isDev) {\n    app.use((0, _morgan2.default)('dev'));\n  }\n};\n\n//# sourceURL=webpack:///./src/config/middleware.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _constants = __webpack_require__(/*! ./config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\n__webpack_require__(/*! ./config/database */ \"./src/config/database.js\");\n\nvar _middleware = __webpack_require__(/*! ./config/middleware */ \"./src/config/middleware.js\");\n\nvar _middleware2 = _interopRequireDefault(_middleware);\n\nvar _modules = __webpack_require__(/*! ./modules */ \"./src/modules/index.js\");\n\nvar _modules2 = _interopRequireDefault(_modules);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst app = (0, _express2.default)(); /* eslint-disable no-console */\n\n(0, _middleware2.default)(app);\n\napp.get('/', (req, res) => {\n  res.send('Waht do you want? Be more precise, please');\n});\n\n/**\n * Small test to verify that the api actually works\n */\napp.get('/ping', (req, res) => {\n  res.send('pong');\n});\n\n(0, _modules2.default)(app);\n\napp.listen(_constants2.default.PORT, err => {\n  if (err) {\n    throw err;\n  } else {\n    console.log(`\n      Server running on port: ${_constants2.default.PORT}\n      ---\n      Running on ${\"development\"}\n      ---\n      Make something great!\n    `);\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/admins/admin.controllers.js":
/*!*************************************************!*\
  !*** ./src/modules/admins/admin.controllers.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.signUp = signUp;\nexports.login = login;\nexports.getAlienAdmin = getAlienAdmin;\nexports.createAlien = createAlien;\nexports.showAlien = showAlien;\nexports.deleteAlien = deleteAlien;\nexports.modifyAlien = modifyAlien;\nexports.filterAlien = filterAlien;\n\nvar _admin = __webpack_require__(/*! ./admin.model */ \"./src/modules/admins/admin.model.js\");\n\nvar _admin2 = _interopRequireDefault(_admin);\n\nvar _alien = __webpack_require__(/*! ../aliens/alien.model */ \"./src/modules/aliens/alien.model.js\");\n\nvar _alien2 = _interopRequireDefault(_alien);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nasync function signUp(req, res) {\n\n  try {\n    const admin = await _admin2.default.create(req.body);\n    return res.status(201).json(admin);\n  } catch (e) {\n    return res.status(500).json(e);\n  }\n}\n\nfunction login(req, res, next) {\n\n  res.status(200).json(req.user);\n\n  return next();\n}\n\nasync function getAlienAdmin(req, res) {\n  try {\n    const admin = await _admin2.default.findOne({ _id: req.params.id });\n    return res.status(201).json(admin);\n  } catch (e) {\n    return res.status(500).json(e);\n  }\n}\n\nasync function createAlien(req, res) {\n\n  try {\n    const alien = await _alien2.default.create(req.body);\n    return res.status(201).json(alien);\n  } catch (e) {\n    return res.status(500).json(e);\n  }\n}\n\nasync function showAlien(req, res) {\n  try {\n\n    const alien = await _alien2.default.findOne({ _id: req.params.id });\n\n    if (!alien) return res.send('Alien not found');else return res.status(201).json(alien);\n  } catch (e) {\n    return res.status(500).json(e);\n  }\n}\n\nasync function deleteAlien(req, res) {\n  try {\n    _alien2.default.deleteOne({ _id: req.params.id }, function (err) {\n      if (err) res.status(500).json(e);\n\n      return res.send(\"Alien deleted from data base ! id: \" + req.params.id);\n    });\n  } catch (e) {\n    return res.status(500).json(e);\n  }\n}\n\nasync function modifyAlien(req, res) {\n  try {\n    await _alien2.default.findOneAndUpdate(req.params.id, { $set: req.body }, { new: true }, (err, alien) => {\n      if (err) return res.send(\"Failed to modify alien\");\n      res.status(200).json(alien);\n    });\n  } catch (e) {\n    return res.status(500).json(e);\n  }\n}\n\nfunction transformFilterObject(object) {\n  if (!object) throw \"The object cannot be empty!\";\n\n  let result = {};\n\n  for (let entry of Object.entries(object)) {\n    if (entry[1].length > 0) result[entry[0]] = entry[1];\n  }\n\n  return result;\n}\n\nasync function filterAlien(req, res) {\n  try {\n\n    let transformed_filter = transformFilterObject(req.body);\n\n    let aliens = await _alien2.default.find(transformed_filter);\n    if (!aliens) return res.send('Error or no match!');else return res.status(201).json(aliens);\n  } catch (e) {\n    return res.status(500).json(e);\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/admins/admin.controllers.js?");

/***/ }),

/***/ "./src/modules/admins/admin.model.js":
/*!*******************************************!*\
  !*** ./src/modules/admins/admin.model.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _bcryptNodejs = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _admin = __webpack_require__(/*! ./admin.validation */ \"./src/modules/admins/admin.validation.js\");\n\nvar _constants = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst AdminSchema = new _mongoose.Schema({\n  login: {\n    type: String,\n    required: [true, 'Login is required!'],\n    unique: true,\n    trim: true\n  },\n  password: {\n    type: String,\n    required: [true, 'Password is required!'],\n    trim: true,\n    minlength: [6, 'Password need to be longer!'],\n    validate: {\n      validator(password) {\n        return _admin.passwordReg.test(password);\n      },\n      message: '{VALUE} is not a valid password!'\n    }\n  }\n});\n\nAdminSchema.pre('save', function (next) {\n  if (this.isModified('password')) {\n    this.password = this._hashPassword(this.password);\n    return next();\n  }\n\n  return next();\n});\n\nAdminSchema.methods = {\n  _hashPassword(password) {\n    return (0, _bcryptNodejs.hashSync)(password);\n  },\n  authenticateAdmin(password) {\n    return (0, _bcryptNodejs.compareSync)(password, this.password);\n  },\n  createToken() {\n    return _jsonwebtoken2.default.sign({\n      _id: this._id,\n      type: 'admin'\n    }, _constants2.default.JWT_SECRET);\n  },\n  toJSON() {\n\n    return {\n      _id: this._id,\n      login: this.login,\n      token: `JWT ${this.createToken()}`\n    };\n  }\n};\n\nexports.default = _mongoose2.default.model('Admin', AdminSchema);\n\n//# sourceURL=webpack:///./src/modules/admins/admin.model.js?");

/***/ }),

/***/ "./src/modules/admins/admin.routes.js":
/*!********************************************!*\
  !*** ./src/modules/admins/admin.routes.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _authServices = __webpack_require__(/*! ../../services/auth.services.admin */ \"./src/services/auth.services.admin.js\");\n\nvar _admin = __webpack_require__(/*! ./admin.controllers */ \"./src/modules/admins/admin.controllers.js\");\n\nvar adminController = _interopRequireWildcard(_admin);\n\nvar _expressValidation = __webpack_require__(/*! express-validation */ \"express-validation\");\n\nvar _expressValidation2 = _interopRequireDefault(_expressValidation);\n\nvar _admin2 = __webpack_require__(/*! ./admin.validation */ \"./src/modules/admins/admin.validation.js\");\n\nvar _admin3 = _interopRequireDefault(_admin2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nconst routes = new _express.Router(); /**\n                                       * Defining routes for all users\n                                       */\n\n\nroutes.post('/signup', (0, _expressValidation2.default)(_admin3.default.signup), adminController.signUp);\nroutes.post('/login', _authServices.authLocalAdmins, adminController.login);\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/admins/admin.routes.js?");

/***/ }),

/***/ "./src/modules/admins/admin.routes.logged-in.js":
/*!******************************************************!*\
  !*** ./src/modules/admins/admin.routes.logged-in.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _admin = __webpack_require__(/*! ./admin.controllers */ \"./src/modules/admins/admin.controllers.js\");\n\nvar adminController = _interopRequireWildcard(_admin);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nconst routes = new _express.Router();\n\nroutes.post('/alien/create', adminController.createAlien);\nroutes.delete('/alien/delete/:id', adminController.deleteAlien);\nroutes.post('/alien/modify/:id', adminController.modifyAlien);\nroutes.get('/alien/show/:id', adminController.showAlien);\nroutes.post('/alien/filter', adminController.filterAlien);\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/admins/admin.routes.logged-in.js?");

/***/ }),

/***/ "./src/modules/admins/admin.validation.js":
/*!************************************************!*\
  !*** ./src/modules/admins/admin.validation.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.passwordReg = undefined;\n\nvar _joi = __webpack_require__(/*! joi */ \"joi\");\n\nvar _joi2 = _interopRequireDefault(_joi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Password validator, rules:\n * 1. At least 6 characters\n * 2. Must contain at least one upper case letter\n */\n\nconst passwordReg = exports.passwordReg = /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;\n\nexports.default = {\n  signup: {\n    login: _joi2.default.string().required(),\n    password: _joi2.default.string().regex(passwordReg).required()\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/admins/admin.validation.js?");

/***/ }),

/***/ "./src/modules/aliens/alien.controllers.js":
/*!*************************************************!*\
  !*** ./src/modules/aliens/alien.controllers.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.signUp = signUp;\nexports.login = login;\nexports.getAlienAdmin = getAlienAdmin;\nexports.showAlienInfo = showAlienInfo;\nexports.modifyAlienInfo = modifyAlienInfo;\nexports.followAnotherAlien = followAnotherAlien;\nexports.unFollowAnotherAlien = unFollowAnotherAlien;\nexports.showFriendRequests = showFriendRequests;\nexports.sendFriendRequest = sendFriendRequest;\nexports.acceptFriendRequest = acceptFriendRequest;\nexports.breakupWithAnotherAlien = breakupWithAnotherAlien;\nexports.showFollowers = showFollowers;\nexports.showFollowings = showFollowings;\n\nvar _alien = __webpack_require__(/*! ./alien.model */ \"./src/modules/aliens/alien.model.js\");\n\nvar _alien2 = _interopRequireDefault(_alien);\n\nvar _followInfo = __webpack_require__(/*! ./followInfo.model */ \"./src/modules/aliens/followInfo.model.js\");\n\nvar _followInfo2 = _interopRequireDefault(_followInfo);\n\nvar _request = __webpack_require__(/*! ./request.model */ \"./src/modules/aliens/request.model.js\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nvar _friend = __webpack_require__(/*! ./friend.model */ \"./src/modules/aliens/friend.model.js\");\n\nvar _friend2 = _interopRequireDefault(_friend);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nasync function signUp(req, res) {\n\n  try {\n    const alien = await _alien2.default.create(req.body);\n    return res.status(201).json(alien);\n  } catch (e) {\n    return res.status(500).json(e);\n  }\n}\n\nfunction login(req, res, next) {\n\n  res.status(200).json(req.user);\n\n  return next();\n}\n\nasync function getAlienAdmin(req, res) {\n  try {\n    const alien = await _alien2.default.findOne({ _id: req.params.id });\n    return res.status(201).json(alien);\n  } catch (e) {\n    return res.status(500).json(e);\n  }\n}\n\nasync function showAlienInfo(req, res) {\n  try {\n    return res.status(201).send(req.user);\n  } catch (e) {\n    return res.status(500).json(e);\n  }\n}\n\nasync function modifyAlienInfo(req, res) {\n  try {\n    await _alien2.default.findOneAndUpdate({ _id: req.user._id }, { $set: req.body }, { new: true }, (err, alien) => {\n      if (err) return res.send(\"Failed to modify alien\");\n      return res.status(200).json(alien);\n    });\n  } catch (e) {\n    return res.status(500).send(e);\n  }\n}\n\nasync function followAnotherAlien(req, res) {\n  try {\n    let followee = await _alien2.default.findOne({ _id: req.params.id });\n\n    if (!followee) return res.send(\"The followee's id is not found\");\n    if (req.user._id.equals(followee._id)) return res.send(\"Follower & followee cannot be the same!\");\n\n    // Check that if the follow info exists already\n    let followInfo = await _followInfo2.default.findOne({\n      follower_id: req.user._id,\n      followee_id: followee._id\n    });\n    if (followInfo) return res.status(500).send(\"This follow info exists already!\");\n\n    await _followInfo2.default.create({\n      follower_id: req.user._id,\n      follower_login: req.user.login,\n      followee_id: followee._id,\n      followee_login: followee.login,\n      date: new Date().toISOString()\n    }, (err, newFollowInfo) => {\n      if (err) return res.status(500).send(err);\n      return res.status(200).json(newFollowInfo);\n    });\n  } catch (e) {\n    return res.status(500).send(e);\n  }\n}\n\nasync function unFollowAnotherAlien(req, res) {\n  try {\n    await _followInfo2.default.remove({\n      follower_id: req.user._id,\n      followee_id: req.params.id\n    }, (err, _) => {\n      if (err) return res.status(500).send(err);\n      return res.status(200).json(\"Unfollow success!\");\n    });\n  } catch (e) {\n    return res.status(500).send(e);\n  }\n}\n\nasync function showFriendRequests(req, res) {\n  try {\n\n    console.log('=====================================');\n    console.log(\"The request user id is: \", req.user._id);\n    console.log(\"The request user lo is: \", req.user.login);\n    console.log('=====================================');\n\n    let requests = await _request2.default.find({ sendee_id: req.user._id });\n\n    if (!requests.length) return res.status(500).send('No friend requests found for this user');\n\n    return res.status(200).json(requests);\n  } catch (e) {\n    return res.status(500).send(e);\n  }\n}\n\nasync function sendFriendRequest(req, res) {\n  try {\n\n    let sendee = await _alien2.default.findOne({ _id: req.params.id });\n    if (!sendee) return res.status(500).send('Sendee not found in the database!');\n\n    // Check that if the friend request already exists\n    let request = await _request2.default.findOne({\n      sender_id: req.user._id,\n      sendee_id: sendee._id\n    });\n\n    if (request) return res.status(500).send(\"Friend request already exists, cannot resend friend request!\");\n\n    await _request2.default.create({\n      sender_id: req.user._id,\n      sender_login: req.user.login,\n      sendee_id: sendee._id,\n      sendee_login: sendee.login,\n      date: new Date().toISOString()\n    }, (err, newRequest) => {\n      if (err) return res.status(500).send(err);\n      return res.status(200).json(newRequest);\n    });\n  } catch (e) {\n    return res.status(500).send(e);\n  }\n}\n\nasync function acceptFriendRequest(req, res) {\n  try {\n\n    let requester = await _alien2.default.findOne({ _id: req.params.id });\n    if (!requester) return res.status(500).send(\"Requester not found in the database\");\n\n    // Step 1: remove a document from the \"requests\" collection\n    await _request2.default.deleteOne({\n      sender_id: requester._id,\n      sendee_id: req.user._id\n    }, err => {\n      if (err) return res.status(500).send(err);\n    });\n\n    const right_now = new Date().toISOString();\n\n    // Step 2: add two documents to the \"friends\" collection\n    const arr = [{\n      first_id: req.user._id,\n      first_login: req.user.login,\n      second_id: requester._id,\n      second_login: requester.login,\n      date: right_now\n    }, {\n      first_id: requester._id,\n      first_login: requester.login,\n      second_id: req.user._id,\n      second_login: req.user.login,\n      date: right_now\n    }];\n\n    const frindships = [];\n\n    let friendShip1 = await _friend2.default.findOne({\n      first_id: req.user._id,\n      second_id: requester._id\n    });\n\n    let friendShip2 = await _friend2.default.findOne({\n      first_id: requester._id,\n      second_id: req.user._id\n    });\n\n    if (!friendShip1) {\n      // Create the first friendship document\n      await _friend2.default.create(arr[0], (err, friendship) => {\n        if (err) return res.status(500).send(err);\n        frindships.push(friendship);\n      });\n    } else {\n      frindships.push(friendShip1);\n    }\n\n    if (!friendShip2) {\n      // Create the second friendship document\n      await _friend2.default.create(arr[1], (err, _) => {\n        if (err) return res.status(500).send(err);\n        frindships.push(frindships);\n      });\n    } else {\n      frindships.push(friendShip2);\n    }\n\n    console.log('=====================================');\n    console.log(\"The freindships are: \", frindships);\n    console.log('=====================================');\n\n    return res.status(200).send(\"Accepted friend request successfully!\");\n  } catch (e) {\n    return res.status(500).send(e);\n  }\n}\n\nasync function breakupWithAnotherAlien(req, res) {\n  try {\n\n    // Make sure that the alien that we want to break up with exists\n    let alien = await _alien2.default.findOne({ _id: req.params.id });\n    if (!alien) return res.status(500).send(\"The alien that you want to break up with doesn't even exist!\");\n\n    console.log('=====================================');\n    console.log(\"发起者   id:    \", req.user._id);\n    console.log(\"发起者   login: \", req.user.login);\n    console.log(\"被绝交者 id:    \", alien._id);\n    console.log(\"被绝交者 login: \", alien.login);\n\n    console.log('=====================================');\n\n    const friendships = [{\n      first_id: req.user._id,\n      second_id: alien._id\n    }, {\n      first_id: alien._id,\n      second_id: req.user._id\n    }];\n\n    for (let f of friendships) {\n      await _friend2.default.deleteOne(f, err => {\n        if (err) res.status(500).send('Failed to break up!');\n      });\n    }\n\n    return res.send('Successfully break up with the alien, now you are not friends anymore!');\n  } catch (e) {\n    return res.status(500).send(e);\n  }\n}\n\nasync function showFollowers(req, res) {\n  try {\n\n    let followers = await _followInfo2.default.find({ followee_id: req.user._id });\n\n    if (!followers.length) return res.status(500).send(\"No followers found for this alien.\");\n\n    followers = followers.map(followInfo => {\n      let result = {};\n      result.follower_id = followInfo.follower_id;\n      result.follower_login = followInfo.follower_login;\n      return result;\n    });\n\n    return res.status(200).send(followers);\n  } catch (e) {\n    return res.status(500).send(e);\n  }\n}\n\nasync function showFollowings(req, res) {\n  try {\n\n    console.log('=====================================');\n    console.log(\"Show following for this user: \", req.user);\n    console.log('=====================================');\n\n    let followings = await _followInfo2.default.find({ follower_id: req.user._id });\n    if (!followings.length) return res.status(500).send(\"No followings info found for this alien\");\n\n    followings = followings.map(followInfo => {\n      let result = {};\n      result.followee_id = followInfo.followee_id;\n      result.followee_login = followInfo.followee_login;\n      return result;\n    });\n\n    return res.status(200).json(followings);\n  } catch (e) {\n    return res.status(500).send(e);\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/aliens/alien.controllers.js?");

/***/ }),

/***/ "./src/modules/aliens/alien.model.js":
/*!*******************************************!*\
  !*** ./src/modules/aliens/alien.model.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _bcryptNodejs = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _alien = __webpack_require__(/*! ./alien.validation */ \"./src/modules/aliens/alien.validation.js\");\n\nvar _constants = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst AlienSchema = new _mongoose.Schema({\n  login: {\n    type: String,\n    required: [true, 'Login is required!'],\n    unique: true,\n    trim: true\n  },\n  password: {\n    type: String,\n    required: [true, 'Password is required!'],\n    trim: true,\n    minlength: [6, 'Password need to be longer!'],\n    validate: {\n      validator(password) {\n        return _alien.passwordReg.test(password);\n      },\n      message: '{VALUE} is not a valid password!'\n    }\n  },\n  name: {\n    type: String,\n    required: [true, 'Name is required!'],\n    trim: true\n  },\n  age: {\n    type: Number,\n    required: [true, 'Age is required!'],\n    trim: true,\n    validate: {\n      validator(age) {\n        return Number.isInteger(age) && age > 0;\n      }\n    }\n  },\n  race: {\n    type: String,\n    required: [true, 'Race is required!'],\n    trim: true\n  },\n  food: {\n    type: String,\n    required: [true, 'Food is required!'],\n    trim: true\n  }\n\n});\n\nAlienSchema.pre('save', function (next) {\n  if (this.isModified('password')) {\n    this.password = this._hashPassword(this.password);\n    return next();\n  }\n\n  return next();\n});\n\nAlienSchema.methods = {\n  _hashPassword(password) {\n    return (0, _bcryptNodejs.hashSync)(password);\n  },\n  authenticateAlien(password) {\n    return (0, _bcryptNodejs.compareSync)(password, this.password);\n  },\n  createToken() {\n    return _jsonwebtoken2.default.sign({\n      _id: this._id,\n      type: 'alien'\n    }, _constants2.default.JWT_SECRET);\n  },\n  toJSON() {\n    return {\n      _id: this._id,\n      login: this.login,\n      token: `JWT ${this.createToken()}`,\n      name: this.name,\n      age: this.age,\n      food: this.food,\n      race: this.race\n    };\n  }\n};\n\nexports.default = _mongoose2.default.model('Alien', AlienSchema);\n\n//# sourceURL=webpack:///./src/modules/aliens/alien.model.js?");

/***/ }),

/***/ "./src/modules/aliens/alien.routes.js":
/*!********************************************!*\
  !*** ./src/modules/aliens/alien.routes.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _expressValidation = __webpack_require__(/*! express-validation */ \"express-validation\");\n\nvar _expressValidation2 = _interopRequireDefault(_expressValidation);\n\nvar _authServices = __webpack_require__(/*! ../../services/auth.services.alien */ \"./src/services/auth.services.alien.js\");\n\nvar _alien = __webpack_require__(/*! ./alien.controllers */ \"./src/modules/aliens/alien.controllers.js\");\n\nvar alienController = _interopRequireWildcard(_alien);\n\nvar _alien2 = __webpack_require__(/*! ./alien.validation */ \"./src/modules/aliens/alien.validation.js\");\n\nvar _alien3 = _interopRequireDefault(_alien2);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst routes = new _express.Router(); /**\n                                       * Defining routes for all users\n                                       */\n\n\nroutes.post('/signup', (0, _expressValidation2.default)(_alien3.default.signup), alienController.signUp);\nroutes.post('/login', _authServices.authLocalAliens, alienController.login);\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/aliens/alien.routes.js?");

/***/ }),

/***/ "./src/modules/aliens/alien.routes.logged-in.js":
/*!******************************************************!*\
  !*** ./src/modules/aliens/alien.routes.logged-in.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _alien = __webpack_require__(/*! ./alien.controllers */ \"./src/modules/aliens/alien.controllers.js\");\n\nvar alienController = _interopRequireWildcard(_alien);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n/**\n * Defining routes for an individual\n */\n\nconst routes = new _express.Router();\n\nroutes.get('/profile', alienController.showAlienInfo);\nroutes.post('/profile/modify', alienController.modifyAlienInfo);\n\n// Functionalities about followers / followees\nroutes.post('/follow/:id', alienController.followAnotherAlien);\nroutes.post('/unfollow/:id', alienController.unFollowAnotherAlien);\n\n// Functionalities about friends\nroutes.get('/show-friend-requests', alienController.showFriendRequests);\nroutes.post('/send-friend-request/:id', alienController.sendFriendRequest);\nroutes.post('/accept-friend-request/:id', alienController.acceptFriendRequest);\nroutes.post('/breakup/:id', alienController.breakupWithAnotherAlien);\n\n// Show followers / folling\nroutes.get('/show-followers', alienController.showFollowers);\nroutes.get('/show-followings', alienController.showFollowings);\n\n// Show friends\n//routes.get('/show-friends');\n\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/aliens/alien.routes.logged-in.js?");

/***/ }),

/***/ "./src/modules/aliens/alien.validation.js":
/*!************************************************!*\
  !*** ./src/modules/aliens/alien.validation.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.passwordReg = undefined;\n\nvar _joi = __webpack_require__(/*! joi */ \"joi\");\n\nvar _joi2 = _interopRequireDefault(_joi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Password validator, rules:\n * 1. At least 6 characters\n * 2. Must contain at least one upper case letter\n */\n\nconst passwordReg = exports.passwordReg = /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;\n\nexports.default = {\n  signup: {\n    login: _joi2.default.string().required(),\n    password: _joi2.default.string().regex(passwordReg).required(),\n    name: _joi2.default.string().required(),\n    age: _joi2.default.number().integer().positive().required(),\n    race: _joi2.default.string().required(),\n    food: _joi2.default.string().required()\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/aliens/alien.validation.js?");

/***/ }),

/***/ "./src/modules/aliens/followInfo.model.js":
/*!************************************************!*\
  !*** ./src/modules/aliens/followInfo.model.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst FollowInfo = new _mongoose.Schema({\n  follower_id: {\n    type: String,\n    required: [true, 'follower_id is required!'],\n    trim: true\n  },\n  follower_login: {\n    type: String,\n    required: [true, 'follower_login is required!'],\n    trim: true\n  },\n  followee_id: {\n    type: String,\n    required: [true, 'followee_id is required!'],\n    trim: true\n  },\n  followee_login: {\n    type: String,\n    required: [true, 'followee_login is required!'],\n    trim: true\n  },\n  date: {\n    type: String,\n    required: [true, 'Date is required!'],\n    trim: true\n  }\n});\n\nFollowInfo.methods = {\n  toJSON() {\n    return {\n      _id: this._id,\n      follower_id: this.follower_id,\n      follower_login: this.follower_login,\n      followee_id: this.followee_id,\n      followee_login: this.followee_login,\n      date: this.date\n    };\n  }\n};\n\nexports.default = _mongoose2.default.model('FollowInfo', FollowInfo);\n\n//# sourceURL=webpack:///./src/modules/aliens/followInfo.model.js?");

/***/ }),

/***/ "./src/modules/aliens/friend.model.js":
/*!********************************************!*\
  !*** ./src/modules/aliens/friend.model.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst Friend = new _mongoose.Schema({\n  first_id: {\n    type: String,\n    required: [true, 'first_id is required!'],\n    trim: true\n  },\n  first_login: {\n    type: String,\n    required: [true, 'first_login is required!'],\n    trim: true\n  },\n  second_id: {\n    type: String,\n    required: [true, 'second_id is required!'],\n    trim: true\n  },\n  second_login: {\n    type: String,\n    required: [true, 'second_login is required!'],\n    trim: true\n  },\n  date: {\n    type: String,\n    required: [true, 'Date is required!'],\n    trim: true\n  }\n});\n\nFriend.methods = {\n  toJSON() {\n    return {\n      _id: this._id,\n      first_id: this.first_id,\n      first_login: this.first_login,\n      second_id: this.second_id,\n      second_login: this.second_login,\n      date: this.date\n    };\n  }\n};\n\nexports.default = _mongoose2.default.model('Friend', Friend);\n\n//# sourceURL=webpack:///./src/modules/aliens/friend.model.js?");

/***/ }),

/***/ "./src/modules/aliens/request.model.js":
/*!*********************************************!*\
  !*** ./src/modules/aliens/request.model.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst Request = new _mongoose.Schema({\n  sender_id: {\n    type: String,\n    required: [true, 'sender_id is required!'],\n    trim: true\n  },\n  sender_login: {\n    type: String,\n    required: [true, 'sender_login is required!'],\n    trim: true\n  },\n  sendee_id: {\n    type: String,\n    required: [true, 'sendee_id is required!'],\n    trim: true\n  },\n  sendee_login: {\n    type: String,\n    required: [true, 'sendee_login is required!'],\n    trim: true\n  },\n  date: {\n    type: String,\n    required: [true, 'Date is required!'],\n    trim: true\n  }\n});\n\nRequest.methods = {\n  toJSON() {\n    return {\n      _id: this._id,\n      sender_id: this.sender_id,\n      sender_login: this.sender_login,\n      sendee_id: this.sendee_id,\n      sendee_login: this.sendee_login,\n      date: this.date\n    };\n  }\n};\n\nexports.default = _mongoose2.default.model('Request', Request);\n\n//# sourceURL=webpack:///./src/modules/aliens/request.model.js?");

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _alien = __webpack_require__(/*! ./aliens/alien.routes */ \"./src/modules/aliens/alien.routes.js\");\n\nvar _alien2 = _interopRequireDefault(_alien);\n\nvar _alienRoutes = __webpack_require__(/*! ./aliens/alien.routes.logged-in */ \"./src/modules/aliens/alien.routes.logged-in.js\");\n\nvar _alienRoutes2 = _interopRequireDefault(_alienRoutes);\n\nvar _admin = __webpack_require__(/*! ./admins/admin.routes */ \"./src/modules/admins/admin.routes.js\");\n\nvar _admin2 = _interopRequireDefault(_admin);\n\nvar _adminRoutes = __webpack_require__(/*! ./admins/admin.routes.logged-in */ \"./src/modules/admins/admin.routes.logged-in.js\");\n\nvar _adminRoutes2 = _interopRequireDefault(_adminRoutes);\n\nvar _authServices = __webpack_require__(/*! ../services/auth.services.alien */ \"./src/services/auth.services.alien.js\");\n\nvar _authServices2 = __webpack_require__(/*! ../services/auth.services.admin */ \"./src/services/auth.services.admin.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = app => {\n\n  // Routes for aliens\n  app.use('/api/v1/aliens', _alien2.default);\n  app.use('/api/v1/aliens-logged-in', _authServices.authJwtAliens, _alienRoutes2.default);\n\n  // Routes for administrators\n  app.use('/api/v1/admins', _admin2.default);\n  app.use('/api/v1/admins-logged-in', _authServices2.authJwtAdmins, _adminRoutes2.default);\n};\n\n//# sourceURL=webpack:///./src/modules/index.js?");

/***/ }),

/***/ "./src/services/auth.services.admin.js":
/*!*********************************************!*\
  !*** ./src/services/auth.services.admin.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.authJwtAdmins = exports.authLocalAdmins = undefined;\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _passportLocal = __webpack_require__(/*! passport-local */ \"passport-local\");\n\nvar _passportLocal2 = _interopRequireDefault(_passportLocal);\n\nvar _passportJwt = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\n\nvar _admin = __webpack_require__(/*! ../modules/admins/admin.model */ \"./src/modules/admins/admin.model.js\");\n\nvar _admin2 = _interopRequireDefault(_admin);\n\nvar _constants = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Local strategy\nconst localOpts = {\n  usernameField: 'login'\n};\n\nconst localStrategy = new _passportLocal2.default(localOpts, async (login, password, done) => {\n  try {\n    const admin = await _admin2.default.findOne({ login });\n    if (!admin) {\n      return done(null, false);\n    } else if (!admin.authenticateAdmin(password)) {\n      return done(null, false);\n    }\n\n    return done(null, admin);\n  } catch (e) {\n    return done(e, false);\n  }\n});\n\n// Jwt strategy\nconst jwtOpts = {\n  jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeaderWithScheme(\"jwt\"),\n  secretOrKey: _constants2.default.JWT_SECRET\n};\n\nconst jwtStrategy = new _passportJwt.Strategy(jwtOpts, async (payload, done) => {\n  try {\n\n    const admin = await _admin2.default.findById(payload._id);\n\n    if (!admin) {\n      return done(null, false);\n    }\n\n    return done(null, admin);\n  } catch (e) {\n    return done(e, false);\n  }\n});\n\n_passport2.default.use('admin-local', localStrategy);\n_passport2.default.use('admin-jwt', jwtStrategy);\n\nconst authLocalAdmins = exports.authLocalAdmins = _passport2.default.authenticate('admin-local', { session: false });\nconst authJwtAdmins = exports.authJwtAdmins = _passport2.default.authenticate('admin-jwt', { session: false });\n\n//# sourceURL=webpack:///./src/services/auth.services.admin.js?");

/***/ }),

/***/ "./src/services/auth.services.alien.js":
/*!*********************************************!*\
  !*** ./src/services/auth.services.alien.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.authJwtAliens = exports.authLocalAliens = undefined;\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _passportLocal = __webpack_require__(/*! passport-local */ \"passport-local\");\n\nvar _passportLocal2 = _interopRequireDefault(_passportLocal);\n\nvar _passportJwt = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\n\nvar _alien = __webpack_require__(/*! ../modules/aliens/alien.model */ \"./src/modules/aliens/alien.model.js\");\n\nvar _alien2 = _interopRequireDefault(_alien);\n\nvar _constants = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Local strategy\nconst localOpts = {\n  usernameField: 'login'\n};\n\nconst localStrategy = new _passportLocal2.default(localOpts, async (login, password, done) => {\n  try {\n    const alien = await _alien2.default.findOne({ login });\n    if (!alien) {\n      return done(null, false);\n    } else if (!alien.authenticateAlien(password)) {\n      return done(null, false);\n    }\n\n    return done(null, alien);\n  } catch (e) {\n    return done(e, false);\n  }\n});\n\n// Jwt strategy\nconst jwtOpts = {\n  jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeaderWithScheme(\"jwt\"),\n  secretOrKey: _constants2.default.JWT_SECRET\n};\n\nconst jwtStrategy = new _passportJwt.Strategy(jwtOpts, async (payload, done) => {\n  try {\n    const alien = await _alien2.default.findById(payload._id);\n\n    if (!alien) {\n      return done(null, false);\n    }\n\n    return done(null, alien);\n  } catch (e) {\n    return done(e, false);\n  }\n});\n\n_passport2.default.use(localStrategy);\n_passport2.default.use(jwtStrategy);\n\nconst authLocalAliens = exports.authLocalAliens = _passport2.default.authenticate('local', { session: false });\nconst authJwtAliens = exports.authJwtAliens = _passport2.default.authenticate('jwt', { session: false });\n\n//# sourceURL=webpack:///./src/services/auth.services.alien.js?");

/***/ }),

/***/ "bcrypt-nodejs":
/*!********************************!*\
  !*** external "bcrypt-nodejs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt-nodejs\");\n\n//# sourceURL=webpack:///external_%22bcrypt-nodejs%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-validation":
/*!*************************************!*\
  !*** external "express-validation" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validation\");\n\n//# sourceURL=webpack:///external_%22express-validation%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"joi\");\n\n//# sourceURL=webpack:///external_%22joi%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-jwt\");\n\n//# sourceURL=webpack:///external_%22passport-jwt%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

/***/ })

/******/ });