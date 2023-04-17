﻿var HALL_IP = "127.0.0.1";
var HALL_CLIENT_PORT = 9001;
var HALL_ROOM_PORT = 9002;
var ACCOUNT_PRI_KEY = "^&*#$%()@";
var ROOM_PRI_KEY = "~!@#$(*&^%$&";
var LOCAL_IP = 'localhost';
module.exports={
	HALL_IP: HALL_IP,
	HALL_CLIENT_PORT: HALL_CLIENT_PORT,
	HALL_ROOM_PORT: HALL_ROOM_PORT,
	ACCOUNT_PRI_KEY: ACCOUNT_PRI_KEY,
	ROOM_PRI_KEY: ROOM_PRI_KEY,
	LOCAL_IP: LOCAL_IP,
	mysql: {
		HOST: '127.0.0.1',
		USER: 'root',
		PSWD: 'wweasd',
		DB: 'qipai',
		PORT: 3306,
	},
	account_server : {
		CLIENT_PORT: 9000,
		HALL_IP: HALL_IP,
		HALL_CLIENT_PORT: HALL_CLIENT_PORT,
		ACCOUNT_PRI_KEY: ACCOUNT_PRI_KEY,

		//
		DEALDER_API_IP: LOCAL_IP,
		DEALDER_API_PORT: 12581,
		VERSION: '20161227',
		APP_WEB: 'http://fir.im/2f17',
	},
	hall_server: {
		HALL_IP: HALL_IP,
		CLEINT_PORT: HALL_CLIENT_PORT,
		FOR_ROOM_IP: LOCAL_IP,
		ROOM_PORT: HALL_ROOM_PORT,
		ACCOUNT_PRI_KEY: ACCOUNT_PRI_KEY,
		ROOM_PRI_KEY: ROOM_PRI_KEY
	},
	game_server :{
		SERVER_ID: "001",

		//暴露给大厅服的HTTP端口号
		HTTP_PORT: 9003,
		//HTTP TICK的间隔时间，用于向大厅服汇报情况
		HTTP_TICK_TIME: 5000,
		//大厅服IP
		HALL_IP: LOCAL_IP,
		FOR_HALL_IP: LOCAL_IP,
		//大厅服端口
		HALL_PORT: HALL_ROOM_PORT,
		//与大厅服协商好的通信加密KEY
		ROOM_PRI_KEY: ROOM_PRI_KEY,

		//暴露给客户端的接口
		CLIENT_IP: HALL_IP,
		CLIENT_PORT: 10000,
	}
}