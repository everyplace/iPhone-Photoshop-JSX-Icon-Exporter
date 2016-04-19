﻿//load library﻿#include "lib/smartProcess.jsx";#include "lib/displaySelectionUI.jsx";var userSelections = displaySelectionUI();var validFiles = ["iTunesArtwork.psd","LaunchPad@2x.psd","LaunchPhone@2x.psd","logo_dark@2x.psd","logo_white@2x.psd"];var generateConfigs = function(file) {	var configiOS = {		"inputFile":userSelections.userInputFolder + "/" + userSelections.file,		"confirm":false,		"outputBaseFolder":userSelections.userOutputFolder,		"outputFolder": "iOS",		"traverseLayers":true	};	var configAndroid = {		"inputFile":userSelections.userInputFolder + "/" + userSelections.file,		"confirm":false,		"outputBaseFolder":userSelections.userOutputFolder,		"outputFolder":"Android",		"traverseLayers":true	};	if(file === "iTunesArtwork.psd") {		configiOS.sizes = [	    {"x":76,"y":76,"name":"Icon-76.png"},	    {"x":152,"y":152,"name":"Icon-76@2x.png"},	    {"x":167,"y":167,"name":"Icon-83.5@2x.png"},	    {"x":120,"y":120,"name":"Icon-60@2x.png"},	    {"x":180,"y":180,"name":"Icon-60@3x.png"},	    {"x":40,"y":40,"name":"Icon-40.png"},	    {"x":80,"y":80,"name":"Icon-40@2x.png"},	    {"x":120,"y":120,"name":"Icon-40@3x.png"},	    {"x":29,"y":29,"name":"Icon-29.png"},	    {"x":58,"y":58,"name":"Icon-29@2x.png"},	    {"x":87,"y":87,"name":"Icon-29@3x.png"},	    {"x":1024,"y":1024,"name":"iTunesArtwork.png"}	  ];		configAndroid.sizes = [			{"x":64,"y":64,"name":"icon.png","subFolder":"drawable-hdpi","canvasSize":{"x":72,"y":72}},			{"x":84,"y":84,"name":"icon.png","subFolder":"drawable-xhdpi","canvasSize":{"x":96,"y":96}},			{"x":128,"y":128,"name":"icon.png","subFolder":"drawable-xxhdpi","canvasSize":{"x":144,"y":144}},			{"x":168,"y":168,"name":"icon.png","subFolder":"drawable-xxxhdpi","canvasSize":{"x":192,"y":192}},			{"x":512,"y":512,"name":"GooglePlayIcon.png"}		];		return [configiOS, configAndroid];	} else if(file === "LaunchPad@2x.psd") {		config.sizes = [			{"x":600,"y":600,"name":"LaunchPad.png"},			{"x":1200,"y":1200,"name":"LaunchPad@2x.png"}		];		config.outputFolder="iOS",		configArray.push(config);		return configArray;	} else if(file === "LaunchPhone@2x.psd") {		config.sizes = [			{"x":270,"y":270,"name":"LaunchPhone.png"},			{"x":540,"y":540,"name":"LaunchPhone@2x.png"},			{"x":1000,"y":1000,"name":"LaunchPhone@3x.png"}	  ];		config.outputFolder="iOS",		configArray.push(config);		config.sizes = [			{"x":468,"y":468,"name":"branding_logo_large.png","subFolder":"drawable-hdpi"},			{"x":624,"y":624,"name":"branding_logo_large.png","subFolder":"drawable-xhdpi"},			{"x":936,"y":936,"name":"branding_logo_large.png","subFolder":"drawable-xxhdpi"},			{"x":1248,"y":1248,"name":"branding_logo_large.png","subFolder":"drawable-xxxhdpi"}		];		config.outputFolder="Android",		configArray.push(config);		return configArray;	} else if(file === "logo_dark@2x.psd") {		config.sizes = [			{"x":172,"y":32,"name":"logo_dark.png"},			{"x":340,"y":64,"name":"logo_dark@2x.png"},			{"x":510,"y":96,"name":"logo_dark@3x.png"}		];		config.outputFolder="iOS",		configArray.push(config);		return configArray;	} else if(file === "logo_white@2x.psd") {		config.sizes = [			{"x":172,"y":32,"name":"logo_white.png"},			{"x":340,"y":64,"name":"logo_white@2x.png"},			{"x":510,"y":96,"name":"logo_white@3x.png"}		];		config.outputFolder="iOS",		configArray.push(config);		config.sizes = [			{"x":255,"y":48,"name":"logo_default.png","subFolder":"drawable-hdpi"},			{"x":340,"y":64,"name":"logo_default.png","subFolder":"drawable-xhdpi"},			{"x":510,"y":96,"name":"logo_default.png","subFolder":"drawable-xxhdpi"},			{"x":680,"y":128,"name":"logo_default.png","subFolder":"drawable-xxxhdpi"},			{"x":255,"y":48,"name":"logo_default_trans.png","subFolder":"drawable-hdpi"},			{"x":340,"y":64,"name":"logo_default_trans.png","subFolder":"drawable-xhdpi"},			{"x":510,"y":96,"name":"logo_default_trans.png","subFolder":"drawable-xxhdpi"},			{"x":680,"y":128,"name":"logo_default_trans.png","subFolder":"drawable-xxxhdpi"},			{"x":112,"y":21,"name":"widget_header.png","subFolder":"drawable-hdpi"},			{"x":149,"y":28,"name":"widget_header.png","subFolder":"drawable-xhdpi"},			{"x":224,"y":42,"name":"widget_header.png","subFolder":"drawable-xxhdpi"},			{"x":298,"y":56,"name":"widget_header.png","subFolder":"drawable-xxxhdpi"}		];		config.outputFolder="Android",		configArray.push(config);		return configArray;	}}if(userSelections.file === "All files"){	$.writeln("-------Processing all files. This is going to take a while.-------");	for (var i = 0; i<validFiles.length; i++) {		var configs = generateConfigs(validFiles[i]);		for(var j = 0; j<configs.length; j++) {			configs[j].inputFile = userSelections.userInputFolder + "/" + validFiles[i];			smartProcess(configs[j]);		}	}} else  {	$.writeln("-------Processing just an individual file-------")	var configs = generateConfigs(userSelections.file);	for(var i = 0; i<configs.length; i++) {		smartProcess(configs[i]);	}}// $.writeln(userSelections);// smartProcess(config);